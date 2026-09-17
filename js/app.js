const profileCard = document.getElementById('profileCard');
const profileName = document.getElementById('profileName');
const profileProgram = document.getElementById('profileProgram');
const profileYear = document.getElementById('profileYear');
const profileStatus = document.getElementById('profileStatus');
const detailsPanel = document.getElementById('detailsPanel');
const studentIdDisplay = document.getElementById('studentIdDisplay');
const formMessage = document.getElementById('formMessage');

const nameInput = document.getElementById('nameInput');
const programInput = document.getElementById('programInput');
const yearInput = document.getElementById('yearInput');
const statusInput = document.getElementById('statusInput');

const updateBtn = document.querySelector('#updateBtn');
const toggleDetailsBtn = document.getElementById('toggleDetailsBtn');
const themeBtn = document.getElementById('themeBtn');
const resetBtn = document.getElementById('resetBtn');

if (studentIdDisplay && profileCard) {
  studentIdDisplay.textContent = 'Student ID: ' + profileCard.dataset.studentId;
}

function isValidStudentName(name) {
  return name.trim().length >= 2;
}

function formatStudentStatus(status) {
  return status === 'active' ? 'Active' : 'Inactive';
}

function setStatus(status) {
  if (!profileCard || !profileStatus) return;

  if (status === 'inactive') {
    profileCard.classList.add('inactive');
    profileCard.classList.remove('active');
    profileCard.dataset.status = 'inactive';
    profileStatus.textContent = formatStudentStatus('inactive');
  } else {
    profileCard.classList.add('active');
    profileCard.classList.remove('inactive');
    profileCard.dataset.status = 'active';
    profileStatus.textContent = formatStudentStatus('active');
  }
}

function updateProfile() {
  if (!nameInput || !formMessage || !profileName || !profileProgram || !profileYear) return;

  const nameVal = nameInput.value;

  if (!isValidStudentName(nameVal)) {
    formMessage.textContent = 'Student name is required';
    return;
  }

  formMessage.textContent = '';
  profileName.textContent = nameVal.trim();
  profileProgram.textContent = programInput.value;
  profileYear.textContent = yearInput.value;

  setStatus(statusInput.value);
}

function toggleDetails() {
  if (detailsPanel) {
    detailsPanel.classList.toggle('hidden');
  }
}

function toggleTheme() {
  document.body.classList.toggle('dark-theme');
}

function resetProfile() {
  if (!profileCard || !profileName || !profileProgram || !profileYear) return;

  profileName.textContent = 'Maria Santos';
  profileProgram.textContent = 'BS Information Technology';
  profileYear.textContent = '3rd Year';

  setStatus('active');

  if (nameInput) nameInput.value = '';
  if (programInput) programInput.value = 'BS Information Technology';
  if (yearInput) yearInput.value = '3rd Year';
  if (statusInput) statusInput.value = 'active';

  if (formMessage) formMessage.textContent = '';
  if (detailsPanel) detailsPanel.classList.remove('hidden');

  document.body.classList.remove('dark-theme');
}

if (updateBtn) updateBtn.addEventListener('click', updateProfile);
if (toggleDetailsBtn) toggleDetailsBtn.addEventListener('click', toggleDetails);
if (themeBtn) themeBtn.addEventListener('click', toggleTheme);
if (resetBtn) resetBtn.addEventListener('click', resetProfile);