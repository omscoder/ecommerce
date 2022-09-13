import ItemCount from "../ItemCount/ItemCount";

function ItemDetail ({prod}){
    
    const {name, price, image,} = prod

    return(
        <div>
            <h2>{name}</h2>
            <h2>{price}</h2>
            <image src={image} />
            <ItemCount stock={prod.stock} initial={1} onAdd={prod} />
        </div>
    );
};


export default ItemDetail;