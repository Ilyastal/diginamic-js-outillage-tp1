var number = function () {};
number.prototype.log = function () {
    var tab =[];
    for(var i=1; i<=100; i++) {
       
        tab.push(i);
     }
     return tab;
}
exports.number = number;

var even = function () {};

even.prototype.log = function () {
    var tab1 =[];
    for(var i=1; i<=100; i++) {
        if(i % 2 === 0){
            tab1.push(i);
           }
     }
     return tab1;
}

exports.even = even;

var odd = function () {};
odd.prototype.log = function () {
    var tab2 =[];
    for(var i=0; i<=100; i++) {
        if(i % 2 !== 0){
            tab2.push(i);
           }
     }
     return tab2;
}

exports.odd = odd;



