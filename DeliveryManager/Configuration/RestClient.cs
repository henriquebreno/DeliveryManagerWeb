using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Http;

namespace DeliveryManager.Web.Configuration
{
    public class RestClient : BaseIntegration, IRestClient
    {
        protected override string IntegrationId { get; }

        protected RestClient(string integrationId)
        {
            IntegrationId = integrationId;
        }

        public HttpRestResponse<TResponse> Get<TResponse>(string endpoint, Dictionary<HttpRequestHeader, string> customHeaders = null)
        {
            using HttpClient httpClient = new HttpClient();
            httpClient.Timeout = TimeSpan.FromSeconds(base.ServiceSettings.Timeout);
            httpClient.DefaultRequestHeaders.Clear();
            if (customHeaders != null && customHeaders.Any())
            {
                foreach (KeyValuePair<HttpRequestHeader, string> customHeader in customHeaders)
                {
                    httpClient.DefaultRequestHeaders.Add(customHeader.Key.ToString(), customHeader.Value);
                }
            }

            return new HttpRestResponse<TResponse>(httpClient.GetAsync(base.ServiceSettings.Address + endpoint).Result);
        }

        public HttpRestResponse<TResponse> Post<TRequest, TResponse>(string endpoint, TRequest request = default(TRequest), Dictionary<HttpRequestHeader, string> customHeaders = null, ContentTypeFormat contentType = ContentTypeFormat.Json)
        {
            using HttpClient httpClient = new HttpClient();
            httpClient.Timeout = TimeSpan.FromSeconds(base.ServiceSettings.Timeout);
            httpClient.DefaultRequestHeaders.Clear();
            if (customHeaders != null && customHeaders.Any())
            {
                foreach (KeyValuePair<HttpRequestHeader, string> customHeader in customHeaders)
                {
                    httpClient.DefaultRequestHeaders.Add(customHeader.Key.ToString(), customHeader.Value);
                }
            }

            HttpContent content = GenerateContent(request, contentType);
            return new HttpRestResponse<TResponse>(httpClient.PostAsync(base.ServiceSettings.Address + endpoint, content).Result);
        }

        public HttpRestResponse<TResponse> Put<TRequest, TResponse>(string endpoint, TRequest request = default(TRequest), Dictionary<HttpRequestHeader, string> customHeaders = null, ContentTypeFormat contentType = ContentTypeFormat.Json)
        {
            using HttpClient httpClient = new HttpClient();
            httpClient.Timeout = TimeSpan.FromSeconds(base.ServiceSettings.Timeout);
            httpClient.DefaultRequestHeaders.Clear();
            if (customHeaders != null && customHeaders.Any())
            {
                foreach (KeyValuePair<HttpRequestHeader, string> customHeader in customHeaders)
                {
                    httpClient.DefaultRequestHeaders.Add(customHeader.Key.ToString(), customHeader.Value);
                }
            }

            HttpContent content = GenerateContent(request, contentType);
            return new HttpRestResponse<TResponse>(httpClient.PutAsync(base.ServiceSettings.Address + endpoint, content).Result);
        }

        public HttpRestResponse<TResponse> Delete<TResponse>(string endpoint, Dictionary<HttpRequestHeader, string> customHeaders = null)
        {
            using HttpClient httpClient = new HttpClient();
            httpClient.Timeout = TimeSpan.FromSeconds(base.ServiceSettings.Timeout);
            httpClient.DefaultRequestHeaders.Clear();
            if (customHeaders != null && customHeaders.Any())
            {
                foreach (KeyValuePair<HttpRequestHeader, string> customHeader in customHeaders)
                {
                    httpClient.DefaultRequestHeaders.Add(customHeader.Key.ToString(), customHeader.Value);
                }
            }

            return new HttpRestResponse<TResponse>(httpClient.DeleteAsync(base.ServiceSettings.Address + endpoint).Result);
        }

        public HttpRestResponse<TResponse> SendRequest<TRequest, TResponse>(string endpoint, HttpMethod method, TRequest request = default(TRequest), Dictionary<HttpRequestHeader, string> customHeaders = null, ContentTypeFormat contentType = ContentTypeFormat.Json)
        {
            using HttpClient httpClient = new HttpClient();
            HttpRequestMessage httpRequestMessage = new HttpRequestMessage(method, base.ServiceSettings.Address + endpoint);
            if (request != null)
            {
                HttpContent httpContent2 = (httpRequestMessage.Content = GenerateContent(request, contentType));
            }

            httpClient.Timeout = TimeSpan.FromSeconds(base.ServiceSettings.Timeout);
            httpClient.DefaultRequestHeaders.Clear();
            if (customHeaders != null && customHeaders.Any())
            {
                foreach (KeyValuePair<HttpRequestHeader, string> customHeader in customHeaders)
                {
                    httpRequestMessage.Headers.Add(customHeader.Key.ToString(), customHeader.Value);
                }
            }

            return new HttpRestResponse<TResponse>(httpClient.SendAsync(httpRequestMessage).Result);
        }

        public HttpRestResponse<TResponse> SendStreamRequest<TResponse>(string endpoint, HttpMethod method, Stream stream = null, Dictionary<HttpRequestHeader, string> customHeaders = null)
        {
            using HttpClient httpClient = new HttpClient();
            HttpRequestMessage httpRequestMessage = new HttpRequestMessage(method, base.ServiceSettings.Address + endpoint);
            if (stream != null)
            {
                MultipartFormDataContent multipartFormDataContent = (MultipartFormDataContent)(httpRequestMessage.Content = new MultipartFormDataContent
                {
                    new StreamContent(stream)
                });
            }

            httpClient.Timeout = TimeSpan.FromSeconds(base.ServiceSettings.Timeout);
            httpClient.DefaultRequestHeaders.Clear();
            if (customHeaders != null && customHeaders.Any())
            {
                foreach (KeyValuePair<HttpRequestHeader, string> customHeader in customHeaders)
                {
                    httpRequestMessage.Headers.Add(customHeader.Key.ToString(), customHeader.Value);
                }
            }

            return new HttpRestResponse<TResponse>(httpClient.SendAsync(httpRequestMessage).Result);
        }

        private HttpContent GenerateContent<TRequest>(TRequest request, ContentTypeFormat contentType)
        {
            switch (contentType)
            {
                case ContentTypeFormat.FormData:
                    return new FormContentTypeGenerator().GenerateRequestContent(request);

                case ContentTypeFormat.MultipartFormData:
                    return new MultipartContentTypeGenerator().GenerateRequestContent(request);

                case ContentTypeFormat.Xml:
                    return new XmlContentTypeGenerator().GenerateRequestContent(request);

                default:
                    return new JsonContentTypeGenerator().GenerateRequestContent(request);

            }

           
        }
    }
}