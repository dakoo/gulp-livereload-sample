---
layout: post
title: 편리한 front-end 개발을 위한 gulp-livereload 예제
description: 편리한 front-end 개발을 위한 gulp-livereload 예제
modified: 2015-07-07
---

gulp-livereload는 클라이언트(Front-end)이 파일을 변경했을때, 개발자가 브라우저를 클릭하거나 F5 키를 이용해 refresh하지 않고도 자동으로 refresh하는 기능을 제공한다. 빠른 개발을 위해 반드시 사용해 보자. 

## 사전 준비

예제를 위해 [초 간단 hapi 서버](http://dakoo.github.io/hapi.js/very-simple-hapi-server-sample/) 개발 환경이 설정되어 있어야 한다. 

## gulp와 필요한 모듈 설치

### global gulp 설치 

Command Prompt에서 `npm install -g gulp`명령으로 gulp를 시스템에 설치한다. 

### 프로젝트에 gulp 모듈 설치와 설정

1. 프로젝트에 필요한 gulp 모듈을 설치하기 위해 client 폴더로 이동한다. 
2. node 모듈 설치를 위해 client 폴더에서 Command Prompt로 `npm init`을 실행한다. 
3. client 폴더 내에 gulp 모듈과 reload 기능에 필요한 gulp plugin을 `npm install --save-dev gulp gulp-watch gulp-livereload` 명령으로 설치한다. 
4. client 폴더에서 **gulpfile.js**를 만들고 내용을 작성한다. 폴더를 추가하면 많은 수의 폴더의 변경을  모니터링할 수 있다. 

## 브라우저 준비

크롬 브라우저를 실행해서 **livereload** extension을 설치한다. 

### 테스트

#### 서버 구동 

server 폴더로 이동해 Command Prompt를 통해 `node .`명령으로 서버를 구동한다. 

#### gulp watch 실행 

아래 둘 중의 한 방법을 이용한다. 
- Command Prompt를 이용해 client 폴더에서 `gulp watch` 명령을 실행한다. 이것은 client 폴더의 변경 사항을 모니터링하고 크롬 브라우저와 통신을 할 것이다.
- WebStormㅇ을 사용하고 있다면 프로젝트 탐색기의 gulpfile.js 위에서 마우스 오른쪽 버튼을 눌러 **Show Gulp Tasks**를 실행하면 gulp task 창이 떠서 task들이 표시된다.
이때 'watch'버튼을 더블 클릭해서 watch task를 실행한다.  

#### 크롬에서 확인

1. 크롬에서 서버로 접근한다. *http://localhost:3000/index.html*
2. 크롬의 Livereload icon을 눌러서 가운데가 검정이 되는 것을 확인한다.
3. client/index.html의 내용 중 *hello, hapi!*를 *hello, gulp!*로 수정한다. 
4. 크롬에서 자동 refresh되어 내용이 *hello, gulp!*로 바뀌는지 확인한다. 
