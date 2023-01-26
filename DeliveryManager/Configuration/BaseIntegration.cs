using System;
using System.ServiceModel;

namespace DeliveryManager.Web.Configuration
{
    public class BaseIntegration : IIntegration
    {
        protected virtual string IntegrationId => GetType().Name;

        protected IntegrationSetting ServiceSettings => IntegrationConfiguration.Settings.IntegrationSettings.GetIntegrationSetting(IntegrationId) ?? throw new ApplicationException($"Configuration id {IntegrationId} not found in application settings.");

        //protected BasicHttpSecurityMode GetBasicHttpSecurityMode()
        //{
        //    //IL_0001: Unknown result type (might be due to invalid IL or missing references)
        //    //IL_001f: Unknown result type (might be due to invalid IL or missing references)
        //    //IL_0020: Unknown result type (might be due to invalid IL or missing references)
        //    BasicHttpSecurityMode result = (BasicHttpSecurityMode)0;
        //    if (ServiceSettings.Address.ToLower().Contains("https://"))
        //    {
        //        result = (BasicHttpSecurityMode)1;
        //    }

        //    return result;
        //}
    }
}