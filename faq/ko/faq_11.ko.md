---
title: "NPU 여러 개를 분산해서 사용할 수 있나요?"
slug: "multi-npus"
lang: "ko"
permalink: "faq/{{ slug }}.ko.html"
author: "Jiwon"
createdDate: "2025-03-31"
categories: ["서비스 활용/최적화", "제품 정보/호환성"]
primaryCategory: "서비스 활용/최적화"
order: "1"  
tags: ['npu', 'multidevice']
---
RBLN SDK는 RSD (Rebellions Scalable Design)라고 명명된 tensor parallelism 기반의 분산 추론을 지원합니다.
멀티-NPU가 지원되는 <a href="https://docs.rbln.ai/ko/software/optimum/optimum_rbln.html#multi-npu-rsd" class="underline" target="_blank">모델 리스트</a>를 먼저 확인해주시고, 컴파일 방법은 제공된 <a href="https://docs.rbln.ai/ko/software/optimum/tutorial/llama3-8B.html#npu" class="underline" target="_blank">예시</a>를 참고해주세요.
