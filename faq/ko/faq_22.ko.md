---
title: "파인 튜닝(Fine-tuning) 및 추론을 최적화하는 방법은 무엇인가요?"
slug: "inference-optimization"
lang: "ko"
permalink: "faq/{{ slug }}.ko.html"
author: "Jiwon"
createdDate: "2025-03-31"
categories: ["제품 정보/호환성"]
tags: ["inference", "fine-tuning"]
primaryCategory: "서비스 활용/최적화"
order: "7"
---

리벨리온 NPU는 추론 전용으로 설계되어 있어 현재 파인 튜닝은 불가능합니다.

추론 성능을 극대화하기 위해 아래와 같은 최적화 전략을 권장합니다:

- Mixed Precision 및 양자화 사용: FP16 또는 INT8 양자화 모델을 활용하여 메모리 사용량과 연산 속도를 개선할 수 있습니다.

- 배치 크기 조정: 모델 특성과 입력 데이터에 맞는 최적의 배치 크기를 찾아 처리량(throughput)을 높이세요.

- 모델 구조 리팩토링: Layer fusion과 불필요한 연산 제거를 통해 연산 그래프를 간소화하면 성능이 향상됩니다.

- 이중 버퍼링(Double Buffering): `AsyncRuntime`의 이중 버퍼링을 활용하여 성능을 향상시킬 수 있습니다.

- LLM 서빙 시 Continuous Batching 적용: 대형 언어 모델 서빙에는 `vllm-rbln`을 활용한 continuous batching 기법을 적용하여 NPU 활용률을 극대화할 수 있습니다.
