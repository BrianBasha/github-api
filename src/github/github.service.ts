import {
  HttpException,
  HttpStatus,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { Octokit } from 'octokit';
import { OctokitResponse } from '@octokit/request/node_modules/@octokit/types';
import { RequestError } from 'octokit';
import { cleanResponse } from './util';
import { RequestReposDto } from 'src/dto/request-repos.dto';

@Injectable()
export class GithubService {
  async getRepositoriesForKeyword({ apiToken, keyword }: RequestReposDto) {
    try {
      //create an authenticated client to make github api requests
      const octokit = new Octokit({ auth: apiToken });
      //fetch user repositories
      const data: OctokitResponse<any> = await octokit.request(
        'GET /user/repos',
        {
          headers: {
            'X-GitHub-Api-Version': '2022-11-28',
          },
        },
      );
      //call function to filter the user repositories
      return cleanResponse(data, keyword);
    } catch (error) {
      //handles errors from the github api
      if (error instanceof RequestError) {
        switch (error.status) {
          case 401: {
            throw new UnauthorizedException({
              message:
                'We could not authenticate with Github API. Please check your token and try again.',
              error: 'Unauthorized',
              statusCode: 401,
            });
          }
          case 500: {
            throw new HttpException(
              'There was an error in connecting to the Github API. Please try again later',
              HttpStatus.SERVICE_UNAVAILABLE,
            );
          }
        }
      } else {
        throw error;
      }
    }
  }
}
