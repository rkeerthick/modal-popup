import logo from "./logo.svg";
import "./App.css";
import Modal from "./components/Modal";
import { useRef } from "react";
import Dummy from "./components/Dummy";

function App() {
  const modal = useRef();
  const onShowModal = () => {
    modal.current.open();
  }
  const closeModal = () => {
    modal.current.close();
  }
  return (
    <>
      <Modal ref={modal}>
        <Dummy closeModal={closeModal} />
      </Modal>
      <div className="App" style={{height:'200vh'}}>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        <button type="button" onClick={onShowModal}>
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
