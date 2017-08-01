using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Web.models;
using Web.viewmodels;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Web.Controllers
{
    public class ValuesController : Controller
    {
        public static IList<Item> _values = new List<Item>()
        {
            new Item{ Value = "value1" },
            new Item{ Value = "value2" },
        };

        // GET: api/values
        [HttpGet("api/items")]
        public IActionResult GetItems()
        {
            return Json(_values);
        }

        [HttpGet("api/item/{id}")]
        public IActionResult GetItem(Guid id)
        {
            return Json(_values.FirstOrDefault(i => i.Id == id));
        }

        [HttpPost("api/item")]
        public IActionResult PostItem([FromBody] Item item)
        {
            _values.Add(item);

            return Json(item);
        }

        [HttpPut("api/item")]
        public IActionResult PutItem([FromBody] ItemViewModel viewModel)
        {
            if (string.IsNullOrEmpty(viewModel.Id)) return Json(new { error = "No valid id specified."});

            var storedItem = _values.FirstOrDefault(i => i.Id == Guid.Parse(viewModel.Id));
            if (storedItem != null) storedItem.Value = viewModel.Value;
            else _values.Add(new Item { Id = Guid.Parse(viewModel.Id), Value = viewModel.Value });

            return Json(_values);
        }

        [HttpPatch("api/item")]
        public IActionResult PatchItem([FromBody] ItemViewModel viewModel)
        {
            if (string.IsNullOrEmpty(viewModel.Id)) return Json(new { error = "No valid id specified." });

            var storedItem = _values.FirstOrDefault(i => i.Id == Guid.Parse(viewModel.Id));
            if (storedItem != null) storedItem.Value = viewModel.Value;
            else return Json(new { error = "Not Found." });

            return Json(_values);
        }

        [HttpDelete("api/item/{id}")]
        public IActionResult DeleteItem(Guid id)
        {
            var item = _values.FirstOrDefault(i => i.Id == id);
            if (item != null) _values.Remove(item);

            return Json(_values);

        }
    }
}
