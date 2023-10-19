import React from 'react'

const HomeLayout = ({ children }) => {
  return (
    <>
        <div>Header Home</div>
        <div>
            { children }
        </div>
        <div>Footer</div>
    </>
  )
}

export default HomeLayout