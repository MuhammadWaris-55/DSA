function printStars(n) {
    //upper half
    for (let i = 1; i <= n; i++) {
        let stars = n - i + 1;
        let gap = 2 * (i-1);
        console.log("*".repeat(stars) + " ".repeat(gap) + "*".repeat(stars))
    }

    //lover half
    for (let i = n; i >= 1; i--) {
        let stars = n - i + 1;
        let gap = 2* (i-1);
        console.log("*".repeat(stars) + " ".repeat(gap) + "*".repeat(stars))
    }
}

printStars(5)