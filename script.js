function toggleApp(appId) {
  const win = document.getElementById(appId);
  const ovl = document.getElementById(appId + '-overlay');
  const active = win.classList.toggle('active');
  if (ovl) ovl.classList.toggle('active');
}

document.querySelectorAll('.app').forEach(appBtn => {
  appBtn.addEventListener('keydown', e => {
    if (e.key === 'Enter' || e.key === ' ') appBtn.click();
  });
});

document.addEventListener('keydown', function(e){
  if (e.key === 'Escape') {
    const wins = Array.from(document.querySelectorAll('.app-window.active'));
    if (wins.length) {
      const win = wins[wins.length - 1];
      win.classList.remove('active');
      const overlay = document.getElementById(win.id + '-overlay');
      if (overlay) overlay.classList.remove('active');
    }
  }
});

function updateTime() {
  const now = new Date();
  let h = now.getHours();
  let m = now.getMinutes();
  if (m < 10) m = '0' + m;
  document.getElementById('status-time').textContent = `${h}:${m}`;
}
updateTime();
setInterval(updateTime, 10000);
