import { Controller, Get, Logger } from '@nestjs/common';
import { QuestionsService } from './questions.service';

@Controller('questions')
export class QuestionsController {
  private readonly logger = new Logger(QuestionsController.name);

  constructor(private questionsService: QuestionsService) {}

  @Get()
  findAll() {
    return this.questionsService.findAll();
  }
}
