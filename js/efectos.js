function generar(){
    document.getElementById("resultado").style.display="block";
    
    var primero = document.getElementById("titu").value;
    document.getElementById("primero").innerHTML = primero;

    var segundo= document.getElementById("sub").value;
    document.getElementById("segundo").innerHTML= segundo;

    var tercero= document.getElementById("nom").value;
    document.getElementById("tercero").innerHTML= tercero;

    var textolong= document.getElementById("men").value;
    document.getElementById("textolong").innerHTML= textolong;


    var i;

    var a = document.getElementsByName("opcion");
    var b = document.getElementsByName("i");
    var c = document.getElementsByName("c");

    for(i=0; i<a.length; i++)
    {
        if (a[i].checked){
            var e= a[i].value;
        }

        
    }

    for(i=0; i<b.length; i++)
    {
        if (b[i].checked){
            var f= b[i].value;
        }

        
    }

    for(i=0; i<c.length; i++)
    {
        if (c[i].checked){
            var g= c[i].value;
        }

        
    }

    switch (e){
        case 's':
            document.getElementById("temple").src="../img/sanva.png";
            document.getElementById("audio").src="../contenido/01 All of Me (Live).m4a";
            break;

        case 'f':
            document.getElementById("temple").src="../img/FELIZ CUMPLEAÑOS.png";
            document.getElementById("audio").src="../contenido/lasmañanitas.mp3";
            break;

        case 'm':
            document.getElementById("temple").src="../img/motivacional.png";
            document.getElementById("audio").src="../contenido/queen-we-are-the-champions-official-video.mp3";
            break;
    }

    switch(f){
        case 'a':
            document.getElementById("imagen").src="../img/val.png";
            break;

        case 'b':
            document.getElementById("imagen").src="../img/cumpleanos.png";
            break;

        case 'c':
            document.getElementById("imagen").src="../img/moti.svg"
            break;
    }
    var color=document.getElementById("color").value;
    document.getElementById("resultado").style.backgroundColor=color;

    
    
}