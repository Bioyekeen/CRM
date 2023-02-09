import React from 'react'
import "./../home.css"
import Slider from "react-slick"
import banking3  from "./../assets/images/banking3.jpg"
import banking2  from "./../assets/images/banking2.jpg"
import banking1  from "./../assets/images/banking1.jpg"

function Home() {
  return (
    <div className="home">
        
<div>
  <nav className="navbar fixed-top navbar-expand-lg navbar-dark scrolling-navbar">
    <div className="container">
      {/* Brand */}
      <a className="navbar-brand" href="https://mdbootstrap.com/material-design-for-bootstrap/" target="_blank">
        <strong>MDB</strong>
      </a>
      {/* Collapse */}
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      {/* Links */}
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        {/* Left */}
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="#">Home
              <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="https://mdbootstrap.com/material-design-for-bootstrap/" target="_blank">About MDB</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="https://mdbootstrap.com/getting-started/" target="_blank">Free download</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="https://mdbootstrap.com/bootstrap-tutorial/" target="_blank">Free tutorials</a>
          </li>
        </ul>
        {/* Right */}
        <ul className="navbar-nav nav-flex-icons">
          <li className="nav-item">
            <a href="https://www.facebook.com/mdbootstrap" className="nav-link" target="_blank">
              <i className="fab fa-facebook-f" />
            </a>
          </li>
          <li className="nav-item">
            <a href="https://twitter.com/MDBootstrap" className="nav-link" target="_blank">
              <i className="fab fa-twitter" />
            </a>
          </li>
          <li className="nav-item">
            <a href="https://github.com/mdbootstrap/bootstrap-material-design" className="nav-link border border-light rounded" target="_blank">
              <i className="fab fa-github mr-2" />MDB GitHub
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>

<Slider>
  <img className='bannerImg' src={banking1} alt="" />
  <img className='bannerImg'src={banking2} alt="" />
  <img className='bannerImg'src={banking3} alt="" />
</Slider>
  <main>
    <div className="container">
      <section className="mt-5 wow fadeIn">
        {/*Grid row*/}
        <div className="row">
          {/*Grid column*/}
          <div className="col-md-6 mb-4">
            <img src="https://mdbootstrap.com/img/Marketing/mdb-press-pack/mdb-main.jpg" className="img-fluid z-depth-1-half" alt />
          </div>
          {/*Grid column*/}
          {/*Grid column*/}
          <div className="col-md-6 mb-4">
            {/* Main heading */}
            <h3 className="h3 mb-3">Material Design for Bootstrap</h3>
            <p>This template is created with Material Design for Bootstrap (
              <strong>MDB</strong> ) framework.</p>
            <p>Read details below to learn more about MDB.</p>
            {/* Main heading */}
            <hr />
            <p>
              <strong>400+</strong> material UI elements,
              <strong>600+</strong> material icons,
              <strong>74</strong> CSS animations, SASS files, templates, tutorials and many more.
              <strong>Free for personal and commercial use.</strong>
            </p>
            {/* CTA */}
            <a target="_blank" href="https://mdbootstrap.com/getting-started/" className="btn btn-indigo btn-md">Download
              <i className="fas fa-download ml-1" />
            </a>
            <a target="_blank" href="https://mdbootstrap.com/components/" className="btn btn-indigo btn-md">Live demo
              <i className="fas fa-image ml-1" />
            </a>
          </div>
          {/*Grid column*/}
        </div>
        {/*Grid row*/}
      </section>
      {/*Section: Main info*/}
      <hr className="my-5" />
      {/*Section: Main features & Quick Start*/}
      <section>
        <h3 className="h3 text-center mb-5">About MDB</h3>
        {/*Grid row*/}
        <div className="row wow fadeIn">
          {/*Grid column*/}
          <div className="col-lg-6 col-md-12 px-4">
            {/*First row*/}
            <div className="row">
              <div className="col-1 mr-3">
                <i className="fas fa-code fa-2x indigo-text" />
              </div>
              <div className="col-10">
                <h5 className="feature-title">Bootstrap 4</h5>
                <p className="grey-text">Thanks to MDB you can take advantage of all feature of newest Bootstrap 4.</p>
              </div>
            </div>
            {/*/First row*/}
            <div style={{height: 30}} />
            {/*Second row*/}
            <div className="row">
              <div className="col-1 mr-3">
                <i className="fas fa-book fa-2x blue-text" />
              </div>
              <div className="col-10">
                <h5 className="feature-title">Detailed documentation</h5>
                <p className="grey-text">We give you detailed user-friendly documentation at your disposal. It will help you
                  to implement your ideas
                  easily.
                </p>
              </div>
            </div>
            {/*/Second row*/}
            <div style={{height: 30}} />
            {/*Third row*/}
            <div className="row">
              <div className="col-1 mr-3">
                <i className="fas fa-graduation-cap fa-2x cyan-text" />
              </div>
              <div className="col-10">
                <h5 className="feature-title">Lots of tutorials</h5>
                <p className="grey-text">We care about the development of our users. We have prepared numerous tutorials,
                  which allow you to learn
                  how to use MDB as well as other technologies.</p>
              </div>
            </div>
            {/*/Third row*/}
          </div>
          {/*/Grid column*/}
          {/*Grid column*/}
          <div className="col-lg-6 col-md-12">
            <p className="h5 text-center mb-4">Watch our "5 min Quick Start" tutorial</p>
            <div className="embed-responsive embed-responsive-16by9">
              <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/cXTThxoywNQ" allowFullScreen />
            </div>
          </div>
          {/*/Grid column*/}
        </div>
        {/*/Grid row*/}
      </section>
      {/*Section: Main features & Quick Start*/}
      <hr className="my-5" />
      {/*Section: Not enough*/}
      <section>
        <h2 className="my-5 h3 text-center">Not enough?</h2>
        {/*First row*/}
        <div className="row features-small mb-5 mt-3 wow fadeIn">
          {/*First column*/}
          <div className="col-md-4">
            {/*First row*/}
            <div className="row">
              <div className="col-2">
                <i className="fas fa-check-circle fa-2x indigo-text" />
              </div>
              <div className="col-10">
                <h6 className="feature-title">Free for personal and commercial use</h6>
                <p className="grey-text">Our license is user-friendly. Feel free to use MDB for both private as well as
                  commercial projects.
                </p>
                <div style={{height: 15}} />
              </div>
            </div>
            {/*/First row*/}
            {/*Second row*/}
            <div className="row">
              <div className="col-2">
                <i className="fas fa-check-circle fa-2x indigo-text" />
              </div>
              <div className="col-10">
                <h6 className="feature-title">400+ UI elements</h6>
                <p className="grey-text">An impressive collection of flexible components allows you to develop any project.
                </p>
                <div style={{height: 15}} />
              </div>
            </div>
            {/*/Second row*/}
            {/*Third row*/}
            <div className="row">
              <div className="col-2">
                <i className="fas fa-check-circle fa-2x indigo-text" />
              </div>
              <div className="col-10">
                <h6 className="feature-title">600+ icons</h6>
                <p className="grey-text">Hundreds of useful, scalable, vector icons at your disposal.</p>
                <div style={{height: 15}} />
              </div>
            </div>
            {/*/Third row*/}
            {/*Fourth row*/}
            <div className="row">
              <div className="col-2">
                <i className="fas fa-check-circle fa-2x indigo-text" />
              </div>
              <div className="col-10">
                <h6 className="feature-title">Fully responsive</h6>
                <p className="grey-text">It doesn't matter whether your project will be displayed on desktop, laptop, tablet
                  or mobile phone. MDB
                  looks great on each screen.</p>
                <div style={{height: 15}} />
              </div>
            </div>
            {/*/Fourth row*/}
          </div>
          {/*/First column*/}
          {/*Second column*/}
          <div className="col-md-4 flex-center">
            <img src="https://mdbootstrap.com/img/Others/screens.png" alt="MDB Magazine Template displayed on iPhone" className="z-depth-0 img-fluid" />
          </div>
          {/*/Second column*/}
          {/*Third column*/}
          <div className="col-md-4 mt-2">
            {/*First row*/}
            <div className="row">
              <div className="col-2">
                <i className="fas fa-check-circle fa-2x indigo-text" />
              </div>
              <div className="col-10">
                <h6 className="feature-title">70+ CSS animations</h6>
                <p className="grey-text">Neat and easy to use animations, which will increase the interactivity of your
                  project and delight your visitors.
                </p>
                <div style={{height: 15}} />
              </div>
            </div>
            {/*/First row*/}
            {/*Second row*/}
            <div className="row">
              <div className="col-2">
                <i className="fas fa-check-circle fa-2x indigo-text" />
              </div>
              <div className="col-10">
                <h6 className="feature-title">Plenty of useful templates</h6>
                <p className="grey-text">Need inspiration? Use one of our predefined templates for free.</p>
                <div style={{height: 15}} />
              </div>
            </div>
            {/*/Second row*/}
            {/*Third row*/}
            <div className="row">
              <div className="col-2">
                <i className="fas fa-check-circle fa-2x indigo-text" />
              </div>
              <div className="col-10">
                <h6 className="feature-title">Easy installation</h6>
                <p className="grey-text">5 minutes, a few clicks and... done. You will be surprised at how easy it is.
                </p>
                <div style={{height: 15}} />
              </div>
            </div>
            {/*/Third row*/}
            {/*Fourth row*/}
            <div className="row">
              <div className="col-2">
                <i className="fas fa-check-circle fa-2x indigo-text" />
              </div>
              <div className="col-10">
                <h6 className="feature-title">Easy to use and customize</h6>
                <p className="grey-text">Using MDB is straightforward and pleasant. Components flexibility allows you deep
                  customization. You will
                  easily adjust each component to suit your needs.</p>
                <div style={{height: 15}} />
              </div>
            </div>
            {/*/Fourth row*/}
          </div>
          {/*/Third column*/}
        </div>
        {/*/First row*/}
      </section>
      {/*Section: Not enough*/}
      <hr className="mb-5" />
      {/*Section: More*/}
      <section>
        <h2 className="my-5 h3 text-center">...and even more</h2>
        {/*First row*/}
        <div className="row features-small mt-5 wow fadeIn">
          {/*Grid column*/}
          <div className="col-xl-3 col-lg-6">
            {/*Grid row*/}
            <div className="row">
              <div className="col-2">
                <i className="fab fa-firefox fa-2x mb-1 indigo-text" aria-hidden="true" />
              </div>
              <div className="col-10 mb-2 pl-3">
                <h5 className="feature-title font-bold mb-1">Cross-browser compatibility</h5>
                <p className="grey-text mt-2">Chrome, Firefox, IE, Safari, Opera, Microsoft Edge - MDB loves all browsers;
                  all browsers love MDB.
                </p>
              </div>
            </div>
            {/*/Grid row*/}
          </div>
          {/*/Grid column*/}
          {/*Grid column*/}
          <div className="col-xl-3 col-lg-6">
            {/*Grid row*/}
            <div className="row">
              <div className="col-2">
                <i className="fas fa-level-up-alt fa-2x mb-1 indigo-text" aria-hidden="true" />
              </div>
              <div className="col-10 mb-2">
                <h5 className="feature-title font-bold mb-1">Frequent updates</h5>
                <p className="grey-text mt-2">MDB becomes better every month. We love the project and enhance as much as
                  possible.
                </p>
              </div>
            </div>
            {/*/Grid row*/}
          </div>
          {/*/Grid column*/}
          {/*Grid column*/}
          <div className="col-xl-3 col-lg-6">
            {/*Grid row*/}
            <div className="row">
              <div className="col-2">
                <i className="far fa-comments fa-2x mb-1 indigo-text" aria-hidden="true" />
              </div>
              <div className="col-10 mb-2">
                <h5 className="feature-title font-bold mb-1">Active community</h5>
                <p className="grey-text mt-2">Our society grows day by day. Visit our forum and check how it is to be a part
                  of our family.
                </p>
              </div>
            </div>
            {/*/Grid row*/}
          </div>
          {/*/Grid column*/}
          {/*Grid column*/}
          <div className="col-xl-3 col-lg-6">
            {/*Grid row*/}
            <div className="row">
              <div className="col-2">
                <i className="fas fa-code fa-2x mb-1 indigo-text" aria-hidden="true" />
              </div>
              <div className="col-10 mb-2">
                <h5 className="feature-title font-bold mb-1">jQuery 3.x</h5>
                <p className="grey-text mt-2">MDB is integrated with newest jQuery. Therefore you can use all the latest
                  features which come along with
                  it.
                </p>
              </div>
            </div>
            {/*/Grid row*/}
          </div>
          {/*/Grid column*/}
        </div>
        {/*/First row*/}
        {/*Second row*/}
        <div className="row features-small mt-4 wow fadeIn">
          {/*Grid column*/}
          <div className="col-xl-3 col-lg-6">
            {/*Grid row*/}
            <div className="row">
              <div className="col-2">
                <i className="fas fa-cubes fa-2x mb-1 indigo-text" aria-hidden="true" />
              </div>
              <div className="col-10 mb-2">
                <h5 className="feature-title font-bold mb-1">Modularity</h5>
                <p className="grey-text mt-2">Material Design for Bootstrap comes with both, compiled, ready to use libraries
                  including all features as
                  well as modules for CSS (SASS files) and JS.</p>
              </div>
            </div>
            {/*/Grid row*/}
          </div>
          {/*/Grid column*/}
          {/*Grid column*/}
          <div className="col-xl-3 col-lg-6">
            {/*Grid row*/}
            <div className="row">
              <div className="col-2">
                <i className="fas fa-question fa-2x mb-1 indigo-text" aria-hidden="true" />
              </div>
              <div className="col-10 mb-2">
                <h5 className="feature-title font-bold mb-1">Technical support</h5>
                <p className="grey-text mt-2">We care about reliability. If you have any questions - do not hesitate to
                  contact us.
                </p>
              </div>
            </div>
            {/*/Grid row*/}
          </div>
          {/*/Grid column*/}
          {/*Grid column*/}
          <div className="col-xl-3 col-lg-6">
            {/*Grid row*/}
            <div className="row">
              <div className="col-2">
                <i className="fas fa-th fa-2x mb-1 indigo-text" aria-hidden="true" />
              </div>
              <div className="col-10 mb-2">
                <h5 className="feature-title font-bold mb-1">Flexbox</h5>
                <p className="grey-text mt-2">MDB fully supports Flex Box. You can forget about alignment issues.</p>
              </div>
            </div>
            {/*/Grid row*/}
          </div>
          {/*/Grid column*/}
          {/*Grid column*/}
          <div className="col-xl-3 col-lg-6">
            {/*Grid row*/}
            <div className="row">
              <div className="col-2">
                <i className="far fa-file-code fa-2x mb-1 indigo-text" aria-hidden="true" />
              </div>
              <div className="col-10 mb-2">
                <h5 className="feature-title font-bold mb-1">SASS files</h5>
                <p className="grey-text mt-2">Arranged and well documented .scss files can't wait until you compile them.</p>
              </div>
            </div>
            {/*/Grid row*/}
          </div>
          {/*/Grid column*/}
        </div>
        {/*/Second row*/}
      </section>
      {/*Section: More*/}
    </div>
  </main>
  {/*Main layout*/}
  {/*Footer*/}
  <footer className="page-footer text-center font-small mt-4 wow fadeIn">
    {/*Call to action*/}
    <div className="pt-4">
      <a className="btn btn-outline-white" href="https://mdbootstrap.com/getting-started/" target="_blank" role="button">Download
        MDB
        <i className="fas fa-download ml-2" />
      </a>
      <a className="btn btn-outline-white" href="https://mdbootstrap.com/bootstrap-tutorial/" target="_blank" role="button">Start
        free tutorial
        <i className="fas fa-graduation-cap ml-2" />
      </a>
    </div>
    {/*/.Call to action*/}
    <hr className="my-4" />
    {/* Social icons */}
    <div className="pb-4">
      <a href="https://www.facebook.com/mdbootstrap" target="_blank">
        <i className="fab fa-facebook-f mr-3" />
      </a>
      <a href="https://twitter.com/MDBootstrap" target="_blank">
        <i className="fab fa-twitter mr-3" />
      </a>
      <a href="https://www.youtube.com/watch?v=7MUISDJ5ZZ4" target="_blank">
        <i className="fab fa-youtube mr-3" />
      </a>
      <a href="https://plus.google.com/u/0/b/107863090883699620484" target="_blank">
        <i className="fab fa-google-plus-g mr-3" />
      </a>
      <a href="https://dribbble.com/mdbootstrap" target="_blank">
        <i className="fab fa-dribbble mr-3" />
      </a>
      <a href="https://pinterest.com/mdbootstrap" target="_blank">
        <i className="fab fa-pinterest mr-3" />
      </a>
      <a href="https://github.com/mdbootstrap/bootstrap-material-design" target="_blank">
        <i className="fab fa-github mr-3" />
      </a>
      <a href="http://codepen.io/mdbootstrap/" target="_blank">
        <i className="fab fa-codepen mr-3" />
      </a>
    </div>
    {/* Social icons */}
    {/*Copyright*/}
    <div className="footer-copyright py-3">
      © 2018 Copyright:
      <a href="https://mdbootstrap.com/bootstrap-tutorial/" target="_blank"> MDBootstrap.com </a>
    </div>
    {/*/.Copyright*/}
  </footer>
  {/*/.Footer*/}
</div>

</div>
  )
}

export default Home