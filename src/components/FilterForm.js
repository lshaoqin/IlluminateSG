import { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';

const dataset = [
	{ name: "Lee", gender: "F", location: "Punggol St 22", disability: "XXX" },
    { name: "John", gender: "F", location: "Punggol St 21", disability: "YYY" },
    { name: "Jamie", gender: "M", location: "Punggol Road", disability: "ZZZ" },
    { name: "Mr Claus", gender: "M", location: "Punggol MRT", disability: "XXX" },
];

const FilterForm = () => {
    const [filter, setFilter] = useState("")

    function handleFilterChange(e) {
        setFilter(e.target.value);
      }

    return (
    <div id="cards">
        <h4>Find an illuminator!</h4>
        <TextField
            label="Filters"
            value={filter}
            onChange={handleFilterChange}
        />

        {dataset.filter(el => el.disability.includes(filter)).map((element, index) => {
            return (
            <Card 
                key = {index} 
                sx={{ minWidth: '350px' }}
                variant="outlined"
            >
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                {element.name}
                </Typography>
                <Typography variant="h5" component="div">
                {element.gender}
                </Typography>
                <Typography variant="h5" component="div">
                {element.disability}
                </Typography>
                <Typography variant="h5" component="div">
                {element.location}
                </Typography>
            </CardContent>
            </Card>
            )
        // }    
        })}
        </div>
    )
}

export default FilterForm;