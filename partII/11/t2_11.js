var n = prompt('Enter the time interval in the format hours / days / weeks / months')
if (n.includes('hour')) {
	h = parseInt(n) * 3600
	alert((h)+' second in '+(n))
}
if (n.includes('day')) {
	d = parseInt(n) * 86400
	alert((d)+' second in '+(n))
}
if (n.includes('week')) {
	w = parseInt(n) * 604800
	alert((w)+' second in '+(n))
}
if (n.includes('month')) {
	m = parseInt(n) * 2419200
	alert((m)+' second in '+(n))
}
else alert('Error')