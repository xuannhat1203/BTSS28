import { useState } from "react"

export default function BT01() {
    const [name,setName] = useState<string>("Nguyễn Xuân Nhất");
    const changeName = () => {
        setName(name+" "+"nè");
    }
  return (
    <div>
        <p>Họ và tên: {name}</p>
        <button onClick={changeName}>ReName</button>
    </div>
  )
}
