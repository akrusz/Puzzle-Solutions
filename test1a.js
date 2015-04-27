var fs = require('fs');
var path = require('path');

var filePath = path.join(__dirname, 'input1.txt');

fs.readFile(filePath, {encoding: 'utf-8'}, function(err,data){
    if (!err){
	    console.log(process(data.split('\n')));
    }else{
        console.log(err);
    }

});

var process = function(data){
	var orig = [1,2,3,4,5,6,7,8];
	var balls = [1,2,3,4,5,6,7,8];
	var n = data[0].split(' ')[0];
	var k = data[0].split(' ')[1];
	data.shift();

	data = data.map(function(line){
		return line.split(' ').map(function(val){
			return parseInt(val, 10);
		});
	});
	for(var j = 0; j < n; j++){
		
		var ball1 = data[j][0] - 1;
		var ball2 = data[j][1] - 1;
		var temp = balls[ball1];
		balls[ball1] = balls[ball2];
		balls[ball2] = temp;
	}

	var displacement = repeat(balls, k, n);
	return orig.map(function(val, index){
		return val + 
	});
}

var repeat = function(permutation, times, n){
	console.log(permutation)
	var displacement = permutation.map(function(val, index){
		return times * (val - index - 1) % n;
	});

	return displacement;
}