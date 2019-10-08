using System.Collections.Generic;

namespace server.Models
{
    public class Organization
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public ICollection<OrganizationUser> Users { get; set; }
    }
}