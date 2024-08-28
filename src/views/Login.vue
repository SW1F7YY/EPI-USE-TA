<template> 
    <div class="main-body">
        <form class="signup">
            <div class="signup-heading">
                <h1>Login</h1>
            </div>
            <div class="form-group">
                <div class="email-box">
                    <div>
                        <input type="text" class="input-box" id="email" placeholder="Enter Your Email or Phone Number" style="color: black">
                    </div>
                    <div>
                        <input type="password" class="input-box" id="password" placeholder="Enter Your Password" style="color: black">
                    </div>
                    <div class="error-message" v-if="errorMessage != ''">
                        <!-- display the ref error message -->
                        {{ errorMessage }}
                    </div> 
                    <div class="input-box">
                        <input type="button" value="Login" @click="submit()">
                    </div>
                </div>
            </div>
            <div class="signup-change">
                Or <a class="google-button" @click="signup()" style="cursor: pointer;">Signup</a>  
            </div>
        </form>
    </div>
</template>

<script>
import { ref } from 'vue';
import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://vhhyfjcnkfmcjyqeymec.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZoaHlmamNua2ZtY2p5cWV5bWVjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjQ1Mjc2NDIsImV4cCI6MjA0MDEwMzY0Mn0.Qjc5L6Nyfnj-xtTR48Dy9EXmxzb-abHTQhmYncIZ9J4';
const supabase = createClient(supabaseUrl,supabaseKey);


export default {
    name: 'Login',
    data(){
        return {
            email: '',
            password: '',
            errorMessage: '',
        }
    },
    methods: {
        async submit(){
            let everythingOk = false;
            // route to homepage
            var userEmail = document.getElementById('email').value;
            var userPassword = document.getElementById('password').value;
            if(userEmail === '' || userEmail === null || userPassword === '' || userPassword === null){
                console.log('Cannot leave email or password empty');
                // make the ref error message visible
                // errorMessage.value = 'Cannot leave email or password empty';
                this.errorMessage = 'Cannot leave email or password empty';
            }else{
                everythingOk = true;
            }

            // ! handle rest of the form data here
            if(everythingOk){
                let { data, error } = await supabase.auth.signInWithPassword({email: userEmail, password: userPassword});
                if(error){
                    console.log(userEmail);
                    alert('Error: ' + error.message);
                    return;
                }
                console.log('Everything is ok');
                // route to homepage
                this.$router.push('/home');
            }
        },
        signup(){
            this.$router.push('/');
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
        border: none;
    }
    .main-body form .input-box input[type="button"]:hover{
        background: linear-gradient(to bottom, #13104c ,#454645);
        color: white;
        border: none;
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
        text-align: center;
        margin-top: 15px;
    }
</style>