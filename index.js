const mc = require('checkdependencyc') ;

function print(a, b){
    console.log(mc.add(a,b)); 
}

module.exports = {
    print
}