import React, {useEffect} from "react"
import { parseCookies, setCookie } from "nookies"

import Modal from "react-modal"
import Button from "../common/Button"


function PatreonPopup(props) {

  const [modalIsOpen, setIsOpen] = React.useState(false);

  Modal.setAppElement("#__next")

  function setPatreonCookie(days) {
    setCookie(null, "tyzhden_patreon", true, {
      path: "/",
      maxAge: days * 60 * 60 * 24,
    })
    setIsOpen(false);
  }

  useEffect (()=>{
    function openModal() {
      const cookies = parseCookies()
      if (!("tyzhden_patreon" in cookies) || (cookies["tyzhden_patreon"] === false)) {
        setIsOpen(true);
      } else {
        setIsOpen(false);
      }
    }
    setTimeout(openModal, 120000);
  }, []);

  return (
    <div>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={() => setPatreonCookie(1)}
          contentLabel="Patreon Modal"
          className="Modal"
        >
          <button className="close-modal" onClick={() => setPatreonCookie(1)}>
            <img
              src={"/images/icons/close-24px.svg"}
              alt="Іконка закрити"
            />
          </button>
          <div className="container-modal">
          <div className="image-modal">
            <img
              src={"/images/jurij.jpg"}
              alt="Іконка закрити"
            />
          </div>
          <div className="body-modal">
            <h2 className="header-modal">Юрій Лапаєв, головний
редактор</h2>
            <div className="body-text">
              <p>Ми будемо вдячні кожному, хто підтримає «Український тиждень» у цей складний час. Зробити це доволі просто: передплатити журнал або зробити пожертву у наш гонорарний фонд.</p>
            </div>
            <a href="https://www.patreon.com/ukrainianweek" onClick={() => setPatreonCookie(7)}>
              <Button title="Підтримати на Патреон" redButton={true}/>
            </a>
          </div>
          </div>
        </Modal>
      </div>
  );
}


export default PatreonPopup;
