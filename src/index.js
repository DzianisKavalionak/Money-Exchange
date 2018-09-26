module.exports = function makeExchange(currency) {
    let summ = currency;

    if (summ <= 0) return {};
    if (summ > 10000) return {error: "You are rich, my friend! We don't have so much coins for exchange"};

    let h = 0;
    let q = 0;
    let d = 0;
    let n = 0;
    let p = 0;
    let money = {};
    function ext(summ) {
        if (summ >= 50) {
            h = h + 1;
            money["H"] = h;
            return ext(summ - 50);
        } else {
            if(summ >= 25) {
                q = q + 1;
                money["Q"] = q;
                return ext(summ - 25);
            } else {
                if (summ >= 10) {
                    d = d + 1;
                    money["D"] = d;
                    return ext(summ - 10);
                } else {
                    if (summ >= 5) {
                        n = n + 1;
                        money["N"] = n;
                        return ext(summ - 5);
                    } else { if (summ != 0) {
                        p = summ;
                        money["P"] = p;
                    }
                    }
                }
            }
        }
    }
    ext(summ);
    return money;
}
