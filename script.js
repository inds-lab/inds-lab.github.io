const slides = Array.from(document.querySelectorAll('.slide'));
const dots = Array.from(document.querySelectorAll('.indicators button'));
const previous = document.querySelector('.prev');
const next = document.querySelector('.next');
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');
const viewLinks = Array.from(document.querySelectorAll('[data-view]'));
const brandLink = document.querySelector('.brand');
const languageToggle = document.querySelector('#language-toggle');
const views = Object.fromEntries(
  viewLinks.map((link) => [link.dataset.view, document.querySelector(`#${link.dataset.view}-view`)])
);

let currentSlide = 0;
let currentView = window.location.hash.replace('#', '') || 'home';
let currentLanguage = localStorage.getItem('site-language') || 'en';
let timer = window.setInterval(showNext, 5200);

const content = {
  en: {
    titlePrefix: 'Intelligent Networking and Distributed Systems Lab',
    brand: 'Intelligent Networking and Distributed Systems Lab',
    nav: {
      home: 'Home',
      team: 'Team',
      publications: 'Publications',
      research: 'Research',
      join: 'Join Us'
    },
    language: '中文',
    footer: [
      'Contact: Building F5, Science and Technology Campus, Beijing, China.',
      '© 2026 Intelligent Networking and Distributed Systems Lab. Last updated on June 10, 2026.'
    ],
    home: {
      title: 'Welcome to the Intelligent Networking and Distributed Systems Lab!',
      intro: [
        'Our group studies efficient, reliable, and scalable computer systems. We focus on storage software, cloud infrastructure, programmable networks, and emerging hardware that changes how data is stored, moved, and protected.',
        'The lab publishes in leading systems venues and works closely with students, researchers, and industry partners to turn practical problems into rigorous systems research.'
      ],
      captions: [
        'Research work, prototypes, and publication highlights',
        'Students and faculty building systems together',
        'Seminars, workshops, and collaborative discussions',
        'From hardware trends to deployable system designs'
      ],
      notice: 'We are looking for passionate PhD students, postdocs, and master students to join the team ',
      noticeLink: '(more info)',
      newsTitle: 'News',
      news: [
        ['Feb 24, 2026.', 'One paper earns a distinguished artifact award at FAST\'26.'],
        ['Jan 31, 2026.', 'One paper has been accepted to EuroSys\'26.'],
        ['Dec 8, 2025.', 'Two papers have been accepted to FAST\'26.'],
        ['Oct 21, 2025.', 'One paper has been accepted to ICDE\'26.'],
        ['Sep 27, 2025.', 'One paper has been accepted to SoCC\'25.'],
        ['Aug 24, 2025.', 'One paper has been accepted to SIGMOD\'26.']
      ],
      moreNews: '... see all News',
      researchTitle: 'Research',
      researchItems: [
        'Persistent memory and next-generation storage',
        'Cloud-native data systems',
        'Programmable network acceleration',
        'Reliable systems for large-scale services'
      ]
    },
    team: {
      title: 'Team',
      lead: 'Faculty, graduate students, engineers, and collaborators work together through weekly seminars, reading groups, and project meetings.',
      faculty: 'Faculty',
      postdocs: 'Postdoctoral Fellows',
      phd: 'PhD Students',
      master: 'Master Students',
      alumni: 'Alumni',
      selectedAlumni: 'Selected Alumni',
      allAlumni: 'All Alumni',
      alumniColumns: ['Name', 'Degree', 'Year', 'After Graduation'],
      people: [
        {
          id: 'lin-chen',
          group: 'faculty',
          name: 'Prof. Lin Chen',
          role: 'Professor',
          email: 'linchen@bluesys.example',
          photo: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=480&q=80',
          summary: 'Storage systems, cloud infrastructure, and reliable software.',
          bio: 'Lin Chen leads projects on reliable storage systems and cloud infrastructure, with an emphasis on deployable prototypes and reproducible evaluation.',
          interests: ['Storage systems', 'Cloud infrastructure', 'Reliability', 'Persistent memory'],
          work: ['Fast and Reliable Storage for Cloud-Native Services', 'Elastic Data Placement in Large-Scale Persistent Memory Systems']
        },
        {
          id: 'yao-wang',
          group: 'faculty',
          name: 'Prof. Yao Wang',
          role: 'Associate Professor',
          email: 'yaowang@bluesys.example',
          photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=480&q=80',
          summary: 'Data systems, programmable networks, and hardware-software co-design.',
          bio: 'Yao Wang studies how programmable hardware can reshape data systems, including network acceleration and hardware-aware query execution.',
          interests: ['Data systems', 'Programmable networks', 'Smart NICs', 'Hardware-software co-design'],
          work: ['Programmable Network Support for Distributed Storage', 'Practical Indexing for Hardware-Accelerated Data Systems']
        },
        {
          id: 'hao-lan',
          group: 'postdoc',
          name: 'Dr. Hao Lan',
          role: 'Postdoctoral Fellow',
          email: 'haolan@bluesys.example',
          photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=480&q=80',
          summary: 'Start in 2024.',
          bio: 'Hao Lan works on fault-tolerant cloud storage and fast recovery mechanisms for distributed services.',
          interests: ['Fault tolerance', 'Distributed storage', 'Recovery protocols'],
          work: ['Low-Latency Recovery for Replicated Storage']
        },
        {
          id: 'qing-zhao',
          group: 'postdoc',
          name: 'Dr. Qing Zhao',
          role: 'Postdoctoral Fellow',
          email: 'qingzhao@bluesys.example',
          photo: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=480&q=80',
          summary: 'Start in 2025.',
          bio: 'Qing Zhao focuses on persistent memory data structures and consistency models for emerging hardware.',
          interests: ['Persistent memory', 'Consistency', 'Data structures'],
          work: ['Persistent Indexing for Mixed Workloads']
        },
        {
          id: 'hao-li',
          group: 'phd',
          name: 'Hao Li',
          role: 'PhD Student',
          email: 'haoli@bluesys.example',
          photo: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=480&q=80',
          summary: 'Ph.D. Start in 2022.',
          bio: 'Hao studies storage engines for cloud-native services and develops prototypes for high-throughput transactional workloads.',
          interests: ['Storage engines', 'Cloud-native systems', 'Transactions'],
          work: ['Fast and Reliable Storage for Cloud-Native Services']
        },
        {
          id: 'runhua-zhang',
          group: 'phd',
          name: 'Runhua Zhang',
          role: 'PhD Student',
          email: 'runhuazhang@bluesys.example',
          photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=480&q=80',
          summary: 'Ph.D. Start in 2023.',
          bio: 'Runhua works on data placement, scheduling, and resource isolation for large memory and storage clusters.',
          interests: ['Data placement', 'Scheduling', 'Resource isolation'],
          work: ['Elastic Data Placement in Large-Scale Persistent Memory Systems']
        },
        {
          id: 'junru-liu',
          group: 'phd',
          name: 'Junru Liu',
          role: 'PhD Student',
          email: 'junruliu@bluesys.example',
          photo: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=480&q=80',
          summary: 'Ph.D. Start in 2024.',
          bio: 'Junru explores programmable network support for distributed storage and service-to-service communication.',
          interests: ['Programmable switches', 'Distributed storage', 'Network systems'],
          work: ['Programmable Network Support for Distributed Storage']
        },
        {
          id: 'wenhao-xu',
          group: 'master',
          name: 'Wenhao Xu',
          role: 'Master Student',
          email: 'wenhaoxu@bluesys.example',
          photo: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=480&q=80',
          summary: 'Master. Start in 2024.',
          bio: 'Wenhao builds tracing and benchmarking tools for cloud storage systems.',
          interests: ['Benchmarking', 'Observability', 'Cloud storage'],
          work: ['Trace-Guided Benchmarking for Storage Services']
        },
        {
          id: 'haodi-sun',
          group: 'master',
          name: 'Haodi Sun',
          role: 'Master Student',
          email: 'haodisun@bluesys.example',
          photo: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&w=480&q=80',
          summary: 'Master. Start in 2025.',
          bio: 'Haodi studies indexing and caching techniques for hardware-accelerated data systems.',
          interests: ['Indexing', 'Caching', 'Hardware acceleration'],
          work: ['Practical Indexing for Hardware-Accelerated Data Systems']
        },
        {
          id: 'yue-chen',
          group: 'master',
          name: 'Yue Chen',
          role: 'Master Student',
          email: 'yuechen@bluesys.example',
          photo: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=480&q=80',
          summary: 'Master. Start in 2025.',
          bio: 'Yue works on reliability testing and failure injection for distributed services.',
          interests: ['Failure injection', 'Testing', 'Reliable systems'],
          work: ['Practical Failure Injection for Cloud Services']
        },
        {
          id: 'guangyan-zhang',
          group: 'alumni',
          name: 'Dr. Guangyan Zhang',
          role: 'Alumnus, PhD 2021',
          email: 'guangyan@alumni.example',
          photo: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?auto=format&fit=crop&w=480&q=80',
          summary: 'Graduated in 2021, Tsinghua University.',
          bio: 'Guangyan worked on persistent storage systems and now continues research in academic infrastructure.',
          interests: ['Persistent storage', 'File systems', 'Systems evaluation'],
          work: ['Durable Metadata for Cloud Storage']
        },
        {
          id: 'mingqiang-li',
          group: 'alumni',
          name: 'Dr. Mingqiang Li',
          role: 'Alumnus, PhD 2022',
          email: 'mingqiang@alumni.example',
          photo: 'https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?auto=format&fit=crop&w=480&q=80',
          summary: 'Graduated in 2022, Huawei.',
          bio: 'Mingqiang studied large-scale distributed storage and joined industry after graduation.',
          interests: ['Distributed storage', 'Cloud platforms', 'Performance'],
          work: ['Scalable Replication for Cloud Storage']
        },
        {
          id: 'youmin-chen',
          group: 'alumni',
          name: 'Dr. Youmin Chen',
          role: 'Alumnus, PhD 2023',
          email: 'youmin@alumni.example',
          photo: 'https://images.unsplash.com/photo-1573497019418-b400bb3ab074?auto=format&fit=crop&w=480&q=80',
          summary: 'Graduated in 2023, SJTU.',
          bio: 'Youmin focused on storage reliability and debugging for production systems.',
          interests: ['Reliability', 'Debugging', 'Production systems'],
          work: ['Debugging Storage Failures at Scale']
        }
      ],
      alumniRows: [
        ['Bin Yan', 'Ph.D.', '2026', 'Alibaba'],
        ['Wenhao Lv', 'Ph.D.', '2026', 'Alibaba'],
        ['Jian Gao', 'Ph.D.', '2025', 'Tencent'],
        ['Yuhao Zhang', 'Postdoc', '2024', 'Associate Professor'],
        ['Zhe Yang', 'Ph.D.', '2024', 'Huawei'],
        ['Zijie Tian', 'Master', '2024', 'Ph.D. student'],
        ['Qing Wang', 'Postdoc', '2023', 'Tsinghua University'],
        ['Kedong Fang', 'Master', '2022', 'Huawei']
      ]
    },
    publications: {
      title: 'Publications',
      lead: 'Selected papers from the lab in systems, storage, databases, and cloud infrastructure.',
      papers: [
        ['Fast and Reliable Storage for Cloud-Native Services', 'FAST\'26. Hao Li, Qing Zhao, Lin Chen.'],
        ['Elastic Data Placement in Large-Scale Persistent Memory Systems', 'EuroSys\'26. Runhua Zhang, Yao Wang, Lin Chen.'],
        ['Programmable Network Support for Distributed Storage', 'SoCC\'25. Junru Liu, Wenhao Xu, Yao Wang.'],
        ['Practical Indexing for Hardware-Accelerated Data Systems', 'SIGMOD\'25. Haodi Sun, Qing Zhao, Lin Chen.']
      ]
    },
    research: {
      title: 'Research',
      lead: 'We build practical systems around new storage media, cloud workloads, programmable networks, and reliability requirements.',
      topics: [
        ['Persistent Memory', 'Data structures, recovery protocols, and system software for next-generation storage media.'],
        ['Cloud Data Systems', 'Elastic storage and query infrastructure for services that must scale predictably.'],
        ['Network Acceleration', 'Programmable switches, smart NICs, and fast paths for distributed storage traffic.'],
        ['Reliable Infrastructure', 'Fault tolerance, observability, and performance isolation for large-scale systems.']
      ]
    },
    join: {
      title: 'Join Us',
      lead: 'We welcome students and collaborators who enjoy building real systems and asking careful research questions about performance, reliability, and scale.',
      openTitle: 'Open Positions',
      positions: [
        'PhD students interested in storage systems, cloud infrastructure, and distributed systems.',
        'Master students looking for hands-on systems research projects.',
        'Postdocs and visiting researchers with strong systems or database backgrounds.'
      ],
      applyTitle: 'How to Apply',
      apply: 'Send your CV, transcript, and a short note about your research interests to contact@bluesys.example.'
    }
  },
  zh: {
    titlePrefix: '智能网络与分布式系统实验室',
    brand: '智能网络与分布式系统实验室',
    nav: {
      home: '首页',
      team: '团队',
      publications: '论文发表',
      research: '研究方向',
      join: '加入我们'
    },
    language: 'English',
    footer: [
      '联系方式：北京市，科技园 F5 楼。',
      '© 2026 智能网络与分布式系统实验室。最后更新：2026 年 6 月 10 日。'
    ],
    home: {
      title: '欢迎来到智能网络与分布式系统实验室！',
      intro: [
        '我们关注高效、可靠、可扩展的计算机系统，研究方向包括存储软件、云基础设施、可编程网络，以及会改变数据存储、传输和保护方式的新型硬件。',
        '实验室在系统领域的重要会议上发表研究成果，并与学生、研究者和产业合作伙伴一起，将真实问题转化为严谨的系统研究。'
      ],
      captions: [
        '研究成果、系统原型与论文亮点',
        '学生与教师共同构建真实系统',
        '组会、研讨会与合作讨论',
        '从硬件趋势到可落地的系统设计'
      ],
      notice: '我们正在招收对系统研究有热情的博士生、博士后和硕士生加入团队',
      noticeLink: '（更多信息）',
      newsTitle: '新闻',
      news: [
        ['2026 年 2 月 24 日。', '一篇论文获得 FAST\'26 杰出 Artifact 奖。'],
        ['2026 年 1 月 31 日。', '一篇论文被 EuroSys\'26 录用。'],
        ['2025 年 12 月 8 日。', '两篇论文被 FAST\'26 录用。'],
        ['2025 年 10 月 21 日。', '一篇论文被 ICDE\'26 录用。'],
        ['2025 年 9 月 27 日。', '一篇论文被 SoCC\'25 录用。'],
        ['2025 年 8 月 24 日。', '一篇论文被 SIGMOD\'26 录用。']
      ],
      moreNews: '... 查看全部新闻',
      researchTitle: '研究方向',
      researchItems: [
        '持久内存与新型存储系统',
        '云原生数据系统',
        '可编程网络加速',
        '大规模服务可靠性'
      ]
    },
    team: {
      title: '团队',
      lead: '教师、研究生、工程师和合作伙伴通过每周组会、论文阅读和项目讨论共同推进系统研究。',
      faculty: '教师',
      postdocs: '博士后',
      phd: '博士生',
      master: '硕士生',
      alumni: '毕业生',
      selectedAlumni: '优秀毕业生',
      allAlumni: '全部毕业生',
      alumniColumns: ['姓名', '学位', '毕业年份', '毕业去向'],
      people: [
        {
          id: 'lin-chen',
          group: 'faculty',
          name: '陈林 教授',
          role: '教授',
          email: 'linchen@bluesys.example',
          photo: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=480&q=80',
          summary: '研究方向包括存储系统、云基础设施和可靠软件。',
          bio: '陈林教授负责可靠存储系统与云基础设施方向的研究，强调可部署原型和可复现实验评估。',
          interests: ['存储系统', '云基础设施', '可靠性', '持久内存'],
          work: ['面向云原生服务的快速可靠存储系统', '大规模持久内存系统中的弹性数据放置']
        },
        {
          id: 'yao-wang',
          group: 'faculty',
          name: '王尧 教授',
          role: '副教授',
          email: 'yaowang@bluesys.example',
          photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=480&q=80',
          summary: '研究方向包括数据系统、可编程网络和软硬件协同设计。',
          bio: '王尧教授关注可编程硬件如何重塑数据系统，包括网络加速和硬件感知的查询执行。',
          interests: ['数据系统', '可编程网络', '智能网卡', '软硬件协同设计'],
          work: ['面向分布式存储的可编程网络支持', '面向硬件加速数据系统的实用索引技术']
        },
        {
          id: 'hao-lan',
          group: 'postdoc',
          name: '蓝昊 博士',
          role: '博士后',
          email: 'haolan@bluesys.example',
          photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=480&q=80',
          summary: '2024 年加入。',
          bio: '蓝昊博士研究容错云存储和分布式服务的快速恢复机制。',
          interests: ['容错', '分布式存储', '恢复协议'],
          work: ['面向复制存储的低延迟恢复机制']
        },
        {
          id: 'qing-zhao',
          group: 'postdoc',
          name: '赵晴 博士',
          role: '博士后',
          email: 'qingzhao@bluesys.example',
          photo: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=480&q=80',
          summary: '2025 年加入。',
          bio: '赵晴博士关注持久内存数据结构和新型硬件上的一致性模型。',
          interests: ['持久内存', '一致性', '数据结构'],
          work: ['面向混合负载的持久化索引技术']
        },
        {
          id: 'hao-li',
          group: 'phd',
          name: '李昊',
          role: '博士生',
          email: 'haoli@bluesys.example',
          photo: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=480&q=80',
          summary: '博士生，2022 年入学。',
          bio: '李昊研究面向云原生服务的存储引擎，并开发支持高吞吐事务负载的系统原型。',
          interests: ['存储引擎', '云原生系统', '事务处理'],
          work: ['面向云原生服务的快速可靠存储系统']
        },
        {
          id: 'runhua-zhang',
          group: 'phd',
          name: '张润华',
          role: '博士生',
          email: 'runhuazhang@bluesys.example',
          photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=480&q=80',
          summary: '博士生，2023 年入学。',
          bio: '张润华研究大内存与存储集群中的数据放置、调度和资源隔离。',
          interests: ['数据放置', '调度', '资源隔离'],
          work: ['大规模持久内存系统中的弹性数据放置']
        },
        {
          id: 'junru-liu',
          group: 'phd',
          name: '刘君如',
          role: '博士生',
          email: 'junruliu@bluesys.example',
          photo: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=480&q=80',
          summary: '博士生，2024 年入学。',
          bio: '刘君如探索可编程网络对分布式存储和服务间通信的支持。',
          interests: ['可编程交换机', '分布式存储', '网络系统'],
          work: ['面向分布式存储的可编程网络支持']
        },
        {
          id: 'wenhao-xu',
          group: 'master',
          name: '徐文浩',
          role: '硕士生',
          email: 'wenhaoxu@bluesys.example',
          photo: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=480&q=80',
          summary: '硕士生，2024 年入学。',
          bio: '徐文浩构建面向云存储系统的追踪和基准测试工具。',
          interests: ['基准测试', '可观测性', '云存储'],
          work: ['面向存储服务的 Trace 驱动基准测试']
        },
        {
          id: 'haodi-sun',
          group: 'master',
          name: '孙昊迪',
          role: '硕士生',
          email: 'haodisun@bluesys.example',
          photo: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&w=480&q=80',
          summary: '硕士生，2025 年入学。',
          bio: '孙昊迪研究面向硬件加速数据系统的索引和缓存技术。',
          interests: ['索引', '缓存', '硬件加速'],
          work: ['面向硬件加速数据系统的实用索引技术']
        },
        {
          id: 'yue-chen',
          group: 'master',
          name: '陈悦',
          role: '硕士生',
          email: 'yuechen@bluesys.example',
          photo: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=480&q=80',
          summary: '硕士生，2025 年入学。',
          bio: '陈悦研究分布式服务的可靠性测试和故障注入。',
          interests: ['故障注入', '测试', '可靠系统'],
          work: ['面向云服务的实用故障注入']
        },
        {
          id: 'guangyan-zhang',
          group: 'alumni',
          name: '张光彦 博士',
          role: '毕业生，博士 2021',
          email: 'guangyan@alumni.example',
          photo: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?auto=format&fit=crop&w=480&q=80',
          summary: '2021 年毕业，清华大学。',
          bio: '张光彦博士曾研究持久化存储系统，目前继续从事学术基础设施方向研究。',
          interests: ['持久化存储', '文件系统', '系统评测'],
          work: ['面向云存储的持久元数据管理']
        },
        {
          id: 'mingqiang-li',
          group: 'alumni',
          name: '李明强 博士',
          role: '毕业生，博士 2022',
          email: 'mingqiang@alumni.example',
          photo: 'https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?auto=format&fit=crop&w=480&q=80',
          summary: '2022 年毕业，华为。',
          bio: '李明强博士曾研究大规模分布式存储，毕业后进入产业界。',
          interests: ['分布式存储', '云平台', '性能优化'],
          work: ['面向云存储的可扩展复制机制']
        },
        {
          id: 'youmin-chen',
          group: 'alumni',
          name: '陈友民 博士',
          role: '毕业生，博士 2023',
          email: 'youmin@alumni.example',
          photo: 'https://images.unsplash.com/photo-1573497019418-b400bb3ab074?auto=format&fit=crop&w=480&q=80',
          summary: '2023 年毕业，上海交通大学。',
          bio: '陈友民博士曾关注生产系统中的存储可靠性和故障诊断。',
          interests: ['可靠性', '故障诊断', '生产系统'],
          work: ['大规模存储故障诊断']
        }
      ],
      alumniRows: [
        ['严斌', '博士', '2026', '阿里巴巴'],
        ['吕文浩', '博士', '2026', '阿里巴巴'],
        ['高健', '博士', '2025', '腾讯'],
        ['张宇豪', '博士后', '2024', '高校任教'],
        ['杨哲', '博士', '2024', '华为'],
        ['田子杰', '硕士', '2024', '继续攻读博士'],
        ['王晴', '博士后', '2023', '清华大学'],
        ['方科栋', '硕士', '2022', '华为']
      ]
    },
    publications: {
      title: '论文发表',
      lead: '实验室近期在系统、存储、数据库和云基础设施方向发表的代表性论文。',
      papers: [
        ['面向云原生服务的快速可靠存储系统', 'FAST\'26。李昊、赵晴、陈林。'],
        ['大规模持久内存系统中的弹性数据放置', 'EuroSys\'26。张润华、王尧、陈林。'],
        ['面向分布式存储的可编程网络支持', 'SoCC\'25。刘君如、徐文浩、王尧。'],
        ['面向硬件加速数据系统的实用索引技术', 'SIGMOD\'25。孙昊迪、赵晴、陈林。']
      ]
    },
    research: {
      title: '研究方向',
      lead: '我们围绕新型存储介质、云工作负载、可编程网络和可靠性需求构建实用系统。',
      topics: [
        ['持久内存', '面向新型存储介质的数据结构、恢复协议和系统软件。'],
        ['云数据系统', '面向可预测扩展的弹性存储与查询基础设施。'],
        ['网络加速', '使用可编程交换机、智能网卡和快速路径优化分布式存储流量。'],
        ['可靠基础设施', '面向大规模系统的容错、可观测性和性能隔离。']
      ]
    },
    join: {
      title: '加入我们',
      lead: '我们欢迎喜欢构建真实系统，并愿意深入思考性能、可靠性和规模问题的学生与合作伙伴。',
      openTitle: '开放名额',
      positions: [
        '对存储系统、云基础设施和分布式系统感兴趣的博士生。',
        '希望参与系统研究项目的硕士生。',
        '具有系统或数据库背景的博士后和访问学者。'
      ],
      applyTitle: '申请方式',
      apply: '请将简历、成绩单和一段简短的研究兴趣说明发送至 contact@bluesys.example。'
    }
  }
};

function renderSlide(index) {
  currentSlide = (index + slides.length) % slides.length;

  slides.forEach((slide, slideIndex) => {
    slide.classList.toggle('active', slideIndex === currentSlide);
  });

  dots.forEach((dot, dotIndex) => {
    dot.classList.toggle('active', dotIndex === currentSlide);
  });
}

function restartTimer() {
  window.clearInterval(timer);
  timer = window.setInterval(showNext, 5200);
}

function showNext() {
  renderSlide(currentSlide + 1);
}

function setText(selector, text) {
  const node = document.querySelector(selector);
  if (node) {
    node.textContent = text;
  }
}

function setList(selector, items, renderItem) {
  const node = document.querySelector(selector);
  if (node) {
    node.innerHTML = items.map(renderItem).join('');
  }
}

function renderTeam(people) {
  const groups = {
    faculty: document.querySelector('.faculty-list'),
    postdoc: document.querySelector('.postdoc-list'),
    phd: document.querySelector('.phd-list'),
    master: document.querySelector('.master-list'),
    alumni: document.querySelector('.alumni-featured-list')
  };

  Object.values(groups).forEach((group) => {
    group.innerHTML = '';
  });

  people.forEach((person) => {
    const isFaculty = person.group === 'faculty';
    const card = document.createElement('article');
    card.className = isFaculty ? 'member' : 'person-card';
    card.tabIndex = 0;
    card.dataset.profile = person.id;
    card.innerHTML = isFaculty
      ? `
        <img src="${person.photo}" alt="${person.name}">
        <div>
          <h3>${person.name}</h3>
          <p>${person.role}</p>
          <p>${person.summary}</p>
        </div>
      `
      : `
        <img src="${person.photo}" alt="${person.name}">
        <h3>${person.name}</h3>
        <p>${person.summary}</p>
      `;

    card.addEventListener('click', () => openProfile(person));
    card.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        openProfile(person);
      }
    });

    groups[person.group].appendChild(card);
  });
}

function openProfile(person) {
  window.location.href = `profile.html?id=${encodeURIComponent(person.id)}&lang=${currentLanguage}`;
}

function renderLanguage() {
  const copy = content[currentLanguage];
  document.documentElement.lang = currentLanguage === 'zh' ? 'zh-CN' : 'en';
  document.title = `${copy.titlePrefix} - ${copy.nav[currentView] || copy.nav.home}`;
  brandLink.textContent = copy.brand;
  languageToggle.textContent = copy.language;

  viewLinks.forEach((link) => {
    link.textContent = copy.nav[link.dataset.view];
  });

  setText('.intro h1', copy.home.title);
  document.querySelectorAll('.intro p').forEach((paragraph, index) => {
    paragraph.textContent = copy.home.intro[index];
  });
  document.querySelectorAll('.slide figcaption').forEach((caption, index) => {
    caption.textContent = copy.home.captions[index];
  });
  document.querySelector('.notice').replaceChildren(
    document.createTextNode(copy.home.notice),
    document.createTextNode(' '),
    Object.assign(document.createElement('a'), { href: '#join', textContent: copy.home.noticeLink }),
    document.createTextNode(currentLanguage === 'zh' ? '！' : '!')
  );
  document.querySelector('.notice a').addEventListener('click', (event) => {
    event.preventDefault();
    showView('join');
    history.replaceState(null, '', '#join');
  });
  setText('.news h2', copy.home.newsTitle);
  setList('.news ul', copy.home.news, ([date, text]) => `<li><time>${date}</time> ${text}</li>`);
  setText('.more-link', copy.home.moreNews);
  setText('.research-list h2', copy.home.researchTitle);
  setList('.research-list ul', copy.home.researchItems, (item) => `<li>${item}</li>`);

  setText('#team-view h1', copy.team.title);
  setText('#team-view .page-lead', copy.team.lead);
  setText('#team-view .team-section:nth-of-type(1) h2', copy.team.faculty);
  setText('#team-view .team-section:nth-of-type(2) h2', copy.team.postdocs);
  setText('#team-view .team-section:nth-of-type(3) h2', copy.team.phd);
  setText('#team-view .team-section:nth-of-type(4) h2', copy.team.master);
  setText('#team-view .team-section:nth-of-type(5) h2', copy.team.alumni);
  setText('.alumni-section h3:nth-of-type(1)', copy.team.selectedAlumni);
  setText('.alumni-section h3:nth-of-type(2)', copy.team.allAlumni);
  renderTeam(copy.team.people);
  document.querySelectorAll('.alumni-table th').forEach((heading, index) => {
    heading.textContent = copy.team.alumniColumns[index];
  });
  setList('.alumni-table tbody', copy.team.alumniRows, (row) => `
    <tr>
      <td>${row[0]}</td>
      <td>${row[1]}</td>
      <td>${row[2]}</td>
      <td>${row[3]}</td>
    </tr>
  `);

  setText('#publications-view h1', copy.publications.title);
  setText('#publications-view .page-lead', copy.publications.lead);
  document.querySelectorAll('#publications-view .paper').forEach((paper, index) => {
    const [title, meta] = copy.publications.papers[index];
    paper.querySelector('h3').textContent = title;
    paper.querySelector('p').innerHTML = `<strong>${meta.split('。')[0].split('. ')[0]}</strong>${currentLanguage === 'zh' ? '。' : '. '} ${meta.replace(meta.split('。')[0] + '。', '').replace(meta.split('. ')[0] + '. ', '')}`;
  });

  setText('#research-view h1', copy.research.title);
  setText('#research-view .page-lead', copy.research.lead);
  document.querySelectorAll('#research-view .topic').forEach((topic, index) => {
    const [title, text] = copy.research.topics[index];
    topic.querySelector('h2').textContent = title;
    topic.querySelector('p').textContent = text;
  });

  setText('#join-view h1', copy.join.title);
  setText('#join-view .page-lead', copy.join.lead);
  setText('#join-view .join-panel:nth-of-type(1) h2', copy.join.openTitle);
  setList('#join-view .join-panel:nth-of-type(1) ul', copy.join.positions, (item) => `<li>${item}</li>`);
  setText('#join-view .join-panel:nth-of-type(2) h2', copy.join.applyTitle);
  setText('#join-view .join-panel:nth-of-type(2) p', copy.join.apply);

  document.querySelectorAll('.footer-inner p').forEach((paragraph, index) => {
    paragraph.textContent = copy.footer[index];
  });
}

function showView(name) {
  currentView = views[name] ? name : 'home';

  Object.entries(views).forEach(([viewName, view]) => {
    view.classList.toggle('active', viewName === currentView);
  });

  viewLinks.forEach((link) => {
    link.classList.toggle('active', link.dataset.view === currentView);
  });

  if (navLinks.classList.contains('open')) {
    navLinks.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  }

  renderLanguage();
}

previous.addEventListener('click', () => {
  renderSlide(currentSlide - 1);
  restartTimer();
});

next.addEventListener('click', () => {
  showNext();
  restartTimer();
});

dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    renderSlide(index);
    restartTimer();
  });
});

navToggle.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', String(isOpen));
});

viewLinks.forEach((link) => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    showView(link.dataset.view);
    history.replaceState(null, '', link.getAttribute('href'));
  });
});

brandLink.addEventListener('click', (event) => {
  event.preventDefault();
  showView('home');
  history.replaceState(null, '', '#home');
});

languageToggle.addEventListener('click', (event) => {
  event.preventDefault();
  currentLanguage = currentLanguage === 'en' ? 'zh' : 'en';
  localStorage.setItem('site-language', currentLanguage);
  renderLanguage();

  if (navLinks.classList.contains('open')) {
    navLinks.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  }
});

if (currentView === 'cn') {
  currentLanguage = 'zh';
  currentView = 'home';
  localStorage.setItem('site-language', currentLanguage);
  history.replaceState(null, '', '#home');
}

showView(currentView);
