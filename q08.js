//20210503
//TIMEUP

let pt = {
    x:0,
    y:0
};

let life = 12;

let cleaned = [];

function isCleaned(cur) {
    for (let i = 0; i < cleaned)
}

function clean(cur) {
    if (life <= 0) {
        return 0;
    }

    cleaned.push(area);
    life--;
    clean({x:cur.x + 1, y: cur.y});
    clean({x:cur.x - 1, y: cur.y});
    clean({x:cur.x, y: cur.y + 1});
    clean({x:cur.x, y: cur.y - 1});
}