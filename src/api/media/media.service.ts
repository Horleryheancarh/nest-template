import { Injectable, NotFoundException } from '@nestjs/common';
import { Media } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';
import {
  CreateMediaDto,
  GetMediaPaginationDto,
  SearchMediaDto,
} from './dtos/MediaDTO';

@Injectable()
export class MediaService {
  constructor(private dbService: DatabaseService) {}

  async createMedia(createMediaDto: CreateMediaDto): Promise<Media> {
    const media = this.dbService.media.create({
      data: {
        ...createMediaDto,
      },
    });

    return media;
  }

  async getMediaPagination(data: GetMediaPaginationDto): Promise<Array<Media>> {
    const { page, perPage } = data;

    const media = await this.dbService.media.findMany({
      skip: page,
      take: perPage,
    });

    return media;
  }

  async getSingleMedia(id: number): Promise<Media> {
    const media = await this.dbService.media.findUnique({
      where: {
        id,
      },
    });

    if (!media) throw new NotFoundException('Media not found');

    return media;
  }

  async searchMedia(data: SearchMediaDto): Promise<Array<Media>> {
    const media = await this.dbService.media.findMany({
      where: {
        ...data,
      },
    });

    return media;
  }

  async updateMedia(id: number, data: CreateMediaDto): Promise<Media> {
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

  async deleteMedia(id: number): Promise<Media> {
    let media = await this.dbService.media.findUnique({
      where: {
        id,
      },
    });

    if (!media) throw new NotFoundException('Media not found');

    media = await this.dbService.media.delete({
      where: {
        id,
      },
    });

    return media;
  }
}
