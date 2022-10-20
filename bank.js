function register() {
    acno = regaccno.value;
    uname = reguname.value;
    pass = regpass.value;
    balance = 2000;

    acnoDetails = {
        acno,
        uname,
        pass,
        balance
    }

    if (acno in localStorage) {
        alert('Account already Registered');
    }
    else {
        localStorage.setItem(acno, JSON.stringify(acnoDetails));
        alert('Registered Succesfully');
        window.location.href = "index.html"
    }
}


function login() {
    acno = logacno.value;
    pass = logpass.value;


    if (acno in localStorage) {
        acnoDetails = JSON.parse(localStorage.getItem(acno));

        if (pass == acnoDetails.pass) {
            alert('Login Successfull')
            window.location.href='home.html';
        } 
        else {
            alert('Incorrect Password')

        }
    }else{
        alert('Invalid Account Number')
    }
}
