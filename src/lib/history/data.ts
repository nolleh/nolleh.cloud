export interface CareerProject {
  id: string;
  title: string;
  period: string;
  summary: string;
  highlights: string[];
  stack: string[];
}

export interface CareerStage {
  id: string;
  company: string;
  role: string;
  period: string;
  location?: string;
  summary: string;
  badges: string[];
  projects: CareerProject[];
}

type SupportedLocale = 'ko' | 'en';

const querypieKo: CareerStage = {
  id: 'querypie',
  company: 'QueryPie',
  role: 'PL / Backend / Platform Engineer',
  period: '2025.02 ~ 현재',
  location: 'Seoul, Korea',
  summary:
    'AI 플랫폼 개발 진행간 필요한 기능들을 개발하였으며, RAG 지식 서비스, MCP Proxy, DB 접근제어 엔진을 단기간에 프로덕션 수준으로 끌어올렸습니다.',
  badges: ['AI Platform', 'Security', 'Rapid Delivery'],
  projects: [
    {
      id: 'rag',
      title: 'QueryPie AI - RAG / Knowledge Platform',
      period: '2025.07 ~ 현재',
      summary: 'PL과 IC를 겸하며 1달 3주 만에 지식 기반 RAG 서비스를 첫 배포까지 끌어올린 프로젝트.',
      highlights: [
        '문서 업로드 - 파싱 - Chunking - 임베딩 파이프라인을 설계하고 전 구간을 직접 구현했습니다.',
        'Chunking 기반 스트리밍 인덱싱을 2일만에 도입하여 일반 텍스트는 90%, PDF는 40% 메모리를 절감하고 1Gi 리소스로 10MB 파일을 처리했습니다.',
        'CBC 암호화를 통해 고객 지식을 저장 전 구간에서 암호화하고, py-spy/memray + ephemeral container로 실시간 프로파일링을 진행했습니다.',
        'DeepEval 지표로 리트리버 품질을 관리해 100 QA 중 80% 정답률을 달성했습니다.'
      ],
      stack: ['Python', 'FastAPI', 'Celery', 'Kotlin', 'Spring', 'PostgreSQL', 'Kubernetes']
    },
    {
      id: 'mcp',
      title: 'MCP Proxy - AI Agent - McpRegistry',
      period: '2025.04 ~ 2025.06',
      summary: 'MCP 프로토콜을 해석하는 Proxy와 사내 업무용 에이전트/레지스트리를 선행 개발하고 특허를 진행 중입니다.',
      highlights: [
        '툴 접근 제어와 감사 로그를 위한 MCP Proxy를 4일만에 완성해 전사 타운홀에서 시연했습니다.',
        'ADK 기반 ErrorSherlock와 BriefButler 에이전트로 멀티 로그 분석 및 미팅 준비 자동화를 구현했습니다.',
        'Registry 서버/어드민/CLI를 만들고 IPC로 MCP 프로세스를 제어, GitHub URL만 넣으면 LLM이 실행 스크립트를 제안하도록 구성했습니다.'
      ],
      stack: ['TypeScript', 'Node.js', 'Python', 'ADK', 'Svelte']
    },
    {
      id: 'dac',
      title: 'QueryPie DAC - Database Access Control',
      period: '2025.02 ~ 2025.03',
      summary: 'DB Proxy/Engine 레이어를 유지보수하며 새로운 프로토콜을 확장했습니다.',
      highlights: [
        'Proxy와 Engine 전 구간에 RESP3(redis) 프로토콜을 추가했습니다.',
        'Oracle 프로토콜 리버스 엔지니어링을 진행해 향후 지원 범위를 정의했습니다.',
        'QueryPie 사용자 권한 검증과 마스킹 로직을 점검하며 운용 품질을 높였습니다.'
      ],
      stack: ['C#', '.NET', 'Redis', 'Protocol Engineering']
    }
  ]
};

const querypieEn: CareerStage = {
  ...querypieKo,
  period: 'Feb 2025 – Present',
  summary:
    'Lead backend / platform engineer for QueryPie AI, delivering RAG knowledge services, MCP proxy, and DB access control with the same visual theme as the project hub.',
  projects: [
    {
      ...querypieKo.projects[0],
      period: 'Jul 2025 – Present',
      summary:
        'Acted as both planner and IC to ship the first RAG-based knowledge service release in one month three weeks.',
      highlights: [
        'Designed and implemented the entire upload → parsing → chunking → embedding pipeline.',
        'Delivered streaming (chunking) indexing in two days, cutting memory 90% for text and 40% for PDFs so a 1Gi pod can process 10MB files.',
        'Encrypted every customer document with CBC and profiled pods via py-spy, memray, and ephemeral containers.',
        'Guarded retrieval quality with DeepEval and achieved 80% pass on 100 QA pairs.'
      ]
    },
    {
      ...querypieKo.projects[1],
      period: 'Apr 2025 – Jun 2025',
      summary:
        'Built patent-pending MCP proxy plus ADK-based agents and a registry that curates MCP servers and automates installs.'
    },
    {
      ...querypieKo.projects[2],
      period: 'Feb 2025 – Mar 2025',
      summary: 'Maintained the QueryPie DAC proxy/engine and expanded multi-vendor protocol coverage.'
    }
  ]
};

const upriseKo: CareerStage = {
  id: 'uprise',
  company: 'Uprise',
  role: 'PL / Backend / Trading Platform Engineer',
  period: '2021.11 ~ 2025.01',
  location: 'Seoul, Korea',
  summary:
    'B2C 투자/보상 서비스를 전담하며 로보어드바이저, 리워드, 핀테크 API를 Kotlin과 TypeScript 스택으로 빠르게 전달했습니다.',
  badges: ['Fintech', 'Trading', 'Full-stack'],
  projects: [
    {
      id: 'dndn',
      title: 'Robo Advisor - dndn (든든)',
      period: '2023.11 ~ 진행',
      summary: '기존 트레이딩 시스템을 재설계하고 공통 모듈을 직접 구현해 신규 상품을 출시했습니다.',
      highlights: [
        '기존 시스템의 문제를 진단하고 새 아키텍처를 제안, 개발팀과 조율했습니다.',
        '포트폴리오 리밸런싱과 HTS 이벤트를 처리하는 공통 모듈을 설계하고 구현했습니다.',
        '실서비스 상품으로 출시해 실제 고객 자산을 운용했습니다.'
      ],
      stack: ['Kotlin', 'Spring', 'Kafka', 'MSA', 'R2DBC', 'H2']
    },
    {
      id: 'bitbunny',
      title: 'Reward Service - Bit Bunny',
      period: '2023 ~ 2023.11',
      summary: '첫 FE 도전이었던 프로젝트로, 단일 레포에서 FE+BE를 5일 만에 가동시켰습니다.',
      highlights: [
        'NestJS와 Svelte를 한 저장소에서 운영하며 인증/멤버십/비즈니스 로직을 모두 담당했습니다.',
        'TDD로 생산성을 유지하며 Cloudflare Pages와 Supabase로 초기 셋업을 빠르게 끝냈습니다.'
      ],
      stack: ['TypeScript', 'NestJS', 'Svelte', 'Supabase', 'EKS', 'Helm', 'TDD', 'Cloudflare Pages']
    },
    {
      id: 'heybit',
      title: 'Investment API - Heybit',
      period: '2021.11 ~ 2023',
      summary: '단독 백엔드로 예치, 출금, 락업, 리워드 API를 개발하고 인프라를 K8S로 이전했습니다.',
      highlights: [
        '주차별 이자 지급 패스북 서비스를 3주 만에 개발했습니다.',
        '락업 상품을 6일 만에, 리워드 PERRY 기능을 11일 만에 구축해 NRU를 25배 끌어올렸습니다.',
        '애플리케이션 레벨에서 최초로 K8S 클러스터로 이전하며 DevOps 환경을 마련했습니다.'
      ],
      stack: ['TypeScript', 'NestJS', 'MSA', 'EKS', 'Helm', 'Kubernetes', 'TDD']
    }
  ]
};

const upriseEn: CareerStage = {
  ...upriseKo,
  period: 'Nov 2021 – Jan 2025',
  summary:
    'Owned fintech backends for robo advisor, reward, and investment APIs, jumping between Kotlin trading services and TypeScript microservices.',
  projects: [
    {
      ...upriseKo.projects[0],
      period: 'Nov 2023 – Present',
      summary:
        'Rebuilt the robo advisor trading core, aligned the new architecture with the team, and shipped shared modules that react to every HTS event.'
    },
    {
      ...upriseKo.projects[1],
      period: '2023 – Nov 2023',
      summary:
        'First full-stack (FE+BE) project; bootstrapped a mono-repo Svelte + NestJS service and shipped a working frame in five days.'
    },
    {
      ...upriseKo.projects[2],
      period: 'Nov 2021 – 2023',
      summary:
        'Solo backend engineer for Heybit investment APIs, covering weekly interest products, lock-up services, and reward contents while migrating to Kubernetes.'
    }
  ]
};

const neowizKo: CareerStage = {
  id: 'neowiz',
  company: 'Neowiz',
  role: 'PL / Realtime Game / Platform Engineer',
  period: '2011.01 ~ 2021.10',
  location: 'Seongnam, Korea',
  summary:
    '10년간 실시간 게임 서버, 공통 백엔드, 블록체인, RPC 프레임워크까지 폭넓은 플랫폼을 설계하고 직접 구현했습니다.',
  badges: ['Realtime', 'Game Server', 'Platform'],
  projects: [
    {
      id: 'bdp',
      title: 'Brown Dust Puzzle - Common Server',
      period: '2021',
      summary: '게임 공통 서버를 구축해 재사용 가능한 HTTP/웹소켓 콘텐츠 프레임을 제공했습니다.',
      highlights: [
        '서버 코드를 분석해 자동으로 클라이언트 SDK를 생성하는 Roslyn 파이프라인을 만들었습니다.',
        'Terraform과 AWS ECS/Fargate로 인프라를 IaC 기반으로 운영했습니다.'
      ],
      stack: ['ASP.NET', 'C#', 'AWS', 'Terraform']
    },
    {
      id: 'stress',
      title: 'Integrated / Stress Test Platform',
      period: '2020 ~ 2021',
      summary: '스튜디오 공동 PL로 AWS 전환 프로젝트를 주도하며 릴리즈 전 통합 부하 테스트를 자동화했습니다.',
      highlights: [
        '200명 규모 조직의 일정/품질을 관리하며 Pmang Matgo/Sutda/Poker/Blackjack을 검증했습니다.',
        '재사용 가능한 게임 봇 플랫폼과 시나리오를 설계해 다수 프로젝트에 적용했습니다.'
      ],
      stack: ['C++', 'Java (JMeter)', 'C++/CLI', 'C#', 'Distributed Test']
    },
    {
      id: 'blockchain',
      title: 'Blockchain dApp Platform',
      period: '2019',
      summary: 'EOS 스마트컨트랙트와 Node.js/Golang 백엔드를 동시에 개발한 블록체인 프로젝트.',
      highlights: [
        'MSA 아키텍처로 dApp 백엔드를 구성하고, GCP K8S/istio/jenkins/spinnaker로 DevOps를 구성했습니다.'
      ],
      stack: ['C++', 'Node.js', 'TypeScript', 'Golang', 'GCP', 'Kubernetes']
    },
    {
      id: 'rpc',
      title: 'C# RPC Framework (Spring Inspired)',
      period: '2018',
      summary: 'Spring 개발자가 바로 사용할 수 있는 웹소켓 기반 RPC 프레임워크를 설계했습니다.',
      highlights: [
        'DI, Service, Controller, Feign Client, Spring Cloud Stream, Eureka Client까지 호환 API를 제공했습니다.',
        '클라이언트 SDK를 함께 배포해 룸 기반 게임 서버와 연동했습니다.'
      ],
      stack: ['C#', '.NET', 'WebSocket', 'RPC']
    },
    {
      id: 'blackjack',
      title: 'Global Blackjack Server',
      period: '2017 ~ 2018',
      summary: 'C/C++ 기반 멀티 스레드 룸 서버와 Unity SDK를 제작했습니다.',
      highlights: ['RabbitMQ 기반 분산 처리와 C# 클라이언트 SDK로 글로벌 론칭을 지원했습니다.'],
      stack: ['C++', 'C#', 'RabbitMQ', 'Unity']
    },
    {
      id: 'matgo',
      title: 'Pmang Matgo - Sutda - Poker Platform',
      period: '2014 ~ 2018',
      summary: '메인 프로그래머로 룸 기반 실시간 서버를 운영하며 코드리뷰 문화를 이끌었습니다.',
      highlights: ['C/C++ 멀티 스레드 소켓 서버를 고도화하고 안정적인 라이브 서비스를 유지했습니다.'],
      stack: ['C++', 'Boost.Asio', 'Multithreading']
    },
    {
      id: 'membership',
      title: 'Membership Platform - Pmang Plus',
      period: '2012 ~ 2013',
      summary: 'Android/Unity 통합 멤버십 SDK를 제작해 모바일 게임 온보딩을 단일화했습니다.',
      highlights: ['클라이언트/서버 양쪽 인터페이스와 인증 흐름을 정의했습니다.'],
      stack: ['Android', 'Unity', 'SDK']
    },
    {
      id: 'bugs',
      title: 'Bugs Music Android Apps',
      period: '2011',
      summary: '뮤직 플레이어 앱(Bugs Muzaic/Equalizer)을 개발하며 모바일 역량을 쌓았습니다.',
      highlights: ['Android 오디오 파이프라인과 UI를 직접 구현했습니다.'],
      stack: ['Android', 'Media', 'UI']
    }
  ]
};

const neowizEn: CareerStage = {
  ...neowizKo,
  period: 'Jan 2011 – Oct 2021',
  summary:
    'Spent a decade architecting realtime game servers, reusable backend platforms, blockchain services, and RPC frameworks.',
  projects: [
    {
      ...neowizKo.projects[0],
      summary:
        'Built reusable HTTP/WebSocket content frames and auto-generated Unity SDKs through a Roslyn-based pipeline.'
    },
    {
      ...neowizKo.projects[1],
      summary:
        'Co-led the studio wide AWS migration and automated release-readiness tests with reusable game-bot modules.'
    },
    {
      ...neowizKo.projects[2],
      summary:
        'Implemented EOS smart contracts plus Node.js/Golang backends under an MSA architecture with GCP K8S DevOps.'
    },
    {
      ...neowizKo.projects[3],
      summary:
        'Delivered a Spring-like WebSocket RPC framework with DI/service/controller/feign semantics and shipped matching client SDKs.'
    },
    {
      ...neowizKo.projects[4],
      summary:
        'Produced a C/C++ multithreaded room server for Blackjack and a Unity SDK using RabbitMQ for distributed coordination.'
    },
    {
      ...neowizKo.projects[5],
      summary:
        'Acted as the main programmer for Matgo/Sutda/Poker realtime servers, driving code reviews and service stability.'
    },
    {
      ...neowizKo.projects[6],
      summary:
        'Created the Android/Unity membership SDK (Pmang Plus) that unified login and entitlement across titles.'
    },
    {
      ...neowizKo.projects[7],
      summary: 'Built the Bugs Muzaic/Equalizer Android music apps end to end.'
    }
  ]
};

const careerTimeline: Record<SupportedLocale, CareerStage[]> = {
  ko: [querypieKo, upriseKo, neowizKo],
  en: [querypieEn, upriseEn, neowizEn]
};

export const HISTORY_FALLBACK_LOCALE: SupportedLocale = 'en';

export function getCareerTimeline(locale: string): CareerStage[] {
  if (locale in careerTimeline) {
    return careerTimeline[locale as SupportedLocale];
  }
  return careerTimeline[HISTORY_FALLBACK_LOCALE];
}

