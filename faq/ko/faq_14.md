---
title: "비디오 입력 파일(.mp4)은 어떻게 처리하나요?"
slug: "video-file"
lang: "ko"
permalink: "faq/{{ slug }}.ko.html"
author: "Jiwon"
createdDate: "2025-03-31"
categories: ["서비스 활용/최적화"]
tags: ["mp4", "video", "optimization"]
primaryCategory: "서비스 활용/최적화"
order: "6"
---
비디오 파일을 처리하기 위해서는 OpenCV(cv2)와 같은 라이브러리를 활용하여 .mp4 파일의 각 프레임을 이미지로 추출한 뒤, 이를 모델에 입력하는 방식으로 추론을 진행합니다.

예를 들어, YOLOX와 같은 객체 탐지 모델을 사용할 경우 다음과 같은 절차를 따릅니다:

1. cv2.VideoCapture로 비디오 파일을 로드
2. 프레임 단위로 이미지 추출
3. 각 프레임을 모델 입력 형식에 맞게 전처리
4. 모델을 통해 객체 탐지 수행
5. 결과를 시각화하여 저장 또는 실시간 출력
