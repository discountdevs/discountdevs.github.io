particlesJS.load('particles-js', 'assets/thirdparty/particlesjs-config.json', function() {
    console.log('callback - particles.js config loaded');
});

function seeProjects(){
    var homecontainer = document.getElementById("homecontainers");
    var projectscontainer = document.getElementById("projectscontainer");
    var bookmarkletcontainer = document.getElementById("bookmarkletcontainer");

    homecontainer.style.display = "none";
    projectscontainer.style.display = "block";
    bookmarkletcontainer.style.display = "none";
}

function seeHome(){
    var homecontainer = document.getElementById("homecontainers");
    var projectscontainer = document.getElementById("projectscontainer");
    var bookmarkletcontainer = document.getElementById("bookmarkletcontainer");

    homecontainer.style.display = "block";
    projectscontainer.style.display = "none";
    bookmarkletcontainer.style.display = "none";
}

function viewBookmarklets(){
    var homecontainer = document.getElementById("homecontainers");
    var projectscontainer = document.getElementById("projectscontainer");
    var bookmarkletcontainer = document.getElementById("bookmarkletcontainer");

    homecontainer.style.display = "none";
    projectscontainer.style.display = "none";
    bookmarkletcontainer.style.display = "block";
}
