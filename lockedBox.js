function withBoxUnlocked(body) {
  if(!box.locked==true){
    try{
      body();
    }catch(e){
      console.log(e);
    }
  }else{
    box.unlock();
    try{
      body();
    }catch(e){
      console.log(e);
    }finally{      
      box.lock();
    }
  }
}

