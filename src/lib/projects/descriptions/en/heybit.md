# Heybit / Digital Asset Deposit System

Heybit was generating revenue as a robo advisor product that managed entrusted digital assets according to user-selected investment strategies using self-developed quant algorithms, taking a portion of profits as fees. This project was to develop a new digital asset deposit system to create new revenue streams.

While the existing product was a Fund product that could incur principal loss, the deposit service (Harvest) was similar to a general deposit product that pays fixed interest.

However, weekly interest payment was required (compound interest), and it was a product that calculated and paid pro-rata without separately specifying contract periods, so development wasn't possible with a simple form that calculated compound interest up to the withdrawal date. Since it was critical that interest wasn't duplicated or missed when servers were unstable, significant effort was required for `Idempotency`. Much consideration was given to issues that could occur in distributed systems.

Since this was work directly handling assets, bugs would be fatal, so `TDD` was used with e2e and unit test coverage > 80%. Of course, test cases beyond what coverage expresses were written for major logics.

At initial launch, a gap was discovered during monitoring where interest could be incorrectly paid in certain cases, but the issue was resolved through `full DB inspection` and `manual checks`.

💡 Zero asset incidents during approximately 2 years of project operation

## Key Points

- Assets under management scale `AUM 22 billion KRW`
- Zero asset incidents over 2 years
- `Weekly compound interest` payment according to blockchain/digital asset deposits and deposit service subscriptions
- Initially organized necessary planning/policies such as interest calculation base points for deposit system development and communicated with the team
- Designed/communicated/developed an automated blockchain withdrawal system to process user withdrawal requests
- Speed-focused content development for additional BM creation (e.g., auction / LockUp / Perry)

