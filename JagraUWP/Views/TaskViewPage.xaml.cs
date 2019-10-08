using System;

using JagraUWP.ViewModels;

using Windows.UI.Xaml;
using Windows.UI.Xaml.Controls;

namespace JagraUWP.Views
{
    public sealed partial class TaskViewPage : Page
    {
        private TaskViewViewModel ViewModel
        {
            get { return ViewModelLocator.Current.TaskViewViewModel; }
        }

        public TaskViewPage()
        {
            InitializeComponent();
            Loaded += TaskViewPage_Loaded;
        }

        private async void TaskViewPage_Loaded(object sender, RoutedEventArgs e)
        {
            await ViewModel.LoadDataAsync(MasterDetailsViewControl.ViewState);
        }
    }
}
