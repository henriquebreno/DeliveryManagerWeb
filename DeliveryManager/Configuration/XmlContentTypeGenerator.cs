using System.IO;
using System.Net.Http;
using System.Text;
using System.Xml;
using System.Xml.Serialization;

namespace DeliveryManager.Web.Configuration
{
    internal class XmlContentTypeGenerator : IContentTypeGenerator
    {
        public HttpContent GenerateRequestContent<TRequest>(TRequest request)
        {
            XmlSerializer xmlSerializer = new XmlSerializer(typeof(TRequest));
            StringWriter stringWriter = new StringWriter();
            string content;
            using (XmlWriter xmlWriter = XmlWriter.Create(stringWriter))
            {
                xmlSerializer.Serialize(xmlWriter, request);
                content = stringWriter.ToString();
            }

            return new StringContent(content, Encoding.UTF8, "application/xml");
        }
    }
}