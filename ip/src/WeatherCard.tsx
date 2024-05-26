export const WeatherCard = (props: {temperature: number, date: string}) =>{
    return <div>Date: {new Date(props.date).toLocaleString()}, Temp: {props.temperature.toFixed(2)}</div>;
}
