const progresBars = document.querySelectorAll("[data-progress-bar]");

//Забираем значения из разметки и добавляем в стили
if (progresBars.length) {

  progresBars.forEach((i) => {
    let widthEnd = i.textContent.trim().slice(0, -1);

    // с анимацией
    let point = 0;
    move();
    function move() {
      if (point == 0) {
        point = 1;
        let time = 20;
        let id = setInterval(frame, time);
        let width = 0;
        function frame() {
          if (width >= widthEnd) {
            clearInterval(id);
            point = 0;
          } else {
            width++;
            i.querySelector(".progress-bar__content").style.width = width + "%";
            i.querySelector(".progress-bar__content").textContent = width + "%";
          }
        }
      }
    }

    //без анимации
    // i.querySelector(".progress-bar__content").style.width = `${widthEnd}%`;
  });
}
