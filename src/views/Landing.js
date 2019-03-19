import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Header from '../components/Header';
import Footer from '../components/Footer';
import CardDeck from '../components/CardDeck';

import '../static/Landing.css';

class Landing extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="container-fluid fill-height">
          <div className="row page-1">
            <div className="col align-self-center">
              <div className="brand">
                trip<span style={{ color: "#cc0041" }}>elf</span>
              </div>
              <p>Find your favourite neighborhood for your next trip.</p>
              <Link to={`/map`}>
                <button type="button" className="btn btn-outline-dark">
                  Get started
                </button>
              </Link>
            </div>
            <div className="col align-self-center text-center">
              <span style={{ fontSize: "192px" }}>
                <i className="fas fa-map-marked-alt" />
              </span>
            </div>
          </div>
          <hr />
          <div className="row page-2">
            <div className="col align-self-center">
              <div className="text-center page-title mb-5">
                How tripelf makes your trip better
              </div>
              <CardDeck />
            </div>
          </div>
          <hr />
          <section id="feature-1" />
          <div className="row page-3">
            <div className="col">
              <div className="row">
                <div className="col mb-5">
                  <h1>Feature 1</h1>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <h1>content</h1>
                </div>
                <div className="col">
                  <h1>image</h1>
                </div>
              </div>
            </div>
          </div>
          <hr />
          <section id="feature-2" />
          <div className="row page-4">
            <div className="col">
              <div className="row">
                <div className="col text-center mb-5">
                  <h1>Feature 2</h1>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <h1>image</h1>
                </div>
                <div className="col">
                  <h1>content</h1>
                </div>
              </div>
            </div>
          </div>
          <hr />
          <section id="feature-3" />
          <div className="row page-5">
            <div className="col">
              <div className="row">
                <div className="col text-right mb-5">
                  <h1>Feature 3</h1>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <h1>content</h1>
                </div>
                <div className="col">
                  <h1>image</h1>
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div className="row page-6">
            <div className="col text-center align-self-center">
              <div className="page-title mb-5">
                Find your favourite neighborhood
              </div>
              <Link to={`/map`}>
                <button type="button" className="btn btn-outline-dark">
                  Get started
                </button>
              </Link>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );}
};

export default Landing;
