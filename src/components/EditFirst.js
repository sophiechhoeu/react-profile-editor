import React from 'react'



const EditFirst = ({firstName, onChangeFirstName}) => {
  return (
    <div>
      <label>
        First name:
        {' '}
        <input
          value={firstName}
          onChange={onChangeFirstName}
        />
      </label>
    </div>
  )
}





export default EditFirst
