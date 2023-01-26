using System.Net.Http;
using System.Net.Http.Headers;
using Newtonsoft.Json;

namespace DeliveryManager.Web.Configuration
{
    internal class JsonContentTypeGenerator : IContentTypeGenerator
    {
        public HttpContent GenerateRequestContent<TRequest>(TRequest request)
        {
            StringContent stringContent = new StringContent(JsonConvert.SerializeObject(request) ?? string.Empty);
            stringContent.Headers.ContentType = new MediaTypeHeaderValue("application/json");
            return stringContent;
        }
    }
}