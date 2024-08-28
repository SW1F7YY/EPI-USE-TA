<template>
    <div class="modal-backdrop">
      <div class="modal">
        <header class="modal-header">
          <slot name="header">
            <div class="title"> Edit Empolyee </div>
            <div class="subtitle"> *only employee data can be changed, not name or surname</div>
          </slot>
          <button
            type="button"
            class="btn-close"
            @click="close()"
          >
            x
          </button>
        </header>
  
        <section class="modal-body">
          <slot name="body">
            <form class="addEmployeeForm">
                <!-- need name,surname, birth_date, salary, role, reporting_line_manager  -->
                <label for="name">Name:</label>
                <input type="text" id="name" name="name" placeholder="Enter Name" required>
                <label for="surname">Surname:</label>
                <input type = "text" id="surname" name="surname" placeholder="Enter Surame" required>
                <label for="birth_date">Birth Date:</label>
                <input type="date" id="birth_date" name="birth_date" required>
                <label for="salary">Salary:</label>
                <input type="number" id="salary" name="salary" placeholder="Enter Salary" required>
                <label for="role">Role:</label>
                <input type="text" id="role" name="role" placeholder="Enter Role" required>
                <label for="reporting_line_manager">Reporting Line Manager:</label>
                <input type="text" id="reporting_line_manager" name="reporting_line_manager" placeholder="Reporting Line Manager Name and Surname" required>
                <input type="button" value="Update Employee" @click="updateArray()">
            </form>
          </slot>
         </section>
  
        <footer class="modal-footer">
          <button
            type="button"
            class="btn-green"
            @click="close()"
          >
            Close Modal
          </button>
        </footer>
      </div>
    </div>
  </template>

<script>
import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://vhhyfjcnkfmcjyqeymec.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZoaHlmamNua2ZtY2p5cWV5bWVjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjQ1Mjc2NDIsImV4cCI6MjA0MDEwMzY0Mn0.Qjc5L6Nyfnj-xtTR48Dy9EXmxzb-abHTQhmYncIZ9J4';
const supabase = createClient(supabaseUrl,supabaseKey);

export default {
    name: 'addEmployeeModal',
    data() {
        return {
            isVisible: true,
        };
    },
    methods: {
        close() {
            // this.isVisible = false;
            this.$emit('close');
        },
        async updateArray(){
            // get all the values from the form and add them to supabase in the employee table
            let name = document.getElementById('name').value.trim();
            let surname = document.getElementById('surname').value.trim();
            let birth_date = document.getElementById('birth_date').value.trim();
            let salary = document.getElementById('salary').value.trim();
            let role = document.getElementById('role').value.trim();
            let reporting_line_manager = document.getElementById('reporting_line_manager').value.trim();

            // Create an object to store non-empty values
            let updateData = {};

            // Check each field and add to updateData if not empty
            if (name === '' || surname === ''){
                alert('Please enter the name and surname');
                return;
            } 
            if (birth_date !== '') updateData.birth_date = birth_date;
            if (salary !== '') updateData.salary = salary;
            if (role !== '') updateData.role = role;

            // Handle reporting_line_manager
            if (reporting_line_manager !== '') {
                if (reporting_line_manager === '-1') {
                    updateData.reporting_line_manager = null;
                } else {
                    let split = reporting_line_manager.split(' ');
                    if (split.length !== 2) {
                        alert('Please enter the Reporting Line Manager name and surname');
                        return;
                    }
                    
                    let { data, error } = await supabase
                        .from('employee')
                        .select('*')
                        .eq('name', split[0])
                        .eq('surname', split[1]);
                    
                    if (error || data.length === 0) {
                        alert('Manager not found');
                        return;
                    }
                    
                    updateData.reporting_line_manager = data[0].employee_number;
                }
            }

            // Check if there are any fields to update
            if (Object.keys(updateData).length === 0) {
                alert('No fields to update');
                return;
            }

            // Update the employee in the supabase table
            let { data, error } = await supabase
                .from('employee')
                .update(updateData)
                .eq('name', name).eq('surname', surname); // Assuming you have the current employee's number

            if (error) {
                console.log('Error: ' + error.message);
                alert('Error updating employee');
                return;
            }
            alert('Employee updated successfully');
        }
    },
    
};
</script>

<style>
  .modal-backdrop {
    
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.3);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .modal {
    width:90%;
    height:90%;
    border-radius: 5px;
    background: #FFFFFF;
    overflow-x: auto;
    display: flex;
    flex-direction: column;
  }

  .modal-header,
  .modal-footer {
    height: 10%;
    padding: 15px;
    display: flex;
  }

  .modal-header {
    position: relative;
    border-bottom: 1px solid #eeeeee;
    color: #4AAE9B;
    /* justify-content: center; */
    align-items: center;
    align-content: center;
  }

  .modal-footer {
    
    border-top: 1px solid #eeeeee;
    flex-direction: column;
    justify-content: flex-end;
    color: black;
  }

  .modal-body {
    position: relative;
    /* padding: 20px 10px; */
    color: black;
    height: 80%;
  }

  .btn-close {
    position: absolute;
    top: 0;
    right: 0;
    border: none;
    font-size: 20px;
    padding: 10px;
    cursor: pointer;
    font-weight: bold;
    color: #4AAE9B;
    background: transparent;
  }

  .btn-green {
    color: white;
    background: #4AAE9B;
    border: 1px solid #4AAE9B;
    border-radius: 2px;
  }

  .fields-table {
    width: 100%;
    border: 1px solid grey;
    color: black;
    border-radius: 5px;
  }

  .fields-table td {
    color: black;
    border: 1px solid grey;
  }
  .chevronDown{
    width: 20px;
    height: 20px;
  }
  .addEmployeeForm {
    max-width: 400px;
    margin: 20px auto;
    padding-left: 20px;
    padding-right: 20px;
    background-color: #f9f9f9;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.addEmployeeForm label {
    display: block;
    margin-top: 10px;
    
    font-weight: bold;
    color: #333;
}

.addEmployeeForm input {
    width: 100%;
    padding: 8px;
    
    border: 1px solid #ddd;
    border-radius: 4px;
    box-sizing: border-box;
    font-size: 14px;
}

.addEmployeeForm input[type="date"] {
    appearance: none;
    -webkit-appearance: none;
    color: #444;
    font-family: "Helvetica", arial, sans-serif;
    font-size: 14px;
    border:1px solid #ecf0f1;
    background:#ecf0f1;
    padding: 5px;
    display: inline-block !important;
    visibility: visible !important;
}

.addEmployeeForm input[type="button"] {
    background-color: #4AAE9B;
    color: white;
    margin-top: 20px;
    margin-bottom: 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
    transition: background-color 0.3s ease;
}

.addEmployeeForm input[type="button"]:hover {
    background-color: #45a049;
}

.addEmployeeForm input:focus {
    outline: none;
    border-color: #4AAE9B;
    box-shadow: 0 0 5px rgba(74, 174, 155, 0.5);
}
.title {
  font-size: 1.5rem;
  font-weight: bold;
  margin-right: 1rem;
}

.subtitle {
  font-size: 0.875rem;
  color: #718096;
  font-style: italic;
}
</style>