using System.Threading.Tasks;
using server.Models;
using Task = server.Models.Task;

namespace server.data
{
    public interface ITaskRepository
    {
         Task<Task> Add(Task task);
         Task<Task> Delete(Task task);
         Task<Task> Assign(Task task, User user);
         Task<Task> Unassign(Task task);
         Task<Task> Watch(Task task, User user);
         Task<Task> Unwatch(Task task, User user);
         Task<Task> Modify(Task task);
    }
}
