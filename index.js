let txt = document.getElementById("txt")
let apikey = "0e8ab3d54d0dd3aac0b8639b40d4c8b2"
let txt1 = document.getElementById("txt1")
let txt2 = document.getElementById("txt2")
let txt3 = document.getElementById("txt3")
let txt4 = document.getElementById("txt4")
let txt5 = document.getElementById("txt5")
let txt6 = document.getElementById("txt6")
let txt7 = document.getElementById("txt7")
let txt8 = document.getElementById("txt8")
let txt9 = document.getElementById("txt9")
let txt10 = document.getElementById("txt10")
let txt11 = document.getElementById("txt11")
let txt12 = document.getElementById("txt12")
let txt13 = document.getElementById("txt13")
let txt14 = document.getElementById("txt14")
let txt15 = document.getElementById("txt15")
let txt16 = document.getElementById("txt16")
let txt17 = document.getElementById("txt17")
let txt18 = document.getElementById("txt18")
let txt19 = document.getElementById("txt19")
let txt20 = document.getElementById("txt20")
let txt21 = document.getElementById("txt21")
let txt22 = document.getElementById("txt22")
let txt23 = document.getElementById("txt23")
let txt24 = document.getElementById("txt24")
let txt25 = document.getElementById("txt25")
let txt26 = document.getElementById("txt26")
let txt27 = document.getElementById("txt27")
let txt28 = document.getElementById("txt28")
let txt29 = document.getElementById("txt29")
let txt30 = document.getElementById("txt30")
let txt31 = document.getElementById("txt31")
let txt32 = document.getElementById("txt32")
let txt33 = document.getElementById("txt33")
let txt34 = document.getElementById("txt34")
let txt35 = document.getElementById("txt35")
let txt36 = document.getElementById("txt36")
let txt37 = document.getElementById("txt37")
let txt38 = document.getElementById("txt38")
let pic = document.getElementById("pic")

function apicall() {
    let txtvalue = txt.value;

    let api = fetch(`https://api.openweathermap.org/data/2.5/weather?q=${txtvalue}&appid=${apikey}`);
    let apidata = api.then((response) => response.json());
    apidata.then((item) => {
        // console.log(item)
        txt1.innerText = `${item.name}`
        txt2.innerText = `${item.weather[0].main}`
        txt3.innerText = `${Math.round(item.main.temp - 273.15)}°C`

        switch (item.weather[0].main) {
            case "Thunderstorm":
                pic.src = "./img/thunderstorm.png";
                break;
            case "Clear":
                pic.src = "./img/clear-sky.png";
                break;
            case "Rain" || "Drizzle":
                pic.src = "./img/rain.png";
                break;
            case "Mist" || "Smoke" || "Haze" || "Dust" || "Fog" || "Sand" || "Dust" || "Ash" || "Squall" || "Tornado":
                pic.src = "./img/mist.png";
                break;
            case "Snow":
                pic.src = "./img/snow.png";
                break;
            case "Clouds":
                pic.src = "./img/scattered-clouds.png"
        };

        txt4.innerText = `${item.main.pressure} mb`
        txt5.innerText = `${item.main.humidity} %`
        txt6.innerText = `${item.wind.speed} km/h`
        txt7.innerText = `${item.main.sea_level}`
        txt8.innerText = `${item.main.grnd_level}`

        function apicall2(lat, lon) {
            let api2 = fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apikey}`);
            let apidata2 = api2.then((response2) => response2.json());
            apidata2.then((item2) => {
                console.log(item2)
                let slc1 = item2.list[0].dt_txt
                let slcc1 = slc1.slice(11, 16)
                console.log(slcc1)
                txt9.innerText = `${slcc1}`
                txt10.innerText = `${Math.round(item2.list[0].main.temp - 273.15)}°C`

                let slc2 = item2.list[1].dt_txt
                let slcc2 = slc2.slice(11, 16)
                console.log(slcc2)
                txt11.innerText = `${slcc2}`
                txt12.innerText = `${Math.round(item2.list[1].main.temp - 273.15)}°C`

                let slc3 = item2.list[2].dt_txt
                let slcc3 = slc3.slice(11, 16)
                console.log(slcc3)
                txt13.innerText = `${slcc3}`
                txt14.innerText = `${Math.round(item2.list[2].main.temp - 273.15)}°C`

                let slc4 = item2.list[3].dt_txt
                let slcc4 = slc4.slice(11, 16)
                console.log(slcc4)
                txt15.innerText = `${slcc4}`
                txt16.innerText = `${Math.round(item2.list[3].main.temp - 273.15)}°C`

                let slc5 = item2.list[4].dt_txt
                let slcc5 = slc5.slice(11, 16)
                console.log(slcc5)
                txt17.innerText = `${slcc5}`
                txt18.innerText = `${Math.round(item2.list[4].main.temp - 273.15)}°C`

                let slc6 = item2.list[5].dt_txt
                let slcc6 = slc6.slice(11, 16)
                console.log(slcc6)
                txt19.innerText = `${slcc6}`
                txt20.innerText = `${Math.round(item2.list[4].main.temp - 273.15)}°C`




                let date1 = item2.list[0].dt
                let date11 = new Date(date1 * 1000)
                let result1 = date11.toString().slice(0, 3)
                txt21.innerText = `${result1}`
                txt22.innerText = `${item2.list[0].weather[0].main}`
                txt23.innerText = `${Math.round(item2.list[7].main.temp - 273.15)}°C`

                let date2 = item2.list[8].dt
                let date22 = new Date(date2 * 1000)
                let result2 = date22.toString().slice(0,3)
                txt24.innerText = `${result2}`
                txt25.innerText = `${item2.list[8].weather[0].main}`
                txt26.innerText = `${Math.round(item2.list[8].main.temp - 273.15)}°C`

                let date3 = item2.list[15].dt
                let date33 = new Date(date3 * 1000)
                let result3 = date33.toString().slice(0,3)
                txt27.innerText = `${result3}`
                txt28.innerText = `${item2.list[15].weather[0].main}`
                txt29.innerText = `${Math.round(item2.list[15].main.temp - 273.15)}°C`

                let date4 = item2.list[23].dt
                let date44 = new Date(date4 * 1000)
                let result4 = date44.toString().slice(0,3)
                txt30.innerText = `${result4}`
                txt31.innerText = `${item2.list[23].weather[0].main}`
                txt32.innerText = `${Math.round(item2.list[23].main.temp - 273.15)}°C`

                let date5 = item2.list[32].dt
                let date55 = new Date(date5 * 1000)
                let result5 = date55.toString().slice(0,3)
                txt33.innerText = `${result5}`
                txt34.innerText = `${item2.list[32].weather[0].main}`
                txt35.innerText = `${Math.round(item2.list[32].main.temp - 273.15)}°C`

                let date6 = item2.list[39].dt
                let date66 = new Date(date6 * 1000)
                let result6 = date66.toString().slice(0,3)
                txt36.innerText = `${result6}`
                txt37.innerText = `${item2.list[39].weather[0].main}`
                txt38.innerText = `${Math.round(item2.list[39].main.temp - 273.15)}°C`

            })

        }
        apicall2(item.coord.lat, item.coord.lon);
    });


}

