using System;

using JagraUWP.ViewModels;

using Windows.UI.Xaml.Controls;

namespace JagraUWP.Views
{
    public sealed partial class MainPage : Page
    {
        private MainViewModel ViewModel
        {
            get { return ViewModelLocator.Current.MainViewModel; }
        }

        public MainPage()
        {
            InitializeComponent();
        }
    }
}
