var readline = require('readline');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});
var lineNumber = 0;

var n, k, data;

rl.on('line', function(line){
	if(lineNumber === 0){
		n = line.split(' ')[0];
		k = line.split(' ')[1];
		data = [];
	}
	else if(lineNumber < n){
		data.push(line);
	}
	else{
		i.close();
		process.stdin.destroy();

		data = data.map(function(ln){
			return ln.split(' ').map(function(val){
				return parseInt(val, 10);
			});
		});
	   console.log(processData(data));
	}
	lineNumber++;
});

var processData = function(data){
	var balls = [1,2,3,4,5,6,7,8];
	var orig = [1,2,3,4,5,6,7,8];
	data.shift();

	data = data.map(function(line){
		return line.split(' ').map(function(val){
			return parseInt(val, 10);
		});
	});
	for(var i = 0; i < k; i++){
		for(var j = 0; j < n; j++){
			
			var ball1 = data[j][0] - 1;
			var ball2 = data[j][1] - 1;
			var temp = balls[ball1];
			balls[ball1] = balls[ball2];
			balls[ball2] = temp;
		}
		if(arrEqu(balls, orig)){
			k = i + 1 + (k % (i+1));
		}
	}

	return balls.join(' ');
}

var arrEqu = function(array1, array2){
	for(var i = 0; i < array1.length; i++){
		if(array1[i] != array2[i]){
			return false;
		}
	}
	return true;
}