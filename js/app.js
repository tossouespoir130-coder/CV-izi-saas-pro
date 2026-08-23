/**
 * Application JavaScript pour le CV & Portfolio bilingue (FR / 中文) d'Espoir Chinois
 */

let currentLang = localStorage.getItem('lang') || 'fr';

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initLanguage();
  initNavbarScroll();
  initMobileMenu();
  initScrollSpy();
  initCardTilt();
});

/* ==========================================================================
   THEME SWITCHER
   ========================================================================== */
function initTheme() {
  const toggleBtn = document.getElementById('theme-toggle-btn');
  const themeIcon = document.getElementById('theme-icon');
  const savedTheme = localStorage.getItem('theme') || 'light';

  document.documentElement.setAttribute('data-theme', savedTheme);
  updateThemeIcon(savedTheme, themeIcon);

  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      const currentTheme = document.documentElement.getAttribute('data-theme');
      const newTheme = currentTheme === 'light' ? 'dark' : 'light';
      document.documentElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('theme', newTheme);
      updateThemeIcon(newTheme, themeIcon);
    });
  }
}

function updateThemeIcon(theme, iconEl) {
  if (!iconEl) return;
  iconEl.textContent = theme === 'light' ? '🌙' : '☀️';
}

/* ==========================================================================
   LANGUAGE SWITCHER (FR / 中文)
   ========================================================================== */
function initLanguage() {
  applyLanguage(currentLang);
}

function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('lang', currentLang);
  applyLanguage(currentLang);
}

function applyLanguage(lang) {
  document.documentElement.setAttribute('data-lang', lang);
  document.documentElement.setAttribute('lang', lang);

  // Update segmented buttons
  const btnFr = document.getElementById('btn-lang-fr');
  const btnZh = document.getElementById('btn-lang-zh');
  if (btnFr && btnZh) {
    if (lang === 'zh') {
      btnZh.classList.add('active');
      btnFr.classList.remove('active');
    } else {
      btnFr.classList.add('active');
      btnZh.classList.remove('active');
    }
  }

  const data = cvData[lang] || cvData.fr;

  // 1. Navigation items
  const navMap = [
    { id: 'nav-home', text: data.nav.home },
    { id: 'nav-skills', text: data.nav.skills },
    { id: 'nav-timeline', text: data.nav.timeline },
    { id: 'nav-projects', text: data.nav.projects },
    { id: 'nav-community', text: data.nav.community || 'Réseaux (+430k)' },
    { id: 'nav-services', text: data.nav.services },
    { id: 'nav-testimonials', text: data.nav.testimonials },
    { id: 'nav-contact', text: data.nav.contact }
  ];
  navMap.forEach(item => {
    const el = document.getElementById(item.id);
    if (el) el.textContent = item.text;
  });

  const pdfBtnText = document.getElementById('pdf-btn-text');
  if (pdfBtnText) pdfBtnText.textContent = data.nav.pdfBtn;

  // Hero salutation
  const heroSalutation = document.getElementById('hero-salutation');
  if (heroSalutation) {
    heroSalutation.textContent = lang === 'zh' ? '您好，我是' : 'Bonjour, je suis';
  }

  // Section Badges & Titles
  updateSectionHeaders(lang);

  // 2. Personal & Hero
  const heroName = document.getElementById('hero-name');
  const heroBio = document.getElementById('hero-bio');
  const heroStatus = document.getElementById('hero-status');
  const heroAvatar = document.getElementById('hero-avatar-img');

  if (heroName) heroName.textContent = lang === 'zh' ? '苏波 (Espoir Chinois)' : (data.personal.nickname || data.personal.fullName);
  if (heroBio) heroBio.textContent = data.personal.bio;
  if (heroAvatar && data.personal.avatar) heroAvatar.src = data.personal.avatar;
  if (heroStatus && data.personal.status) {
    heroStatus.innerHTML = `<span class="status-dot"></span><span>${data.personal.status.replace(/^[🟢\s]+/, '')}</span>`;
  }

  // Hero CTAs
  const heroBtnProjects = document.getElementById('hero-btn-projects-text');
  const heroBtnContact = document.getElementById('hero-btn-contact-text');
  const heroBtnCommunity = document.getElementById('hero-btn-community-text');
  if (heroBtnProjects) heroBtnProjects.textContent = lang === 'fr' ? 'Découvrir mes réalisations' : '查看重点项目与业绩';
  if (heroBtnContact) heroBtnContact.textContent = lang === 'fr' ? 'Discuter d\'un projet' : '商务合作 / 立即联系';
  if (heroBtnCommunity) heroBtnCommunity.textContent = lang === 'fr' ? 'Réseaux (+430k)' : '社交矩阵 (43万+)';

  // Social Links
  renderSocialLinks(data);

  // 3. Stats
  renderStats(data);

  // 4. Interests
  renderInterests(data);

  // 5. Skills with animated counters
  renderSkills(data);
  initSkillsAnimation();

  // 6. Timeline
  const tabExpBtn = document.getElementById('tab-exp-btn');
  const tabEduBtn = document.getElementById('tab-edu-btn');
  if (tabExpBtn) tabExpBtn.textContent = lang === 'fr' ? '💼 Expériences Professionnelles' : '💼 资深工作履历';
  if (tabEduBtn) tabEduBtn.textContent = lang === 'fr' ? '🎓 Formations & Certifications HSK' : '🎓 学历资质与HSK认证';

  const currentTab = tabExpBtn && tabExpBtn.classList.contains('active') ? 'exp' : 'edu';
  renderTimeline(currentTab, data);

  // 7. Projects
  updateFilterButtons(lang);
  renderProjects('all', data);

  // 7.5 Community & Social Cards
  renderCommunity(data);

  // 8. Services
  renderServices(data);

  // 9. Testimonials
  renderTestimonials(data);

  // 10. Contact Section
  updateContactLabels(data, lang);

  // Restart Typewriter with new language titles
  initTypewriter(data.personal.dynamicTitles);

  initCardTilt();
}

function updateSectionHeaders(lang) {
  const isZh = lang === 'zh';
  
  // Skills header
  setElText('skills-badge', isZh ? '专业技能与权威认证' : 'Expertises & Compétences');
  setElHTML('skills-title', isZh ? '中法双语、安全管理 & <span class="gradient-text">涉外协调</span>' : 'Langues, QHSE & <span class="gradient-text">Négociation</span>');
  setElText('skills-subtitle', isZh ? '具备跨国大型工程同声传译、属地员工管理及涉外法务全方位硬核实力。' : 'Une solide maîtrise linguistique et une compréhension fine des dynamiques d\'affaires sino-africaines.');

  // Timeline header
  setElText('timeline-badge', isZh ? '履历与资质演进' : 'Parcours & Expériences');
  setElHTML('timeline-title', isZh ? '工作经历 & <span class="gradient-text">学历认证</span>' : 'Expériences Pro & <span class="gradient-text">Diplômes</span>');
  setElText('timeline-subtitle', isZh ? '在中资央企与跨国名企重点项目中的丰富翻译与管理实战记录。' : 'Mon historique d\'interprétation sur les grands projets d\'infrastructures et mon parcours académique.');

  // Projects header
  setElText('projects-badge', isZh ? '重点项目与学术成果' : 'Réalisations & Missions');
  setElHTML('projects-title', isZh ? '代表性业绩 & <span class="gradient-text">出版著作</span>' : 'Missions Clés & <span class="gradient-text">Impact Digital</span>');
  setElText('projects-subtitle', isZh ? '代表性中资跨国重点工程口译业绩，以及全网43万学员的中文教学出版成果。' : 'Découvrez mes missions d\'interprétation auprès de multinationales et ma communauté pédagogique.');

  // Interests header
  setElText('interests-badge', isZh ? '兴趣爱好与综合素养' : 'Centres d\'Intérêt & Passions');
  setElHTML('interests-title', isZh ? '环球旅行 & <span class="gradient-text">博闻强识</span>' : 'Voyages & <span class="gradient-text">Culture Générale</span>');
  setElText('interests-subtitle', isZh ? '对多元文化、世界通识与语言艺术保持充沛的热忱与探索欲。' : 'Une curiosité insatiable pour le monde, les langues, les peuples et les arts.');

  // Community header
  setElText('community-badge', isZh ? '社交矩阵与影响力 (43万+关注)' : 'Réseaux Sociaux & Impact Digital (+430k)');
  setElHTML('community-title', isZh ? '关注我的 <span class="gradient-text">官方社交主页</span>' : 'Rejoignez-moi sur mes <span class="gradient-text">Réseaux Officiels</span>');
  setElText('community-subtitle', isZh ? '全网超过43万名跨国商务人士与法语区中文学员的共同选择。' : 'Une communauté active de plus de 430 000 abonnés et apprenants à travers l\'Afrique et le monde.');

  // Services header
  setElText('services-badge', isZh ? '核心业务与全方位服务' : 'Services & Accompagnement');
  setElHTML('services-title', isZh ? '我能为您 <span class="gradient-text">提供的专业支持</span>' : 'Ce que je peux <span class="gradient-text">faire pour vous</span>');
  setElText('services-subtitle', isZh ? '为中资出海企业与涉华经贸合作提供最高水准的语言与管理护航。' : 'Des prestations sur mesure adaptées aux exigences des multinationales et des apprenants.');

  // Testimonials header
  setElText('testimonials-badge', isZh ? '各方信赖与合作反馈' : 'Témoignages & Recommandations');
  setElHTML('testimonials-title', isZh ? '合作伙伴与高管 <span class="gradient-text">真实评价</span>' : 'La confiance de mes <span class="gradient-text">Partenaires</span>');
  setElText('testimonials-subtitle', isZh ? '来自电建市政、华宇建设高管及各界学员的真实心声。' : 'Ce que disent les directeurs de projets et collaborateurs avec qui j\'ai travaillé.');

  // Contact header
  setElText('contact-badge', isZh ? '联系方式与业务对接' : 'Contactez-moi');
  setElHTML('contact-title', isZh ? '携手共赢，开启 <span class="gradient-text">卓越合作</span>' : 'Donnons vie à votre <span class="gradient-text">Projet</span>');
  setElText('contact-subtitle', isZh ? '随时欢迎来电洽谈项目派遣、同声传译、安全管理或语言培训业务。' : 'Un projet d\'infrastructure, une mission d\'interprétation ou un coaching ? Échangeons dès maintenant.');
}

function setElText(id, text) {
  const el = document.getElementById(id);
  if (el) el.textContent = text;
}

function setElHTML(id, html) {
  const el = document.getElementById(id);
  if (el) el.innerHTML = html;
}

function renderSocialLinks(data) {
  const socialsContainer = document.getElementById('hero-socials');
  if (socialsContainer && data.personal.links) {
    socialsContainer.innerHTML = `
      <a href="${data.personal.links.facebook}" target="_blank" rel="noopener noreferrer" class="social-link" title="Facebook (+300k)">
        <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
      </a>
      <a href="${data.personal.links.tiktok}" target="_blank" rel="noopener noreferrer" class="social-link" title="TikTok (+100k)">
        <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.24 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/></svg>
      </a>
      <a href="${data.personal.links.youtube}" target="_blank" rel="noopener noreferrer" class="social-link" title="YouTube (+30k)">
        <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
      </a>
      <a href="${data.personal.links.whatsapp}" target="_blank" rel="noopener noreferrer" class="social-link" title="WhatsApp">
        <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
      </a>
      <a href="mailto:${data.personal.email}" class="social-link" title="Email Direct">
        <svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
      </a>
    `;
  }
}

function renderStats(data) {
  const statsGrid = document.getElementById('stats-grid');
  if (statsGrid && data.stats) {
    statsGrid.innerHTML = data.stats.map(stat => `
      <div class="stat-card glass-card">
        <div class="stat-icon">${stat.icon}</div>
        <div class="stat-value">${stat.value}</div>
        <div class="stat-label">${stat.label}</div>
      </div>
    `).join('');
  }
}

function renderInterests(data) {
  const container = document.getElementById('interests-container');
  if (container && data.interests) {
    container.innerHTML = data.interests.map(item => `
      <div class="glass-card" style="padding: 1.1rem 1.8rem; display: flex; align-items: center; gap: 0.75rem; border-radius: var(--radius-full);">
        <span style="font-size: 1.6rem;">${item.icon}</span>
        <span style="font-weight: 700; font-size: 0.95rem;">${item.name}</span>
      </div>
    `).join('');
  }
}

let typewriterTimeout;
function initTypewriter(titles) {
  if (!titles || titles.length === 0) return;
  const target = document.getElementById('typewriter-text');
  if (!target) return;

  if (typewriterTimeout) clearTimeout(typewriterTimeout);

  let titleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typingSpeed = 80;

  function type() {
    const currentTitle = titles[titleIndex];
    if (!currentTitle) return;

    if (isDeleting) {
      target.textContent = currentTitle.substring(0, charIndex - 1);
      charIndex--;
      typingSpeed = 40;
    } else {
      target.textContent = currentTitle.substring(0, charIndex + 1);
      charIndex++;
      typingSpeed = 80;
    }

    if (!isDeleting && charIndex === currentTitle.length) {
      isDeleting = true;
      typingSpeed = 2200;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      titleIndex = (titleIndex + 1) % titles.length;
      typingSpeed = 350;
    }

    typewriterTimeout = setTimeout(type, typingSpeed);
  }

  type();
}

function renderSkills(data) {
  const grid = document.getElementById('skills-grid');
  if (!grid || !data.skillsCategories) return;

  grid.innerHTML = data.skillsCategories.map(cat => `
    <div class="skills-category-card glass-card" data-category="${cat.id}">
      <div class="skills-category-header">
        <span class="skills-category-icon">${cat.icon}</span>
        <h3 class="skills-category-title">${cat.title}</h3>
      </div>
      <div class="skills-list">
        ${cat.skills.map(skill => `
          <div class="skill-item">
            <div class="skill-info">
              <span class="skill-name">${skill.name}</span>
              <div class="skill-level-wrapper">
                <span class="skill-counter" data-target="${skill.level}">0%</span>
                <span class="skill-tag">${skill.tag || 'Expert'}</span>
              </div>
            </div>
            <div class="skill-bar-bg">
              <div class="skill-bar-fill" data-level="${skill.level}"></div>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `).join('');
}

function initSkillsAnimation() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const fills = entry.target.querySelectorAll('.skill-bar-fill');
        fills.forEach(fill => {
          const level = fill.getAttribute('data-level');
          fill.style.width = level + '%';
        });

        const counters = entry.target.querySelectorAll('.skill-counter');
        counters.forEach(counter => {
          const target = parseInt(counter.getAttribute('data-target'), 10) || 100;
          let current = 0;
          const increment = Math.ceil(target / 40);
          const interval = setInterval(() => {
            current += increment;
            if (current >= target) {
              current = target;
              clearInterval(interval);
            }
            counter.textContent = current + '%';
          }, 25);
        });

        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  document.querySelectorAll('.skills-category-card').forEach(card => {
    observer.observe(card);
  });
}

function initCardTilt() {
  const cards = document.querySelectorAll('.glass-card');
  cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = ((y - centerY) / centerY) * -4;
      const rotateY = ((x - centerX) / centerX) * 4;

      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-6px)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0)';
    });
  });
}

function switchTimelineTab(type) {
  const expBtn = document.getElementById('tab-exp-btn');
  const eduBtn = document.getElementById('tab-edu-btn');

  if (type === 'exp') {
    expBtn.classList.add('active');
    eduBtn.classList.remove('active');
  } else {
    eduBtn.classList.add('active');
    expBtn.classList.remove('active');
  }

  const data = cvData[currentLang] || cvData.fr;
  renderTimeline(type, data);
  initCardTilt();
}

function renderTimeline(type, data) {
  const container = document.getElementById('timeline-container');
  if (!container || !data) return;

  if (type === 'exp') {
    container.innerHTML = data.experiences.map(exp => `
      <div class="timeline-item">
        <div class="timeline-dot"></div>
        <div class="timeline-card glass-card">
          <div class="timeline-header">
            <div>
              <h3 class="timeline-role">${exp.role}</h3>
              <div class="timeline-company">${exp.company} • <span>${exp.location}</span> (${exp.type})</div>
            </div>
            <span class="timeline-period">${exp.period}</span>
          </div>
          <p class="timeline-desc">${exp.description}</p>
          ${exp.achievements ? `
            <ul class="timeline-achievements">
              ${exp.achievements.map(a => `<li>${a}</li>`).join('')}
            </ul>
          ` : ''}
          <div class="timeline-tech-tags">
            ${exp.technologies.map(t => `<span class="tech-tag">${t}</span>`).join('')}
          </div>
        </div>
      </div>
    `).join('');
  } else {
    container.innerHTML = data.educations.map(edu => `
      <div class="timeline-item">
        <div class="timeline-dot"></div>
        <div class="timeline-card glass-card">
          <div class="timeline-header">
            <div>
              <h3 class="timeline-role">${edu.diploma}</h3>
              <div class="timeline-company">${edu.institution}</div>
            </div>
            <span class="timeline-period">${edu.period}</span>
          </div>
          <p class="timeline-desc">${edu.description}</p>
        </div>
      </div>
    `).join('');
  }
}

function updateFilterButtons(lang) {
  const isZh = lang === 'zh';
  const filterContainer = document.getElementById('projects-filter');
  if (filterContainer) {
    filterContainer.innerHTML = `
      <button class="filter-btn active" data-filter="all" onclick="filterProjects('all', this)">${isZh ? '全部核心业绩' : 'Toutes les réalisations'}</button>
      <button class="filter-btn" data-filter="interpretation" onclick="filterProjects('interpretation', this)">${isZh ? '工程同传与现场翻译' : 'Interprétation & Chantiers'}</button>
      <button class="filter-btn" data-filter="content" onclick="filterProjects('content', this)">${isZh ? '出版著作与教学平台' : 'Auteur & Digital (+430k)'}</button>
    `;
  }
}

function filterProjects(category, btn) {
  const filterBtns = document.querySelectorAll('.filter-btn');
  filterBtns.forEach(b => b.classList.remove('active'));
  if (btn) btn.classList.add('active');

  const data = cvData[currentLang] || cvData.fr;
  renderProjects(category, data);
  initCardTilt();
}

function renderProjects(category, data) {
  const grid = document.getElementById('projects-grid');
  if (!grid || !data || !data.projects) return;

  const filtered = category === 'all' 
    ? data.projects 
    : data.projects.filter(p => p.category === category);

  grid.innerHTML = filtered.map(p => `
    <div class="project-card glass-card">
      <div class="project-img-wrapper">
        <img src="${p.image}" alt="${p.title}" loading="lazy">
        ${p.badge ? `<span class="project-badge">${p.badge}</span>` : ''}
      </div>
      <div class="project-content">
        <div class="project-category">${p.categoryLabel}</div>
        <h3 class="project-title">${p.title}</h3>
        <p class="project-description">${p.description}</p>
        <div class="project-tags">
          ${p.technologies.map(t => `<span class="tech-tag">${t}</span>`).join('')}
        </div>
        <div class="project-actions">
          <button class="btn btn-secondary btn-sm" onclick="openProjectModal('${p.id}')">
            <span>${currentLang === 'zh' ? '详细介绍' : 'Détails'}</span>
          </button>
          <a href="${p.demoUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm">
            <span>${currentLang === 'zh' ? '查看链接 ↗' : 'Voir le lien ↗'}</span>
          </a>
        </div>
      </div>
    </div>
  `).join('');
}

function openProjectModal(projectId) {
  const data = cvData[currentLang] || cvData.fr;
  const project = data.projects.find(p => p.id === projectId);
  if (!project) return;

  const modal = document.getElementById('project-modal');
  const modalTitle = document.getElementById('modal-title');
  const modalBody = document.getElementById('modal-body');

  const isZh = currentLang === 'zh';
  modalTitle.textContent = project.title;
  modalBody.innerHTML = `
    <img src="${project.image}" alt="${project.title}" class="modal-img">
    <div style="display: flex; gap: 0.5rem; flex-wrap: wrap; margin-bottom: 0.5rem;">
      <span class="badge" style="background: rgba(79, 70, 229, 0.1); color: var(--primary); font-weight: 700; padding: 0.35rem 0.85rem; border-radius: 9999px;">${project.categoryLabel}</span>
      ${project.badge ? `<span class="badge" style="background: rgba(2, 132, 199, 0.1); color: var(--secondary); font-weight: 700; padding: 0.35rem 0.85rem; border-radius: 9999px;">${project.badge}</span>` : ''}
    </div>
    <p style="color: var(--text-secondary); line-height: 1.75; font-size: 1.05rem;">${project.description}</p>
    
    ${project.features ? `
      <div>
        <h4 style="margin-bottom: 0.75rem; color: var(--text-primary); font-weight: 800;">${isZh ? '核心亮点与重点成果：' : 'Points clés & Réalisations :'}</h4>
        <ul style="list-style: none; display: flex; flex-direction: column; gap: 0.6rem;">
          ${project.features.map(f => `<li style="color: var(--text-secondary); padding-left: 1.4rem; position: relative;">▹ ${f}</li>`).join('')}
        </ul>
      </div>
    ` : ''}

    <div>
      <h4 style="margin-bottom: 0.75rem; color: var(--text-primary); font-weight: 800;">${isZh ? '专业标签与关键词：' : 'Mots-clés & Compétences :'}</h4>
      <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
        ${project.technologies.map(t => `<span class="tech-tag">${t}</span>`).join('')}
      </div>
    </div>

    <div style="display: flex; gap: 1rem; margin-top: 1rem;">
      <a href="${project.demoUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary" style="flex: 1;">
        <span>${isZh ? '访问官方页面 ↗' : 'Ouvrir la page ↗'}</span>
      </a>
      <a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary" style="flex: 1;">
        <span>${isZh ? '了解更多 ↗' : 'En savoir plus ↗'}</span>
      </a>
    </div>
  `;

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeProjectModal(event) {
  if (event && event.target !== event.currentTarget && !event.target.classList.contains('modal-close-btn')) {
    return;
  }
  const modal = document.getElementById('project-modal');
  modal.classList.remove('active');
  document.body.style.overflow = 'auto';
}

function renderCommunity(data) {
  const container = document.getElementById('social-cards-grid');
  if (!container || !data.socialCards) return;

  container.innerHTML = data.socialCards.map(card => `
    <div class="social-hub-card glass-card">
      <div class="social-hub-header">
        <span class="social-hub-icon">${card.icon}</span>
        <div>
          <h3 class="social-hub-title">${card.platform}</h3>
          <div class="social-hub-handle">${card.handle}</div>
        </div>
      </div>
      <div class="social-hub-badge">${card.followers}</div>
      <p class="social-hub-desc">${card.description}</p>
      <a href="${card.url}" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm social-hub-btn">
        <span>${card.btnText}</span>
      </a>
    </div>
  `).join('');
}

function renderServices(data) {
  const servicesGrid = document.getElementById('services-grid');
  if (servicesGrid && data.services) {
    servicesGrid.innerHTML = data.services.map(srv => `
      <div class="service-card glass-card">
        <div class="service-icon-box">${srv.icon}</div>
        <h3 class="service-title">${srv.title}</h3>
        <p class="service-desc">${srv.description}</p>
      </div>
    `).join('');
  }
}

function renderTestimonials(data) {
  const testGrid = document.getElementById('testimonials-grid');
  if (testGrid && data.testimonials) {
    testGrid.innerHTML = data.testimonials.map(t => `
      <div class="testimonial-card glass-card">
        <p class="testimonial-quote">"${t.quote}"</p>
        <div class="testimonial-author">
          <img src="${t.avatar}" alt="${t.name}" class="testimonial-avatar">
          <div>
            <div class="author-name">${t.name}</div>
            <div class="author-role">${t.role}</div>
          </div>
        </div>
      </div>
    `).join('');
  }
}

function updateContactLabels(data, lang) {
  const isZh = lang === 'zh';
  const contactEmail = document.getElementById('contact-email');
  const contactPhone = document.getElementById('contact-phone');
  const contactLoc = document.getElementById('contact-location');

  if (contactEmail) contactEmail.textContent = data.personal.email;
  if (contactPhone) contactPhone.textContent = data.personal.phone;
  if (contactLoc) contactLoc.textContent = data.personal.location;

  setElText('contact-info-title', isZh ? '商务与直通联络' : 'Mes Coordonnées');
  setElText('contact-info-desc', isZh ? '欢迎通过电话、微信或下方留言表单与我直接取得联系。' : 'N\'hésitez pas à me joindre directement par email ou téléphone, ou à m\'envoyer un message via le formulaire.');
  setElText('contact-form-title', isZh ? '发送在线合作意向' : 'Envoyez-moi un message');

  // Form placeholders & labels
  const nameLabel = document.getElementById('label-name');
  const emailLabel = document.getElementById('label-email');
  const subjectLabel = document.getElementById('label-subject');
  const messageLabel = document.getElementById('label-message');
  const submitBtnSpan = document.getElementById('btn-submit-contact-text');

  if (nameLabel) nameLabel.textContent = isZh ? '您的称呼 / 公司名称' : 'Votre Nom Complet';
  if (emailLabel) emailLabel.textContent = isZh ? '您的电子邮箱' : 'Votre Adresse Email';
  if (subjectLabel) subjectLabel.textContent = isZh ? '合作主题 / 工程项目' : 'Sujet du Message';
  if (messageLabel) messageLabel.textContent = isZh ? '合作意向与项目详情' : 'Votre Message';
  if (submitBtnSpan) submitBtnSpan.textContent = isZh ? '立即发送信息' : 'Envoyer le message';
}

function handleContactSubmit(e) {
  e.preventDefault();
  const submitBtn = document.getElementById('btn-submit-contact');
  const originalHTML = submitBtn.innerHTML;

  submitBtn.disabled = true;
  submitBtn.innerHTML = `<span>${currentLang === 'zh' ? '正在发送中...' : 'Envoi en cours...'}</span>`;

  setTimeout(() => {
    submitBtn.disabled = false;
    submitBtn.innerHTML = originalHTML;
    document.getElementById('contact-form').reset();
    showToast(currentLang === 'zh' ? "信息发送成功！苏波 (Espoir Chinois) 将尽快回复您。" : "Votre message a bien été envoyé à Espoir Chinois !");
  }, 1200);
}

function showToast(message) {
  const toast = document.getElementById('toast');
  const toastMsg = document.getElementById('toast-message');
  if (!toast || !toastMsg) return;

  toastMsg.textContent = message;
  toast.classList.add('show');

  setTimeout(() => {
    toast.classList.remove('show');
  }, 4000);
}

function initNavbarScroll() {
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
}

function initMobileMenu() {
  const toggle = document.getElementById('mobile-menu-toggle');
  const navLinks = document.getElementById('nav-links');

  if (toggle && navLinks) {
    toggle.addEventListener('click', () => {
      navLinks.classList.toggle('open');
      toggle.textContent = navLinks.classList.contains('open') ? '✕' : '☰';
    });

    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('open');
        toggle.textContent = '☰';
      });
    });
  }
}

function initScrollSpy() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    let current = '';
    const scrollPosition = window.scrollY + 200;

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });
}

// Global functions for inline HTML events
window.setLanguage = setLanguage;
window.switchTimelineTab = switchTimelineTab;
window.filterProjects = filterProjects;
window.openProjectModal = openProjectModal;
window.closeProjectModal = closeProjectModal;
window.handleContactSubmit = handleContactSubmit;
