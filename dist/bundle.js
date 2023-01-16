/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
console.log('it works');

// onload
const loadFunction = function () {
  const websiteHeader = document.createElement('div');
  websiteHeader.classList.add('website-header');
  websiteHeader.textContent = 'The BunZi';
  const sectionsTabContainer = document.createElement('div');
  sectionsTabContainer.classList.add('sections-tab-container');
  aboutTab = document.createElement('div');
  aboutTab.classList.add('.about-tab', '|', 'tab-menu-item');
  aboutTab.textContent = 'About';
  menuTab = document.createElement('div');
  menuTab.classList.add('.menu-tab', '|', 'tab-menu-item');
  menuTab.textContent = 'Menu';
  contactTab = document.createElement('div');
  contactTab.classList.add('.contact-tab', '|', 'tab-menu-item');
  contactTab.textContent = 'Contact';
  sectionsTabContainer.append(aboutTab, menuTab, contactTab);

  const pageContentContainer = document.createElement('div');
  pageContentContainer.classList.add('page-content');

  const initialContentContainer = document.querySelector('#content');
  initialContentContainer.append(
    websiteHeader,
    sectionsTabContainer,
    pageContentContainer
  );
};

loadFunction();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc29sZS5sb2coJ2l0IHdvcmtzJyk7XHJcblxyXG4vLyBvbmxvYWRcclxuY29uc3QgbG9hZEZ1bmN0aW9uID0gZnVuY3Rpb24gKCkge1xyXG4gIGNvbnN0IHdlYnNpdGVIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICB3ZWJzaXRlSGVhZGVyLmNsYXNzTGlzdC5hZGQoJ3dlYnNpdGUtaGVhZGVyJyk7XHJcbiAgd2Vic2l0ZUhlYWRlci50ZXh0Q29udGVudCA9ICdUaGUgQnVuWmknO1xyXG4gIGNvbnN0IHNlY3Rpb25zVGFiQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgc2VjdGlvbnNUYWJDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnc2VjdGlvbnMtdGFiLWNvbnRhaW5lcicpO1xyXG4gIGFib3V0VGFiID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgYWJvdXRUYWIuY2xhc3NMaXN0LmFkZCgnLmFib3V0LXRhYicsICd8JywgJ3RhYi1tZW51LWl0ZW0nKTtcclxuICBhYm91dFRhYi50ZXh0Q29udGVudCA9ICdBYm91dCc7XHJcbiAgbWVudVRhYiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIG1lbnVUYWIuY2xhc3NMaXN0LmFkZCgnLm1lbnUtdGFiJywgJ3wnLCAndGFiLW1lbnUtaXRlbScpO1xyXG4gIG1lbnVUYWIudGV4dENvbnRlbnQgPSAnTWVudSc7XHJcbiAgY29udGFjdFRhYiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGNvbnRhY3RUYWIuY2xhc3NMaXN0LmFkZCgnLmNvbnRhY3QtdGFiJywgJ3wnLCAndGFiLW1lbnUtaXRlbScpO1xyXG4gIGNvbnRhY3RUYWIudGV4dENvbnRlbnQgPSAnQ29udGFjdCc7XHJcbiAgc2VjdGlvbnNUYWJDb250YWluZXIuYXBwZW5kKGFib3V0VGFiLCBtZW51VGFiLCBjb250YWN0VGFiKTtcclxuXHJcbiAgY29uc3QgcGFnZUNvbnRlbnRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBwYWdlQ29udGVudENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdwYWdlLWNvbnRlbnQnKTtcclxuXHJcbiAgY29uc3QgaW5pdGlhbENvbnRlbnRDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpO1xyXG4gIGluaXRpYWxDb250ZW50Q29udGFpbmVyLmFwcGVuZChcclxuICAgIHdlYnNpdGVIZWFkZXIsXHJcbiAgICBzZWN0aW9uc1RhYkNvbnRhaW5lcixcclxuICAgIHBhZ2VDb250ZW50Q29udGFpbmVyXHJcbiAgKTtcclxufTtcclxuXHJcbmxvYWRGdW5jdGlvbigpO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=