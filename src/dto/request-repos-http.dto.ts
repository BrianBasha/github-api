import { IsNotEmpty } from 'class-validator';

//specify the endpoint request body format and validation rules
export class RequestReposHttpDto {
  @IsNotEmpty()
  username: string;

  @IsNotEmpty()
  apiToken: string;

  @IsNotEmpty()
  keyword: string;
}
