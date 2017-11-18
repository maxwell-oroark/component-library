import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const GridItem = styled.div`
  width: 100px;
  height:100px;
  color: white;
  background-color: ${({ color }) => color };
`

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 100px 100px 100px;
  grid template-rows: 100px 100px 100px;
  width: 500px;
  height: 500px;
`

const Grid = (props) => {
  return (
    <GridContainer>
    {
      props.gridItems.map( ( gridItem ) => (
        <GridItem color={'#'+Math.floor(Math.random()*16777215).toString(16)}>
        { gridItem }
        </GridItem>
      ))
    }
    </GridContainer>

  )
}

Grid.propTypes = {
  gridItems: PropTypes.array.isRequired
};

export default Grid
