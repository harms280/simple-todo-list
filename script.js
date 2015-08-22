window.onload = function() {
	var input = document.querySelector("input");
	var li = document.getElementsByTagName('li');

	
	clickIt();
	// eventLi();

	// document.querySelector("form").addEventListener('submit', function(event) { //event refers to event object, use this to prevent default. usually just types as e
 // 	event.preventDefault();
 // 	console.log(event);
 // 	var value = document.querySelector("input").value;
	// var newLi = document.createElement("li");
	// newLi.innerText = value;
	// document.querySelector("ul").appendChild(newLi);
	// input.value = "";
	

};

// 	function eventLi() {
// 	for (var i = 0; i < document.getElementsByTagName('li').length; i++) {
// 		document.getElementsByTagName('li')[i].addEventListener('click', function(){
// 			if(this.classList.contains('completed')) {
// 				this.className = "";
// 			} else {
// 				this.classList.add('completed');
// 			}
// 			// this.classList.add('completed');
					
// 			});
// 	}
// }

// function toggleOff()

	function clickIt() {
		document.querySelector("button").addEventListener('click', function() {
		 	event.preventDefault();
		 	console.log(event);
		 	var value = document.querySelector("input").value;
			var newLi = document.createElement("li");
			newLi.innerText = value;
			document.querySelector("ul").appendChild(newLi);
			newLi.addEventListener('click',function(){
			if(this.classList.contains('completed')) {
				this.className = "";
			} else {
				this.classList.add('completed');
			}
		});
			document.querySelector("input").value = "";
	});
	}	

// document.addEventListener("DOMContentLoaded",function() {     //this waits only for dom to load, not images etc, it's a little faster than window.onload


// })




