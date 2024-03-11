import { Either, left, right } from 'src/domain/errors/either';
import { ValueObject } from '../value-object';
import { InvalidUrlError } from './errors/invalid-url.error';

export interface UrlProps {
  value: string;
}

export class Url extends ValueObject<UrlProps> {
  constructor(props: UrlProps) {
    super(props);
  }

  static isValidUrl(value: string) {
    const urlRegex: RegExp = /^(https?|ftp):\/\/[^\s\/$.?#].[^\s]*$/;

    return urlRegex.test(value);
  }

  static create(props: UrlProps): Either<InvalidUrlError, Url> {
    if (!Url.isValidUrl(props.value)) {
      return left(InvalidUrlError);
    }

    return right(new Url(props));
  }
}
