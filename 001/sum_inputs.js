var total = 0;

for(let i = 1; i < process.argv.length; i++) {
    if(i !== 1){
	total = total + Number(process.argv[i])
    }
}

console.log(total);
