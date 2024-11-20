// Function to save progress to Local Storage
function saveProgress() {
    let progressInput = document.getElementById('progressInput').value;
    if (progressInput.trim() !== "") {
        let progressList = JSON.parse(localStorage.getItem('progressList')) || [];
        progressList.push(progressInput);
        localStorage.setItem('progressList', JSON.stringify(progressList));
        displayProgress();
        document.getElementById('progressInput').value = ''; // Clear the input
    } else {
        alert("Please write something before saving.");
    }
}

// Function to display saved progress
function displayProgress() {
    let progressList = JSON.parse(localStorage.getItem('progressList')) || [];
    let progressListElement = document.getElementById('progressList');
    progressListElement.innerHTML = ''; // Clear existing list

    progressList.forEach((item) => {
        let li = document.createElement('li');
        li.textContent = item;
        progressListElement.appendChild(li);
    });
}

// Display progress on page load
window.onload = displayProgress;