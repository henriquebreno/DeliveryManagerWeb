using System;
using System.Collections.Generic;
using Newtonsoft.Json;

namespace DeliveryManager.Web.Configuration
{
    [Serializable]
    public class IntegrationSetting : BaseConfigurationEntity
    {
        [JsonProperty("address")]
        public string Address { get; set; }

        [JsonProperty("timeout")]
        public int Timeout { get; set; }

        [JsonProperty("messageSize")]
        public long MessageSize { get; set; }

        [JsonProperty("parameters")]
        public List<ServiceParameter> Parameters { get; set; }
    }
}