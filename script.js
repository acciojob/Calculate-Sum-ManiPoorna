//your JS code here. If required.
document.getElementById("sum_btn").addEventListener('click',()=>{
	let sum = +document.getElementById("n1").value+(+document.getElementById("n2").value)
	document.getElementById("Sum").innerText = sum;
})