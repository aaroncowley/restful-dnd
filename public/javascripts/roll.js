function roll(num) {
    var res;
    var rand = Math.random();
    if([4,6,8,10,12,20,100].includes(num)){
        res = rand % num;
    }
    return res;
}
