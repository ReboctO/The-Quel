using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using Backend.Domain.Entities;
using Backend.Infrastructure.Repositories;
using Microsoft.IdentityModel.Tokens;

namespace Backend.Application.Services
{
    public class AuthService
    {
        private readonly AdminRepository _adminRepository;
        private readonly IConfiguration _configuration;

        public AuthService(AdminRepository adminRepository, IConfiguration configuration)
        {
            _adminRepository = adminRepository;
            _configuration = configuration;
        }

        public async Task<string?> RegisterAdminAsync(string username, string email, string password, int roleId)
            {
                var existingAdmin = await _adminRepository.GetAdminByEmailAsync(email);
                if (existingAdmin != null)
                    return null; // Username already exists.

                var role = await _adminRepository.GetRoleByIdAsync(roleId);
                if (role == null)
                    return null; // Invalid role.

                var passwordHash = BCrypt.Net.BCrypt.HashPassword(password);
                var admin = new Admin
                {
                    Username = username,
                    Email = email, // ✅ Store Email
                    Password = passwordHash,
                    RoleID = role.RoleID
                };

                await _adminRepository.AddAdminAsync(admin);
                return GenerateJwtToken(admin);
            }



        public async Task<string?> LoginUserAsync(string email, string password)
        {
            var admin = await _adminRepository.GetAdminByEmailAsync(email);
            
            if (admin == null)
            {
                Console.WriteLine($"Admin not found with email: {email}");
                return null; // Invalid credentials
            }

            Console.WriteLine($"Admin found: {admin.Email}");

            if (!BCrypt.Net.BCrypt.Verify(password, admin.Password))
            {
                Console.WriteLine("Password does not match.");
                return null;
            }

            Console.WriteLine("Login successful, generating token...");
            return GenerateJwtToken(admin);
        }


        private string GenerateJwtToken(Admin admin)
        {
            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_configuration["Jwt:Key"]!));
            var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);

            var claims = new[]
            {
                new Claim(ClaimTypes.NameIdentifier, admin.AdminID.ToString()),
                new Claim(ClaimTypes.Name, admin.Username),
                new Claim(ClaimTypes.Email, admin.Email),
                new Claim(ClaimTypes.Role, admin.Role?.RoleName ?? "Admin") // ✅ Handle RoleName
            };

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
