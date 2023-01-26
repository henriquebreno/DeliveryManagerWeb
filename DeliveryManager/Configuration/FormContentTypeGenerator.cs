using System.Collections.Generic;
using System.Net.Http;
using System.Reflection;

namespace DeliveryManager.Web.Configuration
{
    internal class FormContentTypeGenerator : IContentTypeGenerator
    {
        public HttpContent GenerateRequestContent<TRequest>(TRequest request)
        {
            IDictionary<string, string> dictionary = new Dictionary<string, string>();
            PropertyInfo[] properties = request.GetType().GetProperties();
            foreach (PropertyInfo propertyInfo in properties)
            {
                if (propertyInfo.GetGetMethod() != null && propertyInfo.CanRead)
                {
                    FormFieldAttribute customAttribute = propertyInfo.GetCustomAttribute<FormFieldAttribute>();
                    string key = ((customAttribute != null) ? customAttribute.FieldName : propertyInfo.Name);
                    object obj = propertyInfo.GetValue(request) ?? string.Empty;
                    dictionary.Add(key, obj.ToString());
                }
            }

            return new FormUrlEncodedContent(dictionary);
        }
    }
}