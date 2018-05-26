  

    var carNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
    var randomNumber = 0
    var randomItem = carNumber[Math.floor(Math.random() * carNumber.length)];
    var randomItem2 = carNumber[Math.floor(Math.random() * carNumber.length)];
    var randomItem3 = carNumber[Math.floor(Math.random() * carNumber.length)];
    var randomItem4 = carNumber[Math.floor(Math.random() * carNumber.length)];
    var totalCars = 0
    var wins = 0
    var losses = 0
    var random = Math.floor(Math.random() * 100) + 20;





    console.log("this :" + totalCars)
    $(document).ready(function () {


        //Sets initial number

        $("#display").text(function () {
            console.log(random)
            $("#display").text("Number to guess: "+random)
        })


        //sets the value for each car
        $("#car1").click(function () {
            total = total + randomItem;
            console.log("car1" + randomItem);
            totalCars = totalCars + randomItem;
            console.log(totalCars);
            $("#total").text(totalCars);

            if (totalCars == random) {
                winn()
            }
            else if (totalCars > random) {
                loss()
            }
        })
    })
    $("#car2").click(function () {
        $("#total").text(function () {
            totalCars = totalCars + randomItem2;
            console.log(totalCars);
            console.log("car2:" + randomItem2);
            $("#total").text(totalCars);

            if (totalCars == random) {
                winn();
            }
            else if (totalCars > random) {
                loss();
            }
        })
    })


    $("#car3").click(function () {
        $("#total").text(function () {
            totalCars = totalCars + randomItem3
            console.log(totalCars)
            console.log("car3:" + randomItem3)
            $("#total").text(totalCars)

            if (totalCars == random) {
                winn()
            }
            else if (totalCars > random) {
                loss()
            }
        })
    })

    $("#car4").click(function () {
        $("#total").text(function () {
            totalCars = totalCars + randomItem4
            console.log(totalCars)
            console.log("car4:" + randomItem4)
            $("#total").text(totalCars)

            if (totalCars == random) {
                winn()
            }
            else if (totalCars > random) {
                loss()
            }
        })

    })
    //    })

    function winn() {
        alert("You Win!")
        wins++;
        console.log("wins: ", wins)
        $("#won").text(wins)
        reset()
    }

    function loss() {
        alert("You Lose")
        losses++
        console.log("losses: ", losses);
        $("#loss").text(losses)
        reset()
    }

    //resets total

    function reset() {
        random = Math.floor(Math.random() * 100) + 20;
        console.log("reset: " + random)
        randomItem = carNumber[Math.floor(Math.random() * carNumber.length)];
        randomItem2 = carNumber[Math.floor(Math.random() * carNumber.length)];
        randomItem3 = carNumber[Math.floor(Math.random() * carNumber.length)];
        randomItem4 = carNumber[Math.floor(Math.random() * carNumber.length)];
        totalCars = 0
        $("#display").text("number to guess: "+random)

    }