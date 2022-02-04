$.getJSON("http://api.openweathermap.org/data/2.5/weather?q=Boston&units=imperial&appid=2571bd1bac0825a63ee901325fb327a7",

function(data){
            console.log(data);

            var icon = "http://openweathermap.org/img/wn/" + 
            data.weather[0].icon + ".png";

            var temp =  Math.floor(data.main.temp) + '°F';
            
            var weather = data.weather[0].main;
            var city = data.name;

            $(".city").append(city);
            $(".icon").attr("src", icon);
            $(".weather").append(weather);
            $(".temp").append(temp);

      });


