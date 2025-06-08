// Puzzle Data Logger
// Use this to systematically record puzzle interactions

class PuzzleLogger {
    constructor() {
        this.sessionData = [];
    }

    // Record a complete puzzle interaction
    logInteraction(startState, action, voiceClue, endState, notes = "") {
        const interaction = {
            timestamp: new Date().toISOString(),
            startState: this.formatSwitchState(startState),
            action: action,
            voiceClue: voiceClue || null,
            endState: this.formatSwitchState(endState),
            notes: notes,
            stateChanges: this.calculateStateChanges(startState, endState)
        };
        
        this.sessionData.push(interaction);
        console.log("Logged interaction:", interaction);
        return interaction;
    }

    // Format switch state for consistent logging
    formatSwitchState(state) {
        // Expected format: array of 8 objects with {on: boolean, locked: boolean}
        // or simple format like "Switch 1: On/Unlocked, Switch 2: Off/Locked, ..."
        if (typeof state === 'string') {
            return this.parseStringState(state);
        }
        return state;
    }

    // Parse string descriptions into structured format
    parseStringState(stateString) {
        const switches = {};
        // This will need to be adapted based on how you provide the state info
        return switches;
    }

    // Calculate what changed between states
    calculateStateChanges(startState, endState) {
        const changes = [];
        // Compare states and identify differences
        for (let i = 1; i <= 8; i++) {
            const start = startState[i] || startState[i-1];
            const end = endState[i] || endState[i-1];
            
            if (start && end) {
                if (start.on !== end.on) {
                    changes.push(`Switch ${i}: ${start.on ? 'On' : 'Off'} -> ${end.on ? 'On' : 'Off'}`);
                }
                if (start.locked !== end.locked) {
                    changes.push(`Switch ${i}: ${start.locked ? 'Locked' : 'Unlocked'} -> ${end.locked ? 'Locked' : 'Unlocked'}`);
                }
            }
        }
        return changes;
    }

    // Export session data for analysis
    exportSession() {
        return {
            sessionId: Date.now(),
            interactions: this.sessionData,
            summary: {
                totalInteractions: this.sessionData.length,
                voiceClues: this.sessionData.filter(i => i.voiceClue).map(i => i.voiceClue),
                uniqueActions: [...new Set(this.sessionData.map(i => i.action))]
            }
        };
    }

    // Analyze patterns in the data
    analyzePatterns() {
        const patterns = {
            lockingTriggers: [],
            voiceCluePatterns: [],
            stateTransitions: []
        };

        // Look for patterns in when switches get locked/unlocked
        this.sessionData.forEach((interaction, index) => {
            const lockChanges = interaction.stateChanges.filter(change => 
                change.includes('Locked') || change.includes('Unlocked')
            );
            
            if (lockChanges.length > 0) {
                patterns.lockingTriggers.push({
                    interaction: index,
                    action: interaction.action,
                    voiceClue: interaction.voiceClue,
                    lockChanges: lockChanges
                });
            }
        });

        return patterns;
    }
}

// Usage example:
// const logger = new PuzzleLogger();
// logger.logInteraction(startState, "Flipped switch 3", "2,5,7", endState, "First attempt");

console.log("Puzzle Logger loaded. Create instance with: const logger = new PuzzleLogger();");
