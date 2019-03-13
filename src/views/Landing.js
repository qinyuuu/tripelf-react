import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Header from '../components/Header';
import Footer from '../components/Footer';

import '../static/Landing.css';

class Landing extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="container-fluid fill-height">
          <div className="row page-1">
            <div className="col align-self-center">
              <h1 className="brand">TripElf</h1>
              <p>Find your favourite neighborhood for your next trip.</p>
              <Link to={`/map`}>
                <button type="button" className="btn btn-outline-dark">
                  Get started
                </button>
              </Link>
            </div>
            <div className="col align-self-center text-center">
              <span style={{ fontSize: "192px" }}>
                <i class="fas fa-map-marked-alt" />
              </span>
            </div>
          </div>
          <hr />
          <div className="row page-2">
            <div className="col">
              <h1>Page-2</h1>
            </div>
          </div>
          <hr />
          <div className="row page-3">
            <div className="col">
              <h1>Page-3</h1>
            </div>
          </div>
          <hr />
          <div className="row page-4">
            <div className="col">
              <h1>Page-4</h1>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );}
};

export default Landing;