
// document.getElementById("sub").addEventListener("click", function(){
//     var inputS = document.getElementById("inputValue")
//     fetch("https://api.openweathermap.org/data/2.5/weather?q="+inputS.value+"&appid=73a1e0123516d2137b48e71fb8a59717")
//         .then(res => res.json())
//         .then(data =>{
//             const imageSec = document.getElementById("imgS");
//             const cityName = document.getElementById("city");
//             const temP = document.getElementById("tem");
//             const weth = document.getElementById("clo");
//             imageSec.src= `http://openweathermap.org/img/wn/`+data.weather[0].icon+`.png`;
//             cityName.innerText = data.name;
//             temP.innerText = (data.main.temp-273).toFixed(2);
//             weth.innerText = data.weather[0].description;
//             inputS.value = "";
//         })
//         .catch( err =>{
//             alert("Please enter a valid place");
//         })
// })

document.getElementById("sub").addEventListener("click", function(){
    var inputS = document.getElementById("inputValue")
    fetch("https://api.openweathermap.org/data/2.5/weather?q="+inputS.value+"&appid=73a1e0123516d2137b48e71fb8a59717")
        .then(res => res.json())
        .then(data =>{
            document.getElementById("imgS").src = `http://openweathermap.org/img/wn/`+data.weather[0].icon+`.png`;
            document.getElementById("city").innerText= data.name;
            document.getElementById("tem").innerText= (data.main.temp-273).toFixed(2);
            document.getElementById("clo").innerText = data.weather[0].description;
            inputS.value = "";
        })
        .catch(err =>{
            alert("Please enter a valid place");
        })
})
