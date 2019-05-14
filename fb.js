function logIn(){
    FB.login(function(response) {
        console.log(response);
    })

}