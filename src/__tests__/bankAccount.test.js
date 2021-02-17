import bankAccount from  '../bankAccount';

describe('Bank account methods and properties', () => {
    beforeEach(() => {
        bankAccount.balance = 1000;
    })

    test('Initial balance is 1000', () => {
        expect(bankAccount.balance).toBe(1000)
    })

    test('depositMoney should correctly alter the balance', () => {
        bankAccount.depositMoney(2000)
        expect(bankAccount.balance).toBe(3000);
    })

    test('withdrawMoney should correctly alter the balance', () => {
        bankAccount.withdrawMoney(1000);
        expect(bankAccount.balance).toBe(0);
    })
})