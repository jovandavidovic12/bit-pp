function testError (param = 0 ) {
    try {
        console.log('Start of try turns')
        b;
        console.log('Continue')
    } catch (error){
        console.log(error)
    }
} 
testError(0)