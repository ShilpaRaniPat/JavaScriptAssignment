var myObj =
[{'name':'Saurabh', 'age': 30, 'occupation': "Team Leader"},
{'name':'Anupriya', 'age': 32, 'occupation': "Team Leader"},
{'name':'Kalyani', 'age': 25, 'occupation': "Programmer"},
{'name':'Damodaran', 'age': 27, 'occupation': "Programmer"},
{'name':'Krishnakath', 'age': 22, 'occupation': "Programmer"},
{'name':'Venketraman', 'age': 28, 'occupation': "Programmer"}];
var byAge = myObj.slice(0);
byAge.sort(function(a,b) {
    var x = a.age;
    var y = b.age;
    return x < y ? -1 : x > y ? 1 : 0;
  
});
console.log(byAge);

function getFields(input, field) {
    var output = [];
    for (var i=0; i < input.length ; ++i)
        output.push(input[i][field]);
    return output;
}

var result = getFields(myObj, "name");
console.log(result);

var names = myObj.map(function(obj) { return obj.name; });
//names= names.filter(function(v,i) { return names.indexOf(v) == i; });

console.log(names); 

var diffObj={ 'Team Leader' : [{'name':'Saurabh', 'age':30},{'name':'Anupriya', 'age':32}],
'Programmer': [{'name':'Kalyani', 'age':25},{'name':'Damodaran', 'age': 27,},{'name':'Krishnakath', 'age': 22},{'name':'Venketraman', 'age': 28}]}

console.log(diffObj);

var result3 = myObj.filter(obj => {
    return obj.occupation === 'Programmer'
  })
  console.log(result3);


