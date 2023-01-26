using DeliveryManager.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DeliveryManager.Web.ServiceClient.Interfaces
{
    public interface IClientCommand
    {
        void AddNewClient(ClientViewModel clienteViewModel);

        List<ClientViewModel> GetAllClients();

        ClientViewModel GetClient(long clientId);

        void RemoveClient(long clientId); 

    }
}
