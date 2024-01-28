## Eat-n-split

### Issues

1. Enter bill amount 100 and userExpense 50, then change bill amount to 30, which makes `userExpense > amount`
2. If you enter the values in SplitBill and change the friend, then the state values remain the same (this is because the component is not re-rendered)
