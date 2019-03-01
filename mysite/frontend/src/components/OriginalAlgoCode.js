import React from 'react';
import Typography from '@material-ui/core/Typography';

const OriginalAlgoCode = () => {
  return (
    <Typography>
      <h2>Total Commits</h2>
      <p>
        The most widely used metric for judging contributions to Github.
        This all came from an original list compile by Paul Millr. this
        list counts all contributions (summary of Pull Requests, opened
        issues and commits) to public repos at GitHub.com from
        Tue, 06 Dec 2016 17:06:46 GMT till Wed, 06 Dec 2017 17:06:46 GMT.
      </p>
      <h3>The original list</h3>
      <p>
        the following data comes from the
        {' '}<a href='https://gist.github.com/paulmillr/2657075'>Github gist</a>
      </p>
      </Typography>
  );
};

export default OriginalAlgoCode;
