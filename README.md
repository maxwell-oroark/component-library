# Simple React CSS Grid

## Simple Usage

This grid component seeks to leverage the new CSS grid specification in a lightweight and manageable way.  By eschewing most of the features and functionality of CSS grid, we can get up and running quickly with predictable out-of-the-box functionality.

```
<Grid columns={3}
      rows={2}
      height={"500px"}
      width={"500px"}>
  {
    gridItems.map( item => (

    <Item
      gridItemHeight={item.height || "200px" }
      gridItemWidth={item.width || "200px" }
    />

    )
  }
</Grid>
```
