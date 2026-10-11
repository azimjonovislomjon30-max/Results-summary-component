const data = [
  {
    "category": "Reaction",
    "score": 80,
    "icon": "images/icon-reaction.svg"
  },
  {
    "category": "Memory",
    "score": 92,
    "icon": "images/icon-memory.svg"
  },
  {
    "category": "Verbal",
    "score": 61,
    "icon": "images/icon-verbal.svg"
  },
  {
    "category": "Visual",
    "score": 73,
    "icon": "images/icon-visual.svg"
  }
];

document.addEventListener("DOMContentLoaded", function () {

  const elsStatsListItem = document.querySelectorAll('.status-item');

  elsStatsListItem.forEach(function (elsStatusItem, index) {
    elsStatusItem.classList.add(`status-item--${data[index].category.toLowerCase()}`);
    elsStatusItem.querySelector('.status-item-icon').src = data[index].icon;
    elsStatusItem.querySelector('.status-item-title').textContent = data[index].category;
    elsStatusItem.querySelector('.status-item-result').textContent = data[index].score;
  });

});