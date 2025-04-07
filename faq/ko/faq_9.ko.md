---
title: "RBLN SDK는 어떻게 설치하나요?"
slug: "rbln-sdk-installation"
lang: "ko"
permalink: "faq/{{ slug }}.ko.html"
author: "Jiwon"
createdDate: "2025-03-31"
categories: ["설치 및 설정", "SDK 사용법"]
primaryCategory: "설치 및 설정"
tags: ['rbln sdk', 'installation']
order: "2"
---
RBLN SDK는 아래와 같이 파이썬(Python) 환경에서 간단하게 설치 할 수 있습니다.

```
pip3 install --extra-index-url https://pypi.rbln.ai/simple rebel-compiler==<latest-version> optimum-rbln==<latest-version> vllm-rbln==<latest-version>
```
 
최신 패키지 버전을 확인하려면 <a href="https://docs.rbln.ai/supports/release_note.html" class="underline" target="_blank">릴리스 노트</a>를 참고해주세요. 사용자의 환경에 따라 추가적인 파이썬 패키지 의존성이 있을 수 있습니다.