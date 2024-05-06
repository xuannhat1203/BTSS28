import { Component } from 'react';

interface ClassComponent {
    id: number;
    name: string;
    address: string;
}

export default class BT03 extends Component<any, { data: ClassComponent[] }> {
    constructor(props: any) {
        super(props);
        this.state = {
            data: [
                {
                    id: 1,
                    name: "xuân nhất",
                    address: "Hải Dương"
                },
                {
                    id: 2,
                    name: "xuân nhất 2",
                    address: "Hải Dương"
                },
                {
                    id: 3,
                    name: "xuân nhất 3",
                    address: "Hải Dương"
                }
            ]
        }
    }
    render() {
        return (
            <div>
                <ul>
                    {this.state.data.map((item: ClassComponent, index: number) => (
                        <li key={index}>
                            <div>ID: {item.id}</div>
                            <div>Name: {item.name}</div>
                            <div>Address: {item.address}</div>
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}
