import React from "react";
import {useNavigate} from 'react-router-dom'; 
import {Typography, Button} from '@mui/material'; 
import {Box} from '@mui/system'; 

const Homepage = () => {
	const navigator = useNavigate(); 
	const toGCDLCM = () => navigator('/gcdlcm'); 
	const toIsPrime = () => navigator('/isprime'); 
	return(
		<div>
			<Box sx={{textAlign: 'center'}}> 
				<Typography variant="h2">Mathematical Calculator</Typography> 
			</Box>
			<Box sx={{textAlign: 'center'}} mt={3}> 
				<Typography variant="h5">Select Calculator that you want.</Typography> 
			</Box>
			<Box sx={{textAlign: 'center'}} mt={2}>   
				<Button variant="contained" onClick={toGCDLCM}>GCD-LCM Calculator</Button> 
			</Box>
			<Box sx={{textAlign: 'center'}} mt={2}>   
				<Button variant="contained" onClick={toIsPrime}>Is this number is a prime number?</Button> 
			</Box>
			<Box sx={{textAlign: 'center'}} mt={2}> 
				<Button variant="contained">Trigonometric Calculator</Button>  
			</Box>
		</div>
	)
}

export default Homepage; 