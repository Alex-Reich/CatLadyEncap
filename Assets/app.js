function Catlady() {

    //private

    var cat = new Cat("Mr. Snibbley", "//placehold.it/100x100", 3)

    var items = {
        box: new Item("box", -.1),
        catNip: new Item("CatNip", .5),
        dog: new Item("Dog", 2)
    }

    function Cat(name, img, tolerance) {
        this.name = name
        this.img = img
        this.tolerance = tolerance
        this.pets = 0
        this.currentMood = 0
        this.mood = ["happy", "bitey"]
        this.modifiers = []
        this.petOptions = {
            head: 1,
            belly: 2,
            tail: 100
        }
    }

    function Item(name, effect) {
        this.name = name
        this.effect = effect
    }

    function drawCat() {
        var template = `
<img src="${cat.img}" alt="">
<h1>Name: ${cat.name}</h1>
<h2>Status: ${cat.mood[cat.currentMood]}</h2>
<button onclick="catLady.pet('head')">Pet head</button>
<button onclick="catLady.pet('belly')">Pet belly</button>
<button onclick="catLady.pet('tail')">Pull tail</button>
<button onclick="catLady.giveItem('box')">Catnip</button>
<button onclick="catLady.giveItem('catNip')">Box</button>
<button onclick="catLady.giveItem('dog')">Dog</button>
<button onclick="catLady.reset">Reset</button>
`
        document.getElementById("cat").innerHTML = template
    }

    function checkStatus() {
        if (cat.pets >= cat.tolerance) {
            cat.currentMood = 1
            drawCat()
        }
    }

    //public

    this.makeCat = function makeCat(event) {
        event.preventDefault();
        var data = event.target
        cat = new Cat(data.name.value, data.imgUrl.value, data.tolerance.value)
        drawCat()
    }

    // this.pet = function pet() {
    //     cat.pets += 1 + cat.modifier
    //     checkStatus()
    // }

    this.pet = function pet(location) {
        cat.pets += cat.petOptions[location] + cat.modifiers
        checkStatus()
    }
    this.giveItem = function giveItem(type) {
        cat.modifiers.push(items[type])

    }


    this.pet = function catNip() {
        cat.modifiers = -.5
    }

    this.reset = function reset() {
        cat.pets = 0
        cat.currentMood = 0
        drawCat()
    }
    drawCat()
}
var catLady = new Catlady()