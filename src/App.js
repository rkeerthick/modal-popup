import logo from "./logo.svg";
import "./App.css";
import Modal from "./components/Modal";
import { useRef, useState } from "react";
import Dummy from "./components/Dummy";
import Modal2 from "./components/Modal2";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const handleToggle = () => {
    setIsOpen(prev => !prev);
  }
  const modal = useRef();
  const onShowModal = () => {
    modal.current.open();
  }
  const closeModal = () => {
    modal.current.close();
  }
  return (
    <>
      {/* <Modal ref={modal}>
        <Dummy closeModal={closeModal} />
      </Modal> */}
      <Modal2 isOpen={isOpen}>
        <Dummy close={handleToggle} />
      </Modal2>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        {/* <button type="button" onClick={onShowModal}> */}
        <button type="button" onClick={() => handleToggle()}>
          Open
        </button>
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    </>
  );
}

export default App;
