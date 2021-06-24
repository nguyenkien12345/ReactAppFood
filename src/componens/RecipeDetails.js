import React from 'react';

function RecipeDetails(props) {

    var {ingredients} = props;
    
    return (
        <>
        {ingredients.map((ingredient,index) => {
            return (
                <ul className="ingredient-list" key={index}>
                    <li className="ingredient-text">{ingredient.text}</li>
                    <li className="ingredient-weight">{ingredient.weight}</li>
                </ul>
            )
        })}
        </>
    )
}
export default RecipeDetails;
