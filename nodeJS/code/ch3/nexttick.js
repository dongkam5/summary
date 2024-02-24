setTimeout(()=>{
    console.log("immediate");
},0);

process.nextTick(()=>{
    console.log('nextTick');
});

Promise.resolve().then(()=>{console.log('promise')})