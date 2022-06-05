import React, { useRef, useMemo } from "react";
import SDK from "./Sdk";
import shortid from "shortid";

export default function Modal({ closeModal, media_type, id, addData }) {
  const sdk = new SDK();
  const list = useRef(null);

  // add item function
  const add = async (e) => {
    e.preventDefault();
    const ListId = list.current.value;
    const listData = {
      items: [
        {
          media_type: media_type,
          media_id: id,
        },
      ],
    };

    try {
      const req = await sdk.addItem(ListId, listData);
      console.log(req);
    } catch (error) {
      console.log(error);
    }

    if (listData) {
      alert("Movie added");
    }
  };
  //movies value and
  const Lists = useMemo(() => {
    return addData?.results.map((e) => {
      return (
        <option key={shortid.generate()} value={e.id}>
          {e.name}
        </option>
      );
    });
  }, [addData]);

  return (
    <>
      <div className="main-modal w-72 absolute bg-gray-400 z-20 p-4 rounded" style={{ left:"40%", top:"40%"}} >
        <div className="main-body">
          <div className="modal-close py-1 px-2 text-right text-xl relative right-0" onClick={() => closeModal(false)}>
            <i className="fas fa-times pointer"></i>
          </div>
          <form action="" className="flex flex-col ">
            <select
              ref={list}
              className="text-gray-700 font-semibold p-2 rounded outline-none"
            >
              <option
                value="0"
                selected
                className="p-2 rounded  text-gray-800 font-semibold "
              >
                Select movie list
              </option>
              {Lists}
            </select>
            <button
              className="bg-red-600 p-2 rounded outline-none my-3 mx-auto w-full pointer"
              onClick={add}
            >
           
              Add Item
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
