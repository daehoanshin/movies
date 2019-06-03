function factory_movie(title){
    return {
        get_title : function (){
            return title;
        },
        set_title : function(_title){
            if(typeof _title == 'String') {
              title = _title;
            } else {
                console.log('제목은 문자열이어야 한다.');
            }
        }
    }
}
var ghost = factory_movie('Ghost in the shell');
var matrix = factory_movie('Matrix');

console.log(ghost.get_title());
console.log(matrix.get_title());

ghost.set_title('공각기동대');

console.log(ghost.get_title());
console.log(matrix.get_title());
