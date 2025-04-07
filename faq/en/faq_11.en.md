---
title: "Can I run inference on multiple devices?"
slug: "multi-npus"
lang: "en"
permalink: "faq/{{ slug }}.en.html"
author: "Jiwon"
createdDate: "2025-03-31"
categories: ["Optimization & Application", "Product & Compatibility"]
primaryCategory: "Optimization & Application"
order: "1"  
tags: ['npu', 'multidevice']
---
The RBLN SDK supports distributed inference based on tensor parallelism, called RSD (Rebellions Scalable Design).
Please first check the <a href="https://docs.rbln.ai/en/software/optimum/optimum_rbln.html#multi-npu-rsd" class="underline" target="_blank">Model List</a> that support multi-device, and refer to the provided <a href="https://docs.rbln.ai/en/software/optimum/tutorial/llama3-8B.html#npu" class="underline" target="_blank">example</a> for compilation instructions.
