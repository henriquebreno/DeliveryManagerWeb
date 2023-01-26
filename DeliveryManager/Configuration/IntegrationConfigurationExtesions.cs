using DeliveryManager.Web.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;

namespace DeliveryManager.Web.Configuration
{
    public static class IntegrationConfigurationExtensions
    {
        public static IntegrationSetting GetIntegrationSetting(this List<IntegrationSetting> integrationSettings, string id)
        {
            return integrationSettings.FirstOrDefault((IntegrationSetting cs) => string.Equals(cs.Id, id, StringComparison.CurrentCultureIgnoreCase));
        }

        public static TObject GetServiceParameter<TObject>(this List<ServiceParameter> parameters, string key)
        {
            ServiceParameter serviceParameter = parameters.FirstOrDefault((ServiceParameter p) => key.Equals(p.Key, StringComparison.InvariantCultureIgnoreCase));
            if (serviceParameter != null)
            {
                object value = serviceParameter.Value;
                switch (typeof(TObject).Name.ToLowerInvariant())
                {
                    case "string":
                    case "int32":
                    case "int64":
                    case "boolean":
                        return (TObject)Convert.ChangeType(value, typeof(TObject));
                    case "timespan":
                        {
                            TimeSpan.TryParse((string)value, out var _);
                            break;
                        }
                }

                throw new ArgumentOutOfRangeException("key", $"{key} key type error, expected {typeof(TObject)}. Sent {serviceParameter.Value.GetType()}");
            }

            throw new ArgumentOutOfRangeException("key", $"{key} key Not found in parameters collection.");
        }
    }
}