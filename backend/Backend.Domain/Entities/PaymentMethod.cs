namespace Backend.Domain.Entities
{
    public class PaymentMethod
    {
        public int PaymentMethodID { get; set; }
        public string MethodName { get; set; } = string.Empty;
        public string Status { get; set; } = "Active";

        // Navigation Property
        public ICollection<Payment>? Payments { get; set; }
    }
}
