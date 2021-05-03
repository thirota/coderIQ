const N = 12;

function isCleaned(log, next_pos) {
    for (let i = 0; i < log.length; i++) {
        if (log[i][0] === next_pos[0] && log[i][1] === next_pos[1]) {
            return true;
        } 
    }
    return false;
}

function move(log) {
    if (log.length === (N+1)) {
        return 1;
    }

    let cnt = 0;
    //const pt = [[0,1],[0,-1],[1,0],[-1,0]];
    const pt = [[0,1],[0,-1]];
    for (let i = 0; i < pt.length; i++) {
        let next_pos = [log[log.length - 1][0] + pt[i][0], log[log.length - 1][1] + pt[i][1]];
        if (!isCleaned(log, next_pos)) {
            log.push(next_pos);
            cnt += move(log);
        }
    }
//    console.log(cnt);
    return cnt;
}

console.log(move([[0,0]]));
