



var info= 'Your name, Age, Country, Horsepower of your car'
function myFunction() {
	age = parseInt(document.getElementById("age").value);
	horsepower = parseInt(document.getElementById("horsepower").value);
	country = document.getElementById("space").value;
	if(country=="Austria") {
		cost=horsepower*100/age+50
	} else if(country=="Hungary") {
		cost=horsepower* 120/age + 100 
	} else {
		cost=horsepower* 150/(age +3)
	}
	result = document.getElementById("result")
	result.innerHTML = cost
}