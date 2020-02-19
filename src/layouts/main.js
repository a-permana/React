import React from 'react';
import { Container, Col } from 'reactstrap';
import Navigation from '../router/Navigation';

const main = props => {
    return (
        <>
            <Navigation />
            <Container fluid={true} className="mt-2">
                <Col>{props.children}</Col>
                <Col>Footer</Col>
            </Container>
        </>
    );
};

export default main;