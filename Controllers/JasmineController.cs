using System;
using System.Web.Mvc;

namespace Jaspah.Controllers
{
    public class JasmineController : Controller
    {
        public ViewResult Run()
        {
            return View("SpecRunner");
        }
    }
}
