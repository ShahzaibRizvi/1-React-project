import React from 'react'
import SearchIcon from '@material-ui/icons/Search';
import AddIcon from '@material-ui/icons/Add';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';
import InstagramIcon from '@material-ui/icons/Instagram';
import Clock from 'react-digital-clock';
const Nav = () => {

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
  };
  return (
    <div>

      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">OLX</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto ul1">
            <li class="nav-item active">
              <form class="form-inline my-2 my-lg-0 ">
                <input class="form-control mr-sm-2" type="search" placeholder="Lahore,Pakistan" aria-label="Search" ></input>

              </form>
            </li>
          </ul>
          <ul class="navbar-nav mr-auto ul2">
            <li class="nav-item active li1">
              <form class="form-inline my-2  my-lg-0 ">
                <input class="form-control mr-sm-2 input1 " type="search" placeholder="FindCars,Mobile Phones and more.." aria-label="Search" ></input>
                <button class="btn btn-outline-success my-2 my-sm-0" type="submit" ><SearchIcon />
            Search
            </button>
              </form>
            </li>
          </ul>
          <a class="nav-link login" href="#">Login </a>
          <a class="nav-link login" href="#"><AddIcon />Sell </a>
        </div>
      </nav>
      <div class="container-fluid">
        <div class="row">
          <div class="container nav2">
            <div class="row ">
              <div class="col-sm-2">
                Mobile Phones
            </div>
              <div class="col-sm-2">
                Cars
            </div>
              <div class="col-sm-2">
                Motorcycles
            </div>
              <div class="col-sm-2">
                Houses
            </div>
              <div class="col-sm-2">
                Tv-Videos-Audio
            </div>
              <div class="col-sm-2">
                Tablets
            </div>
            </div>
          </div>
        </div>
      </div>
      <section clas="banner">
        <img src="olxbanner.jpg"></img>
      </section>
      <h1 className="tc">
        More on Cars
</h1>
      <Slider {...settings}>
        <div>
          <img src="1.jpg"></img>
        </div>
        <div>
          <img src="2.jpg"></img>
        </div>
        <div>
          <img src="3.jpg"></img>
        </div>
        <div>
          <img src="4.jpg"></img>
        </div>
      </Slider>
      <div class="container">
        <div class="row">
          <div class="col-sm-3">
            <a href="#" class="linkcard">
              <div class="card">
                <img src="6.jpg" alt="Avatar" ></img>
                <div class="container bdr">
                  <h4><b>Rs 35,000</b></h4>
                  <p>Carolla</p>
                </div>
              </div>
            </a>
          </div>
          <div class="col-sm-3">
            <a href="#" class="linkcard">
              <div class="card ">
                <img src="7.jpg" alt="Avatar" ></img>
                <div class="container bdr">
                  <h4><b>35,000</b></h4>
                  <p>Samsung</p>
                </div>
              </div>
            </a>
          </div>
          <div class="col-sm-3">
            <a href="#" class="linkcard">
              <div class="card">
                <img src="8.jpg" alt="Avatar" ></img>
                <div class="container bdr">
                  <h4><b>200000</b></h4>
                  <p>Iphone</p>
                </div>
              </div>
            </a>
          </div>
          <div class="col-sm-3">
            <a href="#" class="linkcard">
              <div class="card ">
                <img src="9.jpg" alt="Avatar" ></img>
                <div class="container bdr">
                  <h4><b>300000</b></h4>
                  <p>Iphone 10</p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
      <footer class="footer">
        <div class="container">
          <div class="row">
            <div class="col">
              <h5>POPULAR CATEGORIES</h5>
              <p>Cars</p>
              <p>Flats for rent</p>
              <p>jobs</p>
              <p>Mobile Phones</p>
            </div>
            <div class="col">
              <h5>TRENDING SEARCHES</h5>
              <p>Bikes</p>
              <p>Watches</p>
              <p>Books</p>
              <p>Dogs</p>
            </div>
            <div class="col">
              <h5>ABOUT US</h5>
              <div class="lh">
                <p>About OLX Group</p>
                <p>OLX Blog</p>
                <p>Contact Us</p>
                <p>OLX for Businesses</p>
              </div>
            </div>
            <div class="col">
              <h5>OLX</h5>
              <p>Help</p>
              <p>Sitemap</p>
              <p>Legal & Privacy information</p>
            </div>
            <div class="col">
              <h5>FOLLOW US</h5>
              <p><FacebookIcon/><YouTubeIcon/><TwitterIcon/><InstagramIcon/></p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
export default Nav;