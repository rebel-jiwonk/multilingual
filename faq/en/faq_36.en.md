---
title: "Is RBLN SDK compatible with PyTorch?"
slug: "pytorch-compatibility"
lang: "en"
permalink: "faq/{{ slug }}.en.html"
author: "Jiwon"
createdDate: "2025-03-31"
categories: ["Using the SDK", "Product & Compatibility"]
primaryCategory: "Using the SDK" 
tags: ['pytorch', 'compatibility', 'features']
order: "6"
---
RBLN SDK offers high compatibility with PyTorch-based models.

• `torch.compile()` Support: Fully compatible with PyTorch 2.0’s `torch.compile()` feature, and supports models compiled using TorchDynamo and TorchInductor backends.

• Extensive Operator Support: The RBLN Compiler supports most PyTorch operators. You can check the full list in <a href="https://docs.rbln.ai/misc/supported_ops_pytorch.html" class="underline" target="_blank">Supported Ops</a>. It also includes major operators for Vision, NLP, and Audio, making it suitable for a wide range of deep learning models.

• PyTorch Model Zoo Compatibility: Popular models such as ResNet, YOLO, LLaMA, and BERT are supported. See the <a href="https://docs.rbln.ai/misc/pytorch_modelzoo.html" class="underline" target="_blank">PyTorch Model Zoo</a> page for more details.

• JIT/Scripted Model Support: Models converted using TorchScript can also be processed by the RBLN Compiler.