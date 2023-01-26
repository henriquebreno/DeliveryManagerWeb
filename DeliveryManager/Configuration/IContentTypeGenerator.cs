using System.Net.Http;

namespace DeliveryManager.Web.Configuration
{
    internal interface IContentTypeGenerator
    {
        HttpContent GenerateRequestContent<TRequest>(TRequest request);
    }
}