namespace Backend.Domain.Entities
{
    public class Payment
    {
        public int PaymentID { get; set; }
        public int BillID { get; set; }
        public int PaymentMethodID { get; set; }
        public decimal AmountPaid { get; set; }
        public DateTime PaymentDate { get; set; } = DateTime.UtcNow;

        // Navigation Properties
        public Bill? Bill { get; set; }
        public PaymentMethod? PaymentMethod { get; set; }
    }
}
