function printNum(n) {
    for (let i = 1; i <= n; i++) {
        let row = ""

        //left half
        for (let j = 1; j <= i; j++) {
            row += j
        }

        // gap
        for (let s = 1; s <= 2 * (n - i); s++){
            row += " "
        }

        //right half
        for(let j = i; j >= 1; j--){
            row += j
        }
        console.log(row)
    }
}

printNum(5)