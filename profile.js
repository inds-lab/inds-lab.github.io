const params = new URLSearchParams(window.location.search);
const profileId = params.get('id') || 'deke-guo';
let language = params.get('lang') || localStorage.getItem('site-language') || 'en';
const avatarPlaceholder = 'assets/avatar-placeholder.svg';
const guoPhoto = 'https://cse.sysu.edu.cn/sites/default/files/styles/image_style_2/public/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_2025-07-18_195253_005.png?itok=i9BbsCOB';
const quanPhoto = 'https://cse.sysu.edu.cn/sites/default/files/styles/image_style_2/public/quangc_0.png?itok=Q-V1FDME';

const people = {
  en: {
    brand: 'Intelligent Networking and Distributed Systems Lab',
    language: '中文',
    back: 'Back to Team',
    nav: {
      home: 'Home',
      team: 'Team',
      publications: 'Publications',
      research: 'Research',
      join: 'Join Us'
    },
    headings: ['Research Interests', 'Selected Work'],
    footer: [
      'Contact: School of Computer Science and Engineering, Sun Yat-sen University, Guangzhou, China.',
      '© 2026 Intelligent Networking and Distributed Systems Lab. Last updated on June 10, 2026.'
    ],
    list: [
      ['deke-guo', 'Prof. Deke Guo', 'Professor, Doctoral Supervisor', 'guodk@mail.sysu.edu.cn', guoPhoto, 'Deke Guo is a professor and doctoral supervisor at the School of Computer Science and Engineering, Sun Yat-sen University. His research focuses on computer networks, distributed computing systems, edge computing, computing power networks, and large model system optimization.', ['Large model system optimization', 'Computer networks', 'Distributed computing systems', 'Edge computing', 'Computing power networks'], ['IEEE ICNP 2019 Best Paper', 'More than 300 academic papers', 'More than 70 granted invention patents']],
      ['guocong-quan', 'Prof. Guocong Quan', 'Associate Professor, Doctoral Supervisor', 'quangc@mail.sysu.edu.cn', quanPhoto, 'Guocong Quan is an associate professor and doctoral supervisor at Sun Yat-sen University. His research focuses on efficient distributed AI systems and algorithms, including large model inference, distributed resource management, reinforcement learning, and online learning.', ['Efficient large model inference', 'Distributed resource management', 'Reinforcement learning', 'Online learning'], ['IEEE INFOCOM 2019 Best Paper Award', 'IEEE/ACM ToN papers on edge caching', 'Research on distributed AI systems and algorithms']],
      ['hao-lan', 'Dr. Hao Lan', 'Postdoctoral Fellow', 'haolan@bluesys.example', 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=480&q=80', 'Hao Lan works on fault-tolerant distributed services and fast recovery mechanisms.', ['Fault tolerance', 'Distributed systems', 'Recovery protocols'], ['Low-Latency Recovery for Distributed Services']],
      ['qing-zhao', 'Dr. Qing Zhao', 'Postdoctoral Fellow', 'qingzhao@bluesys.example', 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=480&q=80', 'Qing Zhao focuses on system optimization for large model training and inference.', ['Large model systems', 'Inference optimization', 'Resource scheduling'], ['Efficient Runtime Support for Large Model Inference']],
      ['hao-li', 'Hao Li', 'PhD Student', 'haoli@bluesys.example', 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=480&q=80', 'Hao studies storage engines for cloud-native services and develops prototypes for high-throughput transactional workloads.', ['Storage engines', 'Cloud-native systems', 'Transactions'], ['Fast and Reliable Storage for Cloud-Native Services']],
      ['runhua-zhang', 'Runhua Zhang', 'PhD Student', 'runhuazhang@bluesys.example', 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=480&q=80', 'Runhua works on resource orchestration and scheduling in computing power networks.', ['Computing power networks', 'Resource orchestration', 'Scheduling'], ['Resource Scheduling for Computing Power Networks']],
      ['junru-liu', 'Junru Liu', 'PhD Student', 'junruliu@bluesys.example', 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=480&q=80', 'Junru explores programmable network support for edge services and service-to-service communication.', ['Programmable switches', 'Edge services', 'Network systems'], ['Programmable Network Support for Edge Services']],
      ['wenhao-xu', 'Wenhao Xu', 'Master Student', 'wenhaoxu@bluesys.example', 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=480&q=80', 'Wenhao builds measurement and benchmarking tools for edge computing systems.', ['Benchmarking', 'Observability', 'Edge computing'], ['Trace-Guided Benchmarking for Edge Services']],
      ['haodi-sun', 'Haodi Sun', 'Master Student', 'haodisun@bluesys.example', 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&w=480&q=80', 'Haodi studies caching and scheduling techniques for large model serving systems.', ['Caching', 'Scheduling', 'Large model serving'], ['Caching and Scheduling for Large Model Serving']],
      ['yue-chen', 'Yue Chen', 'Master Student', 'yuechen@bluesys.example', 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=480&q=80', 'Yue works on reliability testing and failure injection for distributed services.', ['Failure injection', 'Testing', 'Reliable systems'], ['Practical Failure Injection for Cloud Services']],
      ['guangyan-zhang', 'Dr. Guangyan Zhang', 'Alumnus, PhD 2021', 'guangyan@alumni.example', 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?auto=format&fit=crop&w=480&q=80', 'Guangyan worked on networked distributed systems and now continues research in academic infrastructure.', ['Computer networks', 'Distributed systems', 'Systems evaluation'], ['Reliable Service Coordination in Distributed Networks']],
      ['mingqiang-li', 'Dr. Mingqiang Li', 'Alumnus, PhD 2022', 'mingqiang@alumni.example', 'https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?auto=format&fit=crop&w=480&q=80', 'Mingqiang studied large-scale distributed systems and joined industry after graduation.', ['Distributed systems', 'Cloud platforms', 'Performance'], ['Scalable Coordination for Cloud Platforms']],
      ['youmin-chen', 'Dr. Youmin Chen', 'Alumnus, PhD 2023', 'youmin@alumni.example', 'https://images.unsplash.com/photo-1573497019418-b400bb3ab074?auto=format&fit=crop&w=480&q=80', 'Youmin focused on storage reliability and debugging for production systems.', ['Reliability', 'Debugging', 'Production systems'], ['Debugging Storage Failures at Scale']]
    ]
  },
  zh: {
    brand: '智能网络与分布式系统实验室',
    language: 'English',
    back: '返回团队',
    nav: {
      home: '首页',
      team: '团队',
      publications: '论文发表',
      research: '研究方向',
      join: '加入我们'
    },
    headings: ['研究兴趣', '代表工作'],
    footer: [
      '联系方式：广州市番禺区大学城中山大学计算机学院。',
      '© 2026 智能网络与分布式系统实验室。最后更新：2026 年 6 月 10 日。'
    ],
    list: [
      ['deke-guo', '郭得科 教授', '教授、博士生导师', 'guodk@mail.sysu.edu.cn', guoPhoto, '郭得科教授是中山大学计算机学院教授、博士生导师，主要研究方向包括计算机网络、分布式计算系统、边缘计算、算力网和大模型系统优化。', ['大模型系统优化', '计算机网络', '分布式计算系统', '边缘计算', '算力网'], ['IEEE ICNP 2019 最佳论文', '发表中英文学术论文 300 余篇', '获得中国和美国授权发明专利 70 余项']],
      ['guocong-quan', '权国聪 副教授', '副教授、博士生导师', 'quangc@mail.sysu.edu.cn', quanPhoto, '权国聪副教授是中山大学计算机学院副教授、博士生导师，研究方向聚焦高效分布式 AI 系统与算法，包括高效大模型推理、大规模分布式资源管理与优化、强化学习和在线学习。', ['高效大模型推理', '分布式资源管理', '强化学习', '在线学习'], ['IEEE INFOCOM 2019 最佳论文奖', 'IEEE/ACM ToN 边缘缓存相关论文', '高效分布式 AI 系统与算法研究']],
      ['hao-lan', '蓝昊 博士', '博士后', 'haolan@bluesys.example', 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=480&q=80', '蓝昊博士研究分布式服务的容错和快速恢复机制。', ['容错', '分布式系统', '恢复协议'], ['面向分布式服务的低延迟恢复机制']],
      ['qing-zhao', '赵晴 博士', '博士后', 'qingzhao@bluesys.example', 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=480&q=80', '赵晴博士关注大模型训练与推理中的系统优化技术。', ['大模型系统', '推理优化', '资源调度'], ['面向大模型推理的高效运行时支持']],
      ['hao-li', '李昊', '博士生', 'haoli@bluesys.example', 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=480&q=80', '李昊研究面向云原生服务的分布式系统，并开发支持高吞吐工作负载的系统原型。', ['分布式系统', '云原生系统', '事务处理'], ['面向云原生服务的高可靠分布式系统']],
      ['runhua-zhang', '张润华', '博士生', 'runhuazhang@bluesys.example', 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=480&q=80', '张润华研究算力网中的资源编排与调度。', ['算力网', '资源编排', '调度'], ['面向算力网的资源调度机制']],
      ['junru-liu', '刘君如', '博士生', 'junruliu@bluesys.example', 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=480&q=80', '刘君如探索可编程网络对边缘服务和服务间通信的支持。', ['可编程交换机', '边缘服务', '网络系统'], ['面向边缘服务的可编程网络支持']],
      ['wenhao-xu', '徐文浩', '硕士生', 'wenhaoxu@bluesys.example', 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=480&q=80', '徐文浩构建面向边缘计算系统的测量和基准测试工具。', ['基准测试', '可观测性', '边缘计算'], ['面向边缘服务的 Trace 驱动基准测试']],
      ['haodi-sun', '孙昊迪', '硕士生', 'haodisun@bluesys.example', 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&w=480&q=80', '孙昊迪研究面向硬件加速数据系统的索引和缓存技术。', ['索引', '缓存', '硬件加速'], ['面向硬件加速数据系统的实用索引技术']],
      ['yue-chen', '陈悦', '硕士生', 'yuechen@bluesys.example', 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=480&q=80', '陈悦研究分布式服务的可靠性测试和故障注入。', ['故障注入', '测试', '可靠系统'], ['面向云服务的实用故障注入']],
      ['guangyan-zhang', '张光彦 博士', '毕业生，博士 2021', 'guangyan@alumni.example', 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?auto=format&fit=crop&w=480&q=80', '张光彦博士曾研究网络化分布式系统，目前继续从事学术基础设施方向研究。', ['计算机网络', '分布式系统', '系统评测'], ['分布式网络中的可靠服务协同']],
      ['mingqiang-li', '李明强 博士', '毕业生，博士 2022', 'mingqiang@alumni.example', 'https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?auto=format&fit=crop&w=480&q=80', '李明强博士曾研究大规模分布式系统，毕业后进入产业界。', ['分布式系统', '云平台', '性能优化'], ['面向云平台的可扩展协同机制']],
      ['youmin-chen', '陈友民 博士', '毕业生，博士 2023', 'youmin@alumni.example', 'https://images.unsplash.com/photo-1573497019418-b400bb3ab074?auto=format&fit=crop&w=480&q=80', '陈友民博士曾关注生产系统中的存储可靠性和故障诊断。', ['可靠性', '故障诊断', '生产系统'], ['大规模存储故障诊断']]
    ]
  }
};

function normalizePerson(row) {
  return {
    id: row[0],
    name: row[1],
    role: row[2],
    email: row[3],
    photo: row[4],
    bio: row[5],
    interests: row[6],
    work: row[7]
  };
}

function setList(selector, items) {
  document.querySelector(selector).innerHTML = items.map((item) => `<li>${item}</li>`).join('');
}

function render() {
  const copy = people[language] || people.en;
  const person = copy.list.map(normalizePerson).find((item) => item.id === profileId) || normalizePerson(copy.list[0]);

  document.documentElement.lang = language === 'zh' ? 'zh-CN' : 'en';
  document.title = `${copy.brand} - ${person.name}`;
  document.querySelector('.brand').textContent = copy.brand;
  document.querySelector('#profile-language-toggle').textContent = copy.language;
  document.querySelector('#back-to-team').textContent = copy.back;
  document.querySelector('#back-to-team').href = `index.html#team`;
  document.querySelectorAll('[data-profile-nav]').forEach((link) => {
    link.textContent = copy.nav[link.dataset.profileNav];
  });

  document.querySelector('#profile-photo').src = person.id === 'deke-guo' || person.id === 'guocong-quan'
    ? person.photo
    : avatarPlaceholder;
  document.querySelector('#profile-photo').alt = person.name;
  document.querySelector('#profile-name').textContent = person.name;
  document.querySelector('#profile-role').textContent = person.role;
  document.querySelector('#profile-email').textContent = person.email;
  document.querySelector('#profile-email').href = `mailto:${person.email}`;
  document.querySelector('#profile-bio').textContent = person.bio;
  document.querySelector('#profile-interests-title').textContent = copy.headings[0];
  document.querySelector('#profile-work-title').textContent = copy.headings[1];
  setList('#profile-interests', person.interests);
  setList('#profile-work', person.work);
  document.querySelectorAll('.footer-inner p').forEach((paragraph, index) => {
    paragraph.textContent = copy.footer[index];
  });
}

document.querySelector('#profile-language-toggle').addEventListener('click', (event) => {
  event.preventDefault();
  language = language === 'en' ? 'zh' : 'en';
  localStorage.setItem('site-language', language);
  const nextUrl = new URL(window.location.href);
  nextUrl.searchParams.set('lang', language);
  history.replaceState(null, '', nextUrl);
  render();
});

document.querySelector('.nav-toggle').addEventListener('click', () => {
  const navLinks = document.querySelector('.nav-links');
  const isOpen = navLinks.classList.toggle('open');
  document.querySelector('.nav-toggle').setAttribute('aria-expanded', String(isOpen));
});

render();
