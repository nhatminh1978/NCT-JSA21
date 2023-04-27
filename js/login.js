function check(){
    var storedName = localStorage.getItem(`email${localStorage.clickcount}`);
    var storedPw = localStorage.getItem(`password${localStorage.clickcount}`);
    var userName = document.getElementById('email');
    var userPw = document.getElementById('password');
    if(userName.value == storedName && userPw.value == storedPw){
        alert('You are logged in.');
        window.location.href = '../html/index.html'
        
    }else{
        alert('Error on login');
    }
}