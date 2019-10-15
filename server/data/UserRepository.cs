using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using server.Models;

namespace server.data
{
	public class UserRepository : IUserRepository
	{
		private readonly DataContext _context;
		public UserRepository(DataContext context)
		{
			_context = context;
		}
		public async Task<User> GetUser(int id)
		{
			var user = await _context.Users
                .Include(u => u.Comments)
                .Include(u => u.Organizations)
                .Include(u => u.Invitations)
                .Include(u => u.CreatedTasks)
                .Include(u => u.AssignedTasks)
                .Include(u => u.WatchedTasks)
                .FirstOrDefaultAsync(u => u.Id == id);
            return user;
		}

		public async Task<IEnumerable<User>> GetUsers()
		{
			var users = await _context.Users
                .Include(u => u.Comments)
                .Include(u => u.Organizations)
                .Include(u => u.Invitations)
                .Include(u => u.CreatedTasks)
                .Include(u => u.AssignedTasks)
                .Include(u => u.WatchedTasks)
                .ToListAsync();
            return users;
		}
	}
}
