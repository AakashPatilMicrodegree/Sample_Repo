
function update_details(){

    // update watch name 
    const card_name = document.querySelector("#watch1 .watch-name");
    card_name.textContent = " Watch Name :Casio3";

    // chage the model name
    const watch_model = document.querySelector("#watch1 .watch-model");
    watch_model.textContent = "Model Name :  c3";

    // change the price of the watch
    const watch_price = document.querySelector("#watch1 .watch-price");
    watch_price.textContent = "Price : 4000/-";

}

function add_watch(){
    const watch_list = document.getElementById("watch_list");

    const watch_card = document.createElement("div");
    watch_card.classList.add("watch");

    const image_d = document.createElement("img");
    image_d.src="images/sample.png"

    // create a element for name
    const name = document.createElement("p");
    name.classList.add("watch-name");
    name.innerHTML = "Model Name : Seiko 5"

    // create a element for model
    const model = document.createElement("p");
    model.classList.add("watch-model");
    model.innerHTML = "Model : C5"

    // create a element for price
    const price = document.createElement("p");
    price.classList.add("watch-price");
    price.innerHTML = "11000/-";


    // add all child items to parent element
    watch_card.appendChild(image_d);
    watch_card.appendChild(name);
    watch_card.appendChild(model);
    watch_card.appendChild(price);

    watch_list.appendChild(watch_card);

}


function add_watch2(name_n, model_name, price_n){
    const watch_list = document.getElementById("watch_list");

    const watch_card = document.createElement("div");
    watch_card.classList.add("watch");

    const image_d = document.createElement("img");
    image_d.src="images/sample.png"

    // create a element for name
    const name = document.createElement("p");
    name.classList.add("watch-name");
    name.innerHTML = "Model Name :" +name_n;

    // create a element for model
    const model = document.createElement("p");
    model.classList.add("watch-model");
    model.innerHTML = "Model : "+model_name;

    // create a element for price
    const price = document.createElement("p");
    price.classList.add("watch-price");
    price.innerHTML = "Price : " +price_n;


    // add all child items to parent element
    watch_card.appendChild(image_d);
    watch_card.appendChild(name);
    watch_card.appendChild(model);
    watch_card.appendChild(price);

    watch_list.appendChild(watch_card);

}

//update_details()
add_watch2("New Watch","M1","40000/-")
add_watch2("New Watch2","M2","50000/-")
add_watch2("New Watch3","M3","60000/-")