function getTime() {
    console.clear();
    let date = new Date();
    let res = '';
    if (date.getHours() < 10) res += "0" + date.getHours() + ":";
    else res += date.getHours() + ":";
    if (date.getMinutes() < 10) res += "0" + date.getMinutes() + ":"
    else res += date.getMinutes() + ":"
    if (date.getSeconds() < 10) res += "0" + date.getSeconds()
    else res += date.getSeconds()
    return res;
}
setInterval(() => { console.log(getTime()) }, 1000);