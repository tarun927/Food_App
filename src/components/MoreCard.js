import React from 'react'
import styles from "../styles/card.module.css"

export default function MoreCard({ categData, setCategData }) {
    const incCard = () => {
        let count = categData.display + 6 < categData.RestArr.length ? 6 : categData.RestArr.length - categData.display;
        let newDisp = categData.display + count;
        let newHidd = categData.hidden - count;
        setCategData({ ...categData, display: newDisp, hidden: newHidd })
    }
    return (
        <>
            {
                categData.hidden > 0 ? <button onClick={incCard} className={`${styles.CardParent} ${styles.MoreCard}`}>{'+'+categData.hidden+' More'}</button> : <></>
            }
        </>
    )
}
