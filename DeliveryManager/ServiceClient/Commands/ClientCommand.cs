using DeliveryManager.Model;
using DeliveryManager.Web.Configuration;
using DeliveryManager.Web.ServiceClient.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DeliveryManager.Web.ServiceClient.Commands
{
    public class ClientCommand : BaseServiceClient , IClientCommand
    {
        public const string ClientEndpoint = "api/client";
        public const string ClientGetByIdEndpoint = "api/client/{clientId}";
        public const string ClientDeleteEndpoint = "api/client/{clientId}";

        public ClientCommand()
        {
            
        }
        public void AddNewClient(ClientViewModel clienteViewModel) 
        {
            var result = Post<ClientViewModel, ClientViewModel>(ClientEndpoint,clienteViewModel);
          
        }

        public List<ClientViewModel> GetAllClients()
        {
            var result = Get<List<ClientViewModel>>(ClientEndpoint);
            if (result.HttpResponse.IsSuccessStatusCode) 
            {
                return result.ContentObject;
            }
            return null;
        }

        public ClientViewModel GetClient(long clientId)
        {
            var result = Get<ClientViewModel>(ClientGetByIdEndpoint.Replace("{clientId}",clientId.ToString()));
            if (result.HttpResponse.IsSuccessStatusCode)
            {
                return result.ContentObject;
            }
            return null;
        }

        public void RemoveClient(long clientId)
        {
            var result = Delete<ClientViewModel>(ClientDeleteEndpoint.Replace("{clientId}", clientId.ToString()));
           
        }
    }
}
