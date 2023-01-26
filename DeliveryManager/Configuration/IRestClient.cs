using System.Collections.Generic;
using System.IO;
using System.Net;
using System.Net.Http;

namespace DeliveryManager.Web.Configuration
{
    public interface IRestClient
    {
        HttpRestResponse<TResponse> Get<TResponse>(string endpoint, Dictionary<HttpRequestHeader, string> customHeaders = null);

        HttpRestResponse<TResponse> Post<TRequest, TResponse>(string endpoint, TRequest request = default(TRequest), Dictionary<HttpRequestHeader, string> customHeaders = null, ContentTypeFormat contentType = ContentTypeFormat.Json);

        HttpRestResponse<TResponse> Put<TRequest, TResponse>(string endpoint, TRequest request = default(TRequest), Dictionary<HttpRequestHeader, string> customHeaders = null, ContentTypeFormat contentType = ContentTypeFormat.Json);

        HttpRestResponse<TResponse> Delete<TResponse>(string endpoint, Dictionary<HttpRequestHeader, string> customHeaders = null);

        HttpRestResponse<TResponse> SendRequest<TRequest, TResponse>(string endpoint, HttpMethod method, TRequest request = default(TRequest), Dictionary<HttpRequestHeader, string> customHeaders = null, ContentTypeFormat contentType = ContentTypeFormat.Json);

        HttpRestResponse<TResponse> SendStreamRequest<TResponse>(string endpoint, HttpMethod method, Stream stream = null, Dictionary<HttpRequestHeader, string> customHeaders = null);
    }
}