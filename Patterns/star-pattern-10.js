function printStars(n) {
    //increasing side
    for (let i = 1; i <= n; i++) {
        let row = ""
        for (let j = 1; j <= i; j++) {
            row += "*"
        }
        console.log(row);
    }

    //decreasing side
    for (let i = n - 1; i >= 1; i--) {
        let row = ""
        for (let j = 1; j <= i; j++) {
            row += "*"
        }
        console.log(row);
    }
}

printStars(5)