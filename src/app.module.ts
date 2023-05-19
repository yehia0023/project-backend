import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';
import { UserSchema } from './user/user.schema';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://yehiam078:ItLUvslck8ZtrTr7@cluster0.iwhpfus.mongodb.net/?retryWrites=true&w=majority'),
    MongooseModule.forFeature([{ name: 'User', schema: UserSchema }]),
  ],
  controllers: [UserController],
  providers: [UserService],
})
export class AppModule {}
