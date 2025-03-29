namespace Backend.Domain.Entities
{
    public class Announcement
    {
        public int AnnouncementID { get; set; }
        public string Title { get; set; } = string.Empty;
        public string Content { get; set; } = string.Empty;
        public int CreatedBy { get; set; }
        public DateTime CreatedAt { get; set; } = DateTime.UtcNow;

        // Navigation Property
        public Admin? Admin { get; set; }
    }
}
