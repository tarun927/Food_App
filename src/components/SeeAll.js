import React, { useContext, useState } from 'react'
import DataContext from '../context/DataContext'
import styles from '../styles/rightArea.module.css'
import Card from './Card';

export default function SeeAll() {
    const { fdata } = useContext(DataContext);
    return (
        <>
            <div id="RightSeeAll" className={styles.cardTitle}><h2>All Restaurants</h2></div>
            <div className={styles.categoryCont}>
                {
                    fdata.map((ele) => {
                        return ele.restaurantList.map((el) => {
                            return <Card singleData={el} />
                        })
                    })
                }

            </div>
        </>

    )
}
