function createTable() {
    //Write your code here
   const rows = prompt("Input number of rows");
const columns = prompt("Input number of columns");


	//convert in to the numbers

	const rowsNum = Number(rows)
	const cellNum = Number(columns)
//check points
	if(isNaN(rowsNum) || isNaN(cellNum) || rowsNum <= 0 || cellNum <= 0 ){
		alert("Please enter the positive number for the rows and columns")
		return
	}

  let table = document.getElementById('myTable')

	for(let i = 0; i < rowsNum; i++){
		const row = table.insertRow();
     for(let j = 0; j < cellNum; j++){
         const cell = row.insertCell()

		 cell.innerText = `Row-${i} column-${j}`
	 }
	}

	
    //now 
}
