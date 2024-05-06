import  { Component } from 'react';
interface Student {
    id: number;
    name: string;
    price: number;
    quantity: number;
}
export default class BT07 extends Component<any, { data: Student[] }> {
    constructor(props: any) {
        super(props);
        this.state = {
            data: [
                {
                    id: 1,
                    name: "xuannhat",
                    price: 1,
                    quantity: 1,
                },
                {
                    id: 2,
                    name: "xuannhat",
                    price: 1,
                    quantity: 1,
                },
                {
                    id: 3,
                    name: "xuannhat",
                    price: 1,
                    quantity: 1,
                }
            ]
        };
    }
    render() {
        return (
            <div>
                {this.state.data.map((item: Student, index: number) => (
                    <div key={index}>
                        <h3>ID: {item.id}</h3>
                        <h3>name: {item.name}</h3>
                        <h3>price: {item.price}</h3>
                        <h3>quantity: {item.quantity}</h3>
                    </div>
                ))}
            </div>
        );
    }
}
