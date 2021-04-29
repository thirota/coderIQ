//再帰について復習
//https://qiita.com/jumpyoshim/items/20e6b5e70efa466699b4

// m: はさみの数（人数）
// n: 棒の長さ
// current: 棒の数
function cutbar(m, n, current) {
    // 棒の数が棒の長さと同じか多いとき
    // 切り終えた
    if (current >= n) {
        return 0;
    }

    // 棒の数よりもはさみの数の方が多いとき
    // すべてのはさみが使えるため、すべての棒を切断でき、棒の数は2倍になる
    if (current < m) {
        // XXX なぜ +1 してんの？（X回目に+1？）
        return 1 + cutbar(m, n, current * 2);
    }

    // それ以外
    // 棒の数が多く、はさみが余る
    // はさみでカットした分だけ増えるので +m
    // XXX なぜ +1 してんの？（X回目に+1？）
    return 1 + cutbar(m, n, current + m);
}

console.log(cutbar(3, 20, 1));
console.log(cutbar(5, 100, 1));
