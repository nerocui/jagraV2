using System;
using System.Threading.Tasks;

using JagraUWP.Helpers;
using JagraUWP.Services;
using JagraUWP.ViewModels;
using JagraUWP.Views;

using Windows.ApplicationModel.Activation;

namespace JagraUWP.Activation
{
    internal class SchemeActivationHandler : ActivationHandler<ProtocolActivatedEventArgs>
    {
        public NavigationServiceEx NavigationService => ViewModelLocator.Current.NavigationService;

        // By default, this handler expects URIs of the format 'wtsapp:sample?paramName1=paramValue1&paramName2=paramValue2'
        protected override async Task HandleInternalAsync(ProtocolActivatedEventArgs args)
        {
            // Create data from activation Uri in ProtocolActivatedEventArgs
            var data = new SchemeActivationData(args.Uri);
            if (data.IsValid)
            {
                MenuNavigationHelper.UpdateView(data.ViewModelName, data.Parameters);
            }

            await Task.CompletedTask;
        }

        protected override bool CanHandleInternal(ProtocolActivatedEventArgs args)
        {
            // If your app has multiple handlers of ProtocolActivationEventArgs
            // use this method to determine which to use. (possibly checking args.Uri.Scheme)
            return true;
        }
    }
}
