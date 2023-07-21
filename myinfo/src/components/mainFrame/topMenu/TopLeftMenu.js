import React from 'react'
import { useSelector, useDispatch } from "react-redux"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faRightToBracket, faPenToSquare, faCircleInfo, faCalendarDays, faPencil } from '@fortawesome/free-solid-svg-icons'
import { setPage } from "../../../store/pageSlice/PageSlice"
import "../MainFrame.scss"

const TopLeftMenu = () => {
  const { IsAuthenticated } = useSelector((state) => state.login)
  const dispatch = useDispatch()
  return (
    <div className='top-left-menu'>
      {IsAuthenticated ? (
        <>
          <div className="text-icon hover:text-red-400" onClick={() => dispatch(setPage("HOME"))}>
            <FontAwesomeIcon icon={faHouse} />
            <div>HOME</div>
          </div>
          <div className="text-icon hover:text-red-400" onClick={() => dispatch(setPage("INFO"))}>
            <FontAwesomeIcon icon={faCircleInfo} />
            <div>INFO</div>
          </div>
          <div className="text-icon hover:text-red-400" onClick={() => dispatch(setPage("CALENDAR"))}>
            <FontAwesomeIcon icon={faCalendarDays} />
            <div>CALENDAR</div>
          </div>
          <div className="text-icon hover:text-red-400" onClick={() => dispatch(setPage("POST"))}>
            <FontAwesomeIcon icon={faPencil} />
            <div>POST</div>
          </div>
        </>
      ) : (
        <>
          <div className="text-icon">
            <FontAwesomeIcon icon={faRightToBracket} />
            <div>LOGIN</div>
          </div>

          <div className="text-icon">
            <FontAwesomeIcon icon={faPenToSquare} />
            <div>REGSTER</div>
          </div>
        </>
      )}
    </div>
  )
}

export default TopLeftMenu