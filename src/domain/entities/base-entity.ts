/**
 * Base entity with identity. All domain entities extend this.
 */
export abstract class BaseEntity<TId> {
  constructor(public readonly id: TId) {}
}
