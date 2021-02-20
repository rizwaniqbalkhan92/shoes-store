import React from 'react'
import './Home.css'
import Shoes from '../data.json'
import {Link} from 'react-router-dom'
import {Header  } from "./Home";

const Product=(props)=>{ 

  
return(

<>


  

<div className="container-fluid products">
    {/* <div>{props.location.pathname ==='/products' ? <Header/> :<span></span>}</div> */}

<h2  style={{alignItems:'center',marginTop:'12px',marginBottom:'12px'}} id="products">PRODUCTS</h2>

<div className="multi-products"> 

{Object.keys(Shoes).map((product,index)=>{

const shoe=Shoes[product]

return(
    <>
    <Link to={`products/${product}`} className="product-1"  key={index}>
<img src={shoe.img} width="240px" height="220px" />
<h5 style={{marginTop:'3px'}}>Rs.{shoe.price}</h5>
<h5>{shoe.details.company}</h5>
</Link>


</>)

    })
}





{/* <div className="product-1">1</div>
<div className="product-1">1</div>
<div className="product-1">1</div>
<div className="product-1">1</div>
<div className="product-1">1</div>
<div className="product-1">1</div>
<div className="product-1">1</div>
<div className="product-1">1</div>
<div className="product-1">1</div>
<div className="product-1">1</div>
<div className="product-1">1</div>
<div className="product-1">1</div>
<div className="product-1">1</div>
<div className="product-1">1</div> */}


</div>



</div>

</>

)


}

export default Product