import React from 'react';
import Card from '../Card/Card'
import { Route } from 'react-router-dom';
import ErrorPage from '../Error/ErrorPage';
import Loading from '../Loading/Loading';
import './CardContainer.css'

const CardContainer = ({data, selection, toggleFavorite, error, loading}) => {

  console.log(data)
  console.log(loading)

    const cards = data.map( point => {
      return  <Card 
        data={point} 
        key={point.name} 
        toggleFavorite={toggleFavorite} 
      />;
    }) 

      let display;

      if (loading) {
        display = <Route path='/loading' component={Loading} />
      } else if (error){
        display = <Route path='/error' component={ErrorPage} />
      } else {display = cards}

    return (
      <div className="card-container">
        {display}
      </div>
    );
  // }

}

export default CardContainer;
