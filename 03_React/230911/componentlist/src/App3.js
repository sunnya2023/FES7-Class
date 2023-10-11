import React, { useState } from 'react'
import Login from './Component/Login'
import Homepage from './Component/Homepage'
import Modal from './Component/Modal'

export default function App3() {

    const user = {
        idUser: 'jaehyun@weniv.com',
        pwUser: 1234
    }

    //로그인 상태를 판단하는 state
    const [login, setLogin] = useState(false)
    const [modalShow, setModalShow] = useState(true)

    return (
        <>
            {login ? <Homepage setLogin={setLogin} /> : <Login infoUser={user} setLogin={setLogin} />}
            {/* {modalShow ? <Modal /> : null} */}
            {modalShow && <Modal setModalShow={setModalShow} />}
        </>
    )
}