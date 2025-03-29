namespace Backend.Domain.Entities
{
    public class VisitorPass
    {
        public int PassID { get; set; }
        public int UserID { get; set; }
        public string VisitorName { get; set; } = string.Empty;
        public string? Purpose { get; set; }
        public string Status { get; set; } = "Pending";
        public DateTime RequestedAt { get; set; } = DateTime.UtcNow;

        // Navigation Property
        public User? User { get; set; }
    }
}
