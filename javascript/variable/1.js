var vscope = 'global';
function fscope(){
    vscope = 'local';
    console.log('함수안'+vscope);
}
fscope();
console.log('함수밖'+vscope);
