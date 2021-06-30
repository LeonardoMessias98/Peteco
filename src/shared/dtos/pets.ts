export interface IPet {
  id: number;
  user_id: number;
  name: string;
  breed: string;
  animal: string;
  age: number;
  castrated: boolean;
  description: string;
  created_at: string;
  updated_at: string;
}

export type IPets = Array<IPet>;
