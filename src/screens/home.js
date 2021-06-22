import React from 'react'; 
import Header from "../components/header";
import Slideshow from '../layout/home/slider';
import Catagories from '../layout/home/Catagories';
import Products from "../layout/home/products";
import Footer from '../components/footer';


function Home(){
    return <div>
        <Header/>
        <Slideshow />
        <Catagories/> 
        <Products />
        <Footer/>

    </div>
}
export default Home;