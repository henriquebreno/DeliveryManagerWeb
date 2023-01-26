using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net.Http;
using System.Reflection;

namespace DeliveryManager.Web.Configuration
{
    internal class MultipartContentTypeGenerator : IContentTypeGenerator
    {
        public HttpContent GenerateRequestContent<TRequest>(TRequest request)
        {
            MultipartFormDataContent multipartFormDataContent = new MultipartFormDataContent();
            IDictionary<string, string> dictionary = new Dictionary<string, string>();
            PropertyInfo[] properties = request.GetType().GetProperties();
            foreach (PropertyInfo propertyInfo in properties)
            {
                if (!(propertyInfo.GetGetMethod() != null) || !propertyInfo.CanRead)
                {
                    continue;
                }

                if (propertyInfo.PropertyType == typeof(Stream))
                {
                    Stream stream = propertyInfo.GetValue(request) as Stream;
                    if (stream != null)
                    {
                        multipartFormDataContent.Add(new StreamContent(stream));
                    }
                }
                else
                {
                    FormFieldAttribute customAttribute = propertyInfo.GetCustomAttribute<FormFieldAttribute>();
                    string key = ((customAttribute != null) ? customAttribute.FieldName : propertyInfo.Name);
                    object obj = propertyInfo.GetValue(request) ?? string.Empty;
                    dictionary.Add(key, obj.ToString());
                }
            }

            if (dictionary.Any())
            {
                multipartFormDataContent.Add(new FormUrlEncodedContent(dictionary));
            }

            return multipartFormDataContent;
        }
    }
}