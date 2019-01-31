function count(string,char) {
    var re = new RegExp(char,"gi");
    return string.match(re).length;
   }
   
   var str = 'I will practice survival skills';
   console.log(count(str,'s'));