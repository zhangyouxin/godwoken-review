(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{85:function(t,e,a){"use strict";a.r(e),a.d(e,"frontMatter",(function(){return l})),a.d(e,"metadata",(function(){return p})),a.d(e,"toc",(function(){return b})),a.d(e,"default",(function(){return c}));var n=a(3),o=a(7),r=(a(0),a(100)),i=(a(101),["components"]),l={id:"deposit_withdrawal",title:"How to Deposit & Withdraw CKB on Godwoken"},p={unversionedId:"deposit_withdrawal",id:"deposit_withdrawal",isDocsHomePage:!1,title:"How to Deposit & Withdraw CKB on Godwoken",description:"For deposit and withdrawal operations on Godwoken, two options are available:",source:"@site/docs\\bridge.md",slug:"/deposit_withdrawal",permalink:"/godwoken-review/deposit_withdrawal",version:"current"},b=[{value:"Using GW-tools to Deposit",id:"using-gw-tools-to-deposit",children:[]},{value:"<code>gw-tool deposit</code> Subcommands",id:"gw-tool-deposit-subcommands",children:[]},{value:"Using GW-tools to Withdraw",id:"using-gw-tools-to-withdraw",children:[]},{value:"<code>gw-tool withdraw</code> Subcommands",id:"gw-tool-withdraw-subcommands",children:[]}],d={toc:b};function c(t){var e=t.components,a=Object(o.a)(t,i);return Object(r.b)("wrapper",Object(n.a)({},d,a,{components:e,mdxType:"MDXLayout"}),Object(r.b)("p",null,"For deposit and withdrawal operations on Godwoken, two options are available:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Using an UI deposit or withdraw provided by ",Object(r.b)("a",{parentName:"li",href:"https://testnet.yokaiswap.com/bridge/deposit"},"yokaiswap")," to perform the relevant actions."),Object(r.b)("li",{parentName:"ol"},"Using ",Object(r.b)("inlineCode",{parentName:"li"},"gw-tools")," deposit or withdraw to perform the relevant actions.")),Object(r.b)("hr",null),Object(r.b)("h3",{id:"using-gw-tools-to-deposit"},"Using GW-tools to Deposit"),Object(r.b)("p",null,"Use ",Object(r.b)("inlineCode",{parentName:"p"},"--help")," to view the available commands."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-shell"},"cargo run --bin gw-tools -- deposit-ckb --help\n")),Object(r.b)("details",null,Object(r.b)("summary",null,"Click to view detailed output"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"gw-tools-deposit-ckb\nDeposit CKB to godwoken\n\nUSAGE:\n     gw-tools deposit-ckb [OPTIONS] --capacity <capacity> --config-path <config-path>  --privkey-path <privkey-path>  --scripts-deployment-path <scripts-deployment-path>\n\nFLAGS:\n     -h, --help             Prints help informaiton\n     -V, --version              Prints version information\n\nOPTIONS:\n     -c, --capacity <capacity>      CKB capacity to deposit\n         --ckb-rpc <ckb-rpc-url>        CKB jsonrpc rpc sever URL [default: http://127.0.0.1:8114]\n\n     -o, --config-path <config-path>    The config.homl file path\n     -e, --eth-address <eth-address>    Target eth address, calculated by private key in default\n     -f, --fee <fee>            Transaction fee, default to 0.0001 CKB [default: 0.0001]\n     -g, --godwoken-rpc-url <godwoken-rpc-url>\n                        Godwoken jsonrpc rpc sever URL [default: http://127.0.0.1:8119]\n\n     -k, --privkey-path <privkey-path>  The private key file path\n         --scripts-deployment-path <scripts-deployment-path>    \n                        The scripts deployment results json file path\n\n"))),Object(r.b)("p",null,"For more information on the CKB RPC, refer to ",Object(r.b)("a",{parentName:"p",href:"https://github.com/nervosnetwork/ckb/wiki/Chains"},"CKB Wiki")),Object(r.b)("h3",{id:"gw-tool-deposit-subcommands"},Object(r.b)("code",null,"gw-tool deposit")," Subcommands"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:null},"command"),Object(r.b)("th",{parentName:"tr",align:null},"description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"capacity"),Object(r.b)("td",{parentName:"tr",align:null},"The amount of ckb to deposit, the unit is ckb")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"ckb-rpc"),Object(r.b)("td",{parentName:"tr",align:null},"ckb node URL, defaults to ",Object(r.b)("a",{parentName:"td",href:"http://127.0.0.1:8114/"},"http://127.0.0.1:8114/"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"config-path"),Object(r.b)("td",{parentName:"tr",align:null},"The config.toml file required for godwoken to run")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"eth-address"),Object(r.b)("td",{parentName:"tr",align:null},"Target eth address to deposit")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"fee"),Object(r.b)("td",{parentName:"tr",align:null},"The transaction fee, this is a ckb transaction and the default rate is 0.0001 ckb")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"godwoken-rpc-url"),Object(r.b)("td",{parentName:"tr",align:null},"The RPC address of Godwoken, by default ",Object(r.b)("a",{parentName:"td",href:"http://127.0.0.1:8119/"},"http://127.0.0.1:8119/"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"privkey-path"),Object(r.b)("td",{parentName:"tr",align:null},"A file written with the private key (hex string) which is used to pay the deposit fee")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"scripts-deployment-path"),Object(r.b)("td",{parentName:"tr",align:null},"json file path of the ",Object(r.b)("a",{parentName:"td",href:"https://github.com/nervosnetwork/godwoken-public/blob/master/testnet/config/scripts-deploy-result.json"},"script's deployment results"))))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"using-gw-tools-to-withdraw"},"Using GW-tools to Withdraw"),Object(r.b)("p",null,"Use ",Object(r.b)("inlineCode",{parentName:"p"},"--help")," to view the available commands."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-shell"},"cargo run --bin gw-tools -- withdraw --help\n")),Object(r.b)("details",null,Object(r.b)("summary",null,"Click to view detailed output"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"gw-tools-withdraw\nwithdraw CKB / sUDT from godwoken\n\nUSAGE:\n     gw-tools withdraw [OPTIONS] --capacity <capacity> --config-path <config-path> --owner-ckb-address <owner-ckb-address> --privkey-path <privkey-path>  --scripts-deployment-path <scripts-deployment-path>\n\nFLAGS:\n     -h, --help             Prints help informaiton\n     -V, --version              Prints version information\n\nOPTIONS:\n     -m, --amount <amount>       sUDT amount to withdrawal [default: 0]\n     -c, --capacity <capacity>      CKB capacity to withdrawal\n     -o, --config-path <config-path>    The config.homl file path\n     -g, --godwoken-rpc-url <godwoken-rpc-url>\n                        Godwoken jsonrpc rpc sever URL [default: http://127.0.0.1:8119]\n\n     -a, --owner-ckb-address <owner-ckb-address>    owner ckb address (to)\n     -k, --privkey-path <privkey-path>  The private key file path\n         --scripts-deployment-path <scripts-deployment-path>    \n                        The scripts deployment results json file path\n\n         -sudt-script-hash <sudt-script-hash>   l1 sudt script hash, default for withdrawal CKB [default: 0x0000000000000000000000000000000000000000000000000000000000000000]\n\n"))),Object(r.b)("p",null,"For more information on Godwoken RPC, refer to ",Object(r.b)("a",{parentName:"p",href:"/#godwoken-public-networks"},"Godwoken Public Network"),"."),Object(r.b)("h3",{id:"gw-tool-withdraw-subcommands"},Object(r.b)("code",null,"gw-tool withdraw")," Subcommands"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:null},"command"),Object(r.b)("th",{parentName:"tr",align:null},"description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"amount"),Object(r.b)("td",{parentName:"tr",align:null},"The amount of sUDT")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"capacity"),Object(r.b)("td",{parentName:"tr",align:null},"The amount of ckb to withdraw, the unit is ckb")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"config-path"),Object(r.b)("td",{parentName:"tr",align:null},"The config.toml file required for godwoken to run")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"godwoken-rpc-url"),Object(r.b)("td",{parentName:"tr",align:null},"The RPC address of Godwoken, by default ",Object(r.b)("a",{parentName:"td",href:"http://127.0.0.1:8119/"},"http://127.0.0.1:8119/"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"owner-ckb-address"),Object(r.b)("td",{parentName:"tr",align:null},"ckb address of the recipient")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"privkey-path"),Object(r.b)("td",{parentName:"tr",align:null},"A file written with the private key (hex string) which is used to pay the deposit fee")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"scripts-deployment-path"),Object(r.b)("td",{parentName:"tr",align:null},"json file path of the ",Object(r.b)("a",{parentName:"td",href:"https://github.com/nervosnetwork/godwoken-public/blob/master/testnet/config/scripts-deploy-result.json"},"script's deployment results"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"sudt-script-hash"),Object(r.b)("td",{parentName:"tr",align:null},"The script hash of sudt on Layer 1, defaults to 0x0000000000000000000000000000000000000000000000000000, indicating only ckb is redeemed (amount left unfilled or filled with 0)")))))}c.isMDXComponent=!0}}]);