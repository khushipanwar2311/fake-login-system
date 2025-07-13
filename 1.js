function washClothes(callback) {
    console.log("Washing clothes");
    callback();
    }

    function dryClothes() {

        console.log("Drying clothes");
    }

    washClothes(dryClothes);