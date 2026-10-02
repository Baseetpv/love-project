// ==============================
// تنظیمات اولیه
// ==============================

// اسم دوست دخترت را بعداً اینجا وارد کن
const GIRL_NAME = "❤️snor❤️";


// گرفتن تاریخ ذخیره شده
let loveDate = localStorage.getItem("loveDate");


// ==============================
// شروع داستان
// ==============================

function startStory(){

    const input = document.getElementById("loveDate");

    if(!input.value){

        alert("اول تاریخ شروع رابطه رو وارد کن ❤️");

        return;

    }


    loveDate = input.value;

    localStorage.setItem(
        "loveDate",
        loveDate
    );


    nextPage(2);

}



// ==============================
// تغییر صفحات
// ==============================

function nextPage(number){


    const current =
    document.querySelector(".page.active");


    if(current){

        current.classList.remove("active");

    }


    const next =
    document.getElementById(
        "page"+number
    );


    if(next){

        next.classList.add("active");

    }


    if(number === 2){

        startTerminal();

    }


    if(number === 4){

        startCounter();

    }


    if(number === 5){

        startHearts();

    }

}



// ==============================
// صفحه هکری
// ==============================

const hackerText = [

"Initializing...",

"",

"Loading Memories...",

"",

"Searching...",

"",

"Finding The Most Beautiful Girl...",

"",

"1 Result Found ❤️",

"",

"Decrypting Feelings...",

"",

"Access Granted ✓"

];


let terminalStarted=false;


function startTerminal(){


    if(terminalStarted)
    return;


    terminalStarted=true;


    const terminal =
    document.getElementById(
        "terminal"
    );


    let index=0;


    function write(){


        if(index >= hackerText.length){


            document.getElementById(
                "girlName"
            ).innerHTML = GIRL_NAME;


            return;


        }


        terminal.innerHTML +=
        hackerText[index] + "<br>";


        index++;


        setTimeout(
            write,
            500
        );


    }


    write();


}

// ==============================
// شمارنده عشق
// ==============================


function startCounter(){


    if(!loveDate){

        return;

    }


    const counter =
    document.getElementById("counter");


    function updateCounter(){


        const start =
        new Date(loveDate);


        const now =
        new Date();


        const diff =
        now - start;


        if(diff < 0){

            counter.innerHTML =
            "هنوز زمان شروع نرسیده ❤️";

            return;

        }


        const seconds =
        Math.floor(
            diff / 1000
        );


        const days =
        Math.floor(
            seconds / 86400
        );


        const hours =
        Math.floor(
            (seconds % 86400) / 3600
        );


        const minutes =
        Math.floor(
            (seconds % 3600) / 60
        );


        const secs =
        seconds % 60;


        counter.innerHTML =

        `
        ❤️ ${days} روز

        <br>

        🕒 ${hours} ساعت

        <br>

        ⏰ ${minutes} دقیقه

        <br>

        ⏱ ${secs} ثانیه

        `;


    }


    updateCounter();


    setInterval(
        updateCounter,
        1000
    );


}

// ==============================
// ساخت آسمان پر ستاره
// ==============================


function createStars(){


    const stars =
    document.getElementById("stars");


    if(!stars)
    return;


    for(let i=0;i<300;i++){


        const star =
        document.createElement("div");


        star.className="star";


        star.style.left =
        Math.random()*100+"%";


        star.style.top =
        Math.random()*100+"%";


        const size =
        Math.random()*3+1;


        star.style.width =
        size+"px";


        star.style.height =
        size+"px";


        star.style.animationDelay =
        Math.random()*3+"s";


        stars.appendChild(star);


    }


}



// ==============================
// ساخت شهاب
// ==============================


function createShootingStar(){


    const container =
    document.getElementById(
        "shooting-stars"
    );


    if(!container)
    return;



    const star =
    document.createElement("div");


    star.className =
    "shooting-star";



    star.style.left =
    Math.random()*100+"%";


    star.style.top =
    Math.random()*40+"%";



    container.appendChild(star);



    setTimeout(()=>{


        star.remove();


    },2000);


}



// هر چند ثانیه یک شهاب

setInterval(
    createShootingStar,
    4000
);



// اجرای ستاره‌ها

createStars();

// ==============================
// بارش قلب در صفحه آخر
// ==============================


function startHearts(){


    const container =
    document.getElementById("hearts");


    if(!container)
    return;



    setInterval(()=>{


        const heart =
        document.createElement("div");


        heart.className =
        "floating-heart";


        const hearts = [
            "❤️",
            "💖",
            "💕",
            "💗",
            "✨"
        ];


        heart.innerHTML =
        hearts[
            Math.floor(
                Math.random()*hearts.length
            )
        ];



        heart.style.left =
        Math.random()*100+"%";



        heart.style.fontSize =
        (Math.random()*25+15)+"px";



        heart.style.animationDuration =
        (Math.random()*5+5)+"s";



        container.appendChild(
            heart
        );



        setTimeout(()=>{

            heart.remove();

        },10000);



    },300);

}

// ==============================
// نامه عاشقانه
// ==============================


function openLetter(){

const letter =
`
ممنونم که وارد زندگیم شدی... ❤️


شاید هنوز کلی خاطره منتظر ساخته شدن باشن،

ولی خوشحالم که شروع این داستان با تو بوده.


اگر دوباره به گذشته برگردم،

باز هم تو رو انتخاب می‌کنم...

هر بار، بدون هیچ شکی ❤️


دوستت دارم...
`;


const box =
document.getElementById("loveLetter");


box.style.display="block";


box.innerHTML="";


let index=0;


function typeLetter(){


if(index < letter.length){


box.innerHTML += letter[index]
.replace(/\n/g,"<br>");


index++;


setTimeout(
typeLetter,
50
);


}


}


typeLetter();


}
