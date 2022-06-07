var countDownDate = new Date("Jun 10, 2022 11:31:52").getTime();

   let myfunc = setInterval(function() {

   let now = new Date().getTime();
   let timeleft = countDownDate - now;

   let days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
   let hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
   let minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
   let seconds = Math.floor((timeleft % (1000 * 60)) / 1000);

    document.getElementById("days").innerHTML = days + ":"
    document.getElementById("hours").innerHTML = hours + ":"
    document.getElementById("mins").innerHTML = minutes + ":"
    document.getElementById("secs").innerHTML = seconds + ""

    if (timeleft < 0) {
        clearInterval(myfunc);
        document.getElementById("days").innerHTML = ""
        document.getElementById("hours").innerHTML = ""
        document.getElementById("mins").innerHTML = ""
        document.getElementById("secs").innerHTML = ""
        document.getElementById("secs").innerHTML = ""
        document.getElementById("end").innerHTML = "<a href='/redirect.html'><button>Поехали!!</button></a>"
    }
}, 1000);
