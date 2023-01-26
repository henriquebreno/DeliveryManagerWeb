using Newtonsoft.Json;
using System.Collections.Generic;

namespace DeliveryManager.Web.Configuration
{
    public class IntegrationConfiguration: Appsetting
    {
        public static IntegrationConfiguration Settings => AppConfiguration<IntegrationConfiguration>.Settings;

        [JsonProperty(PropertyName = "IntegrationSettings")]
        public List<IntegrationSetting> IntegrationSettings { get; set; }
    }
}