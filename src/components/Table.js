import React, { Component } from 'react';
import styled from "styled-components";

// 
const StyledTopRow = styled.tr`
    font-weight: bold;
`;

const TableDiv = styled.div`
    overflow-x: auto;
`;

class Table extends Component {
    render() {
        return (
            <TableDiv>
                <table> 
                    <StyledTopRow>
                        <th> Concept</th>
                        <th> Python </th>
                        <th> JAVA </th>
                        <th> JavaScript </th>
                    </StyledTopRow>
                    <tr> 
                        <th> Print Statement </th>
                        <th> print("Insert Text Here") <br></br> print("Insert Text Here\n") </th>
                        <th> System.out.print(“Insert Text Here.”); <br></br> System.out.println(“Insert Text Here”);<br></br> System.out.print(“Insert Text Here\n”); </th>
                        <th> console.log("Insert Text Here"); </th>
                    </tr>
                    <tr> 
                        <th> One-line Comment</th>
                        <th> # This is a one-line comment in Python </th>
                        <th> // This is a one-line comment in Java </th>
                        <th> // This is a one-line comment in JavaScript </th>
                    </tr>
                </table>
            </TableDiv>
        )
    }
}

export default Table;