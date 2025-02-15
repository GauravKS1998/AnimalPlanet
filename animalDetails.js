const search_input = document.getElementById("search_input");
const search_icon = document.getElementById("search_icon");
const all_animals = document.getElementById("all_animals");

let apiKey = "yfSKyqkXPEs9RjT3FPzApw==FQ7fbVgW7w62GF16";

let option = {
    method: "GET",
    headers: {
        "X-Api-Key": apiKey,
    },
};

search_icon.addEventListener("click", (e) => {
    e.preventDefault();
    all_animals.innerHTML = " ";
    let search = search_input.value;
    get_animals(search);
});

async function get_animals(value) {
    all_animals.innerHTML = `<h1 class="loading">Loading...</h1>`;
    let apiURL = `https://api.api-ninjas.com/v1/animals?name=${value}`;
    let response = await fetch(apiURL, option);
    let result = await response.json();

    if (result.length > 0) {
        all_animals.innerHTML = "";

        result.forEach((data) => {
            let animal_box = document.createElement("div");
            animal_box.className = "animal_box";

            let animal_name = document.createElement("h2");
            animal_name.innerHTML = data.name;

            let animal_type = document.createElement("p");
            animal_type.innerHTML = "<b>Type:</b> " + data.characteristics.type;

            let animal_locations = document.createElement("p");
            let location_name = "";
            data.locations.forEach((e) => {
                location_name += e + ", ";
                if (location_name) {
                    animal_locations.innerHTML =
                        "<b>Locations:</b> " + location_name.slice(0, -2);
                }
            });

            let animal_diet = document.createElement("p");
            animal_diet.innerHTML = "<b>Diet:</b> " + data.characteristics.diet;

            let animal_weight = document.createElement("p");
            if (data.characteristics.weight) {
                animal_weight.innerHTML =
                    "<b>Weight:</b> " + data.characteristics.weight;
            } else {
                animal_weight.innerHTML = "<b>Weight:</b> Not available";
            }

            let animal_speed = document.createElement("p");
            if (data.characteristics.top_speed) {
                animal_speed.innerHTML =
                    "<b>Top speed:</b> " + data.characteristics.top_speed;
            } else {
                animal_speed.innerHTML = "<b>Top speed:</b> Not available";
            }

            let show_more_btn = document.createElement("button");
            show_more_btn.className = "show_more";
            show_more_btn.innerHTML = `Show More<i class="fa-solid fa-dragon"></i>`;

            animal_box.appendChild(animal_name);
            animal_box.appendChild(animal_type);
            animal_box.appendChild(animal_locations);
            animal_box.appendChild(animal_diet);
            animal_box.appendChild(animal_weight);
            animal_box.appendChild(animal_speed);
            animal_box.appendChild(show_more_btn);

            all_animals.appendChild(animal_box);

            show_more_btn.addEventListener("click", (e) => {
                e.preventDefault();
                localStorage.setItem("selected_animal", JSON.stringify(data));
                window.location.href = "animal.html";
            });
        });
    }
}
