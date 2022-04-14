using Extense.Authentication.OAuth.Extensions;
using Extense.HealthChecks.Extensions;
using Extense.Logging.AspNetCore;
using Extense.OpenTelemetry;
using Extense.OpenTelemetry.Exporters.Jaeger;
using Extense.OpenTelemetry.Instrumentation.AspNetCore;
using Extense.OpenTelemetry.Instrumentation.Http;
using Extense.Portal.Web.Extensions;
using Extense.Web.ApplicationMetrics.Extensions;
using Extense.Web.ApplicationMetrics.Prometheus.Extensions;
using Extense.Web.Hosting.Extensions;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;

namespace Extense.Portal.Web
{
    public class Startup
    {
        private readonly IConfiguration _configuration;

        public Startup(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        public void ConfigureServices(IServiceCollection services)
        {
            services.AddLocalizationServices();
            services.AddCors();
            services.AddAppInformation(_configuration);
            services.AddDistributedTracing(_configuration);
            services.AddAppMetrics(_configuration);
            services.AddForwardedHeaders();

            services.AddOpenTelemetryTracing(builder =>
            {
                builder
                    .AddDefaultService()
                    .AddDefaultSources()
                    .AddDefaultAspNetCoreInstrumentation()
                    .AddDefaultHttpClientInstrumentation()
                    .AddJaegerExporter(_configuration);
            });

            services.AddHealthChecks();
        }

        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            
            app.UseExtenseRequestLogging();
            app.UseRequestLocalization();
            app.UseDistributedTracing();
            app.UseForwardedHeaders();
            app.UseRouting();
            app.UseStaticFiles();
            app.UseHealthChecks();
            app.UseHttpAppMetrics();
            app.UseCors(c =>
            {
                c.AllowAnyOrigin();
                c.AllowAnyHeader();
            });
            app.UseEndpoints(endpoints =>
            {
                endpoints.MapDefaultControllerRoute();
                endpoints.MapAppInformation();
                endpoints.MapHealthChecks();
                endpoints.MapAppMetrics();
            });
        }
    }
}