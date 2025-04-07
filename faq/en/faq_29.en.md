---
title: "CPU usage is too high during model inference."
slug: "cpu-usage"
lang: "en"
permalink: "faq/{{ slug }}.en.html"
author: "Jiwon"
createdDate: "2025-03-31"
categories: ["Support & Troubleshooting", "Optimization & Application"]
tags: ["cpu", "inference"]
primaryCategory: "Support & Troubleshooting"
order: "5"
---

You can limit the number of CPU threads used during inference by setting the `RBLN_NUM_THREADS` environment variable. Specifying an appropriate number of threads can reduce CPU load and help stabilize performance.

Pleae refer to this <a href="https://docs.rbln.ai/en/software/api/troubleshoot.html#1" class="underline" target="_blank">document</a> for more details.
