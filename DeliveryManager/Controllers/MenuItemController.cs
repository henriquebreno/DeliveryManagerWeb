using DeliveryManager.Web.Model;
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
    public class MenuItemController : Controller
    {
        private IMenuItemCommand _menuItemCommand;

        public MenuItemController(IMenuItemCommand menuItemCommand)
        {
            _menuItemCommand = menuItemCommand;
        }

        // GET: api/<MenuItemController>
        [HttpGet]
        public IActionResult Get()
        {

            try
            {
                var result = _menuItemCommand.GetAllMenuItem();
                return Json(result);
            }
            catch (Exception ex)
            {
                return StatusCode((int)HttpStatusCode.InternalServerError, ex.Message);
            }
        }

        // GET api/<MenuItemController>/5
        [HttpGet("{menuItemId}")]
        public IActionResult Get(long menuItemId)
        {
            try
            {
                var result = _menuItemCommand.GetMenuItem(menuItemId);
                return Json(result);
            }
            catch (Exception ex)
            {
                return StatusCode((int)HttpStatusCode.InternalServerError, ex.Message);
            }
        }

        // POST api/<MenuItemController>
        [HttpPost]
        public IActionResult CreateProduct([FromBody] MenuItemViewModel product)
        {
            try
            {
                _menuItemCommand.AddNewMenuItem(product);
                return StatusCode((int)HttpStatusCode.Created);
            }
            catch (Exception ex)
            {
                return StatusCode((int)HttpStatusCode.InternalServerError, ex.Message);
            }
        }

        // PUT api/<MenuItemController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<MenuItemController>/5
        [HttpDelete("{menuItemId}")]
        public IActionResult RemoveProduct(long productId)
        {
            try
            {
                _menuItemCommand.RemoveMenuItem(productId);
                return StatusCode((int)HttpStatusCode.OK);
            }
            catch (Exception ex)
            {
                return StatusCode((int)HttpStatusCode.InternalServerError, ex.Message);
            }
        }
    }
}
