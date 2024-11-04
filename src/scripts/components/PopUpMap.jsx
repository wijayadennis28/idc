import React from "react";

const PopUpMap = () => {
  return (
    <dialog id="map-modal" className="modal">
      <div className="modal-box">
        <form method="dialog">
          {/* if there is a button in form, it will close the modal */}
          <button className="btn btn-circle btn-primary btn-sm absolute right-2 top-2">
            ✕
          </button>
        </form>
        <div className="flex flex-col items-center">
          <h1 className="font-normal text-primary">
            Our <span className="font-bold">location</span>
          </h1>
        </div>
      </div>
      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  );
};

export default PopUpMap;
