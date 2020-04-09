const RANDOM_ARTWORKS = [
  {
    url: "https://static.croynielsen.com/site/assets/files/1115/croy-nielsen_andy-boot_salon_kennedy_e4e5_install_1_2016.1800x0.1489599282.jpg",
    text: `"Mixed media installation" posted on 4/25/20`,
    name: "stangetz"
  },
  {
    url: "https://s3.amazonaws.com/contemporaryartgroup/wp-content/uploads/2020/04/35_Flaka-Haliti_Watchu-expect-me-2048x1366.jpg",
    text: `"CPrint photograph 11x15in" posted on 2/13/20`,
    name: "alissaclery"
  },
  {
    url: "https://s3.amazonaws.com/contemporaryartgroup/wp-content/uploads/2020/04/FATEBE9-2048x1536.jpg",
    text: `"Oil on canvas figure 2x3ft" posted on 1/31/20`,
    name: "rentonsmith"
  },
  {
    url: "https://s3.amazonaws.com/contemporaryartgroup/wp-content/uploads/2020/04/Thur11-900x724.jpg",
    text: `"Pastel on paper, Noah" posted on 4/01/20`,
    name: "elliotsnider"
  },
]

let currentIdx = 1;

document.querySelector(".image-switch-div").addEventListener("click", () => {
  let randomArtwork = RANDOM_ARTWORKS[currentIdx];
  document.querySelector(".current-artwork-image").src = randomArtwork.url;
  document.querySelector(".current-artwork-text").innerHTML = randomArtwork.text;
  if (Math.random() <= 0.2) {
    alert(`It's a match! You can now message ${randomArtwork.name} :)`)
  }
  currentIdx = (currentIdx + 1) % RANDOM_ARTWORKS.length;
})