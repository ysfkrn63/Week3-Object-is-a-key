//DILARANG MENGGUNAKAN METHOD SORT, PELAJARI ALGORITMA SORTING YANG ADA DI GOOGLE
//saran sih pake bubblesort walau tidak efisien tapi bagus buat belajar sorting
function urutkanAbjad(str) {
  // you can only write your code here!
  var sorted = str.split("");
  var temp;
    //Selection sort
    for (var i = 0; i < str.length; i++) {
        for(var j = 0; j < (str.length - i - 1); j++) {
          if(sorted[j] > sorted[j + 1]) {
            temp = sorted[j];
            sorted[j] = sorted[j + 1];
            sorted[j+1] = temp;
          }
        }
    }
    return sorted.toString().replace(/,/g, "");
}

// TEST CASES
console.log(urutkanAbjad('hello')); // 'ehllo'
console.log(urutkanAbjad('truncate')); // 'acenrttu'
console.log(urutkanAbjad('developer')); // 'deeeloprv'
console.log(urutkanAbjad('software')); // 'aeforstw'
console.log(urutkanAbjad('aegis')); // 'aegis'