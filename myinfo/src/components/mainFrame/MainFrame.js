import React from 'react'
import "./MainFrame.scss"
import Login from "./login/Login"
import Footer from './footer/Footer'
import TopLeftMenu from './topMenu/TopLeftMenu'
import TopRightMenu from './topMenu/TopRightMenu'
import { useSelector, useDispatch } from "react-redux"
import { isLogin } from "../../store/loginSlice/LoginSlice"
import SelectPage from './mainContent/SelectPage'

const MainFrame = () => {
  const token = localStorage.localJWT
  const dispatch = useDispatch()
  const { IsAuthenticated } = useSelector((state) => state.login)
  const { currentPage } = useSelector((state) => state.page)
  token ? dispatch(isLogin({ info: true })) : dispatch(isLogin({ info: false }))
  return (
    <>
      <div className='top-container'>
        <TopLeftMenu />
        <TopRightMenu />
      </div>

      <div className='center-content'>

        {IsAuthenticated ? (
          <SelectPage Page={currentPage} />
        ) : (
          <Login />
        )
        }
      </div>

      <div className='footer'>
        <Footer />
      </div>
    </>
  )
}

export default MainFrame