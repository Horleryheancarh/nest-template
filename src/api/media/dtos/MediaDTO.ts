import { ApiProperty } from '@nestjs/swagger';
import { MediaType, Status } from '@prisma/client';
import { IsNumber, IsOptional, IsString, IsUrl } from 'class-validator';

export class CreateMediaDto {
  @ApiProperty({
    required: true,
  })
  @IsString()
  name: string;

  @ApiProperty({
    required: true,
  })
  @IsUrl()
  url: string;

  @ApiProperty({
    required: true,
  })
  @IsString()
  type: MediaType;

  @ApiProperty()
  @IsString()
  @IsOptional()
  status: Status;

  @ApiProperty()
  @IsString()
  @IsOptional()
  description: string;
}

export class GetMediaPaginationDto {
  @ApiProperty()
  @IsNumber()
  page: number;

  @ApiProperty()
  @IsNumber()
  perPage: number;

  @ApiProperty()
  @IsString()
  @IsOptional()
  name: string;

  @ApiProperty()
  @IsUrl()
  @IsOptional()
  url: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  type: MediaType;

  @ApiProperty()
  @IsString()
  @IsOptional()
  status: Status;

  @ApiProperty()
  @IsString()
  @IsOptional()
  description: string;
}

export class SearchMediaDto {
  @ApiProperty()
  @IsString()
  @IsOptional()
  name: string;

  @ApiProperty()
  @IsUrl()
  @IsOptional()
  url: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  type: MediaType;

  @ApiProperty()
  @IsString()
  @IsOptional()
  status: Status;

  @ApiProperty()
  @IsString()
  @IsOptional()
  description: string;
}
