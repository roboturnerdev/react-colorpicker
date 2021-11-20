function choice(arr) {
    let rIdx = Math.floor(Math.random() * arr.length);
    return arr[rIdx];
}
export { choice };