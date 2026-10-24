import {Link,useParams,useNavigate} from 'react-router-dom'
import {useState,useEffect} from 'react'
import rooms from '../data/rooms'


export default function Customize (){
const [breakfast,setBreakfast] = useState(false)
const [bed , setBed]= useState(false)
const [tax,settax]= useState(0)
const {roomType} = useParams();
const{coupon,setcoupon} = useState("")
const [couponMsg,setCompoundMsg] = useState ("")
const [discount,setdiscount] = useState(0)
const room = rooms.find((r) => r.type===roomType)




const breakFastPrice = breakfast ? 500 : 0
const bedprice  = bed ? 800 : 0

const sub_total = room.price + breakFastPrice + bedprice;
useEffect(()=>{ settax(sub_total*0.12)},[sub_total]) 

useEffect(()=>{
if (coupon === " "){
setdiscount(0)
setCompoundMsg = ""
}else if (coupon === "HOTEL123"){
setDiscount(sub_total * 0.10)
setCompoundMsg("coupon Successfully applied")
}else{
setCompoundMsg("Invalid Coupon ")
}

},[sub_total,coupon])

const total_price = sub_total + tax
const total = total_price-discount

const nevigate  = useNavigate
function handleContinue (){
const booking = {
room,
breakfast ,
bed,
sub_total,
tax,
coupon,
discount,
total

};
nevigate ("/summary" ,{
state : {booking}
});

}
return(

<div>
<h1> Custmoize Room</h1>

<p>Room :  {room.name}</p>
<p> Price : {room.price}</p>

<label>
<input type = "checkbox"
checked = {breakfast}
onChange = {(e) => setBreakfast(e.target.checked)}
/>
BreakFast (500)
</label>

<label>
<input type= "Checkbox"
checked = {bed}
onChange = {(e) => setBed(e.target.checked)
}
/>
EXtra Bed (800)
</label>
<p>Discount coupon </p>
<input type = "text"
value = {coupon}
onChange={(e)=> setcoupon(e.target.value)}/>
<p> {couponMsg} </p>

<h3> Sub totoal = {sub_total}</h3>
<h3> taxes = {tax}</h3>
<h2> Total Price = {total_price}</h2>
<h2> discount = {discount}</h2>
<h2> final _price = {total}</h2>

<button onClick = {handleContinue}>
so to summary
</button>
</div>
)
}