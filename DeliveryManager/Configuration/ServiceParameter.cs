using System;
using Newtonsoft.Json;

namespace DeliveryManager.Web.Configuration
{
    [Serializable]
    public class ServiceParameter
    {
        [JsonProperty("key")]
        public string Key { get; set; }

        [JsonProperty("value")]
        public object Value { get; set; }
    }
}