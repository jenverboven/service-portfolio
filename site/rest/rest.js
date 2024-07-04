const arg1input = document.getElementById('arg1');
const arg2input = document.getElementById('arg2');


function showValue() {
	const arg1 = arg1input.value;
	const arg2 = arg2input.value;

	fetch(`http://localhost:4000/add/${arg1}/${arg2}`)
		.then((response) => {
			if (response.ok) {
				console.log("successfully fetched data");
			} else {
				console.log("failed to fetch data");
			}
			return response.json();
		})
		.then((data) => {
			let span = document.getElementById("data");
			span.innerText = data.data;
		})
		.catch((error) => console.log("an error has occurred: ", error));
}