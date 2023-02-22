using DeliveryManager.Web.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DeliveryManager.Web.ServiceClient.Interfaces
{
    public interface IMenuItemCommand
    {
        void AddNewMenuItem(MenuItemViewModel clienteViewModel);

        List<MenuItemViewModel> GetAllMenuItem();

        MenuItemViewModel GetMenuItem(long clientId);

        void RemoveMenuItem(long clientId);
    }
}
