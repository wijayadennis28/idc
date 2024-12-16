import React from "react";

import Branches from "./Branches";

import { Trans } from "react-i18next";

const PopUpMap = () => {
  return (
    <dialog id="map-modal" className="modal">
      <div className="modal-box w-11/12 max-w-5xl">
        <form method="dialog">
          {/* if there is a button in form, it will close the modal */}
          <button className="btn btn-circle btn-primary btn-sm absolute right-2 top-2">
            ✕
          </button>
        </form>
        <div className="flex flex-col items-center">
          <h1 className="pb-6 font-normal text-primary">
            <Trans
              i18nKey="ourLocation"
              components={{ span: <span className="font-bold" /> }}
            />
          </h1>
          <Branches btnColor="secondary" />
        </div>
      </div>
      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  );
};

export default PopUpMap;
