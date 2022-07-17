let ipbox=document.getElementById("ip");
let btn=document.getElementById("submit");
let curnum=Math.floor((Math.random()*100));
let history=[];
document.getElementById("greenbtn").addEventListener("click",hintsYes);
document.getElementById("redbtn").addEventListener("click",hintsNo);
btn.addEventListener("click",take);
let count=0;
let index=0;
function clear()
{
    count=0;
    index=0;
    history=[];
}
function addinghints()
{

}
function hintsYes()
{
    let hintsdiv=document.getElementById("realhint");
    let displayhint=document.getElementById("displayhint");
    hintsdiv.classList.remove("cleardisplay");
}
function hintsNo()
{
    let hintsdiv=document.getElementById("realhint");
    let displayhint=document.getElementById("displayhint");
    hintsdiv.classList.add("cleardisplay");
}
function cleartbox()
{
    ipbox.value="";
}
function take()
{
    count=count+1;
    if(count==5)
    {
        window.location="losing.html";
        clear();
    }
    let  chancescount=document.getElementById("sqip1");
    let  previousval=document.getElementById("sqip2");
    chancescount.value=[count];
    console.log(curnum);
    let val=ipbox.value;
    console.log(val);
    valint=parseInt(val);
    history.push(valint);
    previousval.value=[history[history.length-1]];
    console.log(history);
    if (curnum==val)
    {
        window.location="winningpage.html";
    }
    else if(curnum<valint)
    {
        // alert("your number is high");
        document.getElementById("displayhint").innerHTML="Your number is high";
    }
    else
    {
        // alert("yoyr number is low");
        document.getElementById("displayhint").innerHTML="Your number is low";
    }
    cleartbox();
}

// document.getElementById("winnername").innerText=localStorage.getItem("name")+" Won the game";
//     function getpoints()
//     {
//         let ans=document.getElementById("lname");
//         console.log(ans);
//         let chances=document.getElementById("chances");
//         let value=chances.options[chances.selectedIndex];
//         alert(value);
//     }
//     document.getElementById("score").addEventListener("click",getpoints);


//     function f()
//     {
//     let n=document.getElementById("fname").value;
//     console.log(n);
//     localStorage.setItem("name",n);
//     window.location="numbergame.html";
//     }
//     // function playgame()
//     // {
//     //     window.location="numbergame.html";
//     // }
    
//     // alert(localStorage.getItem("name"));
//      document.getElementById("gbtn").addEventListener("click",f);