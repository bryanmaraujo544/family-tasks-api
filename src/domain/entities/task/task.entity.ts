import { Either, right } from 'src/domain/errors/either';
import { Entity } from '../entity';
import { Url } from 'src/domain/value-objects/url/url.value-object';
import { User } from '../user/user.entity';

interface TaskProps {
  title: string;
  createdBy: User;
  assignees: User[];
  description?: string;
  imageUrl?: Url;
  createdAt?: Date;
}

export class Task extends Entity<TaskProps> {
  constructor(props: TaskProps, id?: number) {
    super(props, id);
  }

  static create(props: TaskProps, id?: number): Either<never, Task> {
    const task = new Task(props, id);

    return right(task);
  }
}
