export interface ITeams {
  name: string;
  username: string;
  password: string;
  type: "paper" | "metal" | "mixed" | "glass";
  id: string;
}
