import React from 'react';
import { data } from '../../Data';
import Froducts from './Products';

/// gõ rsc sẽ tạo arrow function

const List = () => {
    
    return (
        <div>
        
        {/* lấy dữ liệu từ data.js sau đó sử dụng hàm map để hiển thị sản phẩm  */}
        {data.map((item,index) => {
          
            
            return (
                //key không được trùng với bất kì cái nào 
                // nếu image không có thì lấy giá trị nào đó thay thế vào
                <Froducts
                    key={item.id} 
                    tensp={item.tensp} 
                    image={item.image} 
                    gia={item.gia} mota={item.mota}
                    // className={newClass}
                ></Froducts>
            );
        })}
       </div>
    );
};

export default List;


