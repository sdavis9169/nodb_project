import React, {Component} from 'react';
import RecipeCard from './RecipeCard'
import axios from 'axios';

const baseUrl = 'https://www.themealdb.com/api/json/v1/1/random.php'

class RecipeList extends Component{
    constructor(props){
        super(props);
        this.state = {
            recipes: []
        }
    };

    componentDidMount(){
        const foodPromises = [];
        foodPromises.push(axios.get(`${baseUrl}`))
    

        Promise.all(foodPromises)
        .then((res) => {
            this.setState({
                recipes: res.map((e) => {
                    return e.data
                })
            })
            
            
        })
    }

    render(){
        console.log(this.state.recipes)
        const recipeCards = this.state.recipes.map((e) => {
            return <RecipeCard  key={e.idMeal} recipes={e} />
        })
        return(
            <div>
                {recipeCards}
            </div>
        )
    }

}

export default RecipeList;