namespace Backend.Domain.Entities
{
    public class Admin
    {
        public int AdminID { get; set; }
        public required string Username { get; set; } = string.Empty;
        public required string Email { get; set; } = string.Empty;
        public required string Password { get; set; } = string.Empty;
        public int RoleID { get; set; }

        // Navigation Property
        public Role? Role { get; set; }
    }
}
