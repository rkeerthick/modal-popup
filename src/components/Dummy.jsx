import React from 'react'

const Dummy = ({closeModal, close}) => {
    return (
      <>
        <h1>Hello</h1>
        <p>How are</p>
        {/* <button type="button" onClick={closeModal}> */}
        <button type="button" onClick={close}>
          close
        </button>
      </>
    );
}

export default Dummy