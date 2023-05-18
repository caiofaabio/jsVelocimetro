const velocimetro = document.querySelector("#velocimetro");
const velocidade = document.querySelector("#velocidade");

let watchId = null;

const option = { enableHighAccuracy: true };

velocimetro.addEventListener("click", () => {
  if (!watchId) {
    watchId = navigator.geolocation.watchPosition(
      updatePosition,
      handleError,
      option
    );
  } else {
    navigator.geolocation.clearWatch(watchId);
    watchId = null;
    velocidade.textContent = 0;
  }
});

function updatePosition(position) {
  if (position.coords.speed === null) return;
  velocidade.textContent = (position.coords.speed * 3.6).toFixed(1);
  console.log(position.coords.speed * 3.6);
}

function handleError(error) {
  console.log(error.message);
}
