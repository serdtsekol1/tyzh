import React from "react";
import Modal from 'react-modal';
import Button from "../common/Button";

import "../common/css/_modals.scss";


function PatreonPopup(props) {

  const customStyles = {
    content : {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      maxWidth: '900px',
      border: 'none',
      boxShadow: '0px 0px 64px rgba(0, 0, 0, 0.12)',
    }
  };

  Modal.setAppElement('#root')

  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
  }

  function closeModal(){
    setIsOpen(false);
  }

  return (
    <div>
        <button onClick={openModal}>Open Modal</button>
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Patreon Modal"
        >
          <button onClick={closeModal}>close</button>
          <div className="model-image">
          </div>
          <div className="body-modal">
            <h2 className="header-modal">Дмитро Крапивенко, головний
редактор</h2>
            <div className="body-text">
              <p>Ми будемо вдячні кожному, хто підтримає «Український тиждень» у цей складний час. Зробити це доволі просто: передплатити журнал або зробити пожертву у наш гонорарний фонд.</p>
            </div>
            <a href="https://www.patreon.com/ukrainianweek">
              <Button title="Підтримати на Патреон" redButton={true}/>
            </a>
          </div>
        </Modal>
      </div>
  );
}


export default PatreonPopup;
