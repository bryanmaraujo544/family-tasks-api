export abstract class ValueObject<P> {
  props: P;

  constructor(props: P) {
    this.props = props;
  }
}
