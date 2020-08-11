document.addEventListener('DOMContentLoaded', function(){
	
	var inputs = document.querySelectorAll('input');
	
	var pattern ={
		
		name: /^[a-z0-9]{2,12}$/i,
		email:/^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,5})(\.[a-z]{2,5})?$/
	}
	
	function validate(field,regex){
		
		console.log(regex.test(field.value));
		if(regex.test(field.value)){
			field.className = 'valid';
		}else{
			field.className = 'invalid';
		}
	}
	
	
	inputs.forEach((input)=>{
		
		input.addEventListener('keyup', (e)=>{
			validate(e.target,pattern[e.target.attributes.name.value]);
		})
	})
})

function basic()
{
		var counter = 0;

		var validate = document.querySelectorAll('input[type="text"]');
				for(var i=0;i<2;i++)
				{
					console.log(validate[i].className);
					if(validate[i].className=='invalid' || validate[i].className=='')
					{
						alert('Fields are incorrect');
						break;
					}
					else if(validate[i].className=='valid')
					{
						counter++;
					}
				}

				if(counter==2)
				{
						sessionStorage.setItem('price',8.99);
						window.location.href="payment.html";
				}

}
function premium()
{
			var counter = 0;

		var validate = document.querySelectorAll('input[type="text"]');
				for(var i=0;i<2;i++)
				{
					console.log(validate[i].className);
					if(validate[i].className=='invalid' || validate[i].className=='')
					{
						alert('Fields are incorrect');
						break;
					}
					else if(validate[i].className=='valid')
					{
						counter++;
					}
				}
				if(counter==2)
				{
					sessionStorage.setItem('price',13.99);
					window.location.href="payment.html";
				}
}
function standard()
{
			var counter = 0;

		var validate = document.querySelectorAll('input[type="text"]');
				for(var i=0;i<2;i++)
				{
					console.log(validate[i].className);
					if(validate[i].className=='invalid' || validate[i].className=='')
					{
						alert('Fields are incorrect');
						break;
					}
					else if(validate[i].className=='valid')
					{
						counter++;
					}
				}
				if(counter==2)
				{
					sessionStorage.setItem('price',10.99);
					window.location.href="payment.html";
				}
}