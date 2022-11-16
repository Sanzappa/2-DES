var page = -1;

function pokeload() {
  page++;
  const card = document.querySelector(".card");

  fetch("https://pokeapi.co/api/v2/pokemon?limit=16&offset=" + page * 16)
    .then((res) => {
      return res.json();
    })
    .then((item) => {
      item.results.forEach((data) => {
        fetch(data.url)
          .then((res) => {
            return res.json();
          })
          .then((item) => {
            let i = card.cloneNode(true);

            i.classList.remove("model");

            i.querySelector("#pokeImg").src =
              item.sprites.versions["generation-v"][
                "black-white"
              ].animated.front_default;
            item.types.forEach((t, indice) => {
              if (indice == 0) {
                i.style["boxShadow"] = "0px 0px 25px 0px" + neonzin(t.type.name);
              }
            });
            document.querySelector(".page").appendChild(i);
            i.querySelector("#pokeName").innerHTML = data.name;
          });
      });
    });
}

const neonzin = (tipo) => {
  switch (tipo) {
    case "fire":
      return "#f88";
    case "water":
      return "#2ea4ff";
    case "grass":
      return "#3bff38";
    case "normal":
      return "#ececec";
    case "fighting":
      return "#b52626";
    case "flying":
      return "#5be3f5";
    case "poison":
      return "#915bf5";
    case "ground":
      return "#805555";
    case "rock":
      return "#7a7979";
    case "grass":
      return "";
    case "grass":
      return "";
    case "grass":
      return "";
    case "grass":
      return "";
    case "grass":
      return "";
    case "grass":
      return "";
    case "grass":
      return "";
    case "grass":
      return "";
    case "grass":
      return "";
    case "grass":
      return "";

    default:
      return "#FFF";
  }
};
