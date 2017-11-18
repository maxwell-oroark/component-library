import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const GridItem = styled.div`
  width: ${({gridItemWidth}) => gridItemWidth };
  height:${({gridItemHeight}) => gridItemHeight };
  color: ${({gridItemColor}) => gridItemColor };
  background-color: ${({ backgroundColor }) => backgroundColor };
`

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: ${({ columns }) => "1fr ".repeat(columns) };
  grid-template-rows: ${({ rows }) => "1fr ".repeat(rows) };
  width: ${({ width }) => width };
  height: ${({ height }) => height };
  padding: ${({ padding }) => padding };
  margin: ${({ margin }) => margin };
  height: ${({ border }) => border };
`

const Grid = (props) => {
  return (
    <GridContainer { ...props }>
    {
      props.children.map( ( gridItem, i) => (
        <GridItem
          gridItemHeight={  props.gridItemHeight }
          gridItemWidth={   props.gridItemWidth }
          backgroundColor={ props.gridItemBackgroundColor }
          gridItemColor={   props.gridItemColor }
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
