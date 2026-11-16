import React, { useState } from "react";
import { IWeapon } from "../../interfaces/IWeapon";
import { ISkin } from "../../interfaces/ISkin";
import { skinImage, weaponCategory } from "../../utils/weapon";
import WeaponModal from "./modalComponents/WeaponModal";

interface WeaponsProps {
  weapon: IWeapon;
  // Skin to show on the card; the standard look when omitted.
  skin?: ISkin;
}

const Weapons = ({ weapon, skin }: WeaponsProps) => {
  const [modalOpened, setModalOpened] = useState(false);

  return (
    <>
      {modalOpened && <WeaponModal weapon={weapon} setClose={setModalOpened} />}
      <button
        className="tile weapon-tile"
        onClick={() => setModalOpened(true)}
      >
        <span className="weapon-tile-stage">
          <img
            src={(skin && skinImage(skin, weapon)) || weapon.displayIcon}
            alt=""
            loading="lazy"
          />
        </span>
        <span className="tile-info">
          <span className="tile-name">{weapon.displayName}</span>
          <span className="tile-meta">
            {skin ? skin.displayName : weaponCategory(weapon)}
          </span>
        </span>
      </button>
    </>
  );
};

export default Weapons;
