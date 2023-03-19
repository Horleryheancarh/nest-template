import { Injectable, NotFoundException } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import {
  CreateMediaDto,
  GetMediaPaginationDto,
  SearchMediaDto,
} from './dtos/MediaDTO';

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

  async getMediaPagination(data: GetMediaPaginationDto) {
    const { page, perPage } = data;

    const media = await this.dbService.media.findMany({
      skip: page,
      take: perPage,
    });

    return media;
  }

  async getSingleMedia(id: number) {
    const media = await this.dbService.media.findUnique({
      where: {
        id,
      },
    });

    if (!media) throw new NotFoundException('Media not found');

    return media;
  }

  async searchMedia(data: SearchMediaDto) {
    const media = await this.dbService.media.findMany({
      where: {
        ...data,
      },
    });

    return media;
  }

  async updateMedia(id: number, data: CreateMediaDto) {
    let media = await this.dbService.media.findUnique({
      where: {
        id,
      },
    });

    if (!media) throw new NotFoundException('Media not found');

    media = await this.dbService.media.update({
      where: { id },
      data: { ...data },
    });

    return media;
  }

  async deleteMedia(id: number) {
    const media = await this.dbService.media.delete({
      where: {
        id,
      },
    });

    if (!media) throw new NotFoundException('Media not found');

    return media;
  }
}
