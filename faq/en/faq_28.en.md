---
title: "I get errors during language model compilation and inference."
slug: "compile-inference-error"
lang: "en"
permalink: "faq/{{ slug }}.en.html"
author: "Jiwon"
createdDate: "2025-03-31"
categories: ["Support & Troubleshooting"]
tags: ["compile", "error"]
primaryCategory: "Support & Troubleshooting"
order: "4"
---
Please check the following items:

- Memory Usage: If the system runs out of memory during compilation, the process may fail.

- NPU Configuration: Ensure that the value of `rbln_tensor_parallel_size` is not greater than the actual number of devices installed in your system. You can verify the number of devices by running the `rbln-stat` command in your terminal.

- Docker Environment: Refer to the <a href="https://docs.rbln.ai/en/software/system_management/docker.html" class="underline" target="_blank">Docker Guide</a> for more details.
