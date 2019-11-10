using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using server.data;
using server.Dtos;
using server.Models;
using Task = server.Models.Task;

namespace server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TaskController : ControllerBase
    {
        private readonly ITaskRepository _repo;
        private readonly IUserRepository _users;
        private readonly IOrganizationRepository _organizations;

        public TaskController(ITaskRepository repo, IUserRepository users, IOrganizationRepository organizations)
        {
            _repo = repo;
            _users = users;
            _organizations = organizations;
        }

        [HttpPost("create")]
        public async Task<IActionResult> Create(TaskForCreationDto task)
        {
            if (!await _users.UserExist(task.CreatorId) || !await _users.UserExist(task.AssigneeId) || !await _organizations.OrganizationExist(task.OrganizationId))
            {
                return BadRequest("Bad request data, data don't exist.");
            }
            var creator = await _users.GetUser(task.CreatorId);
            var assignee = await _users.GetUser(task.AssigneeId);
            var taskToCreate = new Task
            {
                Title = task.Title,
                Description = task.Description,
                Creator = creator,
                Assignee = assignee,
                CreatorId = task.CreatorId,
                AssigneeId = task.AssigneeId,
                Organization = await _organizations.GetOrganization(task.OrganizationId),
                OrganizationId = task.OrganizationId,
                Created = new DateTime(),
                LastUpdated = new DateTime(),
            };
            var taskCreated = await _repo.Add(taskToCreate);
            return Ok(taskCreated);
        }

        [HttpGet("byorg")]
        public async Task<IActionResult> GetTasksByOrganization(int OrganizationId)
        {
            if (!await _organizations.OrganizationExist(OrganizationId))
            {
                return BadRequest("Organization does not exist.");
            }
            var tasksToReturn = await _repo.GetTasksByOrganization(OrganizationId);
            return Ok(tasksToReturn);
        }
    }
}