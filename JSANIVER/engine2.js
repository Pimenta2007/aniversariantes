var meses = ["JAN","FEV","MAR","ABR","MAI","JUN","JUL","AGO","SET","OUT","NOV","DEZ"]
var hoje = new Date();

var diaE, mesE, agora, rodou=0
var amanha = new Date();
var diaT = new Date();
diaT.setDate(diaT.getDate()-5);
diaSemana=[];
var mensagemSemana=""


function IdentificarSemana(){
    var msg = document.getElementById("semana");
    msg.innerHTML+=" ";
    diaT.setDate(diaT.getDate()-(diaT.getDay()-1));
    msg.innerHTML+=diaT.getDate();
    msg.innerHTML+=meses[diaT.getMonth()]+" a ";



    aniversariantes();



    //diaT.setDate(diaT.getDate()+6);
    msg.innerHTML+=diaT.getDate();
    msg.innerHTML+=meses[diaT.getMonth()];
}



function aniversariantes(){
            diaT.setDate(diaT.getDate()-1)
    var data = diaT
    for(i=0;i<7;i++){
        diaT.setDate(diaT.getDate()+1)
        if(diaT.getDate()<10){
            data="0"+diaT.getDate()+"/";
        } else {
            data=diaT.getDate()+"/";
        }
        if(diaT.getMonth()<9){
            data+="0"+(diaT.getMonth()+1)
        } else {
            data+=(diaT.getMonth()+1)
        }
        console.log(data)
        for(r=0;r<aniver.length;r++){
            if(aniver[r].data==data){
                document.getElementById(aniver[r].cia).innerHTML+=aniver[r].qra+" pelotão:   "+aniver[r].pe+" dia: "+aniver[r].data+"<br>"
            }
        }
    }
}



IdentificarSemana();