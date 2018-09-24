// Vendor
import React from 'react';

const Home = () => (
  <div>
    <h2>A different way to view contributions to open source</h2>

    <p>All the examples I could find of lists showing
    the top contributors to Github seemed to be focused
    on total number of commits.</p>
    <p>They didn't seem to take into account that
    the spread of commits over different projects could
    also be considered to be high-impact.</p>
    <p>This is my attempt to show a different way of looking
    at productivity in terms of contributions to open source,
    one where only commits in the form of merged PR's are
    allowed to be considered.</p>
    <p>Further, only repos that are not owned by the commit
    author are considered valid for counting, and each unique
    repo is only counted once.</p>
    <p>So any contribution to somebody else's repo is
    counted equally with a large number of contributions to
    a particular repo. What this means is that 3 commits
    in 3 repos counts for 3, but 3 commits in 1 repo counts
    for 1.</p>
    <p>A shortcoming of this approach is that it vastly
    favors quantity over quality, but one big point I
    hope to make here is that quantity can also be considered
    a type of quality.</p>
  </div>
)

export default Home;
