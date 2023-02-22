using Newtonsoft.Json;

namespace DeliveryManager.Web.Model
{
    public class MoneyViewModel
    {
        [JsonProperty(PropertyName = "Amount")]
        public string Amount { get; set; }
    }
}