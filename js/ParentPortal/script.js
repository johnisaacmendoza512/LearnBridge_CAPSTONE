// ── DATA (edit these to update the dashboard) ──
const dashboardData = {
  activeStudents: 0,
  upcomingSessions: 0,
  hoursThisMonth: 0,

  sessions: [
    // { subject: 'Mathematics', tutor: 'Sarah Johnson', date: 'Feb 28', time: '3:00 PM' },
  ],

  feedback: [
    // { subject: 'Mathematics Session', rating: 4.9, comment: 'Alex showed great improvement in algebra.', tutor: 'Sarah Johnson', date: 'Feb 25' },
  ]
};

// ── RENDER STATS ──
document.getElementById('stat-active-students').textContent = dashboardData.activeStudents;
document.getElementById('stat-upcoming-sessions').textContent = dashboardData.upcomingSessions;
document.getElementById('stat-hours').textContent = dashboardData.hoursThisMonth;

// ── RENDER UPCOMING SESSIONS ──
const sessionsList = document.getElementById('upcoming-sessions-list');
if (dashboardData.sessions.length > 0) {
  sessionsList.classList.remove('empty-state');
  sessionsList.innerHTML = dashboardData.sessions.map(s => `
    <div class="session-card">
      <div class="session-info">
        <span class="session-subject">${s.subject}</span>
        <span class="session-meta">${s.tutor} · ${s.date} at ${s.time}</span>
      </div>
    </div>
  `).join('');
} else {
  sessionsList.textContent = 'No upcoming sessions scheduled.';
}

// ── RENDER FEEDBACK ──
const feedbackList = document.getElementById('feedback-list');
if (dashboardData.feedback.length > 0) {
  feedbackList.classList.remove('empty-state');
  feedbackList.innerHTML = dashboardData.feedback.map(f => `
    <div class="feedback-card">
      <div class="feedback-header">
        <span class="feedback-subject">${f.subject}</span>
        <span class="feedback-rating">⭐ ${f.rating}</span>
      </div>
      <p class="feedback-text">"${f.comment}"</p>
      <span class="feedback-meta">${f.tutor} · ${f.date}</span>
    </div>
  `).join('');
} else {
  feedbackList.textContent = 'No feedback yet.';
}

// ── SIDEBAR NAVIGATION ──
const navItems = document.querySelectorAll('.nav-item');
const pages = document.querySelectorAll('.page-content');

navItems.forEach(item => {
  item.addEventListener('click', (e) => {
    e.preventDefault();
    const targetPage = item.getAttribute('data-page');

    navItems.forEach(n => n.classList.remove('active'));
    item.classList.add('active');

    pages.forEach(page => page.classList.remove('active'));
    const target = document.getElementById('page-' + targetPage);
    if (target) target.classList.add('active');
  });
});