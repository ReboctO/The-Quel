namespace Backend.Domain.Entities
{
    public class ServiceRequest
    {
        public int RequestID { get; set; }
        public int UserID { get; set; }
        public string Description { get; set; } = string.Empty;
        public string Priority { get; set; } = "Medium";
        public string Status { get; set; } = "Open";
        public int? AssignedTo { get; set; }
        public DateTime CreatedAt { get; set; } = DateTime.UtcNow;

        // Navigation Properties
        public User? User { get; set; }
        public Admin? AssignedAdmin { get; set; }
    }
}
