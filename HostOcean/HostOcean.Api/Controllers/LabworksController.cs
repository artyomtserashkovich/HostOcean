﻿using HostOcean.Application.LaboratoryWorks.Models;
using HostOcean.Application.LaboratoryWorks.Queries;
using MediatR;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace HostOcean.Api.Controllers
{
    [Authorize]
    public class LabworksController : BaseController
    {
        public LabworksController(IMediator mediator) : base(mediator)
        {
        }

        [HttpGet("upcoming")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesDefaultResponseType(typeof(IEnumerable<LaboratoryWorkModel>))]
        public async Task<IActionResult> GetUpcomingLabs(string groupId)
        {
            var upcomingLabs = await Mediator.Send(new GetUpcomingLabworksQuery() { GroupId = groupId } );

            return Ok(upcomingLabs);
        }
    }
}
