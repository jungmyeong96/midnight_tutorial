# midnight_tutorial
midnight_tutorial

Midnight의 아키텍처를 사용하면 대규모 서버에서 휴대폰에 이르기까지 모든 장치에 분산형 애플리케이션을 배포할 수 있습니다. 장치가 웹 브라우저를 실행할 수 있으면 Midnight DApp을 실행할 수 있습니다. 그러나 Midnight의 개인 정보 보호 기능 중 일부는 계산 집약적일 수 있습니다. 따라서 Midnight 플랫폼에서는 경량 DApp 코드와 암호화의 무거운 작업을 분리할 수 있게 되었으며, 이는 다음 다이어그램과 같은 아키텍처로 이어졌습니다.

![image](https://github.com/jungmyeong96/midnight_tutorial/assets/55140432/f21f4331-b911-4e43-a8df-d53207553493)


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
