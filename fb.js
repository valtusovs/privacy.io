// initialize and setup facebook js sdk
window.fbAsyncInit = function() {
    FB.init({
      appId      : '2328103577469050',
      xfbml      : true,
      version    : 'v2.5'
    }),
    FB.getLoginStatus(function(response) {
        if (response.status === 'connected') {
            document.getElementById('status').innerHTML = 'We are connected.';
            document.getElementById('login').style.visibility = 'hidden';
        } else if (response.status === 'not_authorized') {
            document.getElementById('status').innerHTML = 'We are not logged in.'
        } else {
            document.getElementById('status').innerHTML = 'You are not logged into Facebook.';
        }
    })
    
};
(function(d, s, id){
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) {return;}
    js = d.createElement(s); js.id = id;
    js.src = "//connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

// login with facebook with extra permissions
function login() {
    FB.login(function(response) {
        if (response.status === 'connected') {
            document.getElementById('status').innerHTML = 'We are connected.';
            document.getElementById('login').style.visibility = 'hidden';
        } else if (response.status === 'not_authorized') {
            document.getElementById('status').innerHTML = 'We are not logged in.'
        } else {
            document.getElementById('status').innerHTML = 'You are not logged into Facebook.';
        }
    }, {scope: 'email,user_likes,user_birthday,user_hometown,user_location,user_photos,user_friends,user_events'});
}

// getting basic user info
var artist = {all_name:[],name :''}
var user = {first_name:'',last_name : '',email : '',location : '',event : {}}
function getInfo() {
    FB.api('/me', 'GET', {fields: `first_name,birthday,last_name,name,id,picture.width(150).height(150),email,location,hometown,music,events,work,education,sports,movies,friends,photos`}, 
    function(response) {
        document.getElementById('status').innerHTML = "<img src='" + response.picture.data.url + "'>";
        
        for (var i = 0; i <response.music.data.length ; i++){
            artist.all_name.push(response.music.data[i].name)};
        console.log(response)
        console.log(user)
        
        
        define_link()
        
 })
		
        }
const define_link = function(){
            const link_music = document.createElement('a')
            artist.name = artist.all_name[Math.floor(Math.random() * artist.all_name.length)];
            link_music.href = `https://www.youtube.com/results?search_query=${artist.name}`;
            link_music.target = '_blank';
            link_music.text = 'Listen to music that you may like';
            link_music.id = 'link'
            const youtube = document.getElementById('youtube');
            youtube.appendChild(link_music);
        }

youtube.addEventListener('click',changeMusicLink)

function changeMusicLink(){
    const youtube = document.getElementById('youtube');
    const a = document.getElementById('link')
    youtube.removeChild(a)
    define_link()

}