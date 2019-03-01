import React from 'react';
import Typography from '@material-ui/core/Typography';

const UpdatedAlgoCode = () => {
  return (
    <Typography>
      <h2>Merged PRs</h2>
      <p>
        I decided to try out a different metric for counting contributions.
        Instead of counting everything, I wanted to limit the number to
        PRs that other people decided to merge in. What resulted was the
        list below.
      </p>
      
      <h3>Filtering merged PRs for unique repos</h3>
      <p>
        the following pseudocode is adapted from the
        <br/><a href='https://github.com/lpmi-13/githubuserstats'>Github repo</a>
      </p>
      <pre>
        <code>
             {`  issues = search_issues(login)
        for issue in issues:
            PR_data = issue.get_pull(PR_number)
            if PR_data.merged:
                PR_list.append()`}
        </code>
      </pre>
      <p>Then, if the USER in the url</p>
      <pre>
        <code>
          {`  github.com/USER/REPO_NAME/pull/#`}
        </code>
      </pre>
      <p>
        is not the same as the author of the PR, we add the repo
        name to the final count list. The score is the set of all
        unique repo names in the list for a given username.
      </p>
      <div>
        <h3>The updated list</h3>
        <p>
          (Note: these numbers are not restricted to
          a particular time and reflect the sum of all
          merged PRs from a particular user)
        </p>
      </div>
      </Typography>
  );
};

export default UpdatedAlgoCode;
