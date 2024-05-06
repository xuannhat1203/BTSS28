interface Props{
    name:string
}
export default function BT04(prop:Props) {
    const {name} = prop;
  return (
    <div>
        <h3>Họ và tên component cha : {name}</h3>
        <h3>Họ và tên component con : {name}</h3>
    </div>
  )
}
