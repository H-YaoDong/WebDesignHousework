window.onload = function(){
    var profile = document.getElementsByClassName("profile")[0];
    var btn_show = document.getElementById("btn_show");
    var btn_noshow = document.getElementById("btn_noshow");
    var alpha = 0;
    var speed = 1;
    var timer = null;
    btn_show.onclick = function(){
        profile.style.display = "block";
        startrun(100);
    }
    btn_noshow.onclick = function(){
        startrun(0);
        // profile.style.display = "none";  //在此添加改代码后点击按钮后profile直接消失?
    }
    function startrun(target){
        clearInterval(timer);
        timer = setInterval(function(){
            if(target > alpha){
                speed = 2;
            }else{
                speed = -2;
            }
            if(alpha == target){
                clearInterval(timer);
            }else{
                alpha = alpha + speed;
                profile.style.filter = 'alpha(opacity='+alpha+')';
                profile.style.opacity = alpha/100;
            }
        },30);
    }
}