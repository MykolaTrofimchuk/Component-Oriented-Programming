import React from 'react';

const RecipeDetails = ({ recipe }) => {
    return (
        <div style={{ marginTop: '10px', padding: '10px', border: '1px solid #ccc' }}>
            <h4>Details</h4>
            <p><strong>Name:</strong> {recipe.name}</p>
            <p><strong>Description:</strong> {recipe.description || 'none'}</p>
            <p><strong>Recipe:</strong> {recipe.details}</p>
            <p><i><small>Added At: {recipe.createdAt}</small></i></p>
        </div>
    );
};

export default RecipeDetails;