const foodInput = document.querySelector("#foodInput");
const navItems = document.querySelectorAll("[data-nav]");
const viewPanels = document.querySelectorAll("[data-view]");
const stickerWall = document.querySelector("#stickerWall");
const stickerCount = document.querySelector("#stickerCount");
const motionButton = document.querySelector("#motionButton");
const headerStreak = document.querySelector("#headerStreak");
const headerRecordCount = document.querySelector("#headerRecordCount");
const profileShortcut = document.querySelector("#profileShortcut");
const questTitle = document.querySelector("#questTitle");
const xpValue = document.querySelector("#xpValue");
const startScanButton = document.querySelector("#startScanButton");
const aiStatusPill = document.querySelector("#aiStatusPill");
const aiStatusText = document.querySelector("#aiStatusText");
const barcodeButton = document.querySelector("#barcodeButton");
const foodSearchInput = document.querySelector("#foodSearchInput");
const foodSearchButton = document.querySelector("#foodSearchButton");
const packageGramInput = document.querySelector("#packageGramInput");
const addPackageButton = document.querySelector("#addPackageButton");
const ocrButton = document.querySelector("#ocrButton");
const saveCustomFoodButton = document.querySelector("#saveCustomFoodButton");
const healthModeInput = document.querySelector("#healthModeInput");
const placeInput = document.querySelector("#placeInput");
const modeHint = document.querySelector("#modeHint");
const contextTip = document.querySelector("#contextTip");
const drinkInput = document.querySelector("#drinkInput");
const demoButton = document.querySelector("#demoButton");
const drinkDemoButton = document.querySelector("#drinkDemoButton");
const foodPreview = document.querySelector("#foodPreview");
const drinkPreview = document.querySelector("#drinkPreview");
const drinkStatus = document.querySelector("#drinkStatus");
const drinkName = document.querySelector("#drinkName");
const drinkTypeOptions = document.querySelector("#drinkTypeOptions");
const drinkSizeOptions = document.querySelector("#drinkSizeOptions");
const sugarOptions = document.querySelector("#sugarOptions");
const toppingOptions = document.querySelector("#toppingOptions");
const drinkCalories = document.querySelector("#drinkCalories");
const drinkDetail = document.querySelector("#drinkDetail");
const addDrinkButton = document.querySelector("#addDrinkButton");
const emptyCamera = document.querySelector("#emptyCamera");
const cutoutMask = document.querySelector("#cutoutMask");
const foodBoxLayer = document.querySelector("#foodBoxLayer");
const scanLine = document.querySelector("#scanLine");
const mealTypeHint = document.querySelector("#mealTypeHint");
const mealTypeOptions = document.querySelector("#mealTypeOptions");
const statusPill = document.querySelector("#statusPill");
const foodName = document.querySelector("#foodName");
const dailyBudget = document.querySelector("#dailyBudget");
const profileBudget = document.querySelector("#profileBudget");
const budgetFill = document.querySelector("#budgetFill");
const breakfastKcal = document.querySelector("#breakfastKcal");
const lunchKcal = document.querySelector("#lunchKcal");
const remainingBudget = document.querySelector("#remainingBudget");
const profileForm = document.querySelector("#profileForm");
const heightInput = document.querySelector("#heightInput");
const weightInput = document.querySelector("#weightInput");
const ageInput = document.querySelector("#ageInput");
const genderInput = document.querySelector("#genderInput");
const goalInput = document.querySelector("#goalInput");
const activityInput = document.querySelector("#activityInput");
const confirmText = document.querySelector("#confirmText");
const confirmButton = document.querySelector("#confirmButton");
const detectedList = document.querySelector("#detectedList");
const calorieValue = document.querySelector("#calorieValue");
const confidenceText = document.querySelector("#confidenceText");
const proteinValue = document.querySelector("#proteinValue");
const carbValue = document.querySelector("#carbValue");
const fatValue = document.querySelector("#fatValue");
const weeklyBars = document.querySelector("#weeklyBars");
const weeklyTotal = document.querySelector("#weeklyTotal");
const averageValue = document.querySelector("#averageValue");
const peakValue = document.querySelector("#peakValue");
const withinBudgetDays = document.querySelector("#withinBudgetDays");
const breakfastAvg = document.querySelector("#breakfastAvg");
const dinnerAvg = document.querySelector("#dinnerAvg");
const lateSnackCount = document.querySelector("#lateSnackCount");
const drinkShareBar = document.querySelector("#drinkShareBar");
const snackShareBar = document.querySelector("#snackShareBar");
const drinkShareText = document.querySelector("#drinkShareText");
const snackShareText = document.querySelector("#snackShareText");
const weeklyNarrative = document.querySelector("#weeklyNarrative");
const lowestDay = document.querySelector("#lowestDay");
const overBudgetDays = document.querySelector("#overBudgetDays");
const streakDays = document.querySelector("#streakDays");
const weekKeywords = document.querySelector("#weekKeywords");
const warningList = document.querySelector("#warningList");
const badgeList = document.querySelector("#badgeList");
const profileBadgeList = document.querySelector("#profileBadgeList");
const profileAvatar = document.querySelector("#profileAvatar");
const profileTitle = document.querySelector("#profileTitle");
const profileSubtitle = document.querySelector("#profileSubtitle");
const profileStreak = document.querySelector("#profileStreak");
const profileBadgeCount = document.querySelector("#profileBadgeCount");
const badgeCountLabel = document.querySelector("#badgeCountLabel");
const clearRecordsButton = document.querySelector("#clearRecordsButton");
const timerPhase = document.querySelector("#timerPhase");
const timerRound = document.querySelector("#timerRound");
const timerTime = document.querySelector("#timerTime");
const timerHint = document.querySelector("#timerHint");
const timerSets = document.querySelector("#timerSets");
const timerWork = document.querySelector("#timerWork");
const timerRest = document.querySelector("#timerRest");
const timerStart = document.querySelector("#timerStart");
const timerPause = document.querySelector("#timerPause");
const timerReset = document.querySelector("#timerReset");
const stickerSources = [
  "assets/food-icons-dessert.jpeg",
  "assets/food-icons-meal.jpeg",
];

const portionOptions = [
  { label: "半碗", value: 0.5 },
  { label: "一碗", value: 1 },
  { label: "两碗", value: 2 },
];

const cookingOptions = [
  { label: "清蒸", value: "steam", multiplier: 1 },
  { label: "油炒", value: "stir", multiplier: 1.22 },
  { label: "油炸", value: "fry", multiplier: 1.58 },
  { label: "水煮", value: "boil", multiplier: 0.95 },
];

const drinkTypes = [
  { id: "milkTea", label: "奶茶", baseKcal: 180 },
  { id: "coffee", label: "咖啡", baseKcal: 80 },
  { id: "juice", label: "果汁", baseKcal: 140 },
];

const drinkSizes = [
  { id: "small", label: "小杯", multiplier: 0.8 },
  { id: "medium", label: "中杯", multiplier: 1 },
  { id: "large", label: "大杯", multiplier: 1.25 },
];

const sugarLevels = [
  { id: "none", label: "无糖", kcal: 0 },
  { id: "low", label: "三分糖", kcal: 35 },
  { id: "half", label: "半糖", kcal: 70 },
  { id: "full", label: "全糖", kcal: 120 },
];

const toppings = [
  { id: "pearl", label: "珍珠", kcal: 110 },
  { id: "coconut", label: "椰果", kcal: 65 },
  { id: "cream", label: "奶盖", kcal: 150 },
  { id: "taro", label: "芋圆", kcal: 130 },
];

const activityMultipliers = {
  sedentary: 1.2,
  light: 1.375,
  moderate: 1.55,
  high: 1.725,
};

const goalAdjustments = {
  loss: -300,
  maintain: 0,
  gain: 250,
  record: 0,
};

const mealTypes = [
  { id: "breakfast", label: "早餐" },
  { id: "lunch", label: "午餐" },
  { id: "dinner", label: "晚餐" },
  { id: "snack", label: "加餐" },
  { id: "drink", label: "饮料" },
  { id: "lateSnack", label: "夜宵" },
];

const weekdayLabels = ["日", "一", "二", "三", "四", "五", "六"];
const storageKey = "calorieQuestState.v2";

let detectedFoods = [];
let confirmed = false;
let selectedFoodId = null;
let selectedMealType = "lunch";
let activeRecordMealType = "lunch";
let mealLog = {
  breakfast: 0,
  lunch: 0,
  dinner: 0,
  snack: 0,
  drink: 0,
  lateSnack: 0,
};
let drinkState = {
  type: "milkTea",
  size: "medium",
  sugar: "half",
  toppings: ["pearl"],
  recognized: false,
};
let stickers = [];
let records = [];
let pendingRecord = null;
let timerState = {
  running: false,
  phase: "ready",
  round: 1,
  remaining: 30,
  interval: null,
};
let stickerIcons = [];

function loadImage(src) {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.addEventListener("load", () => resolve(image));
    image.addEventListener("error", reject);
    image.src = src;
  });
}

function cutStickerIcon(image, col, row) {
  const sourceWidth = image.naturalWidth / 3;
  const sourceHeight = image.naturalHeight / 4;
  const canvas = document.createElement("canvas");
  const size = 220;
  canvas.width = size;
  canvas.height = size;
  const context = canvas.getContext("2d");
  context.drawImage(image, col * sourceWidth, row * sourceHeight, sourceWidth, sourceHeight, 0, 0, size, size);
  const imageData = context.getImageData(0, 0, size, size);
  const pixels = imageData.data;
  for (let index = 0; index < pixels.length; index += 4) {
    const red = pixels[index];
    const green = pixels[index + 1];
    const blue = pixels[index + 2];
    if (blue > 70 && red < 45 && green < 95) {
      pixels[index + 3] = 0;
    }
  }
  context.putImageData(imageData, 0, 0);
  return canvas.toDataURL("image/png");
}

async function prepareStickerIcons() {
  try {
    const images = await Promise.all(stickerSources.map(loadImage));
    stickerIcons = images.flatMap((image) => {
      const icons = [];
      for (let row = 0; row < 4; row += 1) {
        for (let col = 0; col < 3; col += 1) {
          icons.push(cutStickerIcon(image, col, row));
        }
      }
      return icons;
    });
    renderStickers();
  } catch {
    stickerIcons = [];
  }
}

function setView(view) {
  viewPanels.forEach((panel) => {
    panel.classList.toggle("active-view", panel.dataset.view === view);
  });
  navItems.forEach((item) => {
    item.classList.toggle("active", item.dataset.nav === view);
  });
}

function todayKey(date = new Date()) {
  return date.toISOString().slice(0, 10);
}

function getRecordDate(record) {
  return new Date(record.createdAt || Date.now());
}

function getTodayRecords() {
  const today = todayKey();
  return records.filter((record) => todayKey(getRecordDate(record)) === today);
}

function getCurrentWeekRecords() {
  const now = new Date();
  const start = new Date(now);
  start.setHours(0, 0, 0, 0);
  start.setDate(now.getDate() - ((now.getDay() + 6) % 7));
  return records.filter((record) => getRecordDate(record) >= start);
}

function getMealTotals(sourceRecords = getTodayRecords()) {
  return sourceRecords.reduce(
    (totals, record) => {
      totals[record.mealType] = (totals[record.mealType] || 0) + record.kcal;
      return totals;
    },
    { breakfast: 0, lunch: 0, dinner: 0, snack: 0, drink: 0, lateSnack: 0 },
  );
}

function saveState() {
  try {
    localStorage.setItem(storageKey, JSON.stringify({ records, stickers }));
  } catch {
    // Local persistence is best-effort.
  }
}

function loadState() {
  try {
    const saved = JSON.parse(localStorage.getItem(storageKey) || "{}");
    records = Array.isArray(saved.records) ? saved.records : [];
    stickers = Array.isArray(saved.stickers) ? saved.stickers : [];
  } catch {
    records = [];
    stickers = [];
  }
}

function getBadges() {
  const weekRecords = getCurrentWeekRecords();
  const badges = [];
  if (records.length >= 1) badges.push("记录小能手");
  if (weekRecords.length >= 5) badges.push("周报达人");
  if (weekRecords.filter((record) => record.mealType === "drink").reduce((sum, record) => sum + record.kcal, 0) <= 250 && weekRecords.length >= 3) {
    badges.push("奶茶克制者");
  }
  if (weekRecords.some((record) => record.title.includes("沙拉") || record.title.includes("青菜"))) {
    badges.push("蔬菜守护者");
  }
  return badges;
}

function renderShellState() {
  const todayRecords = getTodayRecords();
  const recordCount = todayRecords.length;
  const xp = records.length * 20;
  const badges = getBadges();
  headerRecordCount.textContent = recordCount;
  headerStreak.textContent = recordCount ? `今天已记录 ${recordCount} 餐` : "准备开始记录";
  questTitle.textContent = recordCount
    ? `今天已记录 ${recordCount} 餐，继续补全照片日记`
    : "拍下第一餐，建立今天的热量预算";
  xpValue.textContent = `${xp} XP`;
  profileAvatar.textContent = recordCount;
  profileTitle.textContent = recordCount ? `今天已记录 ${recordCount} 餐` : "还没有连续记录";
  profileSubtitle.textContent = `${xp} XP · ${healthModeInput.options[healthModeInput.selectedIndex]?.text || "学生党模式"}`;
  profileStreak.textContent = records.length ? 1 : 0;
  profileBadgeCount.textContent = badges.length;
  badgeCountLabel.textContent = `${badges.length} 枚`;
  profileBadgeList.innerHTML = badges.length
    ? badges.map((text) => `<div class="badge-item">${text}</div>`).join("")
    : '<div class="badge-empty">完成第一次记录后，会在这里点亮徽章。</div>';
}

function beep(frequency = 880, duration = 130) {
  const AudioContext = window.AudioContext || window.webkitAudioContext;
  if (!AudioContext) return;
  const context = new AudioContext();
  const oscillator = context.createOscillator();
  const gain = context.createGain();
  oscillator.frequency.value = frequency;
  oscillator.connect(gain);
  gain.connect(context.destination);
  oscillator.start();
  gain.gain.setValueAtTime(0.0001, context.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.18, context.currentTime + 0.02);
  gain.gain.exponentialRampToValueAtTime(0.0001, context.currentTime + duration / 1000);
  oscillator.stop(context.currentTime + duration / 1000);
}

function renderTimer() {
  const total = Number(timerSets.value) || 4;
  timerRound.textContent = `第 ${timerState.round} / ${total} 组`;
  timerTime.textContent = timerState.remaining;
  const label = {
    ready: "待开始",
    countdown: "准备",
    work: "运动",
    rest: "休息",
    done: "完成",
  }[timerState.phase];
  timerPhase.textContent = label;
}

function stopTimer() {
  window.clearInterval(timerState.interval);
  timerState.interval = null;
  timerState.running = false;
}

function startPhase(phase, seconds) {
  timerState.phase = phase;
  timerState.remaining = seconds;
  renderTimer();
}

function startCountdown() {
  startPhase("countdown", 3);
  beep(740);
}

function tickTimer() {
  if (timerState.remaining > 1) {
    timerState.remaining -= 1;
    if (timerState.phase === "countdown") beep(timerState.remaining === 1 ? 980 : 740);
    renderTimer();
    return;
  }

  const total = Number(timerSets.value) || 4;
  const work = Number(timerWork.value) || 30;
  const rest = Number(timerRest.value) || 15;

  if (timerState.phase === "countdown") {
    beep(1120, 220);
    startPhase("work", work);
    timerHint.textContent = "开始运动，跟着提示走，歌单继续你自己掌控。";
    return;
  }

  if (timerState.phase === "work") {
    if (rest > 0) {
      beep(520, 180);
      startPhase("rest", rest);
      timerHint.textContent = "休息一下，下一组开始前会有 3 秒提示音。";
    } else if (timerState.round < total) {
      timerState.round += 1;
      startCountdown();
    } else {
      stopTimer();
      startPhase("done", 0);
      timerHint.textContent = "训练完成，今天的节奏拿下了。";
    }
    return;
  }

  if (timerState.phase === "rest") {
    if (timerState.round < total) {
      timerState.round += 1;
      startCountdown();
    } else {
      stopTimer();
      startPhase("done", 0);
      timerHint.textContent = "训练完成，音乐还在，你也还在。";
    }
  }
}

function fileToDataUrl(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.addEventListener("load", () => resolve(reader.result));
    reader.addEventListener("error", reject);
    reader.readAsDataURL(file);
  });
}

function createDetectedFoods() {
  return [
    {
      id: "rice",
      name: "米饭",
      baseKcal: 180,
      protein: 3,
      carb: 41,
      fat: 0.4,
      portion: 1,
      cooking: "steam",
      box: { left: 12, top: 17, width: 34, height: 30 },
    },
    {
      id: "pork",
      name: "红烧肉",
      baseKcal: 344,
      protein: 18,
      carb: 10,
      fat: 34,
      portion: 1,
      cooking: "stir",
      box: { left: 47, top: 18, width: 38, height: 31 },
    },
    {
      id: "greens",
      name: "青菜",
      baseKcal: 74,
      protein: 4,
      carb: 9,
      fat: 4,
      portion: 1,
      cooking: "stir",
      box: { left: 14, top: 53, width: 36, height: 26 },
    },
    {
      id: "soup",
      name: "鸡蛋汤",
      baseKcal: 74,
      protein: 6,
      carb: 2,
      fat: 4,
      portion: 1,
      cooking: "boil",
      box: { left: 55, top: 54, width: 29, height: 27 },
    },
  ];
}

function renderBars() {
  const weekData = buildWeekData();
  const max = Math.max(...weekData.map((item) => item.kcal));
  const total = weekData.reduce((sum, item) => sum + item.kcal, 0);
  weeklyBars.innerHTML = weekData
    .map((item) => {
      const height = item.kcal ? Math.max(18, Math.round((item.kcal / Math.max(max, 1)) * 98)) : 4;
      return `
        <div class="bar-item" title="${item.kcal} kcal">
          <div class="bar-track">
            <span class="bar-fill" style="height: ${height}px"></span>
          </div>
          <span>${item.day}</span>
        </div>
      `;
    })
    .join("");
  weeklyTotal.textContent = `${total.toLocaleString("zh-CN")} kcal`;
  const activeDays = weekData.filter((item) => item.kcal > 0).length;
  averageValue.textContent = activeDays ? Math.round(total / activeDays).toLocaleString("zh-CN") : "0";
  peakValue.textContent = max.toLocaleString("zh-CN");
  withinBudgetDays.textContent = `${weekData.filter((item) => item.kcal > 0 && item.kcal <= calculateDailyBudget()).length} 天`;
}

function renderMealTypeOptions() {
  mealTypeOptions.innerHTML = mealTypes
    .map(
      (meal) => `
        <button
          class="meal-type-button ${meal.id === selectedMealType ? "active" : ""}"
          type="button"
          data-meal-type="${meal.id}"
        >
          ${meal.label}
        </button>
      `,
    )
    .join("");
  mealTypeHint.textContent = mealTypes.find((meal) => meal.id === selectedMealType)?.label || "午餐";
}

function renderChoiceButtons(container, items, activeId, action) {
  container.innerHTML = items
    .map(
      (item) => `
        <button
          class="drink-option ${item.id === activeId ? "active" : ""}"
          type="button"
          data-action="${action}"
          data-value="${item.id}"
        >
          ${item.label}
        </button>
      `,
    )
    .join("");
}

function getDrinkCalories() {
  const type = drinkTypes.find((item) => item.id === drinkState.type) || drinkTypes[0];
  const size = drinkSizes.find((item) => item.id === drinkState.size) || drinkSizes[1];
  const sugar = sugarLevels.find((item) => item.id === drinkState.sugar) || sugarLevels[2];
  const toppingKcal = toppings
    .filter((item) => drinkState.toppings.includes(item.id))
    .reduce((sum, item) => sum + item.kcal, 0);

  return Math.round(type.baseKcal * size.multiplier + sugar.kcal + toppingKcal);
}

function renderDrinkModule() {
  const type = drinkTypes.find((item) => item.id === drinkState.type) || drinkTypes[0];
  const size = drinkSizes.find((item) => item.id === drinkState.size) || drinkSizes[1];
  const sugar = sugarLevels.find((item) => item.id === drinkState.sugar) || sugarLevels[2];
  const selectedToppings = toppings.filter((item) => drinkState.toppings.includes(item.id));
  const calories = getDrinkCalories();

  renderChoiceButtons(drinkTypeOptions, drinkTypes, drinkState.type, "drink-type");
  renderChoiceButtons(drinkSizeOptions, drinkSizes, drinkState.size, "drink-size");
  renderChoiceButtons(sugarOptions, sugarLevels, drinkState.sugar, "sugar");
  toppingOptions.innerHTML = toppings
    .map(
      (item) => `
        <button
          class="topping-option ${drinkState.toppings.includes(item.id) ? "active" : ""}"
          type="button"
          data-action="topping"
          data-value="${item.id}"
        >
          ${item.label}
        </button>
      `,
    )
    .join("");

  drinkPreview.classList.toggle("recognized", drinkState.recognized);
  drinkStatus.textContent = drinkState.recognized ? "已识别" : "待识别";
  drinkName.textContent = drinkState.recognized ? `识别结果：${type.label}` : "拍照识别饮料";
  drinkCalories.textContent = drinkState.recognized ? calories.toLocaleString("zh-CN") : "--";
  drinkDetail.textContent = `${type.label} · ${size.label} · ${sugar.label} · ${
    selectedToppings.length ? selectedToppings.map((item) => item.label).join("、") : "无配料"
  }`;
}

function calculateDailyBudget() {
  const height = Number(heightInput.value) || 170;
  const weight = Number(weightInput.value) || 68;
  const age = Number(ageInput.value) || 30;
  const genderOffset = genderInput.value === "male" ? 5 : -161;
  const bmr = 10 * weight + 6.25 * height - 5 * age + genderOffset;
  const activity = activityMultipliers[activityInput.value] || activityMultipliers.light;
  const adjustment = goalAdjustments[goalInput.value] || 0;
  return Math.max(1200, Math.round((bmr * activity + adjustment) / 50) * 50);
}

function renderBudget() {
  const budget = calculateDailyBudget();
  mealLog = getMealTotals();
  const consumed = Object.values(mealLog).reduce((sum, kcal) => sum + kcal, 0);
  const remaining = budget - consumed;
  const progress = Math.min(100, Math.max(0, (consumed / budget) * 100));

  dailyBudget.textContent = budget.toLocaleString("zh-CN");
  profileBudget.textContent = budget.toLocaleString("zh-CN");
  breakfastKcal.textContent = mealLog.breakfast.toLocaleString("zh-CN");
  lunchKcal.textContent = mealLog.lunch.toLocaleString("zh-CN");
  remainingBudget.textContent = remaining.toLocaleString("zh-CN");
  budgetFill.style.width = `${progress}%`;
  renderShellState();
}

function buildWeekData() {
  const weekRecords = getCurrentWeekRecords();
  const data = ["一", "二", "三", "四", "五", "六", "日"].map((day) => ({ day, kcal: 0 }));
  weekRecords.forEach((record) => {
    const label = weekdayLabels[getRecordDate(record).getDay()];
    const item = data.find((entry) => entry.day === label);
    if (item) item.kcal += record.kcal;
  });
  return data;
}

function renderMealStats() {
  const weekRecords = getCurrentWeekRecords();
  const weeklyTotalKcal = weekRecords.reduce((sum, record) => sum + record.kcal, 0);
  const byMeal = getMealTotals(weekRecords);
  const daysWithBreakfast = new Set(
    weekRecords.filter((record) => record.mealType === "breakfast").map((record) => todayKey(getRecordDate(record))),
  ).size;
  const daysWithDinner = new Set(
    weekRecords.filter((record) => record.mealType === "dinner").map((record) => todayKey(getRecordDate(record))),
  ).size;
  const breakfastAverage = daysWithBreakfast ? Math.round(byMeal.breakfast / daysWithBreakfast) : 0;
  const dinnerAverage = daysWithDinner ? Math.round(byMeal.dinner / daysWithDinner) : 0;
  const lateCount = weekRecords.filter((record) => record.mealType === "lateSnack").length;
  const drinkShare = weeklyTotalKcal ? Math.round((byMeal.drink / weeklyTotalKcal) * 100) : 0;
  const snackShare = weeklyTotalKcal ? Math.round((byMeal.snack / weeklyTotalKcal) * 100) : 0;

  breakfastAvg.textContent = breakfastAverage ? `${breakfastAverage} kcal` : "--";
  dinnerAvg.textContent = dinnerAverage ? `${dinnerAverage} kcal` : "--";
  lateSnackCount.textContent = `${lateCount} 次`;
  drinkShareText.textContent = `${drinkShare}%`;
  snackShareText.textContent = `${snackShare}%`;
  drinkShareBar.style.width = `${drinkShare}%`;
  snackShareBar.style.width = `${snackShare}%`;
}

function renderAdvancedReport() {
  const weekRecords = getCurrentWeekRecords();
  if (!weekRecords.length) {
    weeklyNarrative.textContent = "本周还没有饮食记录。完成第一餐后，这里会生成趋势和提醒。";
    lowestDay.textContent = "--";
    overBudgetDays.textContent = "0 天";
    streakDays.textContent = "0 天";
    weekKeywords.textContent = "暂无";
    warningList.innerHTML = '<div class="warning-item">先记录一餐，再让 AI 帮你看趋势。</div>';
    badgeList.innerHTML = '<div class="badge-empty">暂无周报徽章</div>';
    return;
  }

  const total = weekRecords.reduce((sum, record) => sum + record.kcal, 0);
  const dayData = buildWeekData();
  const activeDays = dayData.filter((day) => day.kcal > 0);
  const peak = activeDays.reduce((max, day) => (day.kcal > max.kcal ? day : max), activeDays[0]);
  const lowest = activeDays.reduce((min, day) => (day.kcal < min.kcal ? day : min), activeDays[0]);
  const drinkTotal = weekRecords.filter((record) => record.mealType === "drink").reduce((sum, record) => sum + record.kcal, 0);
  const avg = Math.round(total / Math.max(activeDays.length, 1));
  weeklyNarrative.textContent = `本周共记录 ${weekRecords.length} 餐，日均摄入 ${avg} kcal。${peak.day}摄入最高，建议优先确认当天晚餐和饮料。`;
  lowestDay.textContent = `周${lowest.day}`;
  overBudgetDays.textContent = `${activeDays.filter((day) => day.kcal > calculateDailyBudget()).length} 天`;
  streakDays.textContent = `${records.length ? 1 : 0} 天`;
  weekKeywords.textContent = drinkTotal > 0 ? "饮料 / 食堂 / 份量确认" : "食堂 / 份量确认";
  warningList.innerHTML = [
    drinkTotal > 300 ? "本周饮料热量偏高，下一杯可以优先选无糖。" : "饮料热量目前可控，继续保持。",
    activeDays.some((day) => day.kcal > calculateDailyBudget()) ? "出现超预算日，建议明天午餐选择更清淡的组合。" : "本周暂未明显超预算。",
  ]
    .map((text) => `<div class="warning-item">${text}</div>`)
    .join("");
  badgeList.innerHTML = getBadges().length
    ? getBadges().map((text) => `<div class="badge-item">${text}</div>`).join("")
    : '<div class="badge-empty">继续记录，徽章快亮起来了。</div>';
}

async function refreshAiWeeklyReport() {
  try {
    const weekRecords = getCurrentWeekRecords();
    if (!weekRecords.length) return;
    const response = await fetch("/api/weekly-report", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ records: weekRecords }),
    });
    const report = await response.json();
    if (report.summary) weeklyNarrative.textContent = report.summary;
    if (report.warnings?.length) {
      warningList.innerHTML = report.warnings.map((text) => `<div class="warning-item">${text}</div>`).join("");
    }
    if (report.badges?.length) {
      badgeList.innerHTML = report.badges.map((text) => `<div class="badge-item">${text}</div>`).join("");
      profileBadgeList.innerHTML = badgeList.innerHTML;
    }
    if (report.keywords?.length) {
      weekKeywords.textContent = report.keywords.join(" / ");
    }
  } catch {
    renderAdvancedReport();
  }
}

function renderStickers(offsetX = 0, offsetY = 0) {
  stickerCount.textContent = `${stickers.length} 张`;
  if (!stickers.length) {
    stickerWall.innerHTML = '<div class="sticker-empty">还没有记录。拍一餐后，食物会变成贴纸出现在这里。</div>';
    return;
  }
  stickerWall.innerHTML = stickers
    .map(
      (item, index) => `
        <div
          class="food-sticker"
          style="
            left: ${item.x}%;
            top: ${item.y}%;
            --rotate: ${item.rotate};
            --sticker-bg: ${item.color};
            --tilt-x: ${offsetX * (index + 1) * 0.18}px;
            --tilt-y: ${offsetY * (index + 1) * 0.18}px;
          "
        >
          ${item.icon ? `<img src="${item.icon}" alt="" />` : item.title}
          <small>${item.kcal} kcal</small>
        </div>
      `,
    )
    .join("");
}

function addSticker(title, kcal) {
  const index = stickers.length;
  stickers = [
    ...stickers,
    {
      title,
      kcal,
      x: 8 + ((index * 23) % 62),
      y: 12 + ((index * 31) % 56),
      rotate: `${index % 2 ? 5 : -6}deg`,
      color: ["#536f45", "#8a6a38", "#6d4b31", "#7b5026"][index % 4],
      icon: stickerIcons[index % stickerIcons.length] || null,
    },
  ];
  renderStickers();
  saveState();
}

function addRecord(title, kcal, mealType = selectedMealType) {
  const record = {
    id: `${Date.now()}-${Math.random().toString(16).slice(2)}`,
    title,
    kcal: Math.max(0, Math.round(kcal)),
    mealType,
    createdAt: new Date().toISOString(),
  };
  records = [record, ...records];
  addSticker(title, record.kcal);
  saveState();
  renderAllStats();
}

function getCooking(food) {
  return cookingOptions.find((option) => option.value === food.cooking) || cookingOptions[0];
}

function getFoodCalories(food) {
  return Math.round(food.baseKcal * food.portion * getCooking(food).multiplier);
}

function getTotals() {
  return detectedFoods.reduce(
    (totals, food) => {
      const cooking = getCooking(food);
      totals.kcal += getFoodCalories(food);
      totals.protein += food.protein * food.portion * cooking.multiplier;
      totals.carb += food.carb * food.portion;
      totals.fat += food.fat * food.portion * cooking.multiplier;
      return totals;
    },
    { kcal: 0, protein: 0, carb: 0, fat: 0 },
  );
}

function updateSummary() {
  if (!detectedFoods.length) {
    calorieValue.textContent = "--";
    proteinValue.textContent = "--";
    carbValue.textContent = "--";
    fatValue.textContent = "--";
    return;
  }

  const totals = getTotals();
  calorieValue.textContent = Math.round(totals.kcal).toLocaleString("zh-CN");
  proteinValue.textContent = `${Math.round(totals.protein)}g`;
  carbValue.textContent = `${Math.round(totals.carb)}g`;
  fatValue.textContent = `${Math.round(totals.fat)}g`;
  const mealLabel = mealTypes.find((meal) => meal.id === selectedMealType)?.label || "午餐";
  confidenceText.textContent = confirmed
    ? `已按你的确认结果记录到${mealLabel}`
    : `请确认识别结果，这餐将记录到${mealLabel}`;
}

function renderAllStats() {
  renderBudget();
  renderBars();
  renderMealStats();
  renderAdvancedReport();
  renderShellState();
}

function renderDetectedList() {
  if (!detectedFoods.length) {
    detectedList.innerHTML = '<div class="detected-empty">识别完成后，可在这里调整食物、份量和做法</div>';
    return;
  }

  detectedList.innerHTML = detectedFoods
    .map((food) => {
      const cooking = getCooking(food);
      return `
        <article class="food-card ${food.id === selectedFoodId ? "active" : ""}" data-food-id="${food.id}">
          <div class="food-card-header">
            <label class="food-card-title">
              <small>识别结果</small>
              <input class="food-name-input" aria-label="修改食物名称" value="${food.name}" />
            </label>
            <button class="edit-food" type="button" aria-label="编辑${food.name}">✎</button>
          </div>
          <div class="food-controls">
            <div>
              <span class="field-label">请调整份量</span>
              <div class="segment-group" role="group" aria-label="${food.name}份量">
                ${portionOptions
                  .map(
                    (option) => `
                      <button
                        class="segment-button ${food.portion === option.value ? "active" : ""}"
                        type="button"
                        data-action="portion"
                        data-value="${option.value}"
                      >
                        ${option.label}
                      </button>
                    `,
                  )
                  .join("")}
              </div>
            </div>
            <label>
              <span class="field-label">请选择烹饪方式</span>
              <select class="cook-select" aria-label="${food.name}烹饪方式">
                ${cookingOptions
                  .map(
                    (option) => `
                      <option value="${option.value}" ${food.cooking === option.value ? "selected" : ""}>
                        ${option.label}
                      </option>
                    `,
                  )
                  .join("")}
              </select>
            </label>
          </div>
          <small>${portionOptions.find((option) => option.value === food.portion).label} · ${cooking.label} · 约 ${getFoodCalories(food)} kcal</small>
        </article>
      `;
    })
    .join("");
}

function renderFoodBoxes() {
  if (!detectedFoods.length) {
    foodBoxLayer.innerHTML = "";
    return;
  }

  foodBoxLayer.innerHTML = detectedFoods
    .map((food) => {
      const { left, top, width, height } = food.box;
      return `
        <button
          class="food-box ${food.id === selectedFoodId ? "active" : ""}"
          type="button"
          data-food-id="${food.id}"
          style="left: ${left}%; top: ${top}%; width: ${width}%; height: ${height}%"
          aria-label="查看${food.name}热量"
        >
          <span>${food.name}</span>
          <strong>约 ${getFoodCalories(food)} kcal</strong>
        </button>
      `;
    })
    .join("");
}

function refreshResultUi() {
  const names = detectedFoods.map((food) => food.name).join("、");
  foodName.textContent = detectedFoods.length ? "请确认识别结果" : "等待确认";
  confirmText.textContent = detectedFoods.length ? `识别结果：${names}` : "上传图片后可校正识别结果";
  confirmButton.disabled = !detectedFoods.length || confirmed;
  confirmButton.textContent = confirmed ? "已确认" : "确认正确";
  confirmButton.classList.toggle("confirmed", confirmed);
  statusPill.textContent = detectedFoods.length ? (confirmed ? "已确认" : "待确认") : "未开始";
  renderFoodBoxes();
  renderDetectedList();
  updateSummary();
}

function refreshConfirmationState() {
  const names = detectedFoods.map((food) => food.name).join("、");
  foodName.textContent = detectedFoods.length ? "请确认识别结果" : "等待确认";
  confirmText.textContent = detectedFoods.length ? `识别结果：${names}` : "上传图片后可校正识别结果";
  confirmButton.textContent = confirmed ? "已确认" : "确认正确";
  confirmButton.classList.toggle("confirmed", confirmed);
  statusPill.textContent = detectedFoods.length ? (confirmed ? "已确认" : "待确认") : "未开始";
  renderFoodBoxes();
  updateSummary();
}

function setRecognizing() {
  confirmed = false;
  detectedFoods = [];
  selectedFoodId = null;
  statusPill.textContent = "识别中";
  foodName.textContent = "正在分析";
  confirmText.textContent = "正在分离食物主体并识别菜品组成";
  confirmButton.disabled = true;
  confirmButton.classList.remove("confirmed");
  detectedList.innerHTML = '<div class="detected-empty">AI 正在提取食物主体...</div>';
  calorieValue.textContent = "--";
  confidenceText.textContent = "识别完成后请校正确认";
  proteinValue.textContent = "--";
  carbValue.textContent = "--";
  fatValue.textContent = "--";
  foodBoxLayer.innerHTML = "";
  cutoutMask.hidden = false;
  scanLine.hidden = false;
}

function setResult() {
  detectedFoods = createDetectedFoods();
  selectedFoodId = detectedFoods[0].id;
  pendingRecord = { title: "餐盘四件套", mealType: selectedMealType };
  cutoutMask.hidden = true;
  scanLine.hidden = true;
  refreshResultUi();
}

function normalizeAiFoods(result) {
  if (!result?.foods?.length) return createDetectedFoods();
  return result.foods.map((food, index) => {
    const range = Array.isArray(food.kcalRange) ? food.kcalRange : [food.kcal || 160, food.kcal || 220];
    const midpoint = Math.round((Number(range[0]) + Number(range[1])) / 2);
    return {
      id: food.id || `ai-food-${index}`,
      name: food.name || "未知食物",
      baseKcal: midpoint,
      kcalRange: range,
      protein: Number(food.protein) || 0,
      carb: Number(food.carb) || 0,
      fat: Number(food.fat) || 0,
      portion: 1,
      cooking: "steam",
      box: food.box || { left: 12 + index * 12, top: 18 + index * 8, width: 32, height: 26 },
    };
  });
}

async function analyzeFoodWithAi(image) {
  const response = await fetch("/api/analyze-food-image", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ image }),
  });
  const data = await response.json();
  if (!response.ok) throw new Error(data.error || "AI 食物识别失败");
  return data;
}

async function checkAiHealth() {
  try {
    const response = await fetch("/api/health");
    if (!response.ok) throw new Error("health check failed");
    const health = await response.json();
    aiStatusPill.textContent = health.mode === "live" ? "已配置" : "演示模式";
    aiStatusPill.classList.toggle("live", health.mode === "live");
    aiStatusText.textContent =
      health.provider === "qwen"
        ? `当前使用通义千问：${health.visionModel || health.model}。上传照片后会请求千问 VL 视觉模型。`
        : `当前使用 ${health.model}。${health.mode === "live" ? "已检测到密钥，上传照片后会请求真实视觉模型。" : "未检测到 OPENAI_API_KEY，拍照识别会进入演示/失败提示。"}`;
  } catch {
    aiStatusPill.textContent = "未连接";
    aiStatusText.textContent = "请通过 npm start 或线上部署地址打开应用，file:// 方式无法调用 AI 接口。";
  }
}

async function recognizeImage(src) {
  foodPreview.src = src;
  foodPreview.hidden = false;
  emptyCamera.hidden = true;
  setRecognizing();
  try {
    const result = await analyzeFoodWithAi(src);
    detectedFoods = normalizeAiFoods(result);
    selectedFoodId = detectedFoods[0].id;
    pendingRecord = { title: "AI 餐盘识别", mealType: selectedMealType };
    confidenceText.textContent = result.summary?.confidence || "AI 已返回热量区间，请确认份量。";
    cutoutMask.hidden = true;
    scanLine.hidden = true;
    refreshResultUi();
    renderBudget();
  } catch (error) {
    statusPill.textContent = "失败";
    foodName.textContent = "识别失败";
    confirmText.textContent = error.message;
    detectedList.innerHTML = `<div class="detected-empty">没有返回真实识别结果。请检查模型、API Key，或换一张更清晰的图片。</div>`;
    cutoutMask.hidden = true;
    scanLine.hidden = true;
    checkAiHealth();
  }
}

foodInput.addEventListener("change", async (event) => {
  const [file] = event.target.files;
  if (!file) return;
  const image = await fileToDataUrl(file);
  recognizeImage(image);
});

function recognizeDrink(type = "milkTea") {
  selectedMealType = "drink";
  drinkState = {
    ...drinkState,
    type,
    recognized: true,
  };
  renderMealTypeOptions();
  renderDrinkModule();
}

drinkInput.addEventListener("change", (event) => {
  const [file] = event.target.files;
  if (!file) return;
  recognizeDrink("milkTea");
});

demoButton.addEventListener("click", () => {
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 800">
      <defs>
        <linearGradient id="bg" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0" stop-color="#f3d198"/>
          <stop offset="1" stop-color="#9f6a34"/>
        </linearGradient>
      </defs>
      <rect width="800" height="800" fill="url(#bg)"/>
      <ellipse cx="400" cy="430" rx="285" ry="238" fill="#fff7e8"/>
      <ellipse cx="290" cy="326" rx="106" ry="82" fill="#f5eee1"/>
      <g fill="#efe3cf">
        <circle cx="244" cy="300" r="23"/>
        <circle cx="300" cy="291" r="26"/>
        <circle cx="339" cy="333" r="25"/>
        <circle cx="275" cy="361" r="27"/>
      </g>
      <g fill="#8d3f2e">
        <circle cx="485" cy="315" r="52"/>
        <circle cx="555" cy="354" r="45"/>
        <circle cx="457" cy="391" r="48"/>
        <circle cx="526" cy="424" r="40"/>
      </g>
      <path d="M212 474c86 58 190 55 248 3 28 52 116 69 182 14-34 101-362 112-430-17z" fill="#557644"/>
      <ellipse cx="556" cy="532" rx="94" ry="76" fill="#f4d16d"/>
      <ellipse cx="556" cy="532" rx="72" ry="55" fill="#fff4c1"/>
      <path d="M505 526c28-24 72-21 101 4" fill="none" stroke="#f2c950" stroke-width="18" stroke-linecap="round"/>
    </svg>
  `;
  foodPreview.src = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
  foodPreview.hidden = false;
  emptyCamera.hidden = true;
  setRecognizing();
  window.setTimeout(setResult, 700);
});

drinkDemoButton.addEventListener("click", () => {
  recognizeDrink("milkTea");
});

confirmButton.addEventListener("click", () => {
  if (!detectedFoods.length) return;
  confirmed = true;
  const names = detectedFoods.map((food) => food.name).join("、") || pendingRecord?.title || "餐盘识别";
  addRecord(names, getTotals().kcal, selectedMealType);
  pendingRecord = null;
  refreshResultUi();
});

detectedList.addEventListener("click", (event) => {
  const card = event.target.closest(".food-card");
  if (!card) return;
  const food = detectedFoods.find((item) => item.id === card.dataset.foodId);
  if (!food) return;

  selectedFoodId = food.id;

  if (event.target.matches("[data-action='portion']")) {
    food.portion = Number(event.target.dataset.value);
    confirmed = false;
    refreshResultUi();
  }

  if (event.target.matches(".edit-food")) {
    const input = card.querySelector(".food-name-input");
    input.focus();
    input.select();
  }
});

foodBoxLayer.addEventListener("click", (event) => {
  const box = event.target.closest(".food-box");
  if (!box) return;
  selectedFoodId = box.dataset.foodId;
  refreshResultUi();
  document
    .querySelector(`.food-card[data-food-id="${selectedFoodId}"]`)
    ?.scrollIntoView({ behavior: "smooth", block: "nearest" });
});

detectedList.addEventListener("input", (event) => {
  const card = event.target.closest(".food-card");
  if (!card) return;
  const food = detectedFoods.find((item) => item.id === card.dataset.foodId);
  if (!food) return;

  if (event.target.matches(".food-name-input")) {
    food.name = event.target.value.trim() || "未命名食物";
    confirmed = false;
    refreshConfirmationState();
  }
});

detectedList.addEventListener("change", (event) => {
  const card = event.target.closest(".food-card");
  if (!card) return;
  const food = detectedFoods.find((item) => item.id === card.dataset.foodId);
  if (!food) return;

  if (event.target.matches(".cook-select")) {
    food.cooking = event.target.value;
    confirmed = false;
    refreshResultUi();
  }
});

mealTypeOptions.addEventListener("click", (event) => {
  const button = event.target.closest("[data-meal-type]");
  if (!button) return;
  selectedMealType = button.dataset.mealType;
  renderMealTypeOptions();
  refreshResultUi();
});

function handleDrinkOptionClick(event) {
  const button = event.target.closest("[data-action]");
  if (!button) return;
  const value = button.dataset.value;

  if (button.dataset.action === "drink-type") {
    drinkState.type = value;
  }

  if (button.dataset.action === "drink-size") {
    drinkState.size = value;
  }

  if (button.dataset.action === "sugar") {
    drinkState.sugar = value;
  }

  if (button.dataset.action === "topping") {
    drinkState.toppings = drinkState.toppings.includes(value)
      ? drinkState.toppings.filter((item) => item !== value)
      : [...drinkState.toppings, value];
  }

  drinkState.recognized = true;
  selectedMealType = "drink";
  renderMealTypeOptions();
  renderDrinkModule();
}

drinkTypeOptions.addEventListener("click", handleDrinkOptionClick);
drinkSizeOptions.addEventListener("click", handleDrinkOptionClick);
sugarOptions.addEventListener("click", handleDrinkOptionClick);
toppingOptions.addEventListener("click", handleDrinkOptionClick);

addDrinkButton.addEventListener("click", () => {
  if (!drinkState.recognized) {
    recognizeDrink(drinkState.type);
  }
  const type = drinkTypes.find((item) => item.id === drinkState.type) || drinkTypes[0];
  addRecord(type.label, getDrinkCalories(), "drink");
});

barcodeButton.addEventListener("click", async () => {
  packageGramInput.value = 45;
  try {
    const response = await fetch("/api/barcode-lookup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ barcode: "6900000000000" }),
    });
    const food = await response.json();
    const kcal = Math.round((food.kcalPer100g / 100) * Number(packageGramInput.value));
    addRecord(food.productName || "包装食品", kcal, "snack");
  } catch {
    addRecord("全麦蛋白棒", 176, "snack");
  }
});

foodSearchButton.addEventListener("click", () => {
  const name = foodSearchInput.value.trim() || "手动搜索食品";
  addRecord(name, 260, "snack");
});

addPackageButton.addEventListener("click", () => {
  const grams = Number(packageGramInput.value) || 45;
  const kcal = Math.round((390 / 100) * grams);
  addRecord("全麦蛋白棒", kcal, "snack");
});

ocrButton.addEventListener("click", async () => {
  try {
    const response = await fetch("/api/ocr-nutrition", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ image: null }),
    });
    const result = await response.json();
    const kcal = result.per100g?.energyKcal || result.perServing?.energyKcal || 196;
    addRecord(result.productName || "营养表 OCR", kcal, "snack");
  } catch {
    addRecord("营养表 OCR", 196, "snack");
  }
});

saveCustomFoodButton.addEventListener("click", () => {
  addRecord("OCR 自定义食品", 196, "snack");
});

document.querySelectorAll("[data-quick]").forEach((button) => {
  button.addEventListener("click", () => {
    addRecord(button.dataset.quick, Number(button.dataset.kcal) || 420, "snack");
  });
});

function renderContextTip() {
  const modeCopy = {
    student: ["控奶茶", "根据你最近记录，这可能是鸡腿饭。约 520-650 kcal，确认一碗米饭后可缩小到 575-610 kcal。"],
    loss: ["热量缺口", "减脂模式会优先提醒饮料热量、油炸食品和晚餐超预算。"],
    gain: ["蛋白优先", "增肌模式会关注蛋白质、总热量和训练日补充。"],
    sugar: ["控糖参考", "控糖模式会标记高糖饮料和精制碳水，仅作日常记录参考。"],
    light: ["低盐少油", "清淡饮食模式会关注钠、油炸食品和夜宵。"],
    takeout: ["外卖风险", "外卖模式会提示高油、高盐、高热量组合。"],
  };
  const [hint, text] = modeCopy[healthModeInput.value] || modeCopy.student;
  modeHint.textContent = hint;
  contextTip.textContent = `${placeInput.value}：${text}`;
}

healthModeInput.addEventListener("change", renderContextTip);
placeInput.addEventListener("change", renderContextTip);

navItems.forEach((item) => {
  item.addEventListener("click", () => {
    setView(item.dataset.nav);
  });
});

profileShortcut.addEventListener("click", () => {
  setView("profile");
});

startScanButton.addEventListener("click", () => {
  setView("scan");
});

clearRecordsButton.addEventListener("click", () => {
  records = [];
  stickers = [];
  saveState();
  renderStickers();
  renderAllStats();
});

motionButton.addEventListener("click", async () => {
  if (typeof DeviceOrientationEvent !== "undefined" && DeviceOrientationEvent.requestPermission) {
    try {
      await DeviceOrientationEvent.requestPermission();
    } catch {
      renderStickers(10, -8);
      return;
    }
  }
  window.addEventListener("deviceorientation", (event) => {
    renderStickers(Number(event.gamma || 0), Number(event.beta || 0));
  });
  renderStickers(8, -6);
});

timerStart.addEventListener("click", () => {
  if (timerState.running) return;
  timerState.running = true;
  if (timerState.phase === "ready" || timerState.phase === "done") {
    timerState.round = 1;
    startCountdown();
  }
  timerState.interval = window.setInterval(tickTimer, 1000);
});

timerPause.addEventListener("click", () => {
  stopTimer();
  timerHint.textContent = "已暂停，音乐不用停，准备好再继续。";
});

timerReset.addEventListener("click", () => {
  stopTimer();
  timerState.phase = "ready";
  timerState.round = 1;
  timerState.remaining = Number(timerWork.value) || 30;
  timerHint.textContent = "音乐继续由你控制，我只负责清晰提示节奏。";
  renderTimer();
});

[timerSets, timerWork, timerRest].forEach((input) => {
  input.addEventListener("input", () => {
    if (!timerState.running && timerState.phase === "ready") {
      timerState.remaining = Number(timerWork.value) || 30;
      renderTimer();
    }
  });
});

profileForm.addEventListener("submit", (event) => {
  event.preventDefault();
  renderBudget();
});

profileForm.addEventListener("change", renderBudget);
profileForm.addEventListener("input", renderBudget);

loadState();
renderBars();
renderMealTypeOptions();
renderMealStats();
renderAdvancedReport();
renderContextTip();
renderStickers();
renderBudget();
renderDrinkModule();
refreshResultUi();
setView("home");
prepareStickerIcons();
renderTimer();
checkAiHealth();
refreshAiWeeklyReport();
