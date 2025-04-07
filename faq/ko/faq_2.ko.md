---
title: "기존 PyTorch 또는 TensorFlow 모델을 RBLN SDK로 컴파일하려면 코드 수정이 필요한가요?"
slug: "code-modification"
lang: "ko"
permalink: "faq/{{ slug }}.ko.html"
author: "Jiwon"
createdDate: "2025-03-31"          
categories: ["SDK 사용법"]
primaryCategory: "SDK 사용법"                  
tags: ["model", "compile"]
order: "2"          
---
대부분의 경우 최소한의 코드 수정만으로 RBLN SDK를 사용할 수 있습니다.

- 공식적으로 지원되는 Model Zoo 모델들은 제공되는 예제 코드를 바로 사용 가능합니다.
- 이외 모델도 <a href="https://github.com/rebellions-sw/rbln-model-zoo" class="underline" target="_blank">Model Zoo 코드</a>를 참고하여 컴파일할 수 있습니다.

지원하는 연산 목록을 미리 확인해보세요.

  - <a href="https://docs.rbln.ai/ko/misc/supported_ops_pytorch.html" class="underline" target="_blank">PyTorch</a>
  - <a href="https://docs.rbln.ai/ko/misc/supported_ops_tensorflow.html" class="underline" target="_blank">TensorFlow</a>