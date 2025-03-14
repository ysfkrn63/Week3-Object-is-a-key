//cek apakah angka yang dikirim adalah angka prima atau bukan?
//cek google bagi yang ga tau apa itu angka prima
function angkaPrima(angka) {
  // you can only write your code here!
  //Bilangan faktor adalah bilangan yang di tentukan 2 faktor bilangan 1 dan bilangan sendiri
  var total_faktor=0;
  for(var i=0; i <= angka; i++) {
    angka%i == 0 ? total_faktor++: false;
  }
  return total_faktor > 2 ? false:true;
}

// TEST CASES
console.log(angkaPrima(3)); // true
console.log(angkaPrima(7)); // true
console.log(angkaPrima(6)); // false
console.log(angkaPrima(23)); // true
console.log(angkaPrima(33)); // false