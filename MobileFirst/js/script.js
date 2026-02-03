const toggleBtn = document.querySelector('.menu-toggle-btn');
const nav = document.querySelector('nav');
const links = document.querySelectorAll('nav a');

toggleBtn.addEventListener('click', () => {
    nav.classList.toggle('is-open');
});

/* ⭐ 메뉴 클릭 시 색 유지 + 모바일 메뉴 자동 닫기 
links.forEach(link => {
    link.addEventListener('click', () => {

        // 모든 active 제거
        links.forEach(l => l.classList.remove('active'));

        // 현재 클릭만 active
        link.classList.add('active');

        // ⭐ 모바일이면 메뉴 자동 닫기
        if (window.innerWidth < 1024) {
            nav.classList.remove('is-open');
        }
    });
});*/

/* ⭐ 화면 커질 때 자동 닫기 */
window.addEventListener('resize', () => {
    if (window.innerWidth >= 1024) {
        nav.classList.remove('is-open');
    }
});