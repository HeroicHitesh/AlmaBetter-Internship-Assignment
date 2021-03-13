# Internship assignment for [AlmaBetter](https://www.almabetter.com)

A 3 page portal that captures marks of students in one page and displays the leaderboard in another page

**Frontend:**

- Homepage having 2 choices:
  - Enter marks
  - View Leaderboard
- Enter marks page:
  - Following inputs should be taken from the frontend:
    - Roll No
    - Name
    - Marks in Maths (out of 100)
    - Marks in Physics (out of 100)
    - Marks in Chemistry (out of 100)
    - Total (Automatically calculated)
    - Percentage (Automatically calculated)
  - Extra points for basic validation on the input fields
- View Leaderboard Page
  - Grid to display the rankings of the students based on percentage by default
  - Should have sorting and searching functionality
- Extra credits would be given to candidates who create components (preferably in reactJS) for each functionality above.

**Backend:**

- Python (Flask/Django) CRUD APIs for POST marks and GET results for the leaderboard.
- MySQL Datastore for storing of marks.
- Extra points for following of MVC architecture for the backend
- Extra points for handling of concurrent requests (Suppose the POST API for submitting marks is called concurrently by 2 users, then the last one should finally reflect on the backend)

**Caveat:**

- Extra points for deploying your code on platforms like heroku and sharing the host url for evaluation. In case you are unable to do so then clearly mention the steps for running the code in a README file. Please mention the API signatures for the backend.
- Push your code into a Github repository and make sure its public so that code can be evaluated.
- Follow proper coding conventions like naming of classes and modules.

**Submission:**

- Host URL and Github URL to be mailed to info@almabetter.com
- For any doubts, email us at info@almabetter.com
- Deadline : 4th March 2021, 8 P.M.
