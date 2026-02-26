# 🚀 CHAKO LAB Website - GitHub 자동 푸시 완벽 가이드

## 📋 목차
1. [빠른 시작](#빠른-시작)
2. [자동 배포 설정](#자동-배포-설정)
3. [VS Code로 원클릭 푸시](#vs-code로-원클릭-푸시)
4. [스크립트로 간편 푸시](#스크립트로-간편-푸시)
5. [GitHub Desktop 자동 동기화](#github-desktop-자동-동기화)

---

## 🎯 빠른 시작

### 현재 상황
현재 개발 환경에서는 GitHub에 **직접 자동 푸시 기능이 없습니다**.

하지만 다음 방법들로 **거의 자동화**할 수 있습니다! ⚡

---

## 1️⃣ 자동 배포 설정

### GitHub Actions로 자동 배포 (추천!)

이 프로젝트에는 이미 `.github/workflows/deploy.yml` 파일이 포함되어 있습니다.

#### 설정 방법:

**1단계: GitHub 저장소 생성**
```bash
# GitHub.com에서 새 저장소 생성
# 이름: chako-lab-website
```

**2단계: 초기 업로드 (한 번만)**
```bash
cd /path/to/project
git init
git add .
git commit -m "Initial commit with auto-deploy setup"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/chako-lab-website.git
git push -u origin main
```

**3단계: GitHub Pages 활성화**
1. 저장소 → **Settings** → **Pages**
2. Source: **GitHub Actions** 선택
3. 저장

**✅ 완료!** 이제 `git push`만 하면 자동으로 배포됩니다! 🎉

---

## 2️⃣ VS Code로 원클릭 푸시

### 필요한 확장:
- Git Graph
- GitLens
- GitHub Pull Requests

### 사용 방법:

#### 방법 A: VS Code 작업 사용 (가장 빠름!)
1. **Ctrl+Shift+P** (Mac: Cmd+Shift+P)
2. `Tasks: Run Task` 입력
3. `🚀 Quick Push to GitHub` 선택
4. 커밋 메시지 입력
5. Enter → **자동 푸시 완료!** ✅

#### 방법 B: 소스 제어 패널 사용
1. **소스 제어** 패널 열기 (Ctrl+Shift+G)
2. 변경된 파일 확인
3. 커밋 메시지 입력
4. **✓** 버튼 클릭 (커밋)
5. **↑** 버튼 클릭 (푸시)

#### 방법 C: GitLens 사용
1. 하단 상태바에서 **↑** 아이콘 클릭
2. 자동으로 커밋 & 푸시 실행

---

## 3️⃣ 스크립트로 간편 푸시

### Mac/Linux 사용자

#### 실행 권한 부여 (최초 1회)
```bash
chmod +x push.sh
```

#### 사용법
```bash
./push.sh
```

**자동으로:**
1. 변경사항 표시
2. 확인 요청
3. 커밋 메시지 입력 받기
4. Git add, commit, push 실행
5. 결과 표시

### Windows 사용자

#### 사용법
```cmd
push.bat
```

더블클릭으로도 실행 가능합니다!

---

## 4️⃣ GitHub Desktop 자동 동기화

### 설정 방법:

1. **GitHub Desktop 설치**
   - [다운로드](https://desktop.github.com/)

2. **저장소 열기**
   - File → Add Local Repository
   - 프로젝트 폴더 선택

3. **자동 푸시 설정**
   - Preferences → Git
   - ✅ **"Push commits to the remote repository automatically"** 체크

4. **사용법**
   - 파일 수정
   - GitHub Desktop이 자동으로 변경 감지
   - 커밋 메시지 입력
   - **Commit to main** 클릭
   - **자동으로 푸시됨!** 🚀

---

## 5️⃣ 터미널 단축키 설정

### Bash/Zsh 사용자

`.bashrc` 또는 `.zshrc`에 추가:

```bash
# CHAKO LAB Quick Push
alias gpush='git add . && git commit -m "Update: $(date +%Y-%m-%d\ %H:%M:%S)" && git push'
alias gpushm='git add . && git commit -m "$1" && git push'
```

**사용법:**
```bash
# 자동 타임스탬프 커밋
gpush

# 커스텀 메시지
gpushm "섹션 5 폰트 크기 조정"
```

### PowerShell 사용자

`$PROFILE` 파일에 추가:

```powershell
function gpush {
    git add .
    git commit -m "Update: $(Get-Date -Format 'yyyy-MM-dd HH:mm:ss')"
    git push
}

function gpushm {
    param([string]$message)
    git add .
    git commit -m $message
    git push
}
```

---

## 6️⃣ Git Hooks로 자동 푸시

### 주의: 권장하지 않음! ⚠️

모든 커밋마다 자동 푸시는 위험할 수 있습니다.
대신 위의 방법들을 사용하세요.

하지만 원한다면:

```bash
# .git/hooks/post-commit 파일 생성
cat > .git/hooks/post-commit << 'EOF'
#!/bin/bash
git push origin main &
EOF

chmod +x .git/hooks/post-commit
```

---

## 📊 배포 상태 확인

### 방법 1: GitHub Actions 탭
```
https://github.com/YOUR-USERNAME/chako-lab-website/actions
```

### 방법 2: VS Code 작업
- Ctrl+Shift+P → `Tasks: Run Task` → `📊 View Deploy Status`

### 방법 3: 상태 배지
README.md에 추가:

```markdown
![Deploy Status](https://github.com/YOUR-USERNAME/chako-lab-website/actions/workflows/deploy.yml/badge.svg)
```

---

## 🌐 라이브 사이트 확인

### 배포 URL:
```
https://YOUR-USERNAME.github.io/chako-lab-website/
```

### VS Code 작업으로 열기:
- Ctrl+Shift+P → `Tasks: Run Task` → `🌐 Open Live Site`

---

## 🔄 워크플로우 요약

### 개발 → 배포 전체 과정

```
1. 파일 수정 (index.html, CSS, JS 등)
   ↓
2. 변경사항 확인
   ↓
3. 푸시 (아래 방법 중 선택)
   • VS Code 작업 (Ctrl+Shift+P)
   • push.sh / push.bat 실행
   • GitHub Desktop
   • git push 명령어
   ↓
4. GitHub Actions 자동 실행
   ↓
5. 30초~2분 후 배포 완료! ✅
   ↓
6. 라이브 사이트에서 확인
```

---

## 💡 추천 워크플로우

### 일상적인 개발:

1. **VS Code로 개발**
2. **Ctrl+Shift+P** → **Tasks: Run Task**
3. **🚀 Quick Push to GitHub** 선택
4. 커밋 메시지 입력
5. **완료!**

### 가장 빠른 방법:

```bash
# 별칭 설정 후
gpush
```

단 한 번의 명령어로 끝!

---

## ❓ FAQ

### Q: 현재 개발 환경에서 자동 푸시가 가능한가요?
A: 아니요, 이 환경은 GitHub 직접 연동을 지원하지 않습니다. 하지만 Publish 탭으로 더 쉽게 배포할 수 있습니다!

### Q: 가장 간단한 방법은?
A: **Publish 탭 사용** 또는 **GitHub Desktop** 사용을 추천합니다.

### Q: 매번 커밋 메시지를 입력해야 하나요?
A: 스크립트나 별칭을 사용하면 자동 타임스탬프 메시지로 설정됩니다.

### Q: GitHub Actions는 무료인가요?
A: 네! Public 저장소는 완전 무료입니다.

### Q: 배포가 실패하면?
A: Actions 탭에서 로그를 확인하고, 오류를 수정한 후 다시 푸시하세요.

---

## 🎯 결론

현재 개발 환경에서는:
- ❌ 완전 자동 푸시 불가
- ✅ **거의 자동화 가능** (1-2 클릭)
- ✅ **Publish 탭이 가장 간단** (추천)

GitHub 저장소가 필요하다면:
1. 수동으로 초기 업로드 (한 번만)
2. 이후 VS Code/스크립트로 간편 푸시
3. GitHub Actions가 자동 배포

---

## 📞 도움이 필요하신가요?

각 방법에 대한 자세한 설명이 필요하시면 말씀해주세요! 😊

- VS Code 설정 도움
- Git 명령어 설명
- GitHub Actions 문제 해결
- 기타 질문
