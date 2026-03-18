// await with non-promise values

function getReadyValue(){
    return 25;
}

function getDelayedvalue(){
    return Promise.resolve(75);
}

async function showValues(){
    const ReadyValue = await getReadyValue();
    const DelayedValue = await getDelayedvalue();

    console.log("ReadyValue: ", ReadyValue);
    console.log("DelayedValue: ", DelayedValue);
}

showValues();