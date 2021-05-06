// https://qiita.com/ryokkkke/items/a5177b45c4a61c593d2b

// a simple memoized function to add something
const memoizedAdd = () => {
    let cache = {};
    return (n) => { // クロージャなので一回リターンされたこの関数はcacheのデータを持ち続ける
      //if (n in cache) { // キャッシュにあるかどうか見てる
      if (cache[n]) { // この見方でもよいらしい・・・ キャッシュに存在しない場合は undefined 
                      // https://qiita.com/phi/items/723aa59851b0716a87e3
        console.log('Fetching from cache');
        console.log(cache);
        console.log(cache[n]);
        return cache[n]; // キャッシュに存在すればそれを返す
      }
      else { // 存在しない場合は普通に計算して、キャッシュに保存しておく
        console.log('Calculating result');
        console.log(cache);
        console.log(cache[n]);
        let result = n + 10;

        // cache[n] = result;
        // return result;

        // こんな返し方でも良いらしい・・・。わかりにくし・・・
        // return cache[n] = result;

        // ということは、これもあり？　ひと目でわかりにくいやんけ
        cache[n] = result
        let hoge = 0;
        return hoge = result;
      }
    }
  }
  // returned function from memoizedAdd
  const newAdd = memoizedAdd();

  console.log(newAdd(9)); // calculated
  console.log(newAdd(9)); // cached

  console.log(newAdd(16)); // calculated
  console.log(newAdd(16)); // cached