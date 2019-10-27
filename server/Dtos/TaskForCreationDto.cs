using server.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace server.Dtos
{
    public class TaskForCreationDto
    {
        public string Title { get; set; }
        public string Description { get; set; }
        public User Creator { get; set; }
        public User Assignee { get; set; }
        public ICollection<TaskWatch> Watchers { get; set; }
        public DateTime LastUpdated { get; set; }
        public ICollection<TaskDependency> Dependers { get; set; }
        public ICollection<TaskDependency> Dependees { get; set; }
    }
}
