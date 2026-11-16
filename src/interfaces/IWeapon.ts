import { IShopData } from "./IShopData";
import { ISkin } from "./ISkin";

export interface IWeaponStats {
  fireRate: number;
  magazineSize: number;
  reloadTimeSeconds: number;
  equipTimeSeconds: number;
  wallPenetration: string | null;
}

export interface IWeapon {
  uuid: string;
  displayName: string;
  category: string;
  defaultSkinUuid: string;
  displayIcon: string;
  killStreamIcon: string;
  // Both are null for the melee weapon.
  shopData: IShopData | null;
  weaponStats: IWeaponStats | null;
  skins: ISkin[];
}
