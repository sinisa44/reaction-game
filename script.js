
               var start = new Date ().getTime();

               function getRandomColor() {
                
                var letters = '0123456789ABCDEF'.split('');
    
                var color = '#';
    
                for (var i = 0; i < 6; i++ ) {
        
                    color += letters[Math.floor(Math.random() * 16)];
    
                }
    
                return color;

            }

            function prikaziOblik (){
                var top = Math.random()*300;
                var left = Math.random()*300;
                var stranica = (Math.random() * 200) + 100;

                document.getElementById("oblik").style.background=getRandomColor();

                document.getElementById("oblik").style.top = top + "px";
                document.getElementById("oblik").style.left= left + "px";
                document.getElementById("oblik").style.width= stranica + "px";
                document.getElementById("oblik").style.height= 
                stranica + "px";

                document.getElementById("oblik").style.display="block";

                if (Math.random()> 0.4 ){
                    document.getElementById("oblik").style.borderRadius = "50%";
                }else {
                    document.getElementById("oblik").style.borderRadius = "0";
                }

                start=new Date().getTime();
            }
            function prikaziobjekat (){
                setTimeout(prikaziOblik, Math.random() * 1500);
            }
         

           prikaziobjekat();
           

                function rezultat() {
                    var rezultat = 0;
                if(timetaken > 0.1){
                    rezultat = timetaken + 10;
                    document.getElementById("rezultat").innerHTML =rezultat +"s";
                }
            }

            document.getElementById("oblik").onclick =function (){

                document.getElementById("oblik").style.display = "none";

                var end = new Date().getTime ();

                timetaken = (end - start)/1000;

                document.getElementById("vreme").innerHTML=timetaken + "s";

                prikaziobjekat();
                rezultat ();
                
            }
            
