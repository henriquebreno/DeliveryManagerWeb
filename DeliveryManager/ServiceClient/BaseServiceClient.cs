using DeliveryManager.Web.Configuration;
using Microsoft.AspNetCore.Http;
using System.Collections.Generic;
using System.Net;
using System.Web;

namespace DeliveryManager.Web.Configuration
{
    /// <summary>
    /// Portal Concessao Passagens API Integration base class.
    /// </summary>
    /// <seealso cref="Azul.Core.Integration.Rest.RestClient" />
    public class BaseServiceClient : RestClient
    {
        /// <summary>
        /// The session context
        /// </summary>
        //protected ISessionContext SessionContext;

        /// <summary>
        /// The header
        /// </summary>
        protected readonly Dictionary<HttpRequestHeader, string> Header;

        /// <summary>
        /// Initializes a new instance of the <see cref="BasePortalConcessaoServiceClient"/> class.
        /// </summary>
        public BaseServiceClient() : base("DeliveryManagerIntegration")
        {
            //var authorizationToken = GetAuthorizationToken();
            //Header = new Dictionary<HttpRequestHeader, string> { { HttpRequestHeader.Authorization, authorizationToken } };
        }

        //private string GetAuthorizationToken(string wid = null)
        //{
        //    SessionContext = DependencyResolver.Current.GetService<ISessionContext>();

        //    var windowId = !string.IsNullOrEmpty(wid) ? wid : HttpContext.Current.Request.Headers["window-id"];

        //    if (!string.IsNullOrEmpty(windowId) && SessionContext.WindowTokens.ContainsKey(windowId))
        //    {
        //        return "bearer " + SessionContext.WindowTokens[windowId];
        //    }

        //    return SessionContext.UserAuthentication.AuthorizationToken;
        //}

        ///// <summary>
        ///// Sets the new header.
        ///// </summary>
        ///// <param name="wid">The wid.</param>
        //protected void SetNewHeader(string wid)
        //{
        //    Header[HttpRequestHeader.Authorization] = GetAuthorizationToken(wid);
        //}
    }
}