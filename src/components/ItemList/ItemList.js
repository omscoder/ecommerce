import Item from "../Item/Item";

const ItemList = ({listadoItems}) => {
    
    return(
        <div>
            {listadoItems.map((prod) => {
                return (
                    <Item
                        key={prod.id}
                        name={prod.name}
                        description={prod.description}
                        price={prod.price}
                        image={prod.image}
                        stock={prod.stock}
                    />
                );
            })}
        </div>
    );
};

export default ItemList;