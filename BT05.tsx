interface Product {
    id: number;
    name: string;
    price: number;
    quantity: number;
}

export default function BT05(props: Product) {
    const { id, name, price, quantity } = props;
    return (
        <div>
            <h4>ID: {id}, Name: {name}, Price: {price}, Quantity: {quantity}</h4>
        </div>
    );
}
