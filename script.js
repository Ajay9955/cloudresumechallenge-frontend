// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
async function getVisitorCount() {
    try {
        const response = await fetch('https://g3erqe9ps8.execute-api.us-east-1.amazonaws.com/prod');
        const count = await response.text();
        document.getElementById('visitor-count').innerText = count;
    } 
    catch (error) {
        console.error('Error fetching visitor count:', error);
        document.getElementById('visitor-count').innerText = 'Error';
        }
    }
window.onload = getVisitorCount;



