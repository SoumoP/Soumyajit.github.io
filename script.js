window.addEventListener('mousemove', function(e){
    var xCoord=e.x;
    var yCoord=e.y;
    if(screen.width>600){
        if(yCoord < 112 && yCoord > 5)
        {
            var realNav = document.getElementById("real-nav");
            realNav.style.transform= "translateY(0px)";
            var frame = document.getElementById("face");
            frame.style.opacity = "0%";
            var heading = document.getElementById("heading0");
            heading.style.transform= "translateY(-60px)";
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
        var back = document.getElementById("wallpaper");
        back.style.backgroundImage= "url('bg5.jpg')";
        if(yCoord < 112 && yCoord > 5)
        {
            var realNav = document.getElementById("real-nav");
            realNav.style.transform= "translateY(0px)";
            var frame = document.getElementById("face");
            frame.style.opacity = "0%";
            var heading = document.getElementById("heading0");
            heading.style.transform= "translateY(-60px)";
            var blur = document.getElementById("wallpaper");
            blur.style.filter= "blur(3px)";
        }
        else{
            var realNav = document.getElementById("real-nav");
            realNav.style.transform= "translateY(-250px)";
            var frame = document.getElementById("face");
            frame.style.opacity ="100%";
            var blur = document.getElementById("wallpaper");
            blur.style.filter= "blur(0px)";
        }
    }
})

