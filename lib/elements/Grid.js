import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const GridItem = styled.div`
  width: ${({gridItemWidth}) => gridItemWidth };
  height:${({gridItemHeight}) => gridItemHeight };
  color: white;
  background-color: ${({ backgroundColor }) => backgroundColor };
`

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: ${({columns}) => "1fr ".repeat(columns) };
  grid-template-rows: ${({rows}) => "1fr ".repeat(rows) };
  width: ${({width}) => width };
  height: ${({height}) => height };
`

const Grid = (props) => {
  return (
    <GridContainer { ...props }>
    {
      props.children.map( ( gridItem, i) => (
        <GridItem
          { ...props }
          backgroundColor={ '#'+Math.floor(Math.random()*16777215).toString(16) }
          key={ `container-${i}` }
          >
          { gridItem }
        </GridItem>
      ))
    }
    </GridContainer>

  )
}

Grid.propTypes = {
  gridItems: PropTypes.array.isRequired,
  gridTemplateColumns: PropTypes.string.isRequired,
  gridTemplateRows: PropTypes.string.isRequired
};

export default Grid;
