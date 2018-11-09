function outter(){
    var title = 'coding everybody';
    return function(){
        console.log(title);
    }
}
inner = outter();
inner();
