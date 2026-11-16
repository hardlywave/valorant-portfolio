import React, { useMemo, useState } from "react";
import { IWeapon } from "../../../interfaces/IWeapon";
import {
  displayableSkins,
  skinImage,
  weaponCategory,
} from "../../../utils/weapon";
import ModalShell from "./components/ModalShell";

interface WeaponProps {
  weapon: IWeapon;
  setClose: (value: boolean) => void;
}

const WeaponModal = ({ weapon, setClose }: WeaponProps) => {
  const skins = useMemo(() => displayableSkins(weapon), [weapon]);
  const [skinUuid, setSkinUuid] = useState<string | null>(null);
  const skin = skins.find((item) => item.uuid === skinUuid);
  const stats = weapon.weaponStats;

  return (
    <ModalShell label={weapon.displayName} setClose={setClose}>
      <div className="modal-media modal-media--striped">
        <img
          className="modal-media-weapon"
          src={(skin && skinImage(skin, weapon)) || weapon.displayIcon}
          alt={skin ? skin.displayName : weapon.displayName}
        />
        <p className="modal-media-caption">
          {skin ? skin.displayName : `Standard ${weapon.displayName}`}
        </p>
      </div>
      <div className="modal-info">
        <h2 className="modal-title">{weapon.displayName}</h2>
        <dl className="modal-facts">
          <div>
            <dt>Category</dt>
            <dd>
              {weapon.shopData
                ? weapon.shopData.categoryText
                : weaponCategory(weapon)}
            </dd>
          </div>
          {weapon.shopData && (
            <div>
              <dt>Cost</dt>
              <dd>{weapon.shopData.cost.toLocaleString("en-US")}</dd>
            </div>
          )}
          {stats && (
            <>
              <div>
                <dt>Fire rate</dt>
                <dd>{stats.fireRate} rds/s</dd>
              </div>
              <div>
                <dt>Magazine</dt>
                <dd>{stats.magazineSize}</dd>
              </div>
              <div>
                <dt>Reload</dt>
                <dd>{stats.reloadTimeSeconds} s</dd>
              </div>
            </>
          )}
        </dl>
        <h3 className="section-title">Skins ({skins.length})</h3>
        <div className="modal-skins">
          {skins.map((item) => (
            <button
              key={item.uuid}
              className={`modal-skin${item === skin ? " is-active" : ""}`}
              aria-pressed={item === skin}
              onClick={() => setSkinUuid(item.uuid)}
            >
              <img
                src={skinImage(item, weapon) || ""}
                alt=""
                loading="lazy"
              />
              <span>{item.displayName}</span>
            </button>
          ))}
        </div>
      </div>
    </ModalShell>
  );
};

export default WeaponModal;
