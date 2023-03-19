import { ApiProperty } from '@nestjs/swagger';
import { MediaType, Status } from '@prisma/client';
import { IsEnum, IsNumber, IsOptional, IsString, IsUrl } from 'class-validator';

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
  @IsEnum(MediaType)
  type: MediaType;

  @ApiProperty()
  @IsEnum(Status)
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
  @IsOptional()
  page?: number;

  @ApiProperty()
  @IsNumber()
  @IsOptional()
  perPage?: number;
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
  @IsEnum(MediaType)
  @IsOptional()
  type: MediaType;

  @ApiProperty()
  @IsEnum(Status)
  @IsOptional()
  status: Status;

  @ApiProperty()
  @IsString()
  @IsOptional()
  description: string;
}

export class UpdateMediaDto {
  @ApiProperty()
  @IsString()
  @IsOptional()
  name: string;

  @ApiProperty()
  @IsUrl()
  @IsOptional()
  url: string;

  @ApiProperty()
  @IsEnum(MediaType)
  @IsOptional()
  type: MediaType;

  @ApiProperty()
  @IsEnum(Status)
  @IsOptional()
  status: Status;

  @ApiProperty()
  @IsString()
  @IsOptional()
  description: string;
}
