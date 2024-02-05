import './App.css';
import Logo from './Images/Group 32.png';
import about from './Images/1 (1) 2 (1).png';
import Stack from './Images/box1.jpg';
import Rotatory from './Images/Frame.png';
import Tower from './Images/rotatory 1.png';
import Cars from './Images/image 14.png';
import Car from './Images/image 15 (1).png';
import quote from './Images/quote.png';
import Rectangle from './Images/Rectangle 6.png';
import Group from './Images/Group 4.png';
import Group3 from './Images/Mask group (3).png';
import Group4 from './Images/Mask group (4).png';
import Group5 from './Images/Mask group (5).png';
import Group6 from './Images/Mask group (6).png';
import Group7 from './Images/Group.png';
import Group8 from './Images/image 13 (1).png';
import call from './Images/call 1.png';
import mail from './Images/mail 1.png';
import Neel from './Images/image 17.png';
import mick from './Images/g3042.png';

function App() {
  return (
    <div className="App">
      {/* Banner */}
      <div class="header-dark">
        <nav class="navbar navbar-dark navbar-expand-md navigation-clean-search">
          <div class="container mt-4 p-0">
            <div>
              <a class="navbar-brand" href="/">
                <img src={Logo} alt='' style={{ width: '70%' }} />
              </a>
            </div>
            <div class="d-flex justify-content-between right_sec">
              <span class="navbar-text"><a href="#about" class="text-decoration-none aboutUs">About Us</a></span>
              <span class="navbar-text"><a href="#products" class="text-decoration-none Products">Products</a></span>
              <span class="navbar-text"><a href="#parking_solutions" class="text-decoration-none Projects">Projects</a></span>
              <span class="navbar-text contact_Us"><a href="#footer" class="text-decoration-none contactUs">Contact Us</a></span>
              <button class="navbar-toggler border-0" type="button" data-bs-toggle="" data-bs-target="#" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
            </div>
          </div>
        </nav>
        <div class="container hero">
          <div class="row">
            <h1 class="text-start mb-0">The Future of</h1>
            <h1 class="text-start park">Parking is Here</h1>
            <hr class="bg-danger border-2 border-top border-white" />
            <h6 class="text-start">01/05</h6>
          </div>
        </div>
      </div>

      {/* About */}
      <div class="row about_sec" id="about">
        <div class="col text_cont">
          <h5 class="text-uppercase ">About us</h5>
          <h1 class="mt-4 mb-0 text_font"> Smart parking</h1>
          <h1 class="mt-0 text_font">Solutions</h1>
          <p class="mt-4 mb-0 text-P"> We are providing smart parking solutions for various industry.</p>
          <p class="mt-0 text-P">Stack Parking, Rotary Parking, Tower Parking, Turn Table.</p>
        </div>
        <div class="col">
          <div>
            <img src={about} alt="" className='about_img' />
          </div>
        </div>
        <div class="row mt-5 mb-5 align-items-center">
          <div class="col d-flex justify-content-between align_about">
            <div>
              <h1 class="text-start mb-0 num">11</h1>
              <hr class="mt-0 bg-danger border-2 border-top border-black" />
              <h6 class="text-start">Years</h6>
            </div>
            <div>
              <h1 class="text-start mb-0 num">10</h1>
              <hr class="mt-0 bg-danger border-2 border-top border-black" />
              <h6 class="text-start">Parking Solution</h6>
            </div>
            <div>
              <h1 class="text-start mb-0 num">247</h1>
              <hr class="mt-0 bg-danger border-2 border-top border-black" />
              <h6 class="text-start">Employees</h6>
            </div>
            <div>
              <h1 class="text-start mb-0 num">2000</h1>
              <hr class="mt-0 bg-danger border-2 border-top border-black" />
              <h6 class="text-start">Projects</h6>
            </div>
          </div>
          <div class="col-md-5 padd_rig">
            <div class="navbar-text float-end knowmore"><span class="text-decoration-none">Know more </span>
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
                </svg>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Products */}
      <div class="products_sec" id="products">
        <div class="row mt-5 prod_head">
          <h6 class="mt-5 fw-normal text-uppercase">our products</h6>
          <h2 class="mt-4 mb-0 fw-normal text_font_prod">Fully Autonomous,</h2>
          <h2 class="mt-0 fw-normal text_font_prod">Uncompromisingly Sustainable</h2>
        </div>
        <div class="row d-flex justify-content-evenly">
          <div class="d-flex col-md-8">
            <div class="d-flex mt-5" style={{ "height": "430px", marginLeft: '15%' }}>
              <div class="vr"></div>
            </div>
            <div class="col-md-6 mt-5 align_stack">
              <h4 class="mt-5 text-uppercase align_stack_head"> Stack Parking</h4>
              <p class="mb-0 p_text">This is a space to share more about the business:</p>
              <p class="mb-0 p_text">who's behind it, what it does and what this site has</p>
              <p class="mb-5 p_text">to offe</p>
              <div class="d-flex mt-5 align-items-baseline">
                <h1 class="text-start fw-normal">2.5T</h1> <span>Capacity</span></div>
              <hr class="mt-0 mb-0 bg-danger border-2 border-top border-black" />
              <div class="d-flex align-items-baseline"><h1 class="text-start fw-normal">2 </h1><span className='text_align_base'> Car Parking Level</span></div>
              <div class="navbar-text mt-5 w-50 knowmore"><span class="text-decoration-none">Know more </span>
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-4 mt-5">
            <div class=" mt-5 ">
              <img src={Stack} alt="" style={{ width: '80%' }} />
            </div>
          </div>
        </div>
        <div class="row d-flex justify-content-evenly">
          <div class="col-md-5 mt-5">
            <div class=" mt-5 rotatory_img">
              <img src={Rotatory} alt="" style={{ width: '100%' }} />
            </div>
          </div>
          <div class="d-flex col-md-6">
            <div class="col-md-6 rotatory_stack">
              <h4 class="mt-5 text-uppercase align_stack_head"> Rotatory Parking</h4>
              <h4 class="text-uppercase align_stack_head">System</h4>
              <p class="mb-0 p_text">This is a space to share more about the </p>
              <p class="mb-0 p_text">business:who's behind it, what it does </p>
              <p class="mb-5 p_text">and what this site has to offe</p>
              <div class="d-flex mt-5 align-items-baseline">
                <h1 class="text-start fw-normal">2.5T</h1> <span>Capacity</span></div>
              <hr class="mt-0 mb-0 bg-danger border-2 border-top border-black" />
              <div class="d-flex align-items-baseline"><h1 class="text-start fw-normal">2 </h1><span className='text_align_base'> Car Parking Level</span></div>
              <div class="navbar-text mt-5 w-50 knowmore"><span class="text-decoration-none">Know more </span>
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
                  </svg>
                </div>
              </div>
            </div>
            <div class="d-flex" style={{ "height": "510px", marginLeft: '15%', marginTop: '10%' }}>
              <div class="vr"></div>
            </div>
          </div>
        </div>
        <div class="row d-flex justify-content-evenly">
          <div class="d-flex col-md-7">
            <div class="d-flex mt-5" style={{ "height": "400px", marginLeft: '17%' }}>
              <div class="vr"></div>
            </div>
            <div class="col-md-7 mt-5 align_stack">
              <h4 class="mt-5 text-uppercase align_stack_head"> Tower Parking System</h4>
              <p class="mb-0 p_text">This is a space to share more about the business: who's</p>
              <p class="mb-0 p_text"> behind it, what it does and what this site has to offe</p>
              {/* <p class="mb-5 p_text"></p> */}
              <div class="d-flex mt-5 align-items-baseline">
                <h1 class="text-start fw-normal">2.5T</h1> <span>Capacity</span></div>
              <hr class="mt-0 mb-0 bg-danger border-2 border-top border-black" />
              <div class="d-flex align-items-baseline"><h1 class="text-start fw-normal">2 </h1><span className='text_align_base'> Car Parking Level</span></div>
              <div class="navbar-text mt-5 w-50 knowmore"><span class="text-decoration-none">Know more </span>
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-5 mt-3">
            <div style={{ marginRight: '20%' }}>
              <img src={Tower} alt="" style={{ width: '100%' }} />
            </div>
          </div>
        </div>
        <div class="row d-flex justify-content-evenly">
          <div class="col-md-5">
            <div style={{ marginLeft: "10%" }}>
              <h4 class="mt-5 text-uppercase  "> Rotatory Parking</h4>
              <h4 class="text-uppercase  ">System</h4>
              <p class="mb-0  ">This is a space to share more  </p>
              <p class="mb-0  ">about the business:who's behind </p>
              <p class="mb-0  ">it, what it does and what this site </p>
              <p class="mb-0  ">has to offe</p>
              <div class="row d-flex">
                <div class="mb-0  p-0">
                  <img src={Cars} alt style={{ width: "80%", float: 'right' }} />
                </div>
                <div class="knowmore_cars"><span class="text-decoration-none">Know more </span>
                  <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
                      <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-5">
            <div style={{ marginLeft: "10%" }}>
              <h4 class="mt-5 text-uppercase  "> Rotatory Parking</h4>
              <h4 class="text-uppercase  ">System</h4>
              <p class="mb-0  ">This is a space to share more  </p>
              <p class="mb-0  ">about the business:who's behind </p>
              <p class="mb-0  ">it, what it does and what this site </p>
              <p class="mb-0  ">has to offe</p>
              <div class="row d-flex">
                <div class="mb-0  p-0">
                  <img src={Car} alt style={{ width: "80%", float: 'right' }} />
                </div>
                <div class="knowmore_car"><span class="text-decoration-none">Know more </span>
                  <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
                      <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Parking Solutions */}
      <div class="row p-0 parking_solutions_sec" id="parking_solutions">
        <div class="header_parking_solutions">
          <div class="row park_text">
            <h4 class="text-uppercase mb-2" style={{ fontSize: '20px' }}>industry we serve</h4>
            <h1 class="mb-5" style={{ fontSize: '44px', fontWeight: '400' }}>Urban Parking Solutions</h1>
            <p class="mb-0 fw-normal">
              This is a space to share more about the business: who's behind
            </p>
            <p class="mb-0 mt-0 fw-normal">
              it. what it does and what this site has to offe
            </p>
          </div>
          <div class="row d-flex parking_align">
            <div class="col-md-2">
              <img src={Neel} alt="" />
            </div>
            <div class="col-md-2">
              <img src={Neel} alt="" />
            </div>
          </div>
          <div class="row d-flex mt-5">
            <div class="col-md-1">
              <div class="float-end arrow">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8" />
                </svg>
              </div>
            </div>
            <div class="col-md-2">
              <div class="d-flex justify-content-between align-items-center mike_text">
                <p>Urban Parking</p>
                <img src={mick} alt='' />
              </div>
            </div>
            <div class="col-md-2">
              <div class="d-flex justify-content-between align-items-center mike_text">
                <p>Malls</p>
                <img src={mick} alt='' />
              </div>
            </div>
            <div class="col-md-2">
              <div class="d-flex justify-content-between align-items-center mike_text">
                <p>Apartments</p>
                <img src={mick} alt='' />
              </div>
            </div>
            <div class="col-md-2">
              <div class="d-flex justify-content-between align-items-center mike_text">
                <p>Hospitals</p>
                <img src={mick} alt='' />
              </div>
            </div>
            <div class="col-md-1">
              <div class="float-start arrow">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div class="row p-0 testimonials_sec" id="testimonials">
        <div class="row d-flex p-0 mt-3 mb-0">
          <div class="row d-flex p-0 justify-content-between mt-5 mb-0">
            <div class="col-md-4 test_head">
              <h6 class="mt-5 fw-normal text-uppercase">our customer's says</h6>
              <h2 class="mt-4 mb-0 fw-normal text_font_prod">Testimonials</h2>
            </div>
            <div class="col-md-6 p-0 mt-5">
              <img src={quote} alt="" style={{ width: '50%', float: 'right' }} />
            </div>
          </div>
        </div>
        <div className='test_img_sec'>
          <div class="col-md-5" style={{ marginLeft: '1%' }}>
            <img src={Rectangle} alt="" style={{ width: '100%' }} />
            <h4 class="mt-4 mb-0 fw-normal">Anand Kumar</h4>
            <h6 class="mt-1 mb-5">BTS MALL, Coimbatore</h6>
          </div>
          <div class="col-md-5">
            <img src={Group} alt="" style={{ width: '98%' }} />
            <h4 class="mt-4 mb-0 fw-normal">Anand Kumar</h4>
            <h6 class="mt-1 mb-5">BTS MALL, Coimbatore</h6>
          </div>
        </div>
        <div class="col-md-4 test_media">
          <h6 class="mt-5 fw-normal text-uppercase">media</h6>
          <h2 class="mt-4 mb-0 fw-normal text_font_prod">New & Events</h2>
        </div>
        <div class="row d-flex justify-content-evenly mt-5" style={{ marginLeft: '12px' }}>
          <div class="col-md-3 p-0">
            <div>
              <img src={Group3} alt="" style={{ width: '100%' }} />
            </div>
            <p class="mt-3"> July 29, 2020</p>
            <h4 style={{ fontSize: '18px' }}>Culpaqui officia deserunt mollitulpaqui officia deserunt mollit anim. anim.</h4>
            <div class="mb-5">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
              </svg>
            </div>
          </div>
          <div class="col-md-3 p-0">
            <div>
              <img src={Group4} alt="" style={{ width: '100%' }} />
            </div>
            <p class="mt-3"> July 29, 2020</p>
            <h4 style={{ fontSize: '18px' }}>Culpaqui officia deserunt mollitulpaqui officia deserunt mollit anim. anim.</h4>
            <div class="mb-5">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
              </svg>
            </div>
          </div>
          <div class="col-md-3 p-0">
            <div>
              <img src={Group5} alt="" style={{ width: '100%' }} />
            </div>
            <p class="mt-3"> July 29, 2020</p>
            <h4 class="text-decoration-underline" style={{ fontSize: '18px' }}>Parking Solution 2022</h4>
            <div class="mb-5">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Case Study */}
      <div class="row caseStudy_sec" id="caseStudy">
        <div class="col-md-4 text_cont_case">
          <h5 class="text-uppercase ">Case Study</h5>
          <h1 class="mt-4 mb-0 fw-normal"> Fully Autonomous</h1>
          <h1 class="mt-0 mb-0 fw-normal">Uncompromisingly</h1>
          <h1 class="mt-0 mb-5 fw-normal">Sustainable</h1>
          <p class="mt-4 mb-0">This is a space to share nore about the business:</p>
          <p class="mt-0 mb-0">who's behind it, what it does and what this site</p>
          <p class="mt-0 mb-5">has to offe</p>
          <div class="navbar-text mt-5 mb-0 knowmore_case_study"><span class="text-decoration-none">Know more </span>
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
              </svg>
            </div>
          </div>
          <div class="d-flex" style={{ marginTop: '15%' }}>
            <h5>01 </h5><p style={{ marginLeft: '1%' }}>  / 02 / 03 / 04</p>
          </div>
        </div>
        <div class="col-md-6 mb-5" style={{ paddingRight: '0' }}>
          <div>
            <img src={Group6} alt="" className='case_img' />
          </div>
        </div>
      </div>

      {/* Our Presence */}
      <div class="row presence_sec" id="presence">
        <div class="col-md-4 text_cont_case">
          <h5 class="text-uppercase ">Our Presence</h5>
          {/* <h1 class="mt-4 mb-0 fw-normal"> Our Presence</h1> */}
          <p class="mt-4 mb-0">This is a space to share nore about the </p>
          <p class="mt-0 mb-0">business: who's behind it, what it </p>
          <p class="mt-0 mb-5">does and what this site has to offer</p>
          <div class="navbar-text mt-5 mb-0 knowmore"><span class="text-decoration-none">Know more </span>
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
              </svg>
            </div>
          </div>
        </div>
        <div class="col-md-6 mb-5" style={{ paddingRight: '0' }}>
          <div>
            <img src={Group7} alt="" className='case_img' />
          </div>
        </div>
      </div>

      {/* Footer */}
      <div class="row footer_sec" id="footer">
        <div class="row d-flex justify-content-center mb-5" style={{ marginTop: '7%' }}>
          <div class="col-md-4 mb-5" style={{ marginLeft: '5%' }}>
            <h2 class="mb-0 foot_head">We work with you,</h2>
            <h2 class="mt-0 mb-0 foot_head">collaborative. Let's do</h2>
            <h2 class="mt-0 mb-5 foot_head">something amazing </h2>
            <div class="navbar-text mt-5   knowmore"><span class="text-decoration-none">Enquiry Now </span>
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
                </svg>
              </div>
            </div>
          </div>
          <div class="col-md-7 d-flex " style={{ paddingLeft: '10%', paddingRight: '0%' }}>
            <div class="col-md-4">
              <h4 class="mb-3">Products</h4>
              <p class="mb-3">Stack Parking</p>
              <p class="mb-3">Rotary Parking system</p>
              <p class="mb-3">Tower Parking system</p>
              <p class="mb-3">Grand Parking Puzzle</p>
              <p class="mb-3"> Parking Turn Table</p>
            </div>
            <div class="col-md-4">
              <h4 class="mb-3 foot_font">The company</h4>
              <h4 class="mb-3 foot_font">Media</h4>
              <h4 class="mb-3 foot_font">Projects</h4>
              <h4 class="mb-3 foot_font">Portfolio</h4>
              <h4 class="mb-3 foot_font">Case studies</h4>
              <h4 class="mb-3 foot_font">Blogs</h4>
              <h4 class="mb-3 foot_font">FAQ</h4>
            </div>
            <div class="col-md-4">
              <h4 class="mb-3 foot_font">Resources</h4>
              <h4 class="mb-3 foot_font">Sales Office</h4>
              <h4 class="mb-3 foot_font">Service &</h4>
              <h4 class="mb-3 foot_font">Support</h4>
              <h4 class="mb-3 foot_font">Careers</h4>
              <h4 class="mb-3 foot_font">Our Presence</h4>
              <h4 class="mb-3 foot_font">Enquiry/</h4>
              <h4 class="mb-3 foot_font">Feedback</h4>
              <h4 class="mb-3 foot_font">contact Us</h4>
            </div>
          </div>
        </div>
        <hr class="bg-danger border-2 border-top border-black" style={{ width: '88%', marginLeft: '7%' }} />
        <div class="mt-0 d-flex justify-content-end">
          <div class="col-md-2 d-flex justify-content-evenly" style={{ marginTop: '-1%', marginRight: '1%' }}>
            <p>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-twitter" viewBox="0 0 16 16">
                <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334q.002-.211-.006-.422A6.7 6.7 0 0 0 16 3.542a6.7 6.7 0 0 1-1.889.518 3.3 3.3 0 0 0 1.447-1.817 6.5 6.5 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.32 9.32 0 0 1-6.767-3.429 3.29 3.29 0 0 0 1.018 4.382A3.3 3.3 0 0 1 .64 6.575v.045a3.29 3.29 0 0 0 2.632 3.218 3.2 3.2 0 0 1-.865.115 3 3 0 0 1-.614-.057 3.28 3.28 0 0 0 3.067 2.277A6.6 6.6 0 0 1 .78 13.58a6 6 0 0 1-.78-.045A9.34 9.34 0 0 0 5.026 15" />
              </svg>
            </p>
            <p>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16">
                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
              </svg>
            </p>
            <p>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-instagram" viewBox="0 0 16 16">
                <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
              </svg>
            </p>
            <p> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
              <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
            </svg></p>
          </div>
        </div>
        <div class='mt-5 mb-5 d-flex justify-content-start' style={{ padding: '0% 20% 0% 7%' }}>
          <div class='col-md-3'>
            <img src={Group8} alt=" " style={{ mixBlendMode: 'multiply', width: '45%' }} />
          </div>
          <div class='col-md-3'>
            <h4 style={{ fontSize: '18px' }}>Parkiayar Pvt. Ltd., </h4>
            <p class="mb-0" style={{ fontSize: '14px' }}>SF No: 553,Keeranatham</p>
            <p class="mb-0 mt-0" style={{ fontSize: '14px' }}>Puthupalayam,Athipalayam Rd,</p>
            <p class="mb-0 mt-0" style={{ fontSize: '14px' }}>Coimbatore, TamilNadu - 641035</p>
          </div>
          <div class='col-md-3 d-flex'>
            <div>
              <img src={call} alt=" " style={{ mixBlendMode: 'multiply' }} />
            </div>
            <div style={{ marginLeft: '2%' }}>
              <h4 class='mt-2 call_text'>+91 98765 43210 </h4>
              <h4 class='call_text'>+91 98765 43210 </h4>
            </div>
          </div>
          <div class='col-md-3 d-flex'>
            <div>
              <img src={mail} alt=" " style={{ mixBlendMode: 'multiply' }} />
            </div>
            <div style={{ marginLeft: '3%' }}>
              <p class="mb-0 mt-1" style={{ fontSize: '14px' }}>parkerlayerbdd@gmail.com</p>
              <p class="mb-0 mt-0" style={{ fontSize: '14px' }}>info@parlayer.com</p>
            </div>
          </div>
        </div>
        <hr class="bg-danger border-2 border-top border-black" style={{ width: '88%', marginLeft: '7%' }} />
        <h4 style={{ fontSize: '14px', marginLeft: '6%', width: '50%', marginBottom: '2%' }}>© Copyright 2023 Parklayer Private Limited. All Rights Reserved.</h4>
      </div>
    </div>
  );
}

export default App;
