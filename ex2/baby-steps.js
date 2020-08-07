var sum = 0;
process.argv.forEach(element => {
    if(!isNaN(element)){
        sum += Number(element);
    }
});

console.log(sum);