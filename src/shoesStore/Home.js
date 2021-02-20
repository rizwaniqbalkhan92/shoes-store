import React from 'react'
import './Home.css'
import Products from './Products'
import {Link} from 'react-router-dom'
// import Card from '../cardData.json'



export const Header=()=>{


  return(<>
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">RizCart</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link to="/"><div class="nav-link active" aria-current="page" >Home</div></Link>
        </li>
        <li class="nav-item">
     <Link active={true} to="/products"><div class="nav-link active" aria-current="page">Product</div></Link>

        </li>
    
      </ul>
      <span class="navbar-text">

      </span>
    </div>
  </div>
</nav>




  </>)
}

export const Cards=()=>{

return(<>





  <div  className="cards-div">


<div className="card-1">
<div className="card-1-inner">ICON </div>
<h2>ICON NAME</h2>
</div>
<div className="card-1">
<div className="card-1-inner">ICON </div>
<h2>ICON NAME</h2>
</div>
<div className="card-1">
<div className="card-1-inner">ICON </div>
<h2>ICON NAME</h2>
</div>

{/* {
  Object.keys(Card).map((val,ind)=>{
const card1=Card[val]

return(<>
  <Link to={`/cards/${val}`} className="card-1">
<div className="card-1-inner">{card1.cardName}</div>
<h2>{card1.cardIcon}</h2>
</Link>
</>)


})

} */}



</div>
</>)

}

 const Home=()=>{

return(

    <>


<Header/>
<Cards/>
<Products/>







    </>
)

}

export default Home