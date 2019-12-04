var n = prompt('vvedite kolichestvo chasov')
while (isNaN(n)) { 
n = prompt('vvedite chislovoe znachenie!')
}
x = n * 3600 
alert('v '+(n)+' chasah -'+(x)+' secund')