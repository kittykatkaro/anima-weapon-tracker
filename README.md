# FFXIV Anima Weapon Tracker

An interactive, intelligent tracker for the **Heavensward Relic Weapon (Anima)** questline in Final Fantasy XIV.

Built with **Alpine.js**, **Tailwind CSS**, and **Vite**.

<img src="./public/images/main.jpg" width="800" alt="App Screenshot">

## 🌟 Key Features

### 1. Intelligent Job Management

The tracker distinguishes between three states for each weapon:

- **Gray (Inactive):** Ignored.
- **Yellow (Active):** You are currently working on this weapon. Costs are calculated.

### 2. Smart "Auto-Complete" Logic (Stage 8) 🧠

No more tedious clicking!

- **One-Click Completion:** When you check "Primal Gauntlet" in **Stage 8 (Lux)**, the app automatically fills **all** required items (dungeons, tokens, materials) for that job into your inventory.
- **Smart Undo:** Clicked by mistake? Uncheck the box, and the app restores your inventory to exactly the state it was in before.
- **Visual Reward:** The Job Icon transforms into the glowing **Lux Weapon Icon** upon completion.

### 3. Live Resource Calculator

The footer ("Resources") shows you live what you still need to farm.

- It sums up costs only for **active** (yellow) jobs.
- Calculates Poetics, Grand Company Seals, Allied Seals, and Scrip Tokens.
- **Clean UI:** Currencies you don't need (Value = 0) are automatically hidden.

### 4. Detailed Helpers & Tools

- **Dungeon Reference:** Stage 2 features a tooltip listing all 10 required dungeons per job for quick reference.
- **Sand Efficiency:** Stage 5 displays the most efficient trade-in methods. _Note: Costs are calculated per single Crystal Sand._
- **Persistence:** Your progress is automatically saved in the browser (`localStorage`).

---

## 🛠️ Project Structure

- `src/main.js`: Core logic (Alpine.js component, math, auto-complete).
- `src/data.js`: Static data regarding items, stages, and jobs.
- `index.html`: Layout and UI design.

---

## ⚖️ Legal

Final Fantasy XIV is a registered trademark of Square Enix. This tool is a fan project and is not affiliated with Square Enix.
