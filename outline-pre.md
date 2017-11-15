** Opening Overview
We are gonna talk about IDS, why should we care, how they are implemented, and how to use them in JavaScript

# What the Is the Problem it tries to solve
  - Mutable State
  - What is State?
    - def: Value of an Identity at a time
    - Example - react
  - What Can We Do?
    - Control / Coordinate the changes, e.g. Redux
    - Do not mutate at all
  - Wouldn't It Be Big and Slow?

# Here Enteres IDS: Implementation That Is Fast and Lean
  - Performance Guarantee + All old ver, not just last one, no decay
  - Array - Vector
    - Here is tree / trie!
    - Bitmapped vector trie!
    - Structural sharing
  - Object - Hash Map
    - Hash Array Mapped Trie
  - **Recap: Implement via Structure-sharing / Trie**

# Using Immutable.js, with React & more.
  - Syntax in Mori / Immutable
  - React Reconciliation
