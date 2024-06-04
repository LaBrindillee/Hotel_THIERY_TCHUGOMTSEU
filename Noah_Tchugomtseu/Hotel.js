function ajouter(nom){
    if (document.getElementById(nom).value === ""){
        document.getElementById(nom).value = 0
    }
    var oft = document.getElementById(nom).value;
    oft = parseFloat(oft)+1;
    console.log ("valeur de "+nom+" = "+oft);
    
    document.getElementById(nom).value = oft;

    if(nom === 'enfant'){
        var tab = document.getElementById('tableau')

        var tr = document.createElement('tr') ;
        var td = document.createElement('td') ;
        var lab = document.createElement('label');
        lab.innerHTML = "Age enfant : ";
        var inp = document.createElement('input');
        inp.type = "number";
        inp.id = "age";
        inp.min = "0";
        inp.max = "17";
        td.appendChild(lab);
        td.appendChild(inp);
        tr.appendChild(td);
        tab.appendChild(tr);
    }
}

function retirer(nom){
    if(document.getElementById(nom).value > 0){
        if (document.getElementById(nom).value === ""){
            document.getElementById(nom).value = 0;
        }
        var tfo = document.getElementById(nom).value;
        tfo = parseFloat(tfo)-1;
        console.log ("valeur de "+nom+" = "+tfo);
        
        document.getElementById(nom).value = tfo;

        if(nom === 'enfant'){
            /*
            let elem = document.getElementById("tableau");
            elem.deleterow(-1);
            */
            let table = document.querySelector("table");
            table.deleteRow(-1);
        }
    }
}


/*function yearold() {
    if (document.getElementById("enfant").value === "") {
        document.getElementById("enfant").value = 0;
    }

    var nb_enfant = parseInt(document.getElementById("enfant").value);

    var ageEnfantHTML = "<tr id='age-enfant-row'>";
    ageEnfantHTML += "<td colspan='2'>Âge des enfants :</td>";
    ageEnfantHTML += "<td id='age-enfant-inputs'>";

    if (nb_enfant > 0) {
        for (var i = 0; i < nb_enfant; i++) {
            ageEnfantHTML += "<input required type='number' name='age' min='0' max='17' placeholder='Âge enfant " + (i + 1) + "'><br>";
        }
    }
    ageEnfantHTML += "</td></tr>";
    
    document.getElementById("age-enfant-row").innerHTML = ageEnfantHTML;
}
*/



function recherche(event) {
    event.preventDefault(); 

    var datDep = document.getElementById("dat-dep").value;
    var datArr = document.getElementById("dat-arr").value;
    var adulte = document.getElementById("adult").value;
    var enfant = document.getElementById("enfant").value;
    var chambre = document.getElementById("chambre").value;
    var professionnel = document.getElementById("voyage_pro").checked;

    console.log(datArr);
    if((datArr == "") && (datDep == "") ){
        alert("Les dates doivent être insiquer");s
    } else {
        var resultat = document.getElementById("resultat");
        resultat.innerHTML = ""; 

        var dateDepart = new Date(datDep);
        var dateArrivee = new Date(datArr);

        if (dateDepart >= dateArrivee) {
            resultat.innerHTML = "La date de départ doit être antérieure à la date d'arrivée.";
            resultat.classList.add("error");
        } else {
            if((adulte == "")||(chambre == "")||(enfant == "")){
                alert("Vous avez oublier des informations importante");
            }else{
                if(adulte <= 0 ){
                    resultat.innerHTML = "Nous ne pouvons louez des chambre qu'à des personnes majeurs.";
                    resultat.classList.add("error");
                } else{
                    resultat.innerHTML += "<h2>Résultat de la recherche</h2>";
                    resultat.innerHTML += "<span>Nombre d'adultes : " + adulte + "</span>";
                    resultat.innerHTML += "<span>Nombre d'enfants : " + enfant + "</span>";
                    resultat.innerHTML += "<span>Nombre de chambres : " + chambre + "</span>";
                    if (professionnel) {
                        resultat.innerHTML += "<span> voyage pour le travail:   oui</span>";
                    }else{
                        resultat.innerHTML += "<span> voyage pour le travail:    non</span>";
                    }
                }
            }
            resultat.classList.remove("error");
            resultat.classList.add("show-results");
        }
    }
}



