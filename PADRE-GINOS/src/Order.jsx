import Pizza from "./Pizza" ;

export default function Order() {
    const pizzaType = "Pepperoni";
    const pizzaSize = "M";

    return(
        <div className="order">
            <h2>Create Order</h2>
            <form>
                <div>
                    <div>
                        <label htmlFor="pizza-type">Pizza Type</label>
                        <select name="pizza-type" value={pizzaType}>
                            <option value="pepperoni">The Pepperoni Pizza</option>
                            <option value="Hawaiini">The Hawaiini Pizza</option>
                            <option value="big_meat">The Bug Meat Pizza</option>
                        </select>
                    </div>
                    <label htmlFor="pizza-size">Pizza Size</label>
                    <div>
                        <span>
                            <input 
                                checked={pizzaSize === "S"}
                                type="radio"
                                name="pizza-size"
                                value="S"
                                id="pizza-s"
                            />
                            <label htmlFor="pizza-s">Small</label>
                        </span>
                        <span>
                            <input
                                chacked={pizzaSize === "M"}
                                type="radio"
                                name="pizza-size"
                                value="M"
                                id="pizza-m"
                            />
                            <label htmlFor="pizza-m">Medium</label>
                        </span>
                        <span>
                            <input
                                checked={pizzaSize === "L"}
                                type="radio"
                                name="pizza-size"
                                value="L"
                                id="pizza-l"

                            />
                            <label htmlFor="pizza-b">Large</label>
                        </span>
                    </div>
                    <button type="submit">Add to Cart</button>
                </div>
                <div className="order-pizza">
                    <Pizza
                        name="Pepperoni"
                        description="another pep pizza"
                        image="./public/pizzas/pepperoni.webp"
                    />
                    <p>$13.37</p>
                </div>
            </form>

        </div>
    )
}