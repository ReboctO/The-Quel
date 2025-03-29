// using Backend.Domain.Entities;
// using Backend.Infrastructure.Repositories;

// namespace Backend.Application.Services
// {
//     public class AdminService
//     {
//         private readonly UserRepository _userRepository;
//         private readonly AuditLogRepository _auditLogRepository;

//         public AdminService(UserRepository userRepository, AuditLogRepository auditLogRepository)
//         {
//             _userRepository = userRepository;
//             _auditLogRepository = auditLogRepository;
//         }

//         // ✅ Get all users
//         public async Task<List<User>> GetAllUsersAsync()
//         {
//             return await _userRepository.GetAllUsersAsync();
//         }

//         // ✅ Add a new user
//         public async Task<bool> AddUserAsync(User user, int adminId)
//         {
//             var result = await _userRepository.AddUserAsync(user);
//             if (result)
//             {
//                 await LogAdminAction(adminId, "Create", "User", user.Id);
//             }
//             return result;
//         }

//         // ✅ Update user
//         public async Task<bool> UpdateUserAsync(User user, int adminId)
//         {
//             var result = await _userRepository.UpdateUserAsync(user);
//             if (result)
//             {
//                 await LogAdminAction(adminId, "Update", "User", user.Id);
//             }
//             return result;
//         }

//         // ✅ Delete user
//         public async Task<bool> DeleteUserAsync(int userId, int adminId)
//         {
//             var result = await _userRepository.DeleteUserAsync(userId);
//             if (result)
//             {
//                 await LogAdminAction(adminId, "Delete", "User", userId);
//             }
//             return result;
//         }

//         // ✅ Log Admin Actions
//         private async Task LogAdminAction(int adminId, string actionType, string targetEntity, int targetId)
//         {
//             var log = new AuditLog
//             {
//                 AdminId = adminId,
//                 ActionType = actionType,
//                 TargetEntity = targetEntity,
//                 TargetId = targetId
//             };
//             await _auditLogRepository.AddLogAsync(log);
//         }
//     }
// }
