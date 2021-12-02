---
id: faq
title: FAQ
---

**Q**: Why is it so easy to switch from Layer 1 to Layer 2 but why does it take so long in reverse?

**A**: Because Layer 1 is the more secure layer, Layer 2 can trust Layer 1 but L1 need more time to make sure everything is fine on L2, especially for optimistic rollup (a popular L2 solution). Every optimistic rollup L2 uses challenge mechanism in their withdrawal process. After you initiated a withdraw request, L1 put the withdrawal into a challenge period (~ 3 days), waiting for observers/challengers to report problems if found any, and the withdrawal is approved only if no challenge submitted. In this way L1 guarantees that every withdrawal is intact and that the funds kept on L2 are safe. Not only Godwoken, other optitmisc rollups like arbitrum and optimism also have such a challenge period, e.g. Arbitrum mandates a 7-day challenge period during withdrawal.

We're actively exploring ways to improve withdrawal experience and allow fast withdraw, please stay tuned.

**Q**: Why it requires an amount of 63 CKBs to an intermediate address to move funds back to Layer 1 when using Yokai 

**A**: This is a constraint of the current release of Godwoken (L2). Godwoken uses withdrawal recipient's account (actually a cell, in Nervos' term) on Nervos CKB (L1) to act as a identity authenticator. By having the recipient provide an account signature, Godwoken authenticate the receiver's identity and send the corresponding withdrawal funds. The recipient's account requires at least 63 CKBs to store on Nervos CKB (L1). Those 63 CKBs are still yours and can be claimed back if you don't need an account later. Actually anything stored on Nervos CKB (L1) requires some CKBs for its storage space, 1 CKB = 1 Byte. L1 storage is validated by global consensus thus it's scarce and need to be used carefully.

This constraint is a temporary mechanism and will be removed in future release. Godwoken is the world's first rollup running on a UTXO blockchain, the answer is not ready-made and we have to explore different ways to find the best design. It's your feedback and patience help us improve Godwoken and make it better in future iterations. Thank you.
