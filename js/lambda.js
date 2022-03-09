//api endpoint
const apiEndPoint = "https://tnzxrtfkrj.execute-api.ap-south-1.amazonaws.com/prod/hello"
// select DOM Element
const getButton = document.querySelector("#getPost");
//getpost
function getLambda(){
 fetch(apiEndPoint).then((response) => {
   response.json().then((hello) => document.querySelector("h1").innerHTML = hello);	
	});
}


getButton.addEventListener("click", () => {
	getLambda();
});