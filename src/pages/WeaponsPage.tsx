import React, { useMemo, useState } from "react";
import "../components/scss/Catalog.scss";

import useWeapon from "../requests/getWeapon";
import Weapons from "../components/tsx/Weapons";
import Loader from "../components/tsx/mainComponents/Loader";
import LoadError from "../components/tsx/mainComponents/LoadError";
import { ISkin } from "../interfaces/ISkin";
import { displayableSkins, weaponCategory } from "../utils/weapon";

type SortBy = "name" | "category";

const WeaponsPage = () => {
  const { loading, error, weapons } = useWeapon();
  const [sortBy, setSortBy] = useState<SortBy>("name");
  // Weapon uuid -> skin shown on its card. Empty means standard skins.
  const [skins, setSkins] = useState<{ [uuid: string]: ISkin }>({});

  const weaponsList = useMemo(
    () =>
      [...weapons].sort(
        (a, b) =>
          (sortBy === "category"
            ? weaponCategory(a).localeCompare(weaponCategory(b))
            : 0) || a.displayName.localeCompare(b.displayName)
      ),
    [weapons, sortBy]
  );

  const shuffleSkins = () => {
    const picked: { [uuid: string]: ISkin } = {};
    weapons.forEach((weapon) => {
      const options = displayableSkins(weapon);
      if (options.length > 0) {
        picked[weapon.uuid] =
          options[Math.floor(Math.random() * options.length)];
      }
    });
    setSkins(picked);
  };

  const shuffled = Object.keys(skins).length > 0;

  return (
    <main className="page">
      <div className="page-head">
        <div>
          <h1 className="page-title">Weapons</h1>
          <p className="page-subtitle">
            Select a weapon to see its stats and browse every skin.
          </p>
        </div>
        <div className="toolbar">
          <button
            className={`chip${sortBy === "name" ? " is-active" : ""}`}
            aria-pressed={sortBy === "name"}
            onClick={() => setSortBy("name")}
          >
            By name
          </button>
          <button
            className={`chip${sortBy === "category" ? " is-active" : ""}`}
            aria-pressed={sortBy === "category"}
            onClick={() => setSortBy("category")}
          >
            By category
          </button>
          <button className="chip" onClick={shuffleSkins}>
            Shuffle skins
          </button>
          {shuffled && (
            <button className="chip" onClick={() => setSkins({})}>
              Standard skins
            </button>
          )}
        </div>
      </div>
      <Loader loading={loading} />
      {error && <LoadError />}
      <div className="catalog-grid">
        {weaponsList.map((weapon) => (
          <Weapons
            key={weapon.uuid}
            weapon={weapon}
            skin={skins[weapon.uuid]}
          />
        ))}
      </div>
    </main>
  );
};

export default WeaponsPage;
