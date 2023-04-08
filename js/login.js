function check(){
    var storedName = localStorage.getItem('name');
    var storedPw = localStorage.getItem('pw');

    var userName = document.getElementById('email');
    var userPw = document.getElementById('password');
    if(userName.value == storedName && userPw.value == storedPw){
        alert('You are logged in.');
        document.location.replace('')
    }else{
        alert('Error on login');
    }
}