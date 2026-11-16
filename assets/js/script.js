'use strict';

const sidebar = document.querySelector('[data-sidebar]');
const sidebarBtn = document.querySelector('[data-sidebar-btn]');
if (sidebar && sidebarBtn) {
  sidebarBtn.addEventListener('click', () => sidebar.classList.toggle('active'));
}

const navigationLinks = document.querySelectorAll('[data-nav-link]');
const pages = document.querySelectorAll('[data-page]');
navigationLinks.forEach((link) => {
  link.addEventListener('click', () => {
    const selectedPage = link.textContent.trim().toLowerCase();
    pages.forEach((page) => {
      const active = page.dataset.page === selectedPage;
      page.classList.toggle('active', active);
    });
    navigationLinks.forEach((navLink) => {
      navLink.classList.toggle('active', navLink === link);
    });
    window.scrollTo(0, 0);
  });
});
