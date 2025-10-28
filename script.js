// ============= MATRIX RAIN EFFECT =============
const canvas = document.getElementById('matrix-canvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const katakana = 'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const fontSize = 16;
const columns = canvas.width / fontSize;

const drops = [];
for (let x = 0; x < columns; x++) {
    drops[x] = 1;
}

let matrixEnabled = true;

function drawMatrix() {
    if (!matrixEnabled) return;

    ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = '#00ff41';
    ctx.font = fontSize + 'px monospace';

    for (let i = 0; i < drops.length; i++) {
        const text = katakana.charAt(Math.floor(Math.random() * katakana.length));
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
            drops[i] = 0;
        }
        drops[i]++;
    }
}

setInterval(drawMatrix, 35);

window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

// ============= TYPEWRITER EFFECT =============
const typedTextElement = document.getElementById('typed-text');
const introText = "cat intro.txt";
let charIndex = 0;

function typeWriter() {
    if (charIndex < introText.length) {
        typedTextElement.textContent += introText.charAt(charIndex);
        charIndex++;
        setTimeout(typeWriter, 100);
    } else {
        setTimeout(() => {
            document.querySelector('.cursor').style.display = 'none';
            showWelcomeMessage();
        }, 500);
    }
}

function showWelcomeMessage() {
    const output = document.getElementById('output');
    const welcomeMsg = `
        <div class="output-line success">
            <div class="section-title">🚀 SYSTEM INITIALIZED</div>
            <p>👋 Hello! I'm <span style="color: #bd00ff; font-weight: bold;">Bilal Irfan</span></p>
            <p>💼 Computer Engineering Student | Embedded Systems & Machine Learning Enthusiast</p>
            <p>🎯 Building innovative solutions with hardware & software</p>
            <br>
            <p class="info">Type <span class="cmd">help</span> to see available commands</p>
        </div>
    `;
    output.innerHTML = welcomeMsg;
    document.getElementById('terminal-input').focus();
}

setTimeout(typeWriter, 1000);

// ============= TERMINAL COMMANDS =============
const terminalInput = document.getElementById('terminal-input');
const output = document.getElementById('output');
const commandHistory = [];
let historyIndex = -1;

// Command responses
const commands = {
    help: () => {
        return `
            <div class="help-menu">
                <div class="help-title">📌 Available Commands:</div>
                <div class="help-commands">
                    <div class="help-item"><span class="cmd">about</span> - Learn about me</div>
                    <div class="help-item"><span class="cmd">skills</span> - View my technical skills</div>
                    <div class="help-item"><span class="cmd">projects</span> - Check out my projects</div>
                    <div class="help-item"><span class="cmd">education</span> - See my education background</div>
                    <div class="help-item"><span class="cmd">contact</span> - Get in touch with me</div>
                    <div class="help-item"><span class="cmd">github</span> - Visit my GitHub profile</div>
                    <div class="help-item"><span class="cmd">linkedin</span> - Connect on LinkedIn</div>
                    <div class="help-item"><span class="cmd">resume</span> - Download my resume</div>
                    <div class="help-item"><span class="cmd">clear</span> - Clear the terminal</div>
                    <div class="help-item"><span class="cmd">matrix</span> - Toggle matrix rain effect</div>
                </div>
            </div>
        `;
    },

    about: () => {
        return `
            <div class="section-title">👨‍💻 ABOUT ME</div>
            <p>Hey! I'm a Computer Engineering student at Toronto Metropolitan University.</p>
            <p>I'm passionate about:</p>
            <ul style="margin-left: 20px; margin-top: 10px;">
                <li>🔧 Embedded Systems & RTOS</li>
                <li>💾 Digital Logic Design & VHDL</li>
                <li>💻 Software Development (Java, C/C++)</li>
                <li>🌐 Computer Networking</li>
            </ul>
            <p style="margin-top: 10px;">I love building projects that bridge hardware and software!</p>
        `;
    },

    skills: () => {
        return `
            <div class="section-title">💪 TECHNICAL SKILLS</div>
            <p><span class="cmd">Languages:</span> Java, C/C++, VHDL, Python, JavaScript, MATLAB, Assembly</p>
            <p><span class="cmd">Hardware:</span> FPGA, Digital Logic, Xilinx, Embedded Systems</p>
            <p><span class="cmd">Software:</span> JavaFX, Simulink, MS Office</p>
            <p><span class="cmd">Networking:</span> TCP/IP, Protocols, Network Analysis</p>
            <p><span class="cmd">Tools:</span> VSCode, GitHub, NI Multisim, Wireshark, Quartus II, MS Office, Oscilloscope</p>
        `;
    },

    projects: () => {
        return `
            <div class="section-title">🚀 FEATURED PROJECTS</div>
            
            <div style="margin: 15px 0;">
                <p><span class="cmd">1. ⚡ BJT Multistage Amplifier (Analog Design)</span></p>
                <p style="margin-left: 20px;">Three-stage BJT amplifier circuit with 50V/V gain and frequency response 20Hz-50kHz</p>
                <p style="margin-left: 20px; color: #00bfff;">Tech: Analog Circuit Design, BJT, MultiSim, ELE404</p>
                <p style="margin-left: 20px; color: #ffff00;">→ CC-CE-CC topology | Voltage Gain: 51V/V | Input Resistance: 21kΩ</p>
                <p style="margin-left: 20px;"><a href="https://github.com/bilxl-irfan/BJT-Signal-Amplifier-Design" target="_blank" style="color: #00ff41;">→ View on GitHub</a></p>
            </div>

            <div style="margin: 15px 0;">
                <p><span class="cmd">2. 🏦 Banking Application</span></p>
                <p style="margin-left: 20px;">JavaFX-based banking system with tiered membership</p>
                <p style="margin-left: 20px; color: #00bfff;">Tech: Java, JavaFX, OOP Design</p>
                <p style="margin-left: 20px;"><a href="https://github.com/bilxl-irfan/banking-application" target="_blank" style="color: #00ff41;">→ View on GitHub</a></p>
            </div>

            <div style="margin: 15px 0;">
                <p><span class="cmd">3. 🔧 Cache Controller (VHDL)</span></p>
                <p style="margin-left: 20px;">Direct-mapped cache with SDRAM interface for FPGA</p>
                <p style="margin-left: 20px; color: #00bfff;">Tech: VHDL, Xilinx, Digital Design</p>
                <p style="margin-left: 20px;"><a href="https://github.com/bilxl-irfan/cache-controller-vhdl" target="_blank" style="color: #00ff41;">→ View on GitHub</a></p>
            </div>

            <div style="margin: 15px 0;">
                <p><span class="cmd">4. 📰 Rivet - News Aggregator App</span></p>
                <p style="margin-left: 20px;">Mobile app aggregating news from multiple sources</p>
                <p style="margin-left: 20px; color: #00bfff;">Tech: Java, Android Studio, REST APIs</p>
                <p style="margin-left: 20px;"><a href="https://github.com/bilxl-irfan/rivet-news-app" target="_blank" style="color: #00ff41;">→ View on GitHub</a></p>
            </div>

            <div style="margin: 15px 0;">
                <p><span class="cmd">5. 🤖 Arduino Fight Bot</span></p>
                <p style="margin-left: 20px;">Arduino-based robot for competitive fighting</p>
                <p style="margin-left: 20px; color: #00bfff;">Tech: Arduino, C/C++, Robotics, Hardware (servo motors, ultrasonic sensors)</p>
            </div>

            <p style="margin-top: 20px; color: #ffff00;">More projects coming soon! 🚧</p>
        `;
    },

    education: () => {
        return `
            <div class="section-title">🎓 EDUCATION</div>
            <p><span class="cmd">Bachelor of Engineering - Computer Engineering</span></p>
            <p>Toronto Metropolitan University (formerly Ryerson University)</p>
            <p>Expected Graduation: 2026</p>
            <p>CGPA: 4.13/4.33</p>
            <p>Dean's List: 2022-2023, 2023-2024, 2024-2025</p>
            <p>Honors: Pierre Lassonde Entrance Scholarship Recipient (2022)</p>
            <br>
            <p><span class="cmd">Relevant Coursework:</span></p>
            <ul style="margin-left: 20px; margin-top: 5px;">
                <li>• Embedded Systems (COE718)</li>
                <li>• Digital Systems (COE758)</li>
                <li>• Computer Networks (COE768)</li>
                <li>• Data Structures & Algorithms (COE428)</li>
                <li>• Microprocessor Systems (COE538)</li>
                <li>• Computer Vision (CPS843)</li>
                <li>• Object Oriented Eng Analysis & Design (COE528)</li>
                <li>• Control Systems (ELE639)</li>
                <li>• Signals & Systems (ELE532)</li>
                <li>• Electronic Circuits (ELE404)</li>
            </ul>
        `;
    },

    contact: () => {
        return `
            <div class="section-title">📧 CONTACT ME</div>
            <p>📧 Email: <a href="mailto:irfanbilal0904@gmail.com" style="color: #00ff41;">irfanbilal0904@gmail.com</a></p>
            <p>💼 LinkedIn: <a href="https://www.linkedin.com/in/bilal-irfan-575583233/" target="_blank" style="color: #00ff41;">linkedin.com/in/bilal-irfan</a></p>
            <p>💻 GitHub: <a href="https://github.com/bilxl-irfan" target="_blank" style="color: #00ff41;">github.com/bilxl-irfan</a></p>
            <br>
            <p class="success">✓ Feel free to reach out for collaborations or opportunities!</p>
        `;
    },

    github: () => {
        window.open('https://github.com/bilxl-irfan', '_blank');
        return '<p class="success">✓ Opening GitHub profile in new tab...</p>';
    },

    linkedin: () => {
        window.open('https://www.linkedin.com/in/bilal-irfan-575583233/', '_blank');
        return '<p class="success">✓ Opening LinkedIn profile in new tab...</p>';
    },

    resume: () => {
        // Trigger download
        const link = document.createElement('a');
        link.href = 'docs/resume.pdf';
        link.download = 'Bilal_Irfan_Resume.pdf';
        link.click();
        
        return `
            <div class="section-title">📄 RESUME DOWNLOAD</div>
            <p class="success">✓ Downloading resume...</p>
            <p style="margin-top: 10px;">If download doesn't start, <a href="docs/resume.pdf" download="Bilal_Irfan_Resume.pdf" style="color: #00ff41;">click here</a></p>
            <br>
            <p class="info">📂 Available Documents:</p>
            <ul style="margin-left: 20px; margin-top: 5px;">
                <li><a href="docs/resume.pdf" download style="color: #00ff41;">📄 Resume (PDF)</a></li>
                <li><a href="docs/ELE404.Design.Project.pdf" download style="color: #00ff41;">📊 BJT Amplifier Report</a></li>
                <li><a href="docs/COE758-Project-1-Report.pdf" download style="color: #00ff41;">📊 Cache Controller Report</a></li>
            </ul>
        `;
    },

    clear: () => {
        return '';  // Returns nothing, handled specially below
    },

    matrix: () => {
        matrixEnabled = !matrixEnabled;
        if (!matrixEnabled) {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
        }
        return `<p class="success">✓ Matrix effect ${matrixEnabled ? 'enabled' : 'disabled'}</p>`;
    }
};

// Handle command input
terminalInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        const command = terminalInput.value.trim().toLowerCase();
        
        if (command) {
            // Add to history
            commandHistory.push(command);
            historyIndex = commandHistory.length;

            // Special handling for clear command
            if (command === 'clear') {
                output.innerHTML = '';  // Clear the output
                terminalInput.value = '';  // Clear input
                return;  // Exit early
            }

            // Display command for all other commands
            const commandLine = `<div class="output-line"><span class="prompt">visitor@portfolio:~$</span> ${command}</div>`;
            output.innerHTML += commandLine;

            // Execute command
            if (commands[command]) {
                const result = commands[command]();
                if (result) {  // Only add output if command returns something
                    output.innerHTML += `<div class="output-line">${result}</div>`;
                }
            } else {
                output.innerHTML += `<div class="output-line error">Command not found: ${command}. Type 'help' for available commands.</div>`;
            }

            // Scroll to bottom
            document.querySelector('.terminal-body').scrollTop = document.querySelector('.terminal-body').scrollHeight;
        }

        terminalInput.value = '';
    }

    // Command history navigation
    if (e.key === 'ArrowUp') {
        e.preventDefault();
        if (historyIndex > 0) {
            historyIndex--;
            terminalInput.value = commandHistory[historyIndex];
        }
    }

    if (e.key === 'ArrowDown') {
        e.preventDefault();
        if (historyIndex < commandHistory.length - 1) {
            historyIndex++;
            terminalInput.value = commandHistory[historyIndex];
        } else {
            historyIndex = commandHistory.length;
            terminalInput.value = '';
        }
    }

    // Tab autocomplete
    if (e.key === 'Tab') {
        e.preventDefault();
        const currentInput = terminalInput.value.toLowerCase();
        const matchingCommands = Object.keys(commands).filter(cmd => cmd.startsWith(currentInput));
        if (matchingCommands.length === 1) {
            terminalInput.value = matchingCommands[0];
        }
    }
});

// Clear terminal with Ctrl+L (bonus shortcut)
document.addEventListener('keydown', (e) => {
    if (e.ctrlKey && e.key === 'l') {
        e.preventDefault();
        output.innerHTML = '';
        terminalInput.value = '';
    }
});

// ============= VIEW TOGGLE (IMPROVED) =============
const toggleBtn = document.getElementById('toggle-view');
const terminalContainer = document.querySelector('.terminal-container');
const cardsContainer = document.getElementById('cards-container');

toggleBtn.addEventListener('click', () => {
    // Toggle visibility
    const isTerminalVisible = !terminalContainer.classList.contains('hidden');
    
    if (isTerminalVisible) {
        // Switch to cards view
        terminalContainer.classList.add('hidden');
        cardsContainer.classList.remove('hidden');
    } else {
        // Switch to terminal view
        cardsContainer.classList.add('hidden');
        terminalContainer.classList.remove('hidden');
        // Refocus input when switching back
        setTimeout(() => {
            document.getElementById('terminal-input').focus();
        }, 100);
    }
});

// ============= TERMINAL BUTTONS =============
document.querySelector('.btn-close').addEventListener('click', () => {
    if (confirm('Close terminal?')) {
        terminalContainer.style.display = 'none';
        cardsContainer.classList.remove('hidden');
    }
});

document.querySelector('.btn-minimize').addEventListener('click', () => {
    terminalContainer.style.height = '50px';
    setTimeout(() => {
        terminalContainer.style.height = '80vh';
    }, 1000);
});

document.querySelector('.btn-maximize').addEventListener('click', () => {
    terminalContainer.style.width = '100%';
    terminalContainer.style.height = '100vh';
    terminalContainer.style.maxWidth = '100%';
    terminalContainer.style.maxHeight = '100%';
    terminalContainer.style.borderRadius = '0';
});

// Keep input focused
document.addEventListener('click', () => {
    if (!cardsContainer.classList.contains('hidden')) return;
    terminalInput.focus();
});

console.log('%c🚀 Terminal Portfolio Loaded! Type "help" to get started.', 'color: #00ff41; font-size: 16px; font-weight: bold;');
