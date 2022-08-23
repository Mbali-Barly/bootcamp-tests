describe('Test my isFromBellvilleFunction' , function(){
    it("it should return 'true' if a registration number is for Bellville " , function(){
        assert.equal(isFromBellville('CJ 123'), true);

        assert.deepEqual([2,2],[2,2]);
    });
    it("it should return 'false' if a registration number is not for Bellville " , function(){
        assert.equal(isFromBellville('CY 123'), false);

        assert.deepEqual([2,2],[2,2]);
    });

});
// const reg = isFromBellville('CJ 123')
//    console.log(reg)