import { b as createAstro, c as createComponent, m as maybeRenderHead, d as addAttribute, e as renderScript, a as renderTemplate, f as renderHead, r as renderComponent, g as renderSlot } from './astro/server.js';
import 'html-escaper';
import 'clsx';
/* empty css        */

const $$Astro$1 = createAstro("https://paulsysadmin.fr");
const $$Header = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Header;
  const currentPath = Astro2.url.pathname.slice(1);
  return renderTemplate`${maybeRenderHead()}<header class="bg-primary dark:bg-primary-dark shadow-lg transition-colors duration-300"> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4"> <div class="flex items-center justify-between"> <div class="flex-shrink-0"> <a href="/" class="flex items-center space-x-3"> <h1 class="text-2xl font-bold text-white hover:text-gray-200 transition">Paul SysAdmin</h1> </a> <p class="text-gray-300 text-sm mt-1">Étudiant en BTS CIEL – Admin Systèmes & Réseaux</p> </div> <div class="hidden md:flex md:items-center md:space-x-6"> <nav> <ul class="flex space-x-6"> <li> <a href="/"${addAttribute(`text-gray-300 hover:text-white transition ${currentPath === "" ? "text-white font-semibold" : ""}`, "class")}>
Accueil
</a> </li> <li> <a href="/projets"${addAttribute(`text-gray-300 hover:text-white transition ${currentPath === "projets" ? "text-white font-semibold" : ""}`, "class")}>
Projets
</a> </li> <li> <a href="/ressources"${addAttribute(`text-gray-300 hover:text-white transition ${currentPath === "ressources" ? "text-white font-semibold" : ""}`, "class")}>
Ressources
</a> </li> <li> <a href="/contact"${addAttribute(`text-gray-300 hover:text-white transition ${currentPath === "contact" ? "text-white font-semibold" : ""}`, "class")}>
Contact
</a> </li> </ul> </nav> <!-- Theme Toggle --> <button id="theme-toggle" class="rounded-lg p-2.5 text-gray-300 hover:text-white focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700"> <span class="dark:hidden"> <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"> <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path> </svg> </span> <span class="hidden dark:inline"> <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"> <path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"></path> </svg> </span> </button> </div> <!-- Mobile menu button --> <div class="md:hidden flex items-center"> <button type="button" class="mobile-menu-button inline-flex items-center justify-center p-2 rounded-md text-gray-300 hover:text-white hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false"> <span class="sr-only">Open main menu</span> <svg class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path> </svg> </button> </div> </div> <!-- Mobile menu --> <div class="md:hidden hidden" id="mobile-menu"> <div class="pt-4 pb-3 space-y-1"> <a href="/"${addAttribute(`block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-primary-dark ${currentPath === "" ? "text-white bg-primary-dark" : ""}`, "class")}>
Accueil
</a> <a href="/projets"${addAttribute(`block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-primary-dark ${currentPath === "projets" ? "text-white bg-primary-dark" : ""}`, "class")}>
Projets
</a> <a href="/ressources"${addAttribute(`block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-primary-dark ${currentPath === "ressources" ? "text-white bg-primary-dark" : ""}`, "class")}>
Ressources
</a> <a href="/contact"${addAttribute(`block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-primary-dark ${currentPath === "contact" ? "text-white bg-primary-dark" : ""}`, "class")}>
Contact
</a> </div> </div> </div> </header> ${renderScript($$result, "C:/Users/Paul2/Desktop/Travail/Code/Web/paulsysadmin/src/components/Header.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/Paul2/Desktop/Travail/Code/Web/paulsysadmin/src/components/Header.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer class="bg-secondary dark:bg-secondary-dark py-8 mt-12"> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <div class="flex flex-col items-center justify-center space-y-4"> <div class="flex items-center space-x-4"> <a href="https://github.com/M50B20" class="text-gray-400 hover:text-white transition-colors" target="_blank" rel="noopener noreferrer"> <span class="sr-only">GitHub</span> <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"> <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd"></path> </svg> </a> <a href="https://www.linkedin.com/in/paul-p28535" class="text-gray-400 hover:text-white transition-colors" target="_blank" rel="noopener noreferrer"> <span class="sr-only">LinkedIn</span> <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"> <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path> </svg> </a> </div> <div class="text-center"> <p class="text-base text-gray-400">&copy; ${(/* @__PURE__ */ new Date()).getFullYear()} Paul SysAdmin. Tous droits réservés.</p> <p class="mt-1 text-sm text-gray-500">
Code sous licence MIT – Images sous licence CC BY-SA 4.0
</p> </div> </div> </div> </footer>`;
}, "C:/Users/Paul2/Desktop/Travail/Code/Web/paulsysadmin/src/components/Footer.astro", void 0);

const $$Astro = createAstro("https://paulsysadmin.fr");
const $$BaseLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BaseLayout;
  const {
    title,
    description = "Portfolio de Paul, \xE9tudiant en BTS CIEL sp\xE9cialis\xE9 en administration syst\xE8me et r\xE9seau"
  } = Astro2.props;
  return renderTemplate`<html lang="fr" class="scroll-smooth"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><meta name="description"${addAttribute(description, "content")}><title>${title} | Paul SysAdmin</title><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet"><link rel="icon" type="image/svg+xml" href="/favicon.svg">${renderHead()}</head> <body class="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300"> ${renderComponent($$result, "Header", $$Header, {})} <main class="flex-1 w-full max-w-4xl mx-auto px-4 py-8 sm:px-6 lg:px-8 animate-fade-in"> ${renderSlot($$result, $$slots["default"])} </main> ${renderComponent($$result, "Footer", $$Footer, {})} </body></html>`;
}, "C:/Users/Paul2/Desktop/Travail/Code/Web/paulsysadmin/src/layouts/BaseLayout.astro", void 0);

export { $$BaseLayout as $ };
