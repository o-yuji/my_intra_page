import React from 'react'
import "../MainFrame.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import { useDispatch } from "react-redux"
import { isLogin } from '../../../store/loginSlice/LoginSlice'
import { delUser } from '../../../store/infoSlice/InfoSlice'


const TopRightMenu = () => {
  const dispatch = useDispatch()
  return (
    <div
      className='logout hover:text-red-400'
      onClick={() => {
        localStorage.removeItem('localJWT')
        localStorage.removeItem('loginUser')
        localStorage.removeItem('page')
        dispatch(delUser())
        dispatch(isLogin({ info: false }))
      }}
    >
      <FontAwesomeIcon icon={faRightFromBracket} />
      <div>
        <span>LOGOUT</span>
      </div>
    </div>
  )
}

export default TopRightMenu