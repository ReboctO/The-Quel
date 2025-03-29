using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Backend.Domain.Entities;
using Backend.Persistence.Data;

namespace Backend.Infrastructure.Repositories
{
    public class AdminRepository : IAdminRepository
    {
        private readonly AppDbContext _context;

        public AdminRepository(AppDbContext context)
        {
            _context = context;
        }

        // Get admin by username
       public async Task<Admin?> GetAdminByEmailAsync(string email)
        {
            return await _context.Admin
                .FirstOrDefaultAsync(a => a.Email== email);
        }


        // Get admin by ID
        public async Task<Admin?> GetAdminByIdAsync(int adminId)
        {
            return await _context.Admin.FindAsync(adminId);
        }

        // Get role by ID
        public async Task<Role?> GetRoleByIdAsync(int roleId)
        {
            return await _context.Roles.FindAsync(roleId);
        }

        // Add new admin
        public async Task AddAdminAsync(Admin admin)
        {
            _context.Admin.Add(admin);
            await _context.SaveChangesAsync();
        }

        // Update admin details
        public async Task UpdateAdminAsync(Admin admin)
        {
            _context.Admin.Update(admin);
            await _context.SaveChangesAsync();
        }

        // Delete admin by ID
        public async Task DeleteAdminAsync(int adminId)
        {
            var admin = await _context.Admin.FindAsync(adminId);
            if (admin != null)
            {
                _context.Admin.Remove(admin);
                await _context.SaveChangesAsync();
            }
        }
    }
}
