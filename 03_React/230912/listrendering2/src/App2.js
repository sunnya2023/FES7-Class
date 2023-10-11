import React, { useState } from 'react'
import Counter from './Counter'


export default function App2() {
    const [data, setData] = useState([{
        title: "개발자 무릎 담요",
        price: 17500,
        id: 101,
    },
    {
        title: "Hack Your Life 개발자 노트북 파우치",
        price: 29000,
        id: 102,
    },
    {
        title: "우당탕탕 라이켓의 실험실 스티커북",
        price: 29000,
        id: 103,
    },
    {
        title: "버그를 Java라 버그잡는 개리씨 키링",
        price: 29000,
        id: 104,
    },
    ])

    // function deleteFunc(id) {
    //     setData(data.filter((item) => {
    //         return item.id !== id
    //     }))
    // }

    //이러한 방식을 함수형 업데이트라고 합니다.
    //함수형 업데이트의 장점은 콜백함수의 인자에 이전의 상태가 들어가는 것을 리액트가 보장합니다.
    function deleteFunc(id) {
        setData((prevData) => {
            return prevData.filter((item) => {
                return item.id !== id
            })
        }
        )
    }

    return (
        <>
            <ul>
                {data.map((item) => {
                    return (
                        <li key={item.id}>
                            <h2>{item.title}</h2>
                            <strong>{item.price}</strong>
                            <button onClick={() => deleteFunc(item.id)}>삭제</button>
                            {/*사용자가 돔에 직접 접근하여 제어하는 것은 컴포넌트 관리 일관성에 위배된다. 자바스크립트 방식으로 삭제해서는 안됨- 왜냐하면  리액트는 이전 이후 버츄얼 돔 비교해서 화면 렌더링하므로 직접 돔에 접근해서 삭제하면 리액트 버추얼 돔과 어긋나서 충돌 생길 수 있음 */}
                            {/* <button onClick={(event) => event.target.closest('li').remove()}>삭제</button> */}
                        </li>
                    )
                })}
            </ul>


            <Counter />
        </>
    )
}
