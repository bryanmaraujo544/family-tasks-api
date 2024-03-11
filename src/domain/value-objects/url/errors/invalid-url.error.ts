import { DomainError } from 'src/domain/errors/domain-error';

export class InvalidUrlError implements DomainError {
  name = 'InvalidUrlError';
  reason?: string;

  constructor(reason?: string) {
    this.reason = reason || 'The URL provided is invalid';
  }
}
