import {Entity, model, property} from '@loopback/repository';

@model()
export class Question extends Entity {
  @property({
    type: 'string',
    id: true,  // Make sure this is set to true for the ID property
    generated: true,
  })
  id?: string;

  @property({
    type: 'string',
    required: true,
  })
  text: string;

  @property({
    type: 'array',
    itemType: 'string', // Assuming options are strings
    required: false,
  })
  options?: string[];

  @property({
    type: 'string', // Change this to 'string' or appropriate type
    required: true,
  })
  correctAnswer: string;

  constructor(data?: Partial<Question>) {
    super(data);
  }
}
