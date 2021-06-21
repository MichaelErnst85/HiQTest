using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace TextreaderAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class filesController : ControllerBase
    {
        private readonly ILogger<filesController> _logger;

        public filesController(ILogger<filesController> logger)
        {
            _logger = logger;
        }

        // GET: api/Files
        [HttpGet]
        public async Task<ActionResult> Get()
        {
            await Task.Run(Get);
            return Ok();
        }

        // GET: api/Files/5

        [HttpPost]
        public string PostFile(IFormCollection data, IFormFile formFile)
        {
            var fileName = data["fileName"];


            return fileName;

        }
    }
}
