Front End Project Interview

### 1) Create a mobile responsive page based on design from 01.psd. Feel free to use any front-end library/framework. The web page should be structured in such a way that it is easy to integrate to a backend framework. Make your final delivery available on your Github or Bitbucket repo.

### DIRECTIONS FOR RUNNING PAGE:
1) Clone the repo to your local computer.
2) Navigate to the front-proj/public in your terminal.
3) Once inside the public folder, run the command "npm install" to install all necessary packages.
4) Run the command "nodemon server.js" (or "node server.js" if you do not have nodemon installed) inside the same directory.
5) Open your browser of choice and navigate to http://localhost:3030.

### 2) What do you think of our current website and how would you improve it? Make your comments available on your Github or Bitbucket repo.

1) I would change the font color beneath the Totle Tales header more readable. I would also make the font color of the teick marks on the x-axis of the line chart more readable as well.

2) I would change the labeling on the progress bar near the top of the page. I am not totally clear what "Orders" and "Completed Orders" means in context to a progress bar. If it is supposed to chart how many orders are in progress vs how many orders needs to be completed in order to reach a goal, I would change the label on the left to "Orders In Progress" and the label on the right to "Orders Left".

3) The line chart should have a y-axis. As it is, it does not give very much information as to what it is charting. The x-axis is vague as well, and would benefit from a label telling the user what each tick mark represents.

4) The labels on the ring chart (HOODIE, FITTED CAP, BRACELET), in my opinion, are redundant as there is a legend right beneath it. And since the font color for each label matches a portion of the wheel, I can foresee the labels becoming unreadable if the wheel is full enough.

5) There is some space that isn't being used in the legend. The "Sales" header only says the amount of sales made. I would insert somewhere in the legend how much of each product was sold as well as the price. 
