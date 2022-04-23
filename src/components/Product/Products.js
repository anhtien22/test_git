import React from 'react';

// sp là props
const Froducts = (sp) => {
    return (
        <div className="app" >
            <h3> {sp.tensp} </h3> 
            <img src={sp.image}  alt=""></img> 
            <p> Giá: <span>{sp.gia} </span> </p>
            <p> Mô tả: {sp.mota}</p>
        </div>
    );
};

export default Froducts;