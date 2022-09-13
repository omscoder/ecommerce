function Item ({prod}) {
    
    const {id, name, description, price, image, stock}= prod

    return(
        <div>
            <h2>{id}</h2>
            <img src={image} alt={name}/>
            <h1>{name}</h1>
            <p>{description}</p>
            <p>{price}</p>
            <p>{stock}</p>
        </div>
    );
};

export default Item;