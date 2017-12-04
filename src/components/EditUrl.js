import React from 'react'

const EditUrl = ({profileImageURL, onChangeprofileImageURL}) => {
  return (
  <div>
    <label>
      profile image URL:
      {' '}
      <input
        value={ profileImageURL }
        onChange={onChangeprofileImageURL }
      />
    </label>
  </div>
  )
}

export default EditUrl
