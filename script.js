const slides = Array.from(document.querySelectorAll('.slide'));
const dots = Array.from(document.querySelectorAll('.indicators button'));
const previous = document.querySelector('.prev');
const next = document.querySelector('.next');
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');
const viewLinks = Array.from(document.querySelectorAll('[data-view]'));
const brandLink = document.querySelector('.brand');
const languageToggle = document.querySelector('#language-toggle');
const avatarPlaceholder = 'assets/avatar-placeholder.svg';
const guoPhoto = 'https://cse.sysu.edu.cn/sites/default/files/styles/image_style_2/public/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_2025-07-18_195253_005.png?itok=i9BbsCOB';
const quanPhoto = 'https://cse.sysu.edu.cn/sites/default/files/styles/image_style_2/public/quangc_0.png?itok=Q-V1FDME';
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
      'Contact: School of Computer Science and Engineering, Sun Yat-sen University, Guangzhou, China.',
      '© 2026 Intelligent Networking and Distributed Systems Lab. Last updated on June 10, 2026.'
    ],
    home: {
      title: 'Welcome to the Intelligent Networking and Distributed Systems Lab!',
      intro: [
        'Our group studies computer networks, distributed computing systems, edge computing, computing power networks, and large model system optimization.',
        'Led by Prof. Deke Guo at the School of Computer Science and Engineering, Sun Yat-sen University, the lab builds on long-term work in network computing and systems, distributed computing and systems, mobile computing, big data, and large-scale information systems.'
      ],
      captions: [
        'Computer networks and distributed systems research',
        'Edge computing, computing power networks, and system prototypes',
        'Research discussions around papers, projects, and experiments',
        'From networked systems to large model system optimization'
      ],
      notice: 'We are looking for passionate PhD students, postdocs, and master students to join the team ',
      noticeLink: '(more info)',
      newsTitle: 'News',
      news: [
        ['2026.', 'The lab welcomes prospective PhD, master, and outstanding undergraduate students interested in systems and networking research.'],
        ['2023.', 'Prof. Deke Guo received the CCF Natural Science Award, ranked first.'],
        ['2023.', 'Prof. Deke Guo received the First Prize of the Invention and Entrepreneurship Award Innovation Award, ranked first.'],
        ['2023.', 'Prof. Deke Guo received the Hunan Think Tank Research Outstanding Achievement Award, ranked first.'],
        ['2021.', 'Prof. Deke Guo received the Natural Science Second Prize of the Chinese Institute of Electronics, ranked first.'],
        ['2020.', 'Prof. Deke Guo received the CCF-IEEE CS Young Scientist Award.']
      ],
      moreNews: '... see all News',
      researchTitle: 'Research',
      researchItems: [
        'Large model system optimization',
        'Computer networks',
        'Distributed computing systems and edge computing',
        'Computing power networks'
      ]
    },
    team: {
      title: 'Team',
      lead: 'Faculty, graduate students, and collaborators work together on computer networks, distributed computing systems, edge computing, computing power networks, and large model system optimization.',
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
          id: 'deke-guo',
          group: 'faculty',
          name: 'Prof. Deke Guo',
          role: 'Professor',
          email: 'guodk@mail.sysu.edu.cn',
          homepage: 'https://dekeguo.github.io/',
          photo: guoPhoto,
          summary: 'Professor and doctoral supervisor. Research interests include computer networks, distributed computing systems, edge computing, computing power networks, and large model system optimization.',
          bio: 'Deke Guo is a second-level professor and doctoral supervisor at Sun Yat-sen University. His research covers computer networks, distributed computing systems, edge computing, computing power networks, and large model system optimization. His public profile reports more than 300 academic papers, over 150 CCF A/B papers, more than 90 ACM/IEEE Transactions papers, an IEEE ICNP 2019 Best Paper Award, four academic monographs as first author, and over 70 granted Chinese and U.S. invention patents as first inventor.',
          interests: ['Computer networks', 'Distributed computing systems', 'Edge computing', 'Computing power networks', 'Large model system optimization'],
          work: ['National-level leading talent and national-level young talent', 'NSFC Excellent Young Scientists Fund recipient', 'CCF-IEEE CS Young Scientist Award, 2020', 'CCF Natural Science Award, ranked first, 2023', 'IEEE ICNP 2019 Best Paper Award']
        },
        {
          id: 'guocong-quan',
          group: 'faculty',
          name: 'Prof. Guocong Quan',
          role: 'Associate Professor',
          email: 'quangc@mail.sysu.edu.cn',
          homepage: 'https://guocongquan.github.io/',
          photo: quanPhoto,
          summary: 'Efficient distributed AI systems and algorithms, including large model inference, resource management, and online learning.',
          bio: 'Guocong Quan is an associate professor and doctoral supervisor at Sun Yat-sen University. His research focuses on efficient distributed AI systems and algorithms, including large model inference, distributed resource management, reinforcement learning, and online learning.',
          interests: ['Efficient large model inference', 'Distributed resource management', 'Reinforcement learning', 'Online learning'],
          work: ['IEEE INFOCOM 2019 Best Paper Award', 'IEEE/ACM ToN papers on edge caching', 'Research on distributed AI systems and algorithms']
        },
        {
          id: 'hao-lan',
          group: 'postdoc',
          name: 'XXX',
          role: 'Postdoctoral Fellow',
          email: 'haolan@bluesys.example',
          photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=480&q=80',
          summary: 'Start in 2024.',
          bio: 'Hao Lan works on fault-tolerant cloud storage and fast recovery mechanisms for distributed services.',
          interests: ['Fault tolerance', 'Distributed systems', 'Recovery protocols'],
          work: ['Low-Latency Recovery for Replicated Storage']
        },
        {
          id: 'qing-zhao',
          group: 'postdoc',
          name: 'XXX',
          role: 'Postdoctoral Fellow',
          email: 'qingzhao@bluesys.example',
          photo: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=480&q=80',
          summary: 'Start in 2025.',
          bio: 'Qing Zhao focuses on system optimization for large model training and inference.',
          interests: ['Large model systems', 'Inference optimization', 'Resource scheduling'],
          work: ['Efficient Runtime Support for Large Model Inference']
        },
        {
          id: 'hao-li',
          group: 'phd',
          name: 'XXX',
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
          name: 'XXX',
          role: 'PhD Student',
          email: 'runhuazhang@bluesys.example',
          photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=480&q=80',
          summary: 'Ph.D. Start in 2023.',
          bio: 'Runhua works on resource orchestration and scheduling in computing power networks.',
          interests: ['Computing power networks', 'Resource orchestration', 'Scheduling'],
          work: ['Resource Scheduling for Computing Power Networks']
        },
        {
          id: 'junru-liu',
          group: 'phd',
          name: 'XXX',
          role: 'PhD Student',
          email: 'junruliu@bluesys.example',
          photo: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=480&q=80',
          summary: 'Ph.D. Start in 2024.',
          bio: 'Junru explores programmable network support for edge services and service-to-service communication.',
          interests: ['Programmable switches', 'Edge services', 'Network systems'],
          work: ['Programmable Network Support for Edge Services']
        },
        {
          id: 'wenhao-xu',
          group: 'master',
          name: 'XXX',
          role: 'Master Student',
          email: 'wenhaoxu@bluesys.example',
          photo: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=480&q=80',
          summary: 'Master. Start in 2024.',
          bio: 'Wenhao builds measurement and benchmarking tools for edge computing systems.',
          interests: ['Benchmarking', 'Observability', 'Edge computing'],
          work: ['Trace-Guided Benchmarking for Edge Services']
        },
        {
          id: 'haodi-sun',
          group: 'master',
          name: 'XXX',
          role: 'Master Student',
          email: 'haodisun@bluesys.example',
          photo: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&w=480&q=80',
          summary: 'Master. Start in 2025.',
          bio: 'Haodi studies caching and scheduling techniques for large model serving systems.',
          interests: ['Indexing', 'Caching', 'Hardware acceleration'],
          work: ['Caching and Scheduling for Large Model Serving']
        },
        {
          id: 'yue-chen',
          group: 'master',
          name: 'XXX',
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
          name: 'XXX',
          role: 'Alumnus, PhD 2021',
          email: 'guangyan@alumni.example',
          photo: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?auto=format&fit=crop&w=480&q=80',
          summary: 'Alumni placeholder. Information to be updated.',
          bio: 'Guangyan worked on networked distributed systems and now continues research in academic infrastructure.',
          interests: ['Computer networks', 'Distributed systems', 'Systems evaluation'],
          work: ['Reliable Service Coordination in Distributed Networks']
        },
        {
          id: 'mingqiang-li',
          group: 'alumni',
          name: 'XXX',
          role: 'Alumnus, PhD 2022',
          email: 'mingqiang@alumni.example',
          photo: 'https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?auto=format&fit=crop&w=480&q=80',
          summary: 'Graduated in 2022, Huawei.',
          bio: 'Mingqiang studied large-scale distributed systems and joined industry after graduation.',
          interests: ['Distributed systems', 'Cloud platforms', 'Performance'],
          work: ['Scalable Replication for Cloud Storage']
        },
        {
          id: 'youmin-chen',
          group: 'alumni',
          name: 'XXX',
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
        ['XXX', 'Ph.D.', '2026', 'Alibaba'],
        ['XXX', 'Ph.D.', '2026', 'Alibaba'],
        ['XXX', 'Ph.D.', '2025', 'Tencent'],
        ['XXX', 'Postdoc', '2024', 'Associate Professor'],
        ['XXX', 'Ph.D.', '2024', 'Huawei'],
        ['XXX', 'Master', '2024', 'Ph.D. student'],
        ['XXX', 'Postdoc', '2023', 'To be updated'],
        ['XXX', 'Master', '2022', 'Huawei']
      ]
    },
    publications: {
      title: 'Publications',
      lead: 'Selected publications by Prof. Deke Guo and collaborators in computer networks, distributed systems, edge computing, and data-intensive systems.',
      years: [
        {
          year: '2023',
          papers: [
            {
              title: 'When Deduplication Meets Migration: An Efficient and Adaptive Strategy in Distributed Storage Systems',
              authors: 'Geyao Cheng, Lailong Luo, Junxu Xia, Deke Guo, Yuchen Sun',
              venue: 'IEEE Transactions on Parallel and Distributed Systems (TPDS), 2023',
              links: [{ label: 'PDF', url: 'https://dekeguo.github.io/Jingwei-TPDS.pdf' }]
            }
          ]
        },
        {
          year: '2022',
          papers: [
            {
              title: 'COIN: An Efficient Indexing Mechanism for Unstructured Data Sharing Systems',
              authors: 'Junjie Xie, Chen Qian, Deke Guo, Minmei Wang, Ge Wang, Honghui Chen',
              venue: 'IEEE/ACM Transactions on Networking (TON), 2022',
              links: [{ label: 'PDF', url: 'https://dekeguo.github.io/ton_coin.pdf' }]
            }
          ]
        },
        {
          year: '2021',
          papers: [
            {
              title: 'HDS: A Fast Hybrid Data Location Service for Hierarchical Mobile Edge Computing',
              authors: 'Deke Guo, Junjie Xie, Xiaofeng Shi, Haofan Cai, Chen Qian, Honghui Chen',
              venue: 'IEEE/ACM Transactions on Networking (TON), 2021',
              links: [{ label: 'PDF', url: 'https://dekeguo.github.io/TON_HDSS.pdf' }]
            },
            {
              title: 'MCFsyn: A Multi-party Set Reconciliation Protocol with the Marked Cuckoo Filter',
              authors: 'Lailong Luo, Deke Guo, Yawei Zhao, Ori Rottenstreich, Richard T. B. Ma, Xueshan Luo',
              venue: 'IEEE Transactions on Parallel and Distributed Systems (TPDS), 2021',
              links: [{ label: 'PDF', url: 'https://dekeguo.github.io/MCFsyn.pdf' }]
            },
            {
              title: 'A Capacity-elastic Cuckoo Filter Design for Dynamic Set Representation',
              authors: 'Lailong Luo, Deke Guo, Ori Rottenstreich, Richard T. B. Ma, Xueshan Luo, Bangbang Ren',
              venue: 'IEEE Transactions on Network and Service Management (TNSM), 2021',
              links: [{ label: 'PDF', url: 'https://dekeguo.github.io/tnsm_lailong.pdf' }]
            }
          ]
        },
        {
          year: '2019',
          papers: [
            {
              title: 'Validation of Distributed SDN Control Plane Under Uncertain Failures',
              authors: 'Junjie Xie, Deke Guo, Chen Qian',
              venue: 'IEEE/ACM Transactions on Networking (TON), 2019',
              links: [{ label: 'PDF', url: 'https://dekeguo.github.io/Ton_RobustValidation.pdf' }]
            },
            {
              title: 'Embedding Service Function Tree with Minimum Cost for NFV Enabled Multicast',
              authors: 'Bangbang Ren, Deke Guo, Yulong Shen, Guoming Tang, Xu Lin',
              venue: 'IEEE Journal on Selected Areas in Communications (JSAC), 2019',
              links: [{ label: 'PDF', url: 'https://dekeguo.github.io/JSAC_NFV.pdf' }]
            }
          ]
        }
      ]
    },
    research: {
      title: 'Research',
      lead: 'We study future computing infrastructures through computer networks, distributed computing systems, edge computing, computing power networks, and large model system optimization.',
      categories: [
        ['Programs', 'National Key Research Projects', 'Selected public grants include the National High-Level Talent Special Support Program, NSFC Excellent Young Scientists Fund, NSFC key and general projects, and National Key R&D Program projects.'],
        ['Outputs', 'Papers, Books, Patents, and Prototypes', 'The team organizes research outputs around publications, monographs, invention patents, system prototypes, and member research pages.']
      ],
      topicsTitle: 'Research Topics',
      topics: [
        ['Large Model System Optimization', 'System support for efficient training, inference, scheduling, and deployment of large models.'],
        ['Computer Networks', 'Network architectures, protocols, and intelligent mechanisms for high-performance communication.'],
        ['Distributed Computing and Edge Computing', 'Distributed systems and edge infrastructures that bring computing closer to data and users.'],
        ['Computing Power Networks', 'Resource orchestration and networked computing infrastructure for collaborative computing services.']
      ]
    },
    join: {
      title: 'Join Us',
      lead: 'We welcome motivated undergraduate, master, PhD students, and postdoctoral researchers interested in computer networks, distributed systems, edge computing, computing power networks, and large model systems.',
      openTitle: 'Open Positions',
      positions: [
        'PhD students interested in computer networks, distributed systems, edge computing, and large model systems.',
        'Master students looking for hands-on systems research projects.',
        'Outstanding undergraduate students who want to join research projects early.'
      ],
      applyTitle: 'How to Apply',
      apply: 'Send your CV, transcript, and a short note about your research interests to guodk@mail.sysu.edu.cn.'
    }
  },
  zh: {
    titlePrefix: '智能网络与分布式系统实验室',
    brand: '中山大学智能网络与分布式系统实验室',
    nav: {
      home: '首页',
      team: '团队',
      publications: '论文发表',
      research: '研究方向',
      join: '加入我们'
    },
    language: 'English',
    footer: [
      '联系方式：广州市番禺区大学城中山大学计算机学院。',
      '© 2026 智能网络与分布式系统实验室。最后更新：2026 年 6 月 10 日。'
    ],
    home: {
      title: '欢迎来到智能网络与分布式系统实验室！',
      intro: [
        '我们围绕计算机网络、分布式计算系统、边缘计算、算力网和大模型系统优化开展研究。',
        '实验室依托中山大学计算机学院，由郭得科教授指导，面向网络计算与系统、分布式计算与系统、移动计算、大数据和大规模信息系统等方向开展长期研究。'
      ],
      captions: [
        '计算机网络与分布式系统研究',
        '边缘计算、算力网与系统原型',
        '围绕论文、项目和实验开展研讨',
        '从网络化系统到大模型系统优化'
      ],
      notice: '我们正在招收对系统研究有热情的博士生、博士后和硕士生加入团队',
      noticeLink: '（更多信息）',
      newsTitle: '新闻',
      news: [
        ['2026 年。', '欢迎对系统与网络研究感兴趣的博士生、硕士生、优秀本科生和博士后联系加入。'],
        ['2023 年。', '郭得科教授获 CCF 自然科学二等奖，排名第 1。'],
        ['2023 年。', '郭得科教授获中国发明协会“发明创业奖创新奖”一等奖，排名第 1。'],
        ['2023 年。', '郭得科教授获湖南省第四届湖湘智库研究优秀成果奖，排名第 1。'],
        ['2021 年。', '郭得科教授获中国电子学会自然科学二等奖，排名第 1。'],
        ['2020 年。', '郭得科教授获 CCF-IEEE CS 青年科学家奖。']
      ],
      moreNews: '... 查看全部新闻',
      researchTitle: '研究方向',
      researchItems: [
        '大模型系统优化',
        '计算机网络',
        '分布式计算系统与边缘计算',
        '算力网'
      ]
    },
    team: {
      title: '团队',
      lead: '教师、研究生和合作伙伴围绕计算机网络、分布式计算系统、边缘计算、算力网和大模型系统优化开展研究。',
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
          id: 'deke-guo',
          group: 'faculty',
          name: '郭得科 教授',
          role: '教授',
          email: 'guodk@mail.sysu.edu.cn',
          homepage: 'https://dekeguo.github.io/',
          photo: guoPhoto,
          summary: '中山大学二级教授、博士生导师，研究方向包括计算机网络、分布式计算系统、边缘计算、算力网和大模型系统优化。',
          bio: '郭得科，中山大学二级教授、博士生导师。公开简介显示，其研究方向包括计算机网络、分布式计算系统、边缘计算、算力网和大模型系统优化；发表中英文学术论文 300 余篇，其中 CCF 推荐 A/B 类论文 150 余篇、ACM/IEEE Transactions 文章 90 余篇；获得 IEEE ICNP 2019 最佳论文；以第一完成人出版学术专著 4 部，以第一发明人获得中国和美国授权发明专利 70 余项。',
          interests: ['计算机网络', '分布式计算系统', '边缘计算', '算力网', '大模型系统优化'],
          work: ['国家级领军人才、国家级青年人才', '国家自然科学基金优秀青年基金获得者', '2020 年 CCF-IEEE CS 青年科学家奖', '2023 年 CCF 自然科学二等奖，排名第 1', 'IEEE ICNP 2019 最佳论文']
        },
        {
          id: 'guocong-quan',
          group: 'faculty',
          name: '权国聪 副教授',
          role: '副教授',
          email: 'quangc@mail.sysu.edu.cn',
          homepage: 'https://guocongquan.github.io/',
          photo: quanPhoto,
          summary: '研究方向聚焦高效分布式 AI 系统与算法，包括大模型推理、资源管理和在线学习。',
          bio: '权国聪副教授是中山大学计算机学院副教授、博士生导师，研究方向聚焦高效分布式 AI 系统与算法，包括高效大模型推理、大规模分布式资源管理与优化、强化学习和在线学习。',
          interests: ['高效大模型推理', '分布式资源管理', '强化学习', '在线学习'],
          work: ['IEEE INFOCOM 2019 最佳论文奖', 'IEEE/ACM ToN 边缘缓存相关论文', '高效分布式 AI 系统与算法研究']
        },
        {
          id: 'hao-lan',
          group: 'postdoc',
          name: 'XXX',
          role: '博士后',
          email: 'haolan@bluesys.example',
          photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=480&q=80',
          summary: '2024 年加入。',
          bio: 'XXX 博士研究分布式服务的容错和快速恢复机制。',
          interests: ['容错', '分布式系统', '恢复协议'],
          work: ['面向复制存储的低延迟恢复机制']
        },
        {
          id: 'qing-zhao',
          group: 'postdoc',
          name: 'XXX',
          role: '博士后',
          email: 'qingzhao@bluesys.example',
          photo: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=480&q=80',
          summary: '2025 年加入。',
          bio: 'XXX 博士关注大模型训练与推理中的系统优化技术。',
          interests: ['大模型系统', '推理优化', '资源调度'],
          work: ['面向大模型推理的高效运行时支持']
        },
        {
          id: 'hao-li',
          group: 'phd',
          name: 'XXX',
          role: '博士生',
          email: 'haoli@bluesys.example',
          photo: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=480&q=80',
          summary: '博士生，2022 年入学。',
          bio: 'XXX 研究面向云原生服务的存储引擎，并开发支持高吞吐事务负载的系统原型。',
          interests: ['存储引擎', '云原生系统', '事务处理'],
          work: ['面向云原生服务的高可靠分布式系统']
        },
        {
          id: 'runhua-zhang',
          group: 'phd',
          name: 'XXX',
          role: '博士生',
          email: 'runhuazhang@bluesys.example',
          photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=480&q=80',
          summary: '博士生，2023 年入学。',
          bio: 'XXX 研究算力网中的资源编排与调度。',
          interests: ['算力网', '资源编排', '调度'],
          work: ['面向算力网的资源调度机制']
        },
        {
          id: 'junru-liu',
          group: 'phd',
          name: 'XXX',
          role: '博士生',
          email: 'junruliu@bluesys.example',
          photo: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=480&q=80',
          summary: '博士生，2024 年入学。',
          bio: 'XXX 探索可编程网络对边缘服务和服务间通信的支持。',
          interests: ['可编程交换机', '边缘服务', '网络系统'],
          work: ['面向边缘服务的可编程网络支持']
        },
        {
          id: 'wenhao-xu',
          group: 'master',
          name: 'XXX',
          role: '硕士生',
          email: 'wenhaoxu@bluesys.example',
          photo: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=480&q=80',
          summary: '硕士生，2024 年入学。',
          bio: 'XXX 构建面向边缘计算系统的测量和基准测试工具。',
          interests: ['基准测试', '可观测性', '边缘计算'],
          work: ['面向边缘服务的 Trace 驱动基准测试']
        },
        {
          id: 'haodi-sun',
          group: 'master',
          name: 'XXX',
          role: '硕士生',
          email: 'haodisun@bluesys.example',
          photo: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&w=480&q=80',
          summary: '硕士生，2025 年入学。',
          bio: 'XXX 研究面向硬件加速数据系统的索引和缓存技术。',
          interests: ['索引', '缓存', '硬件加速'],
          work: ['面向硬件加速数据系统的实用索引技术']
        },
        {
          id: 'yue-chen',
          group: 'master',
          name: 'XXX',
          role: '硕士生',
          email: 'yuechen@bluesys.example',
          photo: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=480&q=80',
          summary: '硕士生，2025 年入学。',
          bio: 'XXX 研究分布式服务的可靠性测试和故障注入。',
          interests: ['故障注入', '测试', '可靠系统'],
          work: ['面向云服务的实用故障注入']
        },
        {
          id: 'guangyan-zhang',
          group: 'alumni',
          name: 'XXX',
          role: '毕业生，博士 2021',
          email: 'guangyan@alumni.example',
          photo: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?auto=format&fit=crop&w=480&q=80',
          summary: '毕业生占位信息，后续更新。',
          bio: 'XXX 博士曾研究网络化分布式系统，目前继续从事学术基础设施方向研究。',
          interests: ['计算机网络', '分布式系统', '系统评测'],
          work: ['分布式网络中的可靠服务协同']
        },
        {
          id: 'mingqiang-li',
          group: 'alumni',
          name: 'XXX',
          role: '毕业生，博士 2022',
          email: 'mingqiang@alumni.example',
          photo: 'https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?auto=format&fit=crop&w=480&q=80',
          summary: '2022 年毕业，华为。',
          bio: 'XXX 博士曾研究大规模分布式系统，毕业后进入产业界。',
          interests: ['分布式系统', '云平台', '性能优化'],
          work: ['面向云平台的可扩展协同机制']
        },
        {
          id: 'youmin-chen',
          group: 'alumni',
          name: 'XXX',
          role: '毕业生，博士 2023',
          email: 'youmin@alumni.example',
          photo: 'https://images.unsplash.com/photo-1573497019418-b400bb3ab074?auto=format&fit=crop&w=480&q=80',
          summary: '2023 年毕业，上海交通大学。',
          bio: 'XXX 博士曾关注生产系统中的存储可靠性和故障诊断。',
          interests: ['可靠性', '故障诊断', '生产系统'],
          work: ['大规模存储故障诊断']
        }
      ],
      alumniRows: [
        ['XXX', '博士', '2026', '阿里巴巴'],
        ['XXX', '博士', '2026', '阿里巴巴'],
        ['XXX', '博士', '2025', '腾讯'],
        ['XXX', '博士后', '2024', '高校任教'],
        ['XXX', '博士', '2024', '华为'],
        ['XXX', '硕士', '2024', '继续攻读博士'],
        ['XXX', '博士后', '2023', '待更新'],
        ['XXX', '硕士', '2022', '华为']
      ]
    },
    publications: {
      title: '论文发表',
      lead: '这里选取郭得科教授及合作者在计算机网络、分布式系统、边缘计算与数据密集型系统方向的部分代表论文。',
      years: [
        {
          year: '2023',
          papers: [
            {
              title: 'When Deduplication Meets Migration: An Efficient and Adaptive Strategy in Distributed Storage Systems',
              authors: 'Geyao Cheng, Lailong Luo, Junxu Xia, Deke Guo, Yuchen Sun',
              venue: 'IEEE Transactions on Parallel and Distributed Systems (TPDS), 2023',
              links: [{ label: 'PDF', url: 'https://dekeguo.github.io/Jingwei-TPDS.pdf' }]
            }
          ]
        },
        {
          year: '2022',
          papers: [
            {
              title: 'COIN: An Efficient Indexing Mechanism for Unstructured Data Sharing Systems',
              authors: 'Junjie Xie, Chen Qian, Deke Guo, Minmei Wang, Ge Wang, Honghui Chen',
              venue: 'IEEE/ACM Transactions on Networking (TON), 2022',
              links: [{ label: 'PDF', url: 'https://dekeguo.github.io/ton_coin.pdf' }]
            }
          ]
        },
        {
          year: '2021',
          papers: [
            {
              title: 'HDS: A Fast Hybrid Data Location Service for Hierarchical Mobile Edge Computing',
              authors: 'Deke Guo, Junjie Xie, Xiaofeng Shi, Haofan Cai, Chen Qian, Honghui Chen',
              venue: 'IEEE/ACM Transactions on Networking (TON), 2021',
              links: [{ label: 'PDF', url: 'https://dekeguo.github.io/TON_HDSS.pdf' }]
            },
            {
              title: 'MCFsyn: A Multi-party Set Reconciliation Protocol with the Marked Cuckoo Filter',
              authors: 'Lailong Luo, Deke Guo, Yawei Zhao, Ori Rottenstreich, Richard T. B. Ma, Xueshan Luo',
              venue: 'IEEE Transactions on Parallel and Distributed Systems (TPDS), 2021',
              links: [{ label: 'PDF', url: 'https://dekeguo.github.io/MCFsyn.pdf' }]
            },
            {
              title: 'A Capacity-elastic Cuckoo Filter Design for Dynamic Set Representation',
              authors: 'Lailong Luo, Deke Guo, Ori Rottenstreich, Richard T. B. Ma, Xueshan Luo, Bangbang Ren',
              venue: 'IEEE Transactions on Network and Service Management (TNSM), 2021',
              links: [{ label: 'PDF', url: 'https://dekeguo.github.io/tnsm_lailong.pdf' }]
            }
          ]
        },
        {
          year: '2019',
          papers: [
            {
              title: 'Validation of Distributed SDN Control Plane Under Uncertain Failures',
              authors: 'Junjie Xie, Deke Guo, Chen Qian',
              venue: 'IEEE/ACM Transactions on Networking (TON), 2019',
              links: [{ label: 'PDF', url: 'https://dekeguo.github.io/Ton_RobustValidation.pdf' }]
            },
            {
              title: 'Embedding Service Function Tree with Minimum Cost for NFV Enabled Multicast',
              authors: 'Bangbang Ren, Deke Guo, Yulong Shen, Guoming Tang, Xu Lin',
              venue: 'IEEE Journal on Selected Areas in Communications (JSAC), 2019',
              links: [{ label: 'PDF', url: 'https://dekeguo.github.io/JSAC_NFV.pdf' }]
            }
          ]
        }
      ]
    },
    research: {
      title: '研究方向',
      lead: '我们面向未来计算基础设施开展研究，重点关注计算机网络、分布式计算系统、边缘计算、算力网和大模型系统优化。',
      categories: [
        ['科研项目', '国家重点科研项目', '公开项目包括国家高层次人才特殊支持计划、国家自然科学基金优青/重点/面上项目、国家重点研发计划项目等。'],
        ['成果沉淀', '论文、专著、专利与系统原型', '围绕论文发表、学术专著、授权发明专利、系统原型和成员个人主页整理研究成果。']
      ],
      topicsTitle: '研究主题',
      topics: [
        ['大模型系统优化', '研究大模型训练、推理、调度和部署中的系统支撑技术。'],
        ['计算机网络', '研究高性能通信所需的网络架构、协议和智能机制。'],
        ['分布式计算系统与边缘计算', '研究靠近数据和用户的分布式系统与边缘基础设施。'],
        ['算力网', '研究面向协同计算服务的资源编排与网络化计算基础设施。']
      ]
    },
    join: {
      title: '加入我们',
      lead: '欢迎对计算机网络、分布式系统、边缘计算、算力网和大模型系统感兴趣的本科生、硕士生、博士生和博士后加入。',
      openTitle: '开放名额',
      positions: [
        '对计算机网络、分布式系统、边缘计算和大模型系统感兴趣的博士生。',
        '希望参与系统研究项目的硕士生。',
        '欢迎优秀本科生提前参与科研训练。'
      ],
      applyTitle: '申请方式',
      apply: '请将简历、成绩单和一段简短的研究兴趣说明发送至 guodk@mail.sysu.edu.cn。'
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

function renderPublications(publications) {
  const list = document.querySelector('#publications-view .publication-list');
  if (!list) {
    return;
  }

  list.innerHTML = publications.years.map(({ year, papers }) => `
    <section class="paper-year">
      <h2>${year}</h2>
      ${papers.map((paper) => `
        <article class="paper">
          <h3>${paper.title}</h3>
          <p class="paper-authors">${paper.authors}</p>
          <p class="paper-venue">${paper.venue}</p>
          <div class="paper-links">
            ${paper.links.map((link) => `<a href="${link.url}" target="_blank" rel="noopener">${link.label}</a>`).join('')}
          </div>
        </article>
      `).join('')}
    </section>
  `).join('');
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
    const hasHomepage = Boolean(person.homepage);
    const avatar = isFaculty ? person.photo : avatarPlaceholder;
    const card = document.createElement(hasHomepage ? 'a' : 'article');
    card.className = isFaculty ? 'member' : 'person-card';
    card.tabIndex = 0;
    card.dataset.profile = person.id;
    if (hasHomepage) {
      card.href = person.homepage;
      card.setAttribute('aria-label', `${person.name} homepage`);
    }
    card.innerHTML = isFaculty
      ? `
        <img src="${avatar}" alt="${person.name}">
        <div>
          <h3>${person.name}</h3>
          <p>${person.role}</p>
          <p>${person.summary}</p>
          ${person.homepage ? `<span class="profile-link">${currentLanguage === 'zh' ? '进入个人主页' : 'Open Homepage'}</span>` : ''}
        </div>
      `
      : `
        <img src="${avatar}" alt="${person.name}">
        <h3>${person.name}</h3>
        <p>${person.summary}</p>
      `;

    if (!hasHomepage) {
      card.addEventListener('click', () => openProfile(person));
      card.addEventListener('keydown', (event) => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          openProfile(person);
        }
      });
    }

    groups[person.group].appendChild(card);
  });
}

function openProfile(person) {
  if (person.homepage) {
    window.location.href = person.homepage;
    return;
  }

  window.location.href = `people/${encodeURIComponent(person.id)}/?lang=${currentLanguage}`;
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
  renderPublications(copy.publications);

  setText('#research-view h1', copy.research.title);
  setText('#research-view .page-lead', copy.research.lead);
  setText('#research-view .section-heading', copy.research.topicsTitle);
  document.querySelectorAll('#research-view .research-category').forEach((category, index) => {
    const [label, title, text] = copy.research.categories[index];
    category.querySelector('span').textContent = label;
    category.querySelector('h2').textContent = title;
    category.querySelector('p').textContent = text;
  });
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
