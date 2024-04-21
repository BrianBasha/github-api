To run this project run the following commands:
npm install
npm run start

This api has one GET endpoint http://localhost:3000/github/repositories which fetches all your repositories from the github api and filters them by checking if the repository name contains the keyword specified in the request(case insensitive) and requires three parameters in the following format:
{
apiToken: string,
keyword: string,
}
The apiToken is the token with which the api authenticates with the github api, you can generate a token at https://github.com/settings/tokens (Personal Access Token (Classic)). This token needs to have the repo scope activated in order to access private repositories.
The keyword is used to filter through the repository names.

This endpoint will return an array of every repository that fulfills the filter in the following format:
{
repositoryName: string,
ownerLogin: string,
repositoryUrl: string,
}
If an error occurs the endpoint will return a response of the following format:
{
message: string | string[],
error: string,
statusCode: number,
}
where the message will explain what error occurred.
