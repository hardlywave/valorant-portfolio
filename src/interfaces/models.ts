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

export interface IRole {
  uuid: string;
  displayName: string;
  description: string;
  displayIcon: string;
}

export interface IAbilities {
  description: string;
  displayIcon: string;
  displayName: string;
  slot: string;
}

export interface IMap {
  uuid: string;
  displayName: string;
  displayIcon: string;
  splash: string;
  coordinates: string;
  listViewIcon: string;
}

export interface IWeapon {
  uuid: string;
  displayName: string;
  category: string;
  defaultSkinUuid: string;
  displayIcon: string;
  killStreamIcon: string;
  shopData: IShopData;
  skins: [ISkin];
}

export interface ISkin {
  displayName: string;
  displayIcon: string;
  levels: [ISkinLevel];
}

export interface ISkinLevel {
  displayIcon: string;
}

export interface IShopData {
  category: string;
  categoryText: string;
}
