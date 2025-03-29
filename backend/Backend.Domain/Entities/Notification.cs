namespace Backend.Domain.Entities
{
    public class Notification
    {
        public int NotificationID { get; set; }
        public int AnnouncementID { get; set; }
        public int UserID { get; set; }
        public DateTime SentAt { get; set; } = DateTime.UtcNow;

        // Navigation Properties
        public Announcement? Announcement { get; set; }
        public User? User { get; set; }
    }
}
