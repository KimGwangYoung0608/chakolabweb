#!/bin/bash

# CHAKO LAB Website - Quick Git Push Script
# 이 스크립트는 변경사항을 자동으로 GitHub에 푸시합니다.

echo "🚀 CHAKO LAB Website - Git Auto Push"
echo "=================================="

# 현재 변경사항 확인
echo ""
echo "📝 변경된 파일:"
git status --short

# 사용자에게 확인
echo ""
read -p "이 변경사항을 GitHub에 푸시하시겠습니까? (y/n): " -n 1 -r
echo ""

if [[ $REPLY =~ ^[Yy]$ ]]
then
    # 커밋 메시지 입력받기
    echo ""
    read -p "📌 커밋 메시지를 입력하세요: " commit_message
    
    # 기본 메시지 설정
    if [ -z "$commit_message" ]
    then
        commit_message="Update: $(date '+%Y-%m-%d %H:%M:%S')"
    fi
    
    echo ""
    echo "⏳ Git 작업 진행 중..."
    
    # Git 작업 수행
    git add .
    git commit -m "$commit_message"
    git push origin main
    
    # 결과 확인
    if [ $? -eq 0 ]; then
        echo ""
        echo "✅ 성공! GitHub에 푸시되었습니다."
        echo "🌐 배포는 1-2분 후 완료됩니다."
        echo "📊 진행 상황: https://github.com/YOUR-USERNAME/chako-lab-website/actions"
    else
        echo ""
        echo "❌ 오류 발생! Git 설정을 확인해주세요."
    fi
else
    echo ""
    echo "❌ 취소되었습니다."
fi

echo ""
echo "=================================="
