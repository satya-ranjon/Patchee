import React from "react";

export default function Modal({ showModal, setShowModal, print, children }) {
  return (
    <>
      {showModal ? (
        <>
          <div className=" z-50  absolute top-0 left-0  bottom-0 right-0 flex justify-center items-center">
            <div className="bg-white min-w-[800px] max-w-[800px] min-h-[700px]  max-h-[700px] overflow-auto">
              <div className=" bg-white py-5 flex justify-center items-center fixed left-[45%]">
                <button
                  onClick={() => setShowModal(false)}
                  type="button"
                  className="py-1 px-4 bg-gray-500 text-white rounded hover:bg-gray-700 mr-2">
                  Cancel
                </button>
                <button
                  onClick={print}
                  className=" flex bg-blue-500 text-white justify-start items-center gap-2 px-2 py-1 border-2 rounded-md">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6.72 13.829c-.24.03-.48.062-.72.096m.72-.096a42.415 42.415 0 0 1 10.56 0m-10.56 0L6.34 18m10.94-4.171c.24.03.48.062.72.096m-.72-.096L17.66 18m0 0 .229 2.523a1.125 1.125 0 0 1-1.12 1.227H7.231c-.662 0-1.18-.568-1.12-1.227L6.34 18m11.318 0h1.091A2.25 2.25 0 0 0 21 15.75V9.456c0-1.081-.768-2.015-1.837-2.175a48.055 48.055 0 0 0-1.913-.247M6.34 18H5.25A2.25 2.25 0 0 1 3 15.75V9.456c0-1.081.768-2.015 1.837-2.175a48.041 48.041 0 0 1 1.913-.247m10.5 0a48.536 48.536 0 0 0-10.5 0m10.5 0V3.375c0-.621-.504-1.125-1.125-1.125h-8.25c-.621 0-1.125.504-1.125 1.125v3.659M18 10.5h.008v.008H18V10.5Zm-3 0h.008v.008H15V10.5Z"
                    />
                  </svg>
                  <span>Print</span>
                </button>
              </div>
              <div className="mt-20">{children}</div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
