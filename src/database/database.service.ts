import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { DATABASE_URL } from 'src/config';

@Injectable()
export class DatabaseService extends PrismaClient {
  constructor() {
    super({
      datasources: {
        db: {
          url: DATABASE_URL,
        },
      },
    });

    this.$use(async (params, next) => {
      console.log(params);

      // Check incoming query type
      if (params.model == 'Media') {
        if (params.action == 'delete') {
          // Delete queries
          // Change action to an update
          params.action = 'update';
          params.args['data'] = { deleted: true };
        }
      }
      return next(params);
    });

    this.$use(async (params, next) => {
      if (params.model == 'Media') {
        if (params.action === 'findUnique' || params.action === 'findFirst') {
          params.action = 'findFirst';
          // Add 'deleted' filter
          params.args.where['deleted'] = false;
        }
        if (params.action === 'findMany') {
          // Find many queries
          if (params.args.where) {
            if (params.args.where.deleted == undefined) {
              // Exclude deleted records if they have not been explicitly requested
              params.args.where['deleted'] = false;
            }
          } else {
            params.args['where'] = { deleted: false };
          }
        }
      }
      return next(params);
    });
  }
}
