export abstract class Entity<P> {
  id: number;
  props: P;

  constructor(props: P, id?: number) {
    this.id = id;
    this.props = props;
  }

  toData() {
    return {
      id: this.id,
      ...this.props,
    };
  }
}
