import React, {useEffect} from "react";
import {setCookie, getCookie} from "../../lib/simpleCookieLib"

import Modal from 'react-modal';
import Button from "../common/Button";

import "../common/css/_modals.scss";


function PatreonPopup(props) {

  Modal.setAppElement('#root')

  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    if (!getCookie(`tyzhden_patreon`)) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
  }

  function closeModal(){
    setIsOpen(false);
    setCookie(`tyzhden_patreon`, true, 1, "");
  }

  function setPatreonCookie() {
    setCookie(`tyzhden_patreon`, true, 7, "");
  }

  useEffect (()=>{
    setTimeout(openModal, 5000);
  }, []);

  return (
    <div>
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          contentLabel="Patreon Modal"
          className="Modal"
        >
          <button className="close-modal" onClick={closeModal}>
            <img
              src={require("../../images/icons/close-24px.svg")}
              alt="Іконка закрити"
            />
          </button>
          <div className="container-modal">
          <div className="image-modal">
            <img
              src={require("../../images/krapyvenko.png")}
              alt="Іконка закрити"
            />
          </div>
          <div className="body-modal">
            <h2 className="header-modal">Дмитро Крапивенко, головний
редактор</h2>
            <div className="body-text">
              <p>Ми будемо вдячні кожному, хто підтримає «Український тиждень» у цей складний час. Зробити це доволі просто: передплатити журнал або зробити пожертву у наш гонорарний фонд.</p>
            </div>
            <a href="https://www.patreon.com/ukrainianweek" onClick={setPatreonCookie}>
              <Button title="Підтримати на Патреон" redButton={true}/>
            </a>
          </div>
          </div>
        </Modal>
      </div>
  );
}


export default PatreonPopup;
