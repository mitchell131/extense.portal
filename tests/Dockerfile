FROM proget-repository.extense.io/extense-docker/dotnet/sdk:5.0-alpine3.12-1.1.2

ENTRYPOINT ["/scripts/test.sh"]
CMD ["-u", "-i", "-f", "Category=Unit|Category=Integration", "/sln/tests"]
