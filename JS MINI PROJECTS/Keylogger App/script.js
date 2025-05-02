const logDiv = document.getElementById('log');
const stateDiv = document.getElementById('state');
 
const startBtn = document.getElementById('start-btn');
const stopBtn = document.getElementById('stop-btn');

// Initialize button states
startBtn.disabled = false;
stopBtn.disabled = true;

// Event listeners for buttons
startBtn.addEventListener('click', () => {
    document.addEventListener('keydown', handleDown);
    document.addEventListener('keyup', handleUp);
    startBtn.disabled = true;
    stopBtn.disabled = false;
    stateDiv.textContent = 'Key state: Waiting for input';
    logDiv.textContent = 'Press any key';
});

stopBtn.addEventListener('click', () => {
    // Remove event listeners instead of adding them again
    document.removeEventListener('keydown', handleDown);
    document.removeEventListener('keyup', handleUp);
    logDiv.textContent = 'Logging stopped';
    stateDiv.textContent = 'Key state: Inactive';
    startBtn.disabled = false;
    stopBtn.disabled = true;
});

function handleDown(e) {
    logDiv.textContent = `Key pressed: ${e.key}`;
    stateDiv.textContent = `Key state: Down`;
}

function handleUp(e) {
    logDiv.textContent = `Key released: ${e.key}`;
    stateDiv.textContent = `Key state: Up`;
}