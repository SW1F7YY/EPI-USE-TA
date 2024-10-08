<div>My EPI-USE Graduate Program Technical Assignment</div>
<div>Website URL: https://epi-use-ta.web.app/</div>

------------------------------------------------
User manual:
<ol>
        <li>Home Page
            <ol>
                <li>Add an employee</li>
                <li>Delete an employee</li>
                <li>Search an employee</li>
                <li>Update an employee</li>
                <li>The graph</li>
            </ol>
        </li>
        <li>View Employee Page
            <ol>
                <li>Filter by</li>
                <li>Sort by</li>
                <li>Reset</li>
            </ol>
        </li>
        <li>Sign out</li>
    </ol>
    
---

1) Home Page

i) Add an employee:
To add an employee click on the green add employee button, this will open up a modal for you to enter the relevant employee data. Once the data is enetered close the modal and the employee will be displayed on the graph.

ii) Delete an employee: To delete an employee, enter the employee name and surname (separated by a space) in the text box next to the red delete button. When delete is clicked, the graph will update and the employee will be removed from the tree and the employee table.

iii) Update an employee: To update an employee, click on the orange button to open a modal to update the employee data. Enter the name and surname of the employee who's data you want to update. Enter all the relevant data that you want to update in the fields, leave any fields that you do not want update blank. Close the modal, and the resulting changes will be available in the table of employees.

iv) The graph: The graph draws a node between 2 employees which have a relationship with one another. For Example: If employee A is the reporting line manager of employee B, there will be a edge connecting the 2 employees

2) View Employee Page

i) Filter by: To filter the employees by a certain criteria, select the column that you want to filter by, select how you want to filter it, and then the value that you want the data to be filtered by.

ii)Sort by: To sort the employees in a specific order, select the column that you want to sort them by, and then in which order you want to sort them.

iii) Reset: To retrieve the original table, click the button to fetch the original employee data and display it in the original form.

3) Sign Out: To sign out, simply click on the profile button in the navigation bar, to sign out simply click the sign out button, this will return you to the login page. 
   
---

Technical Document

Technologies used:
<ul>
        <li>Supabase</li>
        <ul><li>For the database, I used Supabase, which is a cloud-based relational database management system (RDBMS). Supabase provided a scalable solution for storing employee data and efficiently handling user authentication, ensuring that the correct information was displayed for each logged-in user. Each employee has only a certain number of attributes that need to be addressed hence a RDBMS works perfectly in this scenario. </li></ul>
        <li>vueJS</li>
        <ul><li>To create each of the pages and components I used vueJS. This allowed me to easily create reusable components, specify specific operations for each of those components. With the help of the router, routing between different pages becomes more efficient and easier to handle in an application, aiding in the user experience. </li></ul>
        <li>Firebase</li>
        <ul><li>To deploy my application I used the free deployment platform Firebase.</li></ul>
        
</ul>

Since the database is hosted on a remote server, I used client-server architecture in my application. The client (my code) sends a request the the database server (Supabase) which in turn returns the data that I have requested.
Since it was a small application, I did not use any design patterns although many could have been incorporated such as the Singleton for the Supabase instances and to make requests to that database.
