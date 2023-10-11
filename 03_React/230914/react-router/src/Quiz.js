import React from 'react'
import { BrowserRouter, Link, Outlet, Route, Routes, useNavigate, useParams } from 'react-router-dom'

export default function Quiz() {
    return (
        <BrowserRouter>
            {/* a태그와 Link차이 확인하기 a태그는 새로고침일어남! Link는 안일어남! */}
            <a href="/cart">카트페이지 이동</a>
            <Link to="/">홈</Link>
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/cart' element={<Cart />} />
                <Route path='/users/*' element={<Users />} >
                    {/* <Route path='' element={<Users />} /> */}
                    <Route path='coupon/' element={<Coupon />} />
                    <Route path='question/' element={<Question />} />
                    <Route path='notice/' element={<Notice />} />
                </Route>
                <Route path='/products/:id' element={<ProductDetailPages />} />
                <Route path='/products/:id/notice' element={<ProductDetailNotice />} />
            </Routes>
            <Button />
        </BrowserRouter >

    )
}

function Button() {
    const navigate = useNavigate()
    return <button onClick={() => navigate("/users")}>유저보기</button>
}

function HomePage() {
    return <h1>홈페이지</h1>
}
function Cart() {
    return <h1>카트</h1>
}
function Users() {
    return (
        <div>
            <h1>유저들</h1>
            <Outlet />
        </div>
    )
}
function ProductDetailPages() {
    const { id } = useParams()
    return <h1>{id} 번 상품 입니다.</h1>
}
function ProductDetailNotice() {
    const { id } = useParams()
    return <h1>{id} 번 상품 세부정보 입니다.</h1>
}

function Coupon() {
    return <h1>쿠폰</h1>
}
function Question() {
    return <h1>질문</h1>
}
function Notice() {
    return <h1>공지사항</h1>
}