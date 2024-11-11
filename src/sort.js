
const obj = {name: 'мечник', health: 10, level: 2, attack: 80, defence: 40};
const order = ["name", "level"];

function orderByProps(obj, order) {
    const result = [];

    for (let key in order) {
        if (key in obj) {
            result.push({ key, value: obj[key] });
            
        };
    };

    const sort = Object.keys(obj).filter(key => !order.includes(key)).sort();
    
    return result;
};




