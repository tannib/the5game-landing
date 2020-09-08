const img = document.getElementsByClassName("athlete")

window.onload = (event) => {
	let randomNumber = Math.floor(Math.random() * (img.length))
	// console.log(randomNumber)
	img[randomNumber].style.opacity = '1'
	img[randomNumber].style.visibility = 'visible'


	window.setInterval(function(){

		// console.log(randomNumber)
		
		img[randomNumber].style.opacity = '0'
		img[randomNumber].style.visibility = 'hidden'

		randomNumber = Math.floor(Math.random() * (img.length));

		// console.log(randomNumber)
		img[randomNumber].style.opacity = '1'
		img[randomNumber].style.visibility = 'visible'

	  }, 4000);
	
  };

