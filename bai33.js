function kt() {
    prompt('solon', 'nhập số a')
    prompt('sonho', 'nhập số b')
    let a = 'solon';
    let b = 'sonho';
    let c = (a % b);
    a = parseInt(a)
    b = parseInt(b)
    if (c==0) {
        alert('a chia hết cho b')
    }
    else {
        alert('a không chia hết cho b')
    }
}