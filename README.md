# 퍼피티아이(puppy-ti) - Github
## 목차
- [프로젝트 소개](#프로젝트-소개)
- [프로젝트 디자인](#프로젝트-디자인)
- [MBTI 퍼센트 산출 가이드](#mbti-퍼센트-산출-가이드)
- [MBTI 퍼센트 산출 예시](#mbti-퍼센트-산출-예시)
- [프로젝트 기여방법](#프로젝트-기여방법)
- [오픈 소스 라이센스](#오픈-소스-라이센스)
- [대표 정보](#대표-정보)
- [전하는 말](#전하는-말)

<br>

## 프로젝트 소개
### 프로젝트 명
한글명 : 퍼피티아이 <br>
영문명 : PuppyTI
<br>


### 프로젝트 의도
내가 키우는 강아지는 어떤 성향을 가지고 있는지 궁금증을 해소하기 위해 만들어진 프로젝트
<br>


### 프로젝트 분석
요즘 mbti의 존재가 알려진 이후로 많은 사람들이 자신의 성향에 대해 알게 되고 더욱 정밀하게 분석 혹은 재미로 자신의 성향을 끊임없이 테스트 하는 사람들이 많아졌다.
이후 본인의 성향을 테스트하는 앱 또는 사이트가 많이 생겨났고 동식물 혹은 사물까지 나라면 어떤 캐릭터인지 대입하여 결과를 카톡으로 공유하거나 친구들끼리 얘기 나누는 것을 자주 볼 수 있다.

이런 성향 테스트는 심도 높은 결과를 출력하는 게 아닌 이상 한 번 결과가 나오면 그 뒤로 테스트를 다시 하지 않기 때문에 끊임없이 사용자를 유입을 하려면 창의적인 캐릭터를 계속해서 만들어 성향 테스트를 여러 버전으로 만들어야 한다.
사람에 대한 성향 테스트는 넘쳐나지만 동물들 굳이 한 가지 생명체를 뽑자면 강아지 즉 나의 반려견을 테스트할 수 있는 앱은 흔하지 않다.

사람들이 사람전용(나를 위한) 성향 테스트를 하면서 나의 반려견은 어떤 성향을 가지고 있는지 알고 싶어 하는 주인들이 많이 생겨났고 그들을 타깃으로 니즈를 분석하여 현존하는 반려견 테스트 보다 특별하고 퀄리티 있는  반려견 성향 테스트 프로젝트를 만들면 좋을 결과를 얻을 수 있을 것이라 여겨진다.
<br>

### 프로젝트 기획서
https://docs.google.com/presentation/d/1hI9ijlBPItc1ybzdTasFByNJ8ISUOFvNnqJiEgMUytY/edit?usp=sharing

<br>

## 프로젝트 디자인
  <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 15px">
  <img style="display:block" src="https://github.com/2D0/puppy-ti-next/assets/70118192/62bc7a03-4331-4e5e-b22b-b43865ed5e44" width="32%">
  <img style="display:block" src="https://github.com/2D0/puppy-ti-next/assets/70118192/e74962fc-be7e-41d0-9108-e3b7743059a7" width="32%">
  <div width="32%"></div>
  <img style="display:block" src="https://github.com/2D0/puppy-ti-next/assets/70118192/8cfdf4e8-5707-4999-88a6-3baf47429612" width="32%">
  <img style="display:block" src="https://github.com/2D0/puppy-ti-next/assets/70118192/8b1ec608-8bf9-4bef-836a-a91bd39fabd7" width="32%">
  <img style="display:block" src="https://github.com/2D0/puppy-ti-next/assets/70118192/6de71125-950e-4136-bbaa-1f9be8b74af0" width="32%">
  <img style="display:block" src="https://github.com/2D0/puppy-ti-next/assets/70118192/4d8d5fce-1231-4f42-8a46-9a03a2a5ce2f" width="32%">
  <div width="32%"></div>
  <img style="display:block" src="https://github.com/2D0/puppy-ti-next/assets/70118192/4f1f385d-714a-4ccf-9807-16085482ddb2" width="32%">
  <img style="display:block" src="https://github.com/2D0/puppy-ti-next/assets/70118192/d4486bad-f75b-4776-8e4f-6a9e4846f84a" width="32%">
  <img style="display:block" src="https://github.com/2D0/puppy-ti-next/assets/70118192/65755171-a26a-45ba-91b2-8b0e7ca22044" width="32%">

</div>

<br>

## MBTI 퍼센트 산출 가이드
### 상수
```
기준점                 : 100점
MBTI 종류 선택 점수      : [low = 1점, middle = 2점, high = 3점]

무효(center) 선택 시 결과 : [(I or E = I), (N or S = N), (F or T = F), (P or J = P)]
무효(center) 선택 이벤트  : 무효(center) 선택 시 속 선택한 질문은 무효처리 되어 'MBTI별 문항 총 개수'가 하나 차감된다.
- 단 모든 질문을 무효로 할 경우 INFP 100%로 결과가 나온다. -

문항 총 개수             : 32개
MBTI별 문항 총 개수       : 8개
MBTI 타입               : 4개 [Energy, Information, Lifestyle, Decisions]
MBTI 타입 결과           : 8개[ [I, E, N, S, F, T, P, J]
MBTI 조합 결과           : 16개 [INFJ,INFP, ... , ESTJ]

문항별 선택지 개수         : 2개 [아니다, 그렇다] => 즉 속성의 결과가 2개라는 뜻 ex) 아니다 = F, 그렇다 = T
문항별 선택지 속 점수 개수   : 3개 [1(low), 2(middle), 3(high)]
문항별 선택지 속 점수 총 개수 : 6개 [{1(low), 2(middle), 3(high)} × 2(아니다, 그렇다)]
문항별 선택지 속 최고 점수   : 3점(high)
```


### 변수
```
MBTI 타입 결과 선택 개수
MBTI 타입 결과 비 선택 개수 : MBTI별 문항 총 개수 - MBTI 타입 결과 선택 개수
무효(center) 선택 개수
```


### MBTI 결과 산출 (MBTI 종류별 점수가 더 높은 쪽이 선택 됨)
```
[(I × 5) > (E × 3) = I] +
[(S × 3) < (N × 5) = N] +
[(T × 6) > (F × 2) = T] +
[(J × 8) > (P × 0) = J]
= INTJ
```


### 문항 1개당 MBTI 타입 점수
```
문항별 채택 된 속성 1개 점수   : MBTI 종류 선택 점수
문항별 비 채택 된 속성 1개 점수 : 문항별 선택지 속 최고 점수 - MBTI 종류 선택 점수
MBTI 타입 채택             : 문항별 선택지 속 [아니다, 그렇다]를 선택한 쪽에 따라 MBTI 타입이 채택 됨 ➝ T > F =  T
```


### MBTI 종류 최종 퍼센트 산출
```
MBTI 타입 결과 점수 : (문항별 채택 된 속성 1개 점수 * MBTI 타입 결과 선택 개수) + (MBTI 타입 결과 비 선택 개수 * 문항별 비 채택 된 속성 1개 점수)
MBTI 타입의 각 1점 : 기준점 ÷ (MBTI별 문항 총 개수 - 무효(center) 선택 개수) ÷ 문항별 선택지 속 점수 총 개수
MBTI 타입 퍼센트   : 기준점 ÷ {(MBTI별 문항 총 개수 - 무효(center) 선택 개수) × 문항별 선택지 속 최고 점수} × MBTI 타입 결과 점수
```

<br>

## MBTI 퍼센트 산출 예시

### MBTI 종류와 점수가 산출 되는 과정
```
간식을 주면 순식간에 그 자리에서 먹어치운다. ➝ 그렇다 = P / 아니다 = J
보호자의 말대로 잘 이행하고 특기가 많다.    ➝ 아니다 = P / 그렇다 = J

위 상황은 P or J를 산출하는 질문이지만 “그렇다” or “아니다” 선택에 따라 결과가 바뀌는 상황이다.
이런 경우를 위해 질문 데이터마다 MBTI 타입 결과 알파벳을 넣어 “그렇다”일 경우 그대로 “아니다”일 경우 반대의 MBTI 알파벳으로 산출되게 한다.
```


### 문항별 MBTI 타입 결과 점수
```
MBTI 종류 결과 : T [ T(3점) > F(없음) =  T ]
문항별 T 퍼센트 : 100 ÷ 6 × (2 + 3) = 83.333333 => 83% (반올림으로 소수점 없앨 것)
문항별 F 퍼센트 : 100 - 83(MBTI 종류가 채택된 경우) = 27%
```


### MBTI 타입 결과 퍼센트 (최종 단계)
```
T & F 문항 개수 : 8개
무효 개수       : 2개

T 채택 개수     : 4개 (low:1×1개 + middle:2×1개 + high:3×2개)
T 선택한 점수    : 9점
T 비 선택한 점수 : 2점 (middle:2×1개)
T 총 점수      : 11점

F 채택 개수     : 2개 (low:1×1개 + high:3×1개)
F 선택한 점수    : 4점
F 비 선택한 점수 : 3점 (low:1×1개 + middle:2×1개)
F 총 점수       : 7점

T 최종 퍼센트    : 100 ÷ {(8 - 2) × 3} × 11 = 61.111점 => 61점(반올림)
F 최종 퍼센트    : 100 ÷ {(8 - 2) × 3} × 7 = 38.8888889점 => 39점(반올림)
```

<br>

## 프로젝트 기여방법

1. [여기로](https://github.com/2D0/puppy-ti-next/fork) 접속 후 Fork 하기.<br>
2. `git checkout -b feature/thx이름` 명령어로 새 브랜치를 만들기.<br>
3. `git commit -am 'Add some 작업 내용'` 명령어로 Commit 하기.<br>
4. `git push origin feature/thx이름` 명령어로 브랜치에 Push 하기.<br>
5. [여기로](https://github.com/2D0/puppy-ti-next/pulls) 접속 후 작업한 부분을 캡쳐해 사진을 등록하고 작업 설명 작성 후 Pull request 하기.

<br>

### 개발 환경 설정
```bash
yarn dev
```
<br>

### 커밋 메시지 규칙
```
Feat      : 새로운 기능 추가
Fix       : 버그 수정
Build     : 빌드 관련 파일 수정
Ci        : CI 관련 설정 수정
Docs      : 문서 수정 (추가, 수정, 삭제), 패키지 매니저 수정(ex .gitignore 수정 같은 경우)
Style     : 코드 스타일 수정
Design    : css scss 등 style 작업
Refactor  : 코드 리팩토링
Test      : 테스트 코드, 리팩토링 테스트 코드 추가
Chore     : 자잘한 수정, 빌드 업무 수정
Etc       : 사진, 폰트 등 아이템 추가
Delete    : 파일 및 디렉토리 삭제
```


### Css 작업 시 z-index 규칙
```
* 한 칸의 블럭 뒤로 보낼 경우 *
블럭-1	: -1
블럭-1	: -2
블럭-1	: -3

* 여러개의 블럭 뒤로 보낼 경우 *
다수블럭-1 : -10
다수블럭-1 : -11
다수블럭-1 : -12

* 한 칸의 블럭 위에 올릴 경우 *
블럭+1	: 1
블럭+2	: 2
블럭+3	: 3

* 여러개의 블럭 위에 올릴 경우 *
다수블럭+1 : 10
다수블럭+2 : 11
다수블럭+3 : 12

* 버튼, 이미지 등 특정 컴포넌트 *
버튼+1	: 100
버튼+2	: 101
버튼+3	: 102

* 최 상단에 있어야 할 특정 컴포넌트 *
헤더         : 996
사이드메뉴 배경 : 997
사이드메뉴     : 998
모달 배경     : 999
모달         : 1000
```
↓↓ z-index 예시 코드
```css
  .modal{
  z-index:1000;
}
.modal-background{
  z-index:999;
}
```

<br>

## 오픈 소스 라이센스

폭죽 아이콘  : [Freepik - Flaticon](https://www.flaticon.com/kr/free-icon/fireworks_8175405?term=%ED%8F%AD%EC%A3%BD&page=1&position=5&origin=search&related_id=8175405)<br>
개 산책 아이콘  : [photo3idea_studio - Flaticon](https://www.flaticon.com/kr/free-icon/dog-walking_3827181?term=%EA%B0%9C+%EC%82%B0%EC%B1%85&page=1&position=1&origin=search&related_id=3827181)

<br>

## 대표 정보

대표 관리자 - 이다영 <br>
대표 명 - 메이크 트리<br>
대표 메일 - maketree0615@gmail.com<br>

깃허브 - [2d0-gitgub](https://github.com/2D0) <br>
<div style="display: flex; align-items: center">
  <img src="https://github.com/2D0/puppy-ti-next/assets/70118192/7a95e248-e951-46f5-8a2f-87c05c26d781" alt="maketree로고" height="40px">
</div><br>

<br>

## 전하는 말

퍼피티아이 프로젝트에 관심을 가져주셔서 대단히 감사합니다.<br>
프론트 개발자라는 목표가 생기고 나만의 프로젝트를 만들어야겠다 생각 들어<br>
인생 첫 프로젝트로 퍼피티아이를 기획하여 작업하게 되었습니다.<br>
비 전공자로서 프론트 개발을 독학으로 하다 보니 보니 부족한 점이 많지만<br>
완성도 높은 작업물을 만들기 위해 끊임 연구하고 공부하며 심혈을 기울이고 있습니다.<br>
앞으로도 개인 프로젝트를 꾸준히 만들고 싶어 메이크 트리라는 대표 명을 만들게 되었고,<br>
퍼피티아이 프로젝트가 끝난 후에도 새로운 프로젝트를 기획하여 작업할 계획입니다.<br>
조언과 피드백 언제나 환영하며 잘 부탁드립니다.<br>


puppy-ti ver.1 작업 후 next.js로 refactoring 하고 있어 화면 출력과 작동이 원활하지 못 한 점 이해해 주시면 감사하겠습니다. 