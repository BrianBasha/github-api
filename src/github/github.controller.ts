import { Body, Controller, Get } from '@nestjs/common';
import { GithubService } from './github.service';
import { RequestReposDto } from 'src/dto/request-repos.dto';
import { UserRepository } from './util';
import { RequestReposHttpDto } from 'src/dto/request-repos-http.dto';

@Controller('github')
export class GithubController {
  constructor(private githubService: GithubService) {}

  //configures the api endpoint as a get request
  @Get('repositories')
  async getAllRepositories(
    @Body() requestBody: RequestReposDto,
  ): Promise<UserRepository[]> {
    return await this.githubService.getRepositoriesForKeyword(requestBody);
  }

  //configures the api endpoint as a get request
  @Get('repositories-http')
  async getAllRepositoriesHttp(
    @Body() requestBody: RequestReposHttpDto,
  ): Promise<UserRepository[]> {
    return await this.githubService.getRepositoriesHttp(requestBody);
  }
}
