import { useState } from 'react'
import {BrowserRouter,Routes,Route,Navigate,useNavigation,Link} from 'react-router-dom'
import Serach from "./pages/Serach"
import Customize from "./pages/Customize"
import Summary from "./pages/Summary"

function App() {

  return (
    <>
<BrowserRouter>
<Routes>

<Route path = "/" element ={<Navigate to ="/serach"/>}/>
<Route path = "/serach" element = {<Serach/>}/>
<Route path = "/customize/:roomType" element = {<Customize/>}/>
<Route path = "/summary" element = {<Summary/>}/>

</Routes>
</BrowserRouter>


</>      

  )
}

export default App
