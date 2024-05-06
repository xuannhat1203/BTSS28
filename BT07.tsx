import  { Component } from 'react';
interface Student {
    id: number;
    title: string;
    content: string;
    author: string;
}
export default class BT07 extends Component<any, { data: Student[] }> {
    constructor(props: any) {
        super(props);
        this.state = {
            data: [
                {
                    id: 1,
                    title: "xuannhat",
                    content: "xuannhat",
                    author: "xuannnhat",
                },
                {
                    id: 2,
                    title: "xuannhat",
                    content: "xuannhat",
                    author: "xuannnhat",
                },
                {
                    id: 3,
                    title: "xuannhat",
                    content: "xuannhat",
                    author: "xuannnhat",
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
                        <h3>Title: {item.title}</h3>
                        <h3>Content: {item.content}</h3>
                        <h3>Author: {item.author}</h3>
                    </div>
                ))}
            </div>
        );
    }
}
