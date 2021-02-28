import React, {Component} from 'react';
import styled from "styled-components";

export const ErrorDiv = styled.div`
    color: #fff;
    text-align: center;
    margin-top: 5em;
`

class Error extends Component {
    render() {
        return (
            <ErrorDiv>Ooopppss! Somethings went wrong!</ErrorDiv>
        );
    }
}

export default Error;
