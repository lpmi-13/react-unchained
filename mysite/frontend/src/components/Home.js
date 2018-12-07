// Vendor
import React from 'react';
import Typography from '@material-ui/core/Typography';

const Home = () => (
  <Typography>
    <h3>A different way to view contributions to open source</h3>

    <p>All the examples I could find of lists showing
    the top contributors to Github seemed to be focused
    on total number of commits.</p>
    <p>This is my attempt to show a different way of looking
    at productivity in terms of contributions to open source,
    one where only commits in the form of merged PR&apos;s are
    allowed to be considered.</p>
    <p>A shortcoming of this approach is that it vastly
    favors quantity over quality, but one big point I
    hope to make here is that breadth + quantity can also be considered
    a type of quality.</p>
  </Typography>
)

export default Home;
