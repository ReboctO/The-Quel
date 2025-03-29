using Backend.Domain.Entities;
using Microsoft.EntityFrameworkCore;

namespace Backend.Persistence.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
        {
        }

        public DbSet<User> Users { get; set; }
        public DbSet<Role> Roles { get; set; }
        public DbSet<AuditLog> AuditLogs { get; set; }  
        public DbSet<Admin> Admin { get; set; } // ✅ Fixed: Pluralized Admin Table

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            // ✅ Define User-Role Relationship
            // modelBuilder.Entity<User>()
            //     .HasOne(u => u.Role) 
            //     .WithMany()
            //     .HasForeignKey(u => u.RoleId);
            modelBuilder.Entity<Admin>()
                .HasOne(a => a.Role)
                .WithMany(r => r.Admins)
                .HasForeignKey(a => a.RoleID)
                .OnDelete(DeleteBehavior.Restrict); 

            // ✅ Define AuditLog-Admin Relationship
            modelBuilder.Entity<AuditLog>()
                .HasOne(a => a.Admin)
                .WithMany()  
                .HasForeignKey(a => a.AdminId);

            base.OnModelCreating(modelBuilder);
        }
    }
}
