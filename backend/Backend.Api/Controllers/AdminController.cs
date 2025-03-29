// using Backend.Application.Services;
// using Backend.Domain.Entities;
// using Microsoft.AspNetCore.Mvc;

// namespace Backend.Api.Controllers
// {
//     [ApiController]
//     [Route("api/[controller]")]
//     public class AdminController : ControllerBase
//     {
//         private readonly AdminService _adminService;

//         public AdminController(AdminService adminService)
//         {
//             _adminService = adminService;
//         }

//         // ✅ Get all users
//         [HttpGet("users")]
//         public async Task<IActionResult> GetAllUsers()
//         {
//             var users = await _adminService.GetAllUsersAsync();
//             return Ok(users);
//         }

//         // ✅ Add a new user
//         [HttpPost("users")]
//         public async Task<IActionResult> AddUser([FromBody] User user, [FromQuery] int adminId)
//         {
//             var result = await _adminService.AddUserAsync(user, adminId);
//             if (result)
//                 return Ok(new { message = "User added successfully." });
//             return BadRequest(new { message = "Failed to add user." });
//         }

//         // ✅ Update user
//         [HttpPut("users/{id}")]
//         public async Task<IActionResult> UpdateUser(int id, [FromBody] User user, [FromQuery] int adminId)
//         {
//             user.Id = id;
//             var result = await _adminService.UpdateUserAsync(user, adminId);
//             if (result)
//                 return Ok(new { message = "User updated successfully." });
//             return NotFound(new { message = "User not found." });
//         }

//         // ✅ Delete user
//         [HttpDelete("users/{id}")]
//         public async Task<IActionResult> DeleteUser(int id, [FromQuery] int adminId)
//         {
//             var result = await _adminService.DeleteUserAsync(id, adminId);
//             if (result)
//                 return Ok(new { message = "User deleted successfully." });
//             return NotFound(new { message = "User not found." });
//         }
//     }
// }
