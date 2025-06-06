import chevronWhiteIcon from '/icons/chevron-white.svg';
import carouselSlides from "@/data/carouselSlides";

let counter = 0;

export function changeCarouselBG(control: "leftControl" | "rightControl", count?: number){
  const carouselElement = document.querySelector(".carousel") as HTMLElement;
  const carouselText = document.getElementById("carouselText") as HTMLElement;

  if(count !== undefined) counter = count;
  else control === "leftControl" ? counter-- : counter++;

  if (counter < 0) counter = carouselSlides.length - 1;
  if (counter >= carouselSlides.length) counter = 0;

  carouselElement.style.backgroundImage = `url('${carouselSlides[counter].src}')`;
  carouselText.innerHTML = carouselSlides[counter].text;
}

export function initCarouselControls(){
  const leftControl = document.getElementById("leftControl") as HTMLImageElement;
  const rightControl = document.getElementById("rightControl") as HTMLImageElement;

  leftControl.addEventListener("click", () => {
    counter <= 0 ? changeCarouselBG("leftControl", carouselSlides.length - 1) : changeCarouselBG("leftControl");
  });

  rightControl.addEventListener("click", () => {
    counter < carouselSlides.length - 1 ? changeCarouselBG("rightControl") : changeCarouselBG("rightControl", 0);
  });
}

export function carousel(): string {
  return `
    <section id="carousel" class="center-grid">
        <div class="carousel center-grid">
            <h3>Discover all our products!</h3>

            <div class="controls">
                <img id="leftControl" src="${chevronWhiteIcon}" alt="left chevron" />
                <h1 id="carouselText">Where passion <br> and coffee blend</h1>
                <img id="rightControl" src="${chevronWhiteIcon}" alt="right chevron" />
            </div>
        </div>
    </section>
  `;
}