---
title: "NPU에서 모델 성능을 측정하고 분석하는 방법은 무엇인가요?"
slug: "performance-analysis"
lang: "ko"
permalink: "faq/{{ slug }}.ko.html"
author: "Jiwon"
createdDate: "2025-03-31"
categories: ["서비스 활용/최적화"]
tags: ['model', 'performance', 'analysis']
primaryCategory: "서비스 활용/최적화"
order: "2"  
---
SDK에 포함된 <a href="https://docs.rbln.ai/ko/software/profiler/overview.html" class="underline" target="_blank">프로파일러(Profiler)</a>를 통해 처리 시간(latency), 처리량(throughput), 메모리 사용량(memory usage) 등의 지표를 분석할 수 있습니다.

<a href="https://docs.rbln.ai/ko/software/system_management/device_management.html" class="underline" target="_blank">`rbln-stat`</a>을 이용하면 소모 전력(power)이나 활용률(utilization)도 확인할 수 있습니다.