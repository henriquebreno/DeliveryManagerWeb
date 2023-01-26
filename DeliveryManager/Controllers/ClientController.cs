using DeliveryManager.Model;
using DeliveryManager.Web.ServiceClient.Interfaces;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Threading.Tasks;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace DeliveryManager.Web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ClientController : Controller
    {
        private IClientCommand _clientCommand;

        public ClientController(IClientCommand clientCommand)
        {
            _clientCommand = clientCommand;
        }
        // GET: api/<ValuesController>
        [HttpGet]
        public IActionResult Get()
        {
            
            try
            {
                var result = _clientCommand.GetAllClients();
                return Json(result);
            }
            catch (Exception ex)
            {
                return StatusCode((int)HttpStatusCode.InternalServerError, ex.Message);
            }
        }

        // GET api/<ValuesController>/5
        [HttpGet("{clientId}")]
        public IActionResult Get(long  clientId)
        {
            try
            {
                var result = _clientCommand.GetClient(clientId);
                return Json(result);
            }
            catch (Exception ex)
            {
                return StatusCode((int)HttpStatusCode.InternalServerError, ex.Message);
            }
        }

        // POST api/<ValuesController>
        [HttpPost]
        public IActionResult Post([FromBody] ClientViewModel clientViewModel)
        {
            try
            {
                _clientCommand.AddNewClient(clientViewModel);
                return Json("");
            }
            catch (Exception ex)
            {
                return StatusCode((int)HttpStatusCode.InternalServerError, ex.Message);
            }
        }

        // PUT api/<ValuesController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<ValuesController>/5
        [HttpDelete("{clientId}")]
        public IActionResult Delete(int clientId)
        {
            try
            {
                _clientCommand.RemoveClient(clientId);
                return Json("");
            }
            catch (Exception ex)
            {
                return StatusCode((int)HttpStatusCode.InternalServerError, ex.Message);
            }
        }
    }
}
