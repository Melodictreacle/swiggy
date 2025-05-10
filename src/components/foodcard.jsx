function FoodCard({food}) {
    return (<div>
    <img src={food.image} alt={food.name}></img>
    <p>{food.name}</p>
    </div>)
}
export default FoodCard