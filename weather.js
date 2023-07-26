const d = new Date();
console.log(d.getHours())

const city = document.querySelector(".search input");
const apibtn = document.getElementById('btn');

const apikey = "6ZU7ROII/aIfQmy9nzzkCA==FgBUeMVxfcrqbrJF";
const apiurl = "https://api.api-ninjas.com/v1/weather?city=";

const option = {
    method: "GET",
    headers: {
        'X-Api-Key': apikey,
    },
}

async function getwhether(city) {
    const response = await fetch(apiurl + city, option);
    var data = await response.json();
    console.log(data);

    document.getElementById('div1').style.height = `550px`;
    // document.getElementById('div1').style.width = `27rem`;
    document.getElementById('cloud').style.opacity = 2;
    document.querySelector(".temp").innerHTML = data.temp + `°c`;
    document.querySelector(".noW").innerHTML = data.wind_speed + `km/h`;
    document.querySelector(".noH").innerHTML = data.humidity + `%`;
    document.getElementById('humidity').style.opacity = 2;
    document.getElementById('wind').style.opacity = 2;
    document.getElementById('div1').style.backgroundImage = `url(nature-colorful-landscape-dusk-cloud.jpg)`;

    if (data.cloud_pct == 100) {
        document.getElementById('div1').style.backgroundSize = ` 27rem 35rem`;
        document.getElementById('current').style.opacity = `0`;
        document.getElementById('cloud').style.backgroundImage = 'url(rain.png)';
        document.getElementById('div1').style.backgroundImage = 'url(header_raining.gif)';
        document.getElementById('cloud').style.height = '8rem';
        document.getElementById('cloud').style.width = '8rem';
        document.getElementById('cloud').style.backgroundSize = `8.3rem`;

    }
    else if (data.cloud_pct >= 70) {
        document.getElementById('current').style.opacity = `0`;
        document.getElementById('cloud').style.backgroundSize = `8.3rem`;
        document.getElementById('div1').style.backgroundSize = `28rem 34.5rem`;
        document.getElementById('cloud').style.backgroundImage = 'url(drizzle.png)';
        document.getElementById('cloud').style.height = '8rem';
        document.getElementById('cloud').style.width = '8rem';
        document.getElementById('div1').style.backgroundImage = 'url(75pct.jpg)';
    }
    else if (data.cloud_pct >= 40) {
        document.getElementById('div1').style.backgroundImage = 'url(50pct.avif)';
        document.getElementById('cloud').style.backgroundSize = `8.3rem`;
        document.getElementById('cloud').style.backgroundImage = 'url(clouds.png)';
        document.getElementById('cloud').style.height = '8rem';
        document.getElementById('cloud').style.width = '8rem';
        document.getElementById('current').style.opacity = `0`;
        document.getElementById('div1').style.backgroundSize = `58rem`;
        document.getElementById('current').style.color = `black`;
    }
    else if (data.error == "An unexpected error occured.") {
        document.getElementById('humidity').style.opacity = 0;
        document.getElementById('cloud').style.opacity = 0;
        document.getElementById('wind').style.opacity = 0;
        document.querySelector(".temp").innerText = `Plz, Enter the correct city name.`;
        document.querySelector(".temp").style.left = '-7rem';
        document.querySelector(".temp").style.color = 'white';
        document.querySelector(".temp").style.width = '25rem';
        document.getElementById('div1').style.height = '10rem';
        document.querySelector(".temp").style.fontfamily = `cursive`;
        document.getElementById('current').style.opacity = `0`;
        document.getElementById('div1').style.backgroundColor = `red`;
    }
    else {
        if ((d.getHours()) > 5) {
            document.getElementById('div1').style.backgroundImage = 'url(20pct.jpg)';
            document.getElementById('cloud').style.backgroundSize = `8.3rem`;
            document.getElementById('cloud').style.backgroundImage = 'url(clear.png)';
            document.getElementById('cloud').style.height = '8rem';
            document.getElementById('cloud').style.width = '8rem';
            document.getElementById('current').style.opacity = `0`;
            document.getElementById('div1').style.height = `550px`;
        }
        else {
            document.getElementById('humidity').style.color = `white`;
            document.getElementById('wind').style.color = `white`;
            document.querySelector(".temp").style.color = `white`;
            document.getElementById('div1').style.height = `550px`;
            document.getElementById('current').style.opacity = `0`;
            document.getElementById('div1').style.backgroundImage = 'url(night.jpg)';
            document.getElementById('cloud').style.height = '8rem';
            document.getElementById('cloud').style.width = '8rem';
            document.getElementById('cloud').style.backgroundSize = `8.3rem`;
        }
    }
}

city.addEventListener("keyup", (e) => {
    e.preventDefault();
    if (e.keyCode === 13) {
        getwhether(city.value);
    }
})

apibtn.addEventListener("click", () => {
    getwhether(city.value);
})