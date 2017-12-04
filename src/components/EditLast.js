import React from 'react'

const EditLast = ({lastName, onChangeLastName }) => {
  return (
  <div>
    <label>
      Last Name:
      {' '}
      <input
        value={ lastName }
        onChange={onChangeLastName }
      />
    </label>
  </div>
  )
}


export default EditLast
