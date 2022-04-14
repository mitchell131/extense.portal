using System;
using Extense.Portal.Web.Localization;
using Extense.Portal.Web.Localization;
using IdentityModel;
using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Razor;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.IdentityModel.Protocols.OpenIdConnect;

namespace Extense.Portal.Web.Extensions
{
    public static class ServiceCollectionExtensions
    {
        public static void AddLocalizationServices(this IServiceCollection services)
        {
            services
                .AddMvc()
                .AddViewLocalization(LanguageViewLocationExpanderFormat.Suffix, options =>
                {
                    options.ResourcesPath = LocalizationConfiguration.ResourcePath;
                })
                .AddDataAnnotationsLocalization(options =>
                {
                    options.DataAnnotationLocalizerProvider = (_, factory) => factory.Create(typeof(SharedResource));
                });

            services.Configure<RequestLocalizationOptions>(options =>
            {
                options.SupportedCultures = LocalizationConfiguration.SupportedCultures;
                options.SupportedUICultures = LocalizationConfiguration.SupportedUICultures;
                options.DefaultRequestCulture = LocalizationConfiguration.DefaultRequestCulture;
            });
        }
    }
}