import chevronIcon from '/icons/chevron.svg';

export function relatedProducts(): string {
  return `
  <div id="related-products-wrapper" class="center-flex column">
    <section id="related-products" class="center-flex column">
      <h1 class="title">Related products</h1>

        <div id="related-products-container" class="center-flex column">
          <div id="related-products" class="products" data-scope="related-products"></div>

          <div class="controls" data-scope="related-products">
              <img data-control="prev" src="${chevronIcon}" alt="left chevron" />
              <!-- <p data-control="page">0</p> --> <!-- uncomment these lines to show page number -->
              <img data-control="next" src="${chevronIcon}" alt="right chevron" />
          </div>
        </div>
    </section>
  </div>
  `;
}