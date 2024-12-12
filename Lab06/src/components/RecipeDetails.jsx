import React from 'react';

const RecipeDetails = ({ recipe }) => {
    return (
        <div style={{ marginTop: '10px', padding: '10px', border: '1px solid #ccc' }}>
            <h3>Details</h3>
            <p><strong>Name:</strong> {recipe.name}</p>
            <p><strong>Category:</strong> {recipe.category}</p>
            <p><strong>Description:</strong> {recipe.description || 'none'}</p>
            <p><strong>Recipe:</strong> {recipe.details}</p>
            <p><small><i>Added At: {recipe.createdAt}</i></small> </p>
        </div>
    );
};

export default RecipeDetails;