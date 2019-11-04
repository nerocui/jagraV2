using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Windows.Web.Http;

namespace JagraUWP.Services
{
    class AuthService
    {
        public async Task Register(string username, string password)
        {
            try
            {
                // Construct the HttpClient and Uri. This endpoint is for test purposes only.
                HttpClient httpClient = new HttpClient();
                Uri uri = new Uri("https://localhost:44363/api/auth/register");

                // Construct the JSON to post.
                HttpStringContent content = new HttpStringContent(
                    "{ username: \"" + username + "\", password: \"" + password + "\" }",
                    Windows.Storage.Streams.UnicodeEncoding.Utf8,
                    "application/json");

                // Post the JSON and wait for a response.
                HttpResponseMessage httpResponseMessage = await httpClient.PostAsync(
                    uri,
                    content);

                // Make sure the post succeeded, and write out the response.
                httpResponseMessage.EnsureSuccessStatusCode();
                var httpResponseBody = await httpResponseMessage.Content.ReadAsStringAsync();
                Console.WriteLine(httpResponseBody);
            }
            catch (Exception ex)
            {
                // Write out any exceptions.
                Console.WriteLine(ex);
            }
        }

        public void Login()
        {

        }
    }
}
