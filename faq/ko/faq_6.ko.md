---
title: "RBLN SDK에서 요구하는 파이썬 버전이나 추가적인 의존성이 있나요?"
slug: "extra-dependencies"
lang: "ko"
permalink: "faq/{{ slug }}.ko.html"
author: "Jiwon"
createdDate: "2025-03-31"            
categories:  ["설치 및 설정", "제품 정보/호환성"]
primaryCategory: "설치 및 설정"
order: "4"                
tags: ["python", "dependencies"]        
---
기본적으로 파이썬(Python) 3.9 이상이 권장되며, numpy, torch, onnx 등 주요 패키지 의존성이 있습니다.

지원되는  OS와 파이썬 버전을 <a href="https://docs.rbln.ai/supports/version_matrix.html" class="underline" target="_blank">Support Matrix</a> 페이지를 확인하세요.
요구되는 패키지는 모델에 따라 다르며, <a href="https://github.com/rebellions-sw/rbln-model-zoo" class="underline" target="_blank">Model Zoo 코드</a>와 함께 포함된 `requirements.txt`를 참고해주세요.