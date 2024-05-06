import { Component } from 'react'
interface ClassComponent{
    id:number
    name:string
    age:string
    address:string
}
export default class BT02 extends Component <any,ClassComponent> {
    constructor(props:ClassComponent){
        super(props);
        this.state = {
            id:1,
            name:"Nguyễn Xuân Nhất",
            age:"12/03/2005",
            address:"Hải Dương",
        }
    }
  render() {
    return (
      <div>
        Thông tin cá nhân
        <p>ID: {this.state.id}</p>
        <p>Họ và tên: {this.state.name}</p>
        <p>Ngày sinh: {this.state.age}</p>
        <p>Địa chỉ: {this.state.address}</p>
      </div>
    )
  }
}

