using System.Threading.Tasks;
using server.Models;

namespace server.data
{
    public interface IInvitationRepository
    {
         Task<Invitation> Add(Invitation invitation);
         bool Delete(Invitation invitation);
    }
}
