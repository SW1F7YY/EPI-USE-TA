<template>
    <div class="management">
        <div style="width: 100%;">
            <editEmployeeModal v-show="showEditModal" @close="closeEditModal" />
            <addEmployeeModal v-show="showModal" @close="closeModal" />
        </div>
        <div class="search-and-add">
            <form class="search">
                <div class="search-box">
                    <input type="text" class="input-field" id="employee" placeholder="Enter Name">
                    <input type="button" value="Search" @click="submit()">
                </div>
            </form>
            <button @click="addEmployee()" class="add-employee-button">Add Employee</button>
            <form class="search-and-add">
                <div class="search-box">
                    <input type="text" class="input-field" id="deleteEmployee" placeholder="Enter Name and Surname">
                    <input type="button" value="Delete" @click="deleteEmployee()" style="background: red;">
                </div>
            </form>
            <button @click="editEmployee()" class="add-employee-button" style="background: orange;">Edit Employee</button>
        </div>
    </div>
    <div class="main-body" >
        <!-- display the tree of employees here -->
        <div id='cy' style="width: 90%; height: 90%;" ></div>
    </div>
</template>


<script>
import cytoscape from 'cytoscape';
import editEmployeeModal from '../components/editEmployeeModal.vue';
import addEmployeeModal from '../components/addEmployeeModal.vue';
import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://vhhyfjcnkfmcjyqeymec.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZoaHlmamNua2ZtY2p5cWV5bWVjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjQ1Mjc2NDIsImV4cCI6MjA0MDEwMzY0Mn0.Qjc5L6Nyfnj-xtTR48Dy9EXmxzb-abHTQhmYncIZ9J4';
const supabase = createClient(supabaseUrl,supabaseKey);


 
export default{
    components: {
        addEmployeeModal, editEmployeeModal,
    },
    methods: {
        home(){
            this.$router.push('/home');
        },
        manage(){
            this.$router.push('/manage');
        },
        search(){
            this.$router.push('/search');
        },
        profile(){
            this.$router.push('/profile');
        },
        async getEmployees(){
            // get all employees from supabase
            const { data, error } = await supabase
                .from('employee')
                .select('*');
            if(error){
                console.log('Error: ' + error.message);
                return;
            }
            this.employees = data;
            console.log(data);
        },
        async addEmployee(){
            // open a form to add employee
            this.showModal = true;

        },
        closeModal(){
            this.showModal = false;
            location.reload();
        },
        async deleteEmployee(){
            // delete employee from supabase
            var name = document.getElementById('deleteEmployee').value;
            if(name === '' || name === null){
                alert('Cannot leave name empty');
                return;
            }
            // split the name into name and surname
            const nameParts = name.split(' ');
            name = nameParts[0];
            let surname = nameParts.slice(1).join(' ');
            // delete the employee from the supabase table
            let { data, error } = await supabase
                .from('employee')
                .delete()
                .eq('name', name)
                .eq('surname', surname);
            if(error){
                console.log('Error: ' + error.message);
                return;
            }
            location.reload();

            alert('Employee deleted');
        },
        createGraph(){
            this.cy = cytoscape({
                container: document.getElementById('cy'),
                elements: [
                    ...this.employees.map(employee => ({
                        data: {
                        id: employee.employee_number,
                        label: employee.name + " " + employee.surname,
                        },
                    })),
                    ...this.employees.map(employee => {
                        if (employee.reporting_line_manager) { // Check for valid manager
                            return {
                                data: {
                                id: `${employee.employee_number}-${employee.reporting_line_manager}`,
                                source: employee.employee_number,
                                target: employee.reporting_line_manager
                                }
                            };
                        }
                        return null; // Don't create edge if manager is null
                    }).filter(edge => edge),
                ],
                style: [
                    {
                        selector: 'node',
                        style: {
                        'background-color': '#cccccc', // Assuming gray background
                        'label': 'data(label)',
                        'color': '#000000', // Black label color
                        'width': 80, // Adjust node width as needed
                        'height': 40 // Adjust node height as needed
                        }
                    },
                    {
                        selector: 'edge',
                        style: {
                        'width': 2,
                        'line-color': '#000000' // Example: black color for edges
                        }
                    }
                ],
            });
        },
        toggleGraphVisibility(){
            if(this.showModal || this.showEditModal){
                this.cy = null;
                document.getElementsByClassName('main-body')[0].style.display = 'none';
            }else{
                document.getElementsByClassName('main-body')[0].style.display = 'block';
                this.getEmployees();
                this.createGraph();
            }
        },
        editEmployee(){
            this.showEditModal = true;
        },
        closeEditModal(){
            this.showEditModal = false;
            location.reload();
        },
        async submit(){
            //  search the graph for the name and surname and then zoom into it
            let search = document.getElementById('employee').value;
            if(search === '' || search === null){
                alert("Cannot leave search empty");
                return;
            }
            let cy = window.cy;
            const matchingNode = this.cy.nodes().filter(node =>node.data('label').includes(search));
            if(matchingNode.length > 0){
                this.cy.animate({
                    fit:{eles: matchingNode}
                });
            }else{
                console.log("No match");
            }
        },
    },
    async created(){
        const { data, error } = await supabase
                .from('employee')
                .select('*');
            if(error){
                console.log('Error: ' + error.message);
                return;
            }
            this.employees = data;
            this.createGraph();
    },
    data(){
        return {
            employees: [],
            showModal: false,
            cy: null,
            showEditModal: false,
        }
    },
    watch:{
        showModal(newShowModal, oldShowModal){
            if(newShowModal !== oldShowModal){
                this.toggleGraphVisibility();
            }
        },
        showEditModal(newEditModal, oldEditModal){
            if(newEditModal !== oldEditModal){
                this.toggleGraphVisibility();
            }
        }
    }
}
</script>

<style scoped>
    .main-body {
        background: grey;
        min-height: 100vh;
        padding-top: 60px; 
    }
    .navbar {
        background-color: rgb(227, 224, 224);
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 2px solid grey;
        border-radius: 5px;
    }
    .settings-profile {
        display: flex;
    }
    .options {
        display: flex;
        gap: 10px;
    }

    .navbar button {
        /* background-color: #454645; */
        color: black;
        cursor: pointer;
        border: none;
        padding: 10px 15px;
        transition: background-color 0.3s;
    }

    .navbar button:hover {
        background-color: #666;
    }
    .logo {
        cursor: pointer;
        padding: 5px 10px;
        
    }
    .logo h3 {
        margin: 0;
        color: black;
        text-decoration: underline;
    }
    .subtext{
        align-content: center;
        color: white;
        font-size: small;
        height: 100%;
        
    }
    .search {
        background-color: grey;
        display: flex;
        justify-content: center;
        padding: 20px;
    }
    .search-box {
        display: flex;
        border-radius: 5px;
        overflow: hidden;
    }
    .input-field {
        padding: 10px;
        font-size: 16px;
        border: none;
        outline: none;
    }
    input[type="button"] {
        background: linear-gradient(to bottom, #454645, #13104c);
        color: white;
        cursor: pointer;
        border: none;
        padding: 10px 20px;
        font-size: 16px;
    }
    input[type="button"]:hover {
        background: linear-gradient(to bottom, #13104c ,#454645);
    }
    .add-employee-button {
        color: white;
        background: #4AAE9B;
        border: 1px solid #4AAE9B;
        border-radius: 2px;
        padding: 10px 20px;
        margin-right: 20px;
        cursor: pointer;
    }
    .management {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-top: 20px;
        width: 100%;
        background-color: grey;
    }
    .search-and-add {
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        gap: 20px; /* Adds space between search and button */
    }
    #cy{
        border: 2px solid black;
        border-radius: 5px;
    }
</style>