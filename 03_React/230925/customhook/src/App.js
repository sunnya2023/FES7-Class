import useMouseLocation from './Hooks/useMouseLocation';
import useScroll from './Hooks/useScroll';
import InputComponent from './components/InputComponents';
import SomethingComponent from './components/SomethingComponent';

function App() {
  // const mouseLocation = useMouseLocation()
  const isBottom = useScroll()
  console.log(isBottom)
  return (
    <div style={{ height: 3000 }}>
      {/* <div style={{
        height: 100, width: 100, backgroundColor: mouseLocation.x > 100 ?
          "royalblue" : "hotpink"
      }}></div> */}
      <InputComponent />
      <SomethingComponent />

    </div >
  );
}
export default App;
