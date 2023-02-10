import { useState } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';


const dataset = [
	{ name: "Lee", gender: "F", location: "Punggol St 22" },
    { name: "John", gender: "F", location: "Punggol St 21" },
    { name: "Jamie", gender: "M", location: "Punggol Road" },
    { name: "Mr Claus", gender: "M", location: "Punggol MRT" },
];







const FilterForm = () => {
    const [filter, setFilter] = useState("")

    function handleFilterChange(e) {
        setFilter(e.target.value);
      }

    return (
    <>
        <label>
            Input filters here:
            <input
            value={filter}
            onChange={handleFilterChange}
            />
        </label>

        {dataset.map((element, index) => {
        // if (element.name.includes({filter})) {
            return (
            <Card key = {index} 
            sx={{ minWidth: 275 }}>
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                {element.name}
                </Typography>
                <Typography variant="h5" component="div">
                {element.gender}
                </Typography>
                <Typography variant="h5" component="div">
                {element.location}
                </Typography>
            </CardContent>
            </Card>
            )
        // }    
        })}
        </>
    )
}

export default FilterForm;