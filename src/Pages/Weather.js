import React, {Component} from 'react';

import Form from "../Components/Forma";
import Info from "../Components/Info";
import Sinoptic from "../Components/Sinoptic";


const API_KEY= "552bdc7f41fbec8ec0886bcfd0dd2417";

class Weather extends Component {

    state = {
        temp: undefined,
        city: undefined,
        country: undefined,
        pressure: undefined,
        sunset: undefined,
        error: undefined
    }

    gettingWeather =  async (e) => {
        e.preventDefault();
        const city = e.target.elements.city.value;
        const api_url = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
        const data = await api_url.json();
        // console.log(data);

        var sunset = data.sys.sunset;
        var date = new Date ();
        date.setTime(sunset);
        var sunset_date = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();


        this.setState({
           temp: data.main.temp,
            city: data.name,
            country: data.sys.country,
            pressure: data.main.pressure,
            sunset: sunset_date,
            error: ""
        });

    }

    render() {
        return (
            <div className="container2">
                <Info />

                <Form weatherMethod={this.gettingWeather} />

                <Sinoptic
                    temp={this.state.temp}
                    city={this.state.city}
                    country={this.state.country}
                    pressure={this.state.pressure}
                    sunset={this.state.sunset}
                    error={this.state.error}
                />
            </div>
        );
    }
}

export default Weather;