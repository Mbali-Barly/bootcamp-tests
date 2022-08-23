function totalPhoneBill(phone) {
    var tsholo = phone.split(',');
    const sms = 0.65
    const calls = 2.75
    let bill = 0
   for (var i=0;i<tsholo.length;i++) {
     const mbali = tsholo[i].trim();
   if (mbali === 'call') {
     bill = bill + calls
   } else {
     bill = bill + sms}
   }
     return 'R' + bill.toFixed(2)
   }
   
