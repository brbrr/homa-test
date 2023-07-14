# Homa games test

## Solution

### Requirements

- Node and npm installed. I'm using Node v16.18.0 for now.

### Installation

```
npm install
```

### Run the tests

```
npm test
```

### Generate the report

```
test:report
```

Additionally, reports will be automatically generated on the test failure.

## Notes

- I've tried implementing the tests using Cypress, but then I realized it's multi-tab limitations. While there are workarounds, I wasn't satisfied with them. I've decided to use Playwright instead.
- The site under test is using styling solution that makes it hard to find deterministically locate elements. Wrapping styling into custom classes or adding custom/test attributes would make it easier to write tests.
- Due to the simplicity of the task, I've decided to opt-out of using PageObject pattern. But it could be easly implemented if needed.
