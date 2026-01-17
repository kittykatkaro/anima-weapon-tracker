import './style.css'
import Alpine from 'alpinejs'
import { ANIMA_DATA } from './data.js'

window.Alpine = Alpine

// CONFIG: Defines the strict order of stages for the table
const STAGE_ORDER = [
    "1. Animated (i170)",
    "2. Awoken (i200)",
    "3. Anima (i210)",
    "4. Hyperconductive (i230)",
    "5. Reconditioned (i240)",
    "6. Sharpened (i260)",
    "7. Complete (i270)",
    "8. Lux (i275)",
    "9. Victory"
];

document.addEventListener('alpine:init', () => {
    Alpine.data('relicApp', () => ({
        weaponCount: 1,
        items: ANIMA_DATA,
        inventory: {}, 

        // --- 1. INITIALIZATION ---
        init() {
            // Load saved data from Browser LocalStorage
            try {
                const sCount = localStorage.getItem('relic_count');
                if (sCount) this.weaponCount = parseInt(sCount);
                
                const sInv = localStorage.getItem('relic_inventory');
                if (sInv) this.inventory = JSON.parse(sInv);
            } catch (e) { localStorage.clear(); }

            // Initialize safe defaults for every item (prevents UI errors)
            this.items.forEach(item => {
                if (this.inventory[item.id] === undefined) {
                    // Checkboxes get 'false', Number inputs get empty string ''
                    this.inventory[item.id] = item.type === 'checklist' ? false : '';
                }
            });

            // Auto-save when data changes
            this.$watch('weaponCount', v => localStorage.setItem('relic_count', v));
            this.$watch('inventory', v => localStorage.setItem('relic_inventory', JSON.stringify(v)), { deep: true });
        },

        // --- 2. CORE MATH HELPERS ---
        getGoal(item) {
            return item.qty * this.weaponCount;
        },

        getOwned(item) {
            // Logic for Checkboxes: If Checked, you own 100% of the goal.
            if (item.type === 'checklist') {
                return this.inventory[item.id] ? this.getGoal(item) : 0;
            }
            // Logic for Numbers: Return what the user typed.
            return parseInt(this.inventory[item.id]) || 0;
        },

        getRemaining(item) {
            // Goal - Owned (Min 0)
            const diff = this.getGoal(item) - this.getOwned(item);
            return Math.max(0, diff);
        },

        // --- 3. UI HELPERS ---
        
        // Calculates global % for the top progress bar
        getTotalProgress() {
            let totalNeeded = 0;
            let totalOwned = 0;

            this.items.forEach(item => {
                const goal = this.getGoal(item);
                // Cap owned at goal amount (don't give credit for over-capping)
                const owned = Math.min(this.getOwned(item), goal); 
                totalNeeded += goal;
                totalOwned += owned;
            });

            if (totalNeeded === 0) return 0;
            return Math.floor((totalOwned / totalNeeded) * 100);
        },

        // Button action to wipe data
        resetAll() {
            if(confirm("Are you sure you want to clear all inventory data?")) {
                this.inventory = {};
                this.items.forEach(item => {
                    this.inventory[item.id] = item.type === 'checklist' ? false : '';
                });
                localStorage.removeItem('relic_inventory');
            }
        },

        // Groups items into stages and sorts them by STAGE_ORDER
        groupedItems() {
            const groups = [];
            
            this.items.forEach(item => {
                const stageName = item.stage || "Unknown";
                let group = groups.find(g => g.name === stageName);
                if (!group) {
                    group = { name: stageName, items: [] };
                    groups.push(group);
                }
                group.items.push(item);
            });
            
            // Sort Logic: Finds index in the array at top of file
            return groups.sort((a, b) => {
                const indexA = STAGE_ORDER.indexOf(a.name);
                const indexB = STAGE_ORDER.indexOf(b.name);
                if (indexA === -1) return 1;
                if (indexB === -1) return -1;
                return indexA - indexB;
            });
        },

        // Footer Logic: Sums up costs for specific currencies
        getTotalLiability(currencyName) {
            let total = 0;
            this.items.forEach(item => {
                const remaining = this.getRemaining(item);
                if (remaining > 0) {
                    const option = item.options.find(o => o.currency === currencyName || o.label.includes(currencyName));
                    if (option && option.cost > 0) {
                        total += (remaining * option.cost);
                    }
                }
            });
            return total;
        }
    }))
})

Alpine.start()