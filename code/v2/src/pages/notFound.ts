import NotFoundPageGraphic from '/icons/404-page-graphic.svg'

export function notFoundPage(): string {
  return `
    <section id="notFound" class="center-flex">
      <img src="${NotFoundPageGraphic}" />
    </section>
  `;
}