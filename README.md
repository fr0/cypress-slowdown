# cypress-slowdown

Demonstrates slowdown between Cypress 3.2.0 and Cypress 3.3.2 (beta).

A trivial angular app with a single cypress test.

## Running

1. Run `yarn install`
2. Run `yarn start`, and wait for the compile to finish
3. Open another shell
4. Run `./cy320` (uses Cypress 3.2.0). Observe timing log that is printed.
5. Run `./cy332` (uses Cypress 3.3.2 beta). Observe timing log that is printed.

The `cy332` script relies on Mac OS.  Change it accordingly if you're using a different OS.

On my machine, the time is approximately 4800ms with 3.2.0, and 10500ms with 3.3.2.

