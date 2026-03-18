// sequential await vs parallel promise execution
function taskA(){
    return new Promise(function(resolve){
        setTimeout(function(){
           resolve("Task A Complete.");
    },1000);  
        });
    }
    function taskB(){
    return new Promise(function(resolve){
        setTimeout(function(){
           resolve("Task B Complete.");
    },1000);  
        });
    }
    async function runSequential(){
        console.time("Sequential");
        const a = await taskA();
        const b = await taskB();
        console.timeEnd("Sequential");
        console.log(a);
        console.log(b);
    }
    await runSequential();

    async function runparallel(){
        console.time("parallel");
        const results = await Promise.all([taskA(),taskB()]);
        console.timeEnd("parallel");
        console.log(results[0]);
         console.log(results[1]);
    }
    await runparallel();
       