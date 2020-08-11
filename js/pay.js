document.addEventListener('DOMContentLoaded', function()
{
    var inputs = document.querySelectorAll('input');	
	var pattern ={
		card_number: /^[0-9]{16,16}$/i,
		cvc: /^[0-9]{3,3}$/i,
		name_on_card: /^[a-zA-Z ]{3,}$/i,
		expire: /^([0-9]{2})[/.]([0-9]{2})$/
	}
	
	function validate(field,regex){
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


	var final_price = sessionStorage.getItem('price');
	if(final_price==null)
	{
		document.getElementById('payment_price').innerHTML = 'Please select items from Subscribe Page';
	}
	else
	{
		document.getElementById('payment_price').innerHTML = 'PAYMENT : '+ final_price + '$';
	}
})

	function tb_clear()
	{
		document.getElementById('payment_info').reset();
	}	
	function validate()
	{
		var counter = 0;
		var terms =  document.getElementsByName('terms_conditions')[0];

		var validate = document.querySelectorAll('input[type="text"]');
				for(var i=0;i<4;i++)
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

				if(terms.checked && counter==4)
				{
					alert('Thank you, Enjoy Movies');
					document.getElementsById('payment_info').reset();
				}
	}
		
