window.onload = function(){ //Acciones tras cargar la p�gina
pantalla=document.getElementById("textoPantalla"); //elemento pantalla de salida
}

x="0"; 
xi=1;
ni=0; 
op="no"; 

function numero(xx) {  
         if (x=="0" || xi==1  ) {  
            pantalla.innerHTML+=xx; 
            x=xx; 
            }
         else { 
            pantalla.innerHTML+=xx; 
            x+=xx; 
            }
         xi=0 
         }
function operar(s) {
         igualar(); 
         pantalla.innerHTML+=s;
         ni=x;
         op=s; 
         xi=1;
         }
function igualar() {
         if (op=="no") { 
            pantalla.innerHTML=x;	
            }
         else {
             
            sl=ni+op+x; 
            sol=eval(sl) 
            pantalla.innerHTML=sol 
            x=sol; 
            op="no";
            xi=1; 
            
            }
        }
        function raizc() {
         x=Math.sqrt(x) 
         pantalla.innerHTML=x; 
         op="no"; 
         xi=1; 
         }
         function expc() {
         x=Math.pow(x,2) 
         pantalla.innerHTML=x; 
         op="no"; 
         xi=1; 
         }
         function senx() {
         x=Math.sin(x) 
         pantalla.innerHTML=x; 
         op="no"; 
         xi=1; 
         }
         function cosx() {
         x=Math.cos(x) 
         pantalla.innerHTML=x;
         op="no"; 
         xi=1; 
         }
          function tanx() {
         x=Math.tan(x) 
         pantalla.innerHTML=x; 
         op="no"; 
         xi=1;
         }
        function  lineal(){
            var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.moveTo(250,0);
ctx.lineTo(250,500);
ctx.moveTo(0,250);
ctx.lineTo(500,250);


var x= -10;
var x1 =0;



ctx.moveTo(x1,500);
ctx.lineTo(500,0);
x1+=25;

ctx.stroke();


        }