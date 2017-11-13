## Opening Overview**
We are gonna talk about IDS, what it is, how to use it, and blah blah

# Why Use
  - Limitation as with Functional Programming / Redux
  - Can we predict the output of this program?
    - Can there be other sources of mutation?
    - Can it be asynchronous?
    - Does the program have a state that will give different outputs?
    - Does the program knows about time?
    - State: value of an identity at a time
  - Our Problem - Managing State
    - Variable, if not immutable, is not up to state (how do I know there are still the same?)
    - Set of variables cannot be used as valid composite state
    - Variable is not up for state manageement/transition
      - No time coordination
  ### How Can We Get/Observe the State (the Value of An Identity) Without Disrupting the Process?
  - **Recap: Side effects and mutabilities should be avoided**

#Here Enteres IDS: Implementation That Is Fast and Lean
  - Performance Guarantee + All old ver, not just last one, no decay
  - Array - Vector
    - Here is tree / trie!
    - Bitmapped vector trie!
    - Structural sharing
  - Object - Hash Map
    - Hash Array Mapped Trie
    -
  - **Recap: Implement via Structure-sharing / Trie**

# Using Immutable.js, with React & more.
  - Syntax in Mori / Immutable
    - Example
    - Example
  - Use in React
    -
    -
  - Point 3
  - **Recap: Mori, Immutable.js, Example**

# Closing Recap
