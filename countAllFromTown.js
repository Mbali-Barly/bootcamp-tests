function countAllFromTown(regNum, idNum) {
    var mpho = []
     var tsholo = regNum.split(',');
   for (var i=0;i<tsholo.length;i++) {
     const mbali = tsholo[i].trim();
   if (mbali.includes(idNum)) {
     mpho.push(mbali);
   }
   }
    //  console.log(mpho.length)
     return mpho.length
     }