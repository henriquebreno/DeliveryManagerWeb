using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace DeliveryManager.Model
{
    public class ClientViewModel
    {
        [JsonProperty(PropertyName ="Cpf")]
        public string Cpf { get; set; }

        [JsonProperty(PropertyName = "FullName")]
        public string FullName { get; set; }

        [JsonProperty(PropertyName = "Cellphone")]
        public string Cellphone { get; set; }

        [JsonProperty(PropertyName = "Email")]
        public string Email { get; set; }

        [JsonProperty(PropertyName = "ClientId")]
        public int ClientId { get; set; }
    }
}
