import React, { useContext, useEffect, useState } from 'react'
import CategorytContext from '../context/CategoryContext';
import DataContext from '../context/DataContext'
import ImageContext from '../context/ImageContext';
import SeeAllContext from '../context/SeeAllContext';
import styles from '../styles/rightArea.module.css'
import Card from './Card';
import MoreCard from './MoreCard';
import OnlySwiggy from './OnlySwiggy';
import SeeAll from './SeeAll';

export default function RightArea() {
  const { fdata } = useContext(DataContext);
  const { isSeeAll, setIsSeeAll } = useContext(SeeAllContext)
  const { popu, setPopu, offer, setOffer, express, setExpress, gourmet, setGourmet } = useContext(CategorytContext)
 const {imageArr} = useContext(ImageContext);

  let getRestauArr = (categ) => {
    let x = fdata.reduce((a, c) => {
      if (c.category == categ) a = c.restaurantList;
      return a;
    }, [])
    return x;
  }

  useEffect(() => {
    let popuAll = getRestauArr('popular brands');
    setPopu({ display: 5, hidden: popuAll.length - 5, RestArr: popuAll });

    let offerAll = getRestauArr('offers near you');
    setOffer({ display: 5, hidden: offerAll.length - 5, RestArr: offerAll })

    let expressAll = getRestauArr('Express delivery');
    setExpress({ display: 5, hidden: expressAll.length - 5, RestArr: expressAll })

    let gourmetAll = getRestauArr('Gourmet');
    setGourmet({ display: 5, hidden: gourmetAll.length - 5, RestArr: gourmetAll })
  }, [])


  return (
    <div className={styles.RightParent}>
      <div className={styles.cardContainer}>
          
        {
          isSeeAll ? <SeeAll /> : <>
            <div id="RightPopular" className={styles.cardTitle}><h2>Popular Brands</h2></div>
            <div className={styles.categoryCont}>

              {
                popu.RestArr ? popu.RestArr.filter((ele, idx) => idx < popu.display).map((el) => {
                  return <Card singleData={el}/>
                }) : <></>
              }
              <MoreCard categData={popu} setCategData={setPopu} />
            </div>

            <div id="RightOffers" className={styles.cardTitle}><h2>Offers near you</h2></div>
            <div className={styles.categoryCont}>

              {
                offer.RestArr ? offer.RestArr.filter((ele, idx) => idx < offer.display).map((el) => {
                  return <Card singleData={el} />
                }) : <></>
              }
              <MoreCard categData={offer} setCategData={setOffer} />
            </div>

            <div id="RightExpress" className={styles.cardTitle}><h2>Express delivery</h2></div>
            <div className={styles.categoryCont}>

              {
                express.RestArr ? express.RestArr.filter((ele, idx) => idx < express.display).map((el) => {
                  return <Card singleData={el} />
                }) : <></>
              }
              <MoreCard categData={express} setCategData={setExpress} />
            </div>

            <div id="RightGourmet" className={styles.cardTitle}><h2>Gourmet</h2></div>
            <div className={styles.categoryCont}>

              {
                gourmet.RestArr ? gourmet.RestArr.filter((ele, idx) => idx < gourmet.display).map((el) => {
                  return <Card singleData={el} />
                }) : <></>
              }
              <MoreCard categData={gourmet} setCategData={setGourmet} />
            </div>

            <div id="RightOnlySwiggy" className={styles.cardTitle}><h2>Only on Swiggy</h2></div>
            <div className={styles.categoryCont}>
              <OnlySwiggy />
            </div></>

        }

      </div>

    </div>
  )
}
