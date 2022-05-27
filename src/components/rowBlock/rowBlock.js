import React from 'react';
import {Col, Row} from 'reactstrap';
import { Outlet } from 'react-router-dom';


const RowBlock = ({left, right}) => {
    return (
        <Row>
            <Col md='6'>
                {left}
            </Col>
            <Col md='6'>
                {right}
            </Col>
            <Outlet />
        </Row>
    )
}

export default RowBlock;