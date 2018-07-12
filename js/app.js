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
		on.addEventListener("click",function(){
			display.innerHTML=0
			digito_uno=localStorage.setItem('digito_1',JSON.stringify(""))
			digito_dos=localStorage.setItem('digito_2',JSON.stringify(""))
			resultado=localStorage.setItem('resultado',JSON.stringify(""))
		})
		
	},
	operaciones:function(resultado){
		suma=document.getElementById("mas")
		suma.addEventListener("click",function(e){
			digito_uno=localStorage.setItem('digito_1',JSON.stringify(digito))
			display.textContent=""
			digito=0;
			operacion="+"
		})
		menos.addEventListener("click",function(e){
			digito_uno=localStorage.setItem('digito_1',JSON.stringify(digito))
			display.textContent=""
			digito=0;
			operacion="-"
		})
		por.addEventListener("click",function(e){
			digito_uno=localStorage.setItem('digito_1',JSON.stringify(digito))
			display.textContent=""
			digito=0;
			operacion="*"
		})
		dividido.addEventListener("click",function(e){
			digito_uno=localStorage.setItem('digito_1',JSON.stringify(digito))
			display.textContent=""
			digito=0;
			operacion="/"
		})
		igual=document.getElementById("igual")
		igual.addEventListener("click",function(e){
			digito_dos=localStorage.setItem("digito_2",JSON.stringify(digito))
			display.textContent=""
			digito=0;
			calculadora.resolver()
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
	
		uno.addEventListener("click",function(e){
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
			
			
			function numero(){
				if (display.textContent.length>=8){
				}else{
					digito=display.textContent+"1"
					display.textContent=digito	
				}
			}
		})
		dos.addEventListener("click",function(e){
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
			
			
			function numero(){
				if (display.textContent.length>=8){
				}else{
					digito=display.textContent+"2"
					display.textContent=digito	
				}
			}
		})
		tres.addEventListener("click",function(e){
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
			
			function numero(){
				if (display.textContent.length>=8){
				}else{
					digito=display.textContent+"3"
					display.textContent=digito	
				}
			}
		})
		cuatro.addEventListener("click",function(e){
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
			
			function numero(){
				if (display.textContent.length>=8){
				}else{
					digito=display.textContent+"4"
					display.textContent=digito	
				}
			}
		})
		cinco.addEventListener("click",function(e){
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
			
			
			function numero(){
				if (display.textContent.length>=8){
				}else{
					digito=display.textContent+"5"
					display.textContent=digito	
				}
			}
		})
		seis.addEventListener("click",function(e){
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
			
			
			function numero(){
				if (display.textContent.length>=8){
				}else{
					digito=display.textContent+"6"
					display.textContent=digito	
				}
			}
		})
		siete.addEventListener("click",function(e){
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
			
			
			function numero(){
				if (display.textContent.length>=8){
				}else{
					digito=display.textContent+"7"
					display.textContent=digito	
				}
			}
		})
		ocho.addEventListener("click",function(e){
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
			
			
			function numero(){
				if (display.textContent.length>=8){
				}else{
					digito=display.textContent+"8"
					display.textContent=digito	
				}
			}
		})
		nueve.addEventListener("click",function(e){
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
			
		})
		cero.addEventListener("click",function(e){
			resultado= JSON.parse(localStorage.getItem("resultado"));
			resultado=String(resultado).length
			display =document.getElementById("display")
			punto_d=display.innerText.indexOf('.')
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
		
	},
	punto:function(){
		display =document.getElementById("display"),
		punto=document.getElementById("punto");
		punto.addEventListener("click",function(e){
			
			if(display.innerText.indexOf('.') != -1){
					
			}else{
				display.textContent=display.textContent+"."
				
			}
		})
	},
	
	simbolo:function(){
		simbolo=document.getElementById("sign");
		display =document.getElementById("display"),
		simbolo.addEventListener("click",function(){
			// sign="".string()
			
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
	},
}

calculadora.inicio()

