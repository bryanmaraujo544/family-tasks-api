import { Either, right } from 'src/domain/errors/either';
import { Entity } from '../entity';
import { Url } from 'src/domain/value-objects/url/url.value-object';
import { User } from '../user/user.entity';

interface FamilyProps {
  name: string;
  description?: string;
  imageUrl?: Url;
  createdAt?: Date;
  leaders: User[];
  members: User[];
}

export class Family extends Entity<FamilyProps> {
  constructor(props: FamilyProps, id?: number) {
    super(props, id);
  }

  static create(props: FamilyProps, id?: number): Either<never, Family> {
    const family = new Family(props, id);

    return right(family);
  }
}
