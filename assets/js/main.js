const btn = document.getElementById('btn-menu');
const menu = document.getElementById('mobile-menu');
btn.addEventListener('click', () => menu.classList.toggle('hidden'));

const observer = new IntersectionObserver(
  (entries) => entries.forEach((e) => {
    if (e.isIntersecting) {
      e.target.classList.add('is-visible');
      observer.unobserve(e.target);
    }
  }),
  { threshold: 0.12 }
);
document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

const modal = document.getElementById('modal');
const modalImg = document.getElementById('modal-img');
const modalNum = document.getElementById('modal-num');
const modalTitle = document.getElementById('modal-title');
const modalTitle2 = document.getElementById('modal-title-2');
const modalDesc = document.getElementById('modal-desc');

function openModal(card) {
  modalImg.src = card.dataset.img;
  modalImg.alt = card.dataset.title;
  modalNum.textContent = card.dataset.num;
  modalTitle.textContent = card.dataset.title;
  modalTitle2.textContent = card.dataset.title;
  modalDesc.textContent = card.dataset.desc;
  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  modal.classList.remove('open');
  document.body.style.overflow = '';
}

document.querySelectorAll('.cap-card').forEach((card) => {
  card.addEventListener('click', () => openModal(card));
});

document.getElementById('modal-close').addEventListener('click', closeModal);
document.getElementById('modal-backdrop').addEventListener('click', closeModal);
document.getElementById('modal-cta').addEventListener('click', closeModal);
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeModal();
});
