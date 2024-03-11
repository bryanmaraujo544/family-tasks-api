import { Module } from '@nestjs/common';
import { UsersCommandsModule } from './application/commands/users/users-commands.module';

@Module({ imports: [UsersCommandsModule] })
export class AppModule {}
