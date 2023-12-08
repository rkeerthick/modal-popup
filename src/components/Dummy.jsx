import React from 'react'

const Dummy = ({closeModal}) => {
    return (
      <>
        <h1>Hello</h1>
        <p>How are</p>
        <button type="button" onClick={closeModal}>
          close
        </button>
      </>
    );
}

export default Dummy