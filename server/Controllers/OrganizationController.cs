using System.Threading.Tasks;
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
		private readonly IConfiguration _config;
		private readonly IUserRepository _users;
		public OrganizationController(IOrganizationRepository repo, IUserRepository users, IConfiguration config)
		{
			_users = users;
			_config = config;
			_repo = repo;
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
	}
}
