import { IsNotEmpty } from 'class-validator';

//specify the endpoint request body format and validation rules
export class RequestReposDto {
  @IsNotEmpty()
  apiToken: string;

  @IsNotEmpty()
  keyword: string;
}
