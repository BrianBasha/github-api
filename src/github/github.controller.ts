import { Body, Controller, Get } from '@nestjs/common';
import { GithubService } from './github.service';
import { RequestReposDto } from 'src/dto/request-repos.dto';
import { UserRepository } from './util';

@Controller('github')
export class GithubController {
  constructor(private githubService: GithubService) {}

  //configures the api endpoint as a post request
  @Get('repositories')
  async getAllRepositories(
    @Body() requestBody: RequestReposDto,
  ): Promise<UserRepository[]> {
    return await this.githubService.getRepositoriesForKeyword(requestBody);
  }
}
