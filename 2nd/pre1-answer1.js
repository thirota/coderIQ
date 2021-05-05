M = 10;
N = 100;

// remain: 残りの人数
// pre: 直前のテーブルへ配置した人数（最小2人、最大10人）
function check(remain, pre) {

    if (remain < 0) return 0;
    
    // XXX なぜ 1 を返却している？
    if (remain === 0) return 1;

    let cnt = 0;
    for (let i = pre; i <= M; i++) {
        cnt += check(remain - i, i);
    }

    return cnt;
}

console.log(check(N, 2));