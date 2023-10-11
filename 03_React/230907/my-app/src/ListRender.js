import './ListRender.css'

const list = [
    { no: 1, area: "대전", visited: false },
    { no: 2, area: "부산", visited: true },
    { no: 3, area: "목포", visited: false },
    { no: 4, area: "제주도", visited: false },
];

// function ListItem({ data }) {

//     return <li className={data.visited ? "visited" : ''}>{data.area}</li>
// }

// function ListRender() {
//     return (
//         <ul className='list-area'>
//             <ListItem data={list[0]} />
//             <ListItem data={list[1]} />
//             <ListItem data={list[2]} />
//             <ListItem data={list[3]} />
//         </ul>
//     )
// }


//2.반복문으로 만든다면???
//*** *li, mpa등 렌더링할 때 key값이 필요
// function ListItem({ data }) {

//     return <li className={data.visited ? "visited" : ''}>{data.area}</li>
// }

function ListRender() {
    const areas = list.map((item) => {
        return (
            <li key={item.no} className={item.visited ? "visited" : ''}>{item.area}</li>
        )
    })

    //areas안의 상황
    {/* <li className={item.visited ? "visited" : ''}>{item.area}</li>
<li className={item.visited ? "visited" : ''}>{item.area}</li>
<li className={item.visited ? "visited" : ''}>{item.area}</li>
<li className={item.visited ? "visited" : ''}>{item.area}</li> */}


    return (
        <ul className='list-area'>
            {/* <ListItem data={list[0]} />
            <ListItem data={list[1]} />
            <ListItem data={list[2]} />
            <ListItem data={list[3]} /> */}
            {areas}
        </ul>
    )
}

export default ListRender