import React from "react"
import Card from "../UI/Card"
import classes from './AvailableMeals.module.css'
import MealItem from "./MealItem/MealItem"
const DUMMY_MEALS=[
{
    id:'m1',
    name:'Sushi',
    description:'finest fish with veggies',
    price: 199.99,
},
{
    id:'m2',
    name:'Schnitzel',
    description:'A German speciality!',
    price: 99.99,
},
{
    id:'m3',
    name:'Barbecue Burger',
    description:'American, raw, meaty',
    price: 69.99,
},
{
    id:'m4',
    name:'Green Bowl',
    description:'Healthy.... and green.',
    price: 40,
},
]
const AvailableMeals=()=>{
    const mealslist=DUMMY_MEALS.map((meal)=><MealItem 
    key={meal.id} 
    id={meal.id}
    name={meal.name} 
    description={meal.description} 
    price={meal.price} 
    />)
    return(
        <section className={classes.meals}>
            <Card>
                <ul>
                {mealslist}
                </ul>
            </Card>
        </section>
    );
}
export default AvailableMeals