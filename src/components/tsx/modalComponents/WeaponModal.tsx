import "../../scss/Modal.scss";
import { ISkin, IWeapon } from "../../../interfaces/models";
import ModalCloseButton from "./components/ModalCloseButton";
import React from "react";

interface WeaponProps {
  weapon: IWeapon;
  setClose: (value: boolean) => void;
}

const WeaponModal = ({ weapon, setClose }: WeaponProps) => {
  const skinChecker = (skin: ISkin, weapon: IWeapon) => {
    if (skin.displayName.split(" ")[0] === "Standard")
      return weapon.displayIcon;

    return skin.displayIcon
      ? skin.displayIcon
      : skin.levels[skin.levels.length - 1].displayIcon;
  };

  const categoriesChecker = (weapon: IWeapon) => {
    const category = weapon.shopData.category;
    const categoryText = weapon.shopData.categoryText;
    return category === categoryText
      ? category
      : categoryText + ` (${category})`;
  };

  return (
    <>
      <div className="modal-container">
        <div className="modal-content">
          <div className="modal-content-image-container">
            <div
              className="content-image"
              style={{
                boxShadow: "inset 1px 3px 30px 10px rgb(30 30 30 / 45%)",
                padding: "20px 0",
              }}
            >
              <img
                className="content-image-background"
                src={`${weapon.displayIcon}?w=248&fit=crop&auto=format`}
                srcSet={`${weapon.displayIcon}?w=248&fit=crop&auto=format&dpr=2 2x`}
                alt={weapon.displayName}
                style={{ width: "80%", height: "auto" }}
              />
            </div>
          </div>
          <div className="modal-container-info">
            <div className="modal-info-box">
              <p className="modal-info-name weapon-name">
                {weapon.displayName}
              </p>

              <p className="agent-info-dev-name">
                Category: {categoriesChecker(weapon)}
              </p>
            </div>
            <div className="weapon-skins-list">
              {weapon.skins.map(
                (skin, index) =>
                  skin.displayName.split(" ")[0] !== "Random" && (
                    <>
                      <div key={index} className="skins-container">
                        <div className="skin-header">
                          <h4 className="abilities-header-name">
                            {skin.displayName}
                          </h4>
                          <span className="abilities-header-slot">
                            Number of levels: {skin.levels.length}
                          </span>
                        </div>
                        <div className="skin-image-container">
                          <img
                            style={{ width: "80%", maxHeight: "300px" }}
                            src={`${skinChecker(
                              skin,
                              weapon
                            )}?w=248&fit=crop&auto=format`}
                            alt={skin.displayName}
                          />
                        </div>
                      </div>
                      {index < weapon.skins.length - 1 && (
                        <div className="skin-list-item-breaker" />
                      )}
                    </>
                  )
              )}
            </div>
          </div>
          <div className="close-icon-box">
            <ModalCloseButton setClose={setClose} />
          </div>
        </div>
      </div>
    </>
  );
};

export default WeaponModal;
