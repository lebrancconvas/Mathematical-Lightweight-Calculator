import React from "react";
import {useNavigate} from 'react-router-dom'; 
import {Typography, Button} from '@mui/material'; 
import {Box} from '@mui/system'; 

const Homepage = () => {
	const navigator = useNavigate(); 
	const toGCDLCM = () => navigator('/gcdlcm'); 
	return(
		<div>
			<Box sx={{textAlign: 'center'}}> 
				<Typography variant="h2">Mathematical Calculator</Typography> 
			</Box>
			<Box sx={{textAlign: 'center'}} mt={3}> 
				<Typography variant="h5">Select Calculator that you want.</Typography> 
			</Box>
			<Box sx={{textAlign: 'center'}} mt={2} onClick={toGCDLCM}>   
				<Button variant="contained">GCD-LCM Calculator</Button> 
			</Box>
		</div>
	)
}

export default Homepage; 