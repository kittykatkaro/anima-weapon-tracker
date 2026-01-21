import "./style.css";
import Alpine from "alpinejs";
import { ANIMA_DATA, JOBS, STAGE_INFO } from "./data.js";

window.Alpine = Alpine;

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
	"9. Victory",
];

document.addEventListener("alpine:init", () => {
	Alpine.data("relicApp", () => ({
		// Data Sources
		items: ANIMA_DATA,
		availableJobs: JOBS,
		stageInfo: STAGE_INFO,

		// State
		selectedJobs: [],
		inventory: {},
		showJobSelector: false,

		// --- 1. INITIALIZATION ---
		init() {
			// Load Inventory
			try {
				const sInv = localStorage.getItem("relic_inventory");
				if (sInv) this.inventory = JSON.parse(sInv);
			} catch (e) {
				localStorage.clear();
			}

			// Load Selected Jobs
			try {
				const sJobs = localStorage.getItem("relic_jobs");
				if (sJobs) {
					this.selectedJobs = JSON.parse(sJobs);
				} else {
					this.selectedJobs = ["PLD"]; // Default
				}
			} catch (e) {
				this.selectedJobs = ["PLD"];
			}

			// Initialize safe defaults
			this.items.forEach((item) => {
				if (this.inventory[item.id] === undefined) {
					// NEW: Checklists must be an Array [], not 'false'
					this.inventory[item.id] = item.type === "checklist" ? [] : "";
				}
				// CRITICAL FIX: If old data exists as true/false, force it to become an Array
				else if (
					item.type === "checklist" &&
					!Array.isArray(this.inventory[item.id])
				) {
					this.inventory[item.id] = [];
				}
			});

			// Watchers for Auto-Save
			this.$watch("selectedJobs", (v) =>
				localStorage.setItem("relic_jobs", JSON.stringify(v)),
			);
			this.$watch(
				"inventory",
				(v) => localStorage.setItem("relic_inventory", JSON.stringify(v)),
				{ deep: true },
			);
		},

		// --- 2. HELPERS ---

		// Dynamic Weapon Count based on selected jobs
		get weaponCount() {
			return this.selectedJobs.length || 1;
		},

		toggleJob(jobId) {
			if (this.selectedJobs.includes(jobId)) {
				this.selectedJobs = this.selectedJobs.filter((id) => id !== jobId);
			} else {
				this.selectedJobs.push(jobId);
			}
		},

		getGoal(item) {
			return item.qty * this.weaponCount;
		},

		getOwned(item) {
			// NEW LOGIC: For checklists, count how many jobs are in the "Done" list
			if (item.type === "checklist") {
				// Ensure it is an array before checking length to prevent errors
				return Array.isArray(this.inventory[item.id])
					? this.inventory[item.id].length
					: 0;
			}
			// Logic for regular items remains the same
			return parseInt(this.inventory[item.id]) || 0;
		},

		getRemaining(item) {
			return Math.max(0, this.getGoal(item) - this.getOwned(item));
		},

		// Calculate Progress % for a SINGLE Stage
		getStageProgress(stageName) {
			const group = this.items.filter((i) => i.stage === stageName);
			if (!group.length) return 0;

			let totalNeeded = 0;
			let totalOwned = 0;

			group.forEach((item) => {
				const goal = this.getGoal(item);
				const owned = Math.min(this.getOwned(item), goal);
				totalNeeded += goal;
				totalOwned += owned;
			});

			if (totalNeeded === 0) return 100;
			return Math.floor((totalOwned / totalNeeded) * 100);
		},

		// --- 3. UI & GROUPING ---

		// Calculates global % for the top progress bar
		getTotalProgress() {
			let totalNeeded = 0;
			let totalOwned = 0;

			this.items.forEach((item) => {
				const goal = this.getGoal(item);
				const owned = Math.min(this.getOwned(item), goal);
				totalNeeded += goal;
				totalOwned += owned;
			});

			if (totalNeeded === 0) return 0;
			return Math.floor((totalOwned / totalNeeded) * 100);
		},

		resetAll() {
			if (confirm("Are you sure you want to clear all inventory data?")) {
				this.inventory = {};
				this.selectedJobs = ["PLD"];
				this.items.forEach((item) => {
					this.inventory[item.id] = item.type === "checklist" ? false : "";
				});
				localStorage.removeItem("relic_inventory");
				localStorage.removeItem("relic_jobs");
			}
		},

		groupedItems() {
			const groups = [];
			this.items.forEach((item) => {
				const stageName = item.stage || "Unknown";
				let group = groups.find((g) => g.name === stageName);
				if (!group) {
					group = { name: stageName, items: [] };
					groups.push(group);
				}
				group.items.push(item);
			});

			return groups.sort((a, b) => {
				const indexA = STAGE_ORDER.indexOf(a.name);
				const indexB = STAGE_ORDER.indexOf(b.name);
				if (indexA === -1) return 1;
				if (indexB === -1) return -1;
				return indexA - indexB;
			});
		},

		getTotalLiability(currencyName) {
			let total = 0;
			this.items.forEach((item) => {
				const remaining = this.getRemaining(item);
				if (remaining > 0) {
					const option = item.options.find(
						(o) =>
							o.currency === currencyName || o.label.includes(currencyName),
					);
					if (option && option.cost > 0) {
						total += remaining * option.cost;
					}
				}
			});
			return total;
		},

		handleMissingIcon(event) {
			// 1. Stop the loop!
			// This prevents the error from firing again if the placeholder also fails.
			event.target.onerror = null;

			// 2. Set the fallback image
			event.target.src = "./images/icons/placeholder.png";
		},
	}));
});

Alpine.start();
