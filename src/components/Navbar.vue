<template>
    <!-- must be able to create, read, update and delete employee data -->
    <!-- employees have  name, surname, birth date, employee number, salary, role/position, and reporting line manager and profile picture  -->
    <!-- on graph hierarchy user must be able to find edit or delete employee data -->
    <div class="navbar">
        <div class="logo" @click="home()">
            <h3>EPI-USE</h3>
        </div>
        <div class="options">
            <div>
                <button @click="home()">Home</button>
            </div>
            <div>
                <button @click="search()">View Employees</button>
            </div>
        </div>
        <div class="settings-profile"> 
            <div class="settings-profile">
                <div v-if="!showDropdown" class="profile-button" @click="profile()">
                <img :src="gravatarUrl" alt="profile picture" class="profile-picture" />
                <button>Profile</button>
                <component :is="ChevronDownIcon" class="h-5 w-5" />
                </div>
                <div v-else class="profile-dropdown" @click.stop>
                <img :src="gravatarUrl" alt="profile picture" class="dropdown-avatar" />
                <p>{{ userEmail }}</p>
                <button @click="signOut()" class="sign-out-button" >Sign Out</button>
                <button @click="profile()" class="close-dropdown-button">Close</button>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/vue/20/solid';
import { createClient } from '@supabase/supabase-js';

import CryptoJS from 'crypto-js';
const supabaseUrl = 'https://vhhyfjcnkfmcjyqeymec.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZoaHlmamNua2ZtY2p5cWV5bWVjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjQ1Mjc2NDIsImV4cCI6MjA0MDEwMzY0Mn0.Qjc5L6Nyfnj-xtTR48Dy9EXmxzb-abHTQhmYncIZ9J4';
const supabase = createClient(supabaseUrl,supabaseKey);
 
export default{
    setup() {
    return { ChevronDownIcon };
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
            this.showDropdown = !this.showDropdown;
        },
        async signOut(){
            await supabase.auth.signOut();
            this.$router.push('/login');
        }
    },
    data(){
        return{
            hash: '',
            gravatarUrl: '',
            userEmail: '',
            showDropdown: false,
        }
    },
    async mounted(){
        // hash email with sha256
        
        const { data: { user } } = await supabase.auth.getUser()
        if (!user) {
            this.$router.push('/login');
        }
        const email = user.email;
        this.userEmail = email;
        const cleanedEmail = email.trim().toLowerCase();
        this.hash = CryptoJS.SHA256(cleanedEmail).toString();
        this.gravatarUrl = `https://www.gravatar.com/avatar/${this.hash}?d=identicon`;
    }
}
</script>

<style scoped>
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
    .profile-button {
        display: flex;
        align-items: center;
        transition: background-color 0.3s;
    }
    .profile-button:hover {
        background-color: #666;
    }

    .profile-button button {
        margin-right: 5px; /* Add some space between the text and icon */
    }
    .profile-button img {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        margin-right: 5px;
    }
    .profile-dropdown {
        border-radius: 5px;
        display: block;
        /* position: absolute; */
        background-color: grey;
        border: 1px solid #ccc;
        box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
        /* padding: 10px;
        z-index: 1; */
    }
    .dropdown-avatar {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        margin-left: 50%;
    }
    .sign-out-button {
        margin-top: 5px;
        width:100%;
        background-color: #f00;
        color: white;
        border: none;
        padding: 5px 10px;
        cursor: pointer;
        border-radius: 10px;
    }
    .sign-out-button:hover {
        background: rgb(153, 0, 0);
        color: white;
        border: none;
        cursor: pointer;
        border-radius: 10px;
        margin-top: 5px;
    }
    .close-dropdown-button {
        margin-top: 5px;
        width:100%;
        background-color: rgb(20, 172, 20);
        color: white;
        border: none;
        padding: 5px 10px;
        cursor: pointer;
        border-radius: 10px;
    }
</style>