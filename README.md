## 📌 프로젝트 설명 <!-- 어떤 걸 만들었는지 대략적으로 설명해주세요 -->
Vue.js와 영화 검색 API를 활용해 영화 검색 SPA을 구현하였습니다.


[![Netlify Status](https://api.netlify.com/api/v1/badges/d8e0cd02-3469-47bf-ad44-cfeb4dc04f88/deploy-status)](https://app.netlify.com/sites/cocky-lumiere-227d70/deploys)
[🎥배포 링크](https://cocky-lumiere-227d70.netlify.app/)


## 👩‍💻 요구 사항과 구현 내용 <!-- 기능을 Commit 별로 잘개 쪼개고, Commit 별로 설명해주세요 -->
### 기본 요구사항

- [x] 검색어를 입력해 영화를 검색할 수 있습니다.
- [x] 검색된 결과를 통해 영화의 상세 정보를 볼 수 있습니다.
- [x] 클라이언트에서 API Key가 노출되지 않습니다.
- [x] 실제 서비스로 배포하고 접근 가능한 링크가 추가되었습니다.


### 선택 요구사항

- [x] API 요청(Request)에 대한 로딩 애니메이션을 추가하였습니다.
- [x] 영화 상세 검색으로 출력할 영화 포스터를 더 높은 해상도 사용하였습니다.
  - [x] 영화 포스터 주소에 포함된 `SX300`를 `SX700`과 같이 더 큰 숫자로 수정해 요청하였습니다.
  - [x] 실시간으로 이미지의 크기를 다르게 요청하는 것이 어떤 원리로 가능한지 조사하였습니다.
- [ ] 요청 주소에 HTTP가 아닌 HTTPS 프로토콜을 사용해야 하는 이유를 조사하였습니다.
- [x] Bootstrap 등의 UI 프레임워크를 구성해 프로젝트를 최대한 예쁘게(?) 구성하였습니다.
- [ ] Open Graph 혹은 Twitter Cards로 Meta 정보를 제공하였습니다.
- [ ] NuxtJS를 활용해 Server Side Rendering(SSR)과 검색 엔진 최적화(SEO)를 도입하였습니다.  
     (만약 SSR에 익숙치 않다면, SPA 프로젝트를 먼저 만들어 보고 도전!)
