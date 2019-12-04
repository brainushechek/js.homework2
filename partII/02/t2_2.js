var str = 'abcde'
console.log(str[0])
console.log(str[1])
console.log(str[4])
for (var i = 0; i <= 4; i++) 
if (str[i] == 'a' || str[i] == 'b' || str[i] == 'e') {
	console.log('I know this letter - ', str[i])
}