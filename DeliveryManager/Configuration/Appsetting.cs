using Newtonsoft.Json;

namespace DeliveryManager.Web.Configuration
{
    public class Appsetting
    {
        [JsonProperty(PropertyName = "ApplicationName")]
        public string ApplicationName { get; set; }
    }
}