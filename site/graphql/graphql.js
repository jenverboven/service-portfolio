const arg1input = document.getElementById('arg1');
const arg2input = document.getElementById('arg2');

let fr = new FileReader();

function getGraphQLData(){
	const arg1 = arg1input.value;

    const query = `
        query Continents{
            continents(where: {name: {_like: ${arg1}}}){
                name
                code
            }
        }
    `;

    fetch(`https://hardy-elf-51.hasura.app/v1/graphql`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "x-hasura-admin-secret": ""
        },
        body: JSON.stringify({
            query
        })
    }).then(response => {
        return response.json();
    }).then(data => {
        console.log(data.data.continents[0]);
    })
}

// function showValue() {
// 	const arg1 = arg1input.value;
// 	const arg2 = arg2input.value;

// 	fetch(`http://localhost:4000/add/${arg1}/${arg2}`)
// 		.then((response) => {
// 			if (response.ok) {
// 				console.log("successfully fetched data");
// 			} else {
// 				console.log("failed to fetch data");
// 			}
// 			return response.json();
// 		})
// 		.then((data) => {
// 			let span = document.getElementById("data");
// 			span.innerText = data.data;
// 		})
// 		.catch((error) => console.log("an error has occurred: ", error));
// }