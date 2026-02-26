@echo off
chcp 65001 >nul
REM CHAKO LAB Website - Quick Git Push Script (Windows)
REM 이 스크립트는 변경사항을 자동으로 GitHub에 푸시합니다.

echo 🚀 CHAKO LAB Website - Git Auto Push
echo ==================================
echo.

REM 현재 변경사항 확인
echo 📝 변경된 파일:
git status --short
echo.

REM 사용자에게 확인
set /p confirm="이 변경사항을 GitHub에 푸시하시겠습니까? (y/n): "

if /i "%confirm%"=="y" (
    echo.
    set /p commit_message="📌 커밋 메시지를 입력하세요: "
    
    REM 기본 메시지 설정
    if "%commit_message%"=="" (
        set commit_message=Update: %date% %time%
    )
    
    echo.
    echo ⏳ Git 작업 진행 중...
    
    REM Git 작업 수행
    git add .
    git commit -m "%commit_message%"
    git push origin main
    
    if %errorlevel% equ 0 (
        echo.
        echo ✅ 성공! GitHub에 푸시되었습니다.
        echo 🌐 배포는 1-2분 후 완료됩니다.
        echo 📊 진행 상황: https://github.com/YOUR-USERNAME/chako-lab-website/actions
    ) else (
        echo.
        echo ❌ 오류 발생! Git 설정을 확인해주세요.
    )
) else (
    echo.
    echo ❌ 취소되었습니다.
)

echo.
echo ==================================
pause
