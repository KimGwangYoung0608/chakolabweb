# 🖼️ CHAKO LAB - 이미지 관리 가이드

## ✅ 현재 저장된 이미지

### 📁 images/ 폴더 구조

```
images/
├── logo.png                    # 차코랩 로고 (24.4 KB)
│   └── 사용 위치: 네비게이션, 히어로 섹션
│
└── tumbler-background.png      # 텀블러 배경 이미지 (204.7 KB)
    └── 사용 위치: 전체 배경
```

---

## 📝 이미지 정보

### 1. 로고 (logo.png)
- **크기**: 24,990 bytes (약 24.4 KB)
- **형식**: PNG
- **사용 위치**:
  - 네비게이션 좌측 상단
  - 히어로 섹션 중앙 로고
- **경로**: `images/logo.png`

### 2. 텀블러 배경 (tumbler-background.png)
- **크기**: 209,653 bytes (약 204.7 KB)
- **형식**: PNG
- **사용 위치**:
  - 섹션 1-5 배경 이미지
  - 스크롤 줌 애니메이션에 사용
- **경로**: `images/tumbler-background.png`

---

## 🔄 이미지 교체 방법

### 방법 1: 파일 직접 교체

1. **기존 이미지 백업** (선택사항)
   ```bash
   cp images/logo.png images/logo-backup.png
   ```

2. **새 이미지 준비**
   - 같은 파일명 사용: `logo.png` 또는 `tumbler-background.png`
   - 또는 다른 이름 사용 후 HTML 수정

3. **파일 교체**
   - `images/` 폴더에 새 이미지 복사

4. **HTML 수정** (다른 파일명 사용 시)
   ```html
   <!-- 예: 새 로고 이미지가 new-logo.png인 경우 -->
   <img src="images/new-logo.png" alt="CHAKO LAB" class="logo-image">
   ```

---

### 방법 2: 추가 이미지 저장

새로운 이미지를 추가하려면:

1. **이미지 파일 준비**
   - 최적화된 이미지 사용 권장
   - PNG, JPG, WebP 형식 지원

2. **images/ 폴더에 저장**
   ```
   images/
   ├── logo.png
   ├── tumbler-background.png
   ├── new-image.png          ← 새 이미지
   └── product-detail.jpg     ← 새 이미지
   ```

3. **HTML에서 사용**
   ```html
   <img src="images/new-image.png" alt="설명">
   ```

---

## 🎨 이미지 최적화 가이드

### 권장 사양

#### 로고 이미지:
- **형식**: PNG (투명 배경) 또는 SVG
- **크기**: 500x500px 이하
- **용량**: 50KB 이하
- **최적화**: TinyPNG 사용

#### 배경 이미지:
- **형식**: PNG, JPG, WebP
- **크기**: 1920x1080px ~ 2560x1440px
- **용량**: 500KB 이하 (권장: 200KB)
- **최적화**: Squoosh 또는 TinyPNG 사용

---

## 🛠️ 이미지 최적화 도구

### 온라인 도구 (무료):

1. **TinyPNG** 🏆
   - URL: https://tinypng.com/
   - PNG, JPG 압축
   - 최대 70% 용량 감소

2. **Squoosh** (Google)
   - URL: https://squoosh.app/
   - 모든 형식 지원
   - 실시간 비교 가능

3. **Compressor.io**
   - URL: https://compressor.io/
   - 최대 90% 압축

### 명령줄 도구:

```bash
# ImageMagick (설치 필요)
# PNG 최적화
convert input.png -quality 85 -strip output.png

# JPG 최적화
convert input.jpg -quality 85 -strip output.jpg

# 크기 조정
convert input.png -resize 1920x1080 output.png
```

---

## 📐 반응형 이미지 설정

### WebP 형식 사용 (권장)

1. **WebP 변환**
   - Squoosh.app에서 변환
   - 또는 온라인 도구 사용

2. **HTML 업데이트**
   ```html
   <picture>
     <source srcset="images/tumbler-background.webp" type="image/webp">
     <source srcset="images/tumbler-background.png" type="image/png">
     <img src="images/tumbler-background.png" alt="Tumbler">
   </picture>
   ```

### 다양한 크기 제공

```html
<img 
  src="images/logo.png"
  srcset="images/logo@1x.png 1x,
          images/logo@2x.png 2x,
          images/logo@3x.png 3x"
  alt="CHAKO LAB"
>
```

---

## 🚀 성능 최적화

### 현재 이미지 로딩

총 용량: **약 234.4 KB**
- logo.png: 24.4 KB
- tumbler-background.png: 204.7 KB

### 최적화 후 예상

총 용량: **약 100-150 KB** (40-60% 감소)
- logo.webp: 10-15 KB
- tumbler-background.webp: 90-135 KB

### Lazy Loading 적용

배경 이미지는 즉시 로드, 다른 이미지는 지연 로드:

```html
<!-- 즉시 로드 (중요한 이미지) -->
<img src="images/logo.png" alt="Logo">

<!-- 지연 로드 (아래쪽 이미지) -->
<img src="images/product.png" alt="Product" loading="lazy">
```

---

## 📦 이미지 백업

### Git에 포함

현재 이미지는 Git 저장소에 포함되어 있습니다:

```bash
git add images/
git commit -m "Add product images"
git push
```

### 별도 백업

```bash
# 로컬 백업
cp -r images/ images-backup/

# 압축 백업
zip -r images-backup.zip images/
```

---

## 🔗 외부 이미지 vs 로컬 이미지

### 외부 이미지 (이전 방식)
```html
<img src="https://www.genspark.ai/api/files/s/bmtsVJjz">
```

**단점:**
- ❌ 외부 서버 의존
- ❌ 링크 만료 가능
- ❌ 느린 로딩 (외부 서버)
- ❌ 오프라인 불가

### 로컬 이미지 (현재 방식) ✅
```html
<img src="images/logo.png">
```

**장점:**
- ✅ 독립적 호스팅
- ✅ 영구 사용 가능
- ✅ 빠른 로딩
- ✅ 오프라인 작동
- ✅ 완전한 통제

---

## 📋 체크리스트

이미지 추가/교체 시 확인사항:

- [ ] 이미지 최적화 완료 (용량 확인)
- [ ] 올바른 형식 사용 (PNG/JPG/WebP)
- [ ] 적절한 크기 (너무 크지 않게)
- [ ] 파일명 명확하게 (소문자, 하이픈 사용)
- [ ] HTML에서 경로 확인
- [ ] alt 텍스트 추가 (접근성)
- [ ] 모든 브라우저에서 테스트
- [ ] 모바일에서 확인

---

## 🎯 빠른 참조

### 새 이미지 추가 3단계:

```bash
# 1. 이미지 파일을 images/ 폴더에 복사

# 2. HTML 수정
# <img src="images/your-image.png" alt="설명">

# 3. 확인
# 브라우저에서 테스트
```

### 이미지 최적화 3단계:

```bash
# 1. TinyPNG.com 방문

# 2. 이미지 업로드 & 다운로드

# 3. 기존 파일 교체
```

---

## 💡 추가 팁

### 파일 이름 규칙:
```
✅ 좋은 예:
- logo.png
- tumbler-background.png
- product-image-01.jpg
- icon-instagram.svg

❌ 나쁜 예:
- 로고.png (한글)
- Image 1.jpg (공백)
- LOGO.PNG (대문자)
- product_Image.JPG (혼합)
```

### 폴더 구조 확장:
```
images/
├── logos/
│   ├── logo.png
│   ├── logo-white.png
│   └── favicon.ico
├── products/
│   ├── tumbler-01.png
│   ├── tumbler-02.png
│   └── tumbler-03.png
├── backgrounds/
│   └── tumbler-background.png
└── icons/
    ├── instagram.svg
    ├── facebook.svg
    └── twitter.svg
```

---

## ❓ FAQ

### Q: 이미지가 표시되지 않아요
A: 경로 확인:
- HTML 파일 위치 확인
- 대소문자 정확히 일치 확인
- 파일 존재 여부 확인

### Q: 이미지가 너무 커요
A: 최적화 도구 사용:
- TinyPNG.com
- Squoosh.app
- 목표: 200KB 이하

### Q: 로고가 흐려요
A: SVG 형식 사용:
- 벡터 이미지 = 확대해도 선명
- AI/Figma에서 SVG 내보내기

### Q: 배경 이미지 교체하려면?
A: 
1. 새 이미지를 `tumbler-background.png`로 저장
2. 또는 다른 이름으로 저장 후 CSS 수정:
   ```css
   .main-bg-image {
     content: url('images/new-background.png');
   }
   ```

---

## 🎉 완료!

이제 이미지가 로컬에 저장되어 있으며, 언제든지 수정/교체할 수 있습니다!

**저장된 위치:**
- `images/logo.png` (24.4 KB)
- `images/tumbler-background.png` (204.7 KB)

**사용 위치:**
- ✅ 네비게이션 로고
- ✅ 히어로 섹션 로고  
- ✅ 전체 배경 이미지

---

더 궁금한 점이 있으시면 언제든 말씀해주세요! 😊
