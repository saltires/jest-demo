function endsWith(str, match){
    if (!str || !match) {
        return new Error("endsWith函数调用时参数不能为空");
    }

    if (str === match) {
        return true;
    }

    let reg = new RegExp(match.replace(/\s*$/g, "") + "$");

    return reg.test(str.replace(/\s*$/g, ""));
}
module.exports = {
    endsWith
}