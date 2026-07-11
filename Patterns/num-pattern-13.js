function printNum(n) {
    let counter = 1;

    for (let i = 1; i <= n; i++) {
        let row = "";
        for (let j = 1; j <= i; j++) {
            row += counter + " ";
            counter++;
        }
        console.log(row);
    }
}

printNum(5)