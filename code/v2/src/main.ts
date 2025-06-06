import { router } from "./core/router";

window.addEventListener("DOMContentLoaded", () => { router() });
window.addEventListener("hashchange", router);