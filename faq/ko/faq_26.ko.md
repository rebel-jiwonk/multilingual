---
title: "어떤 서빙 프레임워크를 지원하나요?"
slug: "faq-26"
lang: "ko"
permalink: "faq/{{ slug }}.ko.html"
author: "Jiwon"
createdDate: "2025-03-31"
categories: ["제품 정보/호환성", "서비스 활용/최적화"]
tags: ["cloud", "kubernetes", "serving framework"]
primaryCategory: "제품 정보/호환성"
order: "5"
---

RBLN SDK를 사용하면 <a href="https://docs.rbln.ai/ko/software/model_serving/vllm_support/vllm-rbln.html" class="underline" target="_blank">vLLM</a>, Nvidia Triton Inference Server, 그리고 TorchServe 등의 서빙 프레임워크와 연동이 가능합니다. 컨테이너 기반 배포에는 <a href="https://github.com/rebellions-sw/rebel-k8s-device-plugin" class="underline" target="_blank">쿠버네티스(Kubernetes)</a>와의 통합도 지원됩니다.