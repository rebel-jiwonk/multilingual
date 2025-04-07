---
title: "How do I process video input files (.mp4)?"
slug: "video-file"
lang: "en"
permalink: "faq/{{ slug }}.en.html"
author: "Jiwon"
createdDate: "2025-03-31"
categories: ["Optimization & Application"]
tags: ["mp4", "video", "optimization"]
primaryCategory: "Optimization & Application"
order: "6"
---
To process video files, you can use libraries like OpenCV (cv2) to extract each frame from an `.mp4` file as an image, and then feed those frames into the model for inference.

For example, when using an object detection model like YOLOX, the typical procedure is as follows:

1.Load the video file using cv2.VideoCapture
2.Extract frames one by one
3.Preprocess each frame to match the model’s input format
4.Perform object detection using the model
5.Visualize the results and either save them or display them in real time
