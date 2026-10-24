import {Link} from 'react-router-dom'
import rooms from '../data/rooms'

function Search (){

return(
<>
<h1> Hotel Booking</h1>
<h2> Select Your Room</h2>

{rooms.map((room)=>(
<div key={room.id}>
<p> name: {room.name}</p>
<p> price : {room.price}</p>
<Link to= {`/customize/${room.type}`}>
Select room 
</Link>

</div>
))}

</>
)

}

export default Search