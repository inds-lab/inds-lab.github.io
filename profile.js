const params = new URLSearchParams(window.location.search);
const profileId = params.get('id') || 'lin-chen';
let language = params.get('lang') || localStorage.getItem('site-language') || 'en';

const people = {
  en: {
    brand: 'Blue Systems Lab',
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
      'Contact: Building F5, Science and Technology Campus, Beijing, China.',
      '© 2026 Blue Systems Lab. Last updated on June 10, 2026.'
    ],
    list: [
      ['lin-chen', 'Prof. Lin Chen', 'Professor', 'linchen@bluesys.example', 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=480&q=80', 'Lin Chen leads projects on reliable storage systems and cloud infrastructure, with an emphasis on deployable prototypes and reproducible evaluation.', ['Storage systems', 'Cloud infrastructure', 'Reliability', 'Persistent memory'], ['Fast and Reliable Storage for Cloud-Native Services', 'Elastic Data Placement in Large-Scale Persistent Memory Systems']],
      ['yao-wang', 'Prof. Yao Wang', 'Associate Professor', 'yaowang@bluesys.example', 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=480&q=80', 'Yao Wang studies how programmable hardware can reshape data systems, including network acceleration and hardware-aware query execution.', ['Data systems', 'Programmable networks', 'Smart NICs', 'Hardware-software co-design'], ['Programmable Network Support for Distributed Storage', 'Practical Indexing for Hardware-Accelerated Data Systems']],
      ['hao-lan', 'Dr. Hao Lan', 'Postdoctoral Fellow', 'haolan@bluesys.example', 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=480&q=80', 'Hao Lan works on fault-tolerant cloud storage and fast recovery mechanisms for distributed services.', ['Fault tolerance', 'Distributed storage', 'Recovery protocols'], ['Low-Latency Recovery for Replicated Storage']],
      ['qing-zhao', 'Dr. Qing Zhao', 'Postdoctoral Fellow', 'qingzhao@bluesys.example', 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=480&q=80', 'Qing Zhao focuses on persistent memory data structures and consistency models for emerging hardware.', ['Persistent memory', 'Consistency', 'Data structures'], ['Persistent Indexing for Mixed Workloads']],
      ['hao-li', 'Hao Li', 'PhD Student', 'haoli@bluesys.example', 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=480&q=80', 'Hao studies storage engines for cloud-native services and develops prototypes for high-throughput transactional workloads.', ['Storage engines', 'Cloud-native systems', 'Transactions'], ['Fast and Reliable Storage for Cloud-Native Services']],
      ['runhua-zhang', 'Runhua Zhang', 'PhD Student', 'runhuazhang@bluesys.example', 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=480&q=80', 'Runhua works on data placement, scheduling, and resource isolation for large memory and storage clusters.', ['Data placement', 'Scheduling', 'Resource isolation'], ['Elastic Data Placement in Large-Scale Persistent Memory Systems']],
      ['junru-liu', 'Junru Liu', 'PhD Student', 'junruliu@bluesys.example', 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=480&q=80', 'Junru explores programmable network support for distributed storage and service-to-service communication.', ['Programmable switches', 'Distributed storage', 'Network systems'], ['Programmable Network Support for Distributed Storage']],
      ['wenhao-xu', 'Wenhao Xu', 'Master Student', 'wenhaoxu@bluesys.example', 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=480&q=80', 'Wenhao builds tracing and benchmarking tools for cloud storage systems.', ['Benchmarking', 'Observability', 'Cloud storage'], ['Trace-Guided Benchmarking for Storage Services']],
      ['haodi-sun', 'Haodi Sun', 'Master Student', 'haodisun@bluesys.example', 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&w=480&q=80', 'Haodi studies indexing and caching techniques for hardware-accelerated data systems.', ['Indexing', 'Caching', 'Hardware acceleration'], ['Practical Indexing for Hardware-Accelerated Data Systems']],
      ['yue-chen', 'Yue Chen', 'Master Student', 'yuechen@bluesys.example', 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=480&q=80', 'Yue works on reliability testing and failure injection for distributed services.', ['Failure injection', 'Testing', 'Reliable systems'], ['Practical Failure Injection for Cloud Services']],
      ['guangyan-zhang', 'Dr. Guangyan Zhang', 'Alumnus, PhD 2021', 'guangyan@alumni.example', 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?auto=format&fit=crop&w=480&q=80', 'Guangyan worked on persistent storage systems and now continues research in academic infrastructure.', ['Persistent storage', 'File systems', 'Systems evaluation'], ['Durable Metadata for Cloud Storage']],
      ['mingqiang-li', 'Dr. Mingqiang Li', 'Alumnus, PhD 2022', 'mingqiang@alumni.example', 'https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?auto=format&fit=crop&w=480&q=80', 'Mingqiang studied large-scale distributed storage and joined industry after graduation.', ['Distributed storage', 'Cloud platforms', 'Performance'], ['Scalable Replication for Cloud Storage']],
      ['youmin-chen', 'Dr. Youmin Chen', 'Alumnus, PhD 2023', 'youmin@alumni.example', 'https://images.unsplash.com/photo-1573497019418-b400bb3ab074?auto=format&fit=crop&w=480&q=80', 'Youmin focused on storage reliability and debugging for production systems.', ['Reliability', 'Debugging', 'Production systems'], ['Debugging Storage Failures at Scale']]
    ]
  },
  zh: {
    brand: '蓝色系统实验室',
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
      '联系方式：北京市，科技园 F5 楼。',
      '© 2026 蓝色系统实验室。最后更新：2026 年 6 月 10 日。'
    ],
    list: [
      ['lin-chen', '陈林 教授', '教授', 'linchen@bluesys.example', 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=480&q=80', '陈林教授负责可靠存储系统与云基础设施方向的研究，强调可部署原型和可复现实验评估。', ['存储系统', '云基础设施', '可靠性', '持久内存'], ['面向云原生服务的快速可靠存储系统', '大规模持久内存系统中的弹性数据放置']],
      ['yao-wang', '王尧 教授', '副教授', 'yaowang@bluesys.example', 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=480&q=80', '王尧教授关注可编程硬件如何重塑数据系统，包括网络加速和硬件感知的查询执行。', ['数据系统', '可编程网络', '智能网卡', '软硬件协同设计'], ['面向分布式存储的可编程网络支持', '面向硬件加速数据系统的实用索引技术']],
      ['hao-lan', '蓝昊 博士', '博士后', 'haolan@bluesys.example', 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=480&q=80', '蓝昊博士研究容错云存储和分布式服务的快速恢复机制。', ['容错', '分布式存储', '恢复协议'], ['面向复制存储的低延迟恢复机制']],
      ['qing-zhao', '赵晴 博士', '博士后', 'qingzhao@bluesys.example', 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=480&q=80', '赵晴博士关注持久内存数据结构和新型硬件上的一致性模型。', ['持久内存', '一致性', '数据结构'], ['面向混合负载的持久化索引技术']],
      ['hao-li', '李昊', '博士生', 'haoli@bluesys.example', 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=480&q=80', '李昊研究面向云原生服务的存储引擎，并开发支持高吞吐事务负载的系统原型。', ['存储引擎', '云原生系统', '事务处理'], ['面向云原生服务的快速可靠存储系统']],
      ['runhua-zhang', '张润华', '博士生', 'runhuazhang@bluesys.example', 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=480&q=80', '张润华研究大内存与存储集群中的数据放置、调度和资源隔离。', ['数据放置', '调度', '资源隔离'], ['大规模持久内存系统中的弹性数据放置']],
      ['junru-liu', '刘君如', '博士生', 'junruliu@bluesys.example', 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=480&q=80', '刘君如探索可编程网络对分布式存储和服务间通信的支持。', ['可编程交换机', '分布式存储', '网络系统'], ['面向分布式存储的可编程网络支持']],
      ['wenhao-xu', '徐文浩', '硕士生', 'wenhaoxu@bluesys.example', 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=480&q=80', '徐文浩构建面向云存储系统的追踪和基准测试工具。', ['基准测试', '可观测性', '云存储'], ['面向存储服务的 Trace 驱动基准测试']],
      ['haodi-sun', '孙昊迪', '硕士生', 'haodisun@bluesys.example', 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&w=480&q=80', '孙昊迪研究面向硬件加速数据系统的索引和缓存技术。', ['索引', '缓存', '硬件加速'], ['面向硬件加速数据系统的实用索引技术']],
      ['yue-chen', '陈悦', '硕士生', 'yuechen@bluesys.example', 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=480&q=80', '陈悦研究分布式服务的可靠性测试和故障注入。', ['故障注入', '测试', '可靠系统'], ['面向云服务的实用故障注入']],
      ['guangyan-zhang', '张光彦 博士', '毕业生，博士 2021', 'guangyan@alumni.example', 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?auto=format&fit=crop&w=480&q=80', '张光彦博士曾研究持久化存储系统，目前继续从事学术基础设施方向研究。', ['持久化存储', '文件系统', '系统评测'], ['面向云存储的持久元数据管理']],
      ['mingqiang-li', '李明强 博士', '毕业生，博士 2022', 'mingqiang@alumni.example', 'https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?auto=format&fit=crop&w=480&q=80', '李明强博士曾研究大规模分布式存储，毕业后进入产业界。', ['分布式存储', '云平台', '性能优化'], ['面向云存储的可扩展复制机制']],
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

  document.querySelector('#profile-photo').src = person.photo;
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
