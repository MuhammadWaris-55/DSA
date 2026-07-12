function print(n) {
    for (let i = 1; i <= n; i++) {
        let row = "";

        // leading spaces
        for (let s = 1; s <= n - i; s++) {
            row += " ";
        }

        // ascending part
        for (let j = 1; j <= i; j++) {
            row += String.fromCharCode(64 + j);
        }

        // descending part
        for (let j = i - 1; j >= 1; j--) {
            row += String.fromCharCode(64 + j);
        }

        console.log(row);
    }
}

print(4);