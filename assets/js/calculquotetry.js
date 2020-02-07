// Residential Calculation


function calculsResidential() {
    console.log(calculsResidential);

    var numapparts = $("#resapparts").val();
    console.log(numapparts);

    var numfloors = $("#resfloors").val();
    console.log(numfloors);

    /*On divise le nombre de  logements par le nombre d’étages (excluant le nombre de sous-sols)  
    pour obtenir une moyenne de logements par étages et on a besoin  d’une cage d'ascenseur à tous les 6 appartements.*/

    var averageperfloor = Math.ceil(numapparts / (numfloors*6));
    console.log(averageperfloor);

    /*Si l’appartement a  plus de 20 étages, il faut prévoir deux colonnes d'ascenseurs 
    et ainsi  doubler les nombres de cages d'ascenseurs. On ajoute donc une  nouvelle 
    colonne à chaque tranche de 20 étages*/

    var numcages = Math.ceil(numfloors / 20);
    console.log(numcages);

    var elevatorsneeded = parseInt(averageperfloor) * parseInt(numcages);
    console.log(elevatorsneeded)
    

    $("#elevatorsneeded").val(elevatorsneeded);

};

 // Commercial Calculation

    function calculsCommercial(){
   
    var elevatorsneeded = $('#comcolumns').val();
    console.log(elevatorsneeded)

    // le nombre de cages  d'ascenseurs à déployer est spécifié et le nombre de cages estimées  est égal au nombre requis.

    $("#elevatorsneeded").val(elevatorsneeded);
        
};        



 // Corporative Calculation

    function calculsCorporative(){
    console.log(calculsCorporative);

    //var numcompanies = $("#corcompanies").val();
       

    var numfloors = $("#corfloors").val();
        

    var numbasements = $("#corbasements").val();
        
    var totalfloors = parseInt(numfloors) + parseInt(numbasements);
    console.log('Total Floors:', totalfloors);

    //var numparking = $("#corparking").val();
       

    var nummaxoccupants = $("#cormaxoccupants").val();
     


             /*on multiplie le  nombre d’occupants maximum par étage par le nombre d’étages
               (incluant le nombre de sous-sols) pour obtenir le nombre d’occupants  total.*/

            var numofoccupants = Math.ceil(parseInt(nummaxoccupants * totalfloors));
            console.log('Number of occupants', numofoccupants);

             /*Le nombre d'ascenseurs requis est déterminé par le nombre  d’occupants divisé par 1000.*/
            
            numofelevators = Math.ceil(numofoccupants/ 1000)
            console.log('Number of elevators:', numofelevators);
    
            /*On divise le nombre d’étages (incluant le  nombre de sous-sols) par 20 pour obtenir le nombre 
               de colonnes  d'ascenseurs requises.*/ 

            var numcolumn = Math.ceil(totalfloors/ 20);
            console.log('Nombre de columns:', numcolumn);

            /*Le nombre total d'ascenseurs est déterminé  par le nombre 
               de cages d'ascenseurs divisé par le nombre de  colonnes.*/

            var elevatorsneededpercolumn = Math.ceil(numofelevators/numcolumn);
            console.log('Nombre elevators/Column:', elevatorsneededpercolumn);

            elevatorsneeded = elevatorsneededpercolumn * numcolumn;
            console.log('Nombre elevators requis:', elevatorsneeded);
   
            $("#elevatorsneeded").val(elevatorsneeded);

     };
     


// // Hybrid Calculation


    function calculsHybrid(){
    console.log(calculsHybrid);


    /* DONT NEED IT
        var numcompanies = $("#hybcompanies").val();*/

    var numfloors = $("#hybfloors").val();

    var numbasements = $("#hybbasements").val();


        var totalfloors = parseInt(numfloors) + parseInt(numbasements);
        console.log('Total Floors:', totalfloors);


    /* DONT NEED IT
        var numparking = $("#hybparking").val();*/

    var nummaxoccupants = $("#hybmaxoccupantsperfloor").val();

    /* DONT NEED IT
        var nummaxofhoursofactivity = $("#hybmaxofhoursofactivity").val();*/

        /*on multiplie le  nombre d’occupants maximum par étage par le nombre d’étages
        (incluant le nombre de sous-sols) pour obtenir le nombre d’occupants  total.*/

        var numofoccupants = Math.ceil(parseInt(nummaxoccupants * totalfloors));
        console.log('Number of occupants', numofoccupants);

        /*Le nombre d'ascenseurs requis est déterminé par le nombre  d’occupants divisé par 1000.*/

        numofelevators = Math.ceil(numofoccupants / 1000)
        console.log('Number of elevators:', numofelevators);

        /*On divise le nombre d’étages (incluant le  nombre de sous-sols) par 20 pour obtenir le nombre 
           de colonnes  d'ascenseurs requises.*/

        var numcolumn = Math.ceil(totalfloors / 20);
        console.log('Nombre de columns:', numcolumn);

        /*Le nombre total d'ascenseurs est déterminé  par le nombre 
           de cages d'ascenseurs divisé par le nombre de  colonnes.*/

        var elevatorsneededpercolumn = Math.ceil(numofelevators / numcolumn);
        console.log('Nombre elevators/Column:', elevatorsneededpercolumn);

        elevatorsneeded = elevatorsneededpercolumn * numcolumn;
        console.log('Nombre elevators requis:', elevatorsneeded);

        $("#elevatorsneeded").val(elevatorsneeded);
     
 };






//  Calculation for standard, premium, excelium prices + installation % prices and there goes the dynamite! :)





function costStandard() {
    console.log(costStandard);

    console.log($("#elevatorsneeded").val())
    var standardprice = $("#elevatorsneeded").val() * 7565;
    $("#elevatorprice").val(standardprice);

    var pourcent10 = Math.ceil((standardprice * 10) / 100);
    $("#installationfee").val(pourcent10);

    var total = Math.ceil(standardprice + pourcent10);
    $("#totalcost").val(total);
 }


function costPremium() {
    console.log(costPremium);

    var premiumprice = $("#elevatorsneeded").val() * 12345;
    $("#elevatorprice").val(premiumprice);

    var pourcent13 = Math.ceil((premiumprice * 13) / 100);
    $("#installationfee").val(pourcent13);

    var total = Math.ceil(premiumprice + pourcent13);
    $("#totalcost").val(total);
}


function costExcelium() {
    console.log(costExcelium);
    
    var exceliumprice = $("#elevatorsneeded").val() * 15400;
    $("#elevatorprice").val(exceliumprice);

    var pourcent16 = Math.ceil((exceliumprice * 16) / 100);
    $("#installationfee").val(pourcent16);

    var total = Math.ceil(exceliumprice + pourcent16);
    $("#totalcost").val(total);

}


