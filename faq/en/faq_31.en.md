---
title: "How can I improve the performance of transformer-based models like Llama or BERT?"
slug: "transformer-model"
lang: "en"
permalink: "faq/{{ slug }}.en.html"
author: "Jiwon"
createdDate: "2025-03-31"
categories: ["Using the SDK", "Installation & Setup"]
primaryCategory: "Using the SDK"
tags: ["transformer", "llama", "bert"]
order: "3"     
---

To maximize the performance of transformer-based models, consider the following:

- Set the `rbln_tensor_parallel_size` value appropriately to utilize NPU parallelism
- Tune the input sequence length and batch size