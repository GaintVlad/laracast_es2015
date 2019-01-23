const timer  = length => new Promise((resolve, reject)=>{
    console.log('Init Promise');

    setTimeout(()=>{
        console.log('Timeout done');
        resolve();
    },length);
});

timer(200, p0).then(()=> console.log('All done!')).then(()=>{

    (async ()=> {
        await timer(2000);
        console.log('Final step!')
    })();

});

