import ItemCount from "../ItemCount/ItemCount";

const ItemListContainer = ({greating}) => {
    return (
    <div>
        <h2>{greating}</h2>
        <ItemCount/>
    </div>
    );
};

export default ItemListContainer;