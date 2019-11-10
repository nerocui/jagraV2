using System;
using System.Collections.Generic;
using System.Linq;
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
            return orgtracker.Entity;
		}

		public Task<bool> DeleteOrganization(Organization organization)
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

        public async Task<bool> OrganizationExist(int id)
        {
            if (await _context.Organizations.AnyAsync(x => x.Id == id))
            {
                return true;
            }
            return false;
        }

		public async Task<Organization> GetOrganization(int Id)
		{
			var organization = await _context.Organizations
                .Include(o => o.Users)
                .Include(o => o.Invitations)
                .FirstOrDefaultAsync(o => o.Id == Id);
            return organization;
		}

		public async Task<IEnumerable<Organization>> GetOrganizations()
		{
			var organizations = await _context.Organizations
                .Include(o => o.Users)
                .Include(o => o.Invitations)
                .ToListAsync();
            return organizations;
		}

		public async Task<IEnumerable<Organization>> GetOrganizationsByUser(int userId)
		{
			var ous = await _context.OrganizationUsers
                .Where(ou => ou.UserId == userId)
                .ToListAsync();
            var orgs = new List<Organization>();
            foreach (var ou in ous)
            {
                orgs.Add(await GetOrganization(ou.OrganizationId));
            }
            return orgs;
		}

        public async Task<bool> IsAdmin(Organization organization, User user)
        {
            var relationship = await _context.OrganizationUsers.FirstOrDefaultAsync(r => r.OrganizationId == organization.Id && r.UserId == user.Id);
            if (relationship.Role == "Admin")
            {
                return true;
            }
            return false;
        }

        public async Task<Organization> UpdateOrganization(Organization org)
        {
            _context.Organizations.Update(org);
            await _context.SaveChangesAsync();
            return org;
        }
    }
}
