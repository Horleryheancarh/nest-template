import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import {
  CreateMediaDto,
  GetMediaPaginationDto,
  SearchMediaDto,
  UpdateMediaDto,
} from './dtos/MediaDTO';
import { MediaService } from './media.service';

@Controller('media')
@ApiTags('Media')
export class MediaController {
  constructor(private readonly mediaService: MediaService) {}

  @Post('')
  async createMedia(@Body() body: CreateMediaDto) {
    const data = await this.mediaService.createMedia(body);

    return {
      status: 'success',
      message: 'Post Endpoint',
      data,
    };
  }

  @Get('')
  async getMediaPagination(
    @Query('page', ParseIntPipe) page: number,
    @Query('perPage', ParseIntPipe) perPage: number,
  ) {
    console.log(page, perPage);
    const data = await this.mediaService.getMediaPagination({ page, perPage });

    return {
      status: 'success',
      message: 'Get Media Pagination Endpoint',
      data,
    };
  }

  @Get('/search')
  async searchMedia(@Query() query: SearchMediaDto) {
    console.log(query);
    const data = await this.mediaService.searchMedia(query);

    return {
      status: 'success',
      message: 'Get Search Media Endpoint',
      data,
    };
  }

  @Get(':id')
  async getSingleMedia(@Param('id') id: number) {
    const data = await this.mediaService.getSingleMedia(id);

    return {
      status: 'success',
      message: 'Get Single Media Endpoint',
      data,
    };
  }

  @Patch(':id')
  async updateMedia(@Param('id') id: number, @Body() body: UpdateMediaDto) {
    const data = await this.mediaService.updateMedia(id, body);

    return {
      status: 'success',
      message: 'Patch Media Endpoint',
      data,
    };
  }

  @Delete(':id')
  async deleteMedia(@Param('id') id: number) {
    const data = await this.mediaService.deleteMedia(id);

    return {
      status: 'success',
      message: 'Delete Media Endpoint',
      data,
    };
  }
}
