import { OctokitResponse } from '@octokit/request/node_modules/@octokit/types';

//Filters the array to only contain repositories, the names of which contain the keyword from the api request.
export const filterReposWithKeyword = (
  keyword: string,
  repos: UserRepository[],
) => {
  return repos.filter((repo) =>
    repo.repositoryName.toLowerCase().includes(keyword.toLowerCase()),
  );
};

//Converts the Github api response to an array with only the repository name, owner login and repository url
export const formatResponse = (
  response: OctokitResponse<any>,
  keyword: string,
) => {
  const reposArray: UserRepository[] = response.data.map((repo: any) => {
    return {
      repositoryName: repo.name,
      ownerLogin: repo.owner.login,
      repositoryUrl: repo.url,
    };
  });
  return filterReposWithKeyword(keyword, reposArray);
};

//Converts the Github api response to an array with only the repository name, owner login and repository url
export const formatHttpResponse = (
  response: {
    name: string;
    owner: { login: string };
    url: string;
  }[],
  keyword: string,
) => {
  const reposArray: UserRepository[] = response.map((repo: any) => {
    return {
      repositoryName: repo.name,
      ownerLogin: repo.owner.login,
      repositoryUrl: repo.url,
    };
  });
  return filterReposWithKeyword(keyword, reposArray);
};

export type UserRepository = {
  repositoryName: string;
  ownerLogin: string;
  repositoryUrl: string;
};
