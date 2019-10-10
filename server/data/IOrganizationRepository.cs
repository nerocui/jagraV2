using System.Threading.Tasks;
using server.Models;

namespace server.data
{
    public interface IOrganizationRepository
    {
        /**
        * Creates an organization with the given organization model, user is admin
        */
        Task<Organization> Create(Organization organization, User user);
        /*
        * Controller will check is the user is the admin
        * Invite the user to join the organization
        * Sends out an notification to the user
        */
        Task<bool> InviteUser(Organization organization, User user);
        /**
        * After the user click join, they will be added to the organization by this function
        */
        Task<User> AddUser(Organization organization, User user);
        Task<User> RemoveUser(Organization organization, User user);
        Task<bool> DeleteOrganization(Organization organization);
    }
}
