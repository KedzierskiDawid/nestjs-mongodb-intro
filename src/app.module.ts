import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    UsersModule,
    MongooseModule.forRoot(`mongodb+srv://kedzierskidawid:uPUgElpNZVwAfpRV@kedzierskidawid-smyrj.mongodb.net/test?retryWrites=true&w=majority`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      dbName: 'example'
    })
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
