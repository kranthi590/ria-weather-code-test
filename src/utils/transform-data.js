const transformWeather = (currentData) => {
    return {
        weather: Math.round(currentData.data.current.temp) + " °F",
        hourly: currentData.data.hourly.map(({temp, dt, weather}) => {
            return {
                temp: Math.round(temp),
                dt: new Date(dt * 1000).toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'}),
                image:
                    "https://openweathermap.org/img/wn/" + weather[0].icon + "@4x.png",
                description: weather[0].description
            }
        }),
        daily: currentData.data.daily.map(({temp, dt, weather}) => {
            return {
                min: Math.round(temp.min),
                max: Math.round(temp.max),
                dt: new Date(dt * 1000).toLocaleString('en-us', {weekday: 'long'}),
                image:
                    "https://openweathermap.org/img/wn/" + weather[0].icon + "@4x.png",
                description: weather[0].description
            }
        }),
        description: currentData.data.current.weather[0].description,
        icon:
            "https://openweathermap.org/img/wn/" + currentData.data.current.weather[0].icon + "@4x.png"
    };
}

const transformDate = () => {
    const date = new Date();
    return {
        date: date.toUTCString().slice(5, 16),
        time: date.toLocaleString('en-US', {hour: 'numeric', minute: 'numeric', hour12: true})
    };
}

export {
    transformWeather,
    transformDate
}