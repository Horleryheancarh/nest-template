import { Module } from '@nestjs/common';
import { MediaModule } from './api/media/media.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [DatabaseModule, MediaModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
