# Simple React CSS Grid

## Simple Usage

This grid component seeks to leverage the new CSS grid specification in a lightweight and manageable way.  By eschewing most of the features and functionality of CSS grid, we can get up and running quickly and predictably.

```
<Grid columns={3}
      rows={2}
      height={"500px"}
      width={"500px"}>
      gridItemHeight={"200px"}
      gridItemWidth={"200px"}
  {
    gridItems.map( item => (

    <Item
      itemTitle={item.title}
      itemDescription={item.description}
    />

    )
  }
</Grid>
```
