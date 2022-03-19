import React, { useContext, useEffect, useState } from 'react'
import CategorytContext from '../context/CategoryContext'
import DataContext from '../context/DataContext'
import Card from './Card'
import MoreCard from './MoreCard'

export default function OnlySwiggy() {
    const { fdata, setfdata } = useContext(DataContext)
    const { onlySwi, setOnlySwi } = useContext(CategorytContext)
    console.log(fdata)

    let OnlySwiggyAll = fdata.reduce((a, c) => {
        c.restaurantList.map(ele => {
            if (ele.isExlusive == true) a.push(ele)
        })
        return a;
    }, []);
    useEffect(() => {
        setOnlySwi({ display: 5, hidden: OnlySwiggyAll.length - 5, RestArr: OnlySwiggyAll });
    }, [])
    // let OnlySwiggyarrays = fdata.map(ele => ele.restaurantList.filter(el => el.isExlusive === true))



    return (
        <>
            {
                onlySwi.RestArr ? onlySwi.RestArr.filter((ele, idx) => idx < onlySwi.display).map((el) => {
                    return <Card singleData={el} />
                }) : <></>
            }
            <MoreCard categData={onlySwi} setCategData={setOnlySwi} />
        </>
    )
}
