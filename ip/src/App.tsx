import { useEffect, useState } from 'react'
import './App.css'
import { WeatherCard } from './WeatherCard';

interface WeatherInfo{
  date: string,
  temperature: number
}

function App() {
  const [data, setDate] = useState<WeatherInfo[]>([])

  useEffect(()=>{
    fetch("https://vm.nathoro.ru/weather?lattitude=54.3&longitude=48.4")
    .then(r => r.json())
    .then(d => setDate(d))
  }, []);

  return (
    <>
      {data.map(w => {
        return (<WeatherCard key={w.date} date={w.date} temperature={w.temperature}/>)
      })}
    </>
  )
}

export default App
