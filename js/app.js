const plus = document.querySelector('.plus');
const body = document.querySelector('body');
const app = {
    handleEvent: function() {
        // Sự kiện click vào plus
        plus.onclick = function() {
            body.classList.toggle('active');
        }
    },
    start: function() {
        this.handleEvent();
    }
}
app.start();