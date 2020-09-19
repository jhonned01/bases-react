import React from  'react'
import Header from '../components/Header'
import '../assets/syles/App.scss';
import Search from '../components/Search'
import Categories from '../components/Categories'
import Carousel from '../components/Carousel'
import CarrouselIteam from '../components/CarouselIteam'
import Footer from '../components/Footer'

const App = () => (
    <div className="App">
        <Header />
        <Search />

        <Categories title="prueba">
            <Carousel>
                <CarrouselIteam />
                <CarrouselIteam />
                <CarrouselIteam />
                <CarrouselIteam />
            </Carousel>          
        </Categories>

        <Categories title="prueba2">
            <Carousel>
                <CarrouselIteam />
                <CarrouselIteam />
                <CarrouselIteam />
                <CarrouselIteam />
            </Carousel>          
        </Categories>

        <Footer />
    </div>
)



export default App;
