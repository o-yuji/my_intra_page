import React, { useState, useEffect } from 'react'
import { fetchAsynkHistory, fetchAsynkHistoryPost, fetchAsynkHistoryDelete } from "../../../../store/historySlice/HistorySlice"
import { useSelector, useDispatch } from "react-redux"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'
import "./Info.scss"


const Info = () => {
  const [infomation, setInfomation] = useState("")
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchAsynkHistory())
  }, [dispatch])

  const { historyList } = useSelector((state) => state.history)

  const historyPost = (e) => {
    e.preventDefault()
    if (infomation) {
      const info = {
        // username: localStorage.loginUser,
        username: 1,
        infomation: infomation,
      }
      dispatch(fetchAsynkHistoryPost(info))
      setInfomation("")
    }
  }

  const historyDelete = (id) => {
    dispatch(fetchAsynkHistoryDelete(id))
  }

  return (
    <div className='infoFrame'>
      <h1 className=''>お知らせ</h1>

      <div className='history-input-box'>
        <input className='history-input' type="text" value={infomation} onChange={(e) => setInfomation(e.target.value)} />
        <button className='history-input-btn' onClick={(e) => historyPost(e)}>追加</button>
      </div>

      <table className="table-container">
        <thead>
          <tr>
            <th>No</th>
            <th>Content</th>
            <th className='th-del-btn'>削除</th>
          </tr>
        </thead>
        <tbody>
          {historyList.map((el, index) => (
            <tr key={index}>
              <td className='td-index'>{index + 1}</td>
              <td>{el.infomation}</td>
              <td>
                <button onClick={() => historyDelete(el.id)}>
                  <div className="hover:text-red-600">
                    <FontAwesomeIcon icon={faTrashCan} size="xl" />
                  </div>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Info