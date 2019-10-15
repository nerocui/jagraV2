using System.Threading.Tasks;
using server.Models;

namespace server.data
{
	public class TaskRepository : ITaskRepository
	{
		private readonly DataContext _context;
		public TaskRepository(DataContext context)
		{
			_context = context;
		}
		public Task<Models.Task> Add(Models.Task task)
		{
			throw new System.NotImplementedException();
		}

		public Task<Models.Task> Assign(Models.Task task, User user)
		{
			throw new System.NotImplementedException();
		}

		public Task<Models.Task> Delete(Models.Task task)
		{
			throw new System.NotImplementedException();
		}

		public Task<Models.Task> Modify(Models.Task task)
		{
			throw new System.NotImplementedException();
		}

		public Task<Models.Task> Unassign(Models.Task task)
		{
			throw new System.NotImplementedException();
		}

		public Task<Models.Task> Unwatch(Models.Task task, User user)
		{
			throw new System.NotImplementedException();
		}

		public Task<Models.Task> Watch(Models.Task task, User user)
		{
			throw new System.NotImplementedException();
		}
	}
}
