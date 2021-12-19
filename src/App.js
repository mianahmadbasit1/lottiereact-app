import React,{ useEffect , useRef} from 'react';
import lottie from 'lottie-web';
import './App.css';

function App() {
  const container = useRef(null)
  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer:'svg',
      loop:true,
      autoplay:true,
      animationData:require('./anim.json'),
      animationData:require('./anim.json')
    })
  
  }, [])
  return (
    <div className="App">
      <h1>React demo</h1>

      <div className="con" ref={container}></div>
    </div>
  );
}

export default App;
