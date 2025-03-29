namespace Backend.Domain.Entities
{
    public class Reservation
    {
        public int ReservationID { get; set; }
        public int FacilityID { get; set; }
        public int UserID { get; set; }
        public DateTime ReservedDate { get; set; }
        public string Status { get; set; } = "Pending";

        // Navigation Properties
        public Facility? Facility { get; set; }
        public User? User { get; set; }
    }
}
