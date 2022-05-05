const names= ['Noah', 'Liam', 'Mason', 'Jacob', 'Robot', 'William', 'Ethan', 'Michael', 'Alexander'];

const addPrefix = (arr, str) => {
    const newArr = [];
    for (let i = 0; i < arr.length; i++) {
        arr[i] = `${str} ${arr[i]}`;
        newArr.push(arr[i]);
    }
    return newArr;
}

console.log(addPrefix(names, 'Mr'));