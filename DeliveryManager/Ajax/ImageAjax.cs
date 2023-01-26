using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CloudinaryDotNet;
using CloudinaryDotNet.Actions;
using System.Drawing;
using System.Net;
using System.IO;
using System.Web;
using Microsoft.AspNetCore.Http;

namespace DeliveryManager.Ajax
{
    public class ImageAjax : Controller
    {
        [HttpPost]
        [Route("ImageAjax/Create")]
        public IActionResult CreateImage(IFormFile fileImage)
        {
            try
            {
                Account account = new Account(
                    "deliverymanager",
                    "923844368436285",
                    "bIj2wIagyrz4lxViGx-bXHzbE78");


                Cloudinary cloudinary = new Cloudinary(account);
                var uploadParams = new ImageUploadParams()
                {
                    File = new FileDescription(fileImage.Name, fileImage.OpenReadStream()),
                    Overwrite = true,
                    NotificationUrl = "https://mysite/my_notification_endpoint"
                };
                var uploadResult = cloudinary.Upload(uploadParams);
                return Json(uploadResult?.SecureUrl);
            }
            catch (Exception ex)
            {
                return NotFound(ex);   
            }
        }

        [HttpPut]
        [Route("ImageAjax/Edit")]
        public IActionResult EditImage([Bind("fileImage")] IFormFile fileImage,[Bind("Url")]string url)
        {
            try
            {
                Account account = new Account(
                    "deliverymanager",
                    "923844368436285",
                    "bIj2wIagyrz4lxViGx-bXHzbE78");


                Cloudinary cloudinary = new Cloudinary(account);
                if(fileImage == null || !string.IsNullOrWhiteSpace(cloudinary.GetResource(GetPublicIdByUrl(url))?.SecureUrl)) return Json(url);

                              
                var uploadParams = new ImageUploadParams()
                {
                    File = new FileDescription(fileImage.Name, fileImage.OpenReadStream()),
                    Overwrite = true,
                    NotificationUrl = "https://mysite/my_notification_endpoint"
                };
                var uploadResult = cloudinary.Upload(uploadParams);
                return Json(uploadResult?.SecureUrl);               
               
            }
            catch (Exception ex)
            {
                return NotFound(ex);
            }
        }
        public string GetPublicIdByUrl(string url) 
        {
            if (string.IsNullOrWhiteSpace(url)) return string.Empty;

            return System.IO.Path.GetFileNameWithoutExtension(url);
        }
    }
}
