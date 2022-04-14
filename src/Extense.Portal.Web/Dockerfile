FROM proget-repository.extense.io/extense-docker/dotnet/aspnet:5.0-alpine3.12-1.1.5 AS base
EXPOSE 8080
ENV ASPNETCORE_URLS=http://++:8080

FROM proget-repository.extense.io/extense-docker/dotnet/sdk:5.0-alpine3.12-1.1.5 AS build

FROM build AS publish
RUN dotnet publish "src/Extense.Portal.Web/Extense.Portal.Web.csproj" -c Release -o /app/publish /p:DebugType=None --no-build

FROM base as final
COPY --from=publish /app/publish .

ENTRYPOINT ["dotnet", "Extense.Portal.Web.dll"]
