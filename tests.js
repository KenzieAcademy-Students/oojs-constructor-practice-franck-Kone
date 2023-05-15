/**
 * TESTS -----------------------------------------------------------
 * Do not modify these, but use them to verify that your code works.
 */

function kenzieAssertModified(paramObject) {
    let actual = paramObject.actual;
    let expected = paramObject.expected;
    if (paramObject.passCondition || actual === expected) {
        console.log(`PASS Test #${paramObject.testNumber} ${paramObject.testFunction}`);
    } else {
        console.error(`FAIL Test #${paramObject.testNumber} ${paramObject.testFunction}`, {
			test: paramObject.failureMessage,
			expected: paramObject.failExpected || expected,
			actual: paramObject.failactual || actual,
		});
    }
}

let coin = new Coin();

coin.flip();
console.log(coin.toString());
let actual = coin.toString();
kenzieAssertModified({
    actual: actual,
    passCondition: actual === "heads" || actual === "tails",
    testNumber: 1,
    testFunction: "toString",
    failureMessage: "The coin should be heads or tails",
    failExpected: "heads or tails",
});

let chickenCoop = new Coop(3);
actual = chickenCoop.numChickens;
kenzieAssertModified({
    actual: actual,
    expected: 3,
    testNumber: 2,
    testFunction: "numChickens",
    failureMessage: "There should be 3 chickens",
});

actual = chickenCoop.gatherEggs();
kenzieAssertModified({
    actual: actual,
    passCondition: actual >= 3 && actual <= 9,
    testNumber: 3,
    testFunction: "gatherEggs",
    failureMessage: "There should be between eggs from the 3 chickens",
    failExpected: "between 3 and 9",
});

let feedMachine = new FeedMachine();
kenzieAssertModified({
    actual: feedMachine.food,
    expected: 12,
    testNumber: 4,
    testFunction: "food",
    failureMessage: "The feed machine should start with 12 food",
});

kenzieAssertModified({
    actual: feedMachine.numCoins,
    expected: 0,
    testNumber: 5,
    testFunction: "numCoins",
    failureMessage: "The feed machine should start with 0 coins",
});

actual = feedMachine.dispense(); // Try it without a coin
kenzieAssertModified({
    actual: actual,
    expected: 0,
    testNumber: 6,
    testFunction: "dispense",
    failureMessage: "The feed machine should dispense 0 food without a coin",
});

actual = feedMachine.dispense("I promise this is a coin"); // Try it with a "fake" coin
kenzieAssertModified({
    actual: actual,
    expected: 0,
    testNumber: 7,
    testFunction: "dispense",
    failureMessage: "The feed machine should dispense 0 food without a coin",
});

actual = feedMachine.dispense(coin);
kenzieAssertModified({
    actual: actual,
    expected: 5,
    testNumber: 8,
    testFunction: "dispense",
    failureMessage: "The feed machine should dispense 5 food",
});

kenzieAssertModified({
    actual: feedMachine.food,
    expected: 7,
    testNumber: 9,
    testFunction: "food",
    failureMessage: "The feed machine should have 7 food after dispensing once",
});

kenzieAssertModified({
    actual: feedMachine.numCoins,
    expected: 1,
    testNumber: 10,
    testFunction: "numCoins",
    failureMessage: "The feed machine should have 1 coin",
});

feedMachine.dispense(coin);
actual = feedMachine.dispense(coin);
kenzieAssertModified({
    actual: actual,
    expected: 2,
    testNumber: 11,
    testFunction: "dispense",
    failureMessage: "The feed machine should dispense its last 2 food",
});

kenzieAssertModified({
    actual: feedMachine.food,
    expected: 0,
    testNumber: 12,
    testFunction: "food",
    failureMessage: "The feed machine should have 0 food left",
});

kenzieAssertModified({
    actual: feedMachine.numCoins,
    expected: 3,
    testNumber: 13,
    testFunction: "numCoins",
    failureMessage: "The feed machine should have 3 coins",
});
