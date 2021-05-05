function makeBar(m, n) {
    let count = 0; // 処理回数
    let current = 1; // 現在の棒の長さ（最初は1cmから）
    while (n > current) {
        console.debug("current: " + current);
        // n になるまで結合を続ける
        current += (current < m) ? current : m;
        count += 1;
    }
    console.log("count: " + count);
    console.debug("current: " + current);
}

makeBar(3, 10);
makeBar(3, 20);
makeBar(5, 100);

