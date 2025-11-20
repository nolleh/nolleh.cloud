# 로보 어드바이저 트레이딩 서비스
주식 트레이딩에 관한한 수익성의 지표인 RATB 를 통과한 로보어드바이저 트레이딩 서비스 개발 

기존에 운영되고 있던 서비스가 batch 기반으로 app 외부에서 자유롭게 발생하는 HTS 의 이벤트를 정상적으로 핸들링하지 못해 다양한 에러가 발생하는 상황이었으며,  이를 해결하기 위해 기존 사내인력중 해결할 수 있는 인력으로 내부 Scout 된 케이스(As `PL`). Heybit -> dndn

새로 Architecting 한 프로젝트의 주요 Service는 Feeder, Centraler, Rebalencer, Trader, Exchanger 로, 각각 명칭에 해당하는 역할을 수행 (Single Responsibility)하도록 Architecting 및 Implementation. 여기서 최초에는 Feeder 를 제외한 나머지 서비스들은 monolithic 로 빠르게 구현하였으며, Single Responsiblitly 를 위한 MSA 로의 수정은 이미 MSA 를 고려한 시스템이었으므로 - 단순 코드 이관 및 이미 잘 구축된 DevOps 의 서비스 추가건 이었으므로(Uprise 에서 기반 지식에 대한 인정으로 DevOps 의 권한이 어느정도 있었으므로), 각 서비스당 `하루가 넘지 않는 수준`에서 서비스 분리. (AI 의 도움이 있지는 않았던 시기)


## 주요 포인트
- 기존에 배치 기반으로 유저의 HTS 의 이벤트에 대해 처리하지 못하는 내용에 대한 대응 
