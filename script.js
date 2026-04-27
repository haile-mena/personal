document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('clickBtn');
    const message = document.getElementById('message');
    
    button.addEventListener('click', function() {
        message.textContent = 'Button clicked! JavaScript is working!';
        
        setTimeout(function() {
            message.textContent = '';
        }, 3000);
    });
});
