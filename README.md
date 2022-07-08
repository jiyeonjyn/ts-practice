# ts-practice

- typescript

  ```bash
  $ npm init -y
  $ npm i typescript -D (devDependency)
  $ npx tsc —init (tsconfig.json 파일 생성)
  $ npx tsc (컴파일 .ts → .js)
  $ node dist/index.js
  ```

- ts-node : 자바스크립트로 변환하지 않고 타입스크립트 실행

  ```bash
  $ npm install ts-node --save-dev
  $ npx ts-node src/index.ts
  ```

- typescript와 ts-node를 글로벌로 설치하면 npx 없이 `tsc`, `ts-node` 명령어 바로 사용 가능

  - 글로벌 설치 시 권한 오류 해결 방법

    ```bash
    $ sudo chown -R $(whoami) $(npm config get prefix)/{lib/node_modules,bin,share}
    ```

- package.json의 script에 단축 명령어 작성

  ```json
  "scripts": {
      "start": "tsc && node dist/index.js",
      "dev": "nodemon --exec ts-node src/index.ts"
  },
  ```

- `tsconfig.json` : [https://www.typescriptlang.org/ko/tsconfig](https://www.typescriptlang.org/ko/tsconfig)

- Declaration Files : `(js파일명).d.ts`

- JSDoc

  - JavaScript 파일의 최상단에 `@ts-check`를 주석으로 추가한 후 JSDoc 형식의 주석(`/** ... */`)을 추가하여 타입 힌트 제공
  - JavaScript 파일의 원래 코드는 건드리지 않으면서 TypeScript처럼 타입 및 에러 체크 가능
