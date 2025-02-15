let selectedAnimal = JSON.parse(localStorage.getItem("selected_animal"));
const animal_container = document.getElementById("animal_container");

if (selectedAnimal) {
    let animal = document.createElement("div");
    animal.className = "animal";

    let animal_left = document.createElement("div");
    animal_left.className = "animal_left";

    let animal_name = document.createElement("h1");
    animal_name.innerHTML = selectedAnimal.name;

    let left_div = document.createElement("div");

    let animal_kingdom = document.createElement("h3");
    animal_kingdom.innerHTML =
        "<b>Kingdom: </b>" + selectedAnimal.taxonomy.kingdom;

    let animal_order = document.createElement("h3");
    animal_order.innerHTML = "<b>Order: </b>" + selectedAnimal.taxonomy.order;

    let animal_phylum = document.createElement("h3");
    animal_phylum.innerHTML =
        "<b>Phylum: </b>" + selectedAnimal.taxonomy.phylum;

    let animal_class = document.createElement("h3");
    animal_class.innerHTML = "<b>Class: </b>" + selectedAnimal.taxonomy.class;

    let animal_family = document.createElement("h3");
    animal_family.innerHTML =
        "<b>Family: </b>" + selectedAnimal.taxonomy.family;

    let animal_genus = document.createElement("h3");
    animal_genus.innerHTML = "<b>Genus: </b>" + selectedAnimal.taxonomy.genus;

    let animal_scientific_name = document.createElement("h3");
    animal_scientific_name.innerHTML =
        "<b>Scientific Name: </b>" + selectedAnimal.taxonomy.scientific_name;

    animal_left.appendChild(animal_name);
    animal_left.appendChild(left_div);
    left_div.appendChild(animal_kingdom);
    left_div.appendChild(animal_order);
    left_div.appendChild(animal_phylum);
    left_div.appendChild(animal_class);
    left_div.appendChild(animal_family);
    left_div.appendChild(animal_genus);
    left_div.appendChild(animal_scientific_name);

    let animal_right = document.createElement("div");
    animal_right.className = "animal_right";

    let animal_upper_div = document.createElement("div");

    let animal_type = document.createElement("h2");
    animal_type.innerHTML =
        "<b>Type: </b>" + selectedAnimal.characteristics.type;

    let animal_slogan = document.createElement("h3");
    animal_slogan.innerHTML =
        "<b>Slogan: </b>" + selectedAnimal.characteristics.slogan;

    let animal_locations = document.createElement("h3");
    let locations = "";
    selectedAnimal.locations.forEach((element) => {
        locations += element + ", ";
        if (locations) {
            animal_locations.innerHTML =
                "<b>Locations: </b>" + locations.slice(0, -2);
        }
    });

    let animal_habitat = document.createElement("h3");
    animal_habitat.innerHTML =
        "<b>Habitat: </b>" + selectedAnimal.characteristics.habitat;

    let animal_lifespan = document.createElement("h3");
    animal_lifespan.innerHTML =
        "<b>Life Span: </b>" + selectedAnimal.characteristics.lifespan;

    let animal_weight = document.createElement("h3");
    animal_weight.innerHTML =
        "<b>Weight: </b>" + selectedAnimal.characteristics.weight;

    let animal_topspeed = document.createElement("h3");
    animal_topspeed.innerHTML =
        "<b>Top Speed: </b>" + selectedAnimal.characteristics.top_speed;

    let animal_color = document.createElement("h3");
    animal_color.innerHTML =
        "<b>Color: </b>" +
        selectedAnimal.characteristics.color
            .match(/[A-Z][a-z]+|[0-9]+/g)
            .join(", ");

    animal_upper_div.appendChild(animal_type);
    animal_upper_div.appendChild(animal_slogan);
    animal_upper_div.appendChild(animal_locations);
    animal_upper_div.appendChild(animal_habitat);
    animal_upper_div.appendChild(animal_lifespan);
    animal_upper_div.appendChild(animal_weight);
    animal_upper_div.appendChild(animal_topspeed);
    animal_upper_div.appendChild(animal_color);

    let hr = document.createElement("hr");

    let animal_lower_div = document.createElement("div");

    let animal_main_prey = document.createElement("h4");
    animal_main_prey.innerHTML =
        "<b>Main Prey: </b>" + selectedAnimal.characteristics.main_prey;

    let animal_favorite_food = document.createElement("h4");
    animal_favorite_food.innerHTML =
        "<b>Favorite Food: </b>" + selectedAnimal.characteristics.favorite_food;

    let animal_lifestyle = document.createElement("h4");
    animal_lifestyle.innerHTML =
        "<b>Lifestyle: </b>" + selectedAnimal.characteristics.lifestyle;

    let animal_predators = document.createElement("h4");
    animal_predators.innerHTML =
        "<b>Predators: </b>" + selectedAnimal.characteristics.predators;

    let animal_skin_type = document.createElement("h4");
    animal_skin_type.innerHTML =
        "<b>Skin Type: </b>" + selectedAnimal.characteristics.skin_type;

    animal_lower_div.appendChild(animal_main_prey);
    animal_lower_div.appendChild(animal_favorite_food);
    animal_lower_div.appendChild(animal_lifestyle);
    animal_lower_div.appendChild(animal_predators);
    animal_lower_div.appendChild(animal_skin_type);

    animal_right.appendChild(animal_upper_div);
    animal_right.appendChild(hr);
    animal_right.appendChild(animal_lower_div);

    animal.appendChild(animal_left);
    animal.appendChild(animal_right);

    animal_container.appendChild(animal);
}
