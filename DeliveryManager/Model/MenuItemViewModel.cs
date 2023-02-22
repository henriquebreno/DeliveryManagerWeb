using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DeliveryManager.Web.Model
{
    public class MenuItemViewModel
    {

        [JsonProperty(PropertyName = "Price")]
        public MoneyViewModel Price { get; set; }

        [JsonProperty(PropertyName = "Name")]
        public string Name { get; set; }

        [JsonProperty(PropertyName = "Description")]
        public string Description { get; set; }

        [JsonProperty(PropertyName = "Url")]
        public string Url { get; set; }

        [JsonProperty(PropertyName = "MenuItemId")]
        public long MenuItemId { get; set; }
    }
}
