
import { useContext, useEffect } from 'react';
import './App.css';
import ContextWrapper from './context/ContextWrapper';
import axios from 'axios'
import SideBar from './components/SideBar';
import RightArea from './components/RightArea';
import DataContext from './context/DataContext';
import sideActiveContext from './context/sideActiveContext';
import ImageContext from './context/ImageContext';

function App() {
  const { setFdata, fdata } = useContext(DataContext);
  const { setActive } = useContext(sideActiveContext);
  const {imageArr} = useContext(ImageContext);

  useEffect(() => {

    (async () => {
      try {
        let respData = await axios("http://cdn.adpushup.com/reactTask.json")
        console.log(respData.data);
        let newObj = respData.data;
        newObj.map((ele)=>{
          ele.restaurantList.map(el=>el.image=imageArr[Math.floor(Math.random() * 11)])
        })
        console.log(newObj);
        setFdata(respData.data);
      } catch (error) {
        console.log(error)
      }
     

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

    if (elemExpress.getBoundingClientRect().top > -20 && elemExpress.getBoundingClientRect().top < 20) {
      setActive('expres');
    } else if (elemPopu.getBoundingClientRect().top > -20 && elemPopu.getBoundingClientRect().top < 20) {
      setActive('popu');
    } else if (elemOff.getBoundingClientRect().top > -20 && elemOff.getBoundingClientRect().top < 20) {
      setActive('off');
    }else if(elemGour.getBoundingClientRect().top > -20 && elemGour.getBoundingClientRect().top < 20){
      setActive('gour');
    }else if(elemOnlyS.getBoundingClientRect().top > -20 && elemOnlyS.getBoundingClientRect().top < 20){
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
