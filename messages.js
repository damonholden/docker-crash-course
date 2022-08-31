const showMessage = () => {
  document.getElementById(`edit-message`).hidden = true;
  document.getElementById(`message`).hidden = false;
};

const showEditMessage = () => {
  document.getElementById(`message`).hidden = true;
  document.getElementById(`edit-message`).hidden = false;
};
