const mc = require('checkdependencyc') ;

function print(a, b){
    console.log(mc.add(a,b) + ' update 3'); 
}

module.exports = {
    print
}