# CHAKO LAB Website - GitHub 자동 배포 가이드

## 🚀 자동 배포 설정 완료!

이 저장소는 GitHub Actions를 통해 자동으로 배포됩니다.

### ⚙️ 작동 방식

1. **main 브랜치에 푸시** → 자동 배포 시작
2. **GitHub Actions 실행** → 웹사이트 빌드
3. **GitHub Pages 배포** → 라이브 사이트 업데이트

### 📝 설정 방법

#### 1. GitHub Pages 활성화
1. 저장소 **Settings** → **Pages**
2. **Source**: GitHub Actions 선택
3. 저장

#### 2. 파일 업데이트 후 자동 배포
```bash
git add .
git commit -m "Update website"
git push origin main
```

자동으로 배포가 시작됩니다! ✨

### 🌐 배포 URL
```
https://your-username.github.io/chako-lab-website/
```

### 📊 배포 상태 확인
- **Actions** 탭에서 배포 진행 상황 확인
- 녹색 체크 표시 ✅ = 배포 성공
- 빨간색 X 표시 ❌ = 배포 실패 (로그 확인)

### 🔄 자동 배포 트리거
- `main` 브랜치에 푸시할 때마다
- 웹 인터페이스에서 파일 수정할 때마다
- 수동으로 **Actions** 탭에서 실행 가능

### ⏱️ 배포 시간
일반적으로 30초~2분 소요됩니다.

---

## 🛠️ 문제 해결

### 배포가 실패하는 경우
1. **Actions** 탭에서 실패한 워크플로우 클릭
2. 로그 확인
3. 오류 메시지 확인 후 수정

### Pages가 활성화되지 않는 경우
- Settings → Pages → Source를 **GitHub Actions**로 변경
- 저장소가 Public인지 확인 (Private는 Pro 계정 필요)

---

## 📦 포함된 파일

- `.github/workflows/deploy.yml` - 자동 배포 워크플로우
- 이 파일을 저장소에 포함하면 자동 배포가 활성화됩니다.
