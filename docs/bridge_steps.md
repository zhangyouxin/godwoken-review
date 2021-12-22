---
id: steps
title: Using tools to deposit, withdraw and unlock Funds on Godwoken
---



### Deposit 

#### Use the `gw-tools` to Deposit CKB onto Layer 2

To deposit CKBs onto Layer 2, execute the following command in the proper directory:

```
$ cargo run --bin gw-tools -- deposit-ckb --capacity <capacity> --config-path <config-path>  --privkey-path <privkey-path>  --scripts-deployment-path <scripts-deployment-path>
```
Replace with the values matching one's own account and information. 

Note: If the user applied the quick mode with godwoken-kicker, which already has a deposit function, the user can carry out the deposit operation directly on https://localhost:6100/.

---

### Withdrawal

There are **two steps** to withdraw assets from level 2 to level 1 on Godwoken, the first step is to make a withdrawal request. In comparison to deposits, withdrawals require more time. When a withdrawal is made to layer 1, the withdrawal depends on layer 2, but layer 2 has a lower level of security and for this reason, more confirmations will be required to ensure that security remains reliable.  From the time the withdrawal is made, it takes approximately 5 days until the amount of funds is actually released at level 1.

To withdraw funds from layer 2 to layer 1, execute the following `gw-tools` withdraw command, replace the variables with the values needed:

```
$ cargo run --bin gw-tools -- withdraw OPTIONS] --capacity <capacity> --config-path <config-path>  --privkey-path <privkey-path>  --scripts-deployment-path <scripts-deployment-path>

```
---

### Unlock 

Withdrawing funds from Godwoken is a two-step process. Step one initiates the withdrawal and step two releases the funds. Godwoken uses an optimistic rollup architecture that permits only one honest node in the network. All this provides a very secure foundation for Layer 2, but comes at the cost of a 5-day 'challenge period' when exiting from Layer 2. This is a period where the Layer 2 network operator gets time to examine and flag up any potential problems with malicious transactions and roll back if necessary. The five-day challenge period will begin once the withdrawal process has commenced. The five-day time interval is a bit long but necessary. 

To unlock the withdrawal cells to normal ckb cells and to perform common Layer2 actions, the [`account-cli tool`](https://github.com/nervosnetwork/godwoken-examples/tree/develop/packages/tools) will be applied. Execute the `account-cli tool` unlock command:

```
LUMOS_CONFIG_FILE=./kicker-lumos-config.json node ./packages/tools/lib/account-cli.js unlock --help
Usage: account-cli unlock [options]
``` 

Note: If `[INFO]: withdrawal cell not finalized` showed, it means that the five day challenge period has not been completed. 





