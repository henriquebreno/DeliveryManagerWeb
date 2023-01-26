using System.Net.Http;
using Newtonsoft.Json;

namespace DeliveryManager.Web.Configuration
{
    public class HttpRestResponse<TResponse>
    {
        public HttpResponseMessage HttpResponse { get; }

        public TResponse ContentObject => JsonConvert.DeserializeObject<TResponse>(HttpResponse.Content.ReadAsStringAsync().Result);

        public HttpRestResponse(HttpResponseMessage httpResponse)
        {
            HttpResponse = httpResponse;
        }
    }
}