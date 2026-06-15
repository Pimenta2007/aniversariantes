var diaE, mesE, agora, rodou=0
var amanha = new Date();
var diaT = new Date();
diaT.setDate(diaT.getDate());
amanha.setDate(amanha.getDate()+1);
diaSemana=[];
var mensagemSemana=""


function IdentificarSemana(){
    document.getElementById("ADS").innerHTML+=" ";
    diaT.setDate(diaT.getDate()-diaT.getDay())
    var DD, MM
    if(diaT.getDate()<10){
        document.getElementById("ADS").innerHTML+="0"+diaT.getDate();
    } else {
        document.getElementById("ADS").innerHTML+=diaT.getDate();
    }
    document.getElementById("ADS").innerHTML+="/";
    if(diaT.getMonth()+1<10){
        document.getElementById("ADS").innerHTML+="0"+(diaT.getMonth()+1);  
    } else {
       document.getElementById("ADS").innerHTML+=(diaT.getMonth()+1);
    }


    for(i=0;i<7;i++){
        if(diaT.getDate()<10){
            DD="0"+diaT.getDate();
        } else {
            DD=diaT.getDate();
        }
        if(diaT.getMonth()+1<10){
            MM="0"+(diaT.getMonth()+1);
        } else {
            MM=(diaT.getMonth()+1);
        }
        diaSemana.push(DD+"/"+MM);
        diaT.setDate(diaT.getDate()+1)
    }
    document.getElementById("ADS").innerHTML+=" a "+DD+"/"+MM;

    for(i=0;i<diaSemana.length;i++){
        for(r=0;r<testeA.length;r++){
            if(testeA[r].data==diaSemana[i]){
                document.getElementById("semana").innerHTML+="<p>AL OF PM "+testeA[r].nome.toUpperCase()+" (1º"+testeA[r].pe+")</p>"
                mensagemSemana+="AL%20OF%20PM%20"+testeA[r].nomeU.toUpperCase()+"%20(1%C2%BA"+testeA[r].pe+")"+"%0A"
            }
        }
       
    }
    document.getElementById("semana").innerHTML+="<a target=_blank href=https://wa.me/5511963172652?text="+mensagemSemana+">MANDAR NO WHATSAPP</a>"
    console.log(mensagemSemana);
}

IdentificarSemana();







document.getElementById("dia").innerHTML="Dia "+amanha.getDate()+"/"+(amanha.getMonth()+1)
var meses = ["JAN","FEV","MAR","ABR","MAI","JUN","JUL","AGO","SET","OUT","NOV","DEZ"]
function teste(){

    if (amanha.getDate()<10){
        diaE="0"+amanha.getDate()
    } else {
        diaE=amanha.getDate()
    }
        if (amanha.getMonth()+1<10){
        mesE="0"+(amanha.getMonth()+1)
    } else {
        mesE=(amanha.getMonth()+1)
    }
    agora=diaE+"/"+mesE
    
    for (i=0;i<testeA.length;i++){
        if (testeA[i].data==agora){
            var mensagem="https://wa.me/5511963172652?text=Srs%20(as)%2C%20bom%20dia!%0AEm%20nome%20dos%20Oficiais%20e%20Cadetes%2C%20parabenizamos%2C%20nesta%20data%20"+amanha.getDate()+meses[amanha.getMonth()]+"26%2C%20o%20CAD%20PM%20"+testeA[i].nomeU+"%2C%20do%201%C2%BA%20CFO%20"+testeA[i].pe+"%2C%20por%20seu%20anivers%C3%A1rio.%20Desejamos%20que%20o%20pr%C3%B3ximo%20ciclo%20de%20sua%20vida%20seja%20repleto%20de%20sa%C3%BAde%2C%20paz%20e%20felicidades.%0AParab%C3%A9ns!"
            document.getElementById("mensagem").innerHTML += "<img width=200px src="+testeA[i].foto+"><p>Srs (as), bom dia!<br> Em nome dos Oficiais e Cadetes, parabenizamos, nesta data "+amanha.getDate()+meses[amanha.getMonth()]+"26, o CAD PM "+testeA[i].nome+", do 1º CFO "+testeA[i].pe+", por seu aniversário. Desejamos que o próximo ciclo de sua vida seja repleto de saúde, paz e felicidades.<br> Parabéns!</p><br><br><a id=teste target=_blank href="+mensagem+">MANDAR NO WHATSAPP</a>"
        } else {
            rodou++
        }
          console.log(mensagem);
    }
    if(rodou==173){
         document.getElementById("mensagem").innerHTML += "<p>Não há aniversariantes amanhã</p>"
    }

};