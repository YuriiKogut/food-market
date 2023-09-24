(() => {
  const refs = {
    body: document.querySelector("body"),
    openModalBtn: document.querySelector("[data-modal-open]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.body.classList.toggle("lock");
    refs.modal.classList.toggle("is-hidden");
  }
})();