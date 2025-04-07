---
title: "어떤 PyTorch 기능과 호환되나요?"
slug: "pytorch-compatibility"
lang: "ko"
permalink: "faq/{{ slug }}.ko.html"
author: "Jiwon"
createdDate: "2025-03-31"
categories: ["SDK 사용법", "제품 정보/호환성"]
primaryCategory: "SDK 사용법" 
tags: ['pytorch', 'compatibility', 'features']
order: "6"
---

RBLN SDK는 PyTorch 기반 모델과의 높은 호환성을 제공합니다.

- `torch.compile()` 지원: PyTorch 2.0의 `torch.compile()` 기능과 호환되며, TorchDynamo 및 TorchInductor 백엔드를 기반으로 컴파일된 모델을 처리할 수 있습니다.
- 광범위한 연산자 지원: RBLN 컴파일러는 PyTorch 연산자의 대부분을 지원하며, <a href="https://docs.rbln.ai/misc/supported_ops_pytorch.html" class="underline" target="_blank">지원 연산자 목록</a>을 통해 상세 내용을 확인할 수 있습니다. 주요 Vision, NLP, Audio 연산자도 포함되어 있어 다양한 딥러닝 모델에 활용 가능합니다.
- PyTorch Model Zoo 호환: ResNet, YOLO, LLaMA, BERT 등 <a href="https://docs.rbln.ai/misc/pytorch_modelzoo.html" class="underline" target="_blank">PyTorch Model Zoo</a>의 대표적인 모델 다수가 지원됩니다.
- JIT/Scripted 모델 지원: TorchScript를 사용해 변환된 모델도 RBLN 컴파일러에서 처리할 수 있습니다.