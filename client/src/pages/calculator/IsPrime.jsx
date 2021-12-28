import React, {useState} from "react";
import {Typography, Button, TextField} from '@mui/material'; 
import {Box} from '@mui/system'; 

const IsPrime = () => {
	const [number, setNumber] = useState(0); 
	// const [primeStatus, setPrimeStatus] = useState(true);  
	const isPrime = (num) => {
		if(num === 1) {
			return false;
		} else if(num === 2) {
			return true; 
		} else {
			for(let i = 2; i < num; i++) {
				if(num % i === 0) {
					return false;
				}
			}
			return true;
		}
	}; 
	const calPrime = (e) => {
		e.preventDefault(); 
		// setPrimeStatus(isPrime(number));  
		isPrime(number) ? alert(`${number} is a prime number`) : alert(`${number} is not a prime number`);  
	}; 
	return(
		<div>
			<Box sx={{textAlign: 'center'}}> 
				<Box mt={30}> 
					<Typography variant="h1">
						Is This Number a prime number?  
					</Typography>
				</Box>
				<Box mt={3}>
					<form onSubmit={calPrime}>  
						<TextField type="number" sx={{width: 500}} placeholder="Insert your number." onChange={event => setNumber(event.target.value)} /> 
						<Box mt={2}> 
							<Button type="submit" variant="contained">Calculate</Button> 
						</Box>
					</form>
				</Box>
			</Box>
		</div>
	)
}

export default IsPrime;  