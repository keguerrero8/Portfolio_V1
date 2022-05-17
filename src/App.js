import './App.css';
import Home from './pages/Home';


function App({theme}) {
  //0c2233 is darkblue color theme
  //6df7cc is neon blue green color theme
  //c3d0db is light gray color of text
  //155e48 is button color hover effect on neon lighjt side
  //102e45 is side mobile bar color
  // #1b1b1c is black color theme
  return (
    <>
      <Home theme={theme}/>
    </>
  );
}

export default App;
