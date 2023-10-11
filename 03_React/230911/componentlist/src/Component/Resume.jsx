import React, {useState} from 'react'

function Resume(props){
  
let [like, setLike] = useState()

    function clickLike(){
       if(like === ""){
        setLike("like")
       }else{
        setLike("")
       }
       

    }
return(
    <>
    <h1>{props.name} 자기 소개서</h1>
    <h2>{props.hello}</h2>
    <h3>취미 : {props.hobby}</h3>
    <h3>좋아하는 음식 :{props.food}</h3>
    <h3 >좋아하는 색: <span style={{color:props.color}}>{props.color}</span>
    </h3>
    {/* <button onClick={clickLike}>like<span>{like}</span></button> */}
    <button onClick={clickLike}>like</button> <span>{like}</span>
    </>
    )
}

export default Resume