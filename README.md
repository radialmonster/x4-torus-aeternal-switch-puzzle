# X4 Torus Aeternal Switch Puzzle

## Use It Now - Free Online Tool

**[https://radialmonster.github.io/x4-torus-aeternal-switch-puzzle/](https://radialmonster.github.io/x4-torus-aeternal-switch-puzzle/)**

No download required - use the puzzle solver directly in your browser!

---

## About

A web-based logic puzzle simulator that recreates the 8-switch puzzle from **X4: Foundations** (Torus Aeternal location). This tool helps players understand and solve the puzzle by providing:

- Interactive switch board matching the in-game layout
- Automatic solver that finds the shortest solution path
- Step-by-step instructions showing which switches to press
- Two modes for different use cases

**Disclaimer:** The ruleset implemented here is reverse-engineered based on observations and may not perfectly match the actual game behavior.

## Features

### Manual Mode
- Click switches to toggle them directly (ignores locks)
- Manually set lock states to match your current in-game situation
- View proposed solution steps based on current configuration

### Simulator Mode
- Simulates the full three-phase process when pressing a switch:
  1. **Reset Phase:** All locks are cleared
  2. **Flip Phase:** Pressed switch and connected switches toggle
  3. **Re-lock Phase:** Alternates between two lock modes
- Locks are automatically managed
- See detailed breakdown of each move

### Additional Features
- **BFS Solver:** Finds the optimal solution path (up to 20 moves)
- **URL State Sharing:** Share your current puzzle state via URL
- **Responsive Design:** Works on desktop, tablet, and mobile
- **Accessibility:** Keyboard navigation and ARIA labels

## How the Puzzle Works

### Switch Connections
Each switch toggles itself plus connected switches:

| Switch | Also Toggles |
|--------|--------------|
| 1 | 2 |
| 2 | 1, 3 |
| 3 | 4 |
| 4 | 5 |
| 5 | 4 |
| 6 | 5 |
| 7 | 8 |
| 8 | 6, 7 |

### Lock Modes
The puzzle alternates between two lock states:
- **Mode 1:** Switches 1-3 locked, switches 6-8 unlocked
- **Mode 2:** Switches 1-3 unlocked, switches 6-8 locked

Switches 4 and 5 are never locked.

## Project Structure

```
x4-torus-aeternal-switch-puzzle/
├── index.html                      # Main puzzle simulator
├── puzzle_mechanics.html           # Detailed rules explanation
├── data_collection_interface.html  # Research tool for logging puzzle interactions
├── log_puzzle_data.js              # PuzzleLogger utility class
└── README.md                       # This file
```

## Technical Details

### Technologies
- HTML5, CSS3, Vanilla JavaScript
- No external dependencies or frameworks
- localStorage for data persistence (data collection interface)
- CSS custom properties for theming

### State Representation
- **Switch states:** 8-bit integer bitmask (0 = OFF, 1 = ON)
- **Lock states:** Array of 8 booleans
- **URL params:** `switches`, `locks`, `mode`

### Solver Algorithm
Uses breadth-first search (BFS) to find the shortest path to the win state (all switches ON). Maximum search depth is 20 moves to prevent infinite loops.

## Contributing

If you find that the steps provided don't match the actual game behavior, please use the [Data Collection Interface](https://radialmonster.github.io/x4-torus-aeternal-switch-puzzle/data_collection_interface.html) to log your observations and help us improve the accuracy of the simulation.

## Links

- **Live Tool:** [https://radialmonster.github.io/x4-torus-aeternal-switch-puzzle/](https://radialmonster.github.io/x4-torus-aeternal-switch-puzzle/)
- **Puzzle Mechanics:** [https://radialmonster.github.io/x4-torus-aeternal-switch-puzzle/puzzle_mechanics.html](https://radialmonster.github.io/x4-torus-aeternal-switch-puzzle/puzzle_mechanics.html)
- **Data Collection:** [https://radialmonster.github.io/x4-torus-aeternal-switch-puzzle/data_collection_interface.html](https://radialmonster.github.io/x4-torus-aeternal-switch-puzzle/data_collection_interface.html)

## Support

If you found this tool helpful, consider [sending a virtual gift](https://radialmonster.github.io/send-a-virtual-gift/) to say thank you!
