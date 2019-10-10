using System.Threading.Tasks;
using server.Models;

namespace server.data
{
    public interface IInvitationRepository
    {
         Task<Invitation> Add(Invitation invitation, User user);
         Task<bool> Accept(Invitation invitation);
         Task<bool> Reject(Invitation invitation);
    }
}
