<template>
    <div class="main-body">
        <form class="signup">
            <div class="signup-heading">
                <h1>Signup</h1>
            </div>
            <div class="form-group">
                <div class="email-box">
                    <div>
                        <input type="text" class="input-box" id="email" placeholder="Enter Your Email or Phone Number" style="color: black">
                    </div>
                    <div>
                        <input type="password" class="input-box" id="password" placeholder="Enter Your Password" style="color: black">
                    </div>
                    <div>
                        <input type="password" class="input-box" id="password-two" placeholder="Enter Your Password Again" style="color: black" @keyup="check()"/>
                    </div>
                    <div class="error-message" v-if="errorMessage">
                        {{ errorMessage }}
                    </div> 
                    <div class="input-box">
                        <input type="button" value="Signup" @click="submit()">
                    </div>
                </div>
            </div>
            <div class="signup-change">
                Or <a class="google-button" @click="login()" style="cursor: pointer;">Login</a>  
            </div>
        </form>
    </div>
</template>

<script>
// import { createClient } from '@supabase/supabase-js'
// const supabaseUrl = process.env.SUPABASE_URL;
// const supabaseKey = process.env.SUPABASE_KEY;
// const supabase = createClient(supabaseUrl,supabaseKey);

import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://vhhyfjcnkfmcjyqeymec.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZoaHlmamNua2ZtY2p5cWV5bWVjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjQ1Mjc2NDIsImV4cCI6MjA0MDEwMzY0Mn0.Qjc5L6Nyfnj-xtTR48Dy9EXmxzb-abHTQhmYncIZ9J4';
const supabase = createClient(supabaseUrl,supabaseKey);


export default {
    name: 'Signup',
    data(){
        return {
            email: '',
            password: '',
            passwordTwo: '',
            errorMessage: '',
        }
    },
    methods: {
        checkPassword(){
            if(this.password === this.passwordTwo){
                return true;
            }
            return false;
        },
        check(){
            // var password = document.getElementById('password');
            // var passwordTwo = document.getElementById('password-two');
            // let userError = document.querySelector('.error-message');
            // if(password.value !== passwordTwo.value){
            //     userError.innerHTML = 'Passwords do not match';
            //     userError.style.color = 'red';
            // }else{
            //     userError.innerHTML = 'Passwords match';
            //     userError.style.color = 'green';
            // }
        },
        async submit(){
            if(this.checkPassword()){
                // route to homepage
                let userEmail = document.getElementById('email').value;
                let userPassword = document.getElementById('password').value;
                // var error = document.querySelector('.error-message');
                if(userEmail === ''){
                    this.errorMessage = 'Email is required';
                    return;
                }

                // ! handle rest of the form data here
                let { data, error } = await supabase.auth.signUp({email: userEmail, password: userPassword});
                let {data: {user} } = await supabase.auth.getUser();
                if(error){
                    // this.errorMessage = error.message;
                    console.log(error.message);
                    return;
                }
                this.$router.push('/home');
            }else{
                alert('Passwords do not match');
            }
        },
        login(){
            this.$router.push('/login');
        }
    }
};


</script>



<style>
    
    .main-body {
        display: grid;
        height: 100vh;
        width: 100%;
        place-items: center;
        background: linear-gradient(to bottom, #051846, #c4375f);
        color: black;

    }
    .signup {
        background-color: #fff;
        max-width: 350px;
        width: 100%;
        padding: 25px 30px;
        border-radius: 5px;
        box-shadow: 0 10px 10px rgba (0,0,0,0.15);   
    }
    .signup-heading{
        text-align: center;
        /* make bold */
        font-weight: 600;
    }
    .main-body form .title{
        font-size: 30px;
        font-weight: 600;
        margin: 20px 0 10px 0;
    }
    .main-body form .title::before{
        content: '';
        position: absolute;
        height: 4px;
        width: 33px;
        bottom: 3px;
        left: 0;
        border-radius: 5px;
        background: linear-gradient(to right,#8ee092, #aceba9 );
    }
    .main-body form .input-box{
        width: 100%;
        height: 45px;
        margin-top: 25px;
        background-color: white;
    }
    .main-body form .input-box input{
        height: 100%;
        width: 100%;
        outline: none;
        font-size: 16px;
        border: none;
        color: black
    }
    .main-body form .input-box input[type="button"]{
        background: linear-gradient(to bottom, #454645, #13104c);
        color: white;
        cursor: pointer;
        border-radius: 5px;
    }
    .main-body form .input-box input[type="button"]:hover{
        background: linear-gradient(to bottom, #13104c ,#454645);
        color: white;
        border-radius: 5px;
    }
    .error-message{
        margin-top: 15px;
        
    }
    .google-button:hover{
        color: #414e63;
        /* underline the text */
        text-decoration: underline;
    }
    .signup-change{
        font-weight: 600;
        text-align: center;
    }
</style>