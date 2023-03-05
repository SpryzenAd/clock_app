setInterval(()=> {
    date = new Date();
    hr = date.getHours();
    mn = date.getMinutes();
    sc = date.getSeconds();
    day = date.getDay();
    dt = date.getDate();

    switch(day){
        case 0:
            d = "Sun";
            break;
        case 1:
            d = "M";
            break;
        case 2:
            d = "T";
            break;
        case 3:
            d = "W"
            break;
        case 4:
            d = "Th";
            break;
        case 5:
            d = "F";
            break;
        default:
            d = "Sat";
    }
    document.getElementById("day").innerHTML = d;
    document.getElementById("date").innerHTML = dt;

    hour.style.transform = `rotate(${30*hr + mn/2}deg)`;
    min.style.transform = `rotate(${6*mn}deg)`;
    sec.style.transform = `rotate(${6*sc}deg)`;
    changetheme(hr)
}, 1000);

function changetheme(hr){
    if(hr>=6 && hr<18){
        document.getElementById("clock").className = "light";
    } else{
        document.getElementById("clock").className = "dark";
    }
}
