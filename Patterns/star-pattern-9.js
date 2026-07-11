function printStars(n) {

    for (let i = 1; i <= n; i++){
        let row = "";

        //spaces before stars
        for(let s = 1; s <= n- i; s++){
            row += "  " //two spaces to match star+space width  
        }

        //stars with gaps
        for(let j = 1; j <= (2 * i - 1); j++){
            row += "* "
        }
        console.log(row)
    }
}

printStars(5)

function printStars2(n) {

    for (let i = n; i >= 1; i--){
        let row = "";

        //spaces before stars
        for(let s = 1; s <= n- i; s++){
            row += "  " //two spaces to match star+space width  
        }

        //stars with gaps
        for(let j = 1; j <= (2 * i - 1); j++){
            row += "* "
        }
        console.log(row)
    }
}

printStars2(5)