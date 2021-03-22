import React from 'react';
import { Link } from 'react-router-dom';

const CarCard = (props) => {
    const { Name, Img } = props.car
    return (
        <div className="col-lg col-sm-1 mt-5 ">
            {/* style={{ 
      backgroundImage: `url("https://www.yourtrainingedge.com/wp-content/uploads/2018/03/highway-road-clipart-wallpaper-3.jpg")`, backgroundRepeat: 'no-repeat'}} */}

      {/* here i tried to set a backgroundImage but it didn't worked would u pls check it */}


            <div className="card text-center shadow p-3 mb-5 bg-body rounded" style={{ width: "14rem" }}>
                <img style={{ maxHeight: "86px" }} src={Img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{Name}</h5>
                    <Link to="/destination" className="btn btn-primary">Let's Go</Link>
                </div>
            </div>
        </div>
    );
};

export default CarCard;