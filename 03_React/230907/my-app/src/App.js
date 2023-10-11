import './App.css'

function App() {
  const name = '라이캣'
  function 함수() {
    return '함수'
  }

  const someStyle = { backgroundColor: 'yellow', color: "white" }
  const date = new Date()
  const year = date.getFullYear()
  const month = date.getMonth()
  const dateTd = date.getDate()
  const hours = date.getHours()
  const minute = date.getMinutes()
  const sec = date.getSeconds()


  return (
    <div >
      <h1 >안녕 {함수() ? '함수당' : 'JSX'}</h1>
      <h1 className='newClass'>{name}</h1>
      <input type='text' placeholder='어서와' maxLength={10} style={{ backgroundColor: "skyblue" }} />
      <input type='text' style={someStyle} />

      <h3 style={{ backgroundColor: "black", color: "white" }}>안녕{name}! 1호</h3>
      <h3>안녕{name}2호</h3>

      <div style={{ backgroundColor: "black", color: "white" }}>
        <p style={{ color: 'red', fontWeight: 'bold' }}>년 : {year}</p>
        <p>월/일:{month + 1}/{dateTd}</p>
        <p>시간:{hours}시{minute}분{sec}초</p>
      </div>
    </div >
  );
}

export default App;
