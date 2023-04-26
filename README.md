# 3D Design Code

[3D 기본구축 웹에서 확인하기!](https://3-d-design-code-basic.vercel.app/)

![image](https://user-images.githubusercontent.com/46777310/234600910-aedfe671-3204-41a4-8a9b-94266dd253de.png)


## GLTF 2.0으로 변환하는 과정

기존 GLTF는 JS로 사용하기에 무겁거나, 랜더링이 잘 되지 않는 경우가 생길 수 있음

> gltf-pipeline을 전역으로 설치하여 변환 라이브러리를 설치한다.

```
npm install -g gltf-pipline
```

GLTF파일이 있는 경로로 이동하여 다음 명령 실행

> gltf-pipeline -i (대상.gltf) -o (추출될.gltf) -d

이렇게 GLTF 2.0을 생성하고 필요에 따라 GLTF 파일을 JSX로 변환하고 싶은 경우

> npx gltfjsx (추출된.gltf)

를 입력하여 변환이 가능하다.

3D의 기본 요소는 아래와 같음

### 장면

![image](https://user-images.githubusercontent.com/46777310/234568999-f6aa3691-7387-4cd9-a883-0ccfa57cc640.png)

### 물체

![image](https://user-images.githubusercontent.com/46777310/234569077-d406d431-7942-4377-9810-c56ac7fdc95c.png)

### 광원

![image](https://user-images.githubusercontent.com/46777310/234569186-930d80e8-352f-4b3c-ba2b-4b0720e75b9e.png)
