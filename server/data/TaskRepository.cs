using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
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
		public async Task<Task> Add(Task task)
		{
            var taskTracker = await _context.Tasks.AddAsync(task);
            var watchers = new List<TaskWatch>();
            watchers.Add(new TaskWatch { TaskId = taskTracker.Entity.Id, UserId = taskTracker.Entity.CreatorId });
            if (taskTracker.Entity.CreatorId != taskTracker.Entity.AssigneeId)
            {
                watchers.Add(new TaskWatch { TaskId = taskTracker.Entity.Id, UserId = taskTracker.Entity.AssigneeId });
            }
            await _context.SaveChangesAsync();
            return taskTracker.Entity;
        }

		public Task<Task> Assign(Task task, User user)
		{
			throw new System.NotImplementedException();
		}

		public Task<Task> Delete(Task task)
		{
			throw new System.NotImplementedException();
		}

        public async Task<IEnumerable<Task>> GetTasksByOrganization(int OrganizationId)
        {
            var tasks = await _context.Tasks
                .Where(x => x.OrganizationId == OrganizationId)
                .ToListAsync();
            return tasks;
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
