import React, { Component } from "react";
import styled from "styled-components";

// styles 
const StyledSearchBox = styled.div`
`;

class SearchBox extends Component {
    render() {
        return (
            <StyledSearchBox>
                <form> 
                    <input type="text" name="search" placeholder="Enter a Programming Language ..."></input>
                    <button type="submit"><i class="fa fa-search"></i></button>
                </form>
            </StyledSearchBox>
        )
    }
}

export default SearchBox;