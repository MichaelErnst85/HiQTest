using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace TextreaderAPI.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class filesController : ControllerBase
    {
        private readonly ILogger<filesController> _logger;

        public filesController(ILogger<filesController> logger)
        {
            _logger = logger;
        }

        // GET: api/files
        [HttpGet]
        public async Task<ActionResult> Get()
        {
           
            return Ok();
        }

        // GET: api/files/5

        [HttpPost]
        public async Task<ActionResult> PostFile(IFormFile formFile)
        {
            string[] validFiles = { "txt/plain", "application/octet-stream" };
            if (!validFiles.Contains(formFile.ContentType))
            {
                return BadRequest("Does not support" + formFile.ContentType);
            }

            var result = new StringBuilder();

            using (var reader = new StreamReader(formFile.OpenReadStream()))
            {
                while (reader.Peek() >= 0)
                    result.AppendLine(await reader.ReadLineAsync());
            }

            return new OkObjectResult(result);

        }
    }
}
