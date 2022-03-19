import React, { useContext, useEffect } from 'react'
import CategorytContext from '../context/CategoryContext';
import sideActiveContext from '../context/sideActiveContext'
import { HashLink as Link } from 'react-router-hash-link'
import styles from '../styles/sideBar.module.css'

export default function SideBar() {
  const { active, setActive } = useContext(sideActiveContext);
  const { popu, offer, express, gourmet, onlySwi, isSeeAll, setIsSeeAll } = useContext(CategorytContext)

  let totalRestaurants =
    (popu.RestArr ? popu.RestArr.length : 0) +
    (offer.RestArr ? offer.RestArr.length : 0) +
    (gourmet.RestArr ? gourmet.RestArr.length : 0) +
    (express.RestArr ? express.RestArr.length : 0)

  const handleScroll = () => {
    setIsSeeAll(false);
  }
  const handleSeeAll = () => {
    setIsSeeAll(true);
    setActive('seeAll')
  }
  return (
    <div className={styles.sideParent}>
      <div className={styles.categContainer}>

        <Link smooth to="#RightPopular">
          <div onClick={() => { handleScroll() }} className={`${styles.sideTitle} ${active === 'popu' && 'active-tab'}`}>
            <div ><h3>Popular brands</h3></div>
            <div>{popu.RestArr ? popu.RestArr.length + ' Options' : 'loading'}</div>
          </div>
        </Link>

        <Link smooth to="#RightOffers">
          <div onClick={handleScroll} className={`${styles.sideTitle} ${active === 'off' && 'active-tab'}`}>
            <div ><h3>Offers near you</h3></div>
            <div>{offer.RestArr ? offer.RestArr.length + ' Options' : 'loading'}</div>
          </div>
        </Link>

        <Link smooth to="#RightExpress">
          <div onClick={handleScroll} className={`${styles.sideTitle} ${active === 'expres' && 'active-tab'}`}>
            <div > <h3>Express delivery</h3></div>
            <div>{express.RestArr ? express.RestArr.length + ' Options' : 'loading'}</div>
          </div>
        </Link>

        <Link smooth to="#RightGourmet">
          <div onClick={handleScroll} className={`${styles.sideTitle} ${active === 'gour' && 'active-tab'}`}>
            <div ><h3>Gourmet</h3></div>
            <div>{gourmet.RestArr ? gourmet.RestArr.length + ' Options' : 'loading'}</div>
          </div>
        </Link>

        <Link smooth to="#RightOnlySwiggy">
          <div onClick={handleScroll} className={`${styles.sideTitle} ${active === 'only' && 'active-tab'}`}>
            <div ><h3>Only on swiggy</h3></div>
            <div>{onlySwi.RestArr ? onlySwi.RestArr.length + ' Options' : 'loading'}</div>
          </div>
        </Link>

        <Link smooth to="#RightSeeAll">
          <div onClick={handleSeeAll} className={`${styles.sideTitle} ${active === 'seeAll' && 'active-tab'}`} >
            <div ><h3>See all</h3></div>
            <div>{totalRestaurants ? totalRestaurants + ' Options' : 'loading'}</div>
          </div>
        </Link>

      </div>

    </div>
  )
}
