using System;

namespace DeliveryManager.Web.Configuration
{
    [Serializable]
    public static class AppConfiguration<TSetting>
    {
        private static TSetting _settings;

        public static TSetting Settings
        {
            get
            {
                if (_settings == null)
                {
                    _settings = GetSettings<TSetting>();
                }

                return _settings;
            }
        }

        private static TConfig GetSettings<TConfig>()
        {
            return SettingsReader.LoadSettings<TConfig>($"{AppDomain.CurrentDomain.BaseDirectory}\\appsettings.json");
        }
    }
}