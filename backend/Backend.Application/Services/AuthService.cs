using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using Backend.Domain.Entities;
using Backend.Infrastructure.Repositories;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;

namespace Backend.Application.Services
{
    public class AuthService
    {
        private readonly UserRepository _userRepository;
        private readonly IConfiguration _configuration;

        public AuthService(UserRepository userRepository, IConfiguration configuration)
        {
            _userRepository = userRepository;
            _configuration = configuration;
        }

       public async Task<string?> RegisterUserAsync(string username, string email, string password, string roleName)
{
    Console.WriteLine($"Received roleName: {roleName}"); // Debugging log
    
    var existingUser = await _userRepository.GetUserByEmailAsync(email);
    if (existingUser != null)
        return null;

    var role = await _userRepository.GetRoleByNameAsync(roleName);
    
    if (role == null)
    {
        Console.WriteLine($"Role not found: {roleName}"); // Log if the role isn't found
        return null;
    }

    Console.WriteLine($"Assigned RoleId: {role.Id} ({role.RoleName})"); // Log role assignment

    var passwordHash = BCrypt.Net.BCrypt.HashPassword(password);
    var user = new User
    {
        Username = username,
        Email = email,
        Password = passwordHash,
        RoleId = role.Id // Ensure correct RoleId assignment
    };

    await _userRepository.AddUserAsync(user);
    return GenerateJwtToken(user);
}


        public async Task<string?> LoginUserAsync(string email, string password)
        {
            var user = await _userRepository.GetUserByEmailAsync(email);
            if (user == null || !BCrypt.Net.BCrypt.Verify(password, user.Password))
                return null; // Invalid credentials

            return GenerateJwtToken(user);
        }

        private string GenerateJwtToken(User user)
        {
            // Get the secret key from configuration
            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_configuration["Jwt:Key"]!));
            var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);

            // Create claims for the user
            var claims = new[]
            {
                new Claim(ClaimTypes.NameIdentifier, user.Id.ToString()),
                new Claim(ClaimTypes.Name, user.Username),
                new Claim(ClaimTypes.Email, user.Email),
                new Claim(ClaimTypes.Role, user.Role.RoleName)
            };

            // Generate the JWT token
            var token = new JwtSecurityToken(
                issuer: _configuration["Jwt:Issuer"],
                audience: _configuration["Jwt:Issuer"],
                claims: claims,
                expires: DateTime.UtcNow.AddHours(2),
                signingCredentials: creds
            );

            return new JwtSecurityTokenHandler().WriteToken(token);
        }
    }
}
