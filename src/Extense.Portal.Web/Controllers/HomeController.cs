using System;
using System.Threading.Tasks;
using Extense.Portal.Web.ActionFilters;
using Extense.Portal.Web.Localization;
using Extense.Portal.Web.ViewModels.Home;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Localization;

namespace Extense.Portal.Web.Controllers
{
    [SecurityHeaders]
    [AllowAnonymous]
    public class HomeController : Controller
    {
        private readonly IStringLocalizer<SharedResource> _sharedLocalizer;

        public HomeController(IStringLocalizer<SharedResource> sharedLocalizer)
        {
            _sharedLocalizer = sharedLocalizer;
        }

        public async Task<IActionResult> Index()
        {
            var vm = await BuildHomeViewModelAsync();
            return View(vm);
        }

        private async Task<HomeViewModel> BuildHomeViewModelAsync()
        {
            return new HomeViewModel { Title = _sharedLocalizer[SharedResource.HelloWorld], Date = DateTime.Now };
        }
    }
}