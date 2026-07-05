function updateDateTime(){

    const now = new Date();

    const week=["日","月","火","水","木","金","土"];

    const text =
        now.getFullYear()+" / "+
        String(now.getMonth()+1).padStart(2,"0")+" / "+
        String(now.getDate()).padStart(2,"0")+
        " ("+week[now.getDay()]+")<br>"+
        String(now.getHours()).padStart(2,"0")+":"+
        String(now.getMinutes()).padStart(2,"0")+":"+
        String(now.getSeconds()).padStart(2,"0");

    document.getElementById("datetime").innerHTML=text;

}

updateDateTime();

setInterval(updateDateTime,1000);