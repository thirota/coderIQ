// M = 10;
// N = 100;

M = 6;
N = 6;

// remain: 残りの人数
// pre: 直前のテーブルへ配置した人数（最小2人、最大10人）
function check(remain, pre) {
    console.log("check start. remain: " + remain + ", pre: " + pre);

    if (remain < 0) {
        console.log("remain is under 0.");
        return 0;
    }
    
    // XXX なぜ 1 を返却している？
    // 100人全員の配置が終了＝1パターン完成したから？
    if (remain === 0) {
        console.log("remain is 0.");
        return 1;
    }

    let cnt = 0;
    for (let i = pre; i <= M; i++) {
        console.log("remain: " + remain + ", pre: " + pre + ", i: " + i);
        cnt += check(remain - i, i);
    }

    console.log("return " + cnt);
    return cnt;
}

console.log(check(N, 2));