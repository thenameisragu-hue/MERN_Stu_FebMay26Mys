const items = {
    item1:"Laptop",
    item2:"Server",
    item3:"cloudApi",
};
for(const [item,itemName] of Object.entries(items)){
    console.log(`${item}:${itemName}`);
}
