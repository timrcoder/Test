//   BOX 8 ---------- BOX 8 -------------------BO
function myFunction(x) {
    x.classList.toggle("fa-thumbs-down");
  }

  // TOGGLE LIST10 ========= BOX 10=========BOX 10=========BOX 

  function logItem(e) {
    const item = document.querySelector(`[data-id=${e.target.id}]`);
    item.toggleAttribute('hidden');
  }
  
  const chapters = document.querySelectorAll('details');
  chapters.forEach((chapter) => {
    chapter.addEventListener('toggle', logItem);
  });


  // BOX 11=========BOX 11=========BOX 11=========BOX 11=========

 