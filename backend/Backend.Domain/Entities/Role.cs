namespace Backend.Domain.Entities
{
    public class Role
    {
        public int RoleID { get; set; }
        public string RoleName { get; set; } = string.Empty;

        // Navigation Property (if needed)
        public ICollection<Admin>? Admins { get; set; }
    }
}
