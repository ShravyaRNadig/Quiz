import {Getter, inject} from '@loopback/core';
import {DefaultCrudRepository, HasManyRepositoryFactory, repository} from '@loopback/repository';
import {QuizDataSource} from '../datasources';
import {Question, Quiz} from '../models';
import {QuestionRepository} from '../repositories/question.repository';

export class QuizRepository extends DefaultCrudRepository<
  Quiz,
  typeof Quiz.prototype.id
> {
  public readonly questions: HasManyRepositoryFactory<Question, typeof Quiz.prototype.id>;

  constructor(
    @inject('datasources.db') dataSource: QuizDataSource,
    @repository.getter('QuestionRepository') protected questionRepositoryGetter: Getter<QuestionRepository>,
  ) {
    super(Quiz, dataSource);
    this.questions = this.createHasManyRepositoryFactoryFor('questions', questionRepositoryGetter);
    this.registerInclusionResolver('questions', this.questions.inclusionResolver);
  }
}
