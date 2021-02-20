import React from 'react'
import { BrowserRouter as Router, Switch,Route,Link} from 'react-router-dom'
import Home from './shoesStore/Home'
// import About from './components/About'
// import Contact from './components/Contact'
import Product from './shoesStore/Products'
import ProductItem from './shoesStore/productsDetails'
// import NavBar from './components/Navbar'
function RouterItem(){

return(
    <div>
<Router>
    {/* <NavBar/> */}
<Switch>
{/* <Route  path="/" exact={true} component={Home} />
<Route  path="/about"  component={About} />
<Route  path="/contact"  component={Contact} /> */}
<Route  path="/products" exact={true}  component={Product} />
<Route  path="/productsdetails/:id"   component={ProductItem} />
{/* <Route  path="*"  component={()=><h2>404 Not Found...!</h2>} /> */}

</Switch>

</Router>
   </div>
)


  }


  export default RouterItem;

