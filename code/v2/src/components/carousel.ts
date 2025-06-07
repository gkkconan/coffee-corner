import chevronWhiteIcon from '/icons/chevron-white.svg';
import carouselSlides from "@/data/carouselSlides";

let counter = 0;

export function changeCarouselBG(control: "prev" | "next", count?: number){
  const carouselElement = document.querySelector(".carousel") as HTMLElement;
  const carouselText = document.getElementById("carouselText") as HTMLElement;
  if(!carouselElement || !carouselText) return;

  if(count !== undefined) counter = count;
  else control === "prev" ? counter-- : counter++;

  if (counter < 0) counter = carouselSlides.length - 1;
  if (counter >= carouselSlides.length) counter = 0;

  carouselElement.style.backgroundImage = `url('${carouselSlides[counter].src}')`;
  carouselText.innerHTML = carouselSlides[counter].text;
}

export function initCarouselControls(){
  const controlsContainer = document.querySelector(".controls[data-scope='carousel']");
  if (!controlsContainer) return;
  const leftControl = controlsContainer.querySelector("[data-control='prev']") as HTMLImageElement;
  const rightControl = controlsContainer.querySelector("[data-control='next']") as HTMLImageElement;
  if(!leftControl || !rightControl) return;

  leftControl.addEventListener("click", () => {
    counter <= 0 ? changeCarouselBG("prev", carouselSlides.length - 1) : changeCarouselBG("prev");
  });

  rightControl.addEventListener("click", () => {
    counter < carouselSlides.length - 1 ? changeCarouselBG("next") : changeCarouselBG("next", 0);
  });
}

export function carousel(): string {
  return `
    <section id="carousel" class="center-grid">
        <div class="carousel center-grid">
            <h3>Discover all our products!</h3>

            <div class="controls" data-scope="carousel">
                <img data-control="prev" src="${chevronWhiteIcon}" alt="left chevron" />
                <h1 id="carouselText">Where passion <br> and coffee blend</h1>
                <img data-control="next" src="${chevronWhiteIcon}" alt="right chevron" />
            </div>
        </div>
    </section>
  `;
}