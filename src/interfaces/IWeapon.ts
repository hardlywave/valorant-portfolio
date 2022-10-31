import { IShopData } from "./IShopData";
import { ISkin } from "./ISkin";

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
