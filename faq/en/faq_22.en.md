---
title: "How can I fine-tune models or optimize inference?"
slug: "inference-optimization"
lang: "en"
permalink: "faq/{{ slug }}.en.html"
author: "Jiwon"
createdDate: "2025-03-31"
categories: ["Product & Compatibility"]
tags: ["inference", "fine-tuning"]
primaryCategory: "Optimization & Application"
order: "7"
---
Rebellions devices are designed exclusively for inference, and fine-tuning is not currently supported.

To maximize inference performance, we recommend the following optimization strategies:

- Use Mixed Precision and Quantization: Improve memory efficiency and compute speed by using FP16 or INT8 quantized models.

- Adjust Batch Size: Find the optimal batch size based on model characteristics and input data to increase throughput.

- Refactor Model Architecture: Simplify the computation graph through layer fusion and removal of redundant operations to boost performance.

- Double Buffering: Utilize double buffering in `AsyncRuntime` to improve execution efficiency.

- Apply Continuous Batching for LLM Serving: For large language model (LLM) serving, maximize hardware utilization by applying continuous batching techniques using `vllm-rbln`.