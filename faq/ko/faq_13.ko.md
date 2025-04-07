---
title: "프로파일링 및 최적화 도구가 제공되나요?"
slug: "profiling-tool"
lang: "ko"
permalink: "faq/{{ slug }}.ko.html"
author: "Jiwon"
createdDate: "2025-03-31"
categories: ["서비스 활용/최적화"]
tags: ['profiling', 'tool', 'optimization']
primaryCategory: "서비스 활용/최적화"
order: "3"  
---
RBLN SDK에는 성능 병목 분석을 위한 RBLN 프로파일러(Profiler)가 포함되어 있으며, 실행 시간, 메모리 사용량, 연산 의존성 등의 주요 지표를 수집합니다.

- `.pb` 형식의 트레이스 파일은 Perfetto로 시각화할 수 있습니다.
- 병목 지점, 연산 간 의존성, 레이어별 처리시간(latency)등을 분석해 최적화 방향을 제시합니다.

자세한 사용법은 <a href="https://docs.rbln.ai/ko/software/profiler/overview.html" class="underline" target="_blank">프로파일러(Profiler) 가이드</a>를 참고하세요.
