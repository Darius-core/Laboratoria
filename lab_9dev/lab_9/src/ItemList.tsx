import React, {useCallback, useState} from "react";

function ItemList(){
    const [products, setProducts] = useState(["Jabłko", "Gruszka", "Banan", "Winogron"])

    const removeProduct = useCallback((item: string) => {
        setProducts((prev) => prev.filter((p) => p !== item))
    }, [])

    return(
        <div>
            
            <ul>
                <p>Lista Zakupów: </p>
                {products.map((product, index)=>(
                    <li key={index}> {product} <button onClick={() => removeProduct(product)} >Usuń</button></li>
                ))}
            </ul>
        </div>
    )
}

export default ItemList;