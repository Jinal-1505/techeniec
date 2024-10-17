function reArrange(arr, n) {
    let max = n - 1;
    let min = 0;

    for (let i = 0; i < n; i++) {
        if (i % 2 == 0) {
            arr[i] += arr[max];
        }
    }
}
