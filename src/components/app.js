import React, { Component } from 'react';

export default class App extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
          <div className="container">
            <a className="navbar-brand" href="index.html">Start Bootstrap</a>
            <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
              Menu
          <i className="fa fa-bars"></i>
            </button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <a className="nav-link" href="index.html">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="about.html">About</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="post.html">Sample Post</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="contact.html">Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <header className="masthead ttt" >
          <div className="container">
            <div className="row">
              <div className="col-lg-8 col-md-10 mx-auto">
                <div className="site-heading">
                  <h1>Clean Blog</h1>
                  <span className="subheading">A Blog Theme by Start Bootstrap</span>
                </div>
              </div>
            </div>
          </div>
        </header>

        <div className="container">


          <div className="row">
            <div className="col-lg-8 col-md-10 mx-auto">
              <h1>Content here!</h1>
            </div>
          </div>
        </div>

                <hr/>

          <footer>
            <div className="container">
              <div className="row">
                <div className="col-lg-8 col-md-10 mx-auto">
                  <ul className="list-inline text-center">
                    <li className="list-inline-item">
                      <a href="#">
                        <span className="fa-stack fa-lg">
                          <i className="fa fa-circle fa-stack-2x"></i>
                          <i className="fa fa-twitter fa-stack-1x fa-inverse"></i>
                        </span>
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="#">
                        <span className="fa-stack fa-lg">
                          <i className="fa fa-circle fa-stack-2x"></i>
                          <i className="fa fa-facebook fa-stack-1x fa-inverse"></i>
                        </span>
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="#">
                        <span className="fa-stack fa-lg">
                          <i className="fa fa-circle fa-stack-2x"></i>
                          <i className="fa fa-github fa-stack-1x fa-inverse"></i>
                        </span>
                      </a>
                    </li>
                  </ul>
                  <p className="copyright text-muted">Copyright &copy; Your Website 2017</p>
                </div>
              </div>
            </div>
          </footer>

      </div>
    );
  }
}
