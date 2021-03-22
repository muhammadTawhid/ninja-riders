import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData/Data.json'
import CarCard from '../CarCard/CarCard';
import Header from '../Header/Header';

const Main = () => {
    const [cars, setCar] = useState([])

    useEffect(() => {
        setCar(fakeData)
        const names = fakeData.map(car => car.Name)

    }, [])


    return (
        <div >
            <Header></Header>
            <div className="container">
                <div style={{ marginTop: "70px" }} className="row  d-flex justify-content-center">
                    {
                        cars.map(car => <CarCard car={car} ></CarCard>)
                    }
                </div>
            </div>

        </div>
    );
};

export default Main;