window.addEventListener('mousemove', function(e){
    var xCoord=e.x;
    var yCoord=e.y;
    if(screen.width>600){
        if(yCoord < 112 && yCoord > 62)
        {
            var realNav = document.getElementById("real-nav");
            realNav.style.transform= "translateY(0px)";
            var frame = document.getElementById("face");
            frame.style.opacity = "0%";
            var blur = document.getElementById("wallpaper");
            blur.style.filter= "blur(3px)";
        }
        else{
            var realNav = document.getElementById("real-nav");
            realNav.style.transform= "translateY(-172.8px)";
            var frame = document.getElementById("face");
            frame.style.opacity ="100%";
            var blur = document.getElementById("wallpaper");
            blur.style.filter= "blur(0px)";
        }
    }
    else{
        if(yCoord < 112 && yCoord > 5)
        {
            var realNav = document.getElementById("real-nav");
            realNav.style.transform= "translateY(0px)";
            realNav.style.boxShadow= "0px 10px 50px black";
            var blur = document.getElementById("wallpaper");
            blur.style.filter= "blur(2px)";
        }
        else if(yCoord > 250){
            var realNav = document.getElementById("real-nav");
            realNav.style.transform= "translateY(-250px)";
            realNav.style.boxShadow= "0px 0px 0px black";
            var frame = document.getElementById("face");
            frame.style.opacity ="100%";
            var blur = document.getElementById("wallpaper");
            blur.style.filter= "blur(0px)";
        }
    }
})

