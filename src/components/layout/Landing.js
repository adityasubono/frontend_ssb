import React from 'react';
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Contents from "./Contents";
import {Box, Container, Grid} from "@material-ui/core";
import Login from "../auth/Login";


const Landing = ({ isAuthenticated }) => {

    if(isAuthenticated) {
        return <Redirect to='/dashboard' />;
    }
        return (
            <section className="landing">
                <div className="dark-overlay">
                    <div className="landing-inner">
                        <h1 className="x-large">SSB PSMS Medan</h1>
                        <p className="lead">
                           Memajukan dunia persebak bola di tanah air Indonesia lewat kaki
                            junior menciptakan <br />talenta berbakat dari tanah Medan
                        </p>
                        <div className="buttons">
                            <Link to={'/login'} className="btn btn-primary"> <h1>Ayo Daftar Segera Talenta Muda</h1></Link>
                        </div>
                    </div>
                </div>
            </section>
        );
}

Landing.propTypes = {
    isAuthenticated: PropTypes.bool
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps)(Landing);
