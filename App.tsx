import BT01 from "./BT01";
import BT02 from "./BT02";
import BT03 from "./BT03";
import BT04 from "./BT04";
import BT05 from "./BT05";
import BT06 from "./BT06";
import BT07 from "./BT07";
import BT08 from "./BT08";
import BT09 from "./BT09";
import BT10 from "./BT10";
export default function App() {
  const name:string = "Nguyễn Xuân Nhất";
  const products = {
    id:1,
    name:"mì tôm hảo hảo",
    price:5000,
    quantity:20,
  }
  const users = [
    {
        id2: 1,
        name: "xuân nhất",
        address: "Hải Dương",
        email:"Xuannhatvn211@gmail.com",
    },
    {
        id2: 2,
        name: "xuân nhất 2",
        address: "Hải Dương",
        email:"Xuannhatvn211@gmail.com",
    },
    {
        id2: 3,
        name: "xuân nhất 3",
        address: "Hải Dương",
        email:"Xuannhatvn211@gmail.com",
    }
  ]
  const status = [
    {
      theme: "light",
      languages: "english"
    },
    {
      theme: "dark",
      languages: "vietnamese",
    }
  ]
  return (
    <div>
      <BT01 />
      <BT02 />
      <BT03 />
      <BT04 name = {name}/>
      <BT05 id={products.id} name={products.name} price={products.price} quantity={products.quantity} />
      <BT06 users ={users} />
      <BT07 />
      <BT08 />
      <BT09 />
      <BT10 />
    </div>
  )
}
