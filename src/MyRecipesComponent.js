function MyRecipesComponent({label, image, calories, ingredientLines}) {
    return (
        <div>
            <div className="container">
                <h2>{label}</h2>
            </div>
             <div className="container">
                <img className="imagest" src={image} alt="recipe"/>
            </div>
            
           <div className="container">
                <p>{calories.toFixed()} calories</p>
            </div>
            <div className="container">
                <ul className="list">
                {ingredientLines.map((ingredient, id) => (
                    <li key = {id}>
                    <img src="https://img.icons8.com/nolan/512/checkmark.png" className="icon" alt="iconka"/>    
                        {ingredient}</li>
                ))}   
                </ul>
     
            </div> 
        </div>

    )
}

export default MyRecipesComponent;