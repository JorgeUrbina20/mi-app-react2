import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function ImgMediaCard({img, descripcion}) {
  return (
    <Card sx={{ maxWidth: 345 }}>
        <CardMedia
            component="img"
            alt={descripcion}
            height="300"
            image={img}
            />
        <CardContent>
            <Typography gutterBottom variant="h5" component="div">
            Componets
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            A component is wonderfull when you know how to use it. Consider 
            learn more every day to improve your skills.
            </Typography>
        </CardContent>
        <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
        </CardActions>
    </Card>
  );
}
