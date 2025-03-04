const stocks = {
    Fruit : ["strawberry", "orange", "banana", "apple"],
    Liquid : ["water", "ice"],
    Packing : ["wrapper", "cone", "stick"],
    Extras : ["chocolate", "peanuts"]
}

const order = (fruit_index, call_production) => {
    setTimeout( () => {
        console.log(`${stocks.Fruit[fruit_index]} was selected`);

        call_production();

    }, 2000);
    
}

const production = () => {
    
    setTimeout(() => {
        console.log("Production has started");
        
        setTimeout(() => {
            console.log("Fruit has been chopped");

            setTimeout(()=>{
                console.log(`${stocks.Liquid[0]} and ${stocks.Liquid[1]} has been added`);

                setTimeout(() => {
                    console.log(`${stocks.Packing[0]} was chosen as packing`);

                    setTimeout(() => {
                        console.log(`${stocks.Extras[0]} was selected as topping`);

                        setTimeout(() => {
                            console.log("Ice cream will be served")
                        },10)
                    },3000)
                },2000)
            },1000)
        },2000)
    },0)
}

order(0,production)