function printStars(n) {
   for (let i = 1; i <= 2 * n - 1; i++) {
        let stars;

        // Upper half
        if (i <= n) {
            stars = i;
        //lower half
        } else {
            stars = 2 * n - i;
        }

        // Gap between left and right stars.
        let spaces = 2 * (n - stars);

        //making row
        console.log("*".repeat(stars) + " ".repeat(spaces) + "*".repeat(stars));
    }
}

printStars(5)