# Overview
This webapp serves as the submission to the technical exercise for Maihem's recruitment process.
https://www.figma.com/board/gdp9kWPmC4uLLOebgO33i1/maihem-chat-ui?node-id=8-2148&t=sf7BpifNCoPfVy5X-4

# Steps taken to accomplish this assignment

# Development
- (Optional, recommended) Start `docker` container to avoid version conflicts.
```sh
docker run -it --rm \
    --name maihemchatui \
    -v ./webapp:/app \
    -w /app \
    -p 3000:3000 \
    node:23 \
        /bin/bash
```
- Start local server in dev mode
```sh
npm run dev
```
- Install npm dependencies
```sh
# RE-ENTER DOCKER CONTAINER
docker exec -it maihemchatui /bin/bash

# INSTALL shadcn/ui COMPONENT(S)
npx shadcn@latest add button

# INSTALL OTHER DEPENDENCIES
npm install openai
```

# Build
```sh
```

# Run
```sh
```