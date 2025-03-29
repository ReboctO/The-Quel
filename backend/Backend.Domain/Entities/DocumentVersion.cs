namespace Backend.Domain.Entities
{
    public class DocumentVersion
    {
        public int VersionID { get; set; }
        public string DocumentName { get; set; } = string.Empty;
        public int VersionNumber { get; set; }
        public int UploadedBy { get; set; }
        public DateTime UploadedAt { get; set; } = DateTime.UtcNow;

        // Navigation Property
        public Admin? UploadedAdmin { get; set; }
    }
}
