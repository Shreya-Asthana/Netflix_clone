document.addEventListener('DOMContentLoaded', () => {
    const signInButton = document.getElementById('signInButton');

    signInButton.addEventListener('click', () => {
        // Redirect to the Netflix sign-in page
        window.location.href = 'https://www.netflix.com/login';
    });
});
function toggleAnswer(id) {
    var answer = document.getElementById("answer" + id);
    answer.style.display === "none" ? answer.style.display = "block" : answer.style.display = "none";
    
  }
  document.querySelector('.question').addEventListener('click', function() {
    this.classList.toggle('clicked');
});

  