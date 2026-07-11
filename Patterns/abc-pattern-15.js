function print(n) {
    for (let i = n; i >= 1; i--) {
        let row = ""
        for (let j = 1; j <= i; j++) {
            row += String.fromCharCode(64 + j)
        }
        console.log(row)
    }
}

print(5)