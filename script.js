function updateGrid(timeframe) {
  const grid = document.getElementById("grid");
  grid.innerHTML = "";

  let totalDots;
  switch (timeframe) {
    case "year":
      totalDots = 365;
      break;
    case "month":
      totalDots = 30;
      break;
    case "week":
      totalDots = 7;
      break;
    case "day":
      totalDots = 24;
      break;
    default:
      totalDots = 365;
  }

  const now = new Date();
  let remainingDots;

  switch (timeframe) {
    case "year":
      const endOfYear = new Date(now.getFullYear(), 11, 31);
      remainingDots = Math.ceil((endOfYear - now) / (1000 * 60 * 60 * 24));
      break;
    case "month":
      const endOfMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0);
      remainingDots = endOfMonth.getDate() - now.getDate();
      break;
    case "week":
      remainingDots = 7 - now.getDay();
      break;
    case "day":
      remainingDots = 24 - now.getHours();
      break;
    default:
      remainingDots = 0;
  }

  for (let i = 0; i < totalDots; i++) {
    const dot = document.createElement("div");
    dot.className = `dot ${i < remainingDots ? "active" : ""}`;
    grid.appendChild(dot);
  }
}

document.getElementById("timeframe").addEventListener("change", (e) => {
  updateGrid(e.target.value);
});

// Initial render
updateGrid("year");
