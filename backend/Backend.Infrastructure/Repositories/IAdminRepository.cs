using Backend.Domain.Entities;


namespace Backend.Infrastructure.Repositories
{
    public interface IAdminRepository
    {
        Task<Admin?> GetAdminByEmailAsync(string email);
        Task<Admin?> GetAdminByIdAsync(int adminId);
        Task<Role?> GetRoleByIdAsync(int roleId);
        Task AddAdminAsync(Admin admin);
        Task UpdateAdminAsync(Admin admin);
        Task DeleteAdminAsync(int adminId);
    }
}
