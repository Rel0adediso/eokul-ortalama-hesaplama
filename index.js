let clickCount = 0;
const maxClicks = 3;

function toggleInputFields(event) {
    clickCount++;
    const inputContainer = event.target.nextElementSibling;

    if (clickCount <= maxClicks) {
        if (inputContainer.style.display === 'none' || inputContainer.style.display === '') {
            inputContainer.style.display = 'block';
        }

        if (clickCount > 1) {
            inputContainer.innerHTML += `
                <div class="input-group">
                    <input type="number" id="ek1kt" name="ek1kt" placeholder="Dersin Katsayısı" min="0" max="100" required>
                    <label for="ek1_S1">1. Sınav</label> 
                    <input type="number" id="ek1_S1" name="ek1_S1" required>
                    <label for="ek1_S2">2. Sınav</label> 
                    <input type="number" id="ek1_S2" name="ek1_S2" required>
                    <label for="ek1_S2">1. Performans</label> 
                     <input type="number" id="ek1_S2" name="ek1_S2" required>
                    <label for="ek1_S2">2. Performans</label> 
                    <input type="number" id="ek1_S2" name="ek1_S2" required>
                </div>`;
        } else {
            inputContainer.innerHTML = `
                <div class="input-group">
                    <input type="number" id="ek2kt" name="ek2kt" placeholder="Dersin Katsayısı" min="0" max="100" required>
                    <label for="ek2_S1">1. Sınav</label> 
                    <input type="number" id="ek2_S1" name="ek2_S1" required>
                    <label for="ek2_S2">2. Sınav</label> 
                    <input type="number" id="ek2_S2" name="ek2_S2" required>
                    <label for="ek2_P1">1. Performans</label> 
                     <input type="number" id="ek2_P1" name="ek2_P1" required>
                    <label for="ek2_P2">2. Performans</label> 
                    <input type="number" id="ek2_P2" name="ek2_P2" required>
                </div>`;
        }
    }

    if (clickCount >= maxClicks) {
        closeInputFields(event);
    }
}

function closeInputFields(event) {
    const inputContainer = event.target.nextElementSibling;
    inputContainer.style.display = 'none';
    clickCount = 0;
}

function toggleProjectContainer() {
    const projectContainer = document.getElementById('project-container');
    if (projectContainer.style.display === 'none' || projectContainer.style.display === '') {
        projectContainer.style.display = 'block';
    } else {
        projectContainer.style.display = 'none';
    }
}

document.getElementById('formSelector').addEventListener('change', function() {
    var forms = document.querySelectorAll('.form-section');
    forms.forEach(function(form) {
        form.style.display = 'none';
    });

    var selectedForm = document.getElementById(this.value);
    if (selectedForm) {
        selectedForm.style.display = 'block';
    }
});

document.querySelectorAll('#abcButton1, #abcButton2, #abcButton3').forEach(button => {
    button.addEventListener('click', toggleInputFields);
    button.addEventListener('dblclick', closeInputFields);
});

document.querySelectorAll('#addProjectButton').forEach(button => {
    button.addEventListener('click', toggleProjectContainer);
});