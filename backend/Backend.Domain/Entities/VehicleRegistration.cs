namespace Backend.Domain.Entities
{
    public class VehicleRegistration
    {
        public int VehicleID { get; set; }
        public int UserID { get; set; }
        public string PlateNumber { get; set; } = string.Empty;
        public string? VehicleType { get; set; }
        public DateTime RegistrationDate { get; set; } = DateTime.UtcNow;

        // Navigation Property
        public User? User { get; set; }
    }
}
