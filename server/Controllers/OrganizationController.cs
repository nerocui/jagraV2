using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using server.data;
using server.Dtos;
using server.Models;

namespace server.Controllers
{
	[ApiController]
	[Route("api/[controller]")]
	public class OrganizationController : ControllerBase
	{
		private readonly IOrganizationRepository _repo;
        private readonly IInvitationRepository _invitations;
        private readonly IConfiguration _config;
		private readonly IUserRepository _users;
		private readonly IMapper _mapper;
		public OrganizationController(IOrganizationRepository repo, IInvitationRepository invitations, IUserRepository users, IConfiguration config, IMapper mapper)
		{
			_mapper = mapper;
			_users = users;
			_config = config;
			_repo = repo;
            _invitations = invitations;
        }

		[HttpPost("create")]
		public async Task<IActionResult> Create(OrganizationForCreationDto orgdto)
		{
			Organization org = new Organization
			{
				Name = orgdto.Name
			};
			User user = await _users.GetUser(orgdto.UserId);
			if (await _repo.OrganizationExist(org.Name))
			{
				return BadRequest("Organization name already exist");
			}
			var rogCreated = await _repo.Create(org, user);
			return StatusCode(201);
		}

		[HttpGet("{id}")]
		public async Task<IActionResult> GetOrganization(int id)
		{
			var org = await _repo.GetOrganization(id);
			foreach (var ou in org.Users)
			{
				ou.User = await _users.GetUser(ou.UserId);
			}
			return Ok(org);
		}

		[HttpGet("byuser")]
		public async Task<IActionResult> GetOrganizationsByUser(int userId)
		{
			var orgs = await _repo.GetOrganizationsByUser(userId);
            var orgsDto = _mapper.Map<IEnumerable<OrganizationForListDto>>(orgs);
			var zippedOrgs = orgs.Zip(orgsDto, (o, d) => new {Organization = o, OrganizationForCreationDto = d});
            var orgsToReturn = new List<OrganizationForListDto>();
            foreach (var zip in zippedOrgs)
            {
                zip.OrganizationForCreationDto.Users = new List<UserForListDto>();
                foreach (var ou in zip.Organization.Users)
                {
                    var user = await _users.GetUser(ou.UserId);
                    var userDto = _mapper.Map<UserForListDto>(user);
                    zip.OrganizationForCreationDto.Users.Add(userDto);
                }
                orgsToReturn.Add(zip.OrganizationForCreationDto);
            }
			return Ok(orgsToReturn);
		}

        [HttpPost("invite")]
        public async Task<IActionResult> InviteUser(InvitationForCreationDto invitationForCreation)
        {
            if (!await _users.UserExist(invitationForCreation.UserId) || !await _users.UserExist(invitationForCreation.InvitorId) || !await _repo.OrganizationExist(invitationForCreation.OrganizationId))
            {
                return BadRequest("Invalid Data");
            }
            var inviter = await _users.GetUser(invitationForCreation.InvitorId);
            var user = await _users.GetUser(invitationForCreation.UserId);
            var organization = await _repo.GetOrganization(invitationForCreation.OrganizationId);
            if (!await _repo.IsAdmin(organization, inviter))
            {
                return BadRequest("Not Authorized To Invite New Member");
            }
            Invitation invitation = new Invitation
            {
                User = user,
                Organization = organization,
                UserId = user.Id,
                OrganizationId = organization.Id
            };
            await _invitations.Add(invitation);
            return Ok(invitation);
        }
	}
}
