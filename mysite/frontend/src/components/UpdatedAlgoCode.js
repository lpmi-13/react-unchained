// Vendor
import React from 'react';

const UpdatedAlgoCode = () => {
  return (
    <div>
      <h2>Grabbing merged PRs</h2>
      <p>the following pseudocode is adapted from the <a href='https://github.com/lpmi-13/githubuserstats'>Github repo</a>
      </p>
      <pre><code>
      {` issues = search_issues(login)
 for issue in issues:
     PR_data = issue.get_pull(PR_number)
     if PR_data.merged:
         PR_list.append()`}
      </code></pre>
      <h2>Filtering merged PRs for unique repos</h2>
      <p>If the username in the url
      <pre><code>
      {`github.com/USER/REPO_NAME/pull/#`}
      </code></pre>
      isn't the same as the author of the PR, we add the repo name to the list. The score is the set of all unique repo names in the list for a given username.</p>
    </div>
  );
};

export default UpdatedAlgoCode;
