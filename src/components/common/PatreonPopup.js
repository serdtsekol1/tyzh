import React, {useEffect} from "react";
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
      padding: '0',
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


  useEffect (()=>{
    setTimeout(openModal, 5000);
  }, []);

  return (
    <div>
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Patreon Modal"
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
            <a href="https://www.patreon.com/ukrainianweek">
              <Button title="Підтримати на Патреон" redButton={true}/>
            </a>
          </div>
          </div>
        </Modal>
      </div>
  );
}


export default PatreonPopup;
