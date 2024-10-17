function spiralMatrix(no) {
    let top = 0;
    let left = 0;
    let right = no.length[0] - 1;
    let bottom = no.length - 1;
    let result = [];

    console.log("aaaaa");
    while (top < bottom && left < right) {
        for (let i = left; i <= right; i++) {
            console.log("111111");
            result.push(no[top][i]);
        }
        top++;

        for (let i = top; top <= bottom; i++) {
            result.push(no[i][right]);
        }
        right--;

        if (top <= bottom) {
            for (let i = right; i >= left; i--) {
                result.push(no[bottom][i]);
            }
            bottom--;
        }

        if (left <= right) {
            for (let i = bottom; i >= top; i--) {
                result.push(no[i][left]);
            }
            left++;
        }
    }
    console.log(result);

    console.log("result", result.join(" "));
}

matrix = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
spiralMatrix(matrix);
