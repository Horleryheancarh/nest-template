import { ApiProperty } from '@nestjs/swagger';
import { MediaType, Status } from '@prisma/client';
import { IsOptional, IsString, IsUrl } from 'class-validator';

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

export class GetMediaPaginationDto {}
