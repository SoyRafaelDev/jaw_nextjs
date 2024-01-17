import React, { useState, useEffect } from 'react';

const WeatherInfo = () => {
    const [weatherData, setWeatherData] = useState(null);

    useEffect(() => {
        const fetchWeatherData = async () => {
            const apiKey = '69479b662f66fa0c288267377391b1fe';
            const url = `https://api.openweathermap.org/data/2.5/weather?q=Asturias,es&appid=${apiKey}&units=metric`;

            try {
                const response = await fetch(url);
                const data = await response.json();
                setWeatherData(data);
            } catch (error) {
                console.error("Error al obtener datos meteorológicos:", error);
            }
        };

        fetchWeatherData();
    }, []);

    if (!weatherData) return <div>Cargando datos del tiempo...</div>;

    return (
        <div>
            <h2 className='text-slate-900, font-medium'>El Tiempo en Asturias</h2>
            <p className='text-red-700'>{weatherData.main.temp} °C</p>
            <img 
                src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`} 
                alt={weatherData.weather[0].description} 
            />
            <p>{weatherData.weather[0].description}</p>
        </div>
    );
};

export default WeatherInfo;
