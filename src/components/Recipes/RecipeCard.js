import React from 'react';
import './StyleCard.css'

export default (props) => {
    return (
        <div>
            <h1 className='name'>{props.recipes.meals[0].strMeal}</h1>
            <h2 className='name2'>Type: {props.recipes.meals[0].strArea}</h2>
            <h3 className='name2'>Main Ingredient: {props.recipes.meals[0].strCategory}</h3>
            <img src={props.recipes.meals[0].strMealThumb} alt='foodPicture' className='image'/>
            
        </div>
    )
};