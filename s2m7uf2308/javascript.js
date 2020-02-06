
			document.getElementById('default').addEventListener('click',DEFAULT);
			document.getElementById('mono').addEventListener('click',MONO);
			document.getElementById('dark').addEventListener('click',DARK);
			document.getElementById('artic').addEventListener('click',ARTIC);

			var color=["#ff8000","#ffff00","#00ff40","#8000ff",];
			var chat=["#ffcc99","#ffff99","#99ffb3","#cc99ff",];

		  var bola=document.getElementsByClassName('bola');
		  bola[0].style.backgroundColor=color[0];
		  bola[1].style.backgroundColor=color[1];
		  bola[2].style.backgroundColor=color[2];
		  bola[3].style.backgroundColor=color[3];
			bola[4].style.backgroundColor=color[0];
		  bola[5].style.backgroundColor=color[1];
		  bola[6].style.backgroundColor=color[2];
		  bola[7].style.backgroundColor=color[3];
			bola[8].style.backgroundColor=color[0];
		  bola[9].style.backgroundColor=color[1];
		  bola[10].style.backgroundColor=color[2];
		  bola[11].style.backgroundColor=color[3];
			document.getElementById('a').addEventListener('click',DEFAULT);
			document.getElementById('b').addEventListener('click',MONO);
			document.getElementById('c').addEventListener('click',DARK);
			document.getElementById('d').addEventListener('click',ARTIC);

		var slider=document.getElementsByClassName('slider');




			function DEFAULT(){
				slider[0].style.display="none";
				slider[1].style.display="none";
				slider[2].style.display="none";
				document.getElementById("chat").style.backgroundColor = ("#E5E7E9");
				document.getElementById("ChatIzquierdo").style.backgroundColor = ("#D5DBDB");
				document.getElementById("ChatDerecho").style.backgroundColor = ("#AEB6BF");
				document.getElementById("colores").style.display="none";
				document.getElementById("colores1").style.display="none";
				document.getElementById("colores2").style.display="none";
				document.getElementById("a").style.backgroundColor = ("red");
				document.getElementById("b").style.backgroundColor = ("transparent");
				document.getElementById("c").style.backgroundColor = ("transparent");
				document.getElementById("d").style.backgroundColor = ("transparent");

			}

			function MONO(){
				slider[0].style.display="block";
				slider[1].style.display="none";
				slider[2].style.display="none";
				document.getElementById("chat").style.backgroundColor = ("#D5F5E3");
				document.getElementById("ChatIzquierdo").style.backgroundColor = ("#ABEBC6");
				document.getElementById("ChatDerecho").style.backgroundColor = ("#58D68D");
				document.getElementById("colores").style.display="flex";
				document.getElementById("colores1").style.display="none";
				document.getElementById("colores2").style.display="none";
				document.getElementById("a").style.backgroundColor = ("transparent");
				document.getElementById("b").style.backgroundColor = ("red");
				document.getElementById("c").style.backgroundColor = ("transparent");
				document.getElementById("d").style.backgroundColor = ("transparent");
			}

			function DARK(){
				slider[0].style.display="none";
				slider[1].style.display="block";
				slider[2].style.display="none";
				document.getElementById("chat").style.backgroundColor = ("#2d2e2e");
				document.getElementById("ChatIzquierdo").style.backgroundColor = ("#cecfd1");
				document.getElementById("ChatDerecho").style.backgroundColor = ("#a0a1a3");
				document.getElementById("colores").style.display="none";
				document.getElementById("colores1").style.display="flex";
				document.getElementById("colores2").style.display="none";
				document.getElementById("a").style.backgroundColor = ("transparent");
				document.getElementById("b").style.backgroundColor = ("transparent");
				document.getElementById("c").style.backgroundColor = ("red");
				document.getElementById("d").style.backgroundColor = ("transparent");
			}

			function ARTIC(){
				slider[0].style.display="none";
				slider[1].style.display="none";
				slider[2].style.display="block";
				document.getElementById("chat").style.backgroundColor = ("#F3E2A9");
				document.getElementById("ChatDerecho").style.backgroundColor = ("#F7D358");
				document.getElementById("ChatIzquierdo").style.backgroundColor = ("#F5DA81");
				document.getElementById("colores").style.display="none";
				document.getElementById("colores1").style.display="none";
				document.getElementById("colores2").style.display="flex";
				document.getElementById("a").style.backgroundColor = ("transparent");
				document.getElementById("b").style.backgroundColor = ("transparent");
				document.getElementById("c").style.backgroundColor = ("transparent");
				document.getElementById("d").style.backgroundColor = ("red");

				
				
        



			document.getElementById('b1').addEventListener('click',COLOR1);
			function COLOR1(){
				document.getElementById("chat").style.backgroundColor = (color[0]);
				document.getElementById("mono").style.backgroundColor = (color[0]);
				document.getElementById("MonoDerecho").style.backgroundColor = (chat[0]);
				document.getElementById("ChatDerecho").style.backgroundColor = (chat[0]);


			}


			document.getElementById('b2').addEventListener('click',COLOR2);
			function COLOR2(){
				document.getElementById("chat").style.backgroundColor = (color[1]);
				document.getElementById("mono").style.backgroundColor = (color[1]);
				document.getElementById("MonoDerecho").style.backgroundColor = (chat[1]);
				document.getElementById("ChatDerecho").style.backgroundColor = (chat[1]);
			}


			document.getElementById('b3').addEventListener('click',COLOR3);
			function COLOR3(){
				document.getElementById("chat").style.backgroundColor = (color[2]);
				document.getElementById("mono").style.backgroundColor = (color[2]);
				document.getElementById("MonoDerecho").style.backgroundColor = (chat[2]);
				document.getElementById("ChatDerecho").style.backgroundColor = (chat[2]);
			}


			document.getElementById('b4').addEventListener('click',COLOR4);
			function COLOR4(){
				document.getElementById("chat").style.backgroundColor = (color[3]);
				document.getElementById("mono").style.backgroundColor = (color[3]);
				document.getElementById("MonoDerecho").style.backgroundColor = (chat[3]);
				document.getElementById("ChatDerecho").style.backgroundColor = (chat[3]);
			}






			document.getElementById('b11').addEventListener('click',COLOR11);
			function COLOR11(){
				document.getElementById("ChatIzquierdo").style.backgroundColor = (chat[0]);
				document.getElementById("ChatDerecho").style.backgroundColor = (color[0]);
				document.getElementById("DarkIzquierdo").style.backgroundColor = (chat[0]);
				document.getElementById("DarkDerecho").style.backgroundColor = (color[0]);
			}

			document.getElementById('b12').addEventListener('click',COLOR12);
			function COLOR12(){
				document.getElementById("ChatIzquierdo").style.backgroundColor = (chat[1]);
				document.getElementById("ChatDerecho").style.backgroundColor = (color[1]);
				document.getElementById("DarkIzquierdo").style.backgroundColor = (chat[1]);
				document.getElementById("DarkDerecho").style.backgroundColor = (color[1]);
			}

			document.getElementById('b13').addEventListener('click',COLOR13);
			function COLOR13(){
				document.getElementById("ChatIzquierdo").style.backgroundColor = (chat[2]);
				document.getElementById("ChatDerecho").style.backgroundColor = (color[2]);
				document.getElementById("DarkIzquierdo").style.backgroundColor = (chat[2]);
				document.getElementById("DarkDerecho").style.backgroundColor = (color[2]);
			}

			document.getElementById('b14').addEventListener('click',COLOR14);
			function COLOR14(){
				document.getElementById("ChatIzquierdo").style.backgroundColor = (chat[3]);
				document.getElementById("ChatDerecho").style.backgroundColor = (color[3]);
				document.getElementById("DarkIzquierdo").style.backgroundColor = (chat[3]);
				document.getElementById("DarkDerecho").style.backgroundColor = (color[3]);
			}






			document.getElementById('b21').addEventListener('click',COLOR21);
			function COLOR21(){
				document.getElementById("ChatIzquierdo").style.backgroundColor = (chat[0]);
				document.getElementById("ChatDerecho").style.backgroundColor = (color[0]);
				document.getElementById("ArticIzquierdo").style.backgroundColor = (chat[0]);
				document.getElementById("ArticDerecho").style.backgroundColor = (color[0]);
			}

			document.getElementById('b22').addEventListener('click',COLOR22);
			function COLOR22(){
				document.getElementById("ChatIzquierdo").style.backgroundColor = (chat[1]);
				document.getElementById("ChatDerecho").style.backgroundColor = (color[1]);
				document.getElementById("ArticIzquierdo").style.backgroundColor = (chat[1]);
				document.getElementById("ArticDerecho").style.backgroundColor = (color[1]);
			}

			document.getElementById('b23').addEventListener('click',COLOR23);
			function COLOR23(){
				document.getElementById("ChatIzquierdo").style.backgroundColor = (chat[2]);
				document.getElementById("ChatDerecho").style.backgroundColor = (color[2]);
				document.getElementById("ArticIzquierdo").style.backgroundColor = (chat[2]);
				document.getElementById("ArticDerecho").style.backgroundColor = (color[2]);
			}

			document.getElementById('b24').addEventListener('click',COLOR24);
			function COLOR24(){
				document.getElementById("ChatIzquierdo").style.backgroundColor = (chat[3]);
				document.getElementById("ChatDerecho").style.backgroundColor = (color[3]);
				document.getElementById("ArticIzquierdo").style.backgroundColor = (chat[3]);
				document.getElementById("ArticDerecho").style.backgroundColor = (color[3]);
			}

			document.getElementById("articolor").addEventListener('input',canvi);
			function canvi(){
            document.getElementById("ChatDerecho").style.backgroundColor =articolor.value;
			}