import React from "react";

function Header() {
  return <>

    {/* ///header */}
    <nav className="navbar-expand-lg navbar-light bgcolor" >
      <nav className="navbar navbar-light " >
        <div className="container ">
          <a className="navbar-brand" href="#"><img src="https://z.nooncdn.com/s/app/com/noon/images/logos/noon-black-en.svg" alt="" /></a>
          {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
       <span className="navbar-toggler-icon"></span>
     </button> */}

          <form className="d-flex p-2  bd-highlight plength">
            <input className="form-control px-5 d-flex bd-highlight" type="search" placeholder="What are you looking for? " aria-label=".form-control-lg example" />
            {/* <button className="btn btn-outline-success" type="submit">Search</button> */}
          </form>


          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 row-lg-4 ">
              <li class="nav-item ">
                <a class="nav-link active px-5" aria-current="page" href="#">العربية‎</a>
              </li>


              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle px-5  " href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <img src="https://z.nooncdn.com/s/app/com/common/images/flags/ae.svg" alt="" />  <b>Ship to  UAE</b>
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a className="dropdown-item" href="#"><img src="https://z.nooncdn.com/s/app/com/common/images/flags/ae.svg" alt="" /> UAE</a></li>
                  <li><a className="dropdown-item" href="#"><img src="https://z.nooncdn.com/s/app/com/common/images/flags/sa.svg" alt="" /> KSA</a></li>
                  <li><a className="dropdown-item" href="#"><img src="https://z.nooncdn.com/s/app/com/common/images/flags/eg.svg" alt="" /> Egypt</a></li>
                </ul>
              </li>


              <li className="nav-item">
                <a className="nav-link px-5" href="#"> <b>Sign in</b> <img src="https://z.nooncdn.com/s/app/com/noon/icons/user_thin.svg" alt="" /></a>
              </li>


              <li className="nav-item">
                <a className="nav-link px-5" href="#"> <b>Cart</b> <img src="https://z.nooncdn.com/s/app/com/noon/icons/cart.svg" alt="" /></a>
              </li>



            </ul>

          </div>
        </div>
      </nav>
    </nav>




    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        {/* <a class="navbar-brand" href="#">Navbar</a> */}
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle px-5 cat " href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                <img src="https://z.nooncdn.com/s/app/com/noon/icons/cart.svg" alt="" />  <b>All Catagories </b>
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a className="dropdown-item" href="#"> Electronics and mobiles</a></li>
                <li><a className="dropdown-item" href="#">Beauty and health</a></li>
                <li><a className="dropdown-item" href="#">Fashion </a></li>
                <li><a className="dropdown-item" href="#">Home and Kitchen</a></li>
                <li><a className="dropdown-item" href="#">Sports and Outdoors </a></li>
                <li><a className="dropdown-item" href="#">Toy and Games</a></li>
                <li><a className="dropdown-item" href="#">Baby Products </a></li>
                <li><a className="dropdown-item" href="#">Books</a></li>
                <li><a className="dropdown-item" href="#">Pet Supplies </a></li>
              </ul>
            </li>
            <a class="nav-link px-4" href="#"><b>ELECTRONICS</b></a>
            <a class="nav-link px-4" href="#"><b>MEN</b></a>
            <a class="nav-link px-4" href="#"><b>WOMEN</b></a>
            <a class="nav-link px-4" href="#"><b>HOME</b></a>
            <a class="nav-link px-4" href="#"><b>BEAUTY & FRAGRANCE</b></a>
            <a class="nav-link px-4" href="#"><b>BABY & TOYS</b></a>
            <a class="nav-link px-4" href="#"><b>GROCERY</b></a>
            <a class="nav-link px-4" href="#"><b>SPORTS</b></a>
            <a class="nav-link px-4" href="#"><b>THE DUBAI MALL</b></a>

          </div>
        </div>
      </div>
    </nav>

  </>
}
export default Header