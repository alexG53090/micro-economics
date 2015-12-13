###micro-economics
Node Module for Calculating Firm-Level Economics

###Usage:

1. Npm install micro-economics
2. Require in your .js file
```javascript
var firm = require('micro-economics');
```

###Library Contains Methods For:

Average Total Cost - ATC
```javascript
firm.averageTotalCost(TC, Q);
```
Average Variable Cost - AVC
```javascript
firm.averageVariableCost(TVC, Q);
```
Fixed Cost - AFC
```javascript
firm.fixedCost(ATC, AVC);
```
Total Cost - TC
```javascript
firm.totalCost(AVC, AFC, Q);
```
Total Variable Cost - TVC
```javascript
firm.totalVariableCost(AVC, AFC, Q);
```
Total Fixed Cost - TFC
```javascript
firm.totalFixedCost(TC, TVC);
```
Marginal Cost - MC
```javascript
firm.marginalCost(totalCost1, totalCost2, output1, output2);
```
Marginal Product - MP
```javascript
firm.marginalProduct(totalProduct1, totalProduct2, varFactor1, varFActor2);
```
Marginal Revenue - MR 
```javascript
firm.marginalRevenuet(totalRevenue1, totalRevenue2, output1, output2);
```
Average Product - AP
```javascript
firm.averageProduct(TP, varFactor);
```
Total Revenue - TR
```javascript
firm.totalRevenue(P, Q);
```
Average Revenue - AR
```javascript
firm.totalVariableCost(AVC, AFC, Q);
```
Total Product - TP
```javascript
firm.totalVariableCost(AVC, AFC, Q);
```
