var calculadora = {
	
	inicio:function(){
		
	calculadora.numeros()
	calculadora.operaciones()
	calculadora.punto()
	calculadora.simbolo()
	calculadora.clear()
	},

	clear:function(){
		
		on=document.getElementById("on")
		on.addEventListener("mousedown",function(){
			document.getElementById("on").style="transform:scale(0.95,0.95)"
			display.innerHTML=0
			digito_uno=localStorage.setItem('digito_1',JSON.stringify(""))
			digito_dos=localStorage.setItem('digito_2',JSON.stringify(""))
			resultado=localStorage.setItem('resultado',JSON.stringify(""))
		})
		on.addEventListener("mouseout",function(e){
			document.getElementById("on").style="transform:scale(1,1)"
		})
		
	},
	operaciones:function(resultado){
		
	
		suma=document.getElementById("mas")
		suma.addEventListener("mousedown",function(e){
			digito_uno=localStorage.setItem('digito_1',JSON.stringify(digito))
			display.textContent=""
			digito=0;
			operacion="+"
			document.getElementById("mas").style="transform:scale(0.95,0.95)"
		})
		

		menos.addEventListener("mousedown",function(e){
			digito_uno=localStorage.setItem('digito_1',JSON.stringify(digito))
			display.textContent=""
			digito=0;
			operacion="-"
			document.getElementById("menos").style="transform:scale(0.95,0.95)"
		})
		por.addEventListener("mousedown",function(e){
			digito_uno=localStorage.setItem('digito_1',JSON.stringify(digito))
			display.textContent=""
			digito=0;
			operacion="*"
			document.getElementById("por").style="transform:scale(0.95,0.95)"
		})
		dividido.addEventListener("mousedown",function(e){
			digito_uno=localStorage.setItem('digito_1',JSON.stringify(digito))
			display.textContent=""
			digito=0;
			operacion="/"
			document.getElementById("dividido").style="transform:scale(0.95,0.95)"
		})
		igual=document.getElementById("igual")
		igual.addEventListener("mousedown",function(e){
			digito_dos=localStorage.setItem("digito_2",JSON.stringify(digito))
			display.textContent=""
			digito=0;
			calculadora.resolver()
			document.getElementById("igual").style="transform:scale(0.95,0.95)"
		})
		igual.addEventListener("mouseout",function(e){
			document.getElementById("igual").style="transform:scale(1,1)"
		})
		suma.addEventListener("mouseout",function(e){
			document.getElementById("mas").style="transform:scale(1,1)"
		})
		menos.addEventListener("mouseout",function(e){
			document.getElementById("menos").style="transform:scale(1,1)"
		})
		por.addEventListener("mouseout",function(e){
			document.getElementById("por").style="transform:scale(1,1)"
		})
		dividido.addEventListener("mouseout",function(e){
			document.getElementById("dividido").style="transform:scale(1,1)"
		})
		
		
	},
	
	resolver:function (e){
			digito_uno = JSON.parse(localStorage.getItem("digito_1"));
			digito_dos = JSON.parse(localStorage.getItem("digito_2"));
			switch(operacion){
				case "+":
				resultado=parseFloat(digito_uno)+parseFloat(digito_dos);
				break;
				case "-":
				resultado=parseFloat(digito_uno)-parseFloat(digito_dos);
				break;
				case "*":
				resultado=parseFloat(digito_uno)*parseFloat(digito_dos);
				break;
				case "/":
				resultado=parseFloat(digito_uno)/parseFloat(digito_dos);
				break;
			}
			display.textContent=resultado
			resultado=localStorage.setItem('resultado',JSON.stringify(resultado))
			resultado = JSON.parse(localStorage.getItem("resultado"));
			digito=resultado
		},
	


	numeros:function(e){
		
		uno= document.getElementById("1"),
		dos= document.getElementById("2"),
		tres= document.getElementById("3"),
		cuatro= document.getElementById("4"),
		cinco= document.getElementById("5"),
		seis= document.getElementById("6"),
		siete= document.getElementById("7"),
		ocho= document.getElementById("8"),
		nueve= document.getElementById("9"),
		cero= document.getElementById("0"),
	
		uno.addEventListener("mousedown",function(e){
			resultado= JSON.parse(localStorage.getItem("resultado"));
			resultado=String(resultado).length
			punto_d=display.innerText.indexOf('.')
			document.getElementById("1").style="transform:scale(0.95,0.95)"
			if (punto_d==1) {
				numero()
			}else{
				if (display.textContent==0) {
					digito=""
					display.textContent=""
				}
				numero()
			}
			
			
			function numero(){
				if (display.textContent.length>=8){
				}else{
					digito=display.textContent+"1"
					display.textContent=digito	
				}
			}

		})
		dos.addEventListener("mousedown",function(e){
			resultado= JSON.parse(localStorage.getItem("resultado"));
			resultado=String(resultado).length
			punto_d=display.innerText.indexOf('.')
			document.getElementById("2").style="transform:scale(0.95,0.95)"
			if (punto_d==1) {
				numero()
			}else{
				if (display.textContent==0) {
					digito=""
					display.textContent=""
				}
				numero()
			}
			
			
			function numero(){
				if (display.textContent.length>=8){
				}else{
					digito=display.textContent+"2"
					display.textContent=digito	
				}
			}
		})
		tres.addEventListener("mousedown",function(e){
			resultado= JSON.parse(localStorage.getItem("resultado"));
			resultado=String(resultado).length
			punto_d=display.innerText.indexOf('.')
			document.getElementById("3").style="transform:scale(0.95,0.95)"

			if (punto_d==1) {
				numero()
			}else{
				if (display.textContent==0) {
					digito=""
					display.textContent=""
				}
				numero()
			}
			
			function numero(){
				if (display.textContent.length>=8){
				}else{
					digito=display.textContent+"3"
					display.textContent=digito	
				}
			}
		})
		cuatro.addEventListener("mousedown",function(e){
			resultado= JSON.parse(localStorage.getItem("resultado"));
			resultado=String(resultado).length
			punto_d=display.innerText.indexOf('.')
			document.getElementById("4").style="transform:scale(0.95,0.95)"
			if (punto_d==1) {
				numero()
			}else{
				if (display.textContent==0) {
					digito=""
					display.textContent=""
				}
				numero()
			}
			
			function numero(){
				if (display.textContent.length>=8){
				}else{
					digito=display.textContent+"4"
					display.textContent=digito	
				}
			}
		})
		cinco.addEventListener("mousedown",function(e){
			resultado= JSON.parse(localStorage.getItem("resultado"));
			resultado=String(resultado).length
			punto_d=display.innerText.indexOf('.')
			document.getElementById("5").style="transform:scale(0.95,0.95)"

			if (punto_d==1) {
				numero()
			}else{
				if (display.textContent==0) {
					digito=""
					display.textContent=""
				}
				numero()
			}
			
			
			function numero(){
				if (display.textContent.length>=8){
				}else{
					digito=display.textContent+"5"
					display.textContent=digito	
				}
			}
		})
		seis.addEventListener("mousedown",function(e){
			resultado= JSON.parse(localStorage.getItem("resultado"));
			resultado=String(resultado).length
			punto_d=display.innerText.indexOf('.')
			document.getElementById("6").style="transform:scale(0.95,0.95)"

			if (punto_d==1) {
				numero()
			}else{
				if (display.textContent==0) {
					digito=""
					display.textContent=""
				}
				numero()
			}
			
			
			function numero(){
				if (display.textContent.length>=8){
				}else{
					digito=display.textContent+"6"
					display.textContent=digito	
				}
			}
		})
		siete.addEventListener("mousedown",function(e){
			resultado= JSON.parse(localStorage.getItem("resultado"));
			resultado=String(resultado).length
			punto_d=display.innerText.indexOf('.')
			document.getElementById("7").style="transform:scale(0.95,0.95)"

			if (punto_d==1) {
				numero()
			}else{
				if (display.textContent==0) {
					digito=""
					display.textContent=""
				}
				numero()
			}
			
			
			function numero(){
				if (display.textContent.length>=8){
				}else{
					digito=display.textContent+"7"
					display.textContent=digito	
				}
			}
		})
		ocho.addEventListener("mousedown",function(e){
			resultado= JSON.parse(localStorage.getItem("resultado"));
			resultado=String(resultado).length
			punto_d=display.innerText.indexOf('.')
			document.getElementById("8").style="transform:scale(0.95,0.95)"

			if (punto_d==1) {
				numero()
			}else{
				if (display.textContent==0) {
					digito=""
					display.textContent=""
				}
				numero()
			}
			
			
			function numero(){
				if (display.textContent.length>=8){
				}else{
					digito=display.textContent+"8"
					display.textContent=digito	
				}
			}
		})
		nueve.addEventListener("mousedown",function(e){
			resultado= JSON.parse(localStorage.getItem("resultado"));
			resultado=String(resultado).length
			punto_d=display.innerText.indexOf('.')
			

			if (punto_d==1) {
				numero()
			}else{
				if (display.textContent==0) {
					digito=""
					display.textContent=""
				}
				numero()
			}
			
			
			if (resultado!=0) {
				resultado=localStorage.setItem('resultado',JSON.stringify(""))
				display.textContent=""
				numero()
			}

			function numero(){
				if (display.textContent.length>=8){
				}else{
					digito=display.textContent+"9"
					display.textContent=digito	
				}
			}
			document.getElementById("9").style="transform:scale(0.95,0.95)"
		})
		cero.addEventListener("mousedown",function(e){
			resultado= JSON.parse(localStorage.getItem("resultado"));
			resultado=String(resultado).length
			display =document.getElementById("display")
			punto_d=display.innerText.indexOf('.')
			document.getElementById("0").style="transform:scale(0.95,0.95)"
			if (punto_d	==1) {
				
				numero()
			}else {
				if(display.textContent==0){
					digito=""
					display.textContent="0"
				}else{
					numero()
				}
			}

			
		
			// numero()
			if (resultado!=0) {
				resultado=localStorage.setItem('resultado',JSON.stringify(""))
				display.textContent=""
				numero()
			}
			
			function numero(){
			
				if (display.textContent.length>=8){
				}else{

				digito=display.textContent+"0"
				display.textContent=digito
				}
			}

			
		})
		uno.addEventListener("mouseout",function(e){
			document.getElementById("1").style="transform:scale(1,1)"
		})
		dos.addEventListener("mouseout",function(e){
			document.getElementById("2").style="transform:scale(1,1)"
		})
		tres.addEventListener("mouseout",function(e){
			document.getElementById("3").style="transform:scale(1,1)"
		})
		cuatro.addEventListener("mouseout",function(e){
			document.getElementById("4").style="transform:scale(1,1)"
		})
		cinco.addEventListener("mouseout",function(e){
			document.getElementById("5").style="transform:scale(1,1)"
		})
		seis.addEventListener("mouseout",function(e){
			document.getElementById("6").style="transform:scale(1,1)"
		})
		siete.addEventListener("mouseout",function(e){
			document.getElementById("7").style="transform:scale(1,1)"
		})
		ocho.addEventListener("mouseout",function(e){
			document.getElementById("8").style="transform:scale(1,1)"
		})
		nueve.addEventListener("mouseout",function(e){
			document.getElementById("9").style="transform:scale(1,1)"
		})
		cero.addEventListener("mouseout",function(e){
			document.getElementById("0").style="transform:scale(1,1)"
		})






				
	},
	punto:function(){
		display =document.getElementById("display"),
		punto=document.getElementById("punto");
		punto.addEventListener("mousedown",function(e){
			
			if(display.innerText.indexOf('.') != -1){
					
			}else{
				display.textContent=display.textContent+"."
				
			}
			document.getElementById("punto").style="transform:scale(0.95,0.95)"
		})
		punto.addEventListener("mouseout",function(e){
			document.getElementById("punto").style="transform:scale(1,1)"
		})

	},
	
	simbolo:function(){
		simbolo=document.getElementById("sign");
		display =document.getElementById("display"),
		simbolo.addEventListener("mousedown",function(){
		document.getElementById("simbolo").style="transform:scale(0.95,0.95)"// sign="".string()
			
			if(display.innerText.indexOf('-') == -1){
				if (display.textContent != 0) {
					sign="-";
					display.textContent=display.textContent*-1
					digito=display.textContent
				}
			}else{
				positivo=parseInt(display.textContent)*-1
				display.textContent=positivo
			}
		})
		simbolo.addEventListener("mouseout",function(e){
			document.getElementById("simbolo").style="transform:scale(1,1)"
		})

	},
}

calculadora.inicio()

