import { Component } from 'react';
import "./B10.css"
interface Job {
    id: number;
    name: string;
    person: string;
    status: boolean;
    time: string;
}
export default class BT10 extends Component<any, { data: Job[] }> {
    constructor(props: any) {
        super(props);
        this.state = {
            data: [
                {
                    id: 1,
                    name: "Làm header",
                    person: "xuân nhất",
                    status: false,
                    time: "12/03/2005"
                },
                {
                    id: 2,
                    name: "Làm header",
                    person: "xuân nhất",
                    status: false,
                    time: "12/03/2005"
                },
                {
                    id: 3,
                    name: "Làm header",
                    person: "xuân nhất",
                    status: false,
                    time: "12/03/2005"
                }
            ]
        }
    }
    render() {
        return (
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>STT</th>
                            <th>Tên công việc</th>
                            <th>Người thực hiện</th>
                            <th>Trạng thái</th>
                            <th>Thời gian tạo</th>
                            <th>Chức năng</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.data.map((job, index) => (
                            <tr key={index}>
                                <td>{job.id}</td>
                                <td>{job.name}</td>
                                <td>{job.person}</td>
                                <td>{job.status ? 'Hoàn thành' : 'Chưa hoàn thành'}</td>
                                <td>{job.time}</td>
                                <td id='btn'>
                                    <button className='btn1'><h4>Sửa</h4></button>
                                    <button className='btn2'><h4>Xóa</h4></button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        )
    }
}
