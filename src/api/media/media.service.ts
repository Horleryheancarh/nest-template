import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { CreateMediaDto } from './dtos/MediaDTO';

@Injectable()
export class MediaService {
  constructor(private dbService: DatabaseService) {}

  async createMedia(createMediaDto: CreateMediaDto) {
    const media = this.dbService.media.create({
      data: {
        ...createMediaDto,
      },
    });

    return media;
  }

  async getMediaPagination() {
    return { message: 'Get Media Pagination Endpoint' };
  }

  async getSingleMedia(id: number) {
    const media = this.dbService.media.findFirst({
      where: {
        id,
      },
    });

    return media;
  }

  async searchMedia() {
    return { message: 'Get Search Media Endpoint' };
  }

  async updateMedia(id: number, body: CreateMediaDto) {
    const data = await this.dbService.media.update();

    data

    return data;
  }

  async deleteMedia(id) {
    const data = await this.dbService.media.delete({
      where: {
        id,
      },
    });

    return data;
  }
}
