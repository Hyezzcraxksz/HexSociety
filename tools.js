// Tab switching
const tabButtons = document.querySelectorAll('.tab-button');
const tabContents = document.querySelectorAll('.tab-content');

tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        tabButtons.forEach(b => b.classList.remove('active'));
        tabContents.forEach(c => c.classList.remove('active'));

        btn.classList.add('active');
        document.getElementById(btn.dataset.tab).classList.add('active');
    });
});

// Password generator
function generatePassword() {
    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~";
    let password = "";
    for (let i=0; i<12; i++) {
        password += charset.charAt(Math.floor(Math.random() * charset.length));
    }
    document.getElementById('generatedPassword').value = password;
}

// Password strength checker
function checkStrength() {
    const pw = document.getElementById('passwordCheck').value;
    let result = "";
    if(pw.length < 6) result = "Weak";
    else if(pw.length < 10) result = "Medium";
    else result = "Strong";
    document.getElementById('strengthResult').textContent = `Strength: ${result}`;
}
