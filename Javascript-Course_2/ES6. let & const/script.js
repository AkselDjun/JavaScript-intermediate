function makeArray() {
    var items = [];

    for (/*var*/ let i = 0; i < 10; i++) {
        var item = function () {
            console.log(i);
        };
        items.push(item);
    };

    return items;
};

var arr = makeArray();

arr[1]();
arr[3]();
arr[7]();