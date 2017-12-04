import React from 'react'

const Show = ({ profileImageURL, firstName, lastName}) => {
  return (
    <div>
    <h1>LinkedIn Profile Editor</h1>
    <img src={profileImageURL} />
    <p>Name: {firstName } {lastName } </p>
  </div>
  )
}


export default Show
