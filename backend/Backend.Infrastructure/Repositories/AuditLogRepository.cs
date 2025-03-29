using Backend.Domain.Entities;
using Backend.Persistence.Data;
using Microsoft.EntityFrameworkCore;

namespace Backend.Infrastructure.Repositories
{
    public class AuditLogRepository
    {
        private readonly AppDbContext _context;

        public AuditLogRepository(AppDbContext context)
        {
            _context = context;
        }

        // ✅ Add Log
        public async Task AddLogAsync(AuditLog log)
        {
            await _context.AuditLogs.AddAsync(log);
            await _context.SaveChangesAsync();
        }

        // ✅ Get All Logs
        public async Task<List<AuditLog>> GetLogsAsync()
        {
            return await _context.AuditLogs
                .Include(a => a.Admin)
                .ToListAsync();
        }
    }
}
