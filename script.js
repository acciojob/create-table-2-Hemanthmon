function createTable() {
    //Write your code here
   const rows = prompt("Input number of rows");
const columns = prompt("Input number of columns");


	//convert in to the numbers

	const rn = Number(rows)
	const cn = Number(columns)
//check points
	if(isNaN(rn) || isNaN(cn) || rn <= 0 || cn <= 0 ){
		alert("Please enter the positive number for the rows and columns")
		return
	}

  let table = document.getElementById('myTable')

	for(let i = 0; i < rn; i++){
		const row = table.insertRow();
     for(let j = 0; j < cn; j++){
         const cell = row.insertCell()

		 
		 cell.innerText = `Row-${i} Column-${j}`;

	 }
	}

	
    //now 
}
