import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnySharpIcon from '@mui/icons-material/WbSunnySharp';
import ThunderstormSharpIcon from '@mui/icons-material/ThunderstormSharp';

export default function InfoBox({ info }) {
    const INIT_URL = "https://plus.unsplash.com/premium_photo-1667143951629-a1b2acc1a832?q=80&w=736&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

    let COLD_URL = "https://images.unsplash.com/photo-1706235997260-ce605eaa1938?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGNvbGQlMjB3ZWF0aGVyJTIwdHJlZXN8ZW58MHx8MHx8fDA%3D"
    let HOT_URL = "https://images.unsplash.com/photo-1632691355572-116ce279aa9c?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    let RAIN_URL = "https://images.unsplash.com/photo-1727373217103-d64866ce6ee8?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"


    return (
        <div className='InfoBox'>
            <div className='cardContainer'> 
                <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    sx={{ height: 140 }}
                    image={
                        info.humidity > 80
                        ? RAIN_URL
                        : info.temp > 15
                        ? HOT_URL
                        : COLD_URL
                    }
                    title="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    {info.city} {
                        info.humidity > 80
                        ? <ThunderstormSharpIcon />
                        : info.temp > 15
                        ? <WbSunnySharpIcon />
                        : <AcUnitIcon />
                    } 
                    </Typography>
                    <Typography variant="body2" color= 'text.secondary' component={"span"}>
                      <p>Temperature = {info.temp}&deg;C</p>
                      <p>Humidity = {info.humidity}&deg;C</p>
                      <p>Min Temp = {info.tempMin}&deg;C</p>
                      <p>Max Temp = {info.tempMax}&deg;C</p>
                      <p>
                        The weather can be described as <i>{info.weather}</i> and feels
                        like {info.feelsLike}&deg;C
                      </p>
                    </Typography>
                </CardContent>
            </Card>
            </div>           
        </div>
    )   
}