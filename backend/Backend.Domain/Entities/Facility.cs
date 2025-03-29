namespace Backend.Domain.Entities
{
    public class Facility
    {
        public int FacilityID { get; set; }
        public string FacilityName { get; set; } = string.Empty;
        public string? Description { get; set; }
        public string AvailabilityStatus { get; set; } = "Available";
    }
}
