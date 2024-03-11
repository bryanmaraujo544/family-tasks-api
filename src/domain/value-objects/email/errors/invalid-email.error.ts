import { DomainError } from 'src/domain/errors/domain-error';

export class InvalidEmailError implements DomainError {
  name = 'InvalidEmailError';
  reason?: string;

  constructor(reason?: string) {
    this.reason = reason || 'The email provided is invalid';
  }
}
