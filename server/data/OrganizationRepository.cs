using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using server.Models;

namespace server.data
{
	public class OrganizationRepository : IOrganizationRepository
	{
		private readonly DataContext _context;
		public OrganizationRepository(DataContext context)
		{
			_context = context;
		}
		public async Task<User> AddUser(Organization organization, User user)
		{
			OrganizationUser ou = new OrganizationUser();
            ou.Role = "Admin";
            ou.Organization = organization;
            ou.OrganizationId = organization.Id;
            ou.User = user;
            ou.UserId = user.Id;
            await _context.OrganizationUsers.AddAsync(ou);
            await _context.SaveChangesAsync();
            return user;
		}

		public async Task<Organization> Create(Organization organization, User user)
		{
            var orgtracker = await _context.Organizations.AddAsync(organization);
			OrganizationUser admin = new OrganizationUser();
            admin.Role = "Admin";
            admin.Organization = organization;
            admin.OrganizationId = orgtracker.Entity.Id;
            admin.User = user;
            admin.UserId = user.Id;
            await _context.OrganizationUsers.AddAsync(admin);
            orgtracker.Entity.Users.Add(admin);
            
            await _context.SaveChangesAsync();
            return organization;
		}

		public Task<bool> DeleteOrganization(Organization organization)
		{
			throw new System.NotImplementedException();
		}

		public Task<bool> InviteUser(Organization organization, User user)
		{
			throw new System.NotImplementedException();
		}

		public Task<User> RemoveUser(Organization organization, User user)
		{
			throw new System.NotImplementedException();
		}

		public async Task<bool> OrganizationExist(string name)
		{
			if (await _context.Organizations.AnyAsync(x => x.Name == name))
            {
                return true;
            }
            return false;
		}

		public async Task<Organization> GetOrganization(int Id)
		{
			var organization = await _context.Organizations
                .Include(o => o.Users)
                .FirstOrDefaultAsync(o => o.Id == Id);
            return organization;
		}

		public async Task<IEnumerable<Organization>> GetOrganizations()
		{
			var organizations = await _context.Organizations
                .Include(o => o.Users)
                .ToListAsync();
            return organizations;
		}
	}
}
