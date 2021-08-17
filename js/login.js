document.getElementById('login-btn').addEventListener('click',function(){
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;
    
    // password field

    const passwordField = document.getElementById('user-password');
    const userPassword = passwordField.value;


    if(userEmail == 'jawad@gmail.com' && userPassword == 'samwad'){
        window.location.href='userdashboard.html';
    }
    else{
        console.log('Login Unsuccessfull');
    }
})