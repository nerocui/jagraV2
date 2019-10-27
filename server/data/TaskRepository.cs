using System.Threading.Tasks;
using server.Models;
using Task = server.Models.Task;

namespace server.data
{
	public class TaskRepository : ITaskRepository
	{
		private readonly DataContext _context;
		public TaskRepository(DataContext context)
		{
			_context = context;
		}
		public Task<Task> Add(Task task)
		{
			throw new System.NotImplementedException();
		}

		public Task<Task> Assign(Task task, User user)
		{
			throw new System.NotImplementedException();
		}

		public Task<Task> Delete(Task task)
		{
			throw new System.NotImplementedException();
		}

		public Task<Task> Modify(Task task)
		{
			throw new System.NotImplementedException();
		}

		public Task<Task> Unassign(Task task)
		{
			throw new System.NotImplementedException();
		}

		public Task<Task> Unwatch(Task task, User user)
		{
			throw new System.NotImplementedException();
		}

		public Task<Task> Watch(Task task, User user)
		{
			throw new System.NotImplementedException();
		}
	}
}
