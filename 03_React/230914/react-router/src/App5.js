import React from 'react'
import { BrowserRouter, Route, Routes, Link, useLocation, Outlet, useParams } from 'react-router-dom'

export default function App5() {
    return (
        <BrowserRouter>
            <Link to="/">Home</Link>
            <Link to="/products">product</Link>
            <Link to="/cart">cart</Link>
            <Link to="/users">users</Link>

            <Routes>
                <Route path='' element={<Homepage />} />
                <Route path='/cart' element={<Cart />} />

                <Route path='/products/:id' element={<ProductDetail />} />

                <Route path='/products/:id/notice' element={<ProductNocice />} />
                <Route path='/users/*' element={<Outlet />} >
                    <Route path='' element={<Users />} />
                    <Route path='coupon/' element={<Coupon />} />
                    <Route path='question/' element={<Question />} />
                    <Route path='usernotice/' element={<UserNotice />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

function Homepage() {
    return <h1>Homepage</h1>
}
function ProductDetail() {
    const { id } = useParams()
    return <h1>{id}Product</h1>
}
function ProductNocice() {
    const { id } = useParams()
    return <h1>Product{id}</h1>
}

function Cart() {
    return <h1>Cart</h1>
}
function Users() {
    return <h1>Users</h1>
}
function Coupon() {
    const location = useLocation();
    return <h1>Coupon</h1>
}
function Question() {
    const location = useLocation();
    return <h1>Question</h1>
}
function UserNotice() {
    const location = useLocation();
    return <h1>UserNotice</h1>
}