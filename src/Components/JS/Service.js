import  React,{useState, useEffect} from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
// import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
// import { red } from '@mui/material/colors';
import ShareIcon from '@mui/icons-material/Share';
//import data from './data'
import {Link} from 'react-router-dom'

export default function RecipeReviewCard() {

  const [set, reset] = useState('');
  const [data, setData] = useState([]);
  const getData = async () => {
    const fetchs = await fetch("api/courses", {
      method: "GET" // default, so we can ignore
    });
    const all_courses = await fetchs.json();
    console.log(all_courses);
    setData(all_courses.data);
    //console.log(data);
  };

  useEffect(() => {
    getData()
   },[]);

   useEffect(()=>{
    console.log(data);
   })

  return (
    <div style={{minHeight:"100vh"}} id="Service">
        <h1 data-aos="flip-left" style={{margin:"20px",textAlign:"center"}}>Find Courses</h1>
        <form className="d-flex" style={{ width: '300px', margin: 'auto', marginBottom: "20px" }}>
          <input className="form-control me-2" style={{ width: '300px' }}  data-aos="fade-right" value={set} onChange={(e) => reset(e.target.value)} type="search" placeholder="Search" aria-label="Search" />
        </form>
    <div style={{display:"flex",alignItems:"center",justifyContent:"center",flexWrap:"wrap",margin:"20px"}}>
    { 

      /* .filter(function (val) {
              if (set === "") {
                return val;
              } else if (val.courseName.toLowerCase().includes(set.toLowerCase())) {
                return val;
              }
            })  */
        data.map((item)=>{
            return(
                <>
                <Card sx={{ maxWidth: 345,margin:'20px' }}  data-aos={item.class}>
      <CardHeader
        title={item.courseName}
        subheader={item.provider}
      />
      <CardMedia
        component="img"
        height="194"
        src={item.imageUrl}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          Description: {item.description}<br></br>
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <Link to={"/View/"+item.courseName} style={{listStyle:"none",color:"red",textDecoration:"none"}}>Read More</Link>
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
                </>
            )
        })
    }
    </div>
    </div>
  );
}

