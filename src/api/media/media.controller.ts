import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateMediaDto } from './dtos/MediaDTO';
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
  async getMediaPagination() {
    return await this.mediaService.getMediaPagination();
  }

  @Get('media/:id')
  async getSingleMedia(@Param() id: number) {
    const data = await this.mediaService.getSingleMedia(id);

    return { message: 'Get Single Media Endpoint', data };
  }

  @Get('media/search')
  async searchMedia() {
    return await this.mediaService.searchMedia();
  }

  @Patch('media/:id')
  async updateMedia(@Param() id: number, @Body() body: CreateMediaDto) {
    const data = await this.mediaService.updateMedia(id, body);

    return { message: 'Patch Media Endpoint' };
  }

  @Delete('media/:id')
  async deleteMedia(@Param() id: number) {
    const data = await this.mediaService.deleteMedia(id);

    return { message: 'Delete Media Endpoint', data };
  }
}
