import Item from "../Item/Item";

function ItemList ({listadoItems}) {
    
    return(
        <div>
            {listadoItems.map(prod => <Item key={prod.id} prod={prod}/>)}
        </div>
    );
};

export default ItemList;