function outter(){
    function inner(){
        var title = 'coding everybody';
        console.log(title);
    }
    inner();
}
outter();

function outter(){
    var title = 'coding everybody';
    function inner(){
        console.log(title);
    }
    inner();
}
outter();
