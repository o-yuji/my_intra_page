import React from 'react'
import "../MainFrame.scss"

import Home from './home/Home'
import Info from './Info/Info'

const SelectPage = ({ Page }) => {
  console.log(Page)
  return (
    <>
      {/* <div className='lelf-menu'>LeftFrame</div> */}
      <div className='main-content'>
        {Page === 'HOME' ? <Home /> : ""}
        {Page === 'INFO' ? <Info /> : ""}
      </div>
    </>
  )
}

export default SelectPage