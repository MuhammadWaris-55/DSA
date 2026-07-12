function print(n) {

    for (let i = 1; i <= n; i++) {
        let row = ""

        for (let j = n - i; j <= n - 1; j++) {
            row += String.fromCharCode(65 + j)
        }
        console.log(row)
    }
}

print(5);