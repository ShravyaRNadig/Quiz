import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {QuizDataSource} from '../datasources';
import {Question} from '../models';

export class QuestionRepository extends DefaultCrudRepository<
  Question,
  typeof Question.prototype.id
> {
  constructor(
    @inject('datasources.Quiz') dataSource: QuizDataSource,
  ) {
    super(Question, dataSource);
  }
}
