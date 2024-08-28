<template>

    <form class="search">
        <div class="search-box">
            <div class="filter-by">
                Filter By:
            </div>
            <div class="select-type">
                <select class="custom-select" id="filter-by">
                    <option value="employee_number">Employee Number</option>
                    <option value="name">Name</option>
                    <option value="surname">Surname</option>
                    <option value="birth_date">Birth Date</option>
                    <option value="salary">Salary</option>
                    <option value="role">Role</option>
                    <option value="reporting_line_manager">Manager Number</option>
                </select> 
            </div>
            <div class="select-type">
                <select class="custom-select" id="filter-type">
                    <option value="lt"><</option>
                    <option value="gt">></option>
                    <option value="eq">=</option>
                </select>
            </div>
            <input type="text" class="input-field" id="filter-value" placeholder="Enter Value">
            <input type="button" value="Filter" @click="filter()">
        </div>
    </form>
    <form class="search">
        <div class="search-box">
            <div class="filter-by">
                Sort By:
            </div>
            <div class="select-type">
                <select class="custom-select" id="sort-by">
                    <option value="employee_number">Employee Number</option>
                    <option value="name">Name</option>
                    <option value="surname">Surname</option>
                    <option value="birth_date">Birth Date</option>
                    <option value="salary">Salary</option>
                    <option value="role">Role</option>
                    <option value="reporting_line_manager">Manager Number</option>
                </select> 
            </div>
            <div class="select-type">
                <select class="custom-select" id="sort-type">
                    <option value="false">Descending</option>
                    <option value="true">Ascending</option>
                </select>
            </div>
            <input type="button" value="Sort" @click="sort()">
        </div>
    </form>
    <div style="background-color: grey; display: flex; justify-content: center; align-items: center;">
        <button class="remove-filters-button" @click="removeFilters()"> Return Original</button>
    </div>
    <div class="main-body">
        <table class="employee-table">
            <thead>
                <tr>
                    <th>Employee Number</th>
                    <th>Name</th>
                    <th>Surname</th>
                    <th>Birth Date</th>
                    <th>Salary</th>
                    <th>Role</th>
                    <th>Reporting Line Manager Employee Number</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="employee in employees" :key="employee.employee_number">
                    <td>{{ employee.employee_number }}</td>
                    <td>{{ employee.name }}</td>
                    <td>{{ employee.surname }}</td>
                    <td>{{ employee.birth_date }}</td>
                    <td>R{{ employee.salary }}</td>
                    <td>{{ employee.role }}</td>
                    <td>{{ employee.reporting_line_manager }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/vue/20/solid';

import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://vhhyfjcnkfmcjyqeymec.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZoaHlmamNua2ZtY2p5cWV5bWVjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjQ1Mjc2NDIsImV4cCI6MjA0MDEwMzY0Mn0.Qjc5L6Nyfnj-xtTR48Dy9EXmxzb-abHTQhmYncIZ9J4';
const supabase = createClient(supabaseUrl,supabaseKey);

export default{
    methods: {
        async filter(){
            console.log("filtering");
            let filterBy = document.getElementById('filter-by').value;
            let filterType = document.getElementById('filter-type').value;
            let filterValue = document.getElementById('filter-value').value;
            if(filterValue === ''){
                alert("Please enter a value");
                return;
            }
            let {data,error} = await supabase
            .from('employee')
            .select('*')
            .filter(filterBy,filterType,filterValue);

            if(error){
                console.log("Error " + error);
                return;
            }

            this.employees = data;
            console.log("finished filtering");
        },
        async sort(){
            console.log("sorting");
            let sortType = document.getElementById('sort-type').value;
            let sortBy = document.getElementById('sort-by').value;
            if(sortType == "true"){
                sortType = true;
            }else{
                sortType = false;
            }
            let{data,error} = await supabase
            .from('employee')
            .select('*')
            .order(sortBy, {ascending : sortType})
            if(error){
                console.log("Error: " + error);
                return;
            }
            this.employees = data;
            console.log("finished");
        },
        async removeFilters(){
            let {data,error} = await supabase
            .from('employee')
            .select('*');
            if(error){
                console.log("Error: " + error);
                return;
            }
            this.employees = data;
        }
    },
    data(){
        return{
            employees: [],
        }
        
    },
    async created(){
        //  get all the employees from supabase
        let {data, error} = await supabase
        .from('employee')
        .select('*');
        if(error){
            console.log("Error: " + error);
        }
        else{
            this.employees = data;
        }
    },
    setup(){
        return {ChevronDownIcon};
    }
}


</script>


<style scoped>
    
    .container {
        display: flex;
        justify-content: center;
        padding-top: 20px;
        width: 100%;
        background-color: grey;
    }
    .main-body {
        background: grey;
    }
    .search {
        background-color: grey;
        background: grey;
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
    .employee-table {
    width: 100%; /* Set the table to take full width */
    border-collapse: collapse; /* Remove default spacing between cells */
    }

    .employee-table th,
    .employee-table td {
    padding: 10px; /* Add some padding for better readability */
    border: 1px solid black; /* Add a thin border to each cell */
    text-align: left; /* Align text to the left */
    }

    .employee-table thead th {
    background-color: #13104c; /* Light gray background for headers */
    font-weight: bold; /* Make headers bolder */
    color: white
    }
    .employee-table td{
        background-color: white;
    }
    .custom-select {
        appearance: none;
        -webkit-appearance: none;
        -moz-appearance: none;
        padding: 10px;
        border: 1px solid #ccc;
        border-radius: 5px;
        background-color: #fff;
        cursor: pointer;
    }
    .filter-by {
        display: flex; /* Use flexbox for layout */
        justify-content: center; /* Center horizontally */
        align-items: center; /* Center vertically */
        height: 100%; 
        font-weight: bold;
        padding: 10px;
    }
    .remove-filters-button {
        background-color: red;
        color: black;
        padding: 10px 20px;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        margin: 0 auto; /* Center horizontally */
    }
</style>