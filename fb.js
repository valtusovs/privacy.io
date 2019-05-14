var person = { userID: "",name:"", accessToken:"",picture:""};

function logIn(){
    FB.login(function(response) {
        if (response.status == 'connected') {
        	person.userID = response.authResponse.userID;
        	person.accessToken = response.authResponse.accessToken;
        	FB.api('/me?fields = id,name,first_name,email,picture.type(large)',function(userData){
        		console.log(userData)
        	});
        }
    })

}
