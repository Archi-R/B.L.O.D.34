import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { QuestionsModule } from './questions/questions.module';

@Module({
  controllers: [AppController],
  imports: [QuestionsModule],
  providers: [AppService],
})
export class AppModule {}
