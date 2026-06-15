const newsCopy = {
  en: {
    lang: 'en',
    title: 'News - Intelligent Networking and Distributed Systems Lab',
    brand: 'Intelligent Networking and Distributed Systems Lab',
    nav: {
      home: 'Home',
      team: 'Team',
      publications: 'Publications',
      research: 'Research',
      join: 'Join Us'
    },
    toggle: '中文',
    back: 'Back to Home',
    heading: 'News',
    lead: 'Lab news, awards, and recruitment information will be updated here.',
    allNews: 'All News',
    items: [
      ['2026', 'The lab welcomes prospective PhD, master, outstanding undergraduate students, and postdoctoral researchers interested in systems and networking research.'],
      ['2023', 'Prof. Deke Guo received the CCF Natural Science Award, ranked first.'],
      ['2023', 'Prof. Deke Guo received the First Prize of the Invention and Entrepreneurship Award Innovation Award, ranked first.'],
      ['2023', 'Prof. Deke Guo received the Hunan Think Tank Research Outstanding Achievement Award, ranked first.'],
      ['2021', 'Prof. Deke Guo received the Natural Science Second Prize of the Chinese Institute of Electronics, ranked first.'],
      ['2020', 'Prof. Deke Guo received the CCF-IEEE CS Young Scientist Award.'],
      ['2019', 'Prof. Deke Guo received an IEEE ICNP Best Paper Award.'],
      ['2019', 'Prof. Deke Guo received the Hunan Natural Science First Prize, ranked first.']
    ],
    footer: [
      'Contact: School of Computer Science and Engineering, Sun Yat-sen University, Guangzhou, China.',
      '© 2026 Intelligent Networking and Distributed Systems Lab.'
    ]
  },
  zh: {
    lang: 'zh-CN',
    title: '新闻 - 智能网络与分布式系统实验室',
    brand: '中山大学智能网络与分布式系统实验室',
    nav: {
      home: '首页',
      team: '团队',
      publications: '论文发表',
      research: '研究方向',
      join: '加入我们'
    },
    toggle: 'English',
    back: '返回首页',
    heading: '新闻',
    lead: '实验室新闻、获奖信息和招生信息将在这里持续更新。',
    allNews: '全部新闻',
    items: [
      ['2026年', '欢迎对系统与网络研究感兴趣的博士生、硕士生、优秀本科生和博士后联系加入实验室。'],
      ['2023年', '郭得科教授获 CCF 自然科学二等奖，排名第一。'],
      ['2023年', '郭得科教授获中国发明协会“发明创业奖创新奖”一等奖，排名第一。'],
      ['2023年', '郭得科教授获湖南省第四届湖湘智库研究优秀成果奖，排名第一。'],
      ['2021年', '郭得科教授获中国电子学会自然科学二等奖，排名第一。'],
      ['2020年', '郭得科教授获 CCF-IEEE CS 青年科学家奖。'],
      ['2019年', '郭得科教授获 IEEE ICNP 最佳论文。'],
      ['2019年', '郭得科教授获湖南省自然科学一等奖，排名第一。']
    ],
    footer: [
      '联系方式：广州市番禺区大学城中山大学计算机学院。',
      '© 2026 智能网络与分布式系统实验室。'
    ]
  }
};

const params = new URLSearchParams(window.location.search);
let currentNewsLanguage = params.get('lang') || localStorage.getItem('site-language') || 'zh';
if (!newsCopy[currentNewsLanguage]) {
  currentNewsLanguage = 'zh';
}

function renderNewsPage() {
  const copy = newsCopy[currentNewsLanguage];
  document.documentElement.lang = copy.lang;
  document.title = copy.title;

  document.querySelector('.brand').textContent = copy.brand;
  document.querySelector('.back-link').textContent = copy.back;
  document.querySelector('.subpage h1').textContent = copy.heading;
  document.querySelector('.page-lead').textContent = copy.lead;
  document.querySelector('.news-archive h2').textContent = copy.allNews;

  document.querySelectorAll('[data-news-nav]').forEach((link) => {
    const key = link.dataset.newsNav;
    link.textContent = copy.nav[key];
    link.href = `/index.html#${key}`;
  });

  const toggle = document.querySelector('#news-language-toggle');
  toggle.textContent = copy.toggle;
  toggle.href = `?lang=${currentNewsLanguage === 'zh' ? 'en' : 'zh'}`;

  document.querySelector('.news-archive ul').innerHTML = copy.items
    .map(([date, text]) => `<li><time>${date}</time> ${text}</li>`)
    .join('');

  document.querySelectorAll('.footer-inner p').forEach((paragraph, index) => {
    paragraph.textContent = copy.footer[index];
  });
}

document.querySelector('#news-language-toggle').addEventListener('click', (event) => {
  event.preventDefault();
  currentNewsLanguage = currentNewsLanguage === 'zh' ? 'en' : 'zh';
  localStorage.setItem('site-language', currentNewsLanguage);
  history.replaceState(null, '', `?lang=${currentNewsLanguage}`);
  renderNewsPage();
});

renderNewsPage();
