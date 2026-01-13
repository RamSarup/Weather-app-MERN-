import React, { useEffect} from 'react'

const Demo = () => {

    useEffect(() => {
        const fetchWeather = async ()=>{
            const res = await fetch("https://mausam.imd.gov.in/api/current_wx_api.php?lat=28.6139&lon=77.2090");

            console.log("This is the new API");
            const data = await res.json();
            console.log(data);
        };

        fetchWeather();
    }, [])

  return (
    <div>
      
    </div>
  )
}

export default Demo
