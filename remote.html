<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <title>viewOS Remote</title>
    <style>
        :root {
            --bg-color: #000000;
            --top-bg: #161616;
            --button-bg: #1c1c1e;
            --button-active: #2c2c2e;
            --text-color: #ffffff;
            --secondary-text: #8e8e93;
            --btn-size: clamp(92px, 24.5vw, 106px);
            --gap-size: clamp(20px, 6vw, 26px);
        }

        * {
            box-sizing: border-box;
            user-select: none;
            -webkit-user-select: none;
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
            margin: 0;
            padding: 0;
        }

        body {
            background-color: var(--bg-color);
            color: var(--text-color);
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100vw;
            height: 100vh;
            overflow: hidden;
        }

        /* Full screen container acting as a native app interface on mobile */
        #remote-container {
            width: 100vw;
            height: 100vh;
            display: flex;
            flex-direction: column;
            background-color: var(--bg-color);
        }

        /* Top half: Matte Charcoal field containing Touchpad and Row 1 buttons */
        #top-half {
            background-color: var(--top-bg);
            height: 52%;
            width: 100%;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            padding: 0 40px 13px 40px; /* Keeps buttons resting directly above the split line */
        }

        /* Swipeable trackpad occupying the remaining top field */
        #touchpad {
            flex: 1;
            width: 100%;
            touch-action: none;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        #touchpad-indicator {
            width: 6px;
            height: 6px;
            background-color: #ffffff;
            border-radius: 50%;
            opacity: 0;
            transition: opacity 0.15s ease;
            box-shadow: 0 0 8px #ffffff;
        }

        /* Bottom half: Pitch Black field containing Row 2 and Row 3 buttons */
        #bottom-half {
            background-color: #000000;
            height: 48%;
            width: 100%;
            padding: 13px 40px 40px 40px; /* Keeps buttons aligned directly beneath the split line */
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
        }

        .row-container {
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 100%;
        }

        .bottom-grid {
            display: flex;
            justify-content: space-between;
            width: 100%;
        }

        .left-col {
            display: flex;
            flex-direction: column;
            gap: var(--gap-size); /* Matches row gap exactly */
        }

        .right-col {
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
        }

        /* Precise button scale mappings to match screenshot proportions */
        .btn {
            background-color: var(--button-bg);
            border: none;
            border-radius: 50%;
            width: var(--btn-size);
            height: var(--btn-size);
            display: flex;
            justify-content: center;
            align-items: center;
            color: var(--text-color);
            transition: background-color 0.1s, transform 0.05s;
            outline: none;
        }

        .btn:active {
            background-color: var(--button-active);
            transform: scale(0.95);
        }

        /* White outline Back button */
        .btn-back {
            border: 3.5px solid #ffffff;
        }

        .btn-text {
            font-size: 1.05rem;
            font-weight: 600;
            letter-spacing: -0.02em;
        }

        /* Elongated rocker height matches Mic + Play height combined with the gap */
        .vol-rocker {
            background-color: var(--button-bg);
            border-radius: 50px;
            width: var(--btn-size);
            height: calc(var(--btn-size) * 2 + var(--gap-size)); 
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
            padding: 20px 0;
        }

        .vol-btn {
            background: none;
            border: none;
            color: var(--text-color);
            font-size: 2.6rem;
            font-weight: 300;
            width: 100%;
            height: 40%;
            display: flex;
            justify-content: center;
            align-items: center;
            outline: none;
            transition: opacity 0.1s;
        }

        .vol-btn:active {
            opacity: 0.5;
        }

        /* Pure white crisp minimalist icons */
        .chevron-icon {
            width: 34px;
            height: 34px;
            stroke: #ffffff;
            stroke-width: 3.5;
            fill: none;
            stroke-linecap: round;
            stroke-linejoin: round;
        }

        .mic-icon {
            width: 34px;
            height: 34px;
        }

        .pause-icon {
            width: 28px;
            height: 28px;
        }
    </style>
</head>
<body>

    <div id="remote-container">
        
        <!-- Top Half (Matte Charcoal) -->
        <div id="top-half">
            <div id="touchpad">
                <div id="touchpad-indicator"></div>
            </div>
            
            <div class="row-container">
                <!-- Circular back chevron button with bold outline -->
                <button class="btn btn-back" onclick="send('Backspace')">
                    <svg viewBox="0 0 24 24" class="chevron-icon">
                        <polyline points="16 20 8 12 16 4"></polyline>
                    </svg>
                </button>

                <!-- Menu button taking you straight to home screen -->
                <button class="btn btn-text" onclick="send('Home')">MENU</button>
            </div>
        </div>

        <!-- Bottom Half (Pitch Black) -->
        <div id="bottom-half">
            <div class="bottom-grid">
                
                <!-- Left Column (Mic, Play/Pause) -->
                <div class="left-col">
                    <!-- Microphone / Guahh AI Activator -->
                    <button class="btn" onclick="send('Triangle')">
                        <svg viewBox="0 0 24 24" class="mic-icon">
                            <path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm5.3-3c0 3-2.54 5.1-5.3 5.1S6.7 14 6.7 11H5c0 3.42 2.72 6.23 6 6.72V21h2v-3.08c3.39-.49 6-3.39 6-6.92h-2z" fill="#ffffff"/>
                        </svg>
                    </button>

                    <!-- Elegant dual-capsule pause button -->
                    <button class="btn" onclick="send('PlayPause')">
                        <svg viewBox="0 0 24 24" class="pause-icon">
                            <rect x="5" y="4" width="4.5" height="16" rx="2.25" fill="#ffffff"/>
                            <rect x="14.5" y="4" width="4.5" height="16" rx="2.25" fill="#ffffff"/>
                        </svg>
                    </button>
                </div>

                <!-- Right Column (Volume Rocker) -->
                <div class="right-col">
                    <div class="vol-rocker">
                        <button class="vol-btn" onclick="send('VolumeUp')">+</button>
                        <button class="vol-btn" onclick="send('VolumeDown')">−</button>
                    </div>
                </div>

            </div>
        </div>

    </div>

    <script>
        // Track touchpad swipes
        let startX, startY;
        const pad = document.getElementById('touchpad');
        const indicator = document.getElementById('touchpad-indicator');

        pad.addEventListener('touchstart', (e) => {
            startX = e.touches[0].clientX;
            startY = e.touches[0].clientY;
            indicator.style.opacity = '1';
        }, { passive: true });

        pad.addEventListener('touchend', (e) => {
            indicator.style.opacity = '0';
            if (startX === undefined || startY === undefined) return;
            
            const diffX = e.changedTouches[0].clientX - startX;
            const diffY = e.changedTouches[0].clientY - startY;
            const threshold = 35; // Min Swipe pixels

            if (Math.abs(diffX) > Math.abs(diffY)) {
                if (Math.abs(diffX) > threshold) {
                    send(diffX > 0 ? 'ArrowRight' : 'ArrowLeft');
                } else {
                    send('Enter');
                }
            } else {
                if (Math.abs(diffY) > threshold) {
                    send(diffY > 0 ? 'ArrowDown' : 'ArrowUp');
                } else {
                    send('Enter');
                }
            }
            startX = undefined;
            startY = undefined;
        }, { passive: true });

        // Dispatch POST command endpoint to server
        async function send(command) {
            if (navigator.vibrate) navigator.vibrate(15);
            
            try {
                await fetch('/api/command', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ command: command })
                });
            } catch (e) {
                console.warn('Lost connection to viewOS server.', e);
            }
        }
    </script>
</body>
</html>
