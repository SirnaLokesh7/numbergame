document.getElementById("winnername").innerText="Congrats! "+localStorage.getItem("name")+" You Won";
    function getpoints()
    {
        let ans=document.getElementById("lname");
        console.log(ans);
        let chances=document.getElementById("chances");
        let value=chances.options[chances.selectedIndex];
        alert(value);
    }
    document.getElementById("score").addEventListener("click",getpoints);