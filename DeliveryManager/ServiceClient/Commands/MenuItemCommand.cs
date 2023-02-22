using DeliveryManager.Web.Configuration;
using DeliveryManager.Web.Model;
using DeliveryManager.Web.ServiceClient.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DeliveryManager.Web.ServiceClient.Commands
{
    public class MenuItemCommand : BaseServiceClient,IMenuItemCommand
    {
        public const string MenuItemEndpoint = "api/product";
        public const string MenuItemGetByIdEndpoint = "api/product/{productId}";
        public const string MenuItemDeleteEndpoint = "api/product/{productId}";

        public MenuItemCommand()
        {
                
        }
        public void AddNewMenuItem(MenuItemViewModel menuItemViewModel)
        {
            var result = Post<MenuItemViewModel, MenuItemViewModel>(MenuItemEndpoint, menuItemViewModel);
            if (!result.HttpResponse.IsSuccessStatusCode)
            {
                throw new Exception(result.HttpResponse.Content.ReadAsStringAsync().Result);
            }
        }

        public List<MenuItemViewModel> GetAllMenuItem()
        {
            var result = Get<List<MenuItemViewModel>>(MenuItemEndpoint);
            if (result.HttpResponse.IsSuccessStatusCode)
            {
                return result.ContentObject;
            }
            else
            {
                throw new Exception(result.HttpResponse.Content.ReadAsStringAsync().Result);
            }
        }

        public MenuItemViewModel GetMenuItem(long menuItemId)
        {
            var result = Get<MenuItemViewModel>(MenuItemGetByIdEndpoint.Replace("{menuItemId}", menuItemId.ToString()));
            if (result.HttpResponse.IsSuccessStatusCode)
            {
                return result.ContentObject;
            }
            else
            {
                throw new Exception(result.HttpResponse.Content.ReadAsStringAsync().Result);
            }
        }

        public void RemoveMenuItem(long menuItemId)
        {
            var result = Delete<MenuItemViewModel>(MenuItemDeleteEndpoint.Replace("{menuItemId}", menuItemId.ToString()));
            if (!result.HttpResponse.IsSuccessStatusCode)
            {
                throw new Exception(result.HttpResponse.Content.ReadAsStringAsync().Result);
            }
        }
    }
}
