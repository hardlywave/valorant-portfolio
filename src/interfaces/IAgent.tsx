import { IAbilities } from "./IAbilities";
import { IRole } from "./IRole";

export interface IAgent {
  uuid: string;
  displayName: string;
  description: string;
  developerName: string;
  displayIcon: string;
  displayIconSmall: string;
  bustPortrait: string;
  fullPortrait: string;
  fullPortraitV2: string;
  killfeedPortrait: string;
  background: string;
  backgroundGradientColors: [string, string, string, string];
  abilities: [IAbilities];
  role: IRole;
}
