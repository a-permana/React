import React from 'react';
import { Container, Col } from 'reactstrap';
import Navigation from '../router/Navigation';

const main = props => {
    return (
        <>
            <Navigation />
            <Container fluid={true} className="mt-2">
                <Col>{props.children}</Col><br/><br/><br/><br/><br/><br/>
                <center><Col>&copy; 2020 React </Col></center>
            </Container>
        </>
    );
};

export default main;

{/* <footer class="container">
        <p style="text-align: center;">&copy; 2017-2018 Warung Belajar </p> */}