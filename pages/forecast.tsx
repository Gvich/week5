import React, {Component} from 'react';

import Form from "../layouts/Forma";
import Info from "../layouts/Info";

import Sinoptic from "../layouts/Sinoptic";
import Layout from "../layouts/Layout";
import Link from "next/link";


const API_KEY= "552bdc7f41fbec8ec0886bcfd0dd2417";

class forecast extends Component {

  state = {
    temp: undefined,
    city: undefined,
    country: undefined,
    pressure: undefined,
    sunset: undefined,
    error: undefined
  }

  gettingWeather =  async (e:any) => {
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
    let element = <><>
      {/*<Layout/>*/}
      <div className="bg-blue-600 p-4 flex justify-between items-center ">
        <div className=" container  flex items-center flex-shrink-0 text-white mr-6">
          <Link href="/Home">
            <a className="block mt-4 ml-10 lg:inline-block lg:mt-0 text-green-100 hover:text-white mr-4">
              AIRSTAR
            </a>
          </Link>
        </div>
        <ul className="flex">
          <li className="text-sm lg:flex-grow">
            <a
                href="/"
                className=" block mt-4 lg:inline-block lg:mt-0 text-green-100 hover:text-white mr-4"
            >
              HOME
            </a>
          </li>
          <li className="text-sm lg:flex-grow ">
            <a
                href="/Home"
                className="block mt-4  lg:inline-block lg:mt-0 text-green-100 hover:text-white mr-4"
            >
              MAIN
            </a>
          </li>
        </ul>
      </div>
      <div className="container2">

        <Info/>

        <Form weatherMethod={this.gettingWeather}/>

        <Sinoptic
            temp={this.state.temp}
            city={this.state.city}
            country={this.state.country}
            pressure={this.state.pressure}
            sunset={this.state.sunset}
            error={this.state.error}
        />
      </div>
    </>
    </>;
    return element;
  }
}

export default forecast;
