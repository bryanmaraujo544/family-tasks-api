import { Either, left, right } from 'src/domain/errors/either';
import { ValueObject } from '../value-object';
import { InvalidEmailError } from './errors/invalid-email.error';

export interface EmailProps {
  value: string;
}

export class Email extends ValueObject<EmailProps> {
  constructor(props: EmailProps) {
    super(props);
  }

  static isValidEmail(value: string) {
    const emailRegex: RegExp = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    return emailRegex.test(value);
  }

  static create(props: EmailProps): Either<InvalidEmailError, Email> {
    if (!Email.isValidEmail(props.value)) {
      return left(InvalidEmailError);
    }

    return right(new Email(props));
  }
}
