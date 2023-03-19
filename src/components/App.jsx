import React from 'react';
import Header from './Header.jsx';
import Card from './Card';
import data from './Data';
import Upcomingcourse from './Upcomingcourse.js';


function App(){
    return <div>
        <Header/>
        <Card 
          img={data[0].image}
          price1={data[0].price}
          price2={data[0].priceoff}
          dis={data[0].discount}
          caption1={data[0].caption}
          caption2={data[0].subcption}
        />
        <Card 
          img={data[1].image}
          price1={data[1].price}
          price2={data[1].priceoff}
          dis={data[1].discount}
          caption1={data[1].caption}
          caption2={data[1].subcption}
        />
        <Upcomingcourse 
            img={data[2].image}
            caption1={data[2].caption}
            caption2={data[2].subcaption}
        />
        <Upcomingcourse 
            img={data[3].image}
            caption1={data[3].caption}
            caption2={data[3].subcaption}
        />

    </div>
}


export default App;