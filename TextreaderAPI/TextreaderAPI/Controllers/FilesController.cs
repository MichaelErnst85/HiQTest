using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using TextreaderAPI.Methods;

namespace TextreaderAPI.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class FilesController : ControllerBase
    {
        private readonly ILogger<FilesController> _logger;

        public FilesController(ILogger<FilesController> logger)
        {
            _logger = logger;
        }

        // GET: api/files
        [HttpGet]
        public async Task<ActionResult> Get()
        {
            Console.WriteLine("Hello all!");
            return Ok();
        }

        
        [HttpPost]
        public async Task<ActionResult> Post(IFormFile formFile)
        {
            
            
                //string[] acceptedFiles = { "text/plain", "application/octet-stream"};

                //if(!acceptedFiles.Contains(formFile.ContentType))
                //{
                //    return BadRequest("Not supported" + formFile.ContentType);
                //}

                var result = new StringBuilder();
                using (var stream = new StreamReader(formFile.OpenReadStream()))
                {
                    while (stream.Peek() >= 0)
                        result.AppendLine(await stream.ReadLineAsync());
                }

                
            

            HandlerMethod text = new HandlerMethod(result.ToString());
            return new OkObjectResult(text);
        }
    }
}
