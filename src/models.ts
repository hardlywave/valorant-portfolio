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
  uuid: string;
  displayName: string;
  splash: string;
}

export interface IWeapon {
  uuid: string;
  displayName: string;
  category: string;
  defaultSkinUuid: string;
  displayIcon: string;
  killStreamIcon: string;
}
