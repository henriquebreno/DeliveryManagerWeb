using System;

namespace DeliveryManager.Web.Configuration
{
    [AttributeUsage(AttributeTargets.Property | AttributeTargets.Field | AttributeTargets.Parameter)]
    public class FormFieldAttribute : Attribute
    {
        public string FieldName { get; private set; }

        public FormFieldAttribute(string fieldName)
        {
            FieldName = fieldName;
        }
    }
}