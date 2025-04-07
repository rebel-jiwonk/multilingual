---
title: "How do I install RBLN SDK?"
slug: "rbln-sdk-installation"
lang: "en"
permalink: "faq/{{ slug }}.en.html"
author: "Jiwon"
createdDate: "2025-03-31"
categories: ["Installation & Setup", "Using the SDK"]
primaryCategory: "Installation & Setup"
tags: ['rbln sdk', 'installation']
order: "2"
---
The RBLN SDK can be easily installed in a Python environment as follows:

```
pip3 install --extra-index-url https://pypi.rbln.ai/simple rebel-compiler==<latest-version> optimum-rbln==<latest-version> vllm-rbln==<latest-version>
```

To check the latest package versions, refer to the <a href="https://docs.rbln.ai/supports/release_note.html" class="underline" target="_blank">Release Notes</a>. Depending on your environment, additional Python package dependencies may be required. 