import {Routes,Route ,Navigate} from 'react-router-dom'
import {Fragment} from 'react'

const RoutesFront=()=>{
return (
<Fragment>
    <Routes>
        <Route path='/' element={<Navigate replace to="/login"/>}/>
        <Route path='/login' element={<p>eli</p>}/>
    </Routes>
</Fragment>
)
}
export default RoutesFront