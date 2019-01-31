var jsonStr = '{"mike":"Book","jason":"sweater","chels":"iPad"}';
obj = JSON.parse(jsonStr);
console.log(Object.values(obj));