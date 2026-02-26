# CHAKO LAB° - Premium Tumbler Website

차코랩 프리미엄 텀블러 제품을 소개하는 인터랙티브 웹사이트입니다.

## 🎯 프로젝트 목표

차코랩 텀블러의 독창적인 디자인과 프리미엄 소재를 스크롤 기반 3D 애니메이션과 타이포그래피 효과를 통해 효과적으로 소개하는 제품 웹사이트를 제작합니다.

## ✨ 주요 기능

### 현재 구현된 기능

1. **스크롤 기반 배경 확대 애니메이션**
   - 섹션 1-4에 걸쳐 텀블러 배경 이미지가 1x → 2x로 확대
   - 스크롤에 따라 이미지가 점점 선명해지는 효과 (blur 2px → 0px, opacity 0.3 → 0.8)
   - **배경 이미지가 페이지 끝까지 유지** (섹션 5, Contact, Footer에서도 계속 보임)

2. **차코랩 브랜드 아이덴티티**
   - 네비게이션 좌측 상단에 차코랩 로고 배치 (7px)
   - 히어로 섹션 중앙에 대형 로고 배치 (50px)
   - 브랜드 슬로건: "Colorful, Healthy, Attractive, Keep, Objective & LAB"
     - 데스크톱: 19px (기존 24px에서 20% 축소)
     - 태블릿: 14px (기존 18px에서 20% 축소)
     - 모바일: 7px (기존 14px에서 50% 축소)
   - 모든 화면 크기에서 반응형 조정

3. **모바일 햄버거 메뉴**
   - 768px 이하 화면에서 햄버거 메뉴로 전환
   - 버튼 클릭 시 우측에서 슬라이드 인
   - X 아이콘으로 변환되는 애니메이션

4. **4개 콘텐츠 섹션 (정면 진입 애니메이션)**
   - **섹션 2** (좌측 정렬): "316 스테인리스 사용" - 정면에서 확대되며 진입
   - **섹션 3** (우측 정렬): "진공텀블러" - 정면에서 확대되며 진입
   - **섹션 4** (중앙 정렬): "미끄럼방지" - 정면에서 확대되며 진입
   - 모두 perspective 3D 효과 적용 (translateZ + scale)

5. **프리미엄 메시지 섹션 (섹션 5)**
   - **영문**: "We only seek a premium."
     - 데스크톱: 42px (기존 60px에서 30% 축소)
     - 태블릿: 28px (기존 40px에서 30% 축소)
     - 모바일: 5px (기존 20px에서 75% 축소)
     - **모바일 줄바꿈**: "We only seek" / "a premium." (2줄)
   - **한글**: "우리는 프리미엄만을 추구합니다."
     - 데스크톱: 29px (기존 42px에서 30% 축소)
     - 태블릿: 20px (기존 28px에서 29% 축소)
     - 모바일: 7px (기존 14px에서 50% 축소)
   - **강조 효과**:
     - 영문: font-weight 700 (bold), 검정색 (#1a1a1a), 텍스트 섀도우
     - 한글: font-weight 600 (semi-bold), 코랄 색상 (#FF6B6B), 텍스트 섀도우
   - 좌측에서 우측으로 타이핑 효과 (typewriter animation)
   - 영문 타이핑 완료 후 한글 페이드 인 (2.5초 딜레이)
   - 중앙 정렬, 고급스러운 타이포그래피
   - **모바일 최적화**: 명확한 줄바꿈으로 가독성 향상
   - **스크롤 스냅**: 중앙 고정으로 문구 강조

6. **반응형 디자인**
   - 데스크톱 / 태블릿 / 모바일 완벽 대응
   - 모바일에서 섹션 3 우측 정렬 유지
   - 문구 크기 자동 조정
   - 긴 슬로건 텍스트 모바일 최적화

7. **스크롤 스냅 효과 (전체 페이지)**
   - **섹션 크기**: 
     - 섹션 1-5 (Hero, 316 Steel, Vacuum, Anti-Slip, Premium): 100vh 높이
     - 섹션 6-7 (Contact, Footer): 70vh 높이 (컴팩트한 마무리)
   - **즉시 전환**: scroll-snap-type mandatory 모드
   - **스크롤 1번으로 섹션 전환**: 각 섹션이 화면에 딱 맞게 고정
   - 섹션 시작점에 자동 정렬 (scroll-snap-align: start)
   - **섹션 5**: scroll-snap-stop normal (Contact으로 부드러운 전환)
   - **전체 흐름**: Hero → 316 Steel → Vacuum → Anti-Slip → Premium → Contact → Footer
   - PC와 모바일 모두 풀스크린 프레젠테이션 경험

8. **패럴랙스 효과**
   - 히어로 콘텐츠 스크롤 시 페이드 아웃
   - 부드러운 스크롤 인디케이터

9. **모바일 애니메이션 완전 지원**
   - 배경 이미지 줌 애니메이션 (1x → 2x) - PC와 동일
   - 섹션 메시지 정면 진입 애니메이션 (perspective 3D) - PC와 동일
   - 타이핑 효과 (섹션 5 프리미엄 메시지) - PC와 동일
   - 스크롤 스냅 (mandatory 모드) - PC와 동일
   - Intersection Observer 기반 트리거
   - 모든 섹션 애니메이션이 모바일에서도 완벽하게 작동

## 📁 프로젝트 구조

```
.
├── index.html          # 메인 HTML 파일
├── css/
│   └── style.css      # 전체 스타일시트 (3D 애니메이션, 타이핑 효과)
├── js/
│   └── main.js        # 스크롤 애니메이션 및 인터랙션 로직
├── images/            # 이미지 파일 (로컬 저장)
│   ├── logo.png       # 차코랩 로고 (24.4 KB)
│   └── tumbler-background.png  # 배경 이미지 (204.7 KB)
├── .github/
│   └── workflows/
│       └── deploy.yml # GitHub Actions 자동 배포 설정
├── .vscode/           # VS Code 설정 (자동 푸시, 작업 등)
├── push.sh            # Mac/Linux 간편 푸시 스크립트
├── push.bat           # Windows 간편 푸시 스크립트
├── README.md          # 프로젝트 문서 (이 파일)
├── IMAGE_GUIDE.md     # 이미지 관리 가이드
├── AUTO_PUSH_GUIDE.md # GitHub 자동 푸시 가이드
├── DEPLOY.md          # 배포 가이드
└── UNLIMITED_HOSTING_GUIDE.md  # 무제한 호스팅 가이드
```

## 🎨 디자인 특징

- **색상 팔레트**
  - Primary: #FF6B6B (코랄 핑크)
  - Gradient: #FF6B6B → #FF8E53 → #FFD93D
  - Background: #FFFFFF (순백색)
  - Text: #1a1a1a (진한 검정)
  - Accent: #FF6B6B (프리미엄 메시지 한글)

- **타이포그래피**
  - 시스템 기본 폰트 사용 (San Francisco, Segoe UI, Roboto 등)
  - 히어로 슬로건: 19px (데스크톱), 14px (태블릿), 7px (모바일) - 최종 50% 축소
  - 섹션 메시지: 50px (데스크톱), 32px (태블릿), 24px (모바일)
  - 프리미엄 메시지 (영문): 42px (데스크톱), 28px (태블릿), 5px (모바일) - 최종 75% 축소, **bold**
  - 프리미엄 메시지 (한글): 29px (데스크톱), 20px (태블릿), 7px (모바일) - 최종 50% 축소, **semi-bold, 코랄색**
  - 타이트한 letter-spacing (-1.5px ~ 2px)

- **애니메이션**
  - 3D perspective 정면 진입 효과 (translateZ + scale)
  - Typewriter 타이핑 효과 (steps animation)
  - Gradient 슬라이드 애니메이션 (4s infinite)
  - **Scroll Snap Mandatory** (스크롤 1번으로 즉시 전환)
  - Intersection Observer를 활용한 스크롤 트리거
  - 60fps 최적화된 requestAnimationFrame 사용

- **이미지 & 리소스**
  - 로고: `images/logo.png` (24.4 KB, PNG)
  - 배경: `images/tumbler-background.png` (204.7 KB, PNG)
  - 총 용량: 약 234 KB (최적화 가능)
  - 모든 이미지 로컬 저장 (외부 링크 의존 없음)

## 🚀 기능 URI 및 섹션

| 섹션 | ID | 정렬 | 애니메이션 | 내용 |
|------|-----|------|-----------|------|
| 히어로 | `#home` | 중앙 | 패럴랙스 + 페이드 | CHAKO LAB° 로고 + "Colorful, Healthy, Attractive, Keep, Objective & LAB" |
| 316 스테인리스 | `#section2` | 좌측 | 정면 진입 (scale 0.7→1.0) | "316 스테인리스를 사용합니다" |
| 진공 텀블러 | `#section3` | 우측 | 정면 진입 (scale 0.7→1.0) | "진공텀블러로 만들었습니다" |
| 미끄럼방지 | `#section4` | 중앙 | 정면 진입 (scale 0.7→1.0) | "미끄럼방지를 만들었습니다" |
| 프리미엄 메시지 | `#section5` | 중앙 | 타이핑 효과 (2.5s) + 페이드 인 | "We only seek a premium." + "우리는 프리미엄만을 추구합니다." |
| 문의 | `#contact` | 중앙 | - | Get In Touch |

## 🔄 작동 원리

### 배경 확대 애니메이션

```javascript
// 섹션 1-4 높이 합산
const totalHeight = section1Height + section2Height + section3Height + section4Height;

// 스크롤 진행률 계산 (0 ~ 1)
const progress = Math.min(scrollY / totalHeight, 1);

// 확대 (1.0x → 2.0x)
const scaleValue = 1 + (progress * 1);

// 선명도 증가 (opacity 0.3 → 0.8, blur 2px → 0px)
const opacity = 0.3 + (progress * 0.5);
const blurAmount = 2 - (progress * 2);
```

### 정면 진입 3D 애니메이션

```css
/* 초기 상태: 뒤쪽에서 작게 */
transform: perspective(1000px) translateZ(-200px) scale(0.7);
opacity: 0;

/* 진입 후: 정면으로 확대 */
transform: perspective(1000px) translateZ(0) scale(1);
opacity: 1;
transition: 1.5s cubic-bezier(0.19, 1, 0.22, 1);
```

### 타이핑 효과

```css
@keyframes typewriter {
  0% { width: 0; }
  100% { width: 100%; }
}

animation: typewriter 2.5s steps(25) forwards;
```

### 스크롤 스냅 효과 (섹션 1-5)

```css
/* HTML 전체에 강제 스크롤 스냅 설정 */
html {
    scroll-snap-type: y mandatory;  /* 강제 스냅 - 반드시 섹션에 정렬 */
}

/* 히어로 섹션 (섹션 1) */
.hero-section {
    height: 100vh;
    scroll-snap-align: start;
    scroll-snap-stop: always;
}

/* 콘텐츠 섹션 (섹션 2-5) - 동일한 크기 */
.content-section {
    min-height: 100vh;
    scroll-snap-align: start;
    scroll-snap-stop: always;    /* 섹션에서 반드시 멈춤 */
}

/* 섹션 5: 자연스러운 스크롤 통과 */
.section-5 {
    scroll-snap-stop: normal;    /* 스크롤이 자연스럽게 통과 */
}

/* Contact 섹션 (섹션 6) - 자유 스크롤 */
.contact-section {
    padding: 120px 0;
    /* scroll-snap 없음 - 자유롭게 스크롤 */
}

/* Footer (섹션 7) - 자유 스크롤 */
footer {
    /* scroll-snap 없음 */
}
```

**작동 원리**:
- `scroll-snap-type: y mandatory` - 세로 스크롤 시 **반드시** 가장 가까운 스냅 포인트로 이동
- `scroll-snap-align: start` - 섹션 시작점에 정렬
- `scroll-snap-stop: always` - 섹션 1-4에서 반드시 멈춤
- `scroll-snap-stop: normal` - **섹션 5에서 자연스럽게 다음으로 이동**
- `min-height: 100vh` - 섹션 1-5가 화면 전체 높이로 통일
- **스크롤 1번**으로 정확히 다음 섹션으로 이동 (섹션 1-4)
- **섹션 5에서 자연스럽게 Contact로 스크롤 가능**
- Contact → Footer 자연스럽게 이어짐
- 풀스크린 프레젠테이션 (1-5) + 유연한 전환
- PC와 모바일 모두에서 작동

## 📱 반응형 브레이크포인트

- **데스크톱**: > 768px
  - 로고: 7px (네비), 50px (히어로)
  - 히어로 슬로건: 19px (20% 축소)
  - 섹션 메시지: 50px
  - 프리미엄 메시지 (영문): 42px (30% 축소, **bold**)
  - 프리미엄 메시지 (한글): 29px (30% 축소, **semi-bold, 코랄색**)
  - **스크롤 스냅**: 풀스크린 섹션 (100vh), 스크롤 1번 전환

- **태블릿**: 481px - 768px
  - 로고: 12px (네비), 35px (히어로)
  - 히어로 슬로건: 14px (20% 축소)
  - 섹션 메시지: 32px
  - 프리미엄 메시지 (영문): 28px (30% 축소, **bold**)
  - 프리미엄 메시지 (한글): 20px (29% 축소, **semi-bold, 코랄색**)
  - 섹션 3 우측 정렬 유지
  - **스크롤 스냅**: 풀스크린 섹션 (100vh), 스크롤 1번 전환

- **모바일**: ≤ 480px
  - 로고: 10px (네비), 25px (히어로)
  - 히어로 슬로건: 7px (최종 50% 축소, padding 좌우 20px)
  - 섹션 메시지: 24px
  - 프리미엄 메시지 (영문): 5px (최종 75% 축소, **bold**, **2줄: "We only seek" / "a premium."**)
  - 프리미엄 메시지 (한글): 7px (최종 50% 축소, **semi-bold, 코랄색**)
  - 타이핑 효과 비활성화 (즉시 페이드 인)
  - 햄버거 메뉴 활성화
  - 섹션 3 우측 정렬 유지
  - **스크롤 스냅**: 풀스크린 섹션 (100vh, 섹션 1-5), 스크롤 1번 전환
  - Contact/Footer는 자유 스크롤

## 🎯 향후 개발 권장 사항

### 미구현 기능

1. **제품 상세 페이지**
   - 제품 스펙 (용량, 크기, 무게 등)
   - 소재 상세 정보
   - 가격 및 구매 옵션

2. **색상 옵션 전시**
   - 4가지 색상 옵션 섹션 추가
   - 인터랙티브 색상 선택기

3. **추가 애니메이션**
   - 360도 제품 뷰어
   - 스와이프 제스처 지원
   - 더 많은 마이크로 인터랙션

4. **콘텐츠 확장**
   - 사용자 리뷰 섹션
   - 제품 사용 가이드
   - FAQ 섹션
   - 소셜 미디어 연동

5. **성능 최적화**
   - 이미지 지연 로딩
   - WebP 포맷 지원
   - 프리로딩 최적화

6. **접근성 개선**
   - ARIA 레이블 추가
   - 키보드 네비게이션 강화
   - 스크린 리더 지원 개선
   - 애니메이션 감소 옵션 (prefers-reduced-motion)

## 🛠 기술 스택

- **HTML5**: 시맨틱 마크업
- **CSS3**: 
  - Flexbox, Grid 레이아웃
  - 3D Transforms (perspective, translateZ, scale)
  - Keyframe Animations (typewriter, gradient slide)
  - Media Queries (반응형 디자인)
  
- **JavaScript (Vanilla)**: 
  - Intersection Observer API (스크롤 트리거)
  - requestAnimationFrame (부드러운 애니메이션)
  - Scroll Events (배경 확대, 선명도 조절)
  - Event Delegation (모바일 메뉴)

## 📝 레퍼런스

- 디자인 레퍼런스: [1784.navercorp.com](https://1784.navercorp.com)
- 제품 이미지: **로컬 저장 완료** ✅
  - 텀블러 배경: `images/tumbler-background.png` (204.7 KB)
- 브랜드 로고: **로컬 저장 완료** ✅
  - 차코랩 로고: `images/logo.png` (24.4 KB)

## 📚 프로젝트 문서

- **README.md** - 프로젝트 전체 개요 (이 파일)
- **IMAGE_GUIDE.md** - 이미지 관리 및 최적화 가이드
- **AUTO_PUSH_GUIDE.md** - GitHub 자동 푸시 설정 가이드
- **DEPLOY.md** - 자동 배포 설정 가이드
- **UNLIMITED_HOSTING_GUIDE.md** - 무제한 호스팅 가이드

## 🚀 배포 방법

### 옵션 1: Publish 탭 (가장 간단)
1. **Publish 탭**으로 이동
2. 원클릭으로 프로젝트 배포
3. 실시간 URL 즉시 받기

### 옵션 2: GitHub Pages (영구 무료)
1. GitHub 저장소 생성
2. 파일 업로드
3. Settings → Pages 활성화
4. `https://username.github.io/chako-lab-website/`

### 옵션 3: Netlify (빠른 배포)
1. [Netlify.com](https://netlify.com) 방문
2. 드래그 & 드롭으로 배포
3. 즉시 라이브 URL 생성

자세한 내용은 **UNLIMITED_HOSTING_GUIDE.md**를 참고하세요!

## 📄 라이선스

© 2026 CHAKO LAB°. All rights reserved.

---

**제작일**: 2026-02-26  
**버전**: 3.3.0  
**상태**: Production Ready ✅

**최신 업데이트 (v3.3.0)**:
- ✅ **이미지 로컬 저장 완료**
  - 로고: `images/logo.png` (24.4 KB)
  - 배경: `images/tumbler-background.png` (204.7 KB)
  - 외부 링크 의존성 제거
  - 영구적으로 사용 가능
- ✅ **섹션 6, 7 크기 최적화**
  - Contact 섹션: 100vh → 70vh (컴팩트)
  - Footer: 100vh → 70vh (컴팩트)
  - 전체 스크롤 흐름 개선
- ✅ **모바일 애니메이션 완전 지원 확인**
  - 배경 줌 애니메이션
  - 섹션 3D 진입 효과
  - 모든 PC 효과가 모바일에도 적용
- ✅ **GitHub 자동 배포 설정 추가**
  - GitHub Actions 워크플로우
  - VS Code 원클릭 푸시
  - 자동화 스크립트 (push.sh, push.bat)
- ✅ **종합 가이드 문서 작성**
  - 이미지 관리 가이드
  - 자동 푸시 가이드
  - 무제한 호스팅 가이드