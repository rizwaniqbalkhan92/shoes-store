import React,{useState} from 'react'
import {useParams}  from 'react-router-dom'
import {Link} from 'react-router-dom'
import Shoes from '../data.json'
import {Header} from './Home'
import './proDet.css'

const ProductsDetails =()=>{
    const {id} =useParams()
console.log(Shoes[id])
const shoe=Shoes[id]
const [img1,setImg1]=useState(shoe.img)

    return(<>
<Header/>

<div style={{display:'flex',flexWrap:'wrap',marginTop:50,justifyContent:'space-around'}}>
<div style={{width:550,height:500}}>
<img style={{width:500,height:450 }} className="imgs" src={img1} />
<h1 style={{marginBottom:15}}>Rs. {shoe.price}</h1>

</div>
<div style={{display:'flex',flexDirection:'column',justifyContent:'center',flexWrap:'wrap',alignItems:'center'}}>
<div>  

<h1 style={{margin:10}}>DETAILS</h1>
<h2 style={{margin:10}}>SHOE PRICE: {shoe.price}</h2>
<h2 style={{margin:10}}>SHOE COLOR: {shoe.details.color}</h2>
<h2 style={{margin:10}}>SHOE COMPANY: {shoe.details.company}</h2>

</div>
<div>
<img className="imgs" style={{width:250,height:200}} onClick={()=>setImg1(shoe.img)} src={   shoe.img} />
<img className="imgs" style={{width:250,height:200}} onClick={()=>setImg1(shoe.details.imgDetails)} src={   shoe.details.imgDetails} />
<img className="imgs" style={{width:250,height:200}} onClick={()=>setImg1(shoe.details.imgDetailss)} src={   shoe.details.imgDetailss} />

</div>

</div>

</div>

{/* <img style={{width:250,height:200}} onClick={()=>setImg1(false)} src={   shoe.img} /> */}
{/* <img style={{width:500,height:450}} src={shoe.img} /> */}



    </>)
}


export default ProductsDetails