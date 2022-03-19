import DataContext from "./DataContext";
import React, { useEffect, useState } from 'react';
import sideActiveContext from "./sideActiveContext";
import SeeAllContext from "./SeeAllContext";
import CategorytContext from "./CategoryContext";
import ImageContext from "./ImageContext";

const ContextWrapper = ({ children }) => {
    const [fdata, setFdata] = useState();
    const [active, setActive] = useState('gour');
    const [isSeeAll, setIsSeeAll] = useState(false);

    const [popu, setPopu] = useState({})
    const [offer, setOffer] = useState({})
    const [express, setExpress] = useState({})
    const [gourmet, setGourmet] = useState({})
    const [onlySwi, setOnlySwi] = useState({})

    let imageArr = [
        'https://images.unsplash.com/photo-1504544750208-dc0358e63f7f?auto=format&fit=crop&w=500&q=60',
        'https://images.unsplash.com/photo-1484980972926-edee96e0960d?auto=format&fit=crop&w=500&q=60',
        'https://images.unsplash.com/photo-1478145046317-39f10e56b5e9?auto=format&fit=crop&w=500&q=60',
        'https://images.unsplash.com/photo-1432139509613-5c4255815697?auto=format&fit=crop&w=500&q=60',
        'https://images.unsplash.com/photo-1496412705862-e0088f16f791?auto=format&fit=crop&w=500&q=60',
        'https://images.unsplash.com/photo-1482049016688-2d3e1b311543?auto=format&fit=crop&w=500&q=60',
        'https://images.unsplash.com/photo-1429554513019-6c61c19ffb7e?auto=format&fit=crop&w=500&q=60',
        'https://images.unsplash.com/photo-1506084868230-bb9d95c24759?auto=format&fit=crop&w=500&q=60',
        'https://images.unsplash.com/photo-1511690743698-d9d85f2fbf38?auto=format&fit=crop&w=500&q=60',
        'https://images.unsplash.com/photo-1521305916504-4a1121188589?auto=format&fit=crop&w=500&q=60',
        'https://images.unsplash.com/photo-1484723091739-30a097e8f929?auto=format&fit=crop&w=500&q=60'
    ]
    return (
        <DataContext.Provider value={{ fdata, setFdata }}>
            <sideActiveContext.Provider value={{ active, setActive }}>
                <SeeAllContext.Provider value={{ isSeeAll, setIsSeeAll }}>
                    <CategorytContext.Provider value={{ popu, setPopu, offer, setOffer, express, setExpress, gourmet, setGourmet, onlySwi, setOnlySwi }}>
                        <ImageContext.Provider value={{ imageArr }}>
                            {children}
                        </ImageContext.Provider>
                    </CategorytContext.Provider>
                </SeeAllContext.Provider>
            </sideActiveContext.Provider>
        </DataContext.Provider>
    )
}
export default ContextWrapper;