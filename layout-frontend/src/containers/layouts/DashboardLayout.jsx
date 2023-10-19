import React from 'react'

const DashboardLayout = ({ children }) => {
  return (
    <>
        <div>Header Dashboard</div>
        <div>
            { children }
        </div>
        <div>Footer</div>
    </>
  )
}

export default DashboardLayout