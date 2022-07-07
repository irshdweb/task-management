import React, {useEffect, useState} from 'react';

function Weather(props) {
    const [weather, setWeather] = useState()
    const [icon, setIcon] = useState();
    const [size, setSize] = useState();

    const getData = () => {
      fetch('https://api.weatherapi.com/v1/current.json?key=c207ba1b93b94315a38154944211210&q=New%20York&aqi=no')
        .then((res) => res.json())
        .then((res) => {
          console.log(res)
          setIcon(res.current.condition.icon)
          setWeather(res.current.condition.text)
          setSize(res.current.temp_c)
        })
    }
  
    useEffect(() => {
      getData()
    }, [])


    return (
      <>
        {
          <div className='Weather-pop'>
              <img src={icon} alt=""/>
              <div className="text">
                  {weather}
              </div>
              <div className="temp">
              {size} - C
              </div>
          </div>
        }
      </>
    );
}

export default Weather;