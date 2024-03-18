// @src/components/Modal.jsx

import React from "react";
import "../pages-css/Modal.css";
import { RiCloseLine } from "react-icons/ri";
import axios from "axios";
import Cookies from "universal-cookie";
// import { useNavigate } from "react-router-dom";
// import { useRefresh } from "react-admin";

const ModalOpen = ({ setIsOpen, memberId }) => {
  // const navigate = useNavigate();
  // const refresh = useRefresh();
  const handleDelete = async function () {
    const url = `http://localhost:3000/bhulku/${memberId}`;
    const cookies = new Cookies();
    const accessToken = cookies.get("accessToken");
    // console.log("Deleting member with ID:", memberId);
    try {
      const response = await axios.delete(url, {
        headers: { Authorization: `Bearer ${accessToken}` },
      });
      console.log(`Deleted post with ID ${response.data}`);
      // console.log(`Deleted post with ID : ${memberId}`);

      setIsOpen({ openConfig: false, objId: null });
      // refresh();
      window.location.reload();
    } catch (error) {
      console.error("Error deleting post:", error);
    }
  };

  return (
    <>
      <div
        className="darkBG"
        onClick={() => setIsOpen({ openConfig: false, objId: null })}
      />
      <div className="centered">
        <div className="modal">
          <div className="modalHeader">
            <h5 className="heading">Delete Record</h5>
          </div>
          <button
            className="closeBtn"
            onClick={() => setIsOpen({ openConfig: false, objId: null })}
          >
            <RiCloseLine style={{ marginBottom: "-3px" }} />
          </button>
          <div className="modalContent">
            Are you sure you want to delete the Record?
          </div>
          <div className="modalActions">
            <div className="actionsContainer">
              <button
                className="deleteBtn"
                onClick={() => handleDelete(memberId)}
              >
                Delete
              </button>
              <button
                className="cancelBtn"
                onClick={() => setIsOpen({ openConfig: false, objId: null })}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalOpen;
