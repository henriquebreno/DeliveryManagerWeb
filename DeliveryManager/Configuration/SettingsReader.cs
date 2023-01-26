using System.IO;
using Newtonsoft.Json;

namespace DeliveryManager.Web.Configuration
{
    internal sealed class SettingsReader
    {
        public static T LoadSettings<T>(string filename)
        {
            StreamReader streamReader = new StreamReader(filename);
            return JsonConvert.DeserializeObject<T>(streamReader.ReadToEnd());
        }
    }
}