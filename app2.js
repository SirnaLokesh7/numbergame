function f()
    {
    let n=document.getElementById("fname").value;
    console.log(n);
    localStorage.setItem("name",n);
    window.location="numbergame.html";
    }
    // function playgame()
    // {
    //     window.location="numbergame.html";
    // }
    
    // alert(localStorage.getItem("name"));
     document.getElementById("gbtn").addEventListener("click",f);