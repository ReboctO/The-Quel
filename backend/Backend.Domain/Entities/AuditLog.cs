using System;

namespace Backend.Domain.Entities
{
    public class AuditLog
    {
        public int Id { get; set; }
        public int AdminId { get; set; }
        public string ActionType { get; set; } = string.Empty; // Create, Update, Delete
        public string TargetEntity { get; set; } = string.Empty; // Users, Roles, etc.
        public int? TargetId { get; set; }
        public DateTime Timestamp { get; set; } = DateTime.UtcNow;

        public User? Admin { get; set; }
    }
}
