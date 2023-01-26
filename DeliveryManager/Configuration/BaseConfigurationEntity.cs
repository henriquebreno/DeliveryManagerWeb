using Newtonsoft.Json;

namespace DeliveryManager.Web.Configuration
{
    public class BaseConfigurationEntity
    {
        [JsonProperty(PropertyName = "id")]
        public virtual string Id { get; set; }
    }
}