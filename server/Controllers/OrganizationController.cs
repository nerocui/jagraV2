using System;
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
            var orgToReturn = _mapper.Map<OrganizationForListDto>(org);
            var usersToReturn = new List<UserForListDto>();
            var invitationsToReturn = new List<InvitationForListDto>();
			foreach (var ou in org.Users)
			{
				usersToReturn.Add(_mapper.Map<UserForListDto>(await _users.GetUser(ou.UserId)));
			}
            foreach (var invitation in org.Invitations)
            {
                var inv = _mapper.Map<InvitationForListDto>(invitation);
                inv.User = _mapper.Map<UserForListDto>(await _users.GetUser(invitation.UserId));
                invitationsToReturn.Add(inv);
            }
            orgToReturn.Invitations = invitationsToReturn;
            orgToReturn.Users = usersToReturn;
			return Ok(orgToReturn);
		}

		[HttpGet("byuser")]
		public async Task<IActionResult> GetOrganizationsByUser(int userId)
		{
			var orgs = await _repo.GetOrganizationsByUser(userId);
            //             var orgsDto = _mapper.Map<IEnumerable<OrganizationForListDto>>(orgs);
            // 			var zippedOrgs = orgs.Zip(orgsDto, (o, d) => new {Organization = o, OrganizationForCreationDto = d});
            //             var orgsToReturn = new List<OrganizationForListDto>();
            //             foreach (var zip in zippedOrgs)
            //             {
            //                 zip.OrganizationForCreationDto.Users = new List<UserForListDto>();
            //                 foreach (var ou in zip.Organization.Users)
            //                 {
            //                     var user = await _users.GetUser(ou.UserId);
            //                     var userDto = _mapper.Map<UserForListDto>(user);
            //                     zip.OrganizationForCreationDto.Users.Add(userDto);
            //                 }
            //                 orgsToReturn.Add(zip.OrganizationForCreationDto);
            //             }
            var orgsToReturn = new List<OrganizationForListDto>();
            foreach (var org in orgs)
            {
                var orgToReturn = _mapper.Map<OrganizationForListDto>(org);
                var usersToReturn = _mapper.Map<List<UserForListDto>>(await _users.GetUsersByOrganization(org.Id));
                var invitationsToReturn = _mapper.Map<List<InvitationForListDto>>(org.Invitations);
                orgToReturn.Users = usersToReturn;
                orgToReturn.Invitations = invitationsToReturn;
                orgsToReturn.Add(orgToReturn);
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
            if (await _invitations.InvitationExist(organization.Id, user.Id))
            {
                return Conflict("Invitation Already Exist");
            }
            Invitation invitation = new Invitation
            {
                User = user,
                Organization = organization,
                UserId = user.Id,
                OrganizationId = organization.Id
            };
            await _invitations.Add(invitation);
            //TODO, return list of all invitations that belong to this organization
            var invitations = await _invitations.GetInvitationsByOrganization(organization.Id);
            var invitationsToReturn = new List<InvitationForListDto>();
            foreach (var item in invitations)
            {
                var invitationToReturn = new InvitationForListDto
                {
                    Organization = _mapper.Map<OrganizationForListDto>(item.Organization),
                    User = _mapper.Map<UserForListDto>(item.User)
                };
                invitationsToReturn.Add(invitationToReturn);
            }
            return Ok(invitationsToReturn);
        }

        [HttpGet("invites")]
        public async Task<IActionResult> GetInvitations(int id)
        {
            if (!await _repo.OrganizationExist(id))
            {
                return BadRequest("Organization does not exist");
            }
            var invitations = await _invitations.GetInvitationsByOrganization(id);
            Console.WriteLine(invitations);
            var invitationsToReturn = new List<InvitationForListDto>();
            foreach (var item in invitations)
            {
                var invitationToReturn = new InvitationForListDto
                {
                    Organization = _mapper.Map<OrganizationForListDto>(item.Organization),
                    User = _mapper.Map<UserForListDto>(item.User)
                };
                invitationsToReturn.Add(invitationToReturn);
            }
            Console.WriteLine(invitationsToReturn);
            return Ok(invitationsToReturn);
        }
	}
}
