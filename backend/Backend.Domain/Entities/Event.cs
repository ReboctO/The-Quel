namespace Backend.Domain.Entities
{
    public class Event
    {
        public int EventID { get; set; }
        public string Title { get; set; } = string.Empty;
        public string? Description { get; set; }
        public DateTime EventDate { get; set; }
        public int CreatedBy { get; set; }

        // Navigation Property
        public Admin? Creator { get; set; }
    }
}
