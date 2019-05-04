import React, { Component } from 'react';
import Comment from './components/Comment'
import "./App.css";
import RecipeList from './components/Recipes/RecipeList';
import Pics from './components/Pics'
import Titles from './components/Titles';



class App extends  Component {
  
  render() {
    return (
      <div>
        <Titles />
        <RecipeList />
        <Comment />
        <Pics />
        <Titles />
      </div>
    );
  }
}

export default App;
