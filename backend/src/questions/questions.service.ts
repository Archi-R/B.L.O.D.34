import { Injectable } from '@nestjs/common';
import { questions } from '../../qcm/questions';

@Injectable()
export class QuestionsService {
  findAll() {
    return questions;
  }
}
