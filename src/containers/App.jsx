import React,{useState,useEffect} from  'react'
import Header from '../components/Header'
import '../assets/syles/App.scss';
import Search from '../components/Search'
import Categories from '../components/Categories'
import Carousel from '../components/Carousel'
import CarrouselIteam from '../components/CarouselIteam'
import Footer from '../components/Footer'
import useInitialState from '../assets/hooks/useInitialState'


    const API='http://localhost:3000/initialState'
    
const App = () => {
   const initialState =useInitialState(API)
    
    return (
    <div className="App" >
        <Header />
        <Search />
        {initialState.mylist.length > 0 && (
        <Categories title="MI LISTA">
            <Carousel>
             <CarrouselIteam />
            
            </Carousel>          
        </Categories>

        )}

        

        <Categories title="TENDENCIAS">
            <Carousel>
                {initialState.trends.map(iteam =>
                 
                 <CarrouselIteam key={iteam.id} {...iteam}/>
                )}
               
               
            </Carousel>          
        </Categories>

        <Footer />
    </div>
)
    }


export default App;
