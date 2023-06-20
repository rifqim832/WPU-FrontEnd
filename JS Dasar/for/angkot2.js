var angkot = 1;
var angkotberoprasi = 5;
var jumlahAngkot = 10;
while(angkot <= angkotberoprasi){
    console.log("Angkot NO." + angkot + " beroprasi dengan baik" );
    angkot++;
}
for(var angkotberoprasi = angkotberoprasi + 1; angkotberoprasi <= jumlahAngkot; angkotberoprasi++){
    console.log("Angkot NO." + angkotberoprasi + " sedang tidak beroprasi");
}