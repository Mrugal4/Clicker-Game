let a=0;
// Vibrator vibe = (Vibrator) getSystemService(Context.VIBRATOR_SERVICE);
window.onload=()=>{
    let btn=document.getElementById("button");
    let reset=document.getElementById("reset");
    btn.onclick=()=>{
        a++;
        if (a%10===0) {
            const div1 = document.getElementById("score");
            const div2 = document.getElementById("button");
            div1.style.color = "#7CFC00";
            div2.style.color = "#7CFC00";
        }else{
            const div1 = document.getElementById("score");
            const div2 = document.getElementById("button");
            div1.style.color = "white";
            div2.style.color = "white";
        }
        document.getElementById("score").innerText=a;
        // incresePtr(a)
    }
    reset.onclick=()=>{

        a=0;
        const div = document.getElementById("score");
        div.style.color = "rgb(192, 54, 54)";
        // vibe.vibrate(100);
        document.getElementById("score").innerText=a;
        // incresePtr(a)
    }
}
