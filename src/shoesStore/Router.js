import React from 'react'
import {BrowserRouter as Router,Route,Switch,Link} from 'react-router-dom'
import Home from './Home'
import Products from './Products'
import ProductsDetails from './productsDetails'
// import {CardDetails} from './CardDetails'

const Routes=()=>{


return(<>

<Router>

<Switch>
<Route path="/" exact={true} component={Home} />
<Route path="/products" exact={true} component={Products} />
<Route path="/products/:id"  component={ProductsDetails} />
{/* <Route path="/cards/:num"  component={CardDetails} /> */}
<Route path="*"  component={<h2>404 Page not Found</h2>} />


</Switch>





</Router>




</>)


}


export default Routes