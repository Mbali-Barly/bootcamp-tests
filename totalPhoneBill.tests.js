describe('Test my totalPhoneBillFunction' , function(){
    it("it should return calculate the total bill for the data " , function(){
        assert.equal('R7.45', totalPhoneBill('call, sms, call, sms, sms'));

        assert.deepEqual([2,2],[2,2]);
    });
    it("it should return calculate the total bill for the data " , function(){
        assert.equal('R3.40', totalPhoneBill('call, sms'));

        assert.deepEqual([2,2],[2,2]);
    });
    it("it should return calculate the total bill for the data " , function(){
        assert.equal('R1.30', totalPhoneBill('sms, sms'))

        assert.deepEqual([2,2],[2,2]);
    });

});