namespace Extense.Portal.Web.Localization
{
    public static class KnownCulture
    {
        public const string English = "en";

        public static string GetDescription(string culture)
        {
            return culture switch
            {
                English => "English",
                _ => culture
            };
        }
    }
}