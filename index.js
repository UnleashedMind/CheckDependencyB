const mc = require('checkdependencyc') ;

function print(a, b){
    console.log(mc.add(a,b) + ' update 2'); 
}

module.exports = {
    print
}