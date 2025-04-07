---
title: "트랜스포머 모델(예: Llama, BERT)을 리벨리온 NPU에서 실행할 때 성능을 향상시키는 설정이나 권장 옵션이 있나요?"
slug: "transformer-model"
lang: "ko"
permalink: "faq/{{ slug }}.ko.html"
author: "Jiwon"
createdDate: "2025-03-31"
categories: ["SDK 사용법", "설치 및 설정"]
primaryCategory: "SDK 사용법"
tags: ["transformer", "llama", "bert"]
order: "3"     
---

트랜스포머 계열 모델의 성능을 극대화하려면 다음을 고려하세요:

- `rbln_tensor_parallel_size` 값을 적절히 설정하여 NPU 병렬성 활용
- 입력 시퀀스 길이 및 배치 크기 튜닝