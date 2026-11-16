import { ISkin } from "../interfaces/ISkin";
import { IWeapon } from "../interfaces/IWeapon";

export const weaponCategory = (weapon: IWeapon) =>
  weapon.category.split("::")[1] || weapon.category;

const isStandard = (skin: ISkin) => skin.displayName.startsWith("Standard");

export const skinImage = (skin: ISkin, weapon: IWeapon) => {
  if (isStandard(skin)) return weapon.displayIcon;
  const lastLevel = skin.levels[skin.levels.length - 1];
  return skin.displayIcon || (lastLevel && lastLevel.displayIcon) || null;
};

// Skins worth showing: no "Random Favorite Skin" placeholder, no imageless ones.
export const displayableSkins = (weapon: IWeapon) =>
  weapon.skins.filter(
    (skin) =>
      !skin.displayName.startsWith("Random") && skinImage(skin, weapon)
  );
