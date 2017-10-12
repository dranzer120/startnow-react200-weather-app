export const types = {
  UPDATE_CITY_DESCRIPTION: 'UPDATE_CITY_DESCRIPTION',
};

export function updateCityDescription(city) {
  return {
    type: types.UPDATE_CITY_DESCRIPTION,
    payload: fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=a7c167253b5bc7cd8a89b64a62abd811`)
            .then(response => response.json())
            .then(data => {
                return {
                    lat: data.coord.lat,
                    lon: data.coord.lon,
                    name: data.name,
                    temp: data.main.temp,
                    pressure: data.main.pressure,
                    humidity: data.main.humidity,
                    temp_low: data.main.temp_min,
                    temp_high: data.main.temp_max,
                    windspeed: data.wind.speed

                };
            })
            .catch(error => {
                console.error(error);
            })
    }
}
