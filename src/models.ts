export interface IAgent {
  uuid: string;
  displayName: string;
  description: string;
  displayIcon: string;
  displayIconSmall: string;
  bustPortrait: string;
  fullPortrait: string;
  fullPortraitV2: string;
  killfeedPortrait: string;
  background: string;
  backgroundGradientColors: [string, string, string, string];
  role: {
    uuid: string;
    displayName: string;
    description: string;
    displayIcon: string;
  };
}

export interface IMap {
  [key: string]: any;
}
