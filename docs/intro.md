---
slug: /
id: godwoken
title: Godwoken Introduction
sidebar_label: Godwoken Introduction
---
import useBaseUrl from "@docusaurus/useBaseUrl";

## Overview

[Godwoken](https://github.com/nervosnetwork/godwoken) is a layer 2 rollup framework that provides an abstracted account model and abstracted layer 2 transactions upon Nervos CKB.

[Polyjuice](https://github.com/nervosnetwork/godwoken-polyjuice) is an Ethereum compatible layer designed upon the Godwoken account model. Godwoken comes together with Polyjuice giving developers the ability to seamlessly deploy and run Ethereum contracts.

<img src={useBaseUrl("img/arch.png")}  width="40%"/>

Figure 1. Architecture of Godwoken

### Godwoken Public Networks

Testnet and Mainnet are provided for deploying Ethereum DApps to CKB.

- [Testnet](https://github.com/nervosnetwork/godwoken-testnet/tree/master/testnet)
  - RPC URL: https://godwoken-testnet-web3-rpc.ckbapp.dev/
  - Chain ID: 71393
  - Websocket RPC URL: ws://godwoken-testnet-web3-rpc.ckbapp.dev/ws
  - Explorer: https://aggron.layerview.io
- [Mainnet](https://github.com/nervosnetwork/godwoken-testnet/tree/master/mainnet)
  - RPC URL: https://mainnet.godwoken.io/rpc
  - Chain ID: 71394

  - Websocket RPC URL: https://mainnet.godwoken.io/ws

  - Explorer: https://www.layerview.io/


A Godwoken network can also be deployed locally. For more information, see the sections of Deployment.

### Current Version 

The current version available is the **Godwoken beta**. We still maintain various levels of control over the mainnet. 

**Why Godwoken Beta?**

It is the responsible way to make Godwoken available while we keep up improving the system before the official release.
Here is what you can do with Godwoken beta:

| features                    | maintainer | developer |
| :-------------------------- | :--------: | :-------: |
| deploy contract             |    yes     | trusted*  |
| deploy ERC20 proxy contract |    yes     |    no     |
| run full nodes              |    yes     |    no     |
| run readonly nodes          |    yes     |   yes**   |

During the Godwoken beta phase, the deploy contract feature is only open to developers allowed on the list. We need to upgrade the Godwoken beta or coordinate with developers in case of emergency. Developers or teams are welcome to participate in the Godwoken beta anyways.
In the current version, a readonly node cannot query mem-pool status.

Godwoken beta is limited to the following design choices:

1. An optimistic rollup-based design will be used
2. A single sequencer sort transactions and issue blocks

Beware of Scams and Rugs: Nervos is a permissionless platform. Anybody can deploy an instant of Godwoken. Users and developers must interact with the instant that they can trust.



## Deployment

### Deploy a Godwoken Network by Using Godwoken-Kicker

Godwoken-kicker is a one-line command to start a Godwoken network on **Devnet**. This deployment method helps developers deploy Ethereum contracts and quickly migrate Ethereum DApps to CKB Devnet in testing and development environments.

- RPC URL: http://localhost:8024
- Chain ID: 1024777

Godwoken-kicker provides a quick mode and a custom mode for deployment.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
  defaultValue="quick"
  values={[
    {label: 'Quick Mode', value: 'quick'},
    {label: 'Custom Mode', value: 'custom'},
  ]}>
<TabItem value="quick"><p>The quick mode is fast and simple. It executes the builds of all components from pre-built docker images.</p><b>Environment</b><p><ul><li>Ubuntu 20.04 LTS</li></ul></p><b>Prerequisites</b><p><ul><li><a href="https://docs.docker.com/engine/install/ubuntu/">Docker Engine</a></li><li><a href="https://docs.docker.com/compose/install/">Docker Compose</a></li></ul></p>

<p><b>Steps</b></p>

<ol> 
    <li><p>Clone the source of Godwoken-kicker.</p>
        <p>If it is already cloned, skip to the next step.</p>


```bash
$ git clone https://github.com/RetricSu/godwoken-kicker.git
```

</li>

<li><p>Initialize Godwoken-kicker.</p>

:::note

Stop any running Godwoken network by using the <code>make stop</code> command before initializing Godwoken-kicker. 

:::

```bash
$ cd godwoken-kicker
$ make init
```

<p>The <code>make init</code> command can be used in the following situations:</p>

<ul>
<li>It is the first time to start the Godwoken network.</li><li>The deployment mode is changed.</li><li>The CKB chain data and all layer 1 related cache data are deleted.</li></ul>


</li>

<li><p>Start the Godwoken network.</p>

<p>The <code>make start</code> command can be used to start the deployed Godwoken network. The <code>make start-f</code> command can be used to force deploy and start a new Godwoken network.</p>

```bash
$ make start
```
:::note

  Do note that after running the <code>make clean</code> command, run <code>make init</code> again if a reboot is desired. 

:::
<details><summary>Output</summary>
<p>



```bash
Building ckb
Building polyjuice
Building call-polyman
Building godwoken
Building web3
Starting docker_postgres_1 ... done
Starting docker_ckb_1      ... done
Starting docker_polyjuice_1    ... done
Starting docker_call-polyman_1 ... done
Starting docker_indexer_1      ... done
Starting docker_godwoken_1     ... done
Starting docker_web3_1         ... done

Run commands to monitor background activities: 

    make sg (Godwoken)
    make sp (Polyjuice)
    make web3 (web3)
    make call-polyman (setup service)

All Jobs Done       : [########################################] 100%

Great! Checkout http://localhost:6100 to deploy contract!
```

</p>
</details>

</li>

<li><p>Set up an Ethereum wallet.</p><p>In this example, a MetaMask (an Ethereum Wallet) wallet is set up for the deployment. Add the MetaMask extension in the browser (Firefox, Google Chrome, Brave or Microsoft Edge) and create an account for the wallet.</p><p>If there is a MetaMask wallet ready to be used, skip to the next step directly.</p></li>

<li><p>After the Godwoken network has been successfully launched, visit the website <a>http://localhost:6100</a> and connect the MetaMask wallet by clicking the <b>Connect Wallet</b> button.</p>

      RPC URL=http://localhost:8024
      CHAIN ID=1024777

</li>

<li><p>Deploy an ETH contract to the Godwoken network.</p><ol><li><p>Prepare and compile an ETH contract.</p></li>

<li>Deposit 400 CKB to the ETH wallet on the <b>ACCOUNTS</b> page of the Godwoken network.</li>

<li>Deploy the ETH contract that you have compiled on the <b>CONTRACT</b> page of the Godwoken network.</li></ol></li></ol>

</TabItem>
    <TabItem value="custom"><p>The custom mode is more flexible for custom requirements. It can build the components from local packages and executes the builds locally.</p><b>Environment</b><p><ul><li>Ubuntu 20.04 LTS</li></ul></p><b>Prerequisites</b><p><ul><li><a href="https://docs.docker.com/engine/install/ubuntu/">Docker Engine</a></li><li><a href="https://docs.docker.com/compose/install/">Docker Compose</a></li><li><a href="https://github.com/nervosnetwork/molecule">Moleculec</a></li><li>Rustup nightly</li></ul></p>

<p><b>Steps</b></p>

<ol>  
    <li><p>Clone the source of Godwoken-kicker.</p>
        <p>If it is already cloned, skip to the next step directly.</p>


```bash
$ git clone https://github.com/RetricSu/godwoken-kicker.git
```

</li>

<li><p>Set the mode with <code>true</code> under the <code>[mode]</code> section in the <code>/docker/.build.mode.env</code> file for the components that you want to build from local packages.</p>

```title="/docker/.build.mode.env"
####[mode]
MANUAL_BUILD_GODWOKEN=false
MANUAL_BUILD_WEB3=false
MANUAL_BUILD_SCRIPTS=false
MANUAL_BUILD_POLYJUICE=false
...
```

<p>(Optional) Configure component version under the <code>[packages]</code> section in the <code>docker/.build.mode.env</code> file.</p>

```title="/docker/.build.mode.env"
####[packages]
GODWOKEN_GIT_URL=https://github.com/nervosnetwork/godwoken.git
GODWOKEN_GIT_CHECKOUT=master
POLYMAN_GIT_URL=https://github.com/RetricSu/godwoken-polyman.git
POLYMAN_GIT_CHECKOUT=master
WEB3_GIT_URL=https://github.com/nervosnetwork/godwoken-web3.git
WEB3_GIT_CHECKOUT=main
...
```

</li>

<li><p>Initialize Godwoken-kicker.</p>

:::note

Stop any running Godwoken network by using the <code>make stop</code> command before initializing Godwoken-kicker.

:::

```bash
$ cd godwoken-kicker
$ make init
```

The <code>make init</code> command can be used in the following situations:

<ul><li>The first time to start the Godwoken network.</li><li>The deployment mode is changed.</li><li>The CKB chain data and all layer 1 related cache data are deleted.</li></ul>

</li>

<li><p>Start the Godwoken network.</p>

<p>The <code>make start</code> command can be used to start the deployed Godwoken network. The <code>make start-f</code> command can be used to force deploy and start a new Godwoken network.</p>

```bash
$ make start
```

<details><summary>Output</summary>
<p>


```bash
Building ckb
Building polyjuice
Building call-polyman
Building godwoken
Building web3
Starting docker_postgres_1 ... done
Starting docker_ckb_1      ... done
Starting docker_polyjuice_1    ... done
Starting docker_call-polyman_1 ... done
Starting docker_indexer_1      ... done
Starting docker_godwoken_1     ... done
Starting docker_web3_1         ... done

Run commands to monitor background activities: 

    make sg (Godwoken)
    make sp (Polyjuice)
    make web3 (web3)
    make call-polyman (setup service)

All Jobs Done       : [########################################] 100%

Great! Checkout http://localhost:6100 to deploy contract!
```



</p>
</details>

</li>

<li><p>Set up an Ethereum wallet.</p><p>In this example, a MetaMask (an Ethereum Wallet) wallet is set up for the deployment. Add the MetaMask extension in the browser (Firefox, Google Chrome, Brave or Microsoft Edge) and create an account for the wallet.</p><p>If there is a MetaMask wallet ready to be used, skip this and go to the next step directly.</p></li>  

<li><p>After the Godwoken network has been successfully launched, visit the website <a>http://localhost:6100</a> and connect the MetaMask wallet by clicking the <b>Connect Wallet</b> button.</p>

      RPC URL=http://localhost:8024
      CHAIN ID=1024777

</li>

<li><p>Deploy an ETH contract to the Godwoken network.</p>

<ol><li><p>Prepare and compile an ETH contract.</p></li><li><p>Deposit 400 CKB to the ETH wallet on the <b>ACCOUNTS</b> page of the Godwoken network.</p></li><li><p>Deploy the ETH contract that you have compiled on the <b>CONTRACT</b> page of the Godwoken network.</p></li></ol>

</li></ol>

</TabItem>
</Tabs>

For more information about the Godwoken-kicker commands, see [godwoken-kicker](https://github.com/RetricSu/godwoken-kicker).

### Deploy a Godwoken Network Manually

This deployment method is useful in situations such as deploying a Godwoken network on <b>Testnet</b> or <b>Mainnet</b>.

#### Environment

* OS: Ubuntu 20.04

#### Prerequisites

The following tools need to be installed before entering the deployment process:

* Node.js (>=12.0.0)

* Yarn (version 1.22.5 or above)

* GCC and make

  To install `GCC` and `make` on Ubuntu 20.04, run the following command as root or user with sudo privileges:

  ```bash
  $ sudo apt update
  $ sudo apt install build-essential
  ```

* [Capsule v0.7.0](https://github.com/nervosnetwork/capsule/releases/tag/v0.7.0)

* Docker

  **Docker** must be installed for building and deploying Godwoken. For more information about Docker installation, see [Install Docker Engine on Ubuntu](https://docs.docker.com/engine/install/ubuntu/).

  To manage Docker as a non-root user, see the Docker documentation of [Manage Docker as a non-root user](https://docs.docker.com/engine/install/linux-postinstall/).


- ckb-cli: The ckb-cli tool is used for deploying smart contracts. It can be installed from a [CKB pre-built installer package](https://github.com/nervosnetwork/ckb/releases). The verified ckb-cli version in this documentation is [v0.42.0](https://github.com/nervosnetwork/ckb/releases/tag/v0.42.0).

* Rustc v1.54.0

*  llvm and clang

  ```
  sudo apt-get install libclang-dev
  ```

* OpenSSL library

  ```
  sudo apt-get install pkg-config libssl-dev
  ```

* [Moleculec v0.7.2](https://github.com/nervosnetwork/molecule)

  To install Moleculec:

  ```bash
  $ cargo install moleculec --locked --version 0.7.2
  ```

* [Tippy](https://github.com/nervosnetwork/tippy/releases)

  Tippy is a tool to help set up and manage CKB nodes. For more information, see [Install a CKB Node by Using Tippy](https://cryptape.github.io/lumos-doc/docs/reference/ckbnode#install-a-ckb-node-by-using-tippy). The verified Tippy version in this documentation is [v0.3.2](https://github.com/nervosnetwork/tippy/releases/tag/v0.3.2).

:::note

The current user must have permissions to run ckb-cli, Capsule, Moleculec and docker. If the execution of these tools requires sudo commands, that may cause issues during the deployment process.

:::

#### Steps

1. Create a CKB account for the deployment.

   The account must have enough CKB capacity for the deployment.  For more information about CKB accounts and creating CKB accounts, see [CKB Accounts and Capacity](https://cryptape.github.io/lumos-doc/docs/reference/ckbaccount).

   Example:

   ```
   address:
     mainnet: ckb1qyqpadsep7yruydz5eaulty4xwc2sn6smhashalnjx
     testnet: ckt1qyqpadsep7yruydz5eaulty4xwc2sn6smhas2cpv76
   lock_arg: 0x1eb6190f883e11a2a67bcfac9533b0a84f50ddfb
   lock_hash: 0x499aa230ded32812a246778bc718f4d61a47497c1b7352211d241d2ad333ed75
   pk: 0xca02cc4b8e0e447e243204dd2e16a1692026bfdd4add502b203975999d3a6909
   ```

   :::note

   The account information in this documentation is only used for demonstration. Do **not** use these private keys, addresses and args elsewhere.

   :::

2. Start the CKB node and the CKB miner.

   1. Launch the Tippy dashboard.

      ```bash
      $ cd tippy-linux-x64
      $ ./Tippy
      ```

   2. Launch a CKB devnet if you haven't set up any chain yet and specify the miner with the account prepared for the deployment.

   3. Start the chain and the CKB miner on the Tippy dashboard.

3. Clone the Godwoken source.

   Open a new terminal window and run the following command to clone the Godwoken source:

   ```bash
   $ git clone --recursive https://github.com/nervosnetwork/godwoken
   ```

4. Deploy an SUDT script to the chain.

   For mor information, see [Nervos CKB Docs: Write an SUDT script by Capsule](https://docs.nervos.org/docs/labs/sudtbycapsule#introduction).

   Deploy plan  output example:

   ```shell
   $ capsule deploy --address ckt1qyqpadsep7yruydz5eaulty4xwc2sn6smhas2cpv76 --fee 0.0002
   Deployment plan:
   ---
   migrated_capacity: 0.0 (CKB)
   new_occupied_capacity: 17390.0 (CKB)
   txs_fee_capacity: 0.0002 (CKB)
   total_occupied_capacity: 17390.0 (CKB)
   recipe:
     cells:
       - name: my-sudt
         index: 0
         tx_hash: "0x07de15f8afbd4b55e5d11248f4cd9f5195c8d96f171af04e7f727042bb0643c6"
         occupied_capacity: 17390.0 (CKB)
         data_hash: "0xfe2a574febac93ef4da8e716403be072e4703da736676107d68a5e31b682943f"
         type_id: "0x5318897f71a58ca55b6325736b8170d92c49096719db7646427709a890a9eea0"
     dep_groups: []
   
   Confirm deployment? (Yes/No)
   y
   Password: 
   (1/1) Sending tx 07de15f8afbd4b55e5d11248f4cd9f5195c8d96f171af04e7f727042bb0643c6
   Deployment complete
   ```

   :::note

   The `tx_hash` and `data_hash` will be used in the next step to configure the `setup-config.json` file.

   :::

5. Prepare the following files under the `/godwoken/deploy` folder.

   - `pk`: The file stores the private key that is used to deploy Godwoken.

      Example:

      ```title="/godwoken/deploy/pk"
      0xca02cc4b8e0e447e243204dd2e16a1692026bfdd4add502b203975999d3a6909
      ```

   - `scripts-build.json`: The file specifies the pre-built docker image of Godwoken and the repositories of the other components like godwoken_scripts, godwoken_polyjuice and clerkb.

      Example:

         ```json title="/godwoken/deploy/scripts-build.json"
         {
             "prebuild_image": "nervos/godwoken-prebuilds:v0.6.9-rc1",
             "repos": {
                 "godwoken_scripts": "https://github.com/nervosnetwork/godwoken-scripts#master",
                 "godwoken_polyjuice": "https://github.com/nervosnetwork/godwoken-polyjuice#main",
                 "clerkb": "https://github.com/nervosnetwork/clerkb#v0.4.0"
             }
         } 
         ```

      For more information about the tags of the `prebuild_image`, see [nervos/godwoken-prebuilds](https://hub.docker.com/r/nervos/godwoken-prebuilds/tags?page=1&ordering=last_updated).

   - `setup-config.json`: The file provides configurations for the Rollup.

      - *`l1_sudt_script_type_hash`: The `data_hash` of the deployed SUDT script.
      - *`tx_hash` (under `l1_sudt_cell_dep`): The `tx_hash` of the deployed SUDT script.
      - *`cells_lock`: `cells_lock` is used to unlock/upgrade Rollup scripts. 
      - *`reward_lock`: `reward_lock` is used to receive challenge rewards. 
      - `burn_lock`: `burn_lock` is used to receive burned assets that can be unlocked.

      :::note

      The parameters marked with * must be configured with correct values to deploy Godwoken successfully.

      :::

      Example:

      ```json title="/godwoken/deploy/setup-config.json"
      {
        "l1_sudt_script_type_hash": "0xfe2a574febac93ef4da8e716403be072e4703da736676107d68a5e31b682943f",
        "l1_sudt_cell_dep": {
          "dep_type": "code",
          "out_point": {
            "tx_hash": "0x07de15f8afbd4b55e5d11248f4cd9f5195c8d96f171af04e7f727042bb0643c6",
            "index": "0x0"
          }
        },
        "node_initial_ckb": 1200000,
        "cells_lock": {
          "code_hash": "0x9bd7e06f3ecf4be0f2fcd2188b23f1b9fcc88e5d4b65a8637b17723bbda3cce8",
          "hash_type": "type",
          "args": "0x1eb6190f883e11a2a67bcfac9533b0a84f50ddfb"
        },
        "reward_lock": {
          "code_hash": "0x9bd7e06f3ecf4be0f2fcd2188b23f1b9fcc88e5d4b65a8637b17723bbda3cce8",
          "hash_type": "type",
          "args": "0x4ca5cf8a6339e89b6f80846f25c72c4fe0702daa"
        },
        "burn_lock": {
          "code_hash": "0x0000000000000000000000000000000000000000000000000000000000000000",
          "hash_type": "data",
          "args": "0x"
        }
      }
      ```


6. Set up Godwoken nodes.

   To set up Godwoken nodes:

   ```shell
   $ cd godwoken
   $ RUST_LOG=info cargo +nightly run --bin gw-tools setup -n 2 -k deploy/pk --network devnet --scripts-build-config deploy/build-scripts.json -c deploy/setup-config.json
   ```

   This setup command compiles Godwoken scripts, deploys the scripts and layer 2 genesis blocks, and generates configuration files for the Godwoken nodes.  

   The deployment requires approximately 10 minutes to complete depending on network connection.

   Output Example:

   ```
   ...
   2021-11-19T06:22:47Z INFO  gw_tools::deploy_genesis] tx_hash: 0x4ec4532a4b8c7d799ef30d36df413f1e4aa05402336a3df53b4f9afa5baf52cd
   [2021-11-19T06:22:47Z INFO  gw_tools::utils::transaction] waiting tx 4ec4532a4b8c7d799ef30d36df413f1e4aa05402336a3df53b4f9afa5baf52cd
   [2021-11-19T06:22:52Z INFO  gw_tools::utils::transaction] tx proposed
   [2021-11-19T06:22:57Z INFO  gw_tools::utils::transaction] tx commited
   [2021-11-19T06:22:57Z INFO  gw_tools::setup] Finish
   ```

7. Start the Godwoken nodes.

   :::note

   The default node mode is `fullnode`. It can be modified in `config.toml` to either `readonly` mode or `test` mode.

   If the two nodes need to be started within the same environment, manually modify the listening port number in the `config.toml` file for each node.

   :::

   Run the following command to start node1:

   ```bash
   $ RUST_LOG=info cargo +nightly run --bin godwoken run -c output/node1/config.toml
   ```

8. Start the web3 server.

   1. Create a PostgreSQL instance.

      ```shell
      $ docker run --name postgres -e POSTGRES_USER=user -e POSTGRES_DB=godwoken -e POSTGRES_PASSWORD=mypassword -d -p 5432:5432 postgres
      ```

   2. Install Redis Server.

         ```shell
         $ sudo apt install redis-server
         ```

   3. Clone the source of [godwoken-web3](https://github.com/nervosnetwork/godwoken-web3).

         ```shell
         $ git clone https://github.com/nervosnetwork/godwoken-web3
         ```

   4. Prepare the `.env` file under `/godwoken-web3/packages/api-server`.

         Refer to the .json files generated by the Godwoken setup command under the `godwoken/output` folder for the settings of the `.env` file.

         Example:

         ```shell
         $ cd godwoken-web3
         $ cat > ./packages/api-server/.env <<EOF
         DATABASE_URL=postgres://user:mypassword@localhost:5432/godwoken
         GODWOKEN_JSON_RPC=http://localhost:8119
         ETH_ACCOUNT_LOCK_HASH=0x4e4bfdeb6c832291cb8b7cbeabd848257b3a1e326250c7a87963ca1999cd4ba3
         ROLLUP_TYPE_HASH=0xc964cb302e13327ddf8ddfee2eb3e954baa33341353fc82a8f364505fae12308
         CHAIN_ID=1024777
         CREATOR_ACCOUNT_ID=3
         DEFAULT_FROM_ADDRESS=0x1eb6190f883e11a2a67bcfac9533b0a84f50ddfb
         POLYJUICE_VALIDATOR_TYPE_HASH=0xa97661faaf072948bf488f61cc4b55e517af44a79f92a8fb36eae661c1079fa9
         L2_SUDT_VALIDATOR_SCRIPT_TYPE_HASH=0x010ad7ad6a0c07377651da3955dde9c7b9f252593e5fc54b35d031597215d484
         TRON_ACCOUNT_LOCK_HASH=0x99715cb7ecc54d10b539d29456301330de65cf4bc26bd64326748e7b61be3b44
         EOF
         ```

   5. Create a `knexfile.ts` file under `godwoken-web3/packages/api-server`.

      Example:

      ```typescript
      import dotenv from "dotenv";
      dotenv.config({path: "./.env"})
      
      const knexConfig = {
        development: {
          client: "postgresql",
          connection: {
            database: 'godwoken',
            user:     'user',
            password: 'mypassword'
          },
          pool: {
            min: 2,
            max: 10
          },
          migrations: {
            tableName: "knex_migrations"
          }
        }
      };
      
      export default knexConfig;
      ```
      
   6. Start the web3 server.
   
      To start the web3 server properly, make sure to clear the postgres database, and then run the migration SQL file to recreate the tables before running the server:
   
      ```shell
      $ yarn
      $ yarn run migrate:latest
      $ yarn run build:godwoken
      $ yarn run start
      ```
   
      The web3 connection settings are as follows:
   
      ```
      //The default port is 3000. 
      //The port can be configured in the .env file by the `PORT` parameter.
      RPC URL=http://localhost:3000 
      CHAIN ID=1024777
      ```
   

## How to Use Godwoken

### Workflow

1. Set up the environment.

2. Choose Godwoken testnet or mainnet network, or deploy a local Godwoken network.

   For more information about Godwoken public networks, see [Godwoken Public Network](/#godwoken-public-networks).

   For more information about deploying a Godwoken network, see the sections under Deployment.

3. Deploy an Ethereum DApp to Godwoken.

### RPC Documentation for Reference

Godwoken provides a web3 RPC compatible layer.

For more information, see [Ethereum RPC (web3 RPC)](https://github.com/nervosnetwork/godwoken-web3).

### An Example of Deploying an Ethereum DApp to Godwoken by Godwoken-Kicker

#### Environment

- Ubuntu 20.04

#### Prerequisite Development Software

- Node.js v14
- Yarn 
- Docker
- Docker-compose
- Rust

#### Prerequisite Wallet Software

- MetaMask

#### Steps
1. Clone an existing ETH DApp.

   Create a relative directory, if needed, then enter the directory and clone the repository . 

   ```
   $ mkdir -p ~/projects
   $ cd ~/projects
   $ git clone https://github.com/TTNguyenDev/Dapps-Support-ForceBridge -b starter
   ```

2. Run the ETH DApp.
    Install the dependencies and  build the smart contracts. Start Ganache to run a local Ethereum development chain.
    
    ```
    $ cd ~/projects/Dapps-Support-ForceBridge
    $ yarn && yarn build && yarn start:ganache
    ```
    
    Open another terminal and start the UI server. 
    
    ```
    $ cd ~/projects/Dapps-Support-ForceBridge
    $ yarn ui
    ```
    
    Open a browser tab to http://localhost:3000 to view the DApp after the server started. 

3. Set up Godwoken Testnet in MetaMask.

   Set up the Metamask extension in browser and the custom RPC with the following information:

   ```
   Network Name: Godwoken Testnet
   New RPC URL: http://godwoken-testnet-web3-rpc.ckbapp.dev/
   Chain ID: 71393
   Currency Symbol (optional): N/A
   Block Explorer URL (optional): N/A
   ```

4. Install Polyjuice dependencies.

   To port the Ethereum application with Nervos' Layer 2, the first step is to install the dependencies that are necessary for Godwoken and Polyjuice to work with. 

   Two dependencies need to be added to allow the existing web3 DApp to work with the second tier solution Polyjuice: `@polyjuice-provider/web3` and `nervos-godwoken-integration`.

   @polyjuice-provider/web3 is a custom Polyjuice web3 provider used to replace the web3 library, necessary to interact with the Nervos Layer 2 smart contract. Nervos-godwoken-integration is a tool that can generate Polyjuice addresses based on Ethereum addresses.

   Use the following commands to install both:

   ```
   $ cd ~/projects/Dapps-Support-ForceBridge
   $ yarn add @polyjuice-provider/web3@0.0.1-rc7 nervos-godwoken-integration@0.0.6
   ```

5. Add and configure the web3 provider for the Polyjuice web3 provider.

   Create a new `config.ts` file under the `src`:

   ```
   $ cd ~/projects/Dapps-Support-ForceBridge/src
   $ touch config.ts
   ```

   Then fill it with the values presented:

   ```
   export const CONFIG = {
   WEB3_PROVIDER_URL: 'https://godwoken-testnet-web3-rpc.ckbapp.dev'
   ROLLUP_TYPE_HASH: '0x4cc2e6526204ae6a2e8fcf12f7ad472f41a1606d5b9624beebd215d780809f6a'
   ETH_ACCOUNT_LOCK_CODE_HASH: '0xdeec13a7b8e100579541384ccaf4b5223733e4a5483c3aec95ddc4c1d5ea5b22'
   }
   ```

6. Update the UI file.
    Update the main UI in the file `~/projects/blockchain-workshop-ethereum-simple/src/ui/app.tsx`. Add the following lines in the main dependency importation section of the file:
    
    ```
    import { PolyjuiceHttpProvider } from '@polyjuice-provider/web3';
    
    import { AddressTranslator } from 'nervos-godwoken-integration';
    
    import { CONFIG } from '../config';
    ```
    
    Find and replace line.
    
    ```
    const web3 = new Web3((window as any).ethereum);
    ```
    
     to
    
    ```
    const godwokenRpcUrl = CONFIG.WEB3_PROVIDER_URL;
    const providerConfig = {
    rollupTypeHash: CONFIG.ROLLUP_TYPE_HASH,
    ethAccountLockCodeHash: CONFIG.ETH_ACCOUNT_LOCK_CODE_HASH,
    web3Url: godwokenRpcUrl
    };
    const provider = new PolyjuiceHttpProvider(godwokenRpcUrl, providerConfig);
    const web3 = new Web3(provider);
    ```
    
    Add a new constant and include the `useEffect` hook to display the Polyjuice address to the user:
    
    ```
    const [polyjuiceAddress, setPolyjuiceAddress] = useState<string | undefined>();
    
    useEffect(() => {
        if (accounts-.[0]) {
            const addressTranslator = new AddressTranslator();
            setPolyjuiceAddress(addressTranslator.ethAddressToGodwokenShortAddress(accounts-.[0]));
        } else {
            setPolyjuiceAddress(undefined);
        }
    }, [accounts-.[0]]);
    ```
    
    The `useEffect` hook will execute when `accounts-[0]` changes. 
    
    Add a new line to the html code to display Polyjuice Address:
    
    ```
    <br />
    Your Polyjuice address: <b>{polyjuiceAddress || ' - '}</b>
    <br />
    ```

7. Set gas limit higher.

   Godwoken Testnet requires a higher gas limit to be set for transactions.

   Open the `TTNguyenToken.ts ` file under the path `~/projects/Dapps-Support-ForceBridge/src/lib/contracts` and add a new constant at the beginning of the file:

   ```
   const DEFAULT_SEND_OPTIONS = {
       gas: 6000000
   };
   ```

   Modify 2 functions from:

   ```
   async setTransferToken(fromAddress: string, toAddress: string, amount: number) {
           const tx = await this.contract.methods
               .transfer(toAddress, this.web3.utils.toWei(this.web3.utils.toBN(amount)))
               .send({
                   from: fromAddress
               });
   
           return tx;
       }
       
         async deploy(fromAddress: string) {
           const deployTx = await (this.contract
               .deploy({
                   data: TTNguyenTokenJSON.bytecode,
                   arguments: []
               })
               .send({
                   from: fromAddress,
                   to: '0x0000000000000000000000000000000000000000'
               } as any) as any);
   
           this.useDeployed(deployTx.contractAddress);
   
           return deployTx.transactionHash;
       }
   ```

   to:

   ```
   async setTransferToken(fromAddress: string, toAddress: string, amount: number) {
           const tx = await this.contract.methods
               .transfer(toAddress, this.web3.utils.toWei(this.web3.utils.toBN(amount)))
               .send({
                   ...DEFAULT_SEND_OPTIONS,
                   from: fromAddress
               });
   
           return tx;
       }
       
         async deploy(fromAddress: string) {
           const deployTx = await (this.contract
               .deploy({
                   data: TTNguyenTokenJSON.bytecode,
                   arguments: []
               })
               .send({
                   ...DEFAULT_SEND_OPTIONS,
                   from: fromAddress,
                   to: '0x0000000000000000000000000000000000000000'
               } as any) as any);
   
           this.useDeployed(deployTx.contractAddress);
   
           return deployTx.transactionHash;
       }
   ```

8. Run and test the DApp

   Input the following command to run the app once all the configs for Godwoken have been completed.
   ```
   $ yarn ui
   ```
   Open the browser and navigate to http://localhost:3000/.

## Project Examples

- [Porting an Existing Ethereum DApp to Polyjuice](https://github.com/TTNguyenDev/Hackathon-Nervos/tree/main/task_12#document-porting-an-existing-ethereum-dapp-to-polyjuice)

- [godwoken-simple](https://github.com/Kuzirashi/blockchain-workshop/tree/godwoken-simple)
- [godwoken-simple-js](https://github.com/Kuzirashi/blockchain-workshop/tree/godwoken-simple-js)
- [YokaiSwap](https://github.com/YokaiSwap)


## Comparison With EVM

Godwoken targets 100% EVM compatibility, the plan is to back every smart contract that the latest Ethereum hard fork version supports. But there are certain things that are incompatible with EVM in the current version.

### pETH

Godwoken introduced a new concept called pETH.

In Ethereum, the gas for each smart contract is derived by calculation, then calculating the transaction fee by multiplying the gas with a specified gas price. In Godwoken, however, pETH comes in as the unit for calculating transaction fees. In other words, the price of gas in Ethereum is ETH/gas ( denominated in wei, i. e. 1e-18 ether), while that of Godwoken is measured in pETH/gas.  When executing a transaction, Godwoken deducts the transaction fee by using tokens with the layer 2 sUDT type denoted by pETH. 

### Account Abstraction

Godwoken only provides [contract accounts](https://ethereum.org/en/glossary/#contract-account), and the user accounts of Godwoken serve as [EoAs](https://ethereum.org/en/glossary/#eoa).

#### Different Address Types

* All eth_address(EoA/contract) format are `short_godwoken_account_script_hash`, which is the 20 bytes prefix of Godwoken account script hash.
* Creating a contract account returns `short_godwoken_account_script_hash`

When passing some parameters of [address-type](https://docs.soliditylang.org/en/v0.8.9/types.html#address) to call smart-contract, the `address` conversion has to be done beforehand, and vice versa to return the `address` value. Polyjuice-Provider is designed to handle these conversion tasks. It conducts `address` type conversions based on the ABI of the contract.

> Unfortunately, we are not yet able to display assets directly on metamask or other Ethereum wallets. We currently use a single web app to display users' assets. This wallet display issue will be resolved in future updates.

### Transaction Structure

A Polyjuice transaction is essentially a Godwoken transaction.

When sending an Ethereum transaction, the transaction gets converted to a Godwoken [RawL2Transaction](https://github.com/nervosnetwork/godwoken/blob/9a3d92/crates/types/schemas/godwoken.mol#L56-L61) type, which is automatically processed by [Polyjuice-Provider](https://github.com/nervosnetwork/polyjuice-provider).

### Behavioral Differences of Some Opcodes

| EVM Opcode | Solidity Usage     | Behavior in Polyjuice         | Behavior in EVM                                         |
| ---------- | ------------------ | ----------------------------- | ------------------------------------------------------- |
| COINBASE   | `block.coinbase`   | address of the block_producer | address of the current block's miner                    |
| CHAINID    | `chain_id()`       | creator_account_id            | Istanbul hardfork, EIP-1344: current network's chain id |
| GASLIMIT   | `block.gaslimit`   | 12,500,000                    | current block's gas limit                               |
| DIFFICULTY | `block.difficulty` | 2,500,000,000,000,000         | current block's difficulty                              |

### Addition Features

- pre-compiled contract
  - Add `recover_account` for recover any supported signature
  - Add `balance_of_any_sudt` for query the balance of any sudt_id account
  - Add `transfer_to_any_sudt` for transfer value by sudt_id (Must collaborate with SudtErc20Proxy.sol contract)
  - Add `eth_to_godwoken_addr` for convert ETH address to polyjuice contract address (godwoken short address)

#### `recover_account` Spec

```
  Recover an EoA account script hash by signature

  input: (the input data is from abi.encode(mesage, signature, code_hash))
  ======
    input[ 0..32]  => message
    input[32..64]  => offset of signature part
    input[64..96]  => code_hash (EoA lock hash)
    input[96..128] => length of signature data
    input[128..]   => signature data

  output (32 bytes):
  =======
    output[0..32] => account script hash
```

See: [Example](https://github.com/nervosnetwork/godwoken-polyjuice/blob/docs-evm-compatibility/polyjuice-tests/src/test_cases/evm-contracts/RecoverAccount.sol)

#### `balance_of_any_sudt` Spec

```
  Query the balance of `account_id` of `sudt_id` token.

   input:
   ======
     input[ 0..32] => sudt_id (big endian)
     input[32..64] => address (short_address)

   output:
   =======
     output[0..32] => amount
```

See: [Example](https://github.com/nervosnetwork/godwoken-polyjuice/blob/docs-evm-compatibility/solidity/erc20/SudtERC20Proxy.sol)

#### `transfer_to_any_sudt` Spec

```
  Transfer `sudt_id` token from `from_id` to `to_id` with `amount` balance.

  NOTE: This pre-compiled contract need caller to check permission of `from_id`,
  currently only `solidity/erc20/SudtERC20Proxy.sol` is allowed to call this contract.

   input:
   ======
     input[ 0..32 ] => sudt_id (big endian)
     input[32..64 ] => from_addr (short address)
     input[64..96 ] => to_addr (short address)
     input[96..128] => amount (big endian)

   output: []
```

See: [Example](https://github.com/nervosnetwork/godwoken-polyjuice/blob/docs-evm-compatibility/solidity/erc20/SudtERC20Proxy.sol)

#### `eth_to_godwoken_addr` Spec

```
 Calculate godwoken short address of an contract account by it's corresponding ETH address

 input:
 ======
   input[12..32] => ETH address

 output:
   output[12..32] => godwoken short address
```

See: [Example](https://github.com/nervosnetwork/godwoken-polyjuice/blob/docs-evm-compatibility/polyjuice-tests/src/test_cases/evm-contracts/EthToGodwokenAddr.sol)

#### Others

- transaction context
  - chain_id is [creator_account_id](https://github.com/nervosnetwork/godwoken/blob/5735d8f/docs/life_of_a_polyjuice_transaction.md#root-account--deployment)
  - block gas limit is `12500000`, and is not block level limit, every transaction can reach the limit
  - block difficulty is always `2500000000000000`
- The `transfer value` can not exceed uint128:MAX
- pre-compiled contract
  - `bn256_pairing` is not supported yet，due to too high cycle cost (WIP)
  - [addition pre-compiled contracts](https://github.com/nervosnetwork/godwoken-polyjuice/blob/docs-evm-compatibility/docs/Addition-Features.md)

## Decentralization Roadmap

We provide a solid roadmap to evolve the Godwoken network step by step from semi-decentralization to fully decentralization.

- **Stage 1 (initial launch)**: The whole network has one sequencer to sort transactions. Developers can run their own Godwoken nodes in the readonly mode and watch the on-chain rollup transactions to compute and verify the rollup global state.

- **Stage 2**: The network will introduce permissionless challenger node, everyone can run their Godwoken nodes in challenger mode. If the sequencer commits an invalid state, then, a challenge will be automatically processed by a random Godwoken node. It depends on which node sends the challenge first. If the challenge has successed, the sequencer will lose the staked assets on layer1 and the rollup's state will be reverted.

- **Stage 3**: The network will introduce permissionless full nodes. The multiple sequencer mechanism will be investigated and explored.

## References

| Resource                                    | Link                                                         |
| ------------------------------------------- | ------------------------------------------------------------ |
| Nervos'&nbsp;Layer&nbsp;2 EVM&nbsp;Training | https://nervos.gitbook.io/layer-2-evm/                       |
| Nervos&nbsp;Document&nbsp;Website           | https://docs.nervos.org/                                     |
| Godwoken&nbsp;Basics                        | <ul><li>[Introducing Godwoken - A missing piece of the cell model](https://talk.nervos.org/t/introducing-godwoken-a-missing-piece-of-the-cell-model/4464?_360safeparam=13594453)</li><li>[Towards CKB style Lego pieces: Polyjuice on Godwoken](https://medium.com/nervosnetwork/towards-ckb-style-lego-pieces-polyjuice-on-godwoken-cbc935d77abf)</li></ul> |
| Source&nbsp;Code                            | https://github.com/nervosnetwork/godwoken                    |
| Godwoken-Kicker                             | [Godwoken-Kicker: one line command to start godwoken-polyjuice chain](https://github.com/RetricSu/godwoken-kicker) |
| Ethereum&nbsp;RPC&nbsp; (web3&nbsp;RPC)     | [Ethereum RPC (web3 RPC)](https://geth.ethereum.org/docs/rpc/server) |
| Gitcoin&nbsp;Hackathon                      | <ul><li>[Godwoken Gitcoin Instruction](https://github.com/Kuzirashi/gw-gitcoin-instruction)</li><li>[NERVOS - BROADEN THE SPECTRUM](https://gitcoin.co/hackathon/nervos/onboard)</li></ul> |