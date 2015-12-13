module.exports.averageTotalCost = function averageTotalCost(tc, q) {
    var atc = tc / q;
    return atc;
};
module.exports.totalVariableCost = function totalVariableCost(AVC, Q) {
    var TVC = AVC / Q;
    return AVC;
};
module.exports.averageVariableCost = function averageVariableCost(TVC, Q) {
    var AVC = TVC / Q;
    return AVC;
};
module.exports.averageFixedCosts = function averageFixedCosts(ATC, AVC) {
    var AFC = ATC / AVC;
    return AFC;
};
module.exports.totalCost = function totalCost(Q, AVC, AFC) {
    var TC = Q * (AVC + AFC);
    return TC;
};
module.exports.totalFixedCost = function totalFixedCost(TC, TVC) {
    var TFC = TC - TVC;
    return TFC;
};
module.exports.marginalCost = function marginalCost(tc1, tc2, output1, output2) {
    if (tc1 > tc2) {
        var changeTC = tc1 - tc2;
    }
    if (tc2 > tc1) {
        var changeTC = tc2 - tc1;
    }
    if (output1 > output2) {
        var changeOutput = output1 - output2;
    }
    if (output2 > output1) {
        var changeOutput = output2 - output1;
    }
    var MC = changeTC / changeOutput;
    return MC;
};
module.exports.marginalProduct = function marginalProduct(tp1, tp2, varcost1,
    varcost2) {
    if (tp1 > tp2) {
        var changeTC = tp1 - tp2;
    }
    if (tp2 > tp1) {
        var changeTC = tp2 - tp1;
    }
    if (varcost1 > varcost2) {
        var changeCost = varcost1 - varcost2;
    }
    if (varcost2 > varcost1) {
        var changeCost = varcost2 - varcost1;
    }
    var MP = changeTC / changeCost;
    return MP;
};
module.exports.marginalRevenue = function marginalRevenue(tr1, tr2, output1,
    output2) {
    if (tr1 > tr2) {
        var changeTR = tr1 - tr2;
    }
    if (tr2 > tr1) {
        var changeTR = tr2 - tr1;
    }
    if (output1 > output2) {
        var changeOutput = output1 - output2;
    }
    if (output2 > output1) {
        var changeOutput = output2 - output1;
    }
    var MR = changeTR / changeOutput;
    return MR;
};
module.exports.averageProduct = function averageProduct(TP, varFactor) {
    var AP = TP / varFactor;
    return AP;
};
module.exports.totalRevenue = function totalRevenue(price, quantity) {
    var tr = price * quantity;
    return tr;
};
module.exports.averageRevenue = function averageRevenue(TR, Q) {
    var AR = TR / Q;
    return AR;
};
module.exports.totalProduct = function totalProduct(AP, varFactor) {
    var TP = AP * varFactor;
    return TP;
};
module.exports.profitLoss = function profitLoss(TR, TC) {
    if (TR > TC) {
        var profit = TR - TC;
    }
    if (TC > TR) {
        var profit = TR - TC;
    }
    return profit;
};
