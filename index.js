function receivesAFunction (func) {
    return func();
}

function returnsANamedFunction () {
    return twoAdder = x => x + 2
}

function returnsAnAnonymousFunction () {
    return function () {
        return 'foo';
    }
}