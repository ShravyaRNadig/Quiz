import {Entity, hasMany, model, property} from '@loopback/repository';
import {Question} from './question.model';

@model()
export class Quiz extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id: string;

  @property({
    type: 'string',
    required: true,
  })
  title: string;

  @property({
    type: 'string',
    required: true,
  })
  description: string;

  @hasMany(() => Question)
  questions: Question[];

  constructor(data?: Partial<Quiz>) {
    super(data);
  }
}
