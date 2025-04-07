---
title: "언어모델을 컴파일/추론할 때 에러가 발생합니다."
slug: "compile-inference-error"
lang: "ko"
permalink: "/faq/{{ slug }}.ko.html"
author: "Jiwon"
createdDate: "2025-03-31"
categories: ["지원 및 문제 해결"]
tags: ["compile", "error"]
primaryCategory: "지원 및 문제 해결"
order: "4"
---

다음 항목들을 확인해 보세요:

- 메모리 사용량: 컴파일 시 시스템 메모리가 부족하면 컴파일이 실패할 수 있습니다.
- NPU 설정 확인: `rbln_tensor_parallel_size` 값이 시스템에 실제로 장착된 NPU 개수보다 크지 않은지 확인하세요. 터미널에서 `rbln-stat` 명령어를 실행하면 NPU 수를 확인할 수 있습니다.
- 도커(Docker) 환경: <a href="https://docs.rbln.ai/ko/software/system_management/docker.html" class="underline" target="_blank">도커 가이드</a>를 참고해주세요.
