import { Controller, Delete, Get, Patch, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { MediaService } from './media.service';

@Controller('media')
@ApiTags('Media')
export class MediaController {
  constructor(private readonly mediaService: MediaService) {}

  @Post('media')
  async createMedia() {
    return { message: 'Post Endpoint' };
  }

  @Get('media')
  async getMediaPagination() {
    return { message: 'Get Media Pagination Endpoint' };
  }

  @Get('media/:id')
  async getSingleMedia() {
    return { message: 'Get Single Media Endpoint' };
  }

  @Get('media/search')
  async searchMedia() {
    return { message: 'Get Search Media Endpoint' };
  }

  @Patch('media/:id')
  async updateMedia() {
    return { message: 'Patch Media Endpoint' };
  }

  @Delete('media/:id')
  async deleteMedia() {
    return { message: 'Delete Media Endpoint' };
  }
}
