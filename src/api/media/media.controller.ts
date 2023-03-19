import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import {
  CreateMediaDto,
  GetMediaPaginationDto,
  SearchMediaDto,
} from './dtos/MediaDTO';
import { MediaService } from './media.service';

@Controller('media')
@ApiTags('Media')
export class MediaController {
  constructor(private readonly mediaService: MediaService) {}

  @Post('media')
  async createMedia(@Body() body: CreateMediaDto) {
    const data = await this.mediaService.createMedia(body);

    return { message: 'Post Endpoint', data };
  }

  @Get('media')
  async getMediaPagination(@Query() query: GetMediaPaginationDto) {
    const data = await this.mediaService.getMediaPagination(query);

    return { message: 'Get Media Pagination Endpoint', data };
  }

  @Get('media/:id')
  async getSingleMedia(@Param() id: number) {
    const data = await this.mediaService.getSingleMedia(id);

    return { message: 'Get Single Media Endpoint', data };
  }

  @Get('media/search')
  async searchMedia(@Query() query: SearchMediaDto) {
    const data = await this.mediaService.searchMedia(query);

    return { message: 'Get Search Media Endpoint', data };
  }

  @Patch('media/:id')
  async updateMedia(@Param() id: number, @Body() body: CreateMediaDto) {
    const data = await this.mediaService.updateMedia(id, body);

    return { message: 'Patch Media Endpoint', data };
  }

  @Delete('media/:id')
  async deleteMedia(@Param() id: number) {
    const data = await this.mediaService.deleteMedia(id);

    return { message: 'Delete Media Endpoint', data };
  }
}
