import React, { useState } from "react";
import Card from "../../components/card";


function Products() {
    // const [product,setProduct]=useState([
    //     { 

    //     imageSrc='https://z.nooncdn.com/products/tr:n-t_240/v1610036835/N40633047A_1.jpg',
    //     title='PlayStation 5 ',
    //     description='Console (Disc Version)',
    //     price='AED  3099.00'
    //     }
    // ])




    return <div className='  pro'>
        {/* <div>
            {product}
        </div> */}
        <div><h1>Trending Deals </h1></div>
        <div className="row p-0 m-0 ">
            <div className="col-md-2">
                <Card imageSrc='https://z.nooncdn.com/products/tr:n-t_240/v1610784898/N43748990A_1.jpg' title='U-HOOME Push pro' details='Bubble fidge sensor' price='AED 8.00' />

            </div>
            <div className="col-md-2">
                <Card imageSrc='https://z.nooncdn.com/products/tr:n-t_240/v1605898679/N40559284A_1.jpg' title='Watch Series 6-44 mm GPS Blue' details='Aluminium Case with Sport Band Deep Navy' price='AED 1549.00' />

            </div>
            <div className="col-md-2">
                <Card imageSrc='https://z.nooncdn.com/products/tr:n-t_240/v1605814220/N41044065A_1.jpg' title='iPhone 12 Pro Max' details='iPhone 12 Pro Max With Facetime 256GB Pacific Blue 5G - Middle East Version' price='AED 4480.00' />

            </div>
            <div className="col-md-2">
                <Card imageSrc='https://z.nooncdn.com/products/tr:n-t_240/v1605814228/N40582910A_1.jpg' title='iPad - 2020 (8th Generation)' details='10.2inch 32GB WiFi Space Grey - Middle East Specs' price='AED 1199.00' />

            </div>
            <div className="col-md-2">
                <Card imageSrc='https://z.nooncdn.com/products/tr:n-t_240/v1623575050/N48014968A_1.jpg' title='75-Inch Android UHD LED TV' details='With 43-Inch Android LED TV 75U7950 Black' price='AED 3799.00' />

            </div>
            <div className="col-md-2">
                <Card imageSrc='https://z.nooncdn.com/products/tr:n-t_240/v1603870401/N41442669A_1.jpg' title='Oculus Quest 2' details='Advanced All-In-One VR Headset 256GB White' price='AED 1821.00' />

            </div>

            
           {/* advertisement  */}
            <div className="col-md-6">
                <Card imageSrc='https://k.nooncdn.com/mon/1624133377002-ckq472u3u0tdcxxqtilakzaqa.png' title='' details='' price='' />

            </div>
            <div className="col-md-6">
                <Card imageSrc='https://k.nooncdn.com/mon/1624046671005-ckq2rgfbx0llzrhr0pmadl3is.png' title='' details='' price='' />

            </div>
            





        </div>
        <div>
                <div class="">
                    <div class="row ">
                    <div className="col">
                <Card imageSrc='https://z.nooncdn.com/products/tr:n-t_240/v1605814581/N40635116A_1.jpg' title='Microsoft' details='Xbox Series X 1TB Console (Disc Version)' price='AED 2547.00' />

            </div>
            <div className="col">
                <Card imageSrc='https://z.nooncdn.com/products/tr:n-t_240/v1605814581/N40635117A_1.jpg' title='Microsoft Xbox Series S' details='512 GB Digital Console' price='AED 1249.00' />

            </div>
            <div className="col">
                <Card imageSrc='https://z.nooncdn.com/products/tr:n-t_240/v1605814591/N40633051A_1.jpg' title='Sony PULSE 3D' details='Wireless Headset ' price='AED 404.00' />

            </div>
            <div className="col">
                <Card imageSrc='https://z.nooncdn.com/products/tr:n-t_240/v1600603866/N40633053A_1.jpg' title='Sony Playstation 5 HD' details='Camera' price='AED 173.00' />

            </div>
            <div className="col">
                <Card imageSrc='https://z.nooncdn.com/products/tr:n-t_240/v1612337887/N40633049A_1.jpg' title='Sony Dual Sense ' details='Wireless Controller' price='AED 222.00' />

            </div>
            </div>
                </div>
            </div>
            

    </div>
}
export default Products;