using System.Collections.Generic;
using System.Globalization;
using Extense.Portal.Web.Localization;
using Microsoft.AspNetCore.Localization;

namespace Extense.Portal.Web.Localization
{
    public static class LocalizationConfiguration
    {
        public const string ResourcePath = "Resources";
        
        public static readonly RequestCulture DefaultRequestCulture = new(KnownCulture.English);
        
        public static readonly IList<CultureInfo> SupportedCultures = new List<CultureInfo>
        {
            new(KnownCulture.English)
        };
        
        public static readonly IList<CultureInfo> SupportedUICultures = new List<CultureInfo>
        {
            new(KnownCulture.English)
        };
    }
}