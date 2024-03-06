# midnight_tutorial
midnight_tutorial

### set wallet
https://releases.midnight.network/
-> /wallet/midnight-lace-1.1.0/midnight-lace-1.1.0-devnet.zip (17.13 MB)

</br>

### request tokens
https://faucet.devnet-midnight.network/

</br>


### Docker setting

```zsh
$  docker --version
```

```zsh
$ docker search midnightnetwork
```

```zsh
$ docker search midnightnetwork
```

```zsh
$ docker pull midnightnetwork/proof-server:latest
```

```zsh
$ docker images | grep proof-server
```

```zsh
$ docker run -p 6300:6300 midnightnetwork/proof-server -- 'midnight-proof-server --network devnet'
```

</br>

### check message

- check message
```zsh
Targeting network: DevNet
```
