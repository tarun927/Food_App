import React, { useState } from 'react'
import styles from "../styles/card.module.css"

export default function Card({ singleData,image }) {
    const [isQuickV, setIsQuickV] = useState(false)
    return (
        <div className={styles.CardParent} onMouseEnter={() => setIsQuickV(true)} onMouseLeave={() => setIsQuickV(false)}>
            <div className={styles.innerCard}>
                <div className={styles.ImageDiv}>
                    <img className={styles.ImageTag} src={image} alt="no" />
                </div>
                <div className={styles.lowerDiv}>
                    <div className={styles.RName}>{singleData.name}</div>
                    <div>{singleData.food_types.map((ele, idx) => idx < singleData.food_types.length - 1 ? ele + ', ' : ele)}</div>
                    <div className={styles.threein1}>
                        <div className={singleData.ratings && styles.ratingBG}>★{singleData.ratings?singleData.ratings:'--' }</div> <div>•</div>
                        <div>{singleData.delivery_time}</div> <div>•</div>
                        <div>₹{singleData.price_for_two + ' for two'}</div>
                    </div>
                    <div className={`${isQuickV && styles.quickV} ${styles.InvisibleQV}`}>QUICK VIEW</div>
                </div>
            </div>

        </div>
    )
}
