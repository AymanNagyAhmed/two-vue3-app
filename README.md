Title
===
Two VueJs apps
## Information
- Title:  `Two VueJs apps`
- Authors:  `AYMAN NAGY AHMED`
- Preprint: [https://arxiv.org/abs/xx]()

## References
- [quizzes app]()
- [notes app]()


## Install & Dependence
- nodejs


## Use
- switch to one of this branches (quizes-app, notes-app)
  ```
  $ git checkout quizes-app

  $ npm install

  $ npm run dev -- --port 3000
  ```

## Directory Hierarchy
```
|—— .gitignore
|—— index.html
|—— package-lock.json
|—— package.json
|—— postcss.config.js
|—— public
|    |—— favicon.ico
|—— src
|    |—— App.vue
|    |—— assets
|        |—— index.css
|    |—— components
|        |—— Card.vue
|        |—— Question.vue
|        |—— QuizHeader.vue
|        |—— Result.vue
|        |—— Test.vue
|    |—— data
|        |—— quizzes.json
|    |—— main.js
|    |—— router
|        |—— index.js
|    |—— views
|        |—— AboutView.vue
|        |—— HomeView.vue
|        |—— NotFound.vue
|        |—— Quiz
|            |—— QuizView.vue
|            |—— QuizzesView.vue
|—— tailwind.config.js
|—— vite.config.js
```
## Code Details
### Tested Platform
- software
  ```
  OS: Debian unstable (May 2023), Ubuntu LTS
  Nodejs: 20.09.0
  npm: 10.1.0
  ```
  
## License
MIT

