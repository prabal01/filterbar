import "./navbar.css"
import React, { useState } from 'react';
import Logo from "./images/logo.svg"
function Navbar(props) {
	// handling countries dropdown
	const [countries, setCountries] = useState(["Brazil(BR)", "Canada(CA)",
		"France (FR)",
		"Great Britain(GB)",
		"USA (US)"])
	const countryList = countries.map((country) =>
		<option className="fieldOption">{country}</option>
	);

	// handling number of result count
	const [counts, setCounts] = useState([20, 50, 100])
	const resultCountList = counts.map((count) => <option className="fieldOption">{count}</option>)

	// form handlers
		// states
		const [selectedGender, setSelectedGender]=useState("Male")
		const [selectedNationality, setSelectedNationality]=useState("Australia(AU)")
		const [selectedResultCount, setSelectedResultCount]=useState(10)

		// functions

		

	return (
		<div className="navbarDiv">
			<div className="title">
				<div className="logoDiv">
					<img className="logo" src={Logo} alt="failed to load image"></img>
				</div>
				<div className="titleDiv">

					<h2 className="filterbarTitle">
						FilterBar
					</h2>
				</div>
			</div>




			{/* gender Input Field */}
			<div className="filters">
				<div className="fieldDiv gender">
					<p> Select gender: </p>
					<select  
					className="inputField "
					onChange={(e)=>{
						console.log("called")
						setSelectedGender(e.target.value)
					}
					}
					>

						<option  className="fieldOption" selected >Male  </option>
						<option  className="fieldOption" >Female</option>
						
					</select>
				</div>

				{/* nationality inputField */}
				<div className="fieldDiv nationality ">
				<p> Select Country: </p>
					<select className="inputField " onChange={(e)=>{
						setSelectedNationality(e.target.value)
					}} >
						<option selected>Australia(AU)</option>
						{countryList}
					</select>
				</div>



				{/* result count Input Field */}
				<div className="fieldDiv nationality ">
				<p> Select Result Count: </p>
					<select className="inputField " onChange={(e)=>{
						setSelectedResultCount(e.target.value)
					}}>
						<option  selected> 10</option>
						{resultCountList}
					</select>
				</div>
					
				<div className="filterButtonDiv">
					<button className="filterButton" onClick={()=>props.fetch(selectedGender,selectedNationality,selectedResultCount,1)}>Filter</button>
				</div>
			</div>
		</div>
	);
}

export default Navbar;