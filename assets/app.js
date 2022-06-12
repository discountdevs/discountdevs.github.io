particlesJS.load('particles-js', 'assets/thirdparty/particlesjs-config.json', function() {
    console.log('callback - particles.js config loaded');
});

function seeProjects(){
    var homecontainer = document.getElementById("homecontainers");
    var projectscontainer = document.getElementById("projectscontainer");

    homecontainer.style.display = "none";
    projectscontainer.style.display = "block";
}

function seeHome(){
    var homecontainer = document.getElementById("homecontainers");
    var projectscontainer = document.getElementById("projectscontainer");

    homecontainer.style.display = "block";
    projectscontainer.style.display = "none";
}