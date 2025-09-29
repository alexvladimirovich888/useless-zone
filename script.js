// USELESS ZONE - JavaScript magic and madness

// Arrays for random data
const spinnerItems = ['🍕', '🦄', '🌮', '🎭', '🚀', '🍌', '🎪', '🦖', '🌈', '💀', '🎸', '🐙'];
const randomFacts = [
    'Cats spend 70% of their lives sleeping, and the other 30% planning world domination',
    'Bananas are radioactive, but don\'t worry - you need to eat 10 million at once to get poisoned',
    'Sharks have existed longer than trees. Trees clearly aren\'t trying hard enough!',
    'Octopuses have 3 hearts and blue blood. They are literally ocean aristocrats',
    'Your phone has more computing power than was used to fly to the Moon',
    'Honey never spoils. Archaeologists found 3000-year-old honey that\'s still edible',
    'Every minute YouTube uploads 500 hours of video. Most of them are cat videos',
    'Elephants are more afraid of bees than mice. Size doesn\'t matter!'
];

const chaosMessages = [
    '🌪️ YOU ACTIVATED CHAOS MODE!',
    '🚨 WARNING! All systems overloaded!',
    '🎭 Reality temporarily unavailable',
    '🌈 Rainbows have taken control!',
    '🎪 The circus has arrived in your browser!',
    '🦄 Unicorns approve of your choice',
    '🎯 Mission failed successfully!',
    '🎨 Art has rebelled against logic!'
];

const aiResponses = [
    'Interesting question! Unfortunately, I\'m a robot and don\'t understand humans 🤖',
    'Error 404: Logic not found',
    'According to my calculations, the answer is banana 🍌',
    'My processor overheated from your question',
    'Sorry, I\'m busy counting digital sheep',
    'Your question violates the laws of physics. Contact Einstein',
    'I would answer, but my keyboard is flooded with coffee ☕',
    'According to the internet, all cats are aliens'
];

const moods = [
    '😊 Optimistically-banana',
    '🎪 Circus-chaotic', 
    '🌈 Rainbow-unicorn',
    '🎭 Theatrically-dramatic',
    '🚀 Cosmatically-insane',
    '🎨 Creatively-destructive',
    '🦄 Magically-unreal',
    '🎯 Accurately-missed'
];

let currentSpinnerIndex = 0;
let spinnerReversed = false;
let petStats = { happiness: '???', hunger: '???', energy: '???' };
let chaosActivated = false;

// Notifications
function showNotification(message) {
    const notification = document.getElementById('notification');
    notification.textContent = message;
    notification.classList.add('show');
    
    setTimeout(() => {
        notification.classList.remove('show');
    }, 3000);
}

// Broken calculator
let calcDisplay = '';

function addToCalc(value) {
    const display = document.getElementById('calc-display');
    calcDisplay += value;
    
    // Randomly replace numbers with emojis
    if (Math.random() < 0.3) {
        display.value = calcDisplay.replace(/\d/g, '😊');
    } else {
        display.value = calcDisplay;
    }
    
    // Add glitch effect
    if (Math.random() < 0.2) {
        display.classList.add('disco-mode');
        setTimeout(() => display.classList.remove('disco-mode'), 500);
    }
}

function clearCalc() {
    calcDisplay = '';
    document.getElementById('calc-display').value = '';
    showNotification('Memory cleared... or not? 🤔');
}

function brokenCalculate() {
    const display = document.getElementById('calc-display');
    const randomResults = ['😵', 'ERROR', '∞', '🍕', 'NO', '42', '???', '🌈'];
    const result = randomResults[Math.floor(Math.random() * randomResults.length)];
    
    display.value = result;
    showNotification('Mathematics broke! 📱');
    
    // Shake the calculator
    const calc = document.querySelector('.calculator-widget');
    calc.classList.add('rubber-band');
    setTimeout(() => calc.classList.remove('rubber-band'), 1000);
}

// Spinner
function changeSpinner() {
    currentSpinnerIndex = (currentSpinnerIndex + 1) % spinnerItems.length;
    document.getElementById('spinner').textContent = spinnerItems[currentSpinnerIndex];
    showNotification(`Object changed to ${spinnerItems[currentSpinnerIndex]}!`);
}

function reverseSpinner() {
    const spinner = document.getElementById('spinner');
    spinnerReversed = !spinnerReversed;
    
    if (spinnerReversed) {
        spinner.style.animation = 'spin 2s linear infinite reverse';
        showNotification('Time turned backwards! ⏰');
    } else {
        spinner.style.animation = 'spin 2s linear infinite';
        showNotification('Time restored! ⏰');
    }
}

// Banana slider
document.addEventListener('DOMContentLoaded', function() {
    const slider = document.getElementById('banana-slider');
    const display = document.getElementById('slider-display');
    
    if (slider && display) {
        slider.addEventListener('input', function() {
            const value = this.value;
            let text;
            
            if (value < 25) {
                text = `${value}% not quite banana 🥺`;
            } else if (value < 50) {
                text = `${value}% almost banana 🍌`;
            } else if (value < 75) {
                text = `${value}% banana! 🎉`;
            } else if (value < 100) {
                text = `${value}% superBanana! 🚀`;
            } else {
                text = 'MAXIMUM BANANA! 🌟🍌🌟';
            }
            
            display.textContent = text;
            
            // Random effects
            if (Math.random() < 0.1) {
                display.style.color = `hsl(${Math.random() * 360}, 70%, 50%)`;
            }
        });
    }
});

function randomizeSlider() {
    const slider = document.getElementById('banana-slider');
    const randomValue = Math.floor(Math.random() * 101);
    slider.value = randomValue;
    slider.dispatchEvent(new Event('input'));
    showNotification('Banananess randomized! 🎲');
}

// Chaos button
function chaosButton() {
    const result = document.getElementById('chaos-result');
    const message = chaosMessages[Math.floor(Math.random() * chaosMessages.length)];
    
    result.textContent = message;
    
    // Activate various chaotic effects
    if (!chaosActivated) {
        chaosActivated = true;
        activateChaosMode();
        setTimeout(() => {
            chaosActivated = false;
            deactivateChaosMode();
        }, 5000);
    }
    
    showNotification('CHAOS ACTIVATED! 🌪️');
}

function activateChaosMode() {
    document.body.classList.add('disco-mode');
    
    // Crazy animations for all widgets
    const widgets = document.querySelectorAll('.widget');
    widgets.forEach(widget => {
        widget.style.animation = 'shake 0.1s infinite';
    });
    
    // Speed up spinner
    const spinner = document.getElementById('spinner');
    spinner.classList.add('crazy-spin');
    
    // Randomly change colors
    const colorInterval = setInterval(() => {
        if (!chaosActivated) {
            clearInterval(colorInterval);
            return;
        }
        document.documentElement.style.filter = `hue-rotate(${Math.random() * 360}deg)`;
    }, 100);
}

function deactivateChaosMode() {
    document.body.classList.remove('disco-mode');
    document.documentElement.style.filter = '';
    
    const widgets = document.querySelectorAll('.widget');
    widgets.forEach(widget => {
        widget.style.animation = '';
    });
    
    const spinner = document.getElementById('spinner');
    spinner.classList.remove('crazy-spin');
    
    showNotification('Chaos has subsided... for now 😌');
}

// Fake progress bar
function startFakeProgress() {
    const progressFill = document.getElementById('progress-fill');
    const progressText = document.getElementById('progress-text');
    let progress = 0;
    
    showNotification('Starting to load important data... 📊');
    
    const interval = setInterval(() => {
        // Random progress increase
        const increment = Math.random() * 15;
        progress += increment;
        
        if (progress > 100) {
            progress = 100;
        }
        
        progressFill.style.width = progress + '%';
        
        if (progress < 30) {
            progressText.textContent = `${Math.floor(progress)}% - Connecting to satellites...`;
        } else if (progress < 60) {
            progressText.textContent = `${Math.floor(progress)}% - Analyzing cats on the internet...`;
        } else if (progress < 90) {
            progressText.textContent = `${Math.floor(progress)}% - Translating to unicorn language...`;
        } else if (progress < 100) {
            progressText.textContent = `${Math.floor(progress)}% - Almost ready...`;
        } else {
            progressText.textContent = '100% - ERROR: Data too important! 🚫';
            clearInterval(interval);
            
            setTimeout(() => {
                progressFill.style.width = '0%';
                progressText.textContent = '0% loaded';
                showNotification('Loading failed successfully! 🎉');
            }, 2000);
        }
    }, 200);
}

// Facts generator
function generateFact() {
    const factDisplay = document.getElementById('random-fact');
    const fact = randomFacts[Math.floor(Math.random() * randomFacts.length)];
    
    factDisplay.textContent = fact;
    factDisplay.style.animation = 'rubberBand 1s';
    
    setTimeout(() => {
        factDisplay.style.animation = '';
    }, 1000);
    
    showNotification('New useless fact obtained! 🧠');
}

// Virtual pet
function feedPet() {
    const pet = document.getElementById('pet');
    const pets = ['🐶', '🐱', '🐭', '🐹', '🐰', '🦊', '🐻', '🐼', '🐨', '🐯', '🦁', '🐸'];
    
    pet.textContent = pets[Math.floor(Math.random() * pets.length)];
    petStats.hunger = ['Full', 'Hungry', '???', 'STARVING'][Math.floor(Math.random() * 4)];
    updatePetStats();
    showNotification('Pet fed... or not? 🍖');
}

function playWithPet() {
    const pet = document.getElementById('pet');
    pet.classList.add('rubber-band');
    
    petStats.happiness = ['😊', '😢', '🤔', '🎉'][Math.floor(Math.random() * 4)];
    petStats.energy = ['100%', '0%', 'ERROR', '∞'][Math.floor(Math.random() * 4)];
    updatePetStats();
    
    setTimeout(() => {
        pet.classList.remove('rubber-band');
    }, 1000);
    
    showNotification('Game finished! Everyone is happy! 🎮');
}

function petSleep() {
    const pet = document.getElementById('pet');
    pet.textContent = '😴';
    
    petStats.energy = 'ZZZ...';
    petStats.happiness = '💤';
    updatePetStats();
    
    setTimeout(() => {
        pet.textContent = '🐶';
    }, 3000);
    
    showNotification('Pet fell asleep... forever? 😴');
}

function updatePetStats() {
    document.getElementById('happiness').textContent = petStats.happiness;
    document.getElementById('hunger').textContent = petStats.hunger;
    document.getElementById('energy').textContent = petStats.energy;
}

// Fake chat
function sendMessage() {
    const input = document.getElementById('chat-input');
    const messages = document.getElementById('chat-messages');
    const userMessage = input.value.trim();
    
    if (!userMessage) {
        showNotification('Empty messages are forbidden! 📝');
        return;
    }
    
    // Add user message
    const userDiv = document.createElement('div');
    userDiv.className = 'message user-message';
    userDiv.textContent = `You: ${userMessage}`;
    messages.appendChild(userDiv);
    
    // Generate AI response
    setTimeout(() => {
        const aiDiv = document.createElement('div');
        aiDiv.className = 'message ai-message';
        const response = aiResponses[Math.floor(Math.random() * aiResponses.length)];
        aiDiv.textContent = `AI: ${response}`;
        messages.appendChild(aiDiv);
        
        messages.scrollTop = messages.scrollHeight;
    }, 1000);
    
    input.value = '';
    messages.scrollTop = messages.scrollHeight;
}

// Time machine
function timeTravel(direction) {
    const display = document.getElementById('time-display');
    let timeText;
    
    switch(direction) {
        case 'past':
            timeText = `Past: ${Math.floor(Math.random() * 2000)} BC`;
            break;
        case 'future':
            timeText = `Future: ${2025 + Math.floor(Math.random() * 1000)} AD`;
            break;
        case 'random':
            const randomTimes = [
                'Age of dinosaurs 🦕',
                'Viking era ⚔️',
                'Far future 🚀',
                'Time that doesn\'t exist ⏰',
                'Yesterday, but in a parallel universe 🌌'
            ];
            timeText = randomTimes[Math.floor(Math.random() * randomTimes.length)];
            break;
    }
    
    display.textContent = timeText;
    display.classList.add('disco-mode');
    
    setTimeout(() => {
        display.classList.remove('disco-mode');
    }, 2000);
    
    showNotification('Time travel completed! ⚡');
}

// Mood detector
function detectMood() {
    const display = document.getElementById('mood-display');
    display.textContent = 'Scanning aura...';
    
    setTimeout(() => {
        const mood = moods[Math.floor(Math.random() * moods.length)];
        display.textContent = `Your mood: ${mood}`;
        display.style.color = `hsl(${Math.random() * 360}, 70%, 50%)`;
    }, 2000);
    
    showNotification('Mood detected with 0% accuracy! 🎯');
}

// Enter handler for chat
document.addEventListener('DOMContentLoaded', function() {
    const chatInput = document.getElementById('chat-input');
    if (chatInput) {
        chatInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                sendMessage();
            }
        });
    }
    
    // Welcome message
    setTimeout(() => {
        showNotification('Welcome to USELESS ZONE! 🎪');
    }, 1000);
    
    // Random notifications
    setInterval(() => {
        if (Math.random() < 0.1) { // 10% chance every 30 seconds
            const randomMessages = [
                'System working incorrectly! 🔧',
                'Cat detected on the internet! 🐱',
                'Warning: chaos level critical! ⚠️',
                'Everything going according to plan... what plan? 🤔'
            ];
            const msg = randomMessages[Math.floor(Math.random() * randomMessages.length)];
            showNotification(msg);
        }
    }, 30000);
}); 