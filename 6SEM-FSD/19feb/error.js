function dosomething(){
  throw new Error("a error is thrown from desomething");
}

function init(){
  try{
    dosomething();
  }catch(e){
    console.log(e);
  }
  console.log("after successfully error handling");
}
init();