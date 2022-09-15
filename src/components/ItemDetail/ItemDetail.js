import ItemCount from "../ItemCount/ItemCount";

function ItemDetail ({prod}){

    return(
        <div>
            <h2>{prod.name}</h2>
            <h2>{prod.price}</h2>
            <image src={prod.image} alt={prod.name}/>
            <ItemCount stock={prod.stock} initial={1} onAdd={prod} />
        </div>
    );
};


export default ItemDetail;