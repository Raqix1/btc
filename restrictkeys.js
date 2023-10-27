<head>
    <!-- other head content -->
    <script>
        document.addEventListener("DOMContentLoaded", function() {
            // Objects to keep track of keys pressed and released
            let keysPressed = {};
            let keysReleased = {};

            function handleKeyEvent(event) {
                if (event.type === 'keydown') {
                    keysPressed[event.code] = true;
                } else if (event.type === 'keyup') {
                    keysReleased[event.code] = true;
                }

                const restrictedChars = [
                    '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', 
                    '{', '}', '|', ':', '"', '<', '>', '?', '~', '`', '-', '=', 
                    '[', ']', '\\', ';', '\'', ',', '.', '/', '¡', 'F1', 'F2', 'F3', 
                    'F4', 'F5', 'F6', 'F7', 'F8', 'F9', 'F10', 'F11', 'F12', 
                    'AudioVolumeMute', 'AudioVolumeUp', 'AudioVolumeDown', 
                    'BrightnessUp', 'BrightnessDown', 'MediaTrackNext', 
                    'MediaTrackPrevious', 'MediaPlayPause', 'MediaRewind', 
                    'MediaFastForward', 'Sleep', 'AppleDisplaySwitch', 'Numpad0', 
                    'Numpad1', 'Numpad2', 'Numpad3', 'Numpad4', 'Numpad5', 'Numpad6', 
                    'Numpad7', 'Numpad8', 'Numpad9', 'NumpadAdd', 'NumpadSubtract', 
                    'NumpadMultiply', 'NumpadDivide', 'NumpadEnter', 'NumpadDecimal', 
                    'NumpadClear', 'PageDown', 'ArrowDown', 'PageUp', 'ArrowUp', 
                    'End', 'ArrowRight', 'Home', 'ArrowLeft', 'Insert', 'Delete', 
                    'ControlLeft', 'ControlRight', 'ShiftLeft', 'ShiftRight', 'AltLeft', 
                    'AltRight', 'CapsLock', 'NumLock', 'ScrollLock', 'Pause', 
                    'ContextMenu', 'Escape', 'PrintScreen'
                ];

                if (restrictedChars.includes(event.key.toLowerCase()) || restrictedChars.includes(event.code)) {
                    event.preventDefault();
                    event.stopImmediatePropagation();
                }

                // Check for Ctrl + Alt + Arrow key combinations
                if ((keysPressed['ControlLeft'] || keysPressed['ControlRight']) && (keysPressed['AltLeft'] || keysPressed['AltRight']) && ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].includes(event.code)) {
                    event.preventDefault();
                    event.stopImmediatePropagation();
                }
            }

            // Add event listeners for keys
            document.addEventListener('keydown', handleKeyEvent);
            document.addEventListener('keyup', handleKeyEvent);

            // Mutation Observer
            const observerConfig = {
                childList: true,
                subtree: true
            };

            function callback(mutationsList, observer) {
                for (let mutation of mutationsList) {
                    if (mutation.type === 'childList') {
                        // Check if the added nodes include script tags
                        for (let node of mutation.addedNodes) {
                            if (node.nodeName === 'SCRIPT') {
                                console.warn('New script tag added!', node);
                            }
                        }
                    }
                }
            }

            const observer = new MutationObserver(callback);
            observer.observe(document, observerConfig);
        });
    </script>
</head>
