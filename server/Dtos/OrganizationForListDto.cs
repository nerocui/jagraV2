using System.Collections.Generic;
using server.Models;

namespace server.Dtos
{
    public class OrganizationForListDto
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public ICollection<UserForListDto> Users { get; set; }
        public ICollection<Invitation> Invitations { get; set; }
    }
}
