import { Either, right } from 'src/domain/errors/either';
import { Entity } from '../entity';
import { Url } from 'src/domain/value-objects/url/url.value-object';
import { Email } from 'src/domain/value-objects/email/email.value-object';

export enum UserRole {
  LEADER,
}

interface UserProps {
  name: string;
  phoneNumber: string;
  email: Email;
  imageUrl?: Url;
  description?: string;

  roles: (keyof typeof UserRole)[];
}

export class User extends Entity<UserProps> {
  constructor(props: UserProps, id?: number) {
    super(props, id);
  }

  static create(props: UserProps, id?: number): Either<never, User> {
    const user = new User(props, id);

    return right(user);
  }
}
