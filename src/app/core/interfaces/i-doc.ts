export interface IDoc {
  readonly id: number;
  readonly user?: {
    username: string;
    email: string;
  };
  readonly filename?: string;
  file: string;
  readonly created: string;
  readonly updated: string;
  readonly owner: number;
}
