// displays all parts of our web 

import React, { Component } from 'react';
import styled from "styled-components";
import logo from './logo.svg';
import './App.css';

import Table from "./components/Table";
import SearchBox from "./components/SearchBox.js";
import TestComponent from "./components/TestComponent.js";

const StyledAppDiv = styled.div`
  display: flex;
  flex-shrink: 0;
  flex-direction: column;
`;


class App extends Component {
  render() {
    return (
      <StyledAppDiv>
        <SearchBox></SearchBox>
        <Table></Table>
        <TestComponent></TestComponent>
      </StyledAppDiv>
    );
  }
}

export default App;
