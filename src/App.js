
import { useContext, useEffect } from 'react';
import './App.css';
import ContextWrapper from './context/ContextWrapper';
import axios from 'axios'
import SideBar from './components/SideBar';
import RightArea from './components/RightArea';
import DataContext from './context/DataContext';
import sideActiveContext from './context/sideActiveContext';

function App() {
  const { setFdata, fdata } = useContext(DataContext);
  const { setActive } = useContext(sideActiveContext)

  useEffect(() => {

    (async () => {
      let respData = await axios("http://cdn.adpushup.com/reactTask.json")
      console.log(respData.data);
      setFdata(respData.data);

    })()
  }, [])

  let elemPopu = document.getElementById("RightPopular")?document.getElementById("RightPopular"):'';
  if ( document.getElementById("RightPopular") && elemPopu.getBoundingClientRect().top > -15 && elemPopu.getBoundingClientRect().top < 15) {
    setActive('popu');
  }
  window.onscroll = function () { myFunction() };
  function myFunction() {
    let elemExpress = document.getElementById("RightExpress");
    let elemOff = document.getElementById("RightOffers");
    let elemGour = document.getElementById("RightGourmet");
    let elemOnlyS = document.getElementById("RightOnlySwiggy");

    if (elemExpress.getBoundingClientRect().top > -15 && elemExpress.getBoundingClientRect().top < 15) {
      setActive('expres');
    } else if (elemPopu.getBoundingClientRect().top > -15 && elemPopu.getBoundingClientRect().top < 15) {
      setActive('popu');
    } else if (elemOff.getBoundingClientRect().top > -15 && elemOff.getBoundingClientRect().top < 15) {
      setActive('off');
    }else if(elemGour.getBoundingClientRect().top > -15 && elemGour.getBoundingClientRect().top < 15){
      setActive('gour');
    }else if(elemOnlyS.getBoundingClientRect().top > -15 && elemOnlyS.getBoundingClientRect().top < 15){
      setActive('only');
    }
  }


  return (
    <div className="App">
      <SideBar />
      {fdata ? <RightArea /> : <></>}
    </div>
  );
}

export default App;
