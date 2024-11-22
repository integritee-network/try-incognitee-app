const identities = [
  {
    username: "Jaco",
    address: "1363HWTPzDrzAQ6ChFiMU6mP4b6jmQid2ae55JQcKtZnpLGv",
  },
  {
    username: "valentun",
    address: "123aanTyAyypSRVxEyRGB6ywfJByZVxX6vknixn6PqASwiR8",
  },
  {
    username: "cujoramirez",
    address: "15PzE4A3g1PwucqexhQeFVSqYc8wCmG6kdwq9sKLd9nSD5Yh",
  },
  {
    username: "dotberkeley",
    address: "1uFscCqjzMDDGRS8bh9W8f4t94WVXgvnzTeSTrdjC8fJZA6",
  },
  {
    username: "Polkadot @SXSW 2023",
    address: "1342Xpqiwwmxnhugnp91d21xR7s8V6uxXQJ1xYBQfUwbvgDB",
  },
  {
    username: "Bogdan",
    address: "13BddRqwpJ2nPNJwK4cREZw1Q5ad4Et6nhGRG3qPE3yEYW2c",
  },
  {
    username: "Rish",
    address: "16MWDhu1FZ33x6AUKwoCEKdW5ssEa3zpzsDobcjnH6L8awKh",
  },
  {
    username: "AWORKER-002",
    address: "12j2Cii99aT1K3kJQmz2JvPHURecq7BevCmtNx2g61kDqsBb",
  },
  {
    username: "Nighthawk",
    address: "164sgHLJiH9nhSD62V7k2qfwBgCSWH1UPhnpivQ1GGZLY291",
  },
  {
    username: "anamarie_com",
    address: "16qfS5JyeUCpaiNe5AvBbGsThJK9XMsoPQU5rjCD1ysVUHP",
  },
  {
    username: "0xf09f909d2043525950544f424545532e58595a",
    address: "15E3QKNPyW8AQ6kxmxfnCTw16hrk16FWhe6mX5KuMVEc6Btt",
  },
  {
    username: "Alex-dot",
    address: "16XbYc7QfGNuR3ngyD6d47xRoNSXCgoi6pyrsid8p5wk1cM6",
  },
  {
    username: "0x4f4c4956455220e29aa1",
    address: "16a357f5Sxab3V2ne4emGQvqJaCLeYpTMx3TCjnQhmJQ71DX",
  },
  {
    username: "kata",
    address: "121dd6J26VUnBZ8BqLGjANWkEAXSb9mWq1SB7LsS9QNTGFvz",
  },
  {
    username: "KCMWMPR",
    address: "13YFxVVsWe8YsvRj4VfzB1zk97h7Bhjbrgmw5YoBL7BjtsuY",
  },
  {
    username: "dotowsky",
    address: "1ZBEaxxKVYkWCFhew3AyAxzW2h4F3DAXTtuefNPdjrYEFtp",
  },
  {
    username: "pres",
    address: "1xjvRADwdJcnmUCLWerEHR4iGCT5EBTm4D4fzLLg4LcAC9p",
  },
  {
    username: "0xe381a8e38282e381a1e38283e38293",
    address: "16VYkiNyFHSVaydMWdaYx12CvGqJXnadAVx5s4FwfowPjbZh",
  },
  {
    username: "Ermal Kaleci",
    address: "14iKbZws1fjJ6TH27yoRq6KeeVNof83VmxUBN2W2udQVBe5o",
  },
  {
    username: "Hai Lam",
    address: "1hGCGmWzWcdpecQfCotEN67K3oJF1rikBwYA7uiFSTZpJN5",
  },
  {
    username: "CircleInternetFinancialLLC",
    address: "13BD4q9RYQtxkUQLvyCksnN9Pa7sC5fGj5dcdxpojxGkoHMp",
  },
  {
    username: "SuperDupont",
    address: "16MicRbY5KkHP8oAehmHEfssM5h4t7sbVhGprqVxV3uV3Yc5",
  },
  {
    username: "DefiLlama_Research",
    address: "14BAh9QarAD7S8t6TKt2oVoM938tm647UJWHrp4KDf5qHZZW",
  },
  {
    username: "Parity",
    address: "1C6E7TL9hQkTqfPdZFjmdLkFiijMqriwosxozZLeAkCpmPk",
  },
  {
    username: "The Badger Lab Validators Co.",
    address: "12bSXHhe5qn7TCJms4EUNFUVA4jcPRa9FnJxGZBSJuLKJ9hy",
  },
  {
    username:
      "0xf09f8cb453494c49434f4e2042454143482056414c49444154494f4ef09f8cb4",
    address: "13StYv65m44kLu1mGwHYm4GuXR1vLVamUoSvVfCPoZGFX4S6",
  },
  {
    username: "CoinEasy",
    address: "14p4wSm7SF8fQjELN1XMu7Z1tgYyK8Bw4dHwC6KJBW9pvcp6",
  },
  {
    username: "Saprolings",
    address: "14VQRedftpQ5LD1fK8kazAKqS2uhoy2WA7Y7kyakhQ4nue3S",
  },
  {
    username: "il4r141",
    address: "12rgiL4r56kPE4PuYmz8snR21isfbrcp5Vbf8VdJe2AWDuus",
  },
  {
    username: "kianenigma",
    address: "1eTPAR2TuqLyidmPT9rMmuycHVm9s9czu78sePqg2KHMDrE",
  },
  {
    username: "VirtuneAB",
    address: "14ifrZHi32zA34vYpnVwLXWxArk2EiaMRxdKVu5HVRPdqLii",
  },
  {
    username: "Dotcast",
    address: "12b35i6gjXhMzYU7Dy97RngXbuJngDJ8oeY15aM533mmqGaf",
  },
  {
    username: "Beacon",
    address: "12HHkZC9zrfNEURReGpJrppZ2XbCesccPiigsHSmuHnvV33f",
  },
  {
    username: "0xf09f918b203739616e766920f09f8d80",
    address: "167Pbuy2HvbHshqc7Xtk4cweCXyyZoJLttAsddDuH3tN7Fco",
  },
  {
    username: "KILT - Polkadot Alliance",
    address: "143S55QzbrUYHkFcX6upPD6aJtsmXygLZTYVovpAkjPCMfNi",
  },
  {
    username: "knightofmalta13",
    address: "12GvRfGYTXJJZfEUQGc5s3BvuQpkcQTZYZwWpbFkzSyhCqZh",
  },
  {
    username: "COSMIC-GLOBAL-CONTROLLER",
    address: "13ruJWxpuDmX8wSVEvYeLyX5Jn4GpPQ72C42MaAzokkBRCXj",
  },
  {
    username: "Quinence/ModernFullstack",
    address: "15V75NT7bvs9YuVF6NTJynpTCswRshzwvcqPJZoaEJsBVxHi",
  },
  {
    username: "Web3Go-Multi-sig",
    address: "12nVpyJNX4UyVAx9wYPVA7FaB2MDJnEPSXuNknJyoWvQXD3B",
  },
  {
    username: "Metaschool Official",
    address: "12dt664RtnYbeiR1D45CUPyHk1Ufv1NEHFXkuRLy47FktR31",
  },
  {
    username: "dothub-3",
    address: "13zf4XPyZ4tyJdFw5sux7wGNzDRKsdon4DtUR1yXq2pTcFe4",
  },
  {
    username: "Babybluess",
    address: "1Gui9xRKiGWg5Qt3n7PHLfJ2wKapLyWRVchBXcXNrSSSRNu",
  },
  {
    username: "victoraranguren",
    address: "12xz3oAPqDXCcbw6B9zxh9mEVpdXVsv9sW9vuKoDwnQS3ZKm",
  },
  {
    username: "EzioRed",
    address: "14Gn7SEmCgMX7Ukuppnw5TRjA7pao2HFpuJo39frB42tYLEh",
  },
  {
    username: "LEDGER",
    address: "16RxCR45GQLY8DzW27ZHfF6U1MHCSBfimcai9BAEq82jgaQM",
  },
  {
    username: "Listen",
    address: "1hJdgnAPSjfuHZFHzcorPnFvekSHihK9jdNPWHXgeuL7zaJ",
  },
  {
    username: "Armentsk",
    address: "12sEC4VQWtEK52pMTNehM3KnpRQrcgW8VyQxqhBpcNdwZc3R",
  },
  {
    username: "Vegas_life",
    address: "14fhQS5myHCh3AQZZoELKpQuy2AfNe5am3PzTDvKi7i172n5",
  },
  {
    username: "Polkadot Now India",
    address: "16G7wZerqxib8YMDn3FKVfSMp1hky159JdhcGqHzy65F6RXE",
  },
  {
    username: "allochi",
    address: "15G46XQdvuTRpj87yt5WmnppjzfQtc7vBxmDUCD8v4CJ9Vyd",
  },
  {
    username: "keita0928",
    address: "1Ef2ajLqfJxjFrasCgnCJVrwtqVQqQ7L66x7y4Sv2kaLrgo",
  },
  {
    username: "DARKFOREST",
    address: "12HD3k4ZH6X14UpsxL3esmoiEsY6TVJb6Ma7nNcr718oPeji",
  },
  {
    username: "KCC_1",
    address: "12mvRSJUwpf6VfWLmgEJjcQgzzh2bCTSvFDwrykmijdzqS5m",
  },
  {
    username: "PowerLabs",
    address: "13g3rtrqL6EHD2QixCxradk2XG7RkmTLKkXvMfLVUuChzFZX",
  },
  {
    username: "Shawn Tabrizi",
    address: "12hAtDZJGt4of3m2GqZcUCVAjZPALfvPwvtUTFZPQUbdX1Ud",
  },
  {
    username: "horimi",
    address: "16X74zZFoqDjcXpSS3hGq99ggFuuaCoSKa32zTqPQrvxPaxA",
  },
  {
    username: "Chris-Staking",
    address: "15XFryPdurvcxD7YSpR4H43CVpXYvxCxYTL76nrjih9MTkH9",
  },
  {
    username: "kouti",
    address: "1nmnqk8Fymup8CRdYHnPY7VGKcSmzVFuWedMnnZpNG4osgG",
  },
  {
    username: "POLKAWADE",
    address: "1h4G1Vj9ihEmTLdjqea1PyBjZY4GSPogHAmn1vU9xM2eQPd",
  },
  {
    username: "Ross and Joel | Polkadot Cloud",
    address: "13MNarAqpNkginnQb6gTNq2QnieZGs2SKu8JdK9LLxo6ksEP",
  },
  {
    username: "THE SEVENTH CONTINENT",
    address: "16bAZ1ebfo5YtcQVXB95DBPvLZsmGCwr7aouhBW8r8Xb7zqX",
  },
  {
    username: "Clover",
    address: "14e4GmLj5CccWe9Rant9q6yQro1oysqvKiBiHcpCRoscZ1yY",
  },
  {
    username: "Chain2me",
    address: "14mZVYo7jy13aHTiNMQZJzsii5CPsVEaMQwLXTEMLzkmxKH2",
  },
  {
    username: "Aaron24601",
    address: "138JRJ2DeNpwkdi1vPPy1FwxF2AjTGpGDvwxQ7sVuxhHf2C1",
  },
  {
    username: "vivs",
    address: "157gdNsg2ZS9na5qb4RbVQFeD8qNoCbBCDcABGjnwmk5vE12",
  },
  {
    username: "Natalie",
    address: "12h4KyK9qts4zMrgZgWPswnpVyhXU7XoZA5xDqoFAQ6JzkD4",
  },
  {
    username: "BitDash",
    address: "13MTHo65Jwiee6rW7o3buGKoZ5kNJBJg3m4PTkHWKeaWtT86",
  },
  {
    username: "HuobiPool",
    address: "1sywP45NcZSQ3ev8WfcLZNm8hwCUiKzNYHmECpR9nYMAtMA",
  },
  {
    username: "Cim Topal | missing-link.io",
    address: "13zTcqasJT4DnDgNjmsceACcuSjt4q2geEjtMprnGXCnuuh1",
  },
  {
    username: "Deutsche Telekom",
    address: "12KJ7bLatTtakpWA3ALNgGyfXwYQwiwwgKS5qB42XVpY7HQA",
  },
  {
    username: "Jinse Finance",
    address: "139Vbu9X3h4v7NTBVSpLijAvpWUoGhYwKmeuxaSJ9kQsD2SG",
  },
  {
    username: "UNIVERSALDOT",
    address: "1ZKQxXJC4731Qq7EHNAddaQRdV37qLYMftbE9PN1T9hu2sU",
  },
  {
    username: "DokiaCapital",
    address: "1WG3jyNqniQMRZGQUc7QD2kVLT8hkRPGMSqAb5XYQM1UDxN",
  },
  {
    username: "Ceres Blockchain Solutions",
    address: "15TBFmf446DMSptES19SC97yLbJXjePZRkoeysFyX7nbvZ7k",
  },
  {
    username: "0xf09faa9e612073206820f09fa799e2808de29982efb88f",
    address: "1RMRnVtgPyyHnNrCwXpuesdpxPE7kTtyNa3kSes4tEQbDAJ",
  },
  {
    username: "ethernal",
    address: "14JpWVLkgNNbonWBMiE2c5WTqzisHbWqG2y5rEFcs6qfS7NP",
  },
  {
    username: "xmdot",
    address: "19e6YYas7iGGZzxwJh5KvAARL1XZnJXffcxxNvW3nkF9CLe",
  },
  {
    username: "Koto x Farbkind",
    address: "13tjBNZANFPb5A6ntwPcgzyZ1YtpNtKcRXccnM4RDd2fouZf",
  },
  {
    username: "dharjeezy",
    address: "12GyGD3QhT4i2JJpNzvMf96sxxBLWymz4RdGCxRH5Rj5agKW",
  },
  {
    username: "tad",
    address: "12xEUNxp5yAmEBGJm1huv5LjhE6REcntsnkwk1LM9LwDw16E",
  },
  {
    username: "0x4d4f4f4e204c414d424f5320f09f8c9520f09f8f8e",
    address: "12nVHTPpz8hTADVx5BQytd46aky61mTrZWQF9kpHXtZGGR8V",
  },
  {
    username: "FreshCredit Labs",
    address: "17XTNreDHquSia6oLQAQnecwPHtZTPfjx8kRG81UhVFaYcQ",
  },
  {
    username: "The Tie",
    address: "15GKMrbh8q6jpdfSRcrrrCt3ahk9oqSTchnSSe97nDsQjB1r",
  },
  {
    username: "TheGuild",
    address: "16HvKyV9B61hsop3ZY6pWYeV537S29kd9pb9FMrPzx49ym5X",
  },
  {
    username: "BlueDot",
    address: "12uojE6H47DTppmrWCZHXM39YVpk7z8ywbaHYQskVdQBLLP4",
  },
  {
    username: "PolkadotShot",
    address: "14mJotwb61VJVBhMgardeMTgtrgvTfcninp3B3thiHLvy4qz",
  },
  {
    username: "RichardXcavate",
    address: "1xGrVAzbHfUfxFMRhUsDKWFcJNf1XMSNE2UqRjkYyFhrnqt",
  },
  {
    username: "Charu S",
    address: "1345YSmWgGW93NBMnDBnHLVdcFANa911jc4kG9pLHYsu2qW5",
  },
  {
    username: "michalis",
    address: "14id3ENXVkJ34Q51AfWDGcMHA1EbGu8obF8QJLEUkzAB8KVh",
  },
  {
    username: "Isabel",
    address: "13rugVNhQ7pFwQm1NMwuTKRQVHpzy5aJCTW7ddvcwq7xwYXb",
  },
  {
    username: "Ingo",
    address: "1nSRbbdKMefbPiU4AvHLwxrUSLp7p95gMuvc5zj8wjecjBh",
  },
  {
    username: "Laurent",
    address: "13zvfbLxw4EdBezZUX9sc5N1fHF8Hc4Sq6fmcUc5FNNh7roP",
  },
  {
    username: "OTAR",
    address: "14z2CnmqMX2kcWGp5VT68sovjKXZipjkNUPtaMMnz6cjXW3q",
  },
  {
    username: "CHRIS CRYPTO",
    address: "15iQGRMptFbkxWWosfguSuiR6PynRQsWUeEYgcQRM8BHjn26",
  },
  {
    username: "Lily_Mendz",
    address: "1qAsfc59XsRLiy3DZfc4buS4umW6Q4xaJcWALj1eguZTi75",
  },
  {
    username: "Figment 8",
    address: "1RhqvtG4SS6ooc3JELk8kpTaDiLP9f92jdyR5p5efPWVsx1",
  },
  {
    username: "Sonder Validation",
    address: "14fvtGK7kJHkRC7FE8EcBgC8LduzDQYvko68nbAzQX5F5B7u",
  },
  {
    username: "Odaily",
    address: "1zprM4mMhp8hzJrYxrf5fUEjerGoL23VoC8uKkTjVWsK3MG",
  },
  {
    username: "Morpheus",
    address: "1pyeBBRDsCiKHh9dBwingmJkREAmY4dLuPnvu9xX8iPr6Ro",
  },
  {
    username: "Gio",
    address: "13SkZi7knHeJT3tq5EKsEsf9hWCtKsJSokKnqA4itT51yv1x",
  },
  {
    username: "BINANCE_STAKE_6",
    address: "15kb76J3G8QvtoYKZdWyvPC12MzewsMYYneYT7E6SM2R3oTB",
  },
  {
    username: "DOTins",
    address: "13BcnhXmhxGN8JGA4bDF1uRY3orv5869xGdH8Wg4sqGW5WBy",
  },
  {
    username: "Encointer",
    address: "16XXocb76BpprdspsR7j5iWFHf4aTMnsVHxgGBXfixs1FFLb",
  },
  {
    username: "Lucy",
    address: "1LboBQLsa1iTpGzZvXcSd5VF7jfUYf6MzPNoRy2HT9D9FNk",
  },
  {
    username: "LearnPolkadot",
    address: "14m6YPTpa64jusibkvvCov4XsxW2ig7Hy3n23GpN9YVTqhUd",
  },
  {
    username: "Josep",
    address: "15roJ4ZrgrZam5BQWJgiGHpgp7ShFQBRNLq6qUfiNqXDZjMK",
  },
  {
    username: "dothub-4",
    address: "16UUPzqdhbCwDGSRHHvSDJeWSHyfdy68p7CnXvedzQJ4PGJ4",
  },
  {
    username: "Severan",
    address: "143zNreTgFG8oy2H8tMaYqMxwSw3yL7a4yK4QKbjWJaTkiUL",
  },
  {
    username: "Maxpainn",
    address: "13SwCyWcoXGcsabpwPLV2RYhrEYwcyaqTe2zkxdT93hchhWE",
  },
  {
    username: "WolfEdge Capital",
    address: "13YVNYuGekTuLtggpjP6EjY9FY7QvrrwGZLnuC8qDh8K54Zu",
  },
  {
    username: "MTC",
    address: "13iyZ3afN9J4CfjWxUXykdH9657uTmGmMGc1oH9h77JA1HvM",
  },
  {
    username: "Paramito",
    address: "12oubVqGFUFbY9RWsXZh5ivsnjf72dqkVRWby9Ca2NYGjLWy",
  },
  {
    username: "ThinkWildCrypto",
    address: "13Kz1SikE9FxnRUkGJV9CwaucWstZfv5j4fGHb8fgbKQH9js",
  },
  {
    username: "Polkadot Pallet Grant",
    address: "1ndetsPkA2SkBHGo6QKN9svDS6gPjaiz2wFkZt4mQ6GaP46",
  },
  {
    username: "Eiger",
    address: "131MpMXeuKG6L27Ye23uzWr739KFbbrCBdiv39XZtnTCPwQB",
  },
  {
    username: "Seun",
    address: "126mA3MruWNHeKAPVf4586jntAw4eTeWhV8A1uar1wfdVjiP",
  },
  {
    username: "Lorena Blockya",
    address: "12xRcHjvStkUYgzTh9vyqinN3tUpddgcPnSUcLXZ3ty44Mq1",
  },
  {
    username: "Regency-002",
    address: "11zX85upvPauDy48nDVkfKYH4pRus2HxRCZwkkwmD7VgZE",
  },
  {
    username: "Amaurylr",
    address: "13JsTxizvEUEeewFagowtFQaWpHbADWCoSkTGAY7QTSkvtWF",
  },
  {
    username: "Pioneer",
    address: "129LBt5T1eYtnGHbPYeiiMdmWfokCiiq7z6JBfjnYifiombz",
  },
  {
    username: "Nodamatics",
    address: "13rfeFLNLU8TfKizGiBLZWaYAwKrAK4JBz5vtU4vK6R427Em",
  },
  {
    username: "Unchained",
    address: "12pdBf9NJ2jqRHdVmtqSZMRvWQoiH81AfaACgiMuXLeySNzc",
  },
  {
    username: "alin",
    address: "148f8D1P4CP2tV8JuaVHzEXQQgj3jBxEg3k9qZydPzkJjbQG",
  },
  {
    username: "mastersparky",
    address: "13wTKVf96CDX36uBedQ6yiksz4GUQuqo2gfKoTX5EqY5yoDZ",
  },
  {
    username: "Snowbridge",
    address: "13dV6obr7X382FGNhWLHZ6v7N3qxuBV3zttbrEarehnGWyKU",
  },
  {
    username: "Savlian",
    address: "142ySDS6PazDWhXEUy9xAbMHR1ytoPMpgEckyi2ksDgt42Nj",
  },
  {
    username: "Carlos Sawaki",
    address: "131E5KXwmuQ52czv1pfFrkwey3RNWrtq6zGBH96MCcQxe38a",
  },
  {
    username: "Bountyhunter",
    address: "13g8kMHyHcjqjQmQcdjiCGtzaZqVF1nXH5BdFZTziHN41kDi",
  },
  {
    username: "Ramp Network",
    address: "158WcFmKMKijmcqbPJWoicyhvBqp8TzV4pzgRYhGEiHAMXRz",
  },
  {
    username: "Acala DTR",
    address: "12zgSMDwF5xpzcksvEdDzcSFouFNroXGRffgnhogSk1kR7iS",
  },
  {
    username: "zjb0807",
    address: "13dbGnwdBYZPMLGkHj3RZX49Xin9DrLXhyNPQkWSe474XJot",
  },
  {
    username: "RADIUMBLOCK.COM",
    address: "13GtCixw3EZARj52CVbKLrsAzyc7dmmYhDV6quS5yeVCfnh1",
  },
  {
    username: "LeKOLkadot",
    address: "12gNGWmCcj9k1JfRtdtRioen6RZyYQ8R7pNYjto1botqqEPJ",
  },
  {
    username: "kitai",
    address: "13m1PwcCyF3vqSE6YYccAoihtLYZJkrHE65PWEF1hN8bhPCL",
  },
  {
    username: "adenijialiyu | OpenGuild",
    address: "12uR6ZinxBstfeh9zX5d415Z29XkSfNR4Nfkn6afAusKc52n",
  },
  {
    username: "Tokenguard",
    address: "121k35TZKEpoQeKURnEgt2zqWsyDKxUJkTFuwpZeLoSYUe7o",
  },
  {
    username: "0xf09f8fa2204d49444c2e646576",
    address: "15DL1EU6TpGDvL8HCNNU2ZDZdbcDUPiHYr1DBHBerUWMkJnT",
  },
  {
    username: "nam sangjik",
    address: "12pW9S7b8c7Gw3FKdYtb1Rtr7PzzxoUHdHsz6kvC7RTRPm1b",
  },
  {
    username: "molchain",
    address: "16XwMm1gFWa3CSsS8VtVmBRZZKp25DHeLx65mhWacvzK28sY",
  },
  {
    username: "pastaMan",
    address: "14tcZ9ibPGdMwb7XXE4QChgVuJU1xXTvDFpV3E1HpMajbBsH",
  },
  {
    username: "Neukind Tokyo",
    address: "12wzoKpr3svXV8UGKEbYpazB3eRwDxoJV8g1maNWDkNXuhuy",
  },
  {
    username: "KIZOS",
    address: "155EekKo19tWKAPonRFywNVsVduDegYChrDVsLE8HKhXzjqe",
  },
  {
    username: "Zeitgeist",
    address: "1ZTGLab6NqXtggd2ff2N9oKbPuQjbeu6P78MCFb3XDc9SjT",
  },
  {
    username: "FHEWASM",
    address: "155kyRnu8M2GNrB39p3y2jcXrzLys9yFWBwCgEZQTJA7KoM9",
  },
  {
    username: "Insight Finance",
    address: "16XwmL8Kh4fxXa4TyEAjaJRr1JLevnQsZ2GVF68ND9SqQWY4",
  },
  {
    username: "Centrifuge",
    address: "13vKLQJ3m47Yqmc5N8NSUmbqDpwQBwZHx6mxe4SnMAKEPRvx",
  },
  {
    username: "Staked",
    address: "1653t723BHhC2krGCFKUUNDQb5sUafy5pZvKVwnwo1oMAMi7",
  },
  {
    username: "CYD Polkadot Wallet",
    address: "11JvLW81x4dVuAxZ6BeiDMQb283X2SVp7cWzoYxmTWrH5bN",
  },
  {
    username: "STAKEPILE",
    address: "124X3VPduasSodAjS6MPd5nEqM8SUdKN5taMUUPtkWqF1fVf",
  },
  {
    username: "BINANCE_STAKE_8",
    address: "12771k5UXewvK7FXd1RpPHxvFiCG4GQCrxRmXWN5tAAwDQoi",
  },
  {
    username: "Alex Dimitrijevic",
    address: "12CHAK3YxJG5pGW6JAGp6Daj8ruRfPwCNbPM7jU8mC2zh2qD",
  },
  {
    username: "Polkadot Inter Miami",
    address: "13JJDv1yBfMtP1E66pHvm1ysreAXqkZHxY5jqFR4yKPfL2iB",
  },
  {
    username: "Crystalin - Moonbeam",
    address: "14zVxzPojcnJbC5mBQTMqUMsH1WMSBRRjEZ3WyWQoqtPahHX",
  },
  {
    username: "Kus Validation",
    address: "13zRKESAgaKG4xyYrZnAA4Qdu1iVVMsrdiAnhnnnd4CB6TpU",
  },
  {
    username: "cold",
    address: "1eofKb3VEehz5PCi62iFnz4Wt5Bv7SkvP8ApEJwVFUeEoGE",
  },
  {
    username: "Polkadot Go Lunar",
    address: "129eceuE1hrmfCEvBDkeyx4E9v9TM7CQmK1YGM9LEwNNZdk7",
  },
  {
    username: "stake lada",
    address: "13s8HpiQWdjpQZgg5jiyCtjPRx1aUo6jpoigQyBAFuxPnDXv",
  },
  {
    username: "Shashank | SolidityScan",
    address: "15MrU2739SvEc8AUXe4HR3FnoratBxRXA7oJMXedvcz1F6hq",
  },
  {
    username: "Polkadot Mexico",
    address: "14BA8G99RW6xxgu4q3Ks5GVQaA5g4wApn4JPeXbLiEU2Pent",
  },
  {
    username: "PolkadotGCV",
    address: "13mH9phtaTrsDcRk9Gkc6zi3hMdXGr9GuAGfsNbnYE5Ctf6g",
  },
  {
    username: "Aventus",
    address: "16HqymHVxdLtK8jtbur7DusQrfLAVEJZfsQijfxVwhQHiTgU",
  },
  {
    username: "Polkadot pdex wallet",
    address: "1nrLm5LZEEHj2XGPaqMDkDSNoQZA7VH8M1ygnxdxzHENgji",
  },
  {
    username: "mbaj",
    address: "12bMyzdtiT2V9iNJ7BzQXPmzZ4KTzqFmZPSNeBmg97mFP5F4",
  },
  {
    username: "winton",
    address: "12Ys86DFJeJXgvVydMNPM9s9map9aJYJH1zxoQQsmNBZfGTk",
  },
  {
    username: "Alpha Airdrop",
    address: "15ixta6FiXTBE8gXCTUNP3ahdYWcTuateHgB2czGg5EGDVMA",
  },
  {
    username: "Soraia",
    address: "15qbzYZARgiEdynn1SKH1TjAvx2UBeau52a2eJnFtwH4BhZ5",
  },
  {
    username: "PendulumAlex",
    address: "12g8sWyvEVkMd7yY6pKehUsLqmzTNjUXfQQqyA6RR7wVptcZ",
  },
  {
    username: "0x4d61737465726e6f64653234f09f94b1",
    address: "12E8p2ybFsYnsFH2XupPGng6N4egW71SX971Ez7Xsnj1uDwz",
  },
  {
    username: "juan62",
    address: "16FWfQVWsCoN5sRXt4aJ3gBxWgBPDCR8Kx6b2rZbHUVmuvx4",
  },
  {
    username: "sikamedia",
    address: "133DqKiBxbxfNdCSwK1et21wHANiRSoxQRzzD71YA9v8JWHm",
  },
  {
    username: "Carlos Gomez",
    address: "153Wzx2B4zCyEww7KPLyC2CHycVatxoKgFYZzXvLd1BfGQmR",
  },
  {
    username: "peary.ai | polkadot mobile",
    address: "13jYCivUeddgxVJNQgD8uxeBfPAq5QDopeSGuXY7YG1tjUHJ",
  },
  {
    username: "Tomas Senovilla Polo",
    address: "1637oMu4RXS1JhKKiV5nGKPAWXNmjfLfrCKzbozqodRxLYrr",
  },
  {
    username: "AJ ASTERIO",
    address: "16iEYsszKAiWj8vu5Qor5XC5DY48gkJeytviFGYuy17Uj8xg",
  },
  {
    username: "POLKA",
    address: "16hjtR3JcLE5q8L1JSCKXL8kGRF996zvsZB3nzzpwjskNLrc",
  },
  {
    username: "SuperDupont-Nexus",
    address: "138SzR1tiCeCBVTQfCNasoQQLjacFLxEHDM16KAejTiRSqf8",
  },
  {
    username: "DrW3RK",
    address: "14aZsGMA4aPrSuV4MSSpumtYwxuNNrDc3vHu12K85xYh9qcB",
  },
  {
    username: "Tim Janssen",
    address: "1pHpxvp2CYscDreozYQdBkJkUkLFQftxQTAwMs5M1a6GRBf",
  },
  {
    username: "ACTINOLIX",
    address: "12jtoDZASJ1t6qbXRrGbz9C9d1yvKpFhWPiBgudhaBpfkBxU",
  },
  {
    username: "YuriNondual",
    address: "13imKr2zEi4YQcXwGXHHqcAH3TqVCELkG5Cgb17QjaXoFupp",
  },
  {
    username: "Engenheiro Cripto",
    address: "12YMwndFtXaGuVRJAAsHwsF4Spd5aNXys1QfFDd8UtA6PS1U",
  },
  {
    username: "Krombopulos Michael",
    address: "16faekJgyrdU5CpxQtEcifEhaUPb5o9F4mzdQR6uTMJRScTW",
  },
  {
    username: "@OnlyDeFiGuy",
    address: "12zxS1YsjPJoUDJs8A24wmNNebmGPhbkepKRZworJebWNBqX",
  },
  {
    username: "Jed",
    address: "16UqW93QuBkonHxuKRx9BLxjuSFRhGxXKu9aS85rSnUf7rjr",
  },
  {
    username: "DotEnrique",
    address: "12mcoPmG9wnrpQTtkCySfUC1qY73aGsyuuts5jjVeXjPgpkq",
  },
  {
    username: "yiannisbot",
    address: "13K6eDkgBefaAmh7arWwitGduqsGETb2UKdkw35Qfc3LxvXK",
  },
  {
    username: "Lightning Blocks",
    address: "16fmwCAoqJdVtmj7wGEGuFa24WT7x974ZEQsa42x8k9uop1o",
  },
  {
    username: "RockX_Polkadot",
    address: "14Y4s6V1PWrwBLvxW47gcYgZCGTYekmmzvFsK1kiqNH2d84t",
  },
  {
    username: "8BjLUD3f7aDG7fx",
    address: "14SpHVrCNN6HvvrFiCKesKpqQhgM2rMQ6PZnSWLZfDDdh2y9",
  },
  {
    username: "WebZero V3",
    address: "1ntrYvz7gmd59Qv1ngdcwAupV4cY8DPMkMJBiPA2YUiVXvE",
  },
  {
    username: "Gu Insalubres",
    address: "15V1BVqe4QJpfcmoYeXtBEAHg5PXidRU1fLhco84FmZG77D2",
  },
  {
    username: "AxelYouTubeOk",
    address: "138UiTdJCFLp1jpxzFDBc86UyrewcfX36W2Zu6jBoDsG4dLU",
  },
  {
    username: "ghe0",
    address: "13QrDmvcbJzZNMsktEg5NixHDDPzWUpn3i1jGTJ7KofEoG5m",
  },
  {
    username: "DPSTK",
    address: "14xSXydBVvuMMaNduDXwWcckt3BziSB8Sa7o34Jt9z2aMGxX",
  },
  {
    username: "hakmark",
    address: "15fXhFo9XwFyBeTvuzsSTVYq2Jhc1EcgreTZGuxZAt1Pe4EC",
  },
  {
    username: "DARKFOREST",
    address: "1THVRBT6fF12q31ebd8uRxpXHmcwJ7K6o1r3X2JPepej7fH",
  },
  {
    username: "Ross Bulat",
    address: "1hYiMW8KSfUYChzCQSPGXvMSyKVqmyvMXqohjKr3oU5PCXF",
  },
  {
    username: "TarekkMA",
    address: "12xH9F4aSGEq27AZxLqG15fheDTtSxh1rJkVSXQ2g59djs7u",
  },
  {
    username: "OnlyDOT",
    address: "15SkziPimEPmXooscZPp9WcEVwK7QdrXGJCWyHk3gut4QdBP",
  },
  {
    username: "Gav",
    address: "16SDAKg9N6kKAbhgDyxBXdHEwpwHUHs2CNEiLNGeZV55qHna",
  },
  {
    username: "MuFi Polkadot Account",
    address: "14oR2K2srg1jTZFxgJ39RttTpWanAmV27qqvxEL5YUeNZv3x",
  },
  {
    username: "SWKim",
    address: "15JedFf6QG6hkbWUMc8ftKzryVN8N5A4dDJNvf6mj3o4v892",
  },
  {
    username: "Arfan",
    address: "14iDYJ9yCc7LKe5kXzkUUxXMKBwfsfYUrtKhmgwMCVWGoUCV",
  },
  {
    username: "DMR5",
    address: "12NpsJYMVa6c9YSVQYatRau1Mokc9VCuBb7sWP1F4jDzGrmb",
  },
  {
    username: "0x56656c6f63697479204c616273e29aa1efb88f",
    address: "14aoY4nfAmAGLC7xT89MBDV4g1QXFmDzf5YPSjRk73K8Ryja",
  },
  {
    username: "Salad",
    address: "14Bj8d9Nh6hXNtA3FWw1QYoVPwvbaXiBQ39WrvgaKJDEnbrD",
  },
  {
    username: "snf dot validator",
    address: "136cgMVW8FeEdLAJmcLMd1CTo3QVZcheyQu1bA3fC9KXTqVe",
  },
  {
    username: "jak-pan",
    address: "14igNr9LabUkxmMys8CSTqUyJaHWum4bjBCSPqZPgXdmFTPc",
  },
  {
    username: "Ashutosh Singh",
    address: "1HzwKkNGv4gdWq4ds1C5k63u8hvmjC6ULneAaZbwUBZEauF",
  },
  {
    username: "parallel",
    address: "1216kgv4ZxcYTh1eYeugiTCfa8yY8T69P1MZyRtZTKFwpuMr",
  },
  {
    username: "Polkadot@CoindeskConsensus2023",
    address: "1hzs7HJ4teyvX9cwFsxCaJBSNQcPAWHixQT4fem5h66cogb",
  },
  {
    username: "Airdrop.com multisig",
    address: "1pA5e3xHijGf9AVWaZAtfae6vy8Bj52h2n22BfHRHsn2cuv",
  },
  {
    username: "TXShep",
    address: "16ad3ehm2XsVQbQgqYPxicRB5nGinQU9zEKiCJ7ZVhRN9CyG",
  },
  {
    username: "PromoTeam Validator | 0-5%",
    address: "12BkPLskXyXrHhktrinLxVFkPzzvCzCyVCaqHkUEoxMwSzeq",
  },
  {
    username: "Spicy",
    address: "13m9X8g48Ej6gyy4BQGwFfTU3eLLwvvFWj177bUymWfBo6oT",
  },
  {
    username: "cl0w",
    address: "15BERoWxrWC61cAb4JjpUdM7sy8FAS9uduismDbZ7PURZLto",
  },
  {
    username: "0x4a4b5242207c20506963636164696c6c7920f09f87acf09f87a7",
    address: "1PFSc4yEeY1owHAQHjPFhDXogkptySBBN797wwYMxBgXSHV",
  },
  {
    username: "mayaka",
    address: "13jU7tv8Rh9VgQSPx8pZZWwiW4e6Dc69YnSSv7rnqvs9A8Ry",
  },
  {
    username: "Uso de multising",
    address: "15FhnmgZfxSC7swon7RSyAMzZ7LSK7q8cvErtXJjVbwbcxdU",
  },
  {
    username: "1WEB5",
    address: "12K5mzJUycW7XnKvQmc1mnHTgLUkj8YjeuFL8FDGfX2vobDw",
  },
  {
    username: "RockX_Polkadot4",
    address: "14DXNLsWfpf1RZ3eZSemHaitFh7WM6ZwswJUVLxqQhRvc2ui",
  },
  {
    username: "LOGANTG",
    address: "1LohyWj5cEmH1teF3bAMvR4DLTJNL1PHWWz7nzHRgo59qPd",
  },
  {
    username: "Gabe",
    address: "15ydCCiJb3AfbMQkFHikZxVpg2dUWz58Wtf7ScztD8RRkFAN",
  },
  {
    username: "COLOSSUS",
    address: "1UXCHYkyDvKQArQfumvW3T587Bn9ZfpPgoHeRjEjkMDqd2J",
  },
  {
    username: "Lumos Labs",
    address: "1jRXTjMbQKiWuJVgZ8WqaimRPEHi7QekSs3JsWxhx6Dyb3r",
  },
  {
    username: "swb",
    address: "1jF3bWUuHVbDVjB5ULwNYkWeyNMvg6mQcWfrSJ2xjsCGHYW",
  },
  {
    username: "Duck",
    address: "1NipTMnBiccC4mwK9inb3uS8KBSPrh9FTutkfiiP5osiWob",
  },
  {
    username: "JOMI",
    address: "13gLJkAzwtG5pCxsT2ZZhum8QT9K2x1psavNnNTS8WB593RY",
  },
  {
    username: "0xf09f8d8120486967682f5374616b6520f09fa5a9",
    address: "1HigsTaXZrCEEWkbUPwD4Rx6XpV7E9fnsom6ZCx42RJnimr",
  },
  {
    username: "Polkadot Hong Kong Day 2024",
    address: "14TAY5shXAHGZLaMahn6iacJKa4zq8QDP8PXTRJJkrJWozEy",
  },
  {
    username: "Michiko Watanabe",
    address: "16SQKanFTrN18k9UE8EFbtyeSGNFPjRBg8caVhGoUNL8cdh6",
  },
  {
    username: "Danson Twesigomwe",
    address: "15Sn8yJMmGEBMwZYLyr9bV49CPg3apGLNpCT1EdbtYgrnKhr",
  },
  {
    username: "ubiquitousData",
    address: "165kFtK4zD1avGDWp2nPetgcjBjDK7oDXZoSFgkKEFqanTsY",
  },
  {
    username: "Scopeless",
    address: "16kGYFmrC6W8Qm67zvgiDr6y2FVNXFckkujd5JTnXojbQTFY",
  },
  {
    username: "GedeAnta",
    address: "1553nAy7HcBUvndP1GtgBAS2apm8HGzomYhAPWwUZSyP6E3C",
  },
  {
    username: "StableNode",
    address: "1432bmCCY5SYh5yBRui21PDi1nGdEbp2dwSu2HR94yPgC8VC",
  },
  {
    username: "ValidOrange",
    address: "1D51dxpuGv1mWxstx7ERWyEWieLHSeQ8NBVX7VxkxT5PuKg",
  },
  {
    username: "ZoeCryptoGirlsClub",
    address: "16X52tLj6BV7xT6VUnc5Fid7fr4WCSEGCDaKcoTyCGMJdMQj",
  },
  {
    username: "_ecardo5o",
    address: "13B5zGLfXBhRpiQ1xcnsNeqbHHcRRRpBCL41xCJxdYmYoHdW",
  },
  {
    username: "Victor",
    address: "16ccQnkURtaqixh8y6BdGAcNvhWpEeau4DvNQWPd8JHh1jUz",
  },
  {
    username: "Alessio Giannini",
    address: "165f7iSdtuh2zNTHncNZayVezGB8pVsPzT6cHbDgNeXkSEGK",
  },
  {
    username: "AxelBecker",
    address: "15rqj6yN29bxzbjFWxYGNB1TaRdqrESkg7SZNDDHTcSsjNXq",
  },
  {
    username: "Swiss Bond",
    address: "13EEEhiXeCFpFjVQxmjJsHjr9LFvnAurcnwQ1FDgB5LmJwQp",
  },
  {
    username: "_pacheck",
    address: "15SMyrAvYDyLVsfSPHtr3sz3zXoR87dPxzPxFui6X6mbcYvM",
  },
  {
    username: "DistractiveMarketingBounty",
    address: "1NUuRnRKayAxnswLiFFzdM1rzqyLGLEZ1Fr9ugecfV4hzyD",
  },
  {
    username: "SUBSCAN",
    address: "14RYaXRSqb9rPqMaAVp1UZW2czQ6dMNGMbvukwfifi6m8ZgZ",
  },
  {
    username: "DeFi_Staker",
    address: "13Y4F4GPvN9Zr8dPeU3PvcgUhEKiYw8EQcBKN4sypsLtEy6k",
  },
  {
    username: "Figment 3",
    address: "15tsaRbwLLBHst5chP1pVkQHc5n2JS4DcapFdhCnqJMZebda",
  },
  {
    username: "Gustavo Joppert",
    address: "13TXF3zfUvUa3ZKz5mQi5L4t8qXCZHbe5Y1uNmUR2UqdyoqR",
  },
  {
    username: "Web 3.0 Technologies Foundation",
    address: "16maYYXg9chsfsBVoiSbSWzmFveamERwShPZv3SB5hVnYTmT",
  },
  {
    username: "Yaoqi",
    address: "14mwSGdhdrAA3pGoKSX1tWguFREswWucAsr7kcHbdsf7fU7Q",
  },
  {
    username: "STAKE LINK",
    address: "12bL24X9u93byLWGj5ictw75bHTA8B3jxX4T4hnmGZJVpU7K",
  },
  {
    username: "GATOTECH",
    address: "1gatoakSkH4be8KD9Ekj5xCXMdAiGxieg2NfTg41s2UME5J",
  },
  {
    username: "Blockseeker.io",
    address: "131Qzz7SvHUn7zdDAt2jFZmzVsP2KkoiDWLZa9N7FivGTXpB",
  },
  {
    username: "LuckyFriday.io",
    address: "15MV2nX6BEoiBz8Ua2xNta19sVBKT7kiw2MEHdu2Jd9a4VaC",
  },
  {
    username: "Salah Plkadot",
    address: "15AVQns6K2B23UnDqdd9fSHnrQ72v4a1FtdiekAbcXMYJLeH",
  },
  {
    username: "ULTRANODES",
    address: "138X9xiStmfrWkPB8aogTyLyP25TkrGj6nEv3tYDZaxyjEgz",
  },
  {
    username: "yuviamendoza",
    address: "12YFWLtdFXwFWNPKwR2ppFy4sJDWXu93RxT9cXZQUgrmogo6",
  },
  {
    username: "Fernando cuqui marquez",
    address: "165V8s74haC3i98fGPAVQRd2myUGqWMD3HySzuUnrnY69dGa",
  },
  {
    username: "Crust Network",
    address: "12xWvNmBVt5541brRVANFaFejMrttu8tnBso3NgzsSuZnY7f",
  },
  {
    username: "R0GUE",
    address: "15pmMM8VbJC6oDNMhxZeoDEaatY6m2mimfpnSfUDtLZdABYS",
  },
  {
    username: "dotaccount",
    address: "1mrYuzfcUCjgxk2efSRhdbnpVvzJcMwPrFDLjp9rBPdq2Ev",
  },
  {
    username: "Polkalytics",
    address: "125PJW99jsGhULSVGkKAi5YKjCH9ZcfX23Htttzmevu6p7fG",
  },
  {
    username: "Bitskwela",
    address: "1QgMmM5QyTBVkC9cBNPVQszCTHjCBskFG1pny8zVprPSd1J",
  },
  {
    username: "POLKADOT PLAY",
    address: "1686qpqELuiQKsGe4U47tni72KWdrqJPvMdvzgCsy8HHYy4e",
  },
  {
    username: "shogun | OpenGuild",
    address: "16Q4j1WcsMCNQnPd6mDzRPoe3UXVv81uCJAewpKxsdHGFvSV",
  },
  {
    username: "Denis Sukhoverkhov",
    address: "1xpxpSCz86Bbsd5EBToKHSG8W6mDNP1ZfkcEawJDNfEp39v",
  },
  {
    username: "STAKING FACILITIES",
    address: "14Veky8svSfNbJyCtkhtRXDp3jB2hvmEtkdQpDjmJoV84Ngj",
  },
  {
    username: "DOT Staking wallet",
    address: "13gPX3TSDSeF3PQQqjpn556Mj5RzbVY4grAAPfUiBoNwbcer",
  },
  {
    username: "cryptovaquita",
    address: "11iahZEQ6qDFWHENAnDMXV9WVjowT6hpaDtRXx8YkfLUwSM",
  },
  {
    username: "adastreamer",
    address: "139FmAGiyRyBzALwDZAHMmx3xgdSvKxG454YyQNwdpChr1i8",
  },
  {
    username: "Trabajo",
    address: "13MZcnZKkZpEuEVZMMZdPD5Di7H7BCR4qEaDoj9obDvwQ8oP",
  },
  {
    username: "Guk",
    address: "17MGqG1n5ZBtnk5eFm9binJ6ro9STMf481MqSw3CwrbMGFe",
  },
  {
    username: "Blockchase",
    address: "13ETBT4j5iUqGjwAjVdoYzA1rzxQnexH7mgjhSTNnpY35iqd",
  },
  {
    username: "Simple Sarah",
    address: "13uTJaf3AcgAT6tfvMsuuhPvFfv6pmKVUuLqtxZQEBSGjBbW",
  },
  {
    username: "Rosalind",
    address: "12pMcFbpZ8P88xyCa5SJGx6NLcDitDDg3GdNKJ3MvEC93zNn",
  },
  {
    username: "COVERLET",
    address: "1KNoJGdAQ6KAur35cYQYHPnzMzhtAL6M3db59uanQJ1NPv4",
  },
  {
    username: "Social Media Editorial Board",
    address: "1VNSqFCX4Gk7R8kKBbEaYhXSioBGLrrL4kHgLwDkoTLkgqB",
  },
  {
    username: "Philippe - TapNation",
    address: "15aZNNnuhM4iJsfb8kvfHrGr6CeGBp4WmBfRaaGuhVtfbHq6",
  },
  {
    username: "Tommy",
    address: "14wFNqevHLngfCkBtNT3mRYjxJdeJkttewBSp93mH9XHjR5o",
  },
  {
    username: "Snowbridge Beneficiary",
    address: "12UDxESUsqUZi5R5MpovTZLpAWZXPVWHJQkEprcT6MVdKh3A",
  },
  {
    username: "0x59756c696120f09f91a9e2808df09f92bb",
    address: "13TgZ9VJ3fs4sTDdqXjzSf27JTrVu4yi6RsV72vrzuT7ytbb",
  },
  {
    username: "ABRAHAM MUGISHA",
    address: "1A3CAKernZo3hGaQYNmfuhK1wLG51VPhV95VH7NrHPVAk8M",
  },
  {
    username: "Dat Phunky Vault",
    address: "14MDTfBcp3ST1FBSL9m4MbqvHUuUQym6fMPgvPt4ABmxPJam",
  },
  {
    username: "MOTIF.NETWORK",
    address: "13YMTEPKAxPRiyaZdMKrozeNT9x1Pa5h7aExebCdi6nc3Qqd",
  },
  {
    username: "CigcolaInc",
    address: "14gKAiYVcuBkjE3nekRCXz4Brr3WhudumncPZbMpb8T26SA3",
  },
  {
    username: "Pieky",
    address: "1RHYMB7ZpUJozRkZPHZ1GJNg7G2ZUb7i4aZY7EEgfuL8kRG",
  },
  {
    username: "The White Rabbit",
    address: "13pgGkebYEYGLhA7eR6sBM1boEvq86V9adonjswtYe1iDK2K",
  },
  {
    username: "Dot wallet",
    address: "1beMshy8jaYp2ZhgCc5B9uT8uERBZinmu4yMecyehLUTqXK",
  },
  {
    username: "Polimec Foundation",
    address: "13rR4nr2HvzqQjDMVSmkYverHBxoMKsSr2WriGxwKxG69FcA",
  },
  {
    username: "w",
    address: "14K3Xux3prViYTRSNkB9Es4ijoqgYR6McPKQ5wdAZa9FsGVJ",
  },
  {
    username: "lightning-strike",
    address: "15dLWAUwegTVMNivZS8iTDyxSu2yYkBAk4ePvE3MYgjj9CJw",
  },
  {
    username: "PDP_Validator",
    address: "16Y3FmTiJ3ZYAUZrf5rZtxrQJzcHsDBdscpu2zgMD2xN6NY7",
  },
  {
    username: "@polymawutor",
    address: "15MeBRWNTjKgnLY9QWVtSvLJgDCptYTnbTfMEnBHyjkU1SYZ",
  },
  {
    username: "General-Beck",
    address: "15FetbcSf55WhDyaj8uvo7oWjSxFDaSZMHsCTe8Usddq9AjG",
  },
  {
    username: "0x4a6f656c20f09f87acf09f87a7",
    address: "16JdX87rA15Fk7hFFvAH1o6T1W8y5i5Dr8HMaAKTcSawDMYf",
  },
  {
    username: "David S - Logion",
    address: "12GjotDNTmRsZHAQrZp9rwwRKRJftMkbD9Xht47Ky6MMibXR",
  },
  {
    username: "TuPrimerBitcoin",
    address: "14av66vARUGPD6pJgJgz2rfd8KXRa5nBV9LCCedcLjJtWqvk",
  },
  {
    username: "wizard amigos multisig",
    address: "13jTmeDrv75yy8DVrmTQ5fFs4Dqdo3STF8uRG2DVqAJMgYxe",
  },
  {
    username: "roiLeo",
    address: "1vET2kz32UgZykzfbduJ3hsy9jZeL7PA4wHcpytMaY2azNd",
  },
  {
    username: "RobinHodl",
    address: "15vvAhHcmop8PjP5QNr3mXzX1oesv6vjun25iSgMe9YpDezv",
  },
  {
    username: "DF_Team",
    address: "16MJX8HEwhbJwN9LCKLymW812eD9N97c5EkRNVjWzhFTwhBN",
  },
  {
    username: "Chris @ Granted",
    address: "15rEQyoXEA4FnQmC91iPjQ2SVDcomi43GcEMqJFpmiqPGLGG",
  },
  {
    username: "Krawiec",
    address: "16SE3e2wrVNUZmEjWcioAEox2PXzkxeTvwCW3pTTWvmDQZJi",
  },
  {
    username: "LetrasCripticas",
    address: "14oXKeAz6is3wp75Wm3w5SBgzoYNbg7NnX3YPyt2N7T4Jaqo",
  },
  {
    username: "Le Comte de Monte-Crypto",
    address: "14rGj5dq7eiGJoDQsBHQhQKVgW71X4WLjV3TmBsJLHBxNw5x",
  },
  {
    username: "SIM-DOT",
    address: "15wbv2fXuFoeRcrWK4Q1Y5oM9LfsJyGmMXaUWDoAWXpZzWSp",
  },
  {
    username: "Pareto",
    address: "155zr27DvBphq9b1HkQbsGewtY4MueVG66MAG3LgUywbPUWj",
  },
  {
    username: "Amaury HA",
    address: "1UEqte7KQgX7NafP6kjFuPJt3xPKiCR33XRiUkQEiUkXiuq",
  },
  {
    username: "ORSEN_SEAN",
    address: "1eUsBZgJuvpmVNBrBSRQ9gjPTuH6QMAnQrdwQ1ZXwa5FEvo",
  },
  {
    username: "ragnarok",
    address: "1Kj4N97RYKMWPYUcBEYP3JZpnuWt2LgnRfk6Evc4nU4XSAF",
  },
  {
    username: "Cris_Pap",
    address: "152WqfwdjHDwJBKfe85wXHtRsSxhcqGw4Qn3LmTa1ix1mSXY",
  },
  {
    username: "Kevrev Polkadot.JS",
    address: "12QWTgUAUd8s8ixMssHo9M2HoFf5sVdE3JufEX3QepQFvuJf",
  },
  {
    username: "chethack",
    address: "1Vwqb6r4q8GXyQfhn7kqCU7bT5JfRGe8HC3gz8VqAzQr8JR",
  },
  {
    username: "Sl8te Platform (TokenTraxx)",
    address: "15tmfZitix68MgwSGLVBm552ymfgy5ceA3zdPeiKKV6m4seY",
  },
  {
    username: "pepearaucano",
    address: "14TYcDnUxErrjP6zsye12WSGxnucdLDqJik5LEsHnjxKnp4W",
  },
  {
    username: "lucasvo",
    address: "12m16pNVG4QKDsr3d9hA1TMjNhSxdQaztqZ5jMC86HLba1Qw",
  },
  {
    username: "Tarik",
    address: "14pUV6r2mfcH5u6mZZ7YDBMzbQB5JJQpeT6fvXB6VERPjJJ4",
  },
  {
    username: "TheSussexTrader",
    address: "15gKrjRAmtn6tf6S94kSoqsc884yqKhAujvmq7y1oouGrBVm",
  },
  {
    username: "cartagia",
    address: "14pa2aZaJ2VALYGFeSNW6YWhgPeKUR1R6kscY1bqhnfE3ETm",
  },
  {
    username: "Profit link",
    address: "1UKhoRCN6R8XeE4c4vwaUdeuxGcdMfia6mYRaeEWtNybkZD",
  },
  {
    username: "Roman M.K.",
    address: "133BE1QFPWH3WhryCyV4jd8zHx6p8ZsmgbbPC1oH6WyKJSy7",
  },
  {
    username: "MantraDAO",
    address: "12NMDvLHp9BGbkaKay7hAAKMfFu9XUDHNoWLvFAeoCGUwb9f",
  },
  {
    username: "DEADBLACKCLOVER",
    address: "1nPuffWS9FW54fxQr9jgvqoUMveQvWhXhGM3gegY1m7RtfY",
  },
  {
    username: "NOVY",
    address: "16SSTPeD2UW3hhnuRBS6HjpxhzRFBrRf2Wupxf1iJgMkhBSD",
  },
  {
    username: "EARNSTASH",
    address: "15SPD9eHQPxwKFn6dBLewyDuoo4wcQeByocub1DTWyXjx5k3",
  },
  {
    username: "POLKADOT BRASIL",
    address: "13diU7uqcaa7qhswB8Yt6HVKbKWKQRQrJ7AkWL4982GmAvfk",
  },
  {
    username: "PBA SGP WAHYUDI",
    address: "12xh5hJfkbwGyvLXaJZCp6RXNVd6K6M5mDxpdEQaKnFcYRET",
  },
  {
    username: "OneBlock",
    address: "12BJTP99gUerdvBhPobiTvrWwRaj1i5eFHN9qx51JWgrBtmv",
  },
  {
    username: "judasfeeling",
    address: "12ityiCM6aQa62aoY18UTLpmQVozHCw1ZKuvFF9XQhseNvCP",
  },
  {
    username: "hofvenschiold",
    address: "12KshZsdpQueMDcbLnoXCYRt9z5dzknGkzCQau4LxUi7r4bx",
  },
  {
    username: "AuAgent",
    address: "12ov4mn4SNjFh3D7TeQSMU6F3QGFByd4sfvnzVGv9jtrPEyG",
  },
  {
    username: "bane",
    address: "12KoJkx99U2dPnZWjjgMhRT8SvVgCukktwoNLDBhEqGmpQa5",
  },
  {
    username: "cybernet",
    address: "16cybxZ3EQ19q2Jo5Ws9gpTxf8HiTrPw4CZsF7TNikqnQf3i",
  },
  {
    username: "integritee",
    address: "14xQXJdUDC1pzyt8y3z27ANiUBgP7zTSaYutaLELJoyQrdLP",
  },
  {
    username: "0x527562792d4e6f6465f09f928e",
    address: "13mjnUDrHwYGATFB1FkFkZ1U3kYFsAQfHYTdcc8p3HP1xzZA",
  },
  {
    username: "Crypto Banter",
    address: "197nLd2rFoesjmvTfMpkFhHde7ngKzpLaA8xsbdWyeaJwzx",
  },
  {
    username: "Brave_Official",
    address: "15vyiWu8RsoAHvSy6BDUnAnZ3eJ615EHM4n1EJNzgycr8X34",
  },
  {
    username: "VALIDATHOR",
    address: "14AcC1txQWT8ZUkk6nfrhuB1jwoTyG7Aeuz2Mcf3QT52aaPh",
  },
  {
    username: "Lucacrypto",
    address: "14g2mcpaEJoMCpnzStbYTTRKcZsWAYeKUzdE8ph6jYCrZuPS",
  },
  {
    username: "Polkadot Eco Researcher",
    address: "149FXUmHgg75z4sk2LzFDyctNLHhzf2YxGMFHT7TakkbeQ7F",
  },
  {
    username: "Machala",
    address: "1emX4nsNHZwbbCej7UMC8gKNpXoy1K3ABwRmnVJLg5Z2PU6",
  },
  {
    username: "WDMASTER",
    address: "14PkBX3BUF71wDh44BLeNby2u7X9ZBu36V28LMcBrdK35yC2",
  },
  {
    username: "Beamswap_Team",
    address: "15zT5nrMkpK4NdQRCHdpMvLCaU4Mt2ekVP9hXkPzcMwPNEw2",
  },
  {
    username: "Aliyun-validator",
    address: "16K5PBUn383aDMJsokczUPC54EoSaW6pHArAmPw3i2rJPTY",
  },
  {
    username: "polkawhisper",
    address: "1ZhtPxisW7S6wNWL3gYWfh6rkM2jPsuPr8Xvs2vJcRrFGBF",
  },
  {
    username: "0x42617262656ee280997320536c6173682032",
    address: "16a7Pu7HVPGPVCDJWW2qg5o4DxnSkYYncMWPzzT2EV5SB82Y",
  },
  {
    username: "kakoozavian",
    address: "14B1PDcrx2NUH9NVYJg51bt6r8QUqBFv3akZcadi7c7tNskA",
  },
  {
    username: "ChainSafe",
    address: "149mJjdQjEBMHHbWDjbLJ7X4e95ps6L35DZVaBzn1raR1EVQ",
  },
  {
    username: "Polkadot Mexican Collective",
    address: "15TzZpYZa2rwfBNKhkDzuU1JApgACxD3m6pcaNt4SZneYTV5",
  },
  {
    username: "Vlad",
    address: "123aYPPkoNxC93GUX5Ug2uWTq2iBTWohN35gCc9rGYZfTy5t",
  },
  {
    username: "Parachains Auctions",
    address: "1NfxrEM74c39yHQDrCyhxKWqLjnghSyNyeek2JSqmewAUdC",
  },
  {
    username: "0x46726f67f09f90b8",
    address: "16PpE8pMFscQ34aCbFcCqGmmhj9HFyDJJxKqZNQse1kVjyXc",
  },
  {
    username: "s0ftmachine",
    address: "16hvs1bLEh2bCATniWAea1iHRhd3VdcHMBENv1qwK3og8yFx",
  },
  {
    username: "Anoy",
    address: "14NL5io4SPtkuTj5b7HEQTJPqRmPbPzrMPcDgv7xwG25gBZT",
  },
  {
    username: "AURORA STAKING",
    address: "1581rYQJnJWbso1a75KZX5mYt6VkxqRwEVN4oZeMWQYTwkfV",
  },
  {
    username: "Bitcoin Army",
    address: "12zYtHDzuqiwetHyAZQQkjfsstrurxxredUzt7dMX9DLqF3N",
  },
  {
    username: "StakePool247",
    address: "15tvRexXueswBvUpfJQZnkJHwdJzh7nHfoN4NMBGU8so3xGL",
  },
  {
    username: "Indiko",
    address: "16DhgEf5MnSvEPu9VsHrSpK9Er6eaQtMUg4bf4JMt1rCuqX6",
  },
  {
    username: "Luke",
    address: "1cAsKZYNRb8dkSCpn4eVkEn6ycNZTGoDo5dGDgB8J1UUWK8",
  },
  {
    username: "LOCALCRYPTOS",
    address: "15dMdEYxCM9EWtbBdDf1vEvRV3se1tpvvxitFCURXV2jWArs",
  },
  {
    username: "Hoon",
    address: "15QAGLFWG6PFGh2wLzZBtmQ9umoQgHutqAstm6z6j4p7AjCV",
  },
  {
    username: "Polkadev",
    address: "12VbAMk77ESYkdPA9Xh46rhHuiWvk6SrowzKLFM4qwkGazNB",
  },
  {
    username: "JelliedOwl",
    address: "15AxeitVU5FQ5nV8P9Dr7AXXNQBXgFSem7NZv4cicxeTK4v4",
  },
  {
    username: "Kims Car Notes",
    address: "16GB3xp9MT4USUHVsZFs6t8wzMA9cdgGSPe8Dr4fMiNenyMr",
  },
  {
    username: "Regency-008",
    address: "1A3tB66K3gXr2HGDN9jTuPVxjJUNjQmC4kp16iRyco9nqzy",
  },
  {
    username: "DOTAMINA",
    address: "14dfHJDm27ep5eAtgXqr1wjUYnK3p5LhgzLcYVX3tHRFsVo9",
  },
  {
    username: "0xf09f90b05f2e2de3809020435259505449445320e380912d2e5ff09f90b0",
    address: "13WUmFcytjeAotnxioGkmbQR9HGYhodGyK64Bv6JrspEdCaY",
  },
  {
    username: "0xf09f8cb74b494e4420535452414e47455220f09f8cb7",
    address: "1y1GG1WtSiygitoFYuxnrtt3jo3XTVQxhcG2u9vvu2uR3ND",
  },
  {
    username: "Geralrock",
    address: "13343zPsd3yZhwpAphFysoVQA3De2vDMELVMxbgExpHB5UCg",
  },
  {
    username: "ZeroDAO",
    address: "1jrZeromusGxUNgXncA6XbdWJCpbjZs6HZZjczeEZ97sK2S",
  },
  {
    username: "Lenguito",
    address: "12ELL9BzwsGGM948o3cBduLgxuBwpC6eUmgExTGnXqSfikqq",
  },
  {
    username: "Polkarob",
    address: "12btwt8HvnMzPp2XFAAjfC2MeSsE3dC6s9SjcafwmkzeUYjY",
  },
  {
    username: "bank45",
    address: "13Ye6fZBZqPmfBMM2qZ3vqyzeKXqzC36WQ8GhWho7iiG5m25",
  },
  {
    username: "SubQuery Controller",
    address: "13uqeiKz1Usny6EfbiKSyN265W6UBQPU7jW6XfWRqDanprw",
  },
  {
    username: "Greathit",
    address: "14WCf1Sd5CgUCzvzvEuTZLb6ofgDz9DybRYhAogoyVLKxFLs",
  },
  {
    username: "Currencyx",
    address: "14iQfZCoj3uRcvau6Wxk9Gy9UXQZrChRZZNFVdBPMTJxmtuP",
  },
  {
    username: "joie_pink",
    address: "15KJRwpyuBmZck4szmsKvDs7R6xRR9YkbPAav7wcV4xQEt3J",
  },
  {
    username: "rocknode",
    address: "1797PhCUAT5fryNJDFNunwc5PRA9giRMNwVeg52M3AiNEzB",
  },
  {
    username: "soramitsu",
    address: "15gNLfW5Gm4wDz3yNzRPrLPTrGxLGAo5WimVjYFvLVbwbYGP",
  },
  {
    username: "MK",
    address: "16DWzViTodXg48SJzRRcqTQbSvFBxJEQ9Y2F4pNsrXueH4Nz",
  },
  {
    username: "The Center Party",
    address: "16htP3atjNbcaZXx1owdKehUPn3zb6oVEcj8s43bbXycXujL",
  },
  {
    username: "RocoSape",
    address: "16LkUhjeG5WD74mYbP2V9Jx7KvJ6ENuqYFc9dxx9xyFtDkFV",
  },
  {
    username: "lux8.net",
    address: "15dQ718Fd6GmYsCrnkWmonSzdi9bp3s7bb8uAuepzcdWgz9a",
  },
  {
    username: "M-O",
    address: "13MZe9kmpgXaG1zs1mo51QFXyCvaCevNB7YxP3VX7rcbHcZm",
  },
  {
    username: "Nikola Mandic | MVP Workshop",
    address: "123jNGxHk9ZV7oVVhFWFtMghNpmnmmTWxSpNxf8TTKzmCSQ2",
  },
  {
    username: "tododecripto",
    address: "15V2eerTdn7GwAudPkLiWWq7PJdZinx7Lx7qSq9nTNTBHi2j",
  },
  {
    username: "KAMEL",
    address: "12YUDdiZCHE47WqR6etGD4gfdpSUhrRFvASrVhtc1RcbLva8",
  },
  {
    username: "BRIGHTLYSTAKE",
    address: "1CUBGfKnpHCW1AZbdJGGj1dihn4QNZ623THYs59r6yuPEMq",
  },
  {
    username: "Gabo",
    address: "1vfmouKGWQEJSpUWRqYrYLZ865ps6M7TDSu5kgfSV6tPxLf",
  },
  {
    username: "Basilio",
    address: "1266qHX5SXUGzcTKhQHqDRqaxbJm9N6w1FqY3YMRELwCmrSr",
  },
  {
    username: "wallet polkadot para parachains",
    address: "1552LyeHJsg23foJvmPUTSYc7JwrtNoK4hw4e2f5FDfv3ByZ",
  },
  {
    username: "UAI",
    address: "12YMJoGioHTabgPT8BXWPHtUHVYLxRejbJGM5pkxyhDA49nH",
  },
  {
    username: "cybernetwork",
    address: "16cybo7mLt5P9WvT2iFApXnWiig9LtXtTJB6DdofHiX3qaFh",
  },
  {
    username: "1015814",
    address: "14STCt64BaqySTfmrjogYMe4SwjQx4DkLDye1MBYqg4J1rnk",
  },
  {
    username: "Shawn Yang",
    address: "16hthZpAG2iecci3YBGiAZnJQT4aZutQv4jfBTCPuhDtYswC",
  },
  {
    username: "Cypher Labs",
    address: "16Jh21ThTh2tW98NuN2gM7Q3KaYiuJLbxCNbuBkFpwcDkRqx",
  },
  {
    username: "honeybadger",
    address: "1xjQ3oMzoD9YHkoXUcduUpAwent44HMQDqzAG43jwauHBYv",
  },
  {
    username: "Jafar_Composable",
    address: "138RTBjvMvuwL7XA13Pmbed2MPHmBwznYozKbAMBVn5TNYwt",
  },
  {
    username: "UBIK CAPITAL",
    address: "15iwm1HrcGiTZoZenijMTCayRD3hM2RpKde3LrrNxPKAMjTg",
  },
  {
    username: "GabeKoin",
    address: "14iWWjHr2VLTNW2p5ZzmqNeD1ox2udjsU9VsP5k3murqeNiJ",
  },
  {
    username: "Walvis",
    address: "15p548QQZtBvrar7ApceCqbjJiPUF2fr9LTPJefFBx5EaKxA",
  },
  {
    username: "0xf09f8daf20486f6e65795374616b652e78797a20f09f8daf",
    address: "16k5oJMBY9QXCnKeMhMmQwyStcM7sRGfbbrTiHWL2m87JJP9",
  },
  {
    username: "STAKECRAFT",
    address: "13ogHzWQksuwuw4dv6jph1GHGBxjSP8qzwRJzT69dhnhYEv2",
  },
  {
    username: "xm.tnsr",
    address: "148puzmMokxGVvdynK1dMPwAJzbsGva4arpPDqKzHCcZWHxK",
  },
  {
    username: "Nestor Campos",
    address: "1h4wvZjS7SAhc7z2gMNEV26Mk7CH4zV5bG6UygGmrGxUd7s",
  },
  {
    username: "InsaneBra.in",
    address: "12T4wTjFf3kpwtBkYjPk1TQaLFDeBdwNbcjnn8BNiSGeMmFX",
  },
  {
    username: "Angelina88",
    address: "1497fpQ1HztHjD8QD5SPKaWxPK6ZHPau8cqwsvBMyzqVujk8",
  },
  {
    username: "jesus",
    address: "15BBGVe3Hq9pz2hZ4g743kRyPpx7Z7WEBwfeq7nxKCke9FPL",
  },
  {
    username: "Hatem | DotBel3araby",
    address: "16Hrr41ZJWTgswuqpqd6ig3Habi6jKLSjzRkFVgvhJpyyR9Z",
  },
  {
    username: "Ba_ss3588",
    address: "162aHxWgCHdU6gLozhqGU6miAsWrmYRLGAE1q1n8iKXdHnWG",
  },
  {
    username: "Stash Account 1 - non ledger",
    address: "177xQ9VWWG5BDgbU7nzhr5th5AVXyEMYsNF3MPzaky4XQ1c",
  },
  {
    username: "xinxiangdesign",
    address: "129D99R8eb4yGvuNqc7iqUsBqrtZAuXTjU9stW2TqoKgGEM2",
  },
  {
    username: "ANAMIX",
    address: "15kkg1mK1tCGgqqo3c1CghtKCQsBEAPPjYNNmmRT3r29FeRX",
  },
  {
    username: "abgar",
    address: "12zqozWYvokd2pN7Rr9JEtpfxAcUP7UmwS7ocGmf7rXpLeFG",
  },
  {
    username: "AppliedBC Labs",
    address: "12v9P5yVuZdrF2aua8drPhPUdS9mMksfPoY2tTTAGSH8VZMQ",
  },
  {
    username: "Treasury Guild",
    address: "1jJNkXGhwskhs9sRVgf9eopD3ccvYrNZzxiGizhexej1Zn6",
  },
  {
    username: "Marti",
    address: "14E23RAGDDkUQ2xMX8UvQSmBh3pYbArtqUXvN8X9nrStjSCs",
  },
  {
    username: "Shorty_35",
    address: "13H9Z6R1GaWnx7nvX1hgFXPCpzFb76kKEJ3jvy741yJkrz8g",
  },
  {
    username: "WebZero",
    address: "14EFjQ2iut5WMgYDXNo9pSbMVEczwMuta1SddJ6KhTvGHU7F",
  },
  {
    username: "ONECRYPT",
    address: "12TRArYpRaLgjTCVpW9aPhU6jRZKPK9FLXHhAZAhDRppv7rb",
  },
  {
    username: "Proposer",
    address: "15YLDvV6Q2NUVEFBN26kRgHyyeH1Bu91NKTwBg3xW3hEVfoj",
  },
  {
    username: "Dot",
    address: "12jcovQrL54jiUfdVKTFtoDXGfjteBcDAS7i4W4UKs8jaxhd",
  },
  {
    username: "LiranPendulum",
    address: "15pDmfFoHE8hpx7wdxdzU1k3HXsYzQD7om2Z9D5cewbdUDwT",
  },
  {
    username: "Irina_VER",
    address: "12ry7wPEGeBSceWTZXgMTpqLDuP4Kd6rLJYUx3qVwF1gbSNs",
  },
  {
    username: "Figment 5",
    address: "16fcR1ercimd6qyBVQyXTTjtWL1kosTS1myiSuVf7kxutxvg",
  },
  {
    username: "MrExcel",
    address: "16dApD2ox2qV2mA3u2xiR72kyAGE7MLbDxepZUFkcSJz3Gmw",
  },
  {
    username: "ksMoon",
    address: "16kCSBJyvzGLKXgGmxRc9N2f6f8WQCFYp8RzndVZPLuDxrau",
  },
  {
    username: "davxy",
    address: "16Q4qkRcWd4r8196dVGNLYVfy7H86MJYJBMockPaMigFXCyv",
  },
  {
    username: "Polkadot News Channel",
    address: "14SszHRmSLsND9PVR6QG5nPxbMb2PcndRMKyaed9eHdbsTho",
  },
  {
    username: "stakethat",
    address: "13iXZVPpXuRnrSmKsqM51NtR8nqD5arfovegQT75r3Pp1Hpe",
  },
  {
    username: "0x4a617669657220456cc3ad",
    address: "1U9NbBVpku7VYWtGE5CFTyyaTVTNBrfyXDNETK89uGDD6wm",
  },
  {
    username: "Cryptodingo2",
    address: "123zffWtt2Q2op5AuaNzSwtqaEyuszvKtm5iaA7cREmUDC9g",
  },
  {
    username: "Georgi_PS",
    address: "1HPKZzzd9nyr2DdvtPxytNMZm3Ld5nh3BBY4Ecgg9JxgL7G",
  },
  {
    username: "Wetez",
    address: "153acrz21joSN37VuCJUpZdhyTJivo81rJVxNTrnY3GeVWeU",
  },
  {
    username: "0xf09f90a0205354414b4546495348",
    address: "13fishTQNJDUuofryErKTcpkexxYgYX5vaERdAsqWV8veUHg",
  },
  {
    username: "WilliamFreude",
    address: "15MhWJ5LecdtTonmfZiVpu8mvKJz4yX7icT88Tg6fqmKKsjY",
  },
  {
    username: "Ketut256",
    address: "1jpBrvd9TFyHiSoC4Z11HRGdt9kWiRwKACs3nBFZb6kbtCE",
  },
  {
    username: "Mateo",
    address: "12xoHfGQZHuzk88dtVepVCR3ZqX1dE5PiuC5cXBAgHy1gyH3",
  },
  {
    username: "Subsocial Network",
    address: "1qJYeDW6TxFvEMm6PeMPjjLzAGWHTsiawMA7tzkLtKR3q4E",
  },
  {
    username: "JoergStudy",
    address: "16husCnh1Dbhd4oZ7xooqxQYkZXpxG5s2zLiwUBGDjVhmGXT",
  },
  {
    username: "Distractive",
    address: "15oQVDJKd4zLzUvkTnan34v1VPRguduo1uEfs9GnvKjD6Yng",
  },
  {
    username: "Murphy",
    address: "15cbhWuX2kNgeQCd1y5Rt1m666ze7yfqxW7tygf5rBUeoX8e",
  },
  {
    username: "Nodeasy",
    address: "12dvyqCFhVubTDqMdojyjhkxVUMaYVXWLv8uZW1NomUunPmN",
  },
  {
    username: "Yung Beef",
    address: "14x6ah3J21QonWASv6QKwqd8SWrS7ddqmMzyRCmGQWMaPzae",
  },
  {
    username: "logion network",
    address: "16iP1dKTnkny2uzSvqVBwzFCxgEShZHAarnpcXj99H3gsW65",
  },
  {
    username: "Wallet Hitsch",
    address: "12KR7162NTCtVS27H1TaVE2pf9nPyF6F3NheNTdL1DzC4Djj",
  },
  {
    username: "punkrock",
    address: "153RzmMmQ2ueHgD71nRcfcs96VKhFRPYkW2h1qw18Bn1Jkrv",
  },
  {
    username: "CrisNguyen",
    address: "13Ec62Cvw9jmPxA23EidSwASPs9X2Vohqv9RCogCfDvXC4c8",
  },
  {
    username: "0x4d61746a617a20e2a793",
    address: "16ZwocRmk9McUZuyivwovuhHsCWbhSeDS28JwFUsD4AbmXja",
  },
  {
    username: "Exotic Stake",
    address: "14tfEiQ2DUK8Q8upjtMBa5GmWNZnKCwvtJrrpfUGfjXiyoH2",
  },
  {
    username: "SPANISH BOUNTY V2",
    address: "15yCYoKFUcAZ7UdTe4oGzF4uzNqSaKRaCABu6Ai1jeEBNaC1",
  },
  {
    username: "JEEPER",
    address: "14V7E1yX4HE6LXu2f9ubLuJ9o8N8GuwUyUEspvinuZsVPpXi",
  },
  {
    username: "Kogarashi Network",
    address: "1L3j12S8rmd5GvJsxzBQzFKypYX5yV2kLrPJhacUYVrLvus",
  },
  {
    username: "vonFlandern",
    address: "12jtFwn8Kvnqd2JEEtRiCfBaSFVY9NQivSXHJc93gTbdJkNe",
  },
  {
    username: "0xf09f95b5efb88fe2808de29982efb88f70676f6c6f766b696e",
    address: "12vF66xKxo83KxaU77kFVkc2o4VUco3tbE5TH52A8SWARAiX",
  },
  {
    username: "Labadabadapta",
    address: "138uSbRFgLuQH8UDLsSiKLm8KF1drs1twS3xBd46RYCK3yUq",
  },
  {
    username: "rockbmb",
    address: "13jBAtYJar4xujPaEx41FxjSt9PqU7LqJRbySJiVdMtuWN42",
  },
  {
    username: "eskimor",
    address: "12pRzYaysQz6Tr1e78sRmu9FGB8gu8yTek9x6xwVFFAwXTM8",
  },
  {
    username: "scaleweb3 - jrmr",
    address: "15yAJZcjkcpzPWyFPGzkms6MKGKYs3QpW4vhRCeqQewxKtPL",
  },
  {
    username: "InvArch Team Account",
    address: "15g8f9DZoEjJnneMUREZ1JgGgtmqEmhxAGCJ4JtZNjT8SiZ2",
  },
  {
    username: "BINANCE_STAKE_13",
    address: "14GWWeZzMYkR7bwyeBvq7c44nJr4ncEodM4fAJX89ZSAHLw3",
  },
  {
    username: "DED Tech Multisig",
    address: "14EV92HWi9cM1NJfgiJy7UVVPcayh7jxj3jPmhW4xSA1mCWn",
  },
  {
    username: "amitrovich | Unique Network",
    address: "12ow3eJ3vbjeNRahUUrBnc98mWeJTSQ7rJCAVqiFQDEnzbu8",
  },
  {
    username: "The Kusamarian Treasury",
    address: "12bGMDcbrHg9PAchGuq8D3UyTHjHAdZWEftB2R9aBNGQHuw2",
  },
  {
    username: "SeanMurphy",
    address: "12To46x9LZLaUGvhZcHwm3LDR9hj3i7WxkNDYtYCNdSz7Mvk",
  },
  {
    username: "theblackhawk",
    address: "15AU7Ydb7gN4WfJ6LYBsz4tqJC34EnGB3xzGpzSAcBGBqZbR",
  },
  {
    username: "ZKV",
    address: "14TPbANdANeLKVXDJqoeE2Ft5yDXFqemyJJSprG5teXaJpPQ",
  },
  {
    username: "ConorDaly22",
    address: "1s2mPd5i2ryNafYRVueZbKSnYFtjbTspaTssjctDWL3qNJT",
  },
  {
    username: "Polkadot Account",
    address: "155FYA1Cy6B51LZhHo1W5cSf8ThG91Gtw8cg6hjAcZLLhRAn",
  },
  {
    username: "Royalagency",
    address: "14rGQwhimTEkAAmgZtRSyYqQZW2ntNqpUCNHXdBTc97g7P6c",
  },
  {
    username: "Blockchain Rio 2024",
    address: "1Vdtokjuep8GsGH6355BNduyNoGaCotLJ2LAjSmGTt1fBmK",
  },
  {
    username: "airlyftone",
    address: "15j1m1Lu8en7t74pmc9hHPwtLFpRkvuqGfwSbupy3z7j4YCC",
  },
  {
    username: "Blockchain Integration",
    address: "13fjH6Xsrxx6xucRpwLYbDWeSSmwhMQ1pg2FxhMDapBLa5to",
  },
  {
    username: "sovereignnature.com",
    address: "12GYnFHZcdqsv4m5QNfsM6qKAryrmG6271oyJaeFqkQgmgmv",
  },
  {
    username: "ALGO | STAKE",
    address: "13YCC7wri7FDmdp2YNrV8LeTUabGpFc9Rhzp9tnqwxYZ3fX4",
  },
  {
    username: "Nmarshall",
    address: "15aVbh9j99DyEJo9pYDs6UMB25ybHAteb4xmjnXkiBx855Qo",
  },
  {
    username: "Polkadot Brand Bounty Curator",
    address: "16iPbcL3NrdYWNVZ8uYmonmBuVmuSbbQLL5ECBvDxcSNyLPT",
  },
  {
    username: "Jose_TwoPebbles",
    address: "167YoKNriVtP4Nxk9F9GRV7HTKu5VnxaRq1pKMANAnmmTY9F",
  },
  {
    username: "Hashaam",
    address: "14PiYAUyaWAaG7dW8vAEf75bXjR2zVBJrPoqDFz4Hng7Gvod",
  },
  {
    username: "0x466c6176696f20e29895efb88f",
    address: "12gtHEvUQzHV2n4CnYsHZfs9iKRaVwssaLsP3xHbqwpapfH1",
  },
  {
    username: "Polkadot@Token2049_2023",
    address: "14cFTN4jFFiiL1qszmGKZjokAdNr4YSD7Gf5rhZRA62TrtMb",
  },
  {
    username: "Gontajones",
    address: "1UQC7Vs4zbywp8CbxcCCRUyyRqeUZxq9aXeD8UZ3MpLUy12",
  },
  {
    username: "will",
    address: "1481qDmGELXNaeDi3jsLqHUSXLpSkaEg3euUX8Ya3SPoDLmt",
  },
  {
    username: "jrguilherme",
    address: "13fp87SGGtXfCEdwqu9v7tVcb34gmhEGM1zDHvDAFzC3Yjk7",
  },
  {
    username: "stake-pool.eu",
    address: "1En7Z1sfE8Nat3qswkRfXzXQmzWSDkJwqoAs7JgZzzRoVSD",
  },
  {
    username: "SPICY TACO",
    address: "14SmaHQdCBwKy7iKqK44jpUVp9VMb7DFAxitLenSCcWf6kdu",
  },
  {
    username: "Emil Kietzman",
    address: "143faiSeYd3agjdp5PBbg4iuFioeRJyC12ZuGsXJRGetaBNU",
  },
  {
    username: "The Dots",
    address: "1jdqZ53uEWAVFMGD1FCYsUyu4BpqrbgwRw2NpKpPPPQEG2z",
  },
  {
    username: "MileDOT",
    address: "15M5CfDoWRo3Xjt94LkpobzkPySLut6iK67bg8WHFDaHkc3v",
  },
  {
    username: "CryptoVirally",
    address: "14QQcaXERr6kzwW55L4GKmN8tC8NJRoGt1jF5D8GMWoXdyaz",
  },
  {
    username: "0x4a6f726d756e67616e64204c616273f09f908d",
    address: "16YA8Y886DHxP3SgpY4Qws6BczY7cfJQQ41gFsPoK3N2YEoL",
  },
  {
    username: "ZKV",
    address: "12TMu9SfptC5oVAepyr8fRzRAunrSXrUPW21eyWHTkwW2M9S",
  },
  {
    username: "Vixello",
    address: "1qjNXPh99ExYXmuqHgmvfmmwjjka1M21jaVDPddZtKZhzKH",
  },
  {
    username: "0x44696f6e79737573f09f8d87",
    address: "12CJw9KNkC7FzVVg3dvny4PWHjjkvdyM17mmNfXyfucp8JfM",
  },
  {
    username: "Raj Raorane",
    address: "12K5AcY9cUxTWPWMqmDhRdba1mBGD1M1bLPch9pky1pwgYQW",
  },
  {
    username: "akru",
    address: "15akrup6APpRegG1TtWkYVuWHYc37tJ8XPN61vCuHQUi65Mx",
  },
  {
    username: "Parachainboy",
    address: "12WQMLv8itdKJ83R4y3qNGYCRrsU6bFjyd4ZvcE4tmJoSiPv",
  },
  {
    username: "Spice",
    address: "1e9EntTwwY4kuenrvBsmNMbedvzQVekiRPMFLd9kfM8R6vy",
  },
  {
    username: "Polkadot.Education",
    address: "142F2kcoHsG6QXf8aSaVk5RCKQDw8zDW147u38FiFXQCn5YL",
  },
  {
    username: "tmdv_polkadot",
    address: "14wSnALBUv51KjbnFhb4wBMLcqzh5kAsAM9XXFvLZQAE6NPG",
  },
  {
    username: "JJB",
    address: "1HrrtSvwq5zekZNHSjsARu35sfo24wJnm8o6gQZt4CUnKmU",
  },
  {
    username: "0x4379706861646f63f09f91a8e2808df09f92bb",
    address: "12bprALAt9PYJ5gqcLpLfevnGH1Lfwnkk5CyZYaWqatGJ37i",
  },
  {
    username: "Te0",
    address: "1kDkgVA8W7SL8Z8dbR5dopqmApt4JS5tnWB4KtdEtEM6M9p",
  },
  {
    username: "0x5468696261756c742050657272c3a9617264",
    address: "16dBWtYP2EH91cP6VJRFzPg9CmaY5PzK1LBPVmRRuEYEW5k6",
  },
  {
    username: "WinterStamp",
    address: "15zR3BoVMmpGsvJeVbC3nz2p3zd6zhDZsZUZGWjATowfGzX5",
  },
  {
    username: "Dot-Crptofollower - Stash",
    address: "1xRhrWWjDo33enFYW7uMQZYAGJCnwHgZvChb9fmsjKjZswF",
  },
  {
    username: "Chrinc",
    address: "11gh7WpYe5CKN82opEkrZUJsHeaFZa3pdEkEZFSMkV3k1Xj",
  },
  {
    username: "Mandalion",
    address: "13REFd4MQCbifonSrog5oRz7M9FPnaHJxbCYQvudjBsQqTw8",
  },
  {
    username: "Prueba Polkadot",
    address: "12GcCEaZFoMan8fj1W2a8NxQgyq6hsADbQcwSV8TeYZjiBov",
  },
  {
    username: "GatorKorps",
    address: "13MVd5aKnSM8ggnrMLS4uf8ysca8LXw8cSfCrizaLTg9oGZb",
  },
  {
    username: "MatPaul",
    address: "1U7J4yjQT8fJhsZW8SuqHxDvnoS2Z71EMemtTugmY2xts46",
  },
  {
    username: "PiotrFuel",
    address: "15czcAngknFwSsEYHHNpnF9RvC7j6w15kg6vVgame9fvXQR4",
  },
  {
    username: "AurevoirXavier",
    address: "156HGo9setPcU2qhFMVWLkcmtCEGySLwNqa3DaEiYSWtte4Y",
  },
  {
    username: "DavidCC",
    address: "19C7X2ayEGaHbRb7obTd7u2crJhYm6W47XpyLC2jQBGdpif",
  },
  {
    username: "ink!hub",
    address: "152xoRhkj7MuNKHmEK39xkgCWBfZbbr1p1FNdq8zMwYtBmrp",
  },
  {
    username: "BINANCE_STAKE_15",
    address: "15cqv5Ei4DB64t7undqpnPtskY7VGb1uwiGuQSs5u2UYfpXa",
  },
  {
    username: "Bova",
    address: "15VXCJD3XSdn4npvCgVzk292awn16FF2ktYAH7WWXcyak4Ap",
  },
  {
    username: "Dot.alert()",
    address: "12uokSRn2hmEWPZuzHK1xqnFxRgyoApLtXRBd4jFan2x2T1P",
  },
  {
    username: "0xf09f95b454555845444ff09f95b4",
    address: "16cSiUTqGavZULqZStC6wvCxiFrtQmUafsDknoTmhAbMT6Jz",
  },
  {
    username: "David",
    address: "15fwYGqzYLPTGfv5Bb8PG5rJoyS6FoTHXMB4PPimecBPfWGn",
  },
  {
    username: "brayo256",
    address: "1c733KazWsgMkCNSft7DPKYFv3zhs9PTbXksXxND46R9TS6",
  },
  {
    username: "Figment Learn",
    address: "142hWpBmGsePS1tSopxg4JWaRirGgVpZubz5h251m31KJXdf",
  },
  {
    username: "CryptoProcessing.io",
    address: "149QFswVRMBY3XrKQZ7YwQj4tkueHbGmzSZVw9Mhx3iJ3HP8",
  },
  {
    username: "0x4c45505245434841554ee29898efb88f",
    address: "12T7b3RzXhxyWUv3KXVgpb1R76duoszFcopdBnCsDCggfwzX",
  },
  {
    username: "Notifi",
    address: "14Q5M6LWDVCPm47sVvz6M6YAEsEi5u3Rszh8z5eC2bhL9Upk",
  },
  {
    username: "G3RQ0",
    address: "13xfZ6ZVmMGQ57Bu44yz7XJ6Xp9X9LZPMHyQEdF47ZNcWoc1",
  },
  {
    username: "Parachains",
    address: "163DCXoZ5gQEKN5nXVCkQNHZrpJk4C8FZyfgJ5PqkikqZ9Xh",
  },
  {
    username: "Sota",
    address: "13VyvkXX3dYyeT7oAmaipZYNHzFJXofC5V8eqMuzd1isXY84",
  },
  {
    username: "Meetups Bounty Curator",
    address: "13eB7Q6RLv57Wn7bwE65ur2pyq75nYw2PvWVXt6SuBV5cBGR",
  },
  {
    username: "Edge",
    address: "123UH9bz6B6J9txBwoQigu347M3rrY8cE5iu1Dhni4DyJ7ax",
  },
  {
    username: "Temujin",
    address: "12gf2VrG2xTER9TbESzoAnTucPemUo39XzpWpnYzzJNMcMzY",
  },
  {
    username: "FrequencyNetworkProposal",
    address: "13bd52tiEw7SLqh3KSrXZgcbomV1QAjZH51yNvH8saVBvSsx",
  },
  {
    username: "Warp Lizard | Talisman",
    address: "13asxHxB8HDMzvqaWPacPJt2FV7MaXdzieBx6P4AkXsH3wqL",
  },
  {
    username: "asoliman (Boda)",
    address: "131apoNGjSkENL7vistZykLJpnGW8ikuNw3Gaxfjo9dQk2J6",
  },
  {
    username: "12WEB",
    address: "12eNB4KRHgaT5AbFyQeff62NqbRqnZwZt7DUnVLfX8gKf2Pg",
  },
  {
    username: "OUTKAST",
    address: "1BuV45tmGhuHM7sJzgMk11eARLr8b42kR7VC2ESd7rcJrSV",
  },
  {
    username: "Figment 7",
    address: "16kzYodFWy43sVGFKGnpDK8T3P8F9NhyMKqWNFfeFVN4XT9K",
  },
  {
    username: "Michelle",
    address: "13dLY5aynbYDCy1DxQYQGjd4yy5uSeVtA4pLdR7SrcxZyvT1",
  },
  {
    username: "Big Woods GWIF",
    address: "15Y7zobCfcZvkSocx8MG4EXk3VfQ2f4v6uUvHNt11yzeZRD4",
  },
  {
    username: "nowa",
    address: "14uiEj4GVwT1E39iMAAXAuxWQMiSnkoGWmVsXXJSqfmsKSBd",
  },
  {
    username: "EdgarPeranto",
    address: "14zYzfk9otRrQgkHWvHxDrszdGvYWZdr1yEU61CtdAaRf54m",
  },
  {
    username: "Roots Miami",
    address: "138hCVz4Um4BDyg1oz5SU2jxyRwucFUGMRmopxhsKaerxKSi",
  },
  {
    username: "Chevdor",
    address: "1rwgen2jqJNNg7DpUA4jBvMjyepgiFKLLm3Bwt8pKQYP8Xf",
  },
  {
    username: "cryptomirek",
    address: "129J5pyVMbZFTQy1prd7ZMn1gL5EpM8oWLetro1tccpWxSwL",
  },
  {
    username: "Byte vista",
    address: "15yz8hP3idpA87nkZqSUL8Fs4msZmRCdLXBQMdWBKd9zaYA8",
  },
  {
    username: "Hustler",
    address: "15XLm246KMgW7ScnifW6NgrEq5Vzygox741PXuvhg9fj1z2x",
  },
  {
    username: "Eric",
    address: "13pdGgRp27xp4tWYcGx5FwVEgVambqV8XiR5L734kJXgSnSx",
  },
  {
    username: "AJUNA NETWORK",
    address: "15gx1QMCKtB16pfYh3wKc8844NygfrXWKh6UqojajDftxS1d",
  },
  {
    username: "SirWolcott",
    address: "1xvno9aZ2PigBrkA74NrTzN2JKGxUrvUvx3ALbyDqXBeASF",
  },
  {
    username: "Dot Line Dot",
    address: "19pDMZdyCpAgJ2JSbkyUtMP4FFrryJHjWS1uJ8uR1Pf4wjh",
  },
  {
    username: "Astar Network",
    address: "1j5YyEGdcPd9BxkzVNNjKkqdi5f7g3Dd7JMgaGUhsMrZ6dZ",
  },
  {
    username: "0x56696b6b202d20476f7620f09f8f9b",
    address: "14wyzJLVcCvjXcBnB4DTYvtbobmri5fjAQQKwaRA3JeCxLos",
  },
  {
    username: "DOT JDP Polkadot.js Wallet",
    address: "16XdvtbCwHsMicCTty9RQ7cXYqyQTBbM9MWNbopVrbFHLuL3",
  },
  {
    username: "Vic cuenta",
    address: "12xUZcgUfhcxo3KToT3WgVNJsa5X6RvWmVsgpT6SFexzHD9f",
  },
  {
    username: "ButaMMS",
    address: "12ikSKeXo8CMVFv7TGcdd8BkjJMpyZNEegmMP2BFYzCuSB1r",
  },
  {
    username: "Arjun | Pendulum",
    address: "1gpGivYanDJ9shWqVUk9jzZaoBM1NowmW6DtQLX4Siq3t3c",
  },
  {
    username: "Robinhood",
    address: "14Bf4m5CTNrtGcgCAp6xsXMgA9pPeoiVT54g3C2qY1zNvgsR",
  },
  {
    username: "Cripto Explosiva",
    address: "14DKmzidHQYZpdESuqYaEkAYw3yLsQ3RKZMePJWHKeRURd28",
  },
  {
    username: "Zhixi Interlay",
    address: "12NGmpotx1WxkZ6RrqZeMBerBUB2aa2fBCrhSPvbAJWAcF33",
  },
  {
    username: "ImdioR",
    address: "1PGiULXMfgmC9DwV7rMUseNa3SxDwae26ZWZmMtXkVSCznp",
  },
  {
    username: "DamjanDOT",
    address: "12ZCiFTn8GX7K1MxygnSH9FJUutqaU3Bj24EyQ7XD5RiwXWM",
  },
  {
    username: "0x536b616c6d616ef09f90a2",
    address: "13zbXMsJgQbMkrjai3JUaQmVERZHKLNt42xaGjqJq7mBasDk",
  },
  {
    username: "BINDMINT: any-wallet any-binder",
    address: "13uojFTPHd6u1xbutx7VkJ1tDtt2cjR1WutnFQezRWRv91Rr",
  },
  {
    username: "Collatorsio",
    address: "12CoBfDp1GKhF5xvC2AsiJf74d2WhNLJiWsaP4LVu2UBHCJ3",
  },
  {
    username: "vonyi",
    address: "14mH2752oH6phG36st3Zc62vFJD1X2JSdhMoNBoxRPnRAHNJ",
  },
  {
    username: "Regency-010",
    address: "1qc1SouVpw8yLYzwfBpt75hZgBZLHY23njRcArom9o9YB8Q",
  },
  {
    username: "LUCKYVE",
    address: "1LUckyocmz9YzeQZHVpBvYYRGXb3rnSm2tvfz79h3G3JDgP",
  },
  {
    username: "My DOT wallet",
    address: "155ZSiQpNnQCTZJinvJjHRLyRSpHPnacwxDnATRx2DkhwYrH",
  },
  {
    username: "PolkaMario",
    address: "12giS44Bqe4KEjpqA3jWpfvB4kbNHc9ZgWRb5LSfJMs4KKBr",
  },
  {
    username: "Simon @ Key Pictures",
    address: "16AofvGjSVoVQFwheJtwpYAoSJzszsAdbkk3rPx6H2xDmzor",
  },
  {
    username: "Mr Crypto",
    address: "12F4mzn4UbxEYHggzdfYHdzoLYapbzLK2inCU12nk3Xm9ZaG",
  },
  {
    username: "Peter / Mosaic Chain",
    address: "14dC5pCtc7mvRZuUZA5d4R1uxd7w2T8Pj8HsuWJ92ESgRDU6",
  },
  {
    username: "Anna",
    address: "15qov2FkfxuByMKBvRR8bnMoJipZfY4fm5DJGUdChGHYt3L5",
  },
  {
    username: "Band Protocol",
    address: "12aj1nedSqMsVhAH5LyYJtjKPNrFWYoEh4FeGmWW2aS4DQQh",
  },
  {
    username: "Yafi",
    address: "15zd4ygJTGG7u5gWppUcU2dWtDtW4RhU1jdrXsji5UVytSzM",
  },
  {
    username: "CRYPTO PLAZA",
    address: "14oeotjwdT5RGbwAqV88WReYyHL1nAfdyiEeR3mLcizDidVg",
  },
  {
    username: "gilescope",
    address: "14mDeKZ7qp9hqBjjDg51c8BFrf9o69om8piSSRwj2fT5Yb1i",
  },
  {
    username: "MarcoRo",
    address: "1mfvoU8viAehsuPpWrphUCmw7fXuXmyQvUBgqgwdN6Ri3WK",
  },
  {
    username: "urban",
    address: "14GTvkuHw1hsrqYqFqamLwU1cwQSzRjWwUJRofKrnKr3cjJW",
  },
  {
    username: "Muriwai",
    address: "12Upr8yfS9CczxmmHmrYT9BgSHWkPt2V1FuzrgXTg34qXHeF",
  },
  {
    username: "spazcoin_ChaosDAO_IntrKintVaults",
    address: "12zpkYQqfvyZcqiz5kbM8kdsVvscFHFWbcZ44U3FrKVcSNwu",
  },
  {
    username: "Sumeet",
    address: "1WD4uEaYEaHDGZk1CdbnzYG2bTBSFayUoo6X32uShg9fi3N",
  },
  {
    username: "Polkadot Registrar#1 Test",
    address: "13Y3w2HiijZtWTEQWjh26vFCfq2CepuuDV1S9kpBAkvZiN2n",
  },
  {
    username: "coinversation",
    address: "14r48SVtMrJKxUWD9ijDy8aQU3asTXja8qny9mzXTutdByju",
  },
  {
    username: "Tiggah",
    address: "1Z8XUC2wsUMnHfPVHH4rZWfiHga2BqpH5AZYDcJj4yAEkbY",
  },
  {
    username: "Piero",
    address: "15JTWvBx8mSV1xASTnURwi9WzjrJr8YvUwnzhZzG7B2M8MyW",
  },
  {
    username: "1kNode.io",
    address: "14JvcqFS1akzPhGyFvqZtWn63rx3NQ2RRFsZuPHvJX1mf8t",
  },
  {
    username: "Valen Lombardo",
    address: "16i7JAEaHLi7KjSzHvrnkiCYqtcb7H3FZ8KAqR52L8pEizAn",
  },
  {
    username: "0xf09f909f59656c6c6f7746696e2054756e61f09f909f",
    address: "12MgK2Sc8Rrh6DXS2gDrt7fWJ24eGeVb23NALbZLMw1grnkL",
  },
  {
    username: "Mildzsu",
    address: "14V2ATewhYS7fGtjKEvfN1jHH78nKMBWbd6moRUrpqgHvkS6",
  },
  {
    username: "PolkadotLatino",
    address: "15TGpf4HyF2L4ixCmLw6wv2dGfPy35JwMYk7mv3qgaL55C3c",
  },
  {
    username: "BRA_16-D",
    address: "1CaXBXVGNbey352w7ydA1A2yDyNQLshycom8Zyj69v5eRNK",
  },
  {
    username: "Tobias Airdrop.com",
    address: "12BYYgmRb5BjHjZf7nykJDB1C6FXTfqr9QSmrav8RHt19ahj",
  },
  {
    username: "Suguangrui",
    address: "15cgCPCLyyaNV2PuE9uEciQoWzvQVC3PxCJRfn3CtqFkzpRa",
  },
  {
    username: "PromoTeam | Activator | Ruby",
    address: "14JkYemMd8ZhnKWvyrXh9MNowKnqUbzy9kD8aGwqcz9Em8wP",
  },
  {
    username: "Aitijia'er",
    address: "12Qn81nJ9DAPxQ6iz2jPxLcrbcpveWFbAAyvDLwnAGL6nPjG",
  },
  {
    username: "Bullrun",
    address: "13posCowt2Ymk8L3A7Co8ARjeEUgv9pBbZmX2fukfGuYF2eD",
  },
  {
    username: "sanchez",
    address: "15oap8CfFkMoxJFs4d43pMppeNWkj3oTrgJVaD3i8r6TtnT5",
  },
  {
    username: "Ivan on Tech",
    address: "16ZhiPmAt65atW7uvNSqyK1qitQL4FQUvYz8yYXfV1EGwVP1",
  },
  {
    username: "Thanh",
    address: "13jPT551rRy4FUczrcmYfmqV4s4mB5Krwh8CJCTL3RwobXkq",
  },
  {
    username: "Wangshi.eth",
    address: "1bqyQgtG4kqb2NfchTspUpyseE1suZ8m4hy9krxDXw84BZ9",
  },
  {
    username: "David Yiling Li",
    address: "12DxNKSB5z5Pc1TFqpCkwcsvAaReE6J3pL3FoUGQnc1EMi63",
  },
  {
    username: "helixstreet.foundation",
    address: "16WzVw5JDCXLiA3t5D4LL15S2sqSBtCsjVNXkwLCVxGdeQGj",
  },
  {
    username: "Shankar | Edgeware DAO",
    address: "12eW1PVGPxZLGkEEMDg7bCeTS4gcgjYFqtokgz4hJXBcf6fF",
  },
  {
    username: "0x50696e68c3a36f20487562",
    address: "143Ey2f7t4wUW3DyuYnCDmxXgNsZo6WMLajm8NFw1GSr7WHY",
  },
  {
    username: "ArtemisBene",
    address: "12VzpjtNucJrxWBm3q92qgQVcfoWjhyzX39GrNNhczsBhnnU",
  },
  {
    username: "JayPolka",
    address: "13j2xdMHhacerfGMzWtZL2Ck5pQ9wPzQMBCbCfxubYJJXvyZ",
  },
  {
    username: "polkadot.giving",
    address: "12TiFEWX9GRhPF9NRgBXZcmypzeuptpCnzN8viyMkfmT7Pa1",
  },
  {
    username: "LP DOT",
    address: "14rm4BoeRLNZSwhMGVdbA9p8WUxQ9W9CFwMZQNMQUEsNVVSk",
  },
  {
    username: "Gmeister | Edgeware",
    address: "14Qx9jD16Gq6Hd1SoqhMobewUWPdD5TTN3bS6CxQniNkDmfs",
  },
  {
    username: "QINWEN.168Node",
    address: "1gpCRov55rqmNaoEVRNAUCCYVzSGghitLNabng8UHVGwv1g",
  },
  {
    username: "Litentry",
    address: "152deMvsN7wxMbSmdApsds6LWNNNGgsJ8TTpZLTD2ipEHNg3",
  },
  {
    username: "Parity Security",
    address: "161rXLLpWb4DU8J6Vk5MhZtFpeRQdYSraARiUsMv3LdBsqZ5",
  },
  {
    username: "0x424545465920f09f9082",
    address: "16WXKsa3jddMq8MTM671LQjUDYHprnrwEpZHyqCrwBTU3Vzk",
  },
  {
    username: "Regency-003",
    address: "13sWA3ty8GENWfakJAuBGGsDB8CaGcCNmQDVASvr7XiWcaGZ",
  },
  {
    username: "Merkle Science",
    address: "16Hw2qwttttQ8tMCPLwnX3wegtsaTYD9gGakKbAHDb9PW3g5",
  },
  {
    username: "Paulkadotter",
    address: "16AnoF5NQY3xZ6ovcsTWBhQDxWKB7AcExbj9u3a1juGtmTJ3",
  },
  {
    username: "Citadel.one",
    address: "14coT8D8CB5L71J2HtKh6aCXZawKkeA8WE3A55qry3qeHJmF",
  },
  {
    username: "ZENITH",
    address: "1x7F6UJJoRcsrTkVSoZyWiPdT8HgEbcfS5wjSQFsEtmVhYy",
  },
  {
    username: "NEWDEAL",
    address: "16CdHjb4nxVwF6uwmPm6A29pc4ubnLiY7UqasMxt7cT9BcoK",
  },
  {
    username: "METASPAN (also try POOL #18)",
    address: "16ce9zrmiuAtdi9qv1tuiQ1RC1xR6y6NgnBcRtMoQeAobqpZ",
  },
  {
    username: "liuchengxu",
    address: "12uXLCZZkprwRBhfmhTXdfQE8faQwgNpS76wwmnEbgDwWB9e",
  },
  {
    username: "Lisa's Polkadot account",
    address: "13g13z8Gg7zxbtgoX7z8E9WTC8RTN3Q2SBpkwhMe63tErQ4r",
  },
  {
    username: "SPACE_INVADER",
    address: "13zmwfLi7SSVeFsWybmPNEu7awsZzfn29cTAMLbh2baG7CLa",
  },
  {
    username: "BitLion",
    address: "1hXiJiMeabcwfHnzpGhCMXPm6fJ6qYECAruS6ybSkm6okoP",
  },
  {
    username: "mustermeiszer",
    address: "13p7q4N8aQqnGJRGnevq8e8k8rsXkF8S7u1E5694XtRviJc",
  },
  {
    username: "ksmseannew",
    address: "16RvpTWFmMLxfcgMiS3wTnFzgGVWg1mpyYRhoFxWVZ4a3CqM",
  },
  {
    username: "COSMOON",
    address: "15CosmEmAfQAhnxwan18e5TueAe6bDzrqqxg13dToDWr7A8M",
  },
  {
    username: "Synapticon",
    address: "15abwMYkJF7UpvkpQW1hkz7vPLKqWGk9K8xnJVJzpNS6HA8m",
  },
  {
    username: "Regency-013",
    address: "15hRhh1ENHBk3HWQKtjej4fqBvAAB9oVZUv1G3N47qtn1K3q",
  },
  {
    username: "KoT",
    address: "12nF7U21MzeZG5yDtGbHn6Fptrq7D4ExUro6rfJ297nzcD2g",
  },
  {
    username: "Messari",
    address: "15kRV1Ykv4fssUvhNnsf96YS6HXnbVVVjzWuLwSBxWLR944N",
  },
  {
    username: "Gkirito",
    address: "1QtQxXNMuCMfKXJgmdG5MXdqiLDPkKTRjLaXpBCW96rsjY4",
  },
  {
    username: "Polychain Labs",
    address: "12wr1Z5L28eXq8hQ36J8XYLai8eMnKxxHNyW165dZ2iLz9Nr",
  },
  {
    username: "NewOmegaValidator",
    address: "15BMiCvh6cEa7xwCpGmYR4QGsqjZK2FSndjpks6YPT4aC3MK",
  },
  {
    username: "web3rdy multisig",
    address: "12cHgYdEy6L5vjWUpngVx6ZdLKg6Jzy9GxFbGH3ByJEJnGH5",
  },
  {
    username: "AJM",
    address: "14DmCS6T5BtBSrNijtnEkAard3XpYVCvJtR4q7xwb6ofyeLo",
  },
  {
    username: "t3rn-events",
    address: "1hYLzHfe1pQphA42VazuwbdGaEuVKRnM1pErDhMEPPqGNdD",
  },
  {
    username: "0x4a414d20e298a0efb88ff09f908d",
    address: "15aKvwRqGVAwuBMaogtQXhuz9EQqUWsZJSAzomyb5xYwgBXA",
  },
  {
    username: "RHEE | APAC",
    address: "16YBdgR2NXVfcgVx8vmGimJMo8CFzULktruh1bTDUnY2Ss6Q",
  },
  {
    username: "Anh Tuan",
    address: "129BAWKYPomCUZ14Jbbm8uDE5RFYS4F64y3CWLFpZ6uyZqsg",
  },
  {
    username: "0x56462056616c6964696572756e6720f09f87a9f09f87aa",
    address: "15x643ScnbVQM3zGcyRw3qVtaCoddmAfDv5LZVfU8fNxkVaR",
  },
  {
    username: "PlusV",
    address: "16LU5Nfh6xuKH4dxqqs8yDFkcGivBpjUTRP27bmRB6zQqaub",
  },
  {
    username: "Jonathan",
    address: "14uDy8T26tKGc8QqmYxi2kMxfWQGM9PHmiry5bNcDDVGBC9C",
  },
  {
    username: "cosmoversemultisig",
    address: "1569WNv839m4iubJNkcp8wocAhXvdPsmLwms6fKXehTiQrkt",
  },
  {
    username: "KeepNode",
    address: "143xeV45MsSeUGFpCns1ACgaUvCeouSJ4WDoppio9qNUNr5S",
  },
  {
    username: "DOTomi",
    address: "13ug3JKbtky4qcZ2SR7kbCrk9tyZMymHxLhPBGLacPmonmEW",
  },
  {
    username: "stake lada",
    address: "12HgsUHKcyLuDyXn4PA4TrV1E8WfzDXyMji7CWX6cMpAkfJb",
  },
  {
    username: "0xf09f9a82205a756769616e204475636b20f09fa686",
    address: "15tQ5joTz2nywZ4UgPYWDMN522s91W7yTmhvV1rp4hpVhZT3",
  },
  {
    username: "ar4volk",
    address: "16tk68zMiqvafXL2FRC5WLeJJGXTLxXX9WZWgn5qnBBozaR",
  },
  {
    username: "clangenb",
    address: "16YCL3UVpVWQLGW3p3Zx4k5WAEp9W1DwdDnxAbyAaPxVxnp3",
  },
  {
    username: "Texas Blockchain Council",
    address: "12v9fkNQWRW9268a1Z7wQi3bUScwK4iXGhwgHAoP5ahMvKwW",
  },
  {
    username: "ERN VENTURES",
    address: "16euDe2owvJq7LkwSujGxAFezCWopCKPENxwc2EKdzYTRBae",
  },
  {
    username: "Rabasso",
    address: "14om2tPPbnPbcJ2eHm4YesAbR6Mxa7SsH4pHmNn9jmDqDgHn",
  },
  {
    username: "0x45617420507261792056616c696461746520f09f8db4f09f998ff09f96a5",
    address: "15oPzFCUYxj2Neu6wnfzwmbKS3RxJMQKQVEJtMdyH2BmNBZA",
  },
  {
    username: "HackSeasons",
    address: "14EHc7cnESfG3b1Zo1zD4v3cLHxY1mtmKXAUMu9ghbfEJTPL",
  },
  {
    username: "PRIVI",
    address: "1neXTM8up9RyGtM3xPT9mkJ8vUXf7cvpee4AoVj5CBhS2Bm",
  },
  {
    username: "gSan71",
    address: "15a5Q7ERVMYBAewqH7aNY2sEnsv4WU9mxD9y8rP7EezYCdQQ",
  },
  {
    username: "Darwinia Dev",
    address: "1EdsnniYSKNjHNAvDgvBfRNzKnSzi6kgsHQFCG4PhAyyJWH",
  },
  {
    username: "Jegor | Parity",
    address: "16huTSxrFcQUQyRftbRHQvY3dMZy7cEQfH3xFyP9kNgQ4U4o",
  },
  {
    username: "Jur",
    address: "13dLsuGLZ6PXRFwWZAsVPQE7hNSeKHsFHmaqFkyMVW5Sgfrw",
  },
  {
    username: "Lucky Team",
    address: "14ogWEsaFHYk1rDcRMLVApekUd3np4e1ker81tBF6odd39Q9",
  },
  {
    username: "Maurii",
    address: "129SJm1hPEyfqFcBgjqJc9Hu58uHxBxgQ3xkxkfKeQoGnfby",
  },
  {
    username: "mihajlo_pavlovic",
    address: "13TdCcCXq7XifDivTbkJtZsAQTC9HmsU31xyAQ9sMx28ucni",
  },
  {
    username: "Edward Mack",
    address: "1ZYq7qWxvqC1rE4PKnTWwoVJYLtn99p9JM9cUn2WqbWr3Jt",
  },
  {
    username: "AMI Bounty Curator",
    address: "12ZQ4r5QQXjbi11ar1RpKH3cvoU8XWy4W8engkcFqwUV8HnT",
  },
  {
    username: "Polkadot API Dev Team",
    address: "13dXmfrN4Prb3FmdxKDNRyUeNDuNwUTZibYAMFNKmZJut2Lq",
  },
  {
    username: "DARKFOREST",
    address: "13e14mgRoXLBSm1HxRRgGT1ThgkTBQShe3dtfuGSX2Vah8Cx",
  },
  {
    username: "HEROIC_official",
    address: "17L1abEGisdmSQamtrYvsdsEWhBQiAqSQfjuNYAADYNeivp",
  },
  {
    username: "Polkadot 2",
    address: "13Brgmib8vf5pq14yH8tyTM24xDMAsaANrMG2Gy6CCgAwyvN",
  },
  {
    username: "Blackbeard DOT",
    address: "13mDf3t168YMAk6A67Xn4mN9nU5diEtRruQbxMPRfmdDj7gJ",
  },
  {
    username: "CoinGecko",
    address: "14uLqkHHErahJ58K8GMSeR6183xFm9YM5DtEKT2rZ6veZqiL",
  },
  {
    username: "Jay",
    address: "16kWjn3tQRvgnAaUsiGYXMV9HdcpTBdUMHUnc8jmaPLqR7qL",
  },
  {
    username: "EasyA",
    address: "13ns3Esc7LAMEDkioayiHLXQWDJ6GuWRRTkDA7pj1DGySLVv",
  },
  {
    username: "HASH",
    address: "121jmczHyR9G1Geh8uV9ufrNjk51f1bTDyXGCLdhb9uZRZXz",
  },
  {
    username: "Hierat",
    address: "14SkHM3GHvkBgqZmjKwdxaFSAe6q1Q2FTMfc1sQegYK7kNiX",
  },
  {
    username: "On-chain Identity",
    address: "129cUPV8jXcDGaGnP1phf41BamPUPwL3zHdquBKX97oCkjtM",
  },
  {
    username: "finalbits",
    address: "14NGUTHPtUvjbJttSF4qYmX8mUKk75UweWsL3GZyHw4ue2pv",
  },
  {
    username: "Bread",
    address: "1C5wY8SubUnURiDQUbQ5U4V9sL3hzjwiLiveGp1X4idptRq",
  },
  {
    username: "Validatrium",
    address: "15SfLgBPmtLAuqTdvga72k8g3rPTzfidgssXV4n4DvfB8xgr",
  },
  {
    username: "Trace Alliance",
    address: "13MPWo2M7Cfje9PTHcd8sxqaPp9UuZy8tN4Tr8WHYwJsjUTQ",
  },
  {
    username: "www.isg.dev",
    address: "13YJ7PrjwAhKHP9m99APDSuvLwWKSQSmKABfJY3H2Cepk2CA",
  },
  {
    username: "STAM | TEACHMEDEFI",
    address: "15i8uQRBV8A4fGxrwWswh67V5YEF8gQRshHpyiDJdPdetizM",
  },
  {
    username: "Kirill | Kampela",
    address: "13zU1pipCuijDA1eWdHPnDgEHh3BvDJ9GsPMMFFvE5p6GF4D",
  },
  {
    username: "Ernst Kints",
    address: "14itcfWbV6aQsTirqdFpsQuUekhkbDvNfDqPPgtoUk4rkf6N",
  },
  {
    username: "Regency-009",
    address: "16RL3AFV4iE6RNhsvNx8adTxY5wgyu6DCkXS5zQ6mCuYoKU5",
  },
  {
    username: "Crypto.Sheinix",
    address: "13BoZpgxc4Va9JuXwbsVr3TFAppraWUEDKfySWh3JQ6wwUtJ",
  },
  {
    username: "BINANCE_STAKE_14",
    address: "15UjmGk7qn992vQ2TjQzVSYrrbM3eMUHReCF5TxL7RmpjpJn",
  },
  {
    username: "Dxxx",
    address: "15hnN2YoafBBo3J3WTR62Vk3iyj9fsoAetLt4A3QwQtuHHkJ",
  },
  {
    username: "BraveBrowser",
    address: "13mHemgP2hymiW1d9dWKGp5mhLNWLHVRRmpvuChQq4DvTeBv",
  },
  {
    username: "decentered.jeoric",
    address: "14tivELSMywejX2hLcGm69Cvzxmvxj6eWbWxBcJSNPiuyPdd",
  },
  {
    username: "Legos",
    address: "158NkaT3ANECkPTqaYbcTvBeQ8VBRGewP7kASN5kRiFKo6Zg",
  },
  {
    username: "nicholas | dot play",
    address: "16JZTLHZsKwzL3cPwngDZqbtbK91qWoMFG9fjLh2sxkLCJ9L",
  },
  {
    username: "xcKresna",
    address: "165n5jnbbkjZNyWaGMDaPzFARr3R89wb7eNtaG9erz2HUyey",
  },
  {
    username: "Phuc Lam | OpenGuild",
    address: "13pYxR5AWV6NfdyCHQtRZxU4xztcBFKqnNLBAcWSSAixPba5",
  },
  {
    username: "TechnoArtoria",
    address: "14Gah6ePueDfoKSyf6sL7pAoCK4uL7y6QpePpiSjoXGW1kE7",
  },
  {
    username: "Omadoye Abraham",
    address: "14ovvDJ79eVgyYL5fM3knHXT6MByserH9b4D2e7NugkMeV5Q",
  },
  {
    username: "f5",
    address: "14iv55u5DvgqKSSTvcRjP3ySEeUcQTjvGY3zFdA9JeHXqyb3",
  },
  {
    username: "PashaBoucher",
    address: "14wWCFn5ARyojGynCbdgEZAXiRuSrJ7xzf38FVDtUsU5nUrv",
  },
  {
    username: "G-DOT.TECH",
    address: "12EQF5f4zn1fU1XXxd7jWjiXoo4tnsSF3agg2jPmcQPJno5q",
  },
  {
    username: "Ilo",
    address: "13KrJBT2WgZGQLhrqTd13uGPR5HxCrjYVw5w3Xjr3mPX2k9n",
  },
  {
    username: "Damian Amamoo",
    address: "14MTdyeDMrmHsCyutJubMKXaCdZk4nxsTgCqrZTiGoP4wMRY",
  },
  {
    username: "FLUFFH3AD",
    address: "16JqpLucqjVv5mNbUYRB4ZKUmALuZcFbWzhcVemeqSzxdF2b",
  },
  {
    username: "Modern Market",
    address: "1F1cVT5vZmy7Bvh9RM6HqMe9ie1KEM4yvimyPZYjfSWG4v4",
  },
  {
    username: "ForklessNation",
    address: "13ozGG4C5CnB2aQyrdxsf1yf5n4u6252J2Gd9neWk6Zz3psW",
  },
  {
    username: "LX38",
    address: "15Q7LRbAKrVExHs9xtrhDKuNmPApo4iBQdJp3k11YMDjTF2f",
  },
  {
    username: "suyuee",
    address: "1hQ97imHG747TgKK3BT3zHfPhHLNCgpci5N41xiFYuVCryK",
  },
  {
    username: "w3f-staking-miner",
    address: "13icvjdQgKFsMDDamG7VvehkB8iqj4XNgnRsWTbG4nQgnDXW",
  },
  {
    username: "STAKE-OPS",
    address: "11166ub34q4GrXUnwbqpQE23KLnBZVpQGnuuJnkjW3mhV2Q",
  },
  {
    username: "Maya Acala",
    address: "128owvNXDko76sd4fFQugtGv5CrXdoHFQnrHkEh5KVHKvGQw",
  },
  {
    username: "adLIB_M_MS",
    address: "12NsLQ4oMr5rPZdVhLse7j13XMiFT5qei8e26ny797kXvVPZ",
  },
  {
    username: "H-MA",
    address: "13WVDRyGkUyvyZFr4yzSKGGJ8AC3ZDmeR96UCccALnAudGCA",
  },
  {
    username: "Decentration",
    address: "16Uj8FfDPhYNbK3nErtwUk9eiXy5j5JLux61QcjRbMJiiHW7",
  },
  {
    username: "ikhaled28 | WagMedia",
    address: "16PGHVr294cDbrxF8zBU5Abpmy12Xu29XmGVo9i2VPuEDEZv",
  },
  {
    username: "VladyPromoTeam",
    address: "15ynsawL9cjKCw5JMM2D5hLLZ8f3vkYuyFqUxyHHnuYL8Lkw",
  },
  {
    username: "0xf09fa49620506f6c6b615374617473",
    address: "15psTaipmWG86U5vNkF7Guv9TRPMRLKHkGS8cXT74v3RCC5t",
  },
  {
    username: "TONI",
    address: "12GScyod3WfX1HX7KiWxZuV37DYq1jiSX7G417LH8fzJox43",
  },
  {
    username: "Jack Haldorsson",
    address: "14b2fNaYhU4sNdqhfZrP3vYjg3aFwpq3JFVvuqwbfEFtSZn8",
  },
  {
    username: "AlohaBlockchain",
    address: "12U2kNrB1fEMrmcFSxPnu7J7gCe8Grj5VkbQ8tbvyePG1hHJ",
  },
  {
    username: "KSM LW",
    address: "15SL1AxurGmtgFJrpuYLcYkXvX5srr8jt3uDJRz5LFD9fozv",
  },
  {
    username: "Nodle",
    address: "16LKv69ct6xDzSiUjuz154vCg62dkyysektHFCeJe85xb6X",
  },
  {
    username: "AssetPortal",
    address: "13GWBPM43rRAnyEU5gwbUZsnaDyC1ZChvMfCe546NJjaJeKs",
  },
  {
    username: "DOT",
    address: "15XNe1RVhrxiRkkgTbW9S8u5GsVu2ME1hZPfYLU9hdcnGAit",
  },
  {
    username: "nikos",
    address: "15DCZocYEM2ThYCAj22QE4QENRvUNVrDtoLBVbCm5x4EQncr",
  },
  {
    username: "Cute_Wisp",
    address: "14rUxnw9Wb5Qnf8SsphiZv5dFYV2rsXdgExdS9Y49EHTH9t7",
  },
  {
    username: "ChaosDAO_Nomination_Pools",
    address: "14tuuHN7kQy1wivRnexp8vgR2a5Dv8A9vgWscH81Lq9yVhN",
  },
  {
    username: "d.gen",
    address: "16kEsvX63hJBPvjjAjGYhUJww9hwhJR3qQ5BJhvJGuWfgDTR",
  },
  {
    username: "Baer_DAOplomats",
    address: "162iNUHK1bDoyyX9dxgiM3N5tUnKbzF9mRzyxUjnr8yp1ZEP",
  },
  {
    username: "JohanDroid",
    address: "153FF3AdrgsKmGGWRUbubvYYqFMHZD9bejxHP89FeCZPYZ3z",
  },
  {
    username: "0x44415955e88a82e782b9",
    address: "13EBFCEJrvtcW2iLNVqwJQ7fEySSRUe6xDvhLXzs81KkWQo5",
  },
  {
    username: "CharuSethi",
    address: "14SUZKZwuTGsJb6CLqAC2XzSYErQZaGS4bNq79zxi6GxmqSw",
  },
  {
    username: "LAOSFOUNDATION",
    address: "1411FgYGWbhkFX6e1Nx36oysyDQ54bzyRxKWWojuVN8VD6rU",
  },
  {
    username: "tdimitrov",
    address: "1QhVP5qzR2LfXqP77N1JcuwHoY7NH8JVRNFm1hSooE9d4pR",
  },
  {
    username: "Leah@OAK Network",
    address: "14V5usowR9TC1houk1SYshtLid4FkDg9tyqE25JdPbrfp2su",
  },
  {
    username: "FloridaWEBSEO",
    address: "16DpsPZFSe64m4LB4nAydvpPRE92Ystsh2xfxnJ4L2ciGiAB",
  },
  {
    username: "KJdot44",
    address: "1YvpwiRZfoYzPKgU6eiFh8sCAVr8KLUicq6iUCundiuNTex",
  },
  {
    username: "StasRover",
    address: "14drsfc6hPPRhYPac9iv4yLdMo3MzBYgbDkJRcFkitWHr71M",
  },
  {
    username: "Rohanda",
    address: "13NWqwf9bQ5Ger5FTNATx6NwnjdCeWamHVfgw2MDBBffqCPe",
  },
  {
    username: "Alberto | PaperMoon",
    address: "16AhqStFQa8GrffE7WapHrUQ29dmioZHuwFTn4z9fQ7WBGBZ",
  },
  {
    username: "BamBam Wallet",
    address: "1gvSXTysfJ5F9tjMtuACQyp1dxbLDoYNr7HEQNE2N4dfUXH",
  },
  {
    username: "chainyoda",
    address: "139UueTsLbX4dVSPBVmURkyAcLr49CrL8Fgs912BKCV5oKqf",
  },
  {
    username: "Blockdaemon",
    address: "14MceVAhD8moRWR3U3vLWBU5R9tqjSVWHA4sMfMuwSUPn3vb",
  },
  {
    username: "Csaint02",
    address: "14koZgrZwfv2XdPgxq6nMqgDvrQau3FGV5eR8QMUuvFvh5KM",
  },
  {
    username: "dotgraphic",
    address: "15V2Rfi6METM3FJpZJH5QVM3WYHEmNLcQ52FcMPYTtdTipA4",
  },
  {
    username: "Hannah",
    address: "16KXsHnNyjLEueDKr6B3xcGpfkWgKKZUigSrxSSdyWUDRAcN",
  },
  {
    username: "Regency-004",
    address: "1rpzRC4g7FZrQZTdqVJfDejPXMp7XywAkrfHAYLtZy21GGk",
  },
  {
    username:
      "0xf09f8d80204c75636b7920467269646179202d204f70656e476f7620f09f8d80",
    address: "12pXignPnq8sZvPtEsC3RdhDLAscqzFQz97pX2tpiNp3xLqo",
  },
  {
    username: "DYORDYOR",
    address: "14frWAnH7RdQVfFqN72f9BCMxmtn4mgZYFy6j7g1Wvv2KeyL",
  },
  {
    username: "Regency-012",
    address: "1455ZWeFBk7XsxzjNSRgs4T5c9RrLYECedVKxrUBohL6fJfY",
  },
  {
    username: "Mela adLIB",
    address: "146JFKBzBy4jVCcg2i73Px6qTg22cPHrrjkXSKLJEpnMUhDH",
  },
  {
    username: "Talisman",
    address: "16Av4wD9GVkJ3ZzPYq2cWtdkk5rLPbWzMiTFeaVBR6QUzqa5",
  },
  {
    username: "Oak Security",
    address: "12QzxRyL6ctkHHX8v92f2YUkgy9MGg6SUPCAwk5xUFsXhT1m",
  },
  {
    username: "Alzymologist",
    address: "12bFooBAK4hHUfiri7v2Eiz96v7TDoiLWdNKCFYmhWzGG1Tq",
  },
  {
    username: "RockX_Polkadot3",
    address: "14N5GT7YTaDBSsLpfxxtCxNdYfgDofGj5wQSfqC1URKHdT8C",
  },
  {
    username: "Ayevbeosa Iyamu",
    address: "1Gz5aLtEu2n4jsfA6XwtZnuaRymJrDDw4kEGdNHTdxrpzrc",
  },
  {
    username: "Jay",
    address: "16m5TGic6FPoYRz9xghFhfZKfoEZnssrRYdnuo7qMuSMruZa",
  },
  {
    username: "Bruno",
    address: "128qRiVjxU3TuT37tg7AX99zwqfPtj2t4nDKUv9Dvi5wzxuF",
  },
  {
    username: "P",
    address: "13zbxNeX5JeWrzTKjkkmwo6FSnv9SLPaogjHKjgVKVryj3JE",
  },
  {
    username: "MimirTest",
    address: "14Bw4kKyPBjb1FW6ycJbsxG4ScyH5rQQxZpxBDTxE2Ki63sE",
  },
  {
    username: "CIKontheblock",
    address: "12Th2jPQf8A3spqSjBgLAEhfsgDPaqt3u4uw5DNh4MHuZdmV",
  },
  {
    username: "oliversarmy",
    address: "13TCowCJVpcD1iezJTFMaBPBm6xMyGyhYTYqoiavsfky4jox",
  },
  {
    username: "polkadot_colombia",
    address: "13B5YyS8u93FKbZYRFGh1BFwYjn5a8zhAJqEXtAWNmY7HzEu",
  },
  {
    username: "andre",
    address: "14YDyDZ9o1Nr2hMqLSbjYpr4Wm5s1gux6CvjYZfUTJ4Np3w1",
  },
  {
    username: "ParaNodes.io",
    address: "16WWmr2Xqgy5fna35GsNHXMU7vDBM12gzHCFGibQjSmKpAN",
  },
  {
    username: "ChainHub & Texas Blockchain",
    address: "12uYFKgwKxFGMZjkR7AkTRWhFozjJBZpsnuJa6KM8DyfKbdr",
  },
  {
    username: "StakeDOTs.com - by Bison Trails",
    address: "13bEAraR65YASSynHhGNrsEyPgWfcLLYdgYV6GmeB6bbUeeg",
  },
  {
    username: "soloking",
    address: "15aifM2JnkGoZ5QixmFJLiK5rmpqBcdYuSCAPBK92VyMtAQh",
  },
  {
    username: "Seun Lanlege",
    address: "1333zsMafds2sKAr8nG3zwXTCHPYv2Nm6CRgakpu6YVGt7nM",
  },
  {
    username: "Daniel_Artamendi",
    address: "13Mg5VGLpLSHKfKhEzicruy7GBqY5MNcRiCyzHK9HvZti9rf",
  },
  {
    username: "James_Agenda",
    address: "112DJgTYsQioTDgLDP3GkjB33b1b3r2DaeowRkXvt7UFsoAS",
  },
  {
    username: "Letras_Cripticas",
    address: "16S9L7cb3GZ1upipeAu1wC27SXefWbMVWDY692bC3LHqrsNY",
  },
  {
    username: "bluepanda",
    address: "13eGSZwJBswHFRpqYeKvzJEPffjqtUJHmihB2TySf1CGHJgY",
  },
  {
    username: "Perfect-node",
    address: "12uUKHVCpXuqVgsm8XxLE56cyHNyvKXMNLJTUJ2j3R7xke7w",
  },
  {
    username: "Rama | EdgewareDAO",
    address: "15qtdC4r3Nk74C45GDyzqVAADexBzYaMzwpgckWDMaJTvJfm",
  },
  {
    username: "Abilex AG",
    address: "15XowmkuVq1JwToSFzQ7reHomLobBtA9Zj5Lp6s9amdChFyw",
  },
  {
    username: "AlexPromoTeam",
    address: "15G4hfDNtNhRc82As8Ep2YfvpM5xVdX7De3P9qSdHerGA6wC",
  },
  {
    username: "Hen - Spearbit",
    address: "12WqiQUMcV8jNwnEgniJgfbd8N2JqVi6eCwRfVRc6R7LPzDJ",
  },
  {
    username: "ExtraCoin",
    address: "1xtra1x2rXfWUxvFqscvUfjuDSx8AdEGhzADsYayZyicWsS",
  },
  {
    username: "Clara",
    address: "12aoZXwbUzsv3z5HF5HCrtEwBJYCeKne6rYsxFEKDZ86Wdv8",
  },
  {
    username: "Onramp Bounty Curators",
    address: "14YrktkjXBzntEZJm2fXsHHSPJHnP7SQUkQ5cbEXV2fE34Ca",
  },
  {
    username: "LF OPEN GOV BOT PROXY",
    address: "12jL3LWArHwEGmZZvKHfe33pSBXTbh6aBZBQpfAfrY7RTU3g",
  },
  {
    username: "kaveh",
    address: "145QgzsUqvmsqTHna7y5KE2cN7SWeWARd27hk2ipZeQpabfA",
  },
  {
    username: "bybt.org",
    address: "12EFfnz6sLkFk5gE3Cjfvg7Cx6z226jXTayi8bH2Fwe7kWjt",
  },
  {
    username: "ChrisBck",
    address: "13wXYFy8erT1gDe94SXka5oxtTfbtn33Y6ML73GwcSbpoWHp",
  },
  {
    username: "JimmyTudeski - Polkadot Resident",
    address: "1jPw3Qo72Ahn7Ynfg8kmYNLEPvHWHhPfPNgpJfp5bkLZdrF",
  },
  {
    username: "SEKOYA LABS",
    address: "131EuHb8XH6g3ZP1kVVHwEh6BS898PsNPvHQZQ1uHfiNJ2a1",
  },
  {
    username: "The Great Escape",
    address: "16Q4cR5vHLkoNqtqCZcdeKnZhY9a8AiXZAtemRJmMCpeiu82",
  },
  {
    username: "Polkadot Insider",
    address: "15iGkYi8K2ADth8TS9h1sxCKrTKxuhXtxKSvR4o1J4hwfzqs",
  },
  {
    username: "0xf09f9bb8205a6f6f70657220436f727020f09f9bb8",
    address: "1557x4U7JTAcso9AHpiVfrEsadABQ2swNWhDeh5WvUn9Zdog",
  },
  {
    username: "TOBUSINESSLAW",
    address: "13digUASJJWCdPoZ9sb3NfxTmbZMLZxJ2ePRrvcrEazqTDTv",
  },
  {
    username: "Onemai",
    address: "13Vf3ewFvQjTYzH8h9vKz6yhStrEvR6LxWYnTDKVFQ52JbTy",
  },
  {
    username: "BlockATL",
    address: "15zAFrBTUbKwfwTvjdBreA1zrS6KF45wdJPA4c1nmFbFgz68",
  },
  {
    username: "n-fuse Validator #1 Stash",
    address: "1pnNeueeo2QTr72PXirhUUjdPniysKYETik5orGeq1BFAoU",
  },
  {
    username: "13WEB",
    address: "1B7mHkFUaYXYo6GRqZX4vEwk6AMRWLh4n3LnDXAJAvvg8W9",
  },
  {
    username: "CASDTMX",
    address: "16FjZKbsPfF3K8Gzq7qvzffXrtAPL3BaS25opTLK2WHNenhA",
  },
  {
    username: "Registrar #1",
    address: "1Reg2TYv9rGfrQKpPREmrHRxrNsUDBQKzkYwP1UstD97wpJ",
  },
  {
    username: "dipsyvMAIN",
    address: "1gyJBWA35kGUvFNseKickUXN6tus1NHtd5ZWh8Ba9uNsvje",
  },
  {
    username: "Jonny Ringo",
    address: "14om4dxkC4VHmReK6zy3cNa4Qfdw3ANnwgtcfeZrgL2b7dvb",
  },
  {
    username: "Liberty",
    address: "14V9f68WA6EAG6ZefWryFXszSLDQ5SCiL8aPt2JixeHqNXsz",
  },
  {
    username: "pos.dog",
    address: "13KJ3t8w1CKMkXCmZ6s3VwdWo4h747kXE88ZNh6rCBTvojmM",
  },
  {
    username: "gigahierz",
    address: "13p7gm6EcsDu8Q8R46V7A2hZDEhq7B2SCaiwzGQ2XGnCTxtP",
  },
  {
    username: "GalacticCouncil",
    address: "1Rp3mJJUxPD1nJ6gf179scdejMSSJb46eYoFyEktR6DYt6z",
  },
  {
    username: "Joe",
    address: "12NLgzqfhuJkc9mZ5XUTTG85N8yhhzfptwqF1xVhtK3ZX7f6",
  },
  {
    username: "Tech Academy Codigo Brazuca",
    address: "1frUuk324XLVd7tAB9krvcGfYMUhvpbPqrkG73MjuSUPHSr",
  },
  {
    username: "Winkrypto",
    address: "158fp6BNaiUF6G13EFeeditNz2YVQeMtY68M6D4pEqqCgrdC",
  },
  {
    username: "ELDORADO-TECHNOLOGY.net",
    address: "13gHczEwfrSpQbvHGtXzaf3waLt4WMTJiMskcjYfqhRProuc",
  },
  {
    username: "cmalize",
    address: "1BqHUUwZ6kuRhFZTdbhPwSmwxVnGdCVJTsUf1FU2DXWtEwc",
  },
  {
    username: "BAJUN NETWORK",
    address: "12Ts4kpd2gQ4bzcUh373B6JWGn49vPSB1rajGA9LbvSASKX7",
  },
  {
    username: "OG Core Team",
    address: "15tUgqVfVJTMTXGUSGXtV7GwbSDXm73Mga5SnEanbTqELqCi",
  },
  {
    username: "Deep Ink Ventures",
    address: "13g4yRs3NbtaXyu1Uww8AXd4uvrqXyR1hPR4jejRLv8rBUyB",
  },
  {
    username: "CryptoLab 01",
    address: "16iiKwFsRKRsjAiEpD4zgNgEX84nzHtHHNFKXhz1sHtan3ne",
  },
  {
    username: "Hindi Education Group",
    address: "15oZs5Ck4itRmNTK7MhtBMNFU6dfKh6pNZFoReAMnms64Zkp",
  },
  {
    username: "Amforc",
    address: "1eGtATyy4ayn77dsrhdW8N3Vs1yjqjzJcintksNmScqy31j",
  },
  {
    username: "Kanishka Rajput",
    address: "16kXcMxe3sGTWcgbQj5nGdkUtB9RaudkXMe5GBvGuinF968p",
  },
  {
    username: "HOTBITSTAKE",
    address: "16PDw68JUYaQK9ohysuvnAQ5Kjrm4sf5WaFMkrbJxmR4Zizh",
  },
  {
    username: "DOT.js",
    address: "121weCC67CTs1eF6CAE6WBtsNLfRffsvo5ad8gUvXFkwhqBd",
  },
  {
    username: "Alberto",
    address: "12TSXbWWwcpTXCYdwy7dL5voEtxtaZSkdhiCvKtEktbekoah",
  },
  {
    username: "kusamaxi",
    address: "15ht73xvxdRqz6kno46Yekq44cX3yGNWCYeK7HqHHmEKFre4",
  },
  {
    username: "Vrk3ds_Stash",
    address: "15J94MAEwhP3VkyJsjR5vnPEjgmBkwYRbn8RrKDWPvLP4o7L",
  },
  {
    username: "NaN",
    address: "16hZ5DSyXsZV8rSCCz2JTQDrQspbvMLBVL7U1BH6m3WdAgb6",
  },
  {
    username: "protocolwhisper",
    address: "13xKXf8szK7mjoVNGqW6p65AXKeTtgB3gT1wAoZG2gXtCETK",
  },
  {
    username: "lidamao",
    address: "14G1eyeuPKzjUDamLpkafjNii4oVjJ5MKRj95Fi5NDau71H1",
  },
  {
    username: "Xina",
    address: "1LG6i7RLJoqwtwSGgCNxpXRPL3v5hJFMNeaTejJ6hkXgxno",
  },
  {
    username: "hashwarlock",
    address: "15MScR6aZ5hpBhnUaWjQqGMk4Bh7bZYhjqy5VabYjFQMNpmU",
  },
  {
    username: "Tiger Mode Media",
    address: "1dwxEFdaRzBF1fpZqbXz71nLhJHvPi6a8eETjPSyC3Wrvom",
  },
  {
    username: "TomBrother",
    address: "148muqjLDtTSkCWfTBsGLnqYyCWAjwsyx3nRvjJCHAwosMoM",
  },
  {
    username: "KevTheJedi",
    address: "15GJJuwp1dcak1aSrmhrxCqh11quDbZnqeWdu4Trt3TqMzjq",
  },
  {
    username: "WARAOCHAN",
    address: "15SCEDf8WL1dkqGwWgrCLLomYHzeEmXDsPfxYg5pjxnTJwmL",
  },
  {
    username: "B58 Finance",
    address: "12WQgD3rMnpUcSbqVXFrHYH5kkjJfRpzTGKaszkUF7DHMLe7",
  },
  {
    username: "STAKENODE | VALIDATOR ALLIANCE",
    address: "14MKRNHaJY2yC84SkW7oXhnzVdV3obogoH5s8H4AkzxaFmAS",
  },
  {
    username: "BRA_16-D",
    address: "15THp9RW2fW9imMg7soWVEkwtPzq74Zf3CVJrJn2QnB4TD8q",
  },
  {
    username: "Regency-017",
    address: "1SnRnkbUsvCr9Vtb1PLcqFsAkCC4YDS4w2HUUejXatKiZtu",
  },
  {
    username: "MXCPOSPOOL",
    address: "1f1CUvxKMjnTBXBfNfDK1tthVjpMTkaS8Y9nVZY3uVQmqdh",
  },
  {
    username: "DotScanner.com",
    address: "12xezF6c5sTeoN6miTMe2SLKGWPCPsCT62BKnXLDC5avBZcE",
  },
  {
    username: "qdrvm",
    address: "1544YD9AzZNXq3Bickbk4rGRQ5piRP5AP9b38Nw6boCx58q3",
  },
  {
    username: "brzds",
    address: "12uYULCstsq2Nd5hmjPidnSQGDcy4WJhLFw9qJJFEz6tEbiQ",
  },
  {
    username: "Kheops",
    address: "14z9p1yz566erqaeL2jnxmH3fryZ4aEbnehQ9ZvBFJpPU2Q8",
  },
  {
    username: "BINANCE_STAKE_5",
    address: "15p158r32Z12YyFU7BiqLcqpySmHUedVfJLJ4M73THBixKJY",
  },
  {
    username: "tomusdrw",
    address: "13Tomek8c9wxPJ7hFrbmXXHMzyJfcRWuxFjUbJLQgigRHAiv",
  },
  {
    username: "jsdw",
    address: "12TNvHiRkwzYqT5UZ86cfUvBeZBjLLYUzHLa4Hix99oTrgqT",
  },
  {
    username: "Elisa_Events_Bounty",
    address: "14YBuGZEKgm1A9maL24fHU3y6Q3yd7WUwUp957nsGZfHg38z",
  },
  {
    username: "danicuki",
    address: "15mXN5E3gn14t3etvcGHGfR4zL9WNoCBGCu9rJJiERqjePY8",
  },
  {
    username: "Mahavir",
    address: "16cY9AhJKLH8yG2Jefzrh49p7sLGUuzMtzYTFK5c2QtCAxod",
  },
  {
    username: "Clement",
    address: "15yZuGcLKp5zbyXabHj9K5X7YjR5C36UvZaLXpDbNuYA3h3e",
  },
  {
    username: "Bounty Manager",
    address: "143A8aK5Sdiyw8eHMbGKRWz1VdKg75BG2SRVXTFwyHjuujCE",
  },
  {
    username: "QinWen",
    address: "167rjWHghVwBJ52mz8sNkqr5bKu5vpchbc9CBoieBhVX714h",
  },
  {
    username: "CRYPTOLAB.NETWORK",
    address: "14AzFH6Vq1Vefp6eQYPK8DWuvYuUm3xVAvcN9wS352QsCH8L",
  },
  {
    username: "Zoey_OpenGuild",
    address: "13gd85gViND5oJiDgaRVjizqJaqUTwQSCP2j3R3Bzv9cHm5A",
  },
  {
    username: "Mexican Collective HA",
    address: "14N5cTFuzJf6irrQkKNAjiADKsCxgk48LUKx2fA77YRruzMW",
  },
  {
    username: "Pheeb Polkadot 5.1",
    address: "15g4zgBFXtbPv2JMgf21DQZP851BeMJJqmAsE9R3MMaWea71",
  },
  {
    username: "Dane",
    address: "14wMMjJZzgBn2dBrtdpyVaYzFEJEDNDnmwbYw6dkEAiGhmmw",
  },
  {
    username: "DevrimPendulum",
    address: "14T9RdrZ4vbxhQSmtYdnX2VNHbtUqRFCN2Q8hqcVc9ir9Mth",
  },
  {
    username: "POLKADOT",
    address: "13m8Q2rsb3a4CX7F4opPqiS4DJVkrgp58BpFVB9LvjkCXdXw",
  },
  {
    username: "0x5374616b696e6734416c6c20f09fa5a9",
    address: "16g43B7VPfTmpXQujSz3aKbqY9twSrDreHFWtwp4P7bLkQPp",
  },
  {
    username: "caybach",
    address: "14x8J6Hei8CmnhUVysFKbmF6wjLfWYrBvfxjYySQ2Fd1sq5p",
  },
  {
    username: "IPSE",
    address: "15FdawBwokuor5wzU2DAU2Cp8i9DwRS1HTNgTNDAbcXuAEXH",
  },
  {
    username: "Parachain358",
    address: "14tXRdd69EN21mFCJtDHn5bAiryuDRd6JFpjuztpo9CaUY9z",
  },
  {
    username: "gpestana",
    address: "14DfY8Hsg4bSU6Y9VaxL7aRhwfAfHqRSfj7FfHWUwLFV1V7q",
  },
  {
    username: "RyanHo",
    address: "15B68tuCmL6HVqrotzTpXwmAiG1Rgkfuzok6SGHNiaEBV9nz",
  },
  {
    username: "Stake Plus",
    address: "152QidDC4QrtMCyRGiQmvrNyjntvMg2XouCSdoPSeqUNTvsq",
  },
  {
    username: "OpsLayer",
    address: "1HR58qqtqAQh6SDofoKvTfSPr2zNbUzuHGT4N7xqzBUMj3H",
  },
  {
    username: "gama2830",
    address: "12WA4hNRU8Th7Nb3zxGgCVPcSz9noUx3vmVTb9GpwDuq5qGA",
  },
  {
    username: "Decentralization_maxi",
    address: "128QDexPpstSNKKY5tAhbguC3vmLhCvrhnKeTzy8L2PMZBvi",
  },
  {
    username: "HYPERSPEED",
    address: "15cu9qomrRvnqkvnSMhPPkBp9359QDbGBy1bVo3tseozxhxj",
  },
  {
    username: "RAF | Polkadot Amb | PBA Alumni",
    address: "13QrjCDeJ6RqN3L6y5S2DZEHszBNk5XD4YRrzjkow5zhT9oQ",
  },
  {
    username: "Thang X. Vu",
    address: "15uJb5EtttE7SUgBLDZKByV6S5YD4uyV7Zm1McYx4VGsBV44",
  },
  {
    username: "A Kane My Wallet",
    address: "13GwMg8riTZ8YN2PUGeMJnbkyX7YYkAzZJmeAnpfkoHoTFhB",
  },
  {
    username: "Sota | Plasm",
    address: "12W7phPwe1AtVyYvPLziJroXVyKyvu4BxF1JVdV8SinENwRR",
  },
  {
    username: "Alice und Bob",
    address: "1hFmn2CuqXqxHgKDqqs2xRBpsPkiRXzJfcLbfDgsW7qgmpA",
  },
  {
    username: "datapunk",
    address: "1RCefU36i7yKwHMzH3UBEyPebAMoXL9FqjeBmydjXRVX1XT",
  },
  {
    username: "ZKV",
    address: "15KJFabioS7ieTiNCkKkLpgZ5JUyPhTBF6y128R7Z6Rsx3kq",
  },
  {
    username: "Beckett",
    address: "14TLC7p9Ceuxv1755T5bkZwZS7Q9EKh6vLqRRgtuFmg83pWw",
  },
  {
    username: "Alina",
    address: "12upgS3u7rhcWSFCXuv2GFzvXvW6Qf2YKajZUnMBxz3LPjEi",
  },
  {
    username: "Maque_1",
    address: "14jDAbUu6fj9cxG4ciGcmtDGa2PMyPKMSEuax8jrsB67cuXt",
  },
  {
    username: "Electrocoin",
    address: "16RyudR8hzyJWyQGNbLbnuf7xD3PianrWQx9jTa92t4JLq4s",
  },
  {
    username: "DotLeap Editor",
    address: "1QjuTEKebQ3au8bxQC6iwYSPCA2iZn3YHwX8VABCauKtwRk",
  },
  {
    username: "Daniel C",
    address: "12C1NXW8b8zmtywamsbV2mJe8BDDwDES6QuiAoWCFbLx1AFv",
  },
  {
    username: "The Weak Hand",
    address: "128sq7FMkiK1f2Z8pZDfkWsgtZFfiXwRpqKmo5MPoLip8fsf",
  },
  {
    username: "mateuszsikora",
    address: "14tf6e8spSg3DgMgB3ph9Yxhr4kpERhur498VjJhoUT2xJkw",
  },
  {
    username: "Sow",
    address: "12WXXM7yhespcDdGatY8powJPDeJWjwCMZCFgHr3iVo3qK6Y",
  },
  {
    username: "Serratleandro",
    address: "14TB1ZniL2rnV6dCMEPvogzTbpLxpKwbPWwdciPXymmmzcz1",
  },
  {
    username: "TigerPro Capital",
    address: "168HGqVpaHsEyeYH3kgLfYKXsATkp1ZYyo3p71ixcZM837jT",
  },
  {
    username: "brenzi",
    address: "12brenJreRTd6XsBMo3Ptu5VMUUycC53ipDxUy9Mvb4L1s1q",
  },
  {
    username: "dgreatanda",
    address: "15dJNuttevEiJXv5gqN1B5G4MD3hWE1NVZkEsiP4BHSczKpH",
  },
  {
    username: "Kenny (Manta Network)",
    address: "1efDb4Bh38doLbnJAYAFAZBidBdQcj4WGNt9zeXxZbqkFrw",
  },
  {
    username:
      "0x63727970746f7374616b652e636f6d20f09f87a8f09f87adf09f87baf09f87a6",
    address: "14DE8GdKnNvgoXCLFq62ZjNz2zsGqnxXBsRMwNpiPip2JSFJ",
  },
  {
    username: "catswithouthats",
    address: "16HsP9V3D2WQsKdaeyBBLmvSRXLsH5So62vnXoJumqGj5j8U",
  },
  {
    username: "Tomitzu",
    address: "1A2zk1bsduXwSXU9cwSrhZZr8SyGg3L2CVGiG4XEdJntXvA",
  },
  {
    username: "Tentbakers",
    address: "16g5E5ic5phnFEnJnMnDYEM3dtqiXM8kJ7FjkaZPF3EZTb5",
  },
  {
    username: "Javier",
    address: "12W3ea6jWKhzSWSCMjUKqtDwasRACeYFGkyvVb9Y9b5dGm2v",
  },
  {
    username: "FBBA",
    address: "131S1zdnMfhF1hB4sWornxLvX5SY3c8GhtFPPePUTvhphQRM",
  },
  {
    username: "DomiNodes",
    address: "1dNjK6t693CuVmDyebb3Jq27S3qbRohEbJhGo1tWEgxNvGV",
  },
  {
    username: "Recrafter",
    address: "16fWWdAAPXPkGR3JkSWbfPmWiDrxxwdxWNBHXVxL6M86U7nh",
  },
  {
    username: "0xe8b5b5e4ba91",
    address: "13C3T4CGCXcSzKhabG6fWS5BUTzLtvWm2WbsDoyQrmb3AYN5",
  },
  {
    username: "Titan Nodes",
    address: "1NebF2xZHb4TJJpiqZZ3reeTo8dZov6LZ49qZqcHHbsmHfo",
  },
  {
    username: "AZIMUT",
    address: "14j3azi9gKGx2de7ADL3dkzZXFzTTUy1t3RND21PymHRXRp6",
  },
  {
    username: "Blockchain Pedro",
    address: "15K8rzqdjjUBxLmz4aH96Loqm91A1LZuYJej6kV43f8w3Uvf",
  },
  {
    username: "ehildenb",
    address: "15ysT6MMauFetH2mUGUiaLeC89KK5rbJATiMSaX9DAuGw7P4",
  },
  {
    username: "Moralis",
    address: "14KZ8VnmvtW5ULkZechfVeJsUyKNqFazjo4EoRWz3cfJDzur",
  },
  {
    username: "Coinstudio",
    address: "14d2kv44xf9nFnYdms32dYPKQsr5C9urbDzTz7iwU8iHb9az",
  },
  {
    username: "Sam Elamin",
    address: "13xS6fK6MHjApLnjdX7TJYw1niZmiXasSN91bNtiXQjgEtNx",
  },
  {
    username: "Hector<B>",
    address: "136Fm42HZTxUAQD1zDxXuzeF8JgijeDfTSkFBWJKxzVAgQ8K",
  },
  {
    username: "Legiojuve",
    address: "121Q3Ma5SMeTAWYzB2JWN6EqAhaQtzeeCe8p5n6NH78KBJBs",
  },
  {
    username: "Polimec Foundation",
    address: "16Y5W5TvxaAC91U6Zy1Jp7aFZJ3qzKh3zc7fLELM8tobkehs",
  },
  {
    username: "Agyle",
    address: "138MRRCFovYvetAhv37SnNsZoCVyghYoUArhBzMzKFfFGeMP",
  },
  {
    username: "KATE || NOTIFIGATO",
    address: "12ZNDbnhDhevvNgoZuZ85NTbC4LSwSUiacNEyqNmHVeqWCBs",
  },
  {
    username: "OpenZL Comm.",
    address: "15t6F3Ww4LHy6uw6vYqJzFzWSBqM2gLFDj3mzBFx8qzLeuH7",
  },
  {
    username: "MINTware",
    address: "14udY48vCbPLtF2VEpUmqfJLHesmAZWi5ShzeKgnqkuigYaR",
  },
  {
    username: "HYPERSPHERE",
    address: "15oXUdem7MwP62EwZ7yNK4arwJtXimqQR7YfEMDvY1mgo1E6",
  },
  {
    username: "celadari",
    address: "16a8wjF1Kt4irWBFs8hm81xyhDbjgbWVosR42PgP5dX9TpcX",
  },
  {
    username: "Zsofi Major",
    address: "15MNuKZdQ65waaiRSmdzv2URNiHwprq8WTvYqbZDfpm8W4x6",
  },
  {
    username: "pepyakin",
    address: "123SVCkcHnNKyng8EPmaUeay5kKHu1jig99RT21E2cEx5pQF",
  },
  {
    username: "BESTVALIDATOR | ZURICH",
    address: "16fH2RPKB81butanvooF2tZqCfWrAuwXNWhcPyomCbCBDaPF",
  },
  {
    username: "gli.al",
    address: "12EkWG6he6FA7ZQmHUd1zyoAhRSGWf2ycNiuZtPpdq1Wveg7",
  },
  {
    username: "Ludo",
    address: "14AgwoPjcRiEEJgjfHmvAqkjdERCG26WEvQUoGLuBzcXKMS2",
  },
  {
    username: "0xCoppersmith",
    address: "14Mh15X81havVDpeeaZ6q9z5zxj4XdDV3vKk4qGWnU3WBeDu",
  },
  {
    username: "DOTA",
    address: "13v7ATPf5egXyFcZucWyVcqsmAFy66JT41ebJmww56TknppU",
  },
  {
    username: "Crypdough",
    address: "12c7vF6kpZXBbYWSRsgj7pTXsHxV8iwqZTwGbJBVgjd95W2g",
  },
  {
    username: "0xf09f91a8e2808df09f9a8073706163656d616e",
    address: "13EGEYooVU41ceNWVTFm4iNb3YXqnmFEd2chsDP3fy7RQQM9",
  },
  {
    username: "Rarible Jonas",
    address: "12YCbhAZR7S93iXYq3pdMwkvoWGFNaXtXKKGGmbojqsbcENL",
  },
  {
    username: "JohnnyB",
    address: "16GToEujRCWMxAGoiUoiiSzQW1pWsR4KiuMRorMSsimBb8mq",
  },
  {
    username: "PiotrZwolinski",
    address: "12qvLj6Kdh2nqp2FbVVdupWrq9R1F9ocRUwXvSejgp5Uf6Nf",
  },
  {
    username: "Default",
    address: "15tMemsVL3r9REFtWtmkAcYsDx442oHNrthmMioTJhUwfVs8",
  },
  {
    username: "Dot Play Angie",
    address: "15rYBV5YwGmhzee5PWqrnQtb2HhwWP2rK2f4cLMhFfcNdPZL",
  },
  {
    username: "WagMedia multisig",
    address: "1nk1zBjum3dr6Y1YAx6Uqr6Worx5rSYJtu9iq5v5gyTFzCL",
  },
  {
    username: "FARADAY",
    address: "15mYsj6DpBno58jRoV5HCTiVPFBuWhDLdsWtq3LxwZrfaTEZ",
  },
  {
    username: "rafac",
    address: "12ikTFutVvrtreWzQntNVsYht1iVeCd1SLLbynExY5t4dLiM",
  },
  {
    username: "Inter FC | Polkadot",
    address: "14Ra9RPUYcTGutBL9FwxmLr9yLZ7Wx7oGuAgeWbQa1iAU6sD",
  },
  {
    username: "RockX_Polkadot_Diamond",
    address: "13rZgg46apBJer3VgiSTzawg6fhyawfZPkFPuNYAQ6vuYt7F",
  },
  {
    username: "0x4a4b5242207c20546f7765722042726964676520f09f87acf09f87a7",
    address: "1554u1a67ApEt5xmjbZwjgDNaVckbzB6cjRHWAQ1SpNkNxTd",
  },
  {
    username: "Nino - Apillon",
    address: "14txosZFB4PxPGPt1QCrJJFf8FUnqQhJ57iv6guAnj5i4VCL",
  },
  {
    username: "Web3-DotFans",
    address: "153Ys4VrrPMCenFjb2P2NeajMQGduHAuWYqaTR2Z6srSW4SH",
  },
  {
    username: "Lewis",
    address: "15SiJdfo5PTuZ1Jc1nqYmgGpRykGNJwn1ZozgDymQYo7jGKm",
  },
  {
    username: "P4U",
    address: "14wSkCxrdhN5nSpMoMmCPQmXedxaJmpK356BVeYyrVmqVk4E",
  },
  {
    username: "0xf09fa681204c454f5354414b452e434f4d20f09fa681",
    address: "155VzALMxQmiNAEzorN5qjoC3TWBodi8s95PGDKf9XVr2dh5",
  },
  {
    username: "Subsquid Labs Official",
    address: "13bfKSQXoBn3AMLtZaW6BKv797fqZzsD3PYF6xpJDir3tdoE",
  },
  {
    username: "Mark Ryan",
    address: "14H1xWm7LFz8u9FJ2roq9DDymUMyARz5gY736i5TMaSwvKC3",
  },
  {
    username: "Missy",
    address: "15CxWHZrsWnqojXLD6aWq25uBRxX9A32KLw1kwSv6et72iM7",
  },
  {
    username: "BEEFY MEME",
    address: "12p2Jky4Uygd4wZu6MdBeRQ7CjR31XMoGQvYRkTX1x3NXe6Q",
  },
  {
    username: "MDrought - Staking",
    address: "1RCjUtnufDStvQN8uu7fCJaPh9eNSiJJizS4hp4dwNaZu3d",
  },
  {
    username: "boo9ieman",
    address: "15Jo7phBC16ydF1EzNdcVszzCxGec7KerSWwSQ8uDPDBtvV7",
  },
  {
    username: "Polkadot @ NABS",
    address: "13RGAH6kBRK2ui2sBzxaLTtF6UuyZyBfdtbRm4sBimukknza",
  },
  {
    username: "aslink",
    address: "16PqxYLHj2Eg3i43gPKcYrW3dEwJy9nWad5PN4u3Dk9GoEdi",
  },
  {
    username: "SHA-twofiftychris",
    address: "15Unc1GhYW24KEJhruYE9KjxLkRF36PUf8HXvdaJKHrxUCrF",
  },
  {
    username: "x1Anon",
    address: "12KFc2nGq1Y3MKyCbCkBWZJgLrrHLSN4LxKMU2st5sQUXTyQ",
  },
  {
    username: "4ire",
    address: "124WkR7kyQubc1P9ztv4H6pdvvqrat2Mavg1gUKWrv7sEqeh",
  },
  {
    username: "Mister_Cole",
    address: "1wzZiegQfdppPw7Ag3vhhXbYuw47uJLJ5G6eXcKc6feTS5x",
  },
  {
    username: "RealVision",
    address: "14TBcRgp166DXvMv9ZCJbKSqanUGP6tguryPQcaBqjQp8d4m",
  },
  {
    username: "Noah Joeris",
    address: "15jnJhdgfZBM1zV5cxSKgjGRsHg8nHNDZ49u7iRK547n4f1d",
  },
  {
    username: "CertHum MaxStake",
    address: "13piKgENtE44MSaYQKhjDnti5VAzVyCyuR3cHqpFWjxdgwbY",
  },
  {
    username: "ryanhigs",
    address: "15dFHJonu6cGqv8UMhrZPpomAtqpGtwnb2Ar7fRCq91BZtVq",
  },
  {
    username: "Siyu Liu",
    address: "12uMmwxjpbntEkvfHDgb9Kdpeo98LNsj7KRLKMMqq4BdG5Qz",
  },
  {
    username: "FUTURE",
    address: "12eKXDMUnGVp2ScEKXbFNxbgktL7DEchLKTFrayspgqwDraq",
  },
  {
    username: "Bifrost Foundation",
    address: "133VgJJgp1s9wxLqgCFxYx6T873hZQNchJM9tmbU6NkYaaqW",
  },
  {
    username: "BINANCE_STAKE_12",
    address: "16Q2PH4woP6gCE4LzgWtmwTGzxrrkxSsz5bDnXQnEpdabxf4",
  },
  {
    username: "DotHacks",
    address: "1sN5Grxnyp6XaAjhw7rse9ykd8obAAGHXBpmXAUksQ8cZDZ",
  },
  {
    username: "Jason Tse",
    address: "14ree4Eo3pq4jyVcuvdB3BYyxyYUN4vDRLDz4a2vefC38hEx",
  },
  {
    username: "ekitcho",
    address: "1uftY3Frjrrdp2zaiXyuWCd3SsqktizsG8YovQLdvHdrXgh",
  },
  {
    username: "MyCointainer.com",
    address: "16URZb1rT4jT6QkxDSYNMoGE5r4mE2PnY3XCK3ESgAzSJd1J",
  },
  {
    username: "Yudus Labs",
    address: "12Yk2MnnGvXYCiBtAywhKnFYPtBZ9TXFgZhm3bXzrg1WwqmS",
  },
  {
    username: "hodl3r",
    address: "15wgKu1voJceJZF54QZYCogJz9MwacTB7pauBeDnNyrFV3nF",
  },
  {
    username: "Keita Moriyama",
    address: "12QsMe6gzgPW98FWUkKATdcAw5pqYGASNDtdi9NPCwvrMQY1",
  },
  {
    username: "Figment 4",
    address: "15twfAkh6TKdNpE7kNgxcQSRYtSpt3QpgjxmR6HKHFGs6Yrz",
  },
  {
    username: "Mischa's Dot",
    address: "13x8MziKV1GZLmuZpWNX7CynxhEdxAGmXN9qLtrP9tEvFV3V",
  },
  {
    username: "PRXY CO",
    address: "16PXXMpYqcNXjp1a5CpG1uj4XZZtvPjzDJebu5EdPdHKT3PY",
  },
  {
    username: "MattSanto",
    address: "16kmbXhTGCwkXzdQMsE5AMJHddqLfRynJJL4ycFZg91zE7H1",
  },
  {
    username: "Chill",
    address: "1ujUjSpHEWY4M8qY6hYCtuZE7YBuyqroNaRcijViFzBFFAb",
  },
  {
    username: "Zenlink",
    address: "14Kg4PYCgpnGupwetz2kvQZvci5svhXSmxJnH2mMT2XBGkxi",
  },
  {
    username: "AJUNA NETWORK",
    address: "16AjunUasoBZKWkDnHvNEALGUgGuzC92j7LJoLu9qBSUJB2e",
  },
  {
    username: "Stakely.io",
    address: "14mfkSb4EG7Vc7T5HKHvFgXw1jv7jwYM7yVFFHXhEbT98TPL",
  },
  {
    username: "Armielyn O.",
    address: "15JocbMzVoeP4aybjAC1tk3ciwmurhFCetNc5fQJP4azuGtC",
  },
  {
    username: "Polkadirks",
    address: "15pAHxckdkyCXJEXZkRtWxw1gbwjATkFejxKDC4q9FUKUTFH",
  },
  {
    username: "DAONgok",
    address: "14x4iL5pQZHn2avVF6ySdmgSfW4qt8Zz7c6njMg3yDX7FhNq",
  },
  {
    username: "CultureDot",
    address: "15wuStiU3csCRdJgbztubxFFSpsdhRApUzmKWtBderKtd43G",
  },
  {
    username: "Lana",
    address: "13BRH2jcB52UzH5oGmNk6SefKjThBUhgLDVkCQ5Svu7uAmEq",
  },
  {
    username: "Marta",
    address: "1NBuKkj8eD457BrheCiHCidoKL8MCBCfgBMyrbLuZkw3uDo",
  },
  {
    username: "Rekt Street Capital",
    address: "13rektMPMmoydwMMVkHQD4Fidfyqr6bz5bUf2U3EE7NuzW41",
  },
  {
    username: "german",
    address: "148FJo7Kfm8dzyJLFy5eaSP4i7eNMbS6caemDr99KZoV7gGV",
  },
  {
    username: "Dacade.org",
    address: "16aQb7rHLB8UXzd2YSh56vjAELyyq8jYaj5QdAHjVjsA3ey9",
  },
  {
    username: "Bright Inventions",
    address: "15LpomjmegxcrVwT7zDPvScWtx6FVYoTLxEkSzqwr3po9TCc",
  },
  {
    username: "0xf09fa78a2049636562657267204e6f64657320f09fa78a",
    address: "14icei1ZMoG9QtKBFDk4y1eMR756q2TREuRAi2BanJ9MJVPL",
  },
  {
    username: "Glazescape",
    address: "132UCMK11nFbtiwQo8pKRiXFuhkwVcBMP2vRuNcXi6DuCgbf",
  },
  {
    username: "gbaci",
    address: "12WarfbFeUm5L9Fs5zkTaQQH7L5hqaGPEgM9vQ1UFK8kiUSK",
  },
  {
    username: "Polkadot Italy DAO",
    address: "1436oMyTcpEwbbMNjPsGNj7dmHcMRFe97NLAAkQhN8Wm5ffy",
  },
  {
    username: "harrydo3979",
    address: "1YsvAAh278Ez2D225LBotxAq6CsDCVCLpZDNJqguWX6Abmy",
  },
  {
    username: "0xf09fa6bef09fa4962049766f72794e6f646520f09fa496f09fa6be",
    address: "13N38V93rRgrdvYbwHgCjRBoRQdDGL9iVzNfYbP8YVFN83QP",
  },
  {
    username: "Melange",
    address: "1434u2z8caHqrVyB9n6Zu5Zm8oQQSPtiGSKi77PKHBeFdooB",
  },
  {
    username: "Brazil BizDev Bounty",
    address: "16Hbza9mgMR1xWbAhZMnbJQLKYmmGG1GSndpRAdNumhuRAuP",
  },
  {
    username: "Staking Rewards",
    address: "15wEWgavv9XLNE5yjqEropkw1tPsp9Qps8yTxPRj1iAStaNA",
  },
  {
    username: "TPKL.Earth",
    address: "14kh8jr87q7vb5N7JrgAQj18Cz5vBGGFPYndLjRyCwPAnQTf",
  },
  {
    username: "Maarmapa",
    address: "1EvYZwJ25wgUzMqJ61AadwTtaHr6BVosPcyK4goohUDqmjY",
  },
  {
    username: "XUAN",
    address: "13rkfSaFsMEFJAV1wcQcnbJnxiigJTb78qkkLSEvUNPA2QVZ",
  },
  {
    username: "trustednode",
    address: "12avYDMtxnDLfaUoXRhDdxJ6U65hNNhbk1F9VVGmEw97LFm5",
  },
  {
    username: "jerez_Q",
    address: "1xZm7LpbQFxrxY9JAd6rhP8W3BidtS3pSicEGyAm5VoBds5",
  },
  {
    username: "stash",
    address: "14bTbywxjYAmKFkjFfBiiJ4Ftgwe5apjKQYzGkQnAinbmGJb",
  },
  {
    username: "0x4d696c65f09f8c8d",
    address: "14tcxHSTAiZf7M4vcLfFdGkGJFjfx6zDqds5QVyz2H24hKgG",
  },
  {
    username: "SultanOfStaking",
    address: "14fpV2mDazkNsj56XkdkhGLniknAAvu9aNHPpoZs6wjMTdcC",
  },
  {
    username: "Mintvault",
    address: "16fu8PSusBK1KbeZ6SQwx329Hu4qn2AZGMn8c5CfU39MBmyJ",
  },
  {
    username: "LUI5DOT",
    address: "12pUXtKj7jD3yaxnK6TWKBsxS1JpLUceBKZKMPMH6RiZvjr4",
  },
  {
    username: "muharem",
    address: "12HWjfYxi7xt7EvpTxUis7JoNWF7YCqa19JXmuiwizfwJZY2",
  },
  {
    username: "Stallings_AG",
    address: "13Bm8YmgjH3aHMEWJAk8CgfwFJUMeJw3LSjbtaFmCFFsQSnh",
  },
  {
    username: "ET Public",
    address: "13b1ppco1mQLBLGX71zBabh7aUaEvqQVoSWhQmHGjWwGTjxM",
  },
  {
    username: "KJC 83 Dec 2021",
    address: "16cND96d1qmUgisQQhzF2fGGNkMgUf8671myJqtwDRvtjCw7",
  },
  {
    username: "NOSTROMO",
    address: "12rkcrCqRF7MFPmLTdvk2TJ5DiaY2GR3HTVdDsi2ymZE9WAj",
  },
  {
    username: "DICO",
    address: "14BB4ZbvPadELb1jBhbJq6GbECvBfkxFmohybYexzpE4KMq2",
  },
  {
    username: "KSMCHAOS",
    address: "16XaY8AjjqTn4FMfnbguy3faXEe6C38axMZpTWxoYYCETf37",
  },
  {
    username: "timwu20",
    address: "1RaxuqWvyd6sdAEiansxmtget47PVcsSR38d9V2uPzKu2vo",
  },
  {
    username: "Parity Technologies GmbH",
    address: "15iEcRaBLKXFt1btE82v358cAzaWyJDbrtkuLhQVf2Voou9K",
  },
  {
    username: "Regency-007",
    address: "1275FF7Usj8NuKZJ8EoXxC5YnP3VRQsTBfVv7PEbks7uvwMw",
  },
  {
    username: "m_sheep",
    address: "14i6evoBQNyE6pu6BE9BuoHUNbBehfv95cdrdJDhv1eoNXaR",
  },
  {
    username: "TheWrightSuccess",
    address: "13pbJnmDtgzcmjWSkpsazznFzsFNbMvKwsktxqgHtyJqXRhu",
  },
  {
    username: "Coretime DevTools",
    address: "15m9iGPGPDzcdgRZUvQQPAD8YFho7QWFfT5tcvVHfh22Ti3x",
  },
  {
    username: "0xn00bz",
    address: "15S8fgRAVzvtfiyxgqWpH1QcUTAj7Mky8gBb3Ys22GzQQV6a",
  },
  {
    username: "HelloKitty",
    address: "13nBynA5EfmnbvTrZiTnPujnMHLzBt9RnDjPHGL1B632yjnq",
  },
  {
    username: "Smoldot development",
    address: "15kgSF6oSMFeaN7xYAykihoyQFZLRu1cF5FaBdiSDHJ233H5",
  },
  {
    username: "EXNESS.COM",
    address: "1EVX9FRY5Kw2siUpBkfidqAFh9X16zS65ucUwNpwm4EmZsv",
  },
  {
    username: "Uno Staking",
    address: "1cFsLn7o74nmjbRyDtMAnMpQMc5ZLsjgCSz9Np2mcejUK83",
  },
  {
    username: "Alex",
    address: "15db5ksZgmhWE9U8MDq4wLKUdFivLVBybztWV8nmaJvv3NU1",
  },
  {
    username: "MAARTEN | ASTAR",
    address: "13zCwRqhAj4D33czsm1G82EgHBNq58CCcWRsbwABaby64p1A",
  },
  {
    username: "mantra",
    address: "127BTAdUKatuUvn6qcHkCkwgZmkeWjJr7Az3M9HeZPEP4iQr",
  },
  {
    username: "defiguy",
    address: "14mg5GK7RoiafH7djdKgZKxKewuhj8ds19bqjioaEHR6WhQ4",
  },
  {
    username: "2075",
    address: "14dgsNsaz5TXC1s1vX9emwVwhPaCfjjaCciMYAUd1CK7TdtF",
  },
  {
    username: "binance_stake_2",
    address: "16FRYg2zE5cgrkKQmJhU9YJRT7Uquqxfz6hmp6GnqgdcBv16",
  },
  {
    username: "Klaster",
    address: "12WPCK5gaQsvwzvxzUtkfhbSg28eN7hApZsAUDbDisdP1BB7",
  },
  {
    username: "Chralt98",
    address: "1NXMQnv1987ivynNoZaKCWbtpMUHRCFYnbi73otmPrEcbLw",
  },
  {
    username: "archana_vy",
    address: "1bEU8Zjtyrv9m7Nv6DgT3vL3edW8oqJbGkRZAcYafwtXemb",
  },
  {
    username: "Gustav",
    address: "13u5odFdy7uFmRLpbgtYGWeFy8rFkcD3bYfad49B81C31pwL",
  },
  {
    username: "DotSkull",
    address: "15hqnsaZVtLZPvp1rzQhBsgr9Zhry7hrS9FwjSg1zBnfdc6r",
  },
  {
    username: "binance_stake_1",
    address: "1v7QwYLMaABh7eyFKN9PHbKquAyPt6PtcYZZWvf12KV5pMk",
  },
  {
    username: "10KA",
    address: "12eGjveYcgTUGm7ai6MQF91SJegWcjmxf1HvSBj7LkbZwGTM",
  },
  {
    username: "DOT 1 (Ext)",
    address: "14mZm68KLffXDsBFpVfmqZH69NvN7Dqopi1kSuCnowbaoqXC",
  },
  {
    username: "Nathalie",
    address: "15o1b3xMivafaFEM2D1HjihWe3m5jjDTTok27xopxd5ChQqw",
  },
  {
    username: "BTCMINERS",
    address: "15Q34cY2V23z7Y9gHtXPLGbSsy14Bvfg9Se4HMzz3ytF1miz",
  },
  {
    username: "0x547269706c4569676874f09f8dba",
    address: "15E6bLsr2jQE2BA28CZGk5EeCHJaZk9jmcNS9WHjLS6g8Czh",
  },
  {
    username: "Polkawallet",
    address: "13QBnezwes4mDDdeftTzkpGN9iADkfCn3SvbD5LT9hu2yukJ",
  },
  {
    username: "BINANCE_STAKE_7",
    address: "1Ew5wAsMtvbRdd4RdxSheLpEkSRc718gtcfTv8EmgzEbknA",
  },
  {
    username: "andersen",
    address: "12sZCBGXLWMjefKniJadwA1LuDNKUcco7z1qHitwBHeYeEj2",
  },
  {
    username: "W3F",
    address: "14JezNxa4Fqzsf7ef9prYrNy71Cd1Ff3cZizFrntwviVuC9m",
  },
  {
    username: "N1bo",
    address: "124VPrAEBS8fKNFANDBJBcNYFTsdqmHtZbA8gCR5KpteZWXT",
  },
  {
    username: "21Dot",
    address: "13xivqdAA6MnoCbybLyoZcRHVHz6Q2f9vLdWbuJjBasxz5cF",
  },
  {
    username: "Blas",
    address: "14318V4hxygYvVqMtyxpX4f7UDrkNUKovjturPcUG6s6Ro1h",
  },
  {
    username: "laosfoundation-Alex",
    address: "13BGyjLf49NiEZYcNHCJwjQu4hNdtivyVSMq1dc2okQiF2nc",
  },
  {
    username: "Able Wanderer",
    address: "121MinkJ9wuYCjRVoA3FtEpM16mjiqchtcV51MdGjf7jsq3i",
  },
  {
    username: "SAXEMBERG",
    address: "153YD8ZHD9dRh82U419bSCB5SzWhbdAFzjj4NtA5pMazR2yC",
  },
  {
    username: "Jarsen",
    address: "16SjUbGKSdjCdWTy3NNT3JxbRVGGqD4mwkHpc6BD9U2Rp29Z",
  },
  {
    username: "Mixo_StellaSwap",
    address: "15fJsFoLqasgdo3BsYAFDKpa6drBv5EcVM8ZXYDeKVKayQyz",
  },
  {
    username: "mar1dev",
    address: "12REcEzNqD295EEy2XuvqtYxMe9jNFVFM6y467ViadzjNnmR",
  },
  {
    username: "frankywild",
    address: "13YWynHAu8F8uKZFbQwvPgJ67xizvo21HCEQU3Ke8z1XHoyT",
  },
  {
    username: "Swiss Pool",
    address: "14QqQn42mW14nVuvrvLprtbfE9QwKjwh7g5UjMf5g7k4N5t2",
  },
  {
    username: "Grizz375",
    address: "12wnTQnY3qUTCofi792fTdf9HpQQ6jmyxrVdwyT6X2Jed4Yg",
  },
  {
    username: "IURDAO",
    address: "15DyjUQDBDi6DuFRVdQzqPKf3tUgu4QEp5UgZh4H6MUP3RVo",
  },
  {
    username: "Ryabina",
    address: "13T9UGfntid52aHuaxX1j6uh3zTYzMPMG1Des9Cmvf7K4xfq",
  },
  {
    username: "ilaria",
    address: "13sJj5srSaKJfwzGrVM24nqaPc8Arx7Jtjjr7qABvZF5eCsE",
  },
  {
    username: "DECENT PARTNERS",
    address: "14MY5bH76Yxi8s3Ujgpgehh7aadfyKL4eW98gZgXYDZGgpLX",
  },
  {
    username: "Serhii",
    address: "14MxwjeeqmwWd32W1N3UxBTfCKfQsavnE5FLm2w1FaUptZyB",
  },
  {
    username: "web3dev",
    address: "13pTWhfiamNodUdGGrqvjVCMPxA3nzNQRrww1VxXgnYE58FG",
  },
  {
    username: "Snowcape",
    address: "16a4D989zW4m5os3R9oTzNYn6YfN2ZFxB9Y7fqj4kojvZSwy",
  },
  {
    username: "dothub-2",
    address: "15JGaHWAu1nAEtMMjKZSeu8VsYoTBMmoJq6uwxsDBqmwytSN",
  },
  {
    username: "ptqa",
    address: "1NmEvViCTz4cYttAyE9z9hVRMqSJaoJ3sEobeSmNF91MsNA",
  },
  {
    username: "EasyA Governance",
    address: "14M94kYk31k2hY8MpnfNPRviJ4VcsFFjBhq7V2Fs9DzCVhXc",
  },
  {
    username: "0x475241424249545920e29ca8f09f9087",
    address: "14fJ6M6n36La68RVZaWrpkki1DfWuLp1L7hALxeCYeNSu7vG",
  },
  {
    username: "Saxemberg Governance",
    address: "11fx8xKPNd4zVSBxkpN8qhhaGEmNJvPgKqwhDATZQXs7dkM",
  },
  {
    username: "PDM Capital",
    address: "13uRzu3mA38V7LJqbwXFxZh178t74YKNK83Hou8MzkNYpUwG",
  },
  {
    username: "Sunset Labs",
    address: "12n5j3Lchw5rVrTdP31qGuCPKJzTRaowy5YMTuxS64wot7VM",
  },
  {
    username: "GMZ",
    address: "1GMZGFTqqyjFF6E3wT6EhGpA7AyLvtiCZPvxoU3EypBtQV6",
  },
  {
    username: "0xf09f838f2053686164",
    address: "16PVNBGgWd6PzkzERZcjqWdXnKYBX6YSWNKY7svMYzG5XuEo",
  },
  {
    username: "HiroProtagonist",
    address: "13m9oWhucVmGZiCgkeK8QXHiG86j8pEXQzh2taSR4enPTPVD",
  },
  {
    username: "OpenGov.Watch Bounty Signer",
    address: "15tKS3PSKe2TzFqUqM9XkrW1FecwrySFmdxGxAb8nt1WFhgD",
  },
  {
    username: "Vires in Numeris",
    address: "14j93Qu2QnchGLTECN7b7nL9wUa6Lprqh4LWJsqxeZyfPPUD",
  },
  {
    username: "gupnik",
    address: "13kYKwstJs5PVp9d7qGLy4tEa5ZcKTFb9Y5juNxgjaxeZZMH",
  },
  {
    username: "mcdan93",
    address: "1YVA79aodthnnwyjfNxiuL2ckKzTpTH3DuFaVBTjYuS49qj",
  },
  {
    username: "XYLODRONE",
    address: "13b3R85TXcZ27fjxnkoxiYJPVqn9PWuSfxpWtffodoq96Fbm",
  },
  {
    username: "Espacio Cripto",
    address: "165xZ2FLVn64JLEjSfA5FPG2CSTYRS3qG31NPmith7Wt4X4X",
  },
  {
    username: "ALFASTAKE",
    address: "148PMz7qJokU88xB3raf9EMmBb3KbTe3XNxXcLVicQoWxrne",
  },
  {
    username: "parity-staking-miner",
    address: "15S7YtETM31QxYYqubAwRJKRSM4v4Ua6WGFYnx1VuFBnWqdG",
  },
  {
    username: "0xf09f8d8041524953544f5048414e4553f09f8d80",
    address: "128iAScPNNZcoSXQuFp1VkgW376KqvZs61g9Y36MuUX78ZZ6",
  },
  {
    username: "SPACE_",
    address: "13dGbPoEcEk9W1qtmcpPPNVdcocFD1Evb5UXBAGXHVufTuf7",
  },
  {
    username: "expectchaos",
    address: "15pFZucTMdRcYMpzmnNFgMrYiAJBb8GHDiE3JCZ5jked3qK1",
  },
  {
    username: "Activator | POSTHUMAN",
    address: "12WNzfWXzogo8N27yNuE9T1xXC2VyJYmTqRDuePp2CNJLgPk",
  },
  {
    username: "siliconprairie",
    address: "127AMFnzFVUf4ukRPuvcAgZa91cHdsDPDhvFKJRyqAho3qkB",
  },
  {
    username: "PolkaBiz_Voting",
    address: "1xzcLSwo7xBFkJYZiL4EHaqFpuPTkH641E3V43W4cuk1bX6",
  },
  {
    username: "ondaxiao-dot",
    address: "13uaNdQgVmFEvjbuwW3PKDVoRuCwt9qrrap17BmgkdTaJCSG",
  },
  {
    username: "BD Bounty Curator",
    address: "14Go2ZU3TyYt4J6SALemRkrYppoT8uqvPdiszZze1FtynfbS",
  },
  {
    username: "PANKAJ",
    address: "16NvHEGiDsqbyEGYktan5KGrEMiwYdWyEm58BgnPpWJ4Edze",
  },
  {
    username: "Starlay Finance",
    address: "12soSZUb7UbsC8iLrTy6dUVkKCfNvQxMMSRtvZJkfQL1BPRX",
  },
  {
    username: "Bradley",
    address: "15qE2YAQCs5Y962RHE7RzNjQxU6Pei21nhkkSM9Sojq1hHps",
  },
  {
    username: "0x4561676c6520f09fa685",
    address: "16MChrphfAjwMbvBQkaEPFG2zYsnicosf43TLPJbKh2LeQpv",
  },
  {
    username: "JAMTON",
    address: "169zaxv2BSYaMNNx9nC6MGKLLrBHFS6rVtA7KKuVcwEeVciR",
  },
  {
    username: "MENG LONG",
    address: "12R1h4CAirdrpAbQihnUCwJ4LyFg4dY4wU4gEgKQPxGVjoFo",
  },
  {
    username: "James Wo DFG",
    address: "121f5JggHgrtX9rtmkwEV2p2k1vRGbU2pTiKaLVz8AiooEpm",
  },
  {
    username: "ADIOS A TU JEFE",
    address: "15Fyr14f5Eq9xxioo2JoNw53eZnCJNZBrob8ZYuXz4DTTouP",
  },
  {
    username: "UTXO",
    address: "158Cv6UZuwNBunUdbg2md3JmT1kGSTaNWoUqKLgCCppfRmzq",
  },
  {
    username: "Max_HIC",
    address: "14x5RbyJxD6KvNyncbJQuJJJ3zHinXg57YKwhJ7q9T9aJq4n",
  },
  {
    username: "DOTA",
    address: "1RYjrCKUmvM8D9QDKCNbWJYUe49h6ZfkgXvEAtkHgvzxbGB",
  },
  {
    username: "POSTCHAIN.IO",
    address: "16i5WDayVNGYMVtLwJfLChttuteBnf9tgBcGDkB54aLXh5kC",
  },
  {
    username: "3080ra",
    address: "16kuE1X8QsqB6sZh6XCs3FzsWsJXfdcfYhenGX44FW9Z1opa",
  },
  {
    username: "SAGIITAR",
    address: "158EobcDQfk4c6LPmE8qyNDpLyU9PYg827fjaJzjdobYTGcN",
  },
  {
    username: "Carlo Sala",
    address: "16JskuojL6mSp6HNcjiHYa9jqksWbLD8L9YGWU1ppiPWQ9sa",
  },
  {
    username: "Polkadot",
    address: "1ecMyE9C5BxZgpKsrRqUjbs26TveTgm2KLa1PvfsvytbkEY",
  },
  {
    username: "polkadan",
    address: "14rAA8qcsJ9zckafiUSSEJ1vqP6mYUNUyhaeEZ1dphCYD9yQ",
  },
  {
    username: "0x6365647269632e414141f09fa68a7c20616a756e612e696f",
    address: "14MVAs6jPc7bPW33fC7eTwz4Zf1pD3KWW4tQtrHWUd9w1Phx",
  },
  {
    username: "Giotto Brain Governance",
    address: "1wpTXaBGoyLNTDF9bosbJS3zh8V8D2ta7JKacveCkuCm7s6",
  },
  {
    username: "VaKaNo",
    address: "13ESeTC4vcMrjAWLJ7oD27jkjyZTc3Ncwg3jZubiXgaw1Pau",
  },
  {
    username: "Figment 2",
    address: "12doSHUJN1P6HL9zj96Bh2ZwVBXH7NcCi78caVtte8aQWGHz",
  },
  {
    username: "Valletech",
    address: "15yhxUC89ULF3WxvH2P6r4ktWRPhF7r7LtXMaGGADoyVxs2B",
  },
  {
    username: "Polkadot",
    address: "13Su5qk4R6Wok9dMteFWS4WTHvHQN44u6ekmjW8L1wkW1C3m",
  },
  {
    username: "Supercolony",
    address: "16PtCn76c7SB8mMDnuWsq5BjtaDetH8apZh5hRrHtLA3ce1W",
  },
  {
    username: "P2P STAKING",
    address: "1YiNZeuoqgLtN3X4x3SGszaXE5tA2aJxbZFH7PttDTkj459",
  },
  {
    username: "andy2046",
    address: "16ANNog3y9oCfyooJ4SA8GmEMGBW5HK86NbgNcqb7q9iYPsa",
  },
  {
    username: "satoshi",
    address: "1Bn7zrabJeyyEC9z327odJdJt3tgPFt2ZD4Z5oP4Rfjd3Ar",
  },
  {
    username: "AEChain",
    address: "13mBg9Kjf4RxsqoLSpCaL9yXpPXRikqqJ2zE4N9TmkWV2ryb",
  },
  {
    username: "LEGEND",
    address: "14zfiH2sMH955cG2yKUQbHSP3oQ8W4Ai9p9wSSZunvQ4TU4k",
  },
  {
    username: "Totem Live Accounting",
    address: "16g6knFgxm386vXJuHZ58ZQC39H9RSFN7sDRPSimCDJiTHcb",
  },
  {
    username: "0xf09f9890207c20f09faaac2067686f7374",
    address: "1WpodEWHbPfYCg9zSQh255UaojWz9DMm2XLGUCktGffSZew",
  },
  {
    username: "0x42697420436174f09f90b1",
    address: "12NdCS1BNxgiedktuiA9LDWT4aUha1BL86io1bJTS6FXM8nb",
  },
  {
    username: "1kvnode",
    address: "1bAcorGFg3wdN1mu48iVTWhBkFM4FaGN329VXazdDCXDvws",
  },
  {
    username: "Crane",
    address: "13RBN6UF43sxkxUrd2H4QSJccvLNGr6HY4v3mN2WtW59WaNk",
  },
  {
    username: "Equilibrium",
    address: "14fhPR28n9EHZitNyf6wjYZVBPwKgcgogVjJPTzvCcb8qi9G",
  },
  {
    username: "0x4c4155524f20e298aeefb88f",
    address: "1394fTTR2Lzb7Dy6AfoMjNwLvgsojFKrwfTmCx3z4yPjZ122",
  },
  {
    username: "STAKE.ZONE",
    address: "1sEcDfGZsbJCSinFBPN2hkqYU8QwLxipDjuz3BN7UFPJnrk",
  },
  {
    username: "Polkadot India",
    address: "15Jz6EDMkUfVuDSRRiDYX9VKqBfBfEoqnRJkZ51zCYZbxqez",
  },
  {
    username: "PolkaWarriors",
    address: "1uamkTsQk6TwVAm6FvD7optu9fDPUh7GojEc2mZHym13Kcf",
  },
  {
    username: "W1ZSPR3",
    address: "1ZSPR3zNg5Po3obkhXTPR95DepNBzBZ3CyomHXGHK9Uvx6w",
  },
  {
    username: "Interlay Ltd Events Bounty",
    address: "15krM2s1cGxpwz96R2t9E732xk3Ef4BuocFKZE6NMVaiiwQJ",
  },
  {
    username: "Sabrina",
    address: "14mgcia1tFJDFK99kC5kFDajPYN9K1YZRdWUGB6nZizxxjux",
  },
  {
    username: "bkchr",
    address: "13fvj4bNfrTo8oW6U8525soRp6vhjAFLum6XBdtqq9yP22E7",
  },
  {
    username: "Shakurharun",
    address: "15PvcMShyUasPpKKTpgJckBbcdDNz1k52NWGfahVXP5ZSSh1",
  },
  {
    username: "malize fred",
    address: "14Uypo3euFeeVJYnUpExxSLbPrc57NTTKzbYHUA6Y5CmUKmr",
  },
  {
    username: "Divgun Singh",
    address: "1qBF9yKmnZ5i9ATZmmxYuYWrA8Ui1YyWe7pFU63YEvCb8Jt",
  },
  {
    username: "Vinicius Souza Andrade",
    address: "13QuzKWEo64CkPkL5jyg3ToVdDaSK6qg3xCC3eTdzMAuZr7c",
  },
  {
    username: "Alex Houdz",
    address: "14wNsw7P85nZj4CnvVkMJCH2mGsaSDcx67gK6Acs8UZN1sZL",
  },
  {
    username: "PBA - mrast",
    address: "13KWUM61rAgG5j1PjPoT8CC9r7EHAsDfMSDw7PuUwqsPEVCm",
  },
  {
    username: "dotmemo",
    address: "13orJpEPqMKLwWn7Tw9rULcDSSQXfLRgP4p3VTYRPHgZw7if",
  },
  {
    username: "Tadej",
    address: "14SSjHp81TyUZAssqXp6Bdikp27YuZS1VNAXf7a2GAuMyoEu",
  },
  {
    username: "Acala Foundation",
    address: "12Y8b4C9ar162cBgycxYgxxHG7cLVs8gre9Y5xeMjW3izqer",
  },
  {
    username: "Pressburg Labs",
    address: "1LQa8MWn9y6WsJJ2o11qeu76hPUGmXWffEVxPYqdkqLVR8k",
  },
  {
    username: "Being Satoshi",
    address: "15VgqbuZGdwrpGjKkJMA9nE2gqLMHyQpWmE7k6dc4fQdRMXa",
  },
  {
    username: "Remy",
    address: "13Mqq8xR79Fic9nXLPDnocgWsi1Xodbfs3eUPP2wnn96d4jD",
  },
  {
    username: "BEvalidated",
    address: "164vaviiTtbuVhdfiD1NLQyEgFrJXpHZU49NQpSUHa9y58hw",
  },
  {
    username: "FortuneNodes.io",
    address: "12ZhwG3obkAYwwuHSzB5Cy5BPmWxqoK2XsPCuqHZgB9XwRFU",
  },
  {
    username: "Weyland_Fund",
    address: "15aAxjcipFTFiyibgzT5rwS7JDfGFPRHWdRDHkdyUtDRJhyb",
  },
  {
    username: "E20 Staking",
    address: "13Sz7qMcuSD1syDc8oKqZvUXJZc8G4DqKGbGz1H9VJWig2ja",
  },
  {
    username: "Christian",
    address: "14do91fmVwXh119DY2bwfSTchsyD3ePA3WkKGNzBwHXVd9zN",
  },
  {
    username: "UTSA",
    address: "15wnPRex2QwgWNCMRVSqgqp2syDn8Gf6LPGGabRhA8zoohpt",
  },
  {
    username: "Serban Iorga",
    address: "14oHMAJ5btnDCusHrTWraw1wTsLJwZeqPDLxusm1R1Zh3Vxa",
  },
  {
    username: "Patrice - Tendances Crypto",
    address: "152wswWPnwr1uLxqyENaesqjFtJcMwLT3dmrpb7KNt1PZ1PX",
  },
  {
    username: "MissBitcoin",
    address: "12aunVU3BWgMk4zPhpGdjfWPN3rFaB6TTAoteP9FejTWE5rM",
  },
  {
    username: "Albert - I Love Cripto",
    address: "1yCg8NSCgjS4K5KDK5DZGhxUCxmgVyhyG6vBPn5wqUmLuYo",
  },
  {
    username: "Simply Staking",
    address: "13uwV8CBHjv25W3GACLPzzvTu2v9USc2yCQdhrqPhyM3vx6w",
  },
  {
    username: "David Archer",
    address: "14gVD9WGTwFirt98CskYPpNTpTfXTWc6TRpb9ZhybwyHpJEt",
  },
  {
    username: "lada",
    address: "132XjckpT4rxeYgFxyJn1QdpbeXmG7arFwfnHs7LVS2VVjzh",
  },
  {
    username: "0xf09f939c20486f6c7920436f6e73656e73757320f09f939c",
    address: "13gWcC6NzYKKnDS2ayZBoUVFWah9uBQgWcTj8tCuHa92Ukmq",
  },
  {
    username: "0xe5a4a7e59684206461697a656e2e696f",
    address: "1pciYJWiYpBHF1oz33gYqNmadrmgpcrW2PkzCvyxNYRRySu",
  },
  {
    username: "0xf09f908b696d546f6b656e205374616b696e67",
    address: "14j5qnVtr1aa11RtWD6ACYemcb2wcBrno7y2zCheq5M9kBu2",
  },
  {
    username: "Polkadot Savannah",
    address: "13Dt92vNxh2efWcEVZkCB7ZZzKm9irgiVXX44LQQtXw8bm6c",
  },
  {
    username: "Anti-Scam Bounty General Curator",
    address: "151fSxLtpjaBRLGoo1DQB8n8ERLNR6ZduBnmjyzpypegJQp9",
  },
  {
    username: "Spectra CryptoVerse",
    address: "12zTcLRLU9LjFSCP5WKqAQqgKCUUrFGd5EVBJ8Br8aoryjDW",
  },
  {
    username: "Victor Oliva",
    address: "16JGzEsi8gcySKjpmxHVrkLTHdFHodRepEz8n244gNZpr9J",
  },
  {
    username: "AJP",
    address: "16FVM2tGfsTNLfJnaSFhRgEvHagxM6WAS4f2iR17VJShr1JB",
  },
  {
    username: "Polka Haus",
    address: "15FXXppLAWeE6qPiqBDzR1WsccUjJQkiWoTUN15xFMVjRd8j",
  },
  {
    username: "Radiance_9",
    address: "12bDHgG8swcakJhz4ADa4uJZThbQKx3rC4cQ6fH7h7EntCVA",
  },
  {
    username: "The BLOKC",
    address: "15fvwi77dujPz9Mk9U792gNa2Mg5z6489DPwErwCZwu7EpLE",
  },
  {
    username: "Pavla | Parity Data",
    address: "142whJSZZPUxbYgNmG7Xx844Ya58kyLwDNrTAigcXMFB81Qq",
  },
  {
    username: "Aurora Poppyseed",
    address: "16Jbt5zru6XdUx1jYRV8AZtGk76ujtUNdd1UVWVVkVvGZ31L",
  },
  {
    username: "oxixo polkadot NX_BLACK",
    address: "12DvBVTqu2P2akAGQYo6Rxb57yhxENLiUakRL3yvmvQpZgTR",
  },
  {
    username: "0xf09f8fa2204d696e6973747279204f6620426c6f636b7320f09f8fa2",
    address: "13Sx4VGm5edmC8BtEJ7kJC3RxXzigvGHEXFwatvbocvZRy5A",
  },
  {
    username: "web3rdy",
    address: "16LviqDmEdn49UqeVSw3N1SjoJxRVV1EBbydbEqqaCvdtAsY",
  },
  {
    username: "OpenSquare",
    address: "12sNU8BXivMj1xQmcd4T39ugCyHjmhir8jkPqfAw5ZDESrx4",
  },
  {
    username: "BlockCtrl",
    address: "13b2BHxiamr5QCzLHqPUgKfTczRZvH47eQ9WqSQSP7UyMZU5",
  },
  {
    username: "0xf09f949273746174656c6573735f6d6f6e6579f09f9492",
    address: "12713bbq45c66CN9AD7yusSXWE1kY91DcMpjVcB2rXqZKy2w",
  },
  {
    username: "Lunar Strategy",
    address: "1316cTZeHz8HtEjaJRHu8sHbp9brtUmy2LiP74KZXgXhifry",
  },
  {
    username: "BlockspaceDevrels",
    address: "138jUztFkrSSYHpBs1EoNNjVLG7hYr7UZYAy4NRQGPhbb6VY",
  },
  {
    username: "digitalghost",
    address: "14bGpFntaPUgoSNdXeU99ddPH8RvHfZRic1dCcQBwnNuJwwr",
  },
  {
    username: "Botticewski",
    address: "13JnDjbXzeMn2jQZSsFzpKUCZWHPgMSocSVC8vm4MgTNutwp",
  },
  {
    username: "woss-001@substrate",
    address: "14iSahjHz7zAeJ7rnigpXq1oStxiuR7TajAi2oazHxh1DTYb",
  },
  {
    username: "Faishal",
    address: "1vJ19ttnAf8D9f8RsDx3TY4vbzw6TmALfFFqbLz7FaAubVo",
  },
  {
    username: "Tycho Masius",
    address: "16dUmCQM28nzqAAG96rtLUbL9ni5LyT1wRx4SZoS11qnG94f",
  },
  {
    username: "YieldBay Treasury",
    address: "16m9GvS9aYsepHTmZTMbJmc8Z5ZNGJ4D3ySqLE349Li7rKvY",
  },
  {
    username: "COIN REFERENCE",
    address: "13rRW8pm6WFiZ41C9hF73hhJvf1o5RoG7Mt8yerUjdk3v8o2",
  },
  {
    username: "doyle",
    address: "16cHD3V9UfowtxZfWSVRZm54roEb6sY1jxFBjHXwwqXh4nUM",
  },
  {
    username: "Ravi Kumar",
    address: "11F8h8qmSUctFVMayEjw4aDuZbVKUGc4SmSN2mPBcdKDBMG",
  },
  {
    username: "Zee Prime Labs",
    address: "16AmqsMpCwJXYQCNRmnkG8g1t2LaQu63MVvxEvQQGgdQ5Ywk",
  },
  {
    username: "tien",
    address: "1HEYRDqQSTM98A8uRgz7kG6TE5kjjFq99qMD13C5ggjqKWe",
  },
  {
    username: "Khastor",
    address: "139YLKvyLxEeG7asCwBZniVKacCibNMNdMPrq3ukrzagMqUV",
  },
  {
    username: "COSMOTRON",
    address: "16KjnbCmBXqT3R956sHak7THsgQZ9Ek8ibnG1sFyCNtfJ8y",
  },
  {
    username: "Sourav",
    address: "16SGUEfpDop2fXi9K89yzCQWHJ3vHz1tKJVA1pCBjoew5tzP",
  },
  {
    username: "Doordashcon",
    address: "12zsKEDVcHpKEWb99iFt3xrTCQQXZMu477nJQsTBBrof5k2h",
  },
  {
    username: "Premiurly",
    address: "138fXycd5rpLBhxTe8SSj7Lp1jhsEYjUzqKmqjtis4p3A51e",
  },
  {
    username: "BINANCE_STAKE_10",
    address: "13ougYD2SRkn88L14XiYCJc3mL7AzWoAMVdn1FwLumV49LjU",
  },
  {
    username: "CryptoWise",
    address: "16SLZvuZsq9UbvFQcXsKbY2XZELPLgiaRd8cWnQ8UaPYfqn1",
  },
  {
    username: "Barreto",
    address: "12gcbFGEGQnLJit73zBgdZKVWnc4uqg4RWxzvDXw8SJ7XSd6",
  },
  {
    username: "Wei",
    address: "14ShUZUYUR35RBZW6uVVt1zXDxmSQddkeDdXf1JkMA6P721N",
  },
  {
    username: "Polkadot Poland DAO",
    address: "12A3dXzEM5inPxTdCaG3RgVcRr3XrE9P5P72eHrYtGYENwKa",
  },
  {
    username: "FreshCredit Inc",
    address: "152D1xoDWRZraXkS3cNTqADPF8dKkRBAP5oWgtFdL3PiEosH",
  },
  {
    username: "Corporate Polkassembly Account",
    address: "12VjnvYTny9cbR329BEYKuS34zzxjPuBUrU9F9p4ZyWTDCXW",
  },
  {
    username: "STASH",
    address: "1puLtVgA6n5AUhV8JzLGRYTCTj5HEYuKf1fVxQPhnc43jxp",
  },
  {
    username: "Kolkadot",
    address: "16Aam8db7Cdx5p6EjSpmG1nczE21FSpBHYFJ5rS9e3KDqw8u",
  },
  {
    username: "Mario Schraepen (HA)",
    address: "14VDkd5mWY9SajUUnEg2LgMgVrbY412H7xn7Y7EXjhnGkiBF",
  },
  {
    username: "S-dot",
    address: "13uQLW8SReSrdHA1JmHaNQC3sRe2bMwwbUfyZ1qd2dwREyYB",
  },
  {
    username: "YJRenaud",
    address: "13gzrNGhMUZpVsuH3rBTt9g3CJrs7iRVHagKicb3GD6RbppB",
  },
  {
    username: "Jan Bujak",
    address: "15tRXfXoZXkjScB3Awv8s2saPjaicKYAyL1WZ3JP5kycoG9n",
  },
  {
    username: "Qupid validator",
    address: "1Erc6G7Se7AZa4DNcTd4fkXsei3xYmZpPBX9DDU3x8Rn6Kn",
  },
  {
    username: "PinkDolphin",
    address: "16JUJFANw7LHEBYsyyykYogBotUxgqSCQswEWbZ1rTPGuN5s",
  },
  {
    username: "pathrocknetwork",
    address: "14DgNYSXVTFJxbNJJaVJFPrvfmdoB1S6DAcC7jKSsGyFczjq",
  },
  {
    username: "Just_Luuuu",
    address: "1NFfEH3yspdEgLnhZ5QWgb7B2z5LNCAE3HUo5nDxF5MqTcj",
  },
  {
    username: "Watermelon",
    address: "12pJGRmrWoZohZVFnGK2hhoMwzCVkjmEjwv3C5wxdnbCAiEk",
  },
  {
    username: "Merkle Science",
    address: "12wwE28ctra7q7GNkqzBqrUGRKqw2CUD8rusZ5urWSL9kMwP",
  },
  {
    username: "Marketing Bounty Curator",
    address: "14WjkhgfbD98TA2SuJiqrnhhPCmpfCFVtQ46Zcr4DEAwegQi",
  },
  {
    username: "Bitgreen",
    address: "12xN7mWGsVxZoMthabMG8CE35tSohaxuEQ2msxVvQ9jiFNPs",
  },
  {
    username: "Liminal",
    address: "131RHY6iCnd9KrXuwXr7Pyo6dWP3k3rY9UcEqkG1eB9Uk9HJ",
  },
  {
    username: "***** ***",
    address: "1hPrsac3JZk9smYYjqkFLXpReRcjsse9BiVo3GGL5f5VhQs",
  },
  {
    username: "CDRAVENR2",
    address: "148ULBbirur13GcXWVmve4HyG2zj9pzjzyUSo5FRdsEbmejT",
  },
  {
    username: "Markedot",
    address: "149E398miYahbDHQy1djSf9bxmnJvEH9pkUn9j8vtJah5nf3",
  },
  {
    username: "skunert",
    address: "1682A5hxfiS1Kn1jrUnMYv14T9EuEnsgnBbujGfYbeEbSK3w",
  },
  {
    username: "CoinFund/Grassfed",
    address: "148HzdSuFsDrNKnAHFs81BJzZxmKgwEC6Pmpw2QJnTy3Hv3R",
  },
  {
    username: "BILL",
    address: "16frLykgLH5w8pNsvzEMTzCESMpLqWJMr4SGJUJQgYniDzdb",
  },
  {
    username: "JUST Ventures",
    address: "15KwuFdsnXCU9RFutSxgVDqmC9uf6Wdivv9xjNioWJS4t5C6",
  },
  {
    username: "0xf09f90bc50616e646157617272696f72f09f90bc",
    address: "1panG5DQw43ZqsoLV41uYfdrufoPUiqo1xXPoDLs942hYbX",
  },
  {
    username: "nico_calcio",
    address: "13uqzJDHpke4T2Sz41UifG93tePKqx56pZ7DmcVMXyxmrqpv",
  },
  {
    username: "Zondax",
    address: "1fN87Fgj5BUhezFgbLiGbXTMrBVggnmYBX9anzMBky8KaJ5",
  },
  {
    username: "I Love Cripto BD",
    address: "14Xh9F14w9GPwprsytsXd9nCpf9VvjAUTg5Mj7zN2SU8RBDj",
  },
  {
    username: "gangov",
    address: "115C6yjrqmWRtSTUASjvioLRJQhandi4pbtbACzfysXH4Ub",
  },
  {
    username: "DSSG (ex-DAO_)",
    address: "15SN9iNKxCJJjQ5f6JXEDxiaS6bRHxxTZtsfm3wCSSjyoENg",
  },
  {
    username: "NonFungibleJourney",
    address: "13dN1vbSwDXotwtZN2boZqKmcs8xqC5JrU7xKiuQ18npmWmr",
  },
  {
    username: "Polkadot Hub in Spanish",
    address: "1ndvErzA6F2gHFXwEqjcPd7qtGnsZDiStpSj4A8LytDJRhf",
  },
  {
    username: "Moonbeam",
    address: "15o341YKi3FDX3fM1onp1bfLbjGcc13YNEFV6yQvSiCQaehi",
  },
  {
    username: "0x4765726dc3a16e",
    address: "14murhYYv7DQad3EzzNWhAHeF135QmtPcr5pDk3MCkC1cm83",
  },
  {
    username: "0x4d43207c204d43536572766963652e696f207cf09f92a5",
    address: "12v4Tv9LfZFj9SyAUimWhhFShafyG2eGcABPe2LVaabXTyS6",
  },
  {
    username: "CHAINALYSIS",
    address: "14JdpfqnMpJkJfrPjrzjGCPSgabk8w9QCVhJRgbMy6hHRLSK",
  },
  {
    username: "davicio_eu",
    address: "14udJWNja32WHaAf88Zr2U4UqxowPkdG78XHYu3ax8HitDF3",
  },
  {
    username: "Melange",
    address: "13XkGCa13arfw4FkH8MVsvshrHrA9GuKPANjZ7xnjKCSg9fM",
  },
  {
    username: "InvArch Association",
    address: "13q3NEbcSepgVbCyN6XLQtEvyZuAEqDUPLiuX2iydaQrwDCU",
  },
  {
    username: "Harrison",
    address: "13iyxPDdEkwbCFCvfL9TNXivsM6GrbPs1QkRhPp42Lz2cwsq",
  },
  {
    username: "MyMetaverse",
    address: "14Vg2N5EnUzbaqZ5tP8CCdXn3VoYAxAp898DPACaLxU1ypzF",
  },
  {
    username: "Tekonyx zealy",
    address: "13iwzqygpVPyYdjdA5F8GeKcQfZTZZuB64gsFidg1omq5jVv",
  },
  {
    username: "BINANCE_STAKE_4",
    address: "13wxjPuajyJrHcBabsgoD7oqL1mJhFVWjeXFxEvMbSBY9xn9",
  },
  {
    username: "StakeBaby",
    address: "14aMmXfw2bk9sTFGGBd4Dx5HfM8GG3Fr5VuEwxHQvP79gNSu",
  },
  {
    username: "KodaDot Minter",
    address: "15CoYMEnJhhWHvdEPXDuTBnZKXwrJzMQdcMwcHGsVx5kXYvW",
  },
  {
    username: "OuthBack",
    address: "16JpxJgeT4yXnARjdmxH2kWaWXuArPLdbihDFywYMAnSVeRA",
  },
  {
    username: "jonas",
    address: "13b1wQcZXhWYxjwY9jdJkyJZu5p9TwFEXZnSEBPhca9kaAUN",
  },
  {
    username: "Andy | Beacon",
    address: "12bqgqerfH21x5hv85AJ9AiNFWXVmBLDoCvmz78MD4fgEP7Y",
  },
  {
    username: "Web3 Education and Investment",
    address: "1got2QxVB1mdnWHZ5onsNaHD7u8R6G3B9wGmC5a43iCXHjr",
  },
  {
    username: "Polkassembly Governance",
    address: "13mZThJSNdKUyVUjQE9ZCypwJrwdvY8G5cUCpS9Uw4bodh4t",
  },
  {
    username: "Haris",
    address: "1NJ5i1NRc5VdDztmcvKXd392rT8GJ7NScGJ4DLpfidrHPdy",
  },
  {
    username: "Controller Dot Carbonyte",
    address: "16X3P7NGsj6UzPfVa4TvfdxeYp5R1XcF75T1GT6SS4VatqyA",
  },
  {
    username: "bidibidibum",
    address: "1psux4xpsRgXCqr6rYyiZ6sz7Z3L5fjKJx972sn1TYqBRfG",
  },
  {
    username: "SergioadLIBM",
    address: "1NkbNPTF3wiZihkZZjtPscVR7Rj7PUNXUFLe4UuhB95fpQM",
  },
  {
    username: "FiDi Tech",
    address: "14fptYf88mjarGJ3gAjhd8YH3Cefdgx4C8Jb6chvJXFszb2i",
  },
  {
    username: "Colorful Notion",
    address: "121Rs6fKm8nguHnvPfG1Cq3ctFuNAVZGRmghwkJwHpKxKjbx",
  },
  {
    username: "Gear",
    address: "16XNPMoatdKBBpsGySCV5VgfrZpgSzjms3uGWWkvP9jGKabP",
  },
  {
    username: "Soratoga",
    address: "16cpEQNtaWtCMjVgxnPMYDUpSUmANftz1zKBg5MpReQ828B1",
  },
  {
    username: "Polkasafe",
    address: "15Un2AyaqUa46UvCkzAsijBy6dwyrCiF7rkVyKnT6WZqosB4",
  },
  {
    username: "Bendak",
    address: "14zUpU23a4E2c1ixFcs4jesTM6bJaXzNuLouJtR54yvJLK8S",
  },
  {
    username: "RockX Official",
    address: "157kPwFJBHK4TQVBioTKVHRCjLnBp3QGXBk9ZYBNHjc9dHto",
  },
  {
    username: "Enderby Entertainment",
    address: "14fXBsWfyuDUS38hXLaAqRrhJoKmMRyF8WNLxTH1XV7Rsnht",
  },
  {
    username: "0x50617363616c207cc2a041637572617374",
    address: "16MF8p8KfktKazPiQEqTXJq1CtYuZ9aNrBShXQNRdhckctC5",
  },
  {
    username: "DG_1",
    address: "16AfnhArBp5ukduSKix5a5GXByKU6UQJUoTkvLBJFsDRW7D2",
  },
  {
    username: "ore",
    address: "1ep87HninBEGTAnuiLCH5o6f9GnsbCq59kwQqGRqy6vDA7Q",
  },
  {
    username: "chrisglobal",
    address: "13aYxvWxHc5TpYp6TYPJUZ8KYcJPw71ELNqSqLU25yh2vcd7",
  },
  {
    username: "franjs",
    address: "16kbqn89BqxgfibMP2YFnM379eNi5ApcFuHcQKguaqFLQhAW",
  },
  {
    username: "Shokenny",
    address: "17SKos4NqnmdqMiqjS8QGo2Tae2piA8En8EsqM2AutjfN8H",
  },
  {
    username: "Devops Magazine",
    address: "12ijZNFxwAjyQPGTzCNyXRjXKtgNrBPDQbwEwBAcs9qdekYo",
  },
  {
    username: "Pnin",
    address: "1ZCLKvw6gDhghT1SVgqpQvvE4kEFCEbZeMVrVbYRAELctue",
  },
  {
    username: "Nachito Agent#43",
    address: "14aGNTNA9RMbuy73V8LJRCNszmBtiiKEmYZjdXp4GFNo1fpt",
  },
  {
    username: "regenesturk",
    address: "14VQN1uR6XdyhnyyskbhvE93uYyAnK1roUBNC6Qf7KkUwLap",
  },
  {
    username: "LV",
    address: "15akZwzufEzFzfh18y4Q81Ci8TXyvH6hyUkRrxJED2MjEYhe",
  },
  {
    username: "rodion",
    address: "14i6Wxp8nYxotNCq8MCgTU2j4rV4NGVW9xfrPuxk8qMUtvuC",
  },
  {
    username: "REPE",
    address: "15SPpdSC8HfiFTyoUvDfMxqnnDoo8H6m3uMJzf33itcWyUYm",
  },
  {
    username: "Litentry/test",
    address: "153a6mfvAH2SCx8FrNWsCqwg1eTdGwaM51U9vSwArDGQj7sn",
  },
  {
    username: "SubWallet",
    address: "1C42oGF3s8ztCsc22MA4LKd8BogMJNdVmCgtTXGfxqwjrSb",
  },
  {
    username: "HermesStash",
    address: "15qf74EAddQEsWeKTvGk8xFVgx1zgZD71NTEM2ztDb9qws7d",
  },
  {
    username: "Regency-020",
    address: "125wmQkyEcPWp8zYpAPbsKRtTtHMGxbLmkgPQZCupecKNeTg",
  },
  {
    username: "Coin collectors",
    address: "15Y7mpQHUNkNA2PBrf3435v9jgtLs2gzSHbst5RBih3Xc9QA",
  },
  {
    username: "Viet.",
    address: "12nYXo2LVUf5UpA3YHUmsJRQQS5TCtWE5pjTPYr351YTmLqR",
  },
  {
    username: "Paraverse Talisman Proposals",
    address: "128tk6D5CvYvGFtvjTgZT8yrD2wPWZyczBoj8LzkmGpTNbo9",
  },
  {
    username: "Peter White",
    address: "142zako1kfvrpQ7pJKYR8iGUD58i4wjb78FUsmJ9WcXmkM5z",
  },
  {
    username: "andermatt",
    address: "16M1UtNqQ59tJgbQi29QfCxGytyAhpPyyqufYR6ZUbYDsZzX",
  },
  {
    username: "ComputeCrypto.com",
    address: "15yczuJWUSdqiRsGqb5hCryTuWQqm2GK4U2zsABaUjzokHTd",
  },
  {
    username: "oscarteruel",
    address: "167X6kzNnKNSA6WJTpmsC5qknG6KhPamAED2ZndjGV63hNAk",
  },
  {
    username: "Ales",
    address: "15FunDt5T9ZMbn9u5LyV4yqdoW88u4BG6FHvzS6k2wyXBX59",
  },
  {
    username: "alarconsjc",
    address: "13p6piZh1ycuE5PZFeAkzJJQNfmHn47zVvcLBLBKhibC7NCL",
  },
  {
    username: "0x4a7574746120f09f91a9e2808df09f8ea4",
    address: "14DQEq1XtPvntMyUFbgcDCSce79s1CBum3rBYrEeB66qgTqG",
  },
  {
    username: "ROB",
    address: "13Gdmw7xZQVbVoojUCwnW2usEikF2a71y7aocbgZcptUtiX9",
  },
  {
    username: "Kudos",
    address: "1jJGNz4UbFju4WX6qtytoPbqm98PETaU13hfc1pXRmJXRca",
  },
  {
    username: "Strindbergman",
    address: "14dwjTET5jJyfBELo1t37gr2uR7LGESPpUhSfdWyH9SL9KyF",
  },
  {
    username: "Draper University",
    address: "12sYW5UoPPmSn7mx8DYCbsWQn3FJBxGn3fNdEkh26DNqgoWB",
  },
  {
    username: "DonDiegoSanchez",
    address: "1CRmVRcQymMpot855oKDq76kF19jJezMMkGcrvHh1ozEqXa",
  },
  {
    username: "Bitcoin.com",
    address: "12xLiepx2ZFvWdnhMBFzt4wUeB1Eec2MhTxLvFkE6838Pp4H",
  },
  {
    username: "Edgetributor SubDAO",
    address: "14XNJmoUzkvmh9cYoqG4axBRR4BWzWRbnFP79oiZgKu7V9bz",
  },
  {
    username: "MAD CRIPTO",
    address: "12eMZTAnXEsyedXmsB6jDVRnF9Mq8ZrhLefRGhxPE4JwrPAS",
  },
  {
    username: "OpenGuild Team",
    address: "13R24HAPL3xhpYqqRMtU6WkCDkn5if8YMbvKVqgNi8orF4u9",
  },
  {
    username: "dotvalidators.com",
    address: "12RAyN7ndJgEuGiUXQE61kuCPdSiTN8SuRxKoPJG2ZPsdbEw",
  },
  {
    username: "nakata5321",
    address: "15LsoVch2EpmkdXyb2wHsAWw2cZK6re2rwUd8mrd3Pta6SRN",
  },
  {
    username: "Paradox",
    address: "15D2JM548bqRuE45aDmeF2WqiKC56WtNnRmCxVSree9YKwVb",
  },
  {
    username: "Abdulbee",
    address: "15cZn8K1DaE7qiBWK6mGFJMKYKjFrALTVwe5urpD9PzKSsPY",
  },
  {
    username: "spazcoin",
    address: "16GLrM3qTVVDcpGaofNaJ6CoWE9T52QqKUBF2jaAxqHt8NA2",
  },
  {
    username: "DARKFOREST",
    address: "15ivBRmsjBzHsYzDTbAcb4S6X6qe1h2PZaNrepDzR8nDeLVw",
  },
  {
    username: "Willy",
    address: "143XraUiqcFTLdXrZMx5wzNWWe2r9WUGHZCX6vGrheQyYQoc",
  },
  {
    username: "GDavassi",
    address: "1eVbStiWVyeUcSkbk1CTfytfAtg5ngppUetkHbih6DPXf3B",
  },
  {
    username: "julio",
    address: "146DUkNUB1i5ibma8MDSkfFuiKy8D7qRjc5JoRrHGy8EkvN",
  },
  {
    username: "Gerardo Pizarro George",
    address: "14YfjhgW6AUMtyEP1ckReyFziygjivYhHyyQL9bj1Z1nyus7",
  },
  {
    username: "Felix",
    address: "1mz1s8z9mGvZWZDrTaSpnjbQG3qv7A43J7CrtpXeFDb7K1J",
  },
  {
    username: "Smog",
    address: "15JRxCVQZvAeq4Ck1vu2uX81AjHHE1DeVBjkMhxjmD2a6PHW",
  },
  {
    username: "zoemc",
    address: "146ZZqm2cMHLf3ju7oc8M9JnPaAktuADAKThagKnXqzjPJbZ",
  },
  {
    username: "Tiny/Mimir",
    address: "14pa3BAYZLPvZfRDjWEfZXZWBVU45E67HUQEUxNCrdXGoata",
  },
  {
    username: "Eugenio Giovanardi",
    address: "19jBkfrR8MRsgB1ek6VJrqdhE3PvQMSPKWf4Jqk1qeo4UTK",
  },
  {
    username: "pandres95",
    address: "12gMhxHw8QjEwLQvnqsmMVY1z5gFa54vND74aMUbhhwN6mJR",
  },
  {
    username: "PurpleToad",
    address: "153Jwze4XwRpKn3HsBhZRW6ssebLMpRE73tfyrTbR97fGjro",
  },
  {
    username: "Braille",
    address: "13m1rnJf9MPFKwef2Vc2pXYffcZhoGEGXxXFew8X4Dj96FcA",
  },
  {
    username: "0xf09f97bb20416c70696e654e6f64657320f09f97bb",
    address: "12EQuzijX7T1YZZYjtDDe8Cqgvc4HqAfRRfQonQvoWyxrucb",
  },
  {
    username: "Sik | crifferent.de",
    address: "15wepZh1jWNqxBjsgErm8HmYiE21n79c5krQJeTsYAjHddeM",
  },
  {
    username: "Xenophobia",
    address: "133zfNBj6FsAynodr4CSEDJ6nJAH5C39YTWahMZJbdRoz5En",
  },
  {
    username: "sachalansky",
    address: "15APyDmWBwwv8LEW8rvFpiYAUCu7u4nxKBd7oGp4JR6nSrnE",
  },
  {
    username: "dm",
    address: "12zdkKxQqsdNXPJ5oDgLWtgRzGjhoKiShhkD26tXj8mPjaXA",
  },
  {
    username: "Menchine",
    address: "16Cok7ohupdJnznXmsRMyVU63ch9C5RT8Y97XPvE7T2pnzpE",
  },
  {
    username: "dakkk",
    address: "12iqwZGB2sguEhjFi2ZRuWWixU8mHJnSiP1pwDefqGsBy4rV",
  },
  {
    username: "135 Capital Incorporated 02",
    address: "13bfvA1S8XCVf9zZJRZ95QxX7eFUgnbuWqtNf826abJEhRrA",
  },
  {
    username: "TorosAgency",
    address: "12TEfbMopdBusJocKBiS47EyEK3hVjJ181PBWTF1jtk6bJQz",
  },
  {
    username: "Polkassembly",
    address: "13SceNt2ELz3ti4rnQbY1snpYH4XE4fLFsW8ph9rpwJd6HFC",
  },
  {
    username: "JOIE (extension)",
    address: "16ab9GBRg6x1nkQxUpGtS9EHKHV1k2JDyyxdkzsz8ot96H4h",
  },
  {
    username: "Xalamus",
    address: "16XxKGBRWSCQZwrpgcnzE1HqcYC3xJBcSJrM1pRazfmuSrio",
  },
  {
    username: "ltfschoen",
    address: "1dsrQjL34njJ4Y8FXGyxeLnmunPZ6XAvid9jSQe9S4pTUh2",
  },
  {
    username: "0x477572755374616b696e67f09f91b3",
    address: "138tCNoHg9QbhjqanRS7R8ZC8547A6CdaSmrCtJCRLpjQk6r",
  },
  {
    username: "Thibaut",
    address: "1ThiBx5DDxFhoD9GY6tz5Fp4Y7Xn1xfLmDddcoFQghDvvjg",
  },
  {
    username: "Mohit",
    address: "131CE7t6vjD3nKEm92DNzaRpn9t31WeouMTxn1sioGDkUBvr",
  },
  {
    username: "landas glowne",
    address: "1bT7npWnevywpXjQnQfYRxkjZq3GXD7DhDcXiHzMv8i1t7c",
  },
  {
    username: "PolkaIdentity | Registrar",
    address: "16LYBUcQKWZjAYE4oAPWx9XFaEYnCAffwpPuPWrUvU1mqBZT",
  },
  {
    username: "phoenix-crypto-controller",
    address: "14Vr85ziRGy2Mm7CkyEuFndMkdnK7ER7L7xwm5uoB6vkMNic",
  },
  {
    username: "DF",
    address: "12gxN2DdKhwsSKiuLKEyS6EgRJfG9vKTaWnAdSbXmWTyRFaG",
  },
  {
    username: "Insight Finance 1",
    address: "12q7u9WSZJeSKUeTcjYFoHhPeuK9gduWXEgqmBEtP4X3osjc",
  },
  {
    username: "Polkanext",
    address: "12R3eB2g2mg49LizG6qhiTtDcEjcEXkyxu4Rw5SwQnDaMsBz",
  },
  {
    username: "Dr. T",
    address: "158XGNULKTZraTjsHtAMqRjtpfVrYPyXijcW8KA8Ddtv8gnk",
  },
  {
    username: "LORENADOTLATAM",
    address: "16Pk77cWKFAkW2umYra7Tf9npT2VxjUyQYVed4TH4dFqMbhB",
  },
  {
    username: "THEMANWITHOUTANAME",
    address: "14zUPG9wpRdfNGLJqU2xcABBxXStd5d4TP8GHz2CFFZSbD4A",
  },
  {
    username: "OttoToot",
    address: "13usMvydmz99MHbqyVx5xqiHNyivhxvwvRRp46PjbcaySHK1",
  },
  {
    username: "DCENTRALMARC",
    address: "1bXfcAoSMELZTtyHJVavPuxTXJ5WeB7maeFkh9sBkgyePfX",
  },
  {
    username: "Anatoly",
    address: "14ag4nWPjRDERVRXjTuvKuTbv9ZS6rq21dL6rRJtLmAsyAJq",
  },
  {
    username: "DuckDegen",
    address: "15itheTr68cx3GneVB3seSngaWc5SD6Ev5rZrVhqWfqDFLP8",
  },
  {
    username: "CryptoRank",
    address: "14fcqMPHhCtwnbPAHxjsf3JiGsDuLQPGMpndrWawuiAiiCqE",
  },
  {
    username: "P4Troy",
    address: "13122HkjHcgTEjLgSks74AuvJSUV9WpZagWEYGwRuMepg5ci",
  },
  {
    username: "CryptoZR",
    address: "162aMTRcXF27yNeNE82SfZj5KWH94sBtivvy7a5uef2ry81r",
  },
  {
    username: "shuvo",
    address: "14Fq5kn3NiG4UGbxYThP8rve58DdH7fga2CfcNkWaFxgoC43",
  },
  {
    username: "Day1cheerz",
    address: "14iu4RipDLwSyn5wYQNFrqTW8zMY8AKPJyEtJpbyDhnrQGZK",
  },
  {
    username: "CP287-CLOUDWALK",
    address: "16GDRhRYxk42paoK6TfHAqWej8PdDDUwdDazjv4bAn4KGNeb",
  },
  {
    username: "Gariw",
    address: "15JdGqa3j5eBrLcY4Ss9iL8xqtzrY5Z8vG7PV5Z7d3KgG5Q5",
  },
  {
    username: "Christian Chainalysis",
    address: "14JXTy2TZM9UVjcfeSxq9pRrEUr6YyiRhZwQLPKMWYKowQnP",
  },
  {
    username: "Noor",
    address: "12BpKBaSPeAVcs3PCGdPkqESdExd8oFixjTubhfJBobbEbJW",
  },
  {
    username: "Polkadot.pro - Realgar",
    address: "1REAJ1k691g5Eqqg9gL7vvZCBG7FCCZ8zgQkZWd4va5ESih",
  },
  {
    username: "Tribe/StackUp",
    address: "1FJCfJzPnuPTeSZnpwMetY5yZi56t2RRxvHsrAYkzwvfCFC",
  },
  {
    username: "ONDIN",
    address: "13ond4N8gejhNeYFxAiCtDymHvgsyQMW3L2kvKMEPtmvi3Cu",
  },
  {
    username: "Starit",
    address: "12HbTJaZwkTS1kpYgx9SEAFXToGrW7y6XLb2SfPGtjToYkDu",
  },
  {
    username: "Polkadot Japan",
    address: "12hDY96BctWXcrTDAhrzHzFgdLs2qLyKAbFiktJQyvm94onU",
  },
  {
    username: "Karim | Parity Infra & Data",
    address: "12bVcBCz11JiUjo2qsnWk3PCqWRuewPNVeh2nwKd6sgqFXvS",
  },
  {
    username: "kumasi",
    address: "15tVttSuyw3hYSUneii7piiQwQakWH2rKSPTnqFNbrQhfj3p",
  },
  {
    username: "jslusser",
    address: "14QhzKsxmrECK8EDpLzzep8tWcYMUPYfXGfmgqM8cVtYRJjJ",
  },
  {
    username: "Kotal",
    address: "1xkvD92Dr5STPK7GHZpXYVyd7RAMPYsDxrRXurqc6vhm2AK",
  },
  {
    username: "Anny0nn",
    address: "15GG1ZgKtKGS21ngpU9aSk8aFjHvZAhpuB9ipWFmheapkxED",
  },
  {
    username: "Slashing Protected by P2P.ORG",
    address: "1jgATcwTf772pq9QmS3VbvFo84E2U6Kxz7gU6zvQXFxLZRu",
  },
  {
    username: "Regency-001",
    address: "12nuyKaPWRzZxMtjvmcW31vCU2squrFGxBXkAAAWkYcWTvfs",
  },
  {
    username: "0x4e69636fe29aa1efb88f",
    address: "12xi27tWkBPdRi147GrV4BM5PmHPA7vSEPvWKU7v95p7h3yL",
  },
  {
    username: "MXC Foundation",
    address: "124NggyHPkAbHbETLRdEiTH7568x414LpXst35aS5A6ZvpH1",
  },
  {
    username: "Staker Space",
    address: "16SpacegeUTft9v3ts27CEC3tJaxgvE4uZeCctThFH3Vb24p",
  },
  {
    username: "clockchain",
    address: "13WCsuJdL4WpBXLKixnxxpam1rSgFQfYwyxEPrnuAp2uvaaR",
  },
  {
    username: "DOZENODES.COM",
    address: "167ShbHu769mP5jbtt7AHayJhzEied6s8M5kN5nBSAQewnRz",
  },
  {
    username: "tioneb_dotsamapha",
    address: "13Kbn5ynspkTYZAksNC5RWHgNBc5b21TYhgg7HMAg5hsC7MT",
  },
  {
    username: "redpenguin",
    address: "15KDFYfFjdqhp3MDFEtHuyu9kLpXbT7k1zjx78MphViFdCaU",
  },
  {
    username: "Rohit Sarpotdar",
    address: "13K7vBq5o2T7THdwXQEb58wvy5cW8n7XcftGdkYhxJpn3Mut",
  },
  {
    username: "klever",
    address: "16P5hTGEMLMh49rbeHLtuncqPdkLEPoRAVtSTo4g6KJapKSN",
  },
  {
    username: "KIRA Staking",
    address: "15UyiZ9rYhrX39Rasc1iE4sdME7WHNFSj8RQT3yuuytd3Nrd",
  },
  {
    username: "The Dapp List",
    address: "15SAhTuvbotJUtzR8hPCA9wQ3u7fBwhzh45usyTQV8vuGcpW",
  },
  {
    username:
      "0x53435259505420f09f87a8f09f87ad20492056616c696461746f72202d203031",
    address: "13R1EqJ7wsZgAyEALDHMScLazdqPibgjUbRmVbf3UoZYLCqt",
  },
  {
    username: "blockscape",
    address: "1656VVieJG3kND6QShJ9EiutxXTnoLJYsjunb1aDf64UYju8",
  },
  {
    username: "nafg69",
    address: "16m32Jj1QAg3Dn5mwntr7SoigRXn3op7pERwAX2zZmDERNKi",
  },
  {
    username: "0x6320f09fa59e206c20652021",
    address: "12739kFEAurKjEsKbwRomsMWFW52ntiSfKpbdn1MNA1a28SN",
  },
  {
    username: "Gardmillionaire",
    address: "14XxE43cGbr25HgJp3BBeyw35buHNBSipcamCYtE9CgBnJZA",
  },
  {
    username: "NoctDigital.",
    address: "12GmYhPx8N84zr6dX9duGMpPinBR6vni823htCBu4ZEKCVE6",
  },
  {
    username: "0xf09f98bb205374616b65204b617420f09f98bb",
    address: "155LwjGpJH3xYJwPBr6aapk2WCCAezVftvSMrqeJA6eE7v2d",
  },
  {
    username: "Andrei",
    address: "13QdJvnJgfoitjrxESwrCWTaLMN8KvXxufDUucXM6EWGuxqh",
  },
  {
    username: "squirre1dot",
    address: "14162sueQ1j4D7LLJH8qzRW9AsSQ3gCz1oo4R5jKC3Yqzj49",
  },
  {
    username: "0xf09f909120484f444c2e4641524d20f09f9091",
    address: "1sAkfdTH3cHAdJRYqMPNdeV7GhTKrddvMfkQrm3pQBABWrN",
  },
  {
    username: "JonHQ",
    address: "12QeApB8ueX9QDAjVyEsi3N2FcyqyDpjU1wLigBcQi9Adn6y",
  },
  {
    username: "Winterspring",
    address: "1WiNa9dHyjZimiRyfHw1DSEpCm9Ya9NkoLrvPRSkPmjnVa9",
  },
  {
    username: "Stir-JP-Blue",
    address: "143sLK2EhGxfs7LjeB8q9Cc55Bmp2VhvHnKzEjBQiHwaKogL",
  },
  {
    username: "Joel",
    address: "1jSUQVP39MNgVkEBCfusSNvE6PeRdpfnuYLDQEZ49NceZi4",
  },
  {
    username: "Zumitow (Spanish Newsletter)",
    address: "1GuLrJcSi3z9sDewZxNYu9J6muHLRzS3NrXj4FUMWYfNFtx",
  },
  {
    username: "Stakeworld.io",
    address: "13Jpq4n3PXXaSAbJTMmFD78mXAzs8PzgUUQd5ve8saw7HQS5",
  },
  {
    username: "VIXY",
    address: "1NpQZhfKrc1no6JVWD2RQQ8bzCbqPt67mKqNBZJr4SsSF1c",
  },
  {
    username: "Mosaic Chain",
    address: "16Uja2QSRQthSN2ttGfawQVDFp9tQ2HwP94HXfgbqRtZ7Hhm",
  },
  {
    username: "dot.stakers.zone",
    address: "12RVfnHUJq9PDtcBV3xvfRG5h11C5DunoVGYiom4wvaugcwG",
  },
  {
    username: "Cryptopolitan",
    address: "13JZnu4eh5LwVU12BCKW8fcXJQ6reTWYWhxKC7qY2b6JeyFR",
  },
  {
    username: "taskooh (Plasm)",
    address: "13YJbdBw8Pj6x64J5VFXa76RiRXKiNdmro4y1dEu8adW3iqe",
  },
  {
    username: "135 CAPITAL INCORPORATED 04",
    address: "1ZSqSSAV1Pq5R9E94LX438rbtqFc1w3mWrWWe3jWUAZQpkt",
  },
  {
    username: "Mandala Chain",
    address: "166EpYwUWjEEiFkmRfouLz6V6qucoAsSfBvFYxV8R3CwY4eG",
  },
  {
    username: "leiter_SNI",
    address: "16iY7nXXYK9QfqDqTQPb86e6MFc2LQbCcF7DLi6hjJe9kRVi",
  },
  {
    username: "Life without stress",
    address: "1pmwoijCnVBj4mScf4zuc2BEM6ips3AZminn7Cy4J7GVzTv",
  },
  {
    username: "Partyfy",
    address: "155HQ6e3AAsTG7JR9zy6VRxAvPKRBz5m8DR3ctT1QJoZZq79",
  },
  {
    username: "Theo DOT 1",
    address: "1YvZx1adsxdiQtWJsEBWdTMh4vfRkxZN1LTEV2Z97hAgZsN",
  },
  {
    username: "OG Tracker",
    address: "14PikhqPmGomc7zbCSWVyjGypbRTKvRK9y4fp2uGAZ3DVXZa",
  },
  {
    username: "HandyCrypto",
    address: "1Cwfbi5ScXDFq62wPst1T2vo53o4xRLyizCBKpKvm1XgCAv",
  },
  {
    username: "philoniare",
    address: "14AZk92CKjovm4tDvzE9XsjGz3HNeeV2tmnbYitAqyweWoRp",
  },
  {
    username: "Dot Amplify",
    address: "15ho9t317QDvod18gCoTNe9yoiMjTXHwVxd5RC2iWyzEEby1",
  },
  {
    username: "WarlockEnterprises",
    address: "16XcmKL3u7EivGZqExeCXNFJ4vxhRiWsrAxREbbxeUcPjZfD",
  },
  {
    username: "NeoNumis",
    address: "14NHAVds9zbgS7fnTJiqj38WysksPx8urGdABumRjNHQAwKe",
  },
  {
    username: "Juliana Cabeza",
    address: "14uWCEwGQQ5qC24pkq5vbxsXtgS3Md2BAYJBvSstDy3XiU34",
  },
  {
    username: "Bischoff_SNI",
    address: "148QEzFQSJF7iwxENHaV6Qe9Y7Y5r5JQew3nVAJNTVTdK3Jh",
  },
  {
    username: "decentered.studio",
    address: "14h6GVCEWY49CkwWWxKMwNHyYfedDYtZCr2okVGzeNGgnZtR",
  },
  {
    username: "muddlebee",
    address: "14btqGNtzVpfwW9y5xYrcK7uSfgjGZKxcYAG3fJo6ujHUVS",
  },
  {
    username: "polkaTest",
    address: "143sNXhREtP7NvYshcLAjWqQ9Dx3xeoPHCpJmqPYfHa9zRsi",
  },
  {
    username: "Efinity (EFI)",
    address: "12LxQoLA9hebiMSPT3G7ixz73LLuYomMNuRLqX7c9bRWxDFG",
  },
  {
    username: "jackoon",
    address: "13JpJmfN7DTunESZGb2gdBe7PyZCB7NbQYiJr8NnGSKYLF5t",
  },
  {
    username: "Osaat",
    address: "133T5xP8q1etA27sUySYx8xNNfxxLSw8aGMDCNy1epJaz6rC",
  },
  {
    username: "0xf09f8cb2f09f8cb3506c616e7420412054726565f09f8cb3f09f8cb2",
    address: "13dTrEE587xf5Kwgiegg4bWfWEw4KRZcDpmFRw9jLBofvyMK",
  },
  {
    username: "Apurva",
    address: "15MEEi29h15Cggua4nsngdz1BGfY1ijEaRpQoqFCDJiSSrbe",
  },
  {
    username: "Stampede",
    address: "16ccn3xe5tAeR8kvzCRTcqHZjMJHvuF2pnLfTqyF1EmMusCU",
  },
  {
    username: "Kylix Finance",
    address: "15KLPJkuuVrjcxEXX2cYP1cYdggtWFg4zmYVAvdvo3jeTTo9",
  },
  {
    username: "bekka",
    address: "1HomBzZwkpQjhm3e9hQJ2AVFPmV4Ppon9ycCo91bh88xmGn",
  },
  {
    username: "Regency-016",
    address: "13taXxGPrMTzhK2m2Dsw2R9rqSPjAWE1DtaUqZsP4yPJhwFt",
  },
  {
    username: "Steve",
    address: "15MjWjJ8fcN2GaAQrJ7W3J9RkgTdQxGibEmqaNhjcM46ZAd5",
  },
  {
    username: "Jashar",
    address: "12a3zUD6qHovuyBQ7MwR1z7o4i1yFgdZsbsaFhMUzttRVhGK",
  },
  {
    username: "Szego",
    address: "126X27SbhrV19mBFawys3ovkyBS87SGfYwtwa8J2FjHrtbmA",
  },
  {
    username: "mikeb cd",
    address: "15DgkUXnBcpTpvVdrn5WFEU5JgKRbcyVcq2Jc8J5PxAANUQi",
  },
  {
    username: "Jedsada",
    address: "16kWwjZzhknQz9yqWko5X6F89BBwYitmGoEUaogGRf4zkE2p",
  },
  {
    username: "DroomDroom",
    address: "1hdHgPakHaj29XQemqMqAGowq8foAFPeDqRcUxdoJw4cd3j",
  },
  {
    username: "Grendel",
    address: "14zZYmK52TeSyy9zLiAVjEAkbcXpc58NXEHgLCDyq5FsnmSB",
  },
  {
    username: "Ippo",
    address: "155XDrcGuNgd8N41mQcaMCHENTBQz54YZJmqRXk1sVbM3FgW",
  },
  {
    username: "BlueGenie",
    address: "11SMuMsi6yPy7HMGaidM113gKrB4hUMtxG9pEyfUATjZwN6",
  },
  {
    username: "Andrea - Head of 3Tech Studio",
    address: "15ctSHhNRukF4rTVmQqJJxXhwvmjTSd1vPMimpfi3hBxRzDd",
  },
  {
    username: "Acurast Association",
    address: "15YVShWH1eZ5x4EEMcdUTKQ6qV3hzV1Y5N2F9V2nttmGNqaS",
  },
  {
    username: "WinterStamp",
    address: "16DbfLdtuSMsifHnvRFev81YvGAGWnVuQJ4r6NAH9tcSZxWW",
  },
  {
    username: "Regency-006",
    address: "14UrWCJwsX6LYkRFUmFxEvnMo66xFt3ufyyoHaUqpy3F48Ga",
  },
  {
    username: "kml",
    address: "1ZVYsze5Ls3osofU6wWSp5dphr62Rj7YiL4NsXiZU3a298F",
  },
  {
    username: "Al",
    address: "168PxGYBA21qzjZz7aj9BSLyyhXJm4yYdSK5GXtYhmb5i2UX",
  },
  {
    username: "Grayson",
    address: "15wcA28kbjEVh3rx1f7pMLAsxwBPyExuAH6VxzYtFZKQshSY",
  },
  {
    username: "Polkawatch",
    address: "13QpsZQDNdUon9rzcgGH2B7CdiHAM8r4B152QHviobM44i3e",
  },
  {
    username: "Khudeja",
    address: "13EjZDh9aRZzgK7KC2etwEgsKNvAumhA5bVcV23CVRkQxtH8",
  },
  {
    username: "kopeboy",
    address: "16YD8Ls8Hru1wu6z3py9VvFrJtPkn5JK9ACsrpv2xF86NwyX",
  },
  {
    username: "paras",
    address: "13ND1s6b8BgbH64S7wYniA2hvpWPLXXwMqDjGct6SQjAAjG5",
  },
  {
    username: "POLKACHU.COM",
    address: "15ym3MDSG4WPABNoEtx2rAzBB1EYWJDWbWYpNg1BwuWRAQcY",
  },
  {
    username: "ETHICAL VALIDATORS 0",
    address: "14BeKcfcvJSJjvu9GZ2CA8EQ3XkK9J1HdwDrfz5Sg5ERDnrP",
  },
  {
    username: "Bifrost",
    address: "15DAjHAziLo53dtHQPdNfQCEbiryoFsko7b6rABYNy9wzwzF",
  },
  {
    username: "AMB",
    address: "12dfEn1GycUmHtfEDW3BuQYzsMyUR1PqUPH2pyEikYeUX59o",
  },
  {
    username: "Mario",
    address: "14DJADQdE3bUQMFsjsejwCLiG1tiMDsFhCCiXavyBTKHu6kr",
  },
  {
    username: "Vincent",
    address: "13zPyrwbJKohVJJtsAmkPPsExyDPSLn14gEHt7jUHuonnjey",
  },
  {
    username: "Dot_is_Future",
    address: "16fD9LkHUK6VkCcqFKQF62bEMXqb7w6AhW9d2DpZgqaMAjYM",
  },
  {
    username: "The Kusamarian",
    address: "14wbgzqY6w8buJUPkWJPoVUtjFunvwPhS4R6vrahkvNzR4gW",
  },
  {
    username: "0x426972646f20f09f90a5",
    address: "12s37eSMQPEN5cuVyBxk2UypUHntwumqBHy7sJkoKpZ1v3HV",
  },
  {
    username: "Manta Network",
    address: "16fySMeb3fZ7mrgD5oK2txraLw1P4V9mVsrMvEnbR49nERpZ",
  },
  {
    username: "JOIE",
    address: "15DLJZ4ceN58vEgDiQjK8JsSJuLNBqhUnQ6QCY1QNSjrQntm",
  },
  {
    username: "The Kus DOT Delegate",
    address: "15KHTWdJyzyxaQbBNRmQN89KmFr1jPXXsPHM5Rxvd1Tkb2XZ",
  },
  {
    username: "Yipclouds",
    address: "1EBZ8G69NWwuu1KRFb7mfD7eD5f2xZ7BQkHd6L9fSHzpDGi",
  },
  {
    username: "Vampsy",
    address: "146Ph7DcoL6SkPrZgkU2Daf33Wey6WGYTuLXm4zHr26dnLdu",
  },
  {
    username: "NotBitcoinCEO",
    address: "14JzRxGka87tYpd8Q8kiW9HjesgXdAPFSxVpFczhpoLBaahC",
  },
  {
    username: "0x4b52414e412e5620f09f9a80f09f8c99",
    address: "13jWi6gpEN2qs9SGP5vTmQSpq9HQUgn3WMcosRvUwQcv9CVt",
  },
  {
    username: "CRYPTONITAS",
    address: "12K7AbU3KTXYznR4HQicxuBK2Fz584bFXHUFj5vQwGoyXEjo",
  },
  {
    username: "R4",
    address: "158egp6Crr3q6Bcxr5Yhnqwp1daVRupV1DZdhFLMNWDv68vB",
  },
  {
    username: "Deutsche Telekom",
    address: "13dVcF8BjzUpYujj5HxumDLPwpHzMPwzPZAZHJQEbKRJuNgT",
  },
  {
    username: "7_Thunders",
    address: "1WEf4D61mEXDchnerjJ2GbPhEyk1pH1KfmEf8ntWuL3LhB5",
  },
  {
    username: "Differential Labs",
    address: "13y4ucQZK55R3HmX7ij3J8vge2iUEZoe4MyAPeoznLKJphRn",
  },
  {
    username: "adveric",
    address: "12HBV5yA9XKt1amCoUkiFxN51rnAxN8mhYLqkXZtFrFM81iz",
  },
  {
    username: "KarGru",
    address: "12wvJHvGSanHfAZQwYBFtaAh77UzBNujsZjQkJeWB5Ksgu39",
  },
  {
    username: "0x537465616b20e299a8204e6f6f646c6573",
    address: "13gPXybKoVqvPhBfzNGiXgQdqFWHTEJB3tx43p95bVXMELBf",
  },
  {
    username: "ARKAWA",
    address: "136RAd3mM2vW7wKxUtpDyvv6vKd4N8Gj49VGhi3ZbKmWehaR",
  },
  {
    username: "Alistair",
    address: "15tZKWzhNFM1dpjKvjt4cYhZ9uJKyEZ6McrqwtYFwCVG8XUh",
  },
  {
    username: "0xf09f87a8f09f87adf09f8f94205377697373204d6f756e7461696e",
    address: "1xzAes4aS1EK2hDBcuK3ZSrwvH4Hn4b5hs6aKrsoC8scLGK",
  },
  {
    username: "KernelKennethG",
    address: "1nnN8sZXsbaoTMMv9Y6px3zkM4xR39u7S7Tgo1A7pEZhvvx",
  },
  {
    username: "Moeeinvest | TeachMeDeFi",
    address: "13R4z2pR4xdRWuyYMCSG3XFvYRTYPvSg9yyQ3Ku5ZNi6v9QV",
  },
  {
    username: "MacZamP",
    address: "16fZxnwnnzArZ7SRhSWUcEhGCFk2XDUxD54VqtaKRmr6FhNR",
  },
  {
    username: "PolkaBiz",
    address: "12zT4mjRRAc1vD8M3rhpQjmU6BABN4jvUUYqrvbUdd85nRTy",
  },
  {
    username: "web3alert.io",
    address: "15kWBWSzLywZTUeirwUi8DYzBMKSSMtaCMN3eLee3RXzXZG4",
  },
  {
    username: "Prometheus",
    address: "12eRRiCmnDqnhnrvdJSEFbg9JXWQwNroTjCBsevUPAx57ttQ",
  },
  {
    username: "Blockchain Training Alliance",
    address: "17XwMnmRMRjErgdKJFMRuSywLF2MwD7NmmNTZU7n2bPPr8t",
  },
  {
    username: "bear",
    address: "16ezwMEF8nkMk9Pf5Xp9NcV52AArQBBQ9Lx3pMbxZZnRkECG",
  },
  {
    username: "Gr33nHatt3R",
    address: "14wDEEnVKZDXVXq2arAmkf1QmnTcwN4fzNJRFoM77YvFxa8T",
  },
  {
    username: "Music Events Initiative Multi",
    address: "15nKYvAm8Yu9QVK65JWrhfyabhHkWywg21X9gX4GFJo3v4cT",
  },
  {
    username: "0xf09f8c8c204e6f766173616d6120f09f8c8c",
    address: "15UHvPeMjYLvMLqh6bWLxAP3MbqjjsMXFWToJKCijzGPM3p9",
  },
  {
    username: "BlockDeep",
    address: "143T3YkKMVm7KY1zqwua3Ld2SRLxLyra794TrhHiDLrD1kjY",
  },
  {
    username: "MarketAcross-BB",
    address: "14jHouxT1VbhBDw93VW8Z89p139Qgu7ECHz3zxM2CpQEDJDB",
  },
  {
    username: "DaKampe",
    address: "16Zg82spmUSQfLLPwAYdCooS4ggkcJXRLGPv8K8hEJJu6duQ",
  },
  {
    username: "0x4e654e6120f09f8cbb",
    address: "131Y21vAVYxm7f5xtaV3NydJRpig3CqyvjTyFM8gMpRbFH1T",
  },
  {
    username: "Deelabs",
    address: "13Eo3cLeMRFjhrgmjwmyxygF7E2QiB5HvxW33UmSM5LENsxY",
  },
  {
    username: "KRYPTOSCHAIN",
    address: "13kzfkXXF7nSCzaMS2Eok8scDS9jZk89yWyfsCBWvDDJKaZy",
  },
  {
    username: "Stakin",
    address: "15JobZzEavXuPNHdnJYnQpnTbum3TqvtaftmSuPtzhJiiyqR",
  },
  {
    username: "Lightning",
    address: "13fnKh9h1pHnCPRdwERiNQ1HjXZwemFPjiiVHDwmvWXicJuS",
  },
  {
    username: "Max G",
    address: "157tv9BYGDHVgb1PqmB3j7rVnqxFLQn7ukaVVdgwbWQNtyGh",
  },
  {
    username: "Dot Play Curator Account",
    address: "1sdSyjNcPVHqZZ3J3FEftQZN6MhDidVphLHr4b9EQRbaZhK",
  },
  {
    username: "Alex Bean",
    address: "167Y1SbQrwQVNfkNUXtRkocfzVbaAHYjnZPkZRScWPQ46XDb",
  },
  {
    username: "FOURBLOCKS3",
    address: "143oueGJnPCZNQfsYV9DKgE3JvDxiNKaFPhnVFeeXsxuv4Do",
  },
  {
    username: "ONYZE",
    address: "1ikVVhD9kqKtw2ixQTqsX9qH8jJBMmVcLJiSSfVuwHDcF73",
  },
  {
    username: "VLADISLAV",
    address: "15StfyJ4TWqKWkhoDurnn3yZicgKgk1oLLa6z9oQwbDFS6fo",
  },
  {
    username: "0x5374616b65f09fa7b24d61676e6574",
    address: "13Emjax1tBfQMEKisppTMMe7jMbqpmCH1jRpTXudLocaevND",
  },
  {
    username: "DoraHacks",
    address: "15ktix1ERauAufEREXujuL65xR6Vw2AhQBh64P4ZmWacMmF9",
  },
  {
    username: "STKD.IO",
    address: "13mfeJNfmxqkp6VdWEzRm1zGwdqmGv2s1Coo34Z8d2uw47Co",
  },
  {
    username: "Moonsong Labs",
    address: "13NaJYpfLNtYzCRLnCQ6LPyUajQ5LQf99X6FyTLwfC1mTsp6",
  },
  {
    username: "bibi",
    address: "14wu2VdLkhBMU5WcXqKTpif28WDjZeX9ceAUznnr342rqxnW",
  },
  {
    username: "Proto",
    address: "14YXgiAqian6PWkABXGVhKB43tmbqMwscHLdhHi1qQVBeVQM",
  },
  {
    username: "BBC_Bali",
    address: "14RuJvWbTGjC17QnyeXULBVdaRQpYgPcqz6EL5PgNX9jM4KU",
  },
  {
    username: "Alejandro_R0GUE",
    address: "15VPagCVayS6XvT5RogPYop3BJTJzwqR2mCGR1kVn3w58ygg",
  },
  {
    username: "Karol Kokoszka",
    address: "1556APd4jcMDRod9SUxfTwGLasqFy3y3QFMGokkBwTdk2tev",
  },
  {
    username: "135 Capital Incorporated 01",
    address: "12EGRaCJaJ7MxXxxW62CEjzLfsj1HKs7rRRe3ckMdXr3yniS",
  },
  {
    username: "Open Impact Foundation",
    address: "12ZRbFQf13e9EptPXCCgPoCFdbR6fXKs8K3Ka6nce2avQPfj",
  },
  {
    username: "Current",
    address: "121nFrNpvoBE4H3aWbfSBPvcA5t4cpsYEpCuAKD8t4wFnACr",
  },
  {
    username: "Maxchablis",
    address: "1ugocV8PP8VwDXzBbxPge7qFhMA5kAqm4kFPqorwmsTeWrD",
  },
  {
    username: "Cryptonauts",
    address: "121dV2cHDfnFxGEMZqrgHEGz8Kks3GY97D3K2h9JfcEjUL7V",
  },
  {
    username: "Gautam",
    address: "1ZebzHrCP2rqScFEL2T1pczs7SGL49wbzyJ9c5Em7Xmsj9L",
  },
  {
    username: "____",
    address: "16GGAKkWMGPHgq4QiPzb7qRWfcny1EoR6qkPfhtvR5xZCdCq",
  },
  {
    username: "Koen",
    address: "14rzoDjCCMDq7QtB5RgfpmBcEHEzApXXgZ9oTuksoV3LMdWG",
  },
  {
    username: "ECH0.RE",
    address: "16g6ZBYbEP3kRMgVBki7zdvdGpymXDyHWzj3D3rDaEATXzc8",
  },
  {
    username: "justdude",
    address: "13BNk4Dzy7bjcMVyFLexQNgjbTnTsF8dy6JvuAewxS3tW4eW",
  },
  {
    username: "thick4rest",
    address: "12NMoBYbY7nMyRbfjvt55XJoD4mT3Rzb1bK9NS3AVBjP39nK",
  },
  {
    username: "ilgio",
    address: "15BZW721S3fzMYT8vY3Dt2sVXNTECqwHQ1bNUM8q4fi7EVcc",
  },
  {
    username: "AsyncGoku",
    address: "121avdvM8H6BUgxFrg8fVT5mH346XNYW5YEwdo3xvLnhL9rn",
  },
  {
    username: "XiaMiPool",
    address: "12GtV7u2vJYRDU3CntYQj1Pud88agafAotrMhpe19Z2AfKv9",
  },
  {
    username: "0xHarryRiddle | OpenGuild",
    address: "15UuqQ1kKMbHgNkrxF1n2cM7s99Dg7Vu1sVteVjs1pyDk2Sn",
  },
  {
    username: "yjhmelody",
    address: "15ouFh2SHpGbHtDPsJ6cXQfes9Cx1gEFnJJsJVqPGzBSTudr",
  },
  {
    username: "turboflakes.io",
    address: "14Sqrs7dk6gmSiuPK7VWGbPmGr4EfESzZBcpT6U15W4ajJRf",
  },
  {
    username: "Moon Man",
    address: "13e1M4trx7MenLwPgntiLt4HUpriw3qEXAFwENc4LN44hVfp",
  },
  {
    username: "tomaka",
    address: "12rhxeaUeeCkGH5pdkbMGFu2jkgLKKVXEMiCtB6VG1GMbkNu",
  },
  {
    username: "Magnatron",
    address: "12H6ECtV8L4Zxe8tDt1anZAruYu5gSn1971NCUDCCvz3a3sa",
  },
  {
    username: "BlackMikMak",
    address: "167dvm68J4NVD2PfHubWvrR29TsUuHufJA6bgX7xKVEFHQ7q",
  },
  {
    username: "William | Paraverse",
    address: "1RVe7FHwgGZVKcGWm4NQ2TVK3u9R7xxDADiGE2y5fx2heTH",
  },
  {
    username: "dwulf69",
    address: "12gWb1R61chD3PDtNLba2d3hytHuSp5WRGnZaj9LzArP7KVs",
  },
  {
    username: "PolkdtMoonBmParachAucCrwdLnGLIMR",
    address: "138QBouUNHfGpJiNFfqPX9w9KswnHjgvKhmDn1QNJuPsBi2Y",
  },
  {
    username: "Polkastarter Rea",
    address: "156JobLk3iqFzTBkwx21YBE4KYHreDjtprBbBoUMKfdfDGgT",
  },
  {
    username: "George",
    address: "128pmEUBSGjGeXZXNaAmomAJgVn77L74YT7Zdjd3fP63HWNP",
  },
  {
    username: "EnsRationis",
    address: "14XoNmYA6i2nj6ymZj5iKKo4Gqx9fYeGiFbpBxwKjmNvtrcT",
  },
  {
    username: "Tim Janssen",
    address: "1249Qsh72ZcXFjLEDKAp879SfmFpzQMqb1qQKcfkdZgqbt3a",
  },
  {
    username: "Sasha | Fellowship",
    address: "14DDofWN1JuYK6BTVrCwgqy2AvNr3izFA1BSr9RAdJQPXBbC",
  },
  {
    username: "Abhijana Agung Ramanda",
    address: "1jjg5KzFQ6jLLrECVWGz8GJMoe297HcSihYQuvu7HmKjxca",
  },
  {
    username: "Blockchain Headhunter",
    address: "15oXuEfGte2HPoxxWwz18er7LNFuLNEdXtNNk53dggkfFgCR",
  },
  {
    username: "Polkadot Mexican",
    address: "16erHfjin7aWozKBpEU6ocxtJY7t38pFnnHvhHLiJYSywS3t",
  },
  {
    username: "DOT Staking",
    address: "16SWEqB5qHed6ogWjgmEBbgs5TkR9vxVwvGRmghdGsvVnZWn",
  },
  {
    username: "Mandala Chain Foundation",
    address: "14TBj11j7YPH9N3YSpVBUrrxNaLY8Szbvj8pWNHpdkthA7ff",
  },
  {
    username: "Anson & Fabio",
    address: "13YK1sHixcvVPc6v7q1F1p7e66dgoVjcSHnfv4cFJcuKbNke",
  },
  {
    username: "DFG 1",
    address: "13wiXoK3nFTQCJV1dgcZQXYcqCk9VGBgcHLsKwcGkXF7Bz3x",
  },
  {
    username: "Dot4alls",
    address: "15a7pHxgyorLv36jXu1iL17pNr6nsVFNX4VWqpsDVjUFg9mk",
  },
  {
    username: "Nico",
    address: "14wksPBrJniZnNaBpZyrYQFFnA6cbHvAjR2RQQkgz28a3kmu",
  },
  {
    username: "Method5",
    address: "14zb7FpKGRCoW8SPezDHsMzqhGAuEn6Wjprf4j2Gn85dGVEh",
  },
  {
    username: "STAKEBABY DOT PERS",
    address: "14H71kgDgscPQGAbc7iomyKGACG1NnXN722vM1tTBiFSjU8y",
  },
  {
    username: "Frequency",
    address: "16guczBNFQAYhupkTJ75zq9MA4WgYudN9Pc43kyrekqw9WA6",
  },
  {
    username: "Matej",
    address: "138qHhjBFVCgxtcmvFBWQAjVkiH62Kru9RbC4cYnVeJrcdqT",
  },
  {
    username: "ChainIDE",
    address: "15kdvsU1PnKCH9ShJ52cpiJmtmhSio4cPxwQK1pXgLrUGVSs",
  },
  {
    username: "Mblock",
    address: "15T4VxRurn7WJy9iETS1zNjKoneqjHGTGGx1f8rPgPWsekPF",
  },
  {
    username: "EUSKOIN Vizcaya",
    address: "12YL4miwNA6sg4TNSNuepR9zHRyPa98GVMmFqdmvX43Td1MD",
  },
  {
    username: "RJ_",
    address: "123452njqC3T7hBCWYUCGYyaT8BGzPfL1dAfY5g5mfBHKHtE",
  },
  {
    username: "Grimface",
    address: "14i61mrUnaYZZD19v9uZ7MPudxNGP84SNEitammFPNuFArkA",
  },
  {
    username: "0xf09f8c9f20616c6578616e64726120f09f8c9f",
    address: "155BxyzkQRCrLLU2d6wTekdzHFDXbcKpCTAjeYi1pXrhkDb1",
  },
  {
    username: "Obi_Wan",
    address: "16Gw7Kgub8ZCW8qd9Xm3vMLgszWasvbk6Yo3mwixGhALoAb",
  },
  {
    username: "Moderation Team Bounty Curator",
    address: "12GkpkHocU4y1vFV2CpnA2AhkjzGGRtwucHFY77A5yyiQKp5",
  },
  {
    username: "KANDY",
    address: "11Ft2vZgZGuLyn9pZGSVDzYFkYQq2E23ywzRcJ6t2EdzkMA",
  },
  {
    username: "Web3 Association",
    address: "13mm8mjuALSbyvfjfso22eexuFwL4MqMrcw1w5To9L52yb5h",
  },
  {
    username: "test",
    address: "1y9RVRwKoUQDUW2PNSQ9tkBZ3JyCTZozkbL33Kc891kn77i",
  },
  {
    username: "cybio",
    address: "1GyrHXFADMxRSB1vMpFFExRQnzZEtFp2WRBASwgAfiyB1j7",
  },
  {
    username: "Polkadot Philosophy",
    address: "1497F3WXvRF8WqXuXmhbczqRYmdmSf2R47Y6NZjh2przrjzR",
  },
  {
    username: "StakedTech",
    address: "133GbdqxEmDxhTKSaTxEu8sx9mViidWH9XZMWMakt1jfQywv",
  },
  {
    username: "Teke2.0",
    address: "12gvTx2var1agiVLkkkgQ5okCgmve2yyLAtfvuq8WNfacmYd",
  },
  {
    username: "DARKFOREST",
    address: "16dQDKZqNdhZ1DDC3pbj3mM4aTuMYKQ94S8NXV7ubWsE35Ue",
  },
  {
    username: "SNZPool-1",
    address: "15fU523Wq5BCt2NWAmrCU6p8nFB29uVifeG7bwYJHbw5Mmd9",
  },
  {
    username: "Lark Davis",
    address: "16agh1vhJ78MiJ7tjuTd9RzreMwBwTEu15x8kCDfJy1xBYUs",
  },
  {
    username: "Codigo Brazuca - Oficial",
    address: "12WjZZxu5pDMy2ZfmTsVDFn71Xvi6LVbTefqVCt5b7ukCE9E",
  },
  {
    username: "nanasse",
    address: "14rQ1QVMHxwFvUV48uu11EkJSnAuseZi1ddjHESBDTSSYYxs",
  },
  {
    username: "DexTools",
    address: "1hY7cHJSNEjbvLGpDw4XsKX5JwuYcTt6r21r36KiHZ5TZuw",
  },
  {
    username: "WALLETCONNECT",
    address: "16FScAKLG8LLYnCiuzN7Vzevkmw5XNRTMMkFSgTqY2kGtFJD",
  },
  {
    username: "Rowi",
    address: "126mzaH4zWNHBiudyxkLS2SSAeTzJ9FWuwSiRPvf1WF2r2dw",
  },
  {
    username: "AndreiEres",
    address: "1436xp47dm3w1yTvSncsf4cgVLH5dVsgBzMqtHkSx1XjG1Wb",
  },
  {
    username: "conr2d",
    address: "15d78o3dG34Sri4qLrsnpBwZG7YMaYWVioAhdfcSSJEY8eYt",
  },
  {
    username: "Bryan Chen",
    address: "14DsLzVyTUTDMm2eP3czwPbH53KgqnQRp3CJJZS9GR7yxGDP",
  },
  {
    username: "METASPAN (polkadot pool)",
    address: "165YJj6sSsY4G59yQPa1ZFTP989FMBXcAe4DMYBT1hcgCNxE",
  },
  {
    username: "PERMANENCE DAO",
    address: "14rp4CvtyN3WSftrndyNxjJFi4cGXsgrE9gFr528QSYFvPTu",
  },
  {
    username: "BINANCE_STAKE_3",
    address: "15XvGmoR6NqAPoV86yDGMDkvU8PCtYGJoywGq1AFcwF6Y2qy",
  },
  {
    username: "CAPPEX",
    address: "12dR4JYh1iPkaJXLSTbqz9iUpm6diRces6wJ6SAjkhmnwixN",
  },
  {
    username: "LimeChain",
    address: "14dut6zGgdVmKijePZzrQAy2gZ6FmMDmzzp7VqjzPV9E4ujR",
  },
  {
    username: "1% - GTSTAKING",
    address: "16YwUZyLdeAoe4KmhivGwuuJpBH1US4qkUtXK2V83MVXUy6x",
  },
  {
    username: "Kekose ofPheeb",
    address: "14onpjYNgzDZwY57Y3w5cwwnFyp6K62mNNbgq4Xhw7zNG9iX",
  },
  {
    username: "Polkadot Arena",
    address: "16JxTHKfrx2WfeXXxJFuPgm7hv95LrAQRAyCq5HoUbz2YZQL",
  },
  {
    username: "bkontur",
    address: "1HFq3DbX4tqanTLAx2CAToWnHXg6LRLMzSD4JzYCzCQpw5E",
  },
  {
    username: "Leemo",
    address: "1HGnvAkk9nbfZ58CzUJhjcrLdEDMkr5qNkqqYkyD5BF5v6Y",
  },
  {
    username: "BIFROST FOUNDATION",
    address: "14oHJDPXSUXNXutuxZi9R288aHec6C3tZgionUyHTERPC7fv",
  },
  {
    username: "COLD STORAGE CAPITAL",
    address: "13HJNJUgR5mnfmreoDA35NeZeY2FvWJv3k7ZDoeg3ktDQWky",
  },
  {
    username: "Munay",
    address: "128fHaGJDKeXNNjqamUTaLe5dpU41zpbBaQA6BW9VsPKpkH6",
  },
  {
    username: "artamendi",
    address: "15ijQpvJCQU8kHMx392o9cGuiGvZe1kjU7FNS3hLzmMwx5vR",
  },
  {
    username: "0xe2a793204170696c6c6f6e",
    address: "16chRF6zGohwhrCvotxt3sB1sLz3pgewC5th123mLoThhQAo",
  },
  {
    username: "Gaius_sama",
    address: "149BsxLw1jXeDnbh9WHd7Pezxyfnpwo3oYnJWWUEPQhsJkDm",
  },
  {
    username: "Lurpis",
    address: "16ap6fdqS2rqFsyYah35hX1FH6rPNWtLqqXZDQC9x6GW141C",
  },
  {
    username: "Animoca Brands",
    address: "121uoqZWdrvkh5xx4UTe7Wq3e9AZtaFLnG8vH2JcWQnHFrK4",
  },
  {
    username: "GWIF Airdrop",
    address: "1x6KQZw5hDUyecs9Ha1fzVs1EMetCY7WNxp7fWeCgFTzRVA",
  },
  {
    username: "nalululala_Polkadot_Replay",
    address: "12uRz8YS5zrunD1DbpbRjcwVzbTaXkbbM255yGiVTmyKrhZz",
  },
  {
    username: "SafeStake",
    address: "1jt73DNw1xXpz38GhDGFun3eX585wtzFkmkVLs8TKCA7bJG",
  },
  {
    username: "Fuck_chaos_dao",
    address: "192ZvYjHoZVaxHc7Z9F6Y5BX8zG7F9VLpGtDmFKrN1r6Z1b",
  },
  {
    username: "GDee",
    address: "131dPecTmpTC1p1ofemufqFBJo9vNbV7dkgN7vWwKnaSMkC4",
  },
  {
    username: "Megha Varshini",
    address: "13mrRC7BgZzK8yhr7e1XxDZc5PRTJxvVfVzz93TxugSC1yJr",
  },
  {
    username: "Dot Play Company",
    address: "12H7MXrLn5gXb14BEDZKuJ5DWovE7sx4t8WFfS33B3k4CSdi",
  },
  {
    username: "hirish",
    address: "1627VVB5gtHiseCV8ZdffF7P3bWrLMkU92Q6u3LsG8tGuB63",
  },
  {
    username: "Polkadot Music Events Initiative",
    address: "13EDmaUe89xXocPppFmuoAZaCsckaJy3deAyVyiykk1zKQbF",
  },
  {
    username: "[Multisig]EventsBountyCuratorsv2",
    address: "12Tv3eHYH3QjaX7uV2SpyG9UQ94M1VLqoChUGaH8E5eRT75a",
  },
  {
    username: "rob",
    address: "1NJkFTYbzxAX3kt39gGNX6gDncckM1mQVcsEriexXTDmhmn",
  },
  {
    username: "Mythos Foundation",
    address: "13g5NH8QJB5ndCeGH9vWG6iJqbhFiGufw42foaBM9QfWzVYG",
  },
  {
    username: "Studio 54 Argentinos Jr. Fantasy",
    address: "14gBuc9Cs8g3VimsQ1F6Sdx54cxEiQpmkCikpPXdMkFvQDP4",
  },
  {
    username: "Fair FEE",
    address: "14rRXL83Jb16Ec2pyW4xkepEZYe85DnCeW6kDsMHGTyCqS3C",
  },
  {
    username: "0x574f4a444f54202020ca9520e280a2e1b4a5e280a2ca94",
    address: "13kz33kotYa3M75u5avMS367zJY3Fx2y5ZYASEPunqfEeCjD",
  },
  {
    username: "polka",
    address: "1L66uQMKFnXKSZx9pCD5o56GvvP1i2Qns7CaS2AaKp9mnwc",
  },
  {
    username: "Regency-018",
    address: "16fgB2EjeZM5DFypvXJ4hAwEBwskzRk3Rz2V6SBhm87wRaNT",
  },
  {
    username: "DEGA ISPO",
    address: "15GmASaKC8RDMTPFyHjLfAHyrLC3MTfugBBijz6zTF1Qfqcp",
  },
  {
    username: "Kazunobu",
    address: "12TDnzaKZWVLjZfztYV1Ty49CZAj99pAZPM6ovnsVCcqHbb",
  },
  {
    username: "0xwasian",
    address: "1FDwnGrNHLox96c6WwBPxgsEhNGcGnhg1vaZwZ8HnaAtACr",
  },
  {
    username: "Hsinchu",
    address: "16SDUqoRr6f8DAyKhYWvo9dwFPdJHeFXFr1may1vhomqqPTQ",
  },
  {
    username: "Hypersphere",
    address: "12xGDBh6zSBc3D98Jhw9jgUVsK8jiwGWHaPTK21Pgb7PJyPn",
  },
  {
    username: "w3n:erick",
    address: "15XF37GkxgRJakURR4jycdrJnqWQctT5yUPzqLn81TZmwBDF",
  },
  {
    username: "N0n3Xist",
    address: "12sYzdgd6PUiFJotYmdhzhsAjG1NJwm4hYsRFnugXDCkw5YA",
  },
  {
    username: "Liam Pendulum",
    address: "16ihePnYtZfCpAF5th2GKQq2N8gAPa3o4D8ikQNUdreTXUjh",
  },
  {
    username: "Polkadot TP",
    address: "133AZh7un734VRfAQ6gnrwXotN69aQxEKSLKjFEkKJpfQjk1",
  },
  {
    username: "28DaysOfDot",
    address: "1vWBiF3XdbMowwJn5ZzzDgjQoggC9Q2jRuvGeRqEjbjV98L",
  },
  {
    username: "MuseumWeek",
    address: "1TPLT57iN4TgHBQYi6Z8hbH7HmnhYLJhshMunLM7hfZuqVP",
  },
  {
    username: "0x4150455254555245204d494e494e4720f09f8e82",
    address: "13uUd8q21iS7HLDG43BQQ9TiFn7wGFPSF8Uy99uze8zw4V8c",
  },
  {
    username: "Blockchain Training Alliance",
    address: "143PGVWu6JrieeZvH46kkyNjZavDpWDRJWFP39NYMooW1LXv",
  },
  {
    username: "freeverse.io",
    address: "166hUw1E57AqJh1vGDLoHY5YZXzNx9cvwWdbx6Gid1KzWD5c",
  },
  {
    username: "polblancoo",
    address: "16fmk1eTCZB5KeA8PJsfTViVvLELDu5knVMvotAC8XKwsX7d",
  },
  {
    username: "Patricia A",
    address: "1WgB9o954mkQi97f36azSwDt7SfRUQuJ1kCyb7Sv1WAUcSe",
  },
  {
    username: "Xiao | Starks",
    address: "12mHfQJGXreUmuxuP2u4qLeytfdK3qkSJpMKxBQm8xmor3kd",
  },
  {
    username: "0x445241474f4e5354414b4520f09f90b2",
    address: "1Dra6uQP2j3ZEBGkvtJvnun6UYCz1DX62yyqT9eFenfArXZ",
  },
  {
    username: "Talisman Pool 1",
    address: "14WC1dMHbYRSfLjcYq7vu3rXCQHkSThxQUy39rXjuHDn2NAz",
  },
  {
    username: "BUENO VALIDATORO",
    address: "1LJPfJbndBr3R3nfvs6KCusveZF4QTx2VfQQJzeCfrrisa9",
  },
  {
    username: "alexggh",
    address: "14uA7Vc828e2Q6oL5GBHP9UzTkEvwqbroERwRmucGrLmPuuL",
  },
  {
    username: "LAURENTTRK",
    address: "13sHyGPTNruEjGyt9hWBA8s6PrhqqYpuEmDLLmVv7nEH5hmc",
  },
  {
    username: "Bittensor",
    address: "14VwUiNPMN2T9jGvWaSm5pwcUr5ziqLjTomRm6xUxwy3Urjm",
  },
  {
    username: "Connectify",
    address: "16epBRV5x2amiaN5hjh634GuSEM2mjxBbnTFp6mNCfL4Fdfr",
  },
  {
    username: "Mork",
    address: "13idLN6FHW2YeJojk37oaM6w8pFo7FxySgv11326KcoQCs2M",
  },
  {
    username: "Michael_Republik",
    address: "16FjvFZfimuixGF3zuqhmxq8XefzFGh6a2hoBJHpCTW4hJFK",
  },
  {
    username: "Nick Smith",
    address: "13KcydQtinNmesn4ggwq6Bj9JjybnPz42G529idZond3ZQ4K",
  },
  {
    username: "Pacific Meta Inc,",
    address: "13wmvijsjiRRinbf6g3yp6ZcktsqsjAfQfztGPqy8ipNtAEj",
  },
  {
    username: "Oracle",
    address: "16ZkdRYne6geWLkhaMgraDkXXiKHwSSQkCtQ2pPJPtoroURn",
  },
  {
    username: "MDuduta",
    address: "14aQ8oSoG141cCidAsdLdF1N2kfKptvXehJbtqmBu9mzYPz9",
  },
  {
    username: "andreita-validator-0",
    address: "1247Twcyzmb46zNZ68yg3ZBPcsAfKRsxhTa2tkbPBs12gwXt",
  },
  {
    username: "cryptoleptiks",
    address: "12QofudyGvob2YhdYAoc3M87xRc3Jn1zKLKYCJxn91U3WUsR",
  },
  {
    username: "Decoded Viewing Party",
    address: "1659xQWWCox1Kvems1aSi7sVbECLmyHT4Q5i39pZHMJb8tVc",
  },
  {
    username: "STEAKCHEF",
    address: "12QQZYE6oXUUM4qpomHh72ehe4pbZhvfW7w9dEqNUfs7zbCE",
  },
  {
    username: "0xf09fa590204c65204e6578757320f09f8db7",
    address: "14iSAsKCsBLTT5vPc8zsoCfFfawwCjrvvPD9gtVjjMDuuVLp",
  },
  {
    username: "PDEX_Guide",
    address: "14mvtP5rb6r7rnMT4WWKvWHPjgA3sLttKek1SqLymorgqoVp",
  },
  {
    username: "Parachainz Un Jobbed TE",
    address: "12EyXGWRDY1y1aPM5qcNSTSk6AhGamwqd4tJe8uCYwDhCqu8",
  },
  {
    username: "StakeUp",
    address: "13uifUNALuwqiHZADQb2hrpwnL8kmawjqykx4yN661Tv7mR",
  },
  {
    username: "xcRom1.dot",
    address: "13GEk517q2rDtrRKC1yormR2Aj5enhR9nkV1VwAygmxsf7vf",
  },
  {
    username: "Blockcoders",
    address: "136U57RPmcjuJnwkapyYpGhBeaDZnkViEYjgoCSYBtZcExVr",
  },
  {
    username: "0x436f6e74726f6c6c6572204a6575206ec2b032202d",
    address: "16J7bu1E85kt5QPTm1oYGSY9HGyymJgCHNaajhZAsuF67D9w",
  },
  {
    username: "AUKLEN",
    address: "13N54bAVqozRKP5LjRP43Yat4Jr9JDF8W7meKqPXebGqZ6pm",
  },
  {
    username: "cryptoleptiks_LeNexus",
    address: "146NY4R4tGs9fEZSXt23BCpdvqH8NfqADWqCUKshVRri1vso",
  },
  {
    username: "ALLNODES",
    address: "13wuVzbjVyxyhcfTkM1m3Zh48oBBjBTKLrUGw26zTnCA66GQ",
  },
  {
    username: "ChainSafe",
    address: "14gaKBxYkbBh2SKGtRDdhuhtyGAs5XLh55bE5x4cDi5CmL75",
  },
  {
    username: "dotstake.io",
    address: "13tvM5A12b9yQFs9TJWH1Bc9iiN7d7jZGnqJXdF85ovHruh6",
  },
  {
    username: "Dodow",
    address: "14SJWrvH13QrAnDfaffhvmqx5w23GhZzMsw4vQzCNPDuqJWs",
  },
  {
    username: "DOTER.IO",
    address: "15qjQhU6iggFLy7cdPNRqk7kCD8UGYSXuQkz6AeM8Z7gGYS9",
  },
  {
    username: "0xf09f9491204b65697468",
    address: "16CmURJgWdHMmZynHe3hVmEDd6DuxE8KmQKj9aKhSfwo1QSL",
  },
  {
    username: "ALESSIO",
    address: "16cdSZUq7kxq6mtoVMWmYXo62FnNGT9jzWjVRUg87CpL9pxP",
  },
  {
    username: "STAKINGDX_COM",
    address: "155Uc2YERq1vYYcS2owKa3vZk2zyehP624JzX5frkJkPY7db",
  },
  {
    username: "AWorker-001",
    address: "13EAmr66rhEEXD8mq5wiqvJ2aHibBYebF1ys9JRi1qyVjQyk",
  },
  {
    username: "sublab.dev",
    address: "13asNs3hZptrQwrN4UnzVMYFbRwqnuUfD74oYyTyS6cdpJ15",
  },
  {
    username: "CRIPTOMEDIA",
    address: "13zm7cVKKtXmU1iDdSikc3KJjbfJGZRe2sMkG5Lt9DDKR7WT",
  },
  {
    username: "SzuDar91",
    address: "15wb37SKZ49jaTTtgz8312jKcWb1EwRTX3sDkJ1cs4RB97Rh",
  },
  {
    username: "Polkadot Helsinki",
    address: "12NY5cguZUHNm5hhAxLMZXMtnKT3LZttgxuieSkoqevgQp8b",
  },
  {
    username: "Polkadot",
    address: "15M2qHaCXBwx6nQfBdmTrxMkrHBLaTm7b81HzhkPJhhc89V7",
  },
  {
    username: "Events Bounty V2 Curators",
    address: "13RHxf9Wm3BaFtjwGigmbmQsesJAhhbrHHdVC5eQNJMowKjc",
  },
  {
    username: "PINK POOL #254",
    address: "158nWmVA5u3xgRKKthDa5vrp9preHWq2h3AkXUH6CFFkJQ7A",
  },
  {
    username: "Mermaid",
    address: "126gTJ1q3eJE8fFVjCqkfmz7KKr9g6rZSARXE2yeT1PRpFzj",
  },
  {
    username: "Erik",
    address: "1BwTXhCMc2yCAkdTRbfQEHGZt6t6wxN2t2HvgSupRhVoHKn",
  },
  {
    username: "LocalCoinSwap",
    address: "126ehG4n9BkmV8HKtQUqBHoTCwv5ogPA7F8X7giJrXZqA6Hs",
  },
  {
    username: "SaitamaCoder | OpenGuild",
    address: "15ybWhFYvzEtwgVhHiyUUFQ3DUnDz79Z8KmGogYZZ21ffBbe",
  },
  {
    username: "ValidOrange",
    address: "1srcFWVcPn2oXEKuddMMTGCLQMDdRqxKKo9qpFTi8PA7NW1",
  },
  {
    username: "McookBali",
    address: "12KirSAXGa9JW6BE4aHeRfeJ7LrnxjgqLWtDdDek7xUZEbWs",
  },
  {
    username: "Ninja",
    address: "14dninjaCh6YAn8qomDY67ZomeVp8sbzytbvd7jghQ7ek6xJ",
  },
  {
    username: "MoonMission",
    address: "14gQ2F6dkXCdh33rHgoQrVUD7iAgtARScsWb9cwPScNPriCH",
  },
  {
    username: "Polkascan Foundation",
    address: "13eDnpY969xLyu7NgnV9bVg5s9dcrq1UyQn7wAuDXxtYyKA6",
  },
  {
    username: "Lucames",
    address: "1RQDtTDM2aysTqymTRPdnzA7Q4BBk3AtmpAMzCfkZJcWY2t",
  },
  {
    username: "Anubi Digital Main Identity",
    address: "152vkf7YgriaLktcR2nyxMmXt1K5m47rLafs5PXiRhYfRpZq",
  },
  {
    username: "Cyphertux",
    address: "16CdFCzMCvYPqNpeZNNXRq5Zxpxfh8WGFvbkVUH7sFzcuxd1",
  },
  {
    username: "Voltere Capital Management",
    address: "12mfNRfi8GzohVT9LUvffZZzBoJVsQNwoGDVGtKLVMyLrqaq",
  },
  {
    username: "IOSG Ventures",
    address: "1RG5T6zGY4XovW75mTgpH6Bx7Y6uwwMmPToMCJSdMwdm4EW",
  },
  {
    username: "Quintos",
    address: "14XiRApydNhzH1z3uPsNBp9Av423vBf4DYCi8Zoyb4fqm8Si",
  },
  {
    username: "0x5375706572636f6c6f6e7920d0a16f72702e",
    address: "14QZaDL6Pj8TWdjoe2honAsoVKSytSc74rNcTZxfnJqSwaxc",
  },
  {
    username: "PROOF.COMPUTER",
    address: "1Chd8YNhBkHiUcdLwQetjYu11mw9TweJ8tY6ySew8RjVB2Q",
  },
  {
    username: "8BTC",
    address: "146GTTVAZhU8epotD6ymKpRfhUwVLYrhL8Ho28LVeox4GrWC",
  },
  {
    username: "AxelYTOK",
    address: "13TL5bKA4dH5xss8x7Kidwp5gWxucx3utDxv5WGyoqaNVkEd",
  },
  {
    username: "GiorgeAbdala",
    address: "16XUE2ByWUV3xU3Lmpi2fiba122ZgnARFZcHyY7QxXB468uv",
  },
  {
    username: "Parity Data",
    address: "12pDATAH2rCakrYjo6UoYFtmTEUpSyePTum8U5x9QdySZuqn",
  },
  {
    username: "W3F",
    address: "12Ysqhvb4EiqgEpjXG9EK1hQbVFXxKF7JQYCvdQ4TQKg6AD7",
  },
  {
    username: "8BTC-POOL/01",
    address: "12wq5igYKEo7ji9YNufBEFLAXBHjLd8fLP8xp9EuvBCXuSQ7",
  },
  {
    username: "PolkaDot 1",
    address: "15cUqssxDn62EwqfDHiRVfSyzAFzDGPpEf7JSVJa1Qq2XBj3",
  },
  {
    username: "POLKADOT-BRAZIL-EVENTS",
    address: "15DCme2GJxLz5yBeD3tkz5JFVtRyrBT7pham9aMGGT62yh3c",
  },
  {
    username: "0xf09f8f942048454c494b4f4e20f09f8f94",
    address: "15fTH34bbKGMUjF1bLmTqxPYgpg481imThwhWcQfCyktyBzL",
  },
  {
    username: "MIDAS",
    address: "131PZkz6A4fCFsXnefPnQwn5To6gvJFoit2boavU6ryUQoNE",
  },
  {
    username: "BINANCE_STAKE_9",
    address: "114SUbKCXjmb9czpWTtS3JANSmNRwVa4mmsMrWYpRG1kDH5",
  },
  {
    username: "0x624c64204e6f646573207c20f09f988e436861645374616b654b696e67",
    address: "12bLdVAgWiKHgFHtAaQstasMUWVq35oG9iwHCwsKoFFNoNrk",
  },
  {
    username: "Polkausd.io",
    address: "188VVDcWWViDEhQhzvTm7TMJbaHdcNdhTVusNdmkS3gqbnb",
  },
  {
    username: "eclesiomelo",
    address: "14Ak9rrF6RKHHoLLRUYMnzcvvi1t8E1yAMa7tcmiwUfaqzYK",
  },
  {
    username: "Wetez-2",
    address: "153MsfA5aAuSdFQZgZiyySFjAVnqFG1NFwSaGWRGwUKzTQHh",
  },
  {
    username: "Hao",
    address: "14MW3ETG74JaCxUm8zdR5EnwtJQ6JGf5ENyc3aJwD6qMVQNY",
  },
  {
    username: "damsky",
    address: "15VmrRmgPhKMfBanjS5ei4dCcVL54GMLCfnVRryynSYzvyys",
  },
  {
    username: "Anti-Scam Team Executive",
    address: "13kCjagdWVVtudeVPqjhtstdT9UF4yW2Yq47ZBNXv4pkN4jF",
  },
  {
    username: "Bit.Country & Metaverse.Network",
    address: "145pnHaR3yQ1RDtBNxcUgfqKL5Za8zzoGnrEzfoKoV4zxjQa",
  },
  {
    username: "Yann Morpheus",
    address: "14p7kSq3Pic4rGfZWJTpM9ZiHQEw6uncbUdKmMEi2TL4zoCy",
  },
  {
    username: "digitalghost",
    address: "13jagnVH4vS6a5XD1xixGA4zUxgjkZ9h8dbQDVCDZYR6rS9m",
  },
  {
    username: "0xe29d84e29d84e29d84efb88f",
    address: "15FhSUBXB9ExXFJYgMyUaPD9S1xTEEHoWCnjCsCAsiAKnf6h",
  },
  {
    username: "Kheops",
    address: "13ezbfrX5PRUAozxBmjV3L3kxX7qtPgkgEfEiuyB6S5MTxfm",
  },
  {
    username: "Adil-Dot",
    address: "164w6eE1xo5z15rmVxSwmW8fPkieaPPDzCCkJvkV7fXbFCGB",
  },
  {
    username: "Figment 1",
    address: "12YFWxpS32wTZq4HcH28HMR5atkGhxzfD7aNjhTCu5Vyz9J9",
  },
  {
    username: "Ursula | W3F",
    address: "14refvWrHTL3DHp9cwkbmpaEoFgUkVSJDg5RCEr6XrGEtrcR",
  },
  {
    username: "Magnet",
    address: "15mAbCUcBa7jT8Rak8j7hC5w9jUM8b7LFUuhp9nENqmtehLn",
  },
  {
    username: "popouloss",
    address: "15fvkNHwW8DM53AjyNL69xk3w8d9PGcCFBmoZMcLNyk5T4kL",
  },
  {
    username: "Acai",
    address: "13bhPxUe4HFkY8WZfWh2Db4yB3nWdKUx1DXwc927pfT1iaGs",
  },
  {
    username: "Satoyama #1 DOT",
    address: "1HoW4PrrgAXXMJ1rMWpE2Gf4w1ipLhsntDJqRS1Qv5fgnuF",
  },
  {
    username: "toeng",
    address: "13mKJqr2xdZRGq4ZG6kspMFbyqiGRyr1JKq3mwXadS72tPdc",
  },
  {
    username: "bee344",
    address: "151S1YrZd4zfUYCeWhNERkGdmom8kdqAtRqtHwh9HYMTfFYJ",
  },
  {
    username: "SK",
    address: "16MfNGBxJetj7k4sbePCknMqVWNFxVghhyqJYKxKKj7sQwCZ",
  },
  {
    username: "BANXA",
    address: "19bsWyxxQs5o2bpAABJD3cRtkRUBqUHZJiyq2zv31jQFRzG",
  },
  {
    username: "Tin",
    address: "19nSqFQorfF2HxD3oBzWM3oCh4SaCRKWt1yvmgaPYGCo71J",
  },
  {
    username: "Regency-015",
    address: "15fgjPH7E4atqGwCidPKmWL4aqDNf11JuvXWfCEfxBmczA2h",
  },
  {
    username: "dothub-1",
    address: "13fqhWQCqTHTPbU1fyvbz9Ua3NC47fVVexYuNQRBwpSeZyKM",
  },
  {
    username: "DOTBDBounty",
    address: "162knnaCvCv9Z38rAFB88N6n6ugu8oH8obzfHXhcrNK6pasb",
  },
  {
    username: "P2P.ORG",
    address: "14QBQABMSFBsT3pDTaEQdshq7ZLmhzKiae2weZH45pw5ErYu",
  },
  {
    username: "DottyDreamer",
    address: "142H5Qn7HHfkd3r4s5wdQwt3sJMw3aiUK96495Rbr91Ewnzf",
  },
  {
    username: "Nguyen Khanh",
    address: "158TyXSiLhF2r8t8uMN2WE829EebbJq3oQWMnE8Ddfs96JdZ",
  },
  {
    username: "swenthebuilder",
    address: "12F4tc8yuGc5pZsbbPNS4TEwpDr7td8rMvnVyPQFxQnskqTk",
  },
  {
    username: "The Ionian Group",
    address: "12His7t3EJ38tjdBbivUzWQeaNCLKfMqtKp1Ed3xHMyCE9N3",
  },
  {
    username: "Ernih",
    address: "15AZxmt271W7YBo41JrxCYJHqdXhyrXsHhm5paFkd5GpreGP",
  },
  {
    username: "Dolkadot",
    address: "13xBgUxExJtiQkDNwmkXf9tp1ceimmvLzketirkR3gCFbDfN",
  },
  {
    username: "Phil Mitchell",
    address: "16UJiifTmQzh9jxsVVGGSPDgFNVHoYVgFkikhDYDUryTG9h5",
  },
  {
    username: "PSC",
    address: "14dHJ7cSnhqNyKBjxtAANLxs1o7ep7AMULveLFR8jwsP9tJH",
  },
  {
    username: "Rish",
    address: "155G4q3yS7gW933PrdxrY4ersg2YhqWUnGC8GUd7NWiZwuKj",
  },
  {
    username: "Dubstard",
    address: "15iZD84rHAjuvaiKXBj2YAEPRJ8Tt4VS1M79HsYhieTvtJR4",
  },
  {
    username: "Serpacrypto",
    address: "13KyVCx6xsEgxbnNDCLCkTzsdZNmCwh1L6Bw86bGWuHcBQ1Z",
  },
  {
    username: "Joao Hazim",
    address: "1711wfudVXBiysQewWeHwjeB2rzijyc7q49aRNUF3BFzTKA",
  },
  {
    username: "giottodf",
    address: "1EpEiYpWRAWmte4oPLtR5B1TZFxcBShBdjK4X9wWnq2KfLK",
  },
  {
    username: "Eric ~Distractive~",
    address: "14Mz1DSFfXB9gFVzHxZMjUDzS3eWy5eLfhZd6xKix8YrHLQk",
  },
  {
    username: "IBC Group",
    address: "14j9cWtbvYid754crk6ieQABGYHtGZozzeavT1jc11bt32ZM",
  },
  {
    username: "PARACHAINS.INFO",
    address: "1pzhyYR9gLk3GmwRtQESLkJCUXazFsAESgcbTRLc9q9hNuy",
  },
  {
    username: "GoOpen",
    address: "16VVNbc4m6aUxwaVwgRra6Ue7fMNGcRQHTFo1TqxmnCyuwwn",
  },
  {
    username: "Flez",
    address: "1haHsRuCUCkbkPRmSrnfP8ps6cTaR2b5JCU5uNPUbxsVPbf",
  },
  {
    username: "Nimit",
    address: "14kMJJaVisyWvPKn3WMhuf5oBwmGmt2mse7MLmKAeNitBnUe",
  },
  {
    username: "0xf09f8c9020646563656e747261444f542e636f6d20f09f8c90",
    address: "15wznkm7fMaJLFaw7B8KrJWkNcWsDziyTKVjrpPhRLMyXsr5",
  },
  {
    username: "Denis Sukhoverkhov",
    address: "16Q4rw9wRK3pEzDr8esaZVJuEUvrEoJByHxsyPh8zKxrM9AT",
  },
  {
    username: "Regency-019",
    address: "13uNh2ZnXCjTxCppYJ1FyM2y6vyfzVU4ZXumotG5vxSmzpa",
  },
  {
    username: "Chorus One",
    address: "121GBc2ZK53Uoc6JovJjU7zARH8fys5efyUfHKT9vABpqajx",
  },
  {
    username: "vikiival",
    address: "14BZFbYEGoWWPjbbZUdLZ1TqDtdXvdeCy3R3t4QXqJmS91Dx",
  },
  {
    username: "Luminar",
    address: "12s2TEVT1oa5fLsToz6cS1NHHAm2BP2HqN294xXFt2igRQP9",
  },
  {
    username: "Patrik EB",
    address: "15MNrx7H7DBUHQy5sBQVFW8uLB7UmaxSwQmxATY7dyh579DH",
  },
  {
    username: "DCENTRALESTHER",
    address: "13Y9hMwUQjnLC4KqyahMUt288m5fDw6aqPAQDRdhvFjk7gRm",
  },
  {
    username: "Wiseadvice",
    address: "131JKfT9kNvKjp5NJY2jHZmb32wjbr6xDHuCt4zHapWVtDde",
  },
  {
    username: "DelegaNetworks",
    address: "167ougbhWjMc5Qj4LPJBhonfQYHFgDYnytRKxA7QgzyguLQ3",
  },
  {
    username: "Domen Ursic",
    address: "1e4xegGVKr2vteuqp5rYkKChVHfE6cLbckRgi9GRrmfZLP7",
  },
  {
    username: "usermane1",
    address: "11sCTDgrGYdDwHCvgfJiL7p5WKGVpFxuLqEnsqzozPLbNZL",
  },
  {
    username: "zco",
    address: "14bEb9zTANKmewmvfvPiaE3FYjAtL56WLgq1H6VpiVoG7oqq",
  },
  {
    username: "Market Mobster",
    address: "13mEX6UD8t4L8YfsUxE8QjYFDkfEkAg2QpKWqKEfg5gZw3et",
  },
  {
    username: "Darwinia Network",
    address: "14Coka5wUrj4fE1aRuMF8aEPEZr3DnSFiXeA9Yz2AHFsqQdv",
  },
  {
    username: "Cointelegraph",
    address: "1k5ddMCPuLbu9Hax12EdKRmPwGigUKQW1ab6tRAWPxKygRF",
  },
  {
    username: "Nikolas",
    address: "12y36qHkjj83MP4pEZiycf8Cee62cjV1szkT3EBSWLHMiX5L",
  },
  {
    username: "0x5354414b452048554c4bf09f91bd",
    address: "1zkynXdGj8p2JbXR7CesPuhbJvZt4G8k8T8q2jYgoattgKy",
  },
  {
    username: "DLINODES",
    address: "12E3MBEUq2wiidX318qjPxjarwuYxBbseCK31TMxNhC3k9mV",
  },
  {
    username: "Mimir",
    address: "12KXpejnUXsvmUpgQe5Jc5uQZ1efD4UrXf3F4cfTP8N21XEB",
  },
  {
    username: "Klever",
    address: "155TwLQ6grNmwvV5NmN8SQhtADrPUyxbTGZkUHn3Peu7o93q",
  },
  {
    username: "X2_by_Lily&Michelle",
    address: "15JSrutLfp6MwsiuzxJxXxwrBMfEJYwNmy89PKycd5ca9eW3",
  },
  {
    username: "Encode Club",
    address: "16kkgkzjyJZL91WaL6GAUJnTZjiaowZcFyHAs5GWCNVqJimJ",
  },
  {
    username: "SupermaNZ",
    address: "14YDMT9GSPjSjrB3E8aWKtE8nCoweEqh5qFvV5mtx2DNEi3G",
  },
  {
    username: "HwakTua",
    address: "13zvRDqcZm2M5ZtoYHSrqwYDfcG7QBUjdWPcPo5wbnKMCNrq",
  },
  {
    username: "KIRA Staking",
    address: "12inuzuNAWJGds6xin6vSHMUZFyghBT1vNTnSpej1J8RLD9b",
  },
  {
    username: "Patrizia | ANAMIX",
    address: "1AnamB4ZknHy7knpqevWFjQ7kWtdqLBFWie3AdBZaadEUUV",
  },
  {
    username: "INFRASTRUCTURE CORPORATION",
    address: "16fbkDCMrAo1uyC52NyA8Y2dETnYVpCofSoj3QEE2WUNnkLk",
  },
  {
    username: "Nick Shulhin",
    address: "16ZizFFPb2LKfa9oXvytXj4hxii4yWaBEFMkPwu6yruH1vLQ",
  },
  {
    username: "1gn0r4nd",
    address: "13uuCeyenBHFGU3VNemLEY97WZVSXw9KXv8AJG6VEx32MBfg",
  },
  {
    username: "GRB Trader DOT",
    address: "15VS6Thk1iJDGmPRHdKPijEaxHW6gKtRAMKBwHYbzgvUVHDE",
  },
  {
    username: "code0xff",
    address: "1EdMx5AVyexg5u423engYzg6PHieTmMPSc98t8u7VfH3tti",
  },
  {
    username: "playproject.io",
    address: "12VpEWKJVwxRiDd8qjNAyEijS3CuhBDhiYnhLJc7ANfqmVJM",
  },
  {
    username: "ChaosDAO OpenGov",
    address: "13EyMuuDHwtq5RD6w3psCJ9WvJFZzDDion6Fd2FVAqxz1g7K",
  },
  {
    username: "SD-DOT",
    address: "13Z26YuZad5PpWqkQMwXii7vdnXV856T9Mpw2czVcM8WXaf2",
  },
  {
    username: "Rust Syndicate",
    address: "16Ziip8mK44sh7uKFkZgHbapxoKrRxriZaDdzqNAPW9Wr6x4",
  },
  {
    username: "Richlyn",
    address: "14gasFzu7FswViqdWWCs5FsBBx3xBDomy39LScwqxRMV4VYD",
  },
  {
    username: "EB CURATORS PP",
    address: "138zn7kQePVm4P1GuCzPLNtcyyAErZzxLiQkT9KhqrVAmF6s",
  },
  {
    username: "Kuzo",
    address: "1bG5MdYcqMX8RdBHmgtkDv2qW6GM8iCQhwTkvw9SAo93QSr",
  },
  {
    username: "Mark",
    address: "16mCcowZacAdg1vw5oDxpwrk8EhRAVfZhCLB6W9vwxet8zkc",
  },
  {
    username: "Dan Comics",
    address: "146QGW8pfQGpusDwEpyvBsMHia4FEPJSM7ovVzjaNuUF4jMk",
  },
  {
    username: "h4x@phala",
    address: "12BZFbrNksTKwHtaBojnVtoN8BoXKmBFzT3xDnHh7P9t2Cg5",
  },
  {
    username: "polkaworld",
    address: "12mP4sjCfKbDyMRAEyLpkeHeoYtS5USY4x34n9NMwQrcEyoh",
  },
  {
    username: "Gucci",
    address: "14mTrnTQSNGTDWu5mCRVYJrf4fjfrXbFgWkYQT9FcmPyTc2K",
  },
  {
    username: "ORML Security Bounty Curator",
    address: "13f2dPGgzj33ARCdKCQsCZ19JfCDUfsNqoAphVjASCMbZgBc",
  },
  {
    username: "Kirill_new",
    address: "14dNe5T3dL71EyfPfZBWrr4EZipGrHp8CEiGDRRttZhuSNrG",
  },
  {
    username: "seadanda",
    address: "142zGifFwRrDbFLJD7LvbyoHQAqDaXeHjkxJbUVwmDYBD7Gf",
  },
  {
    username: "hispanicJamCollective",
    address: "13StobwMokjUy5QdkqZxzWJKC1Dmb4SeDL2qYJL3ot6KBGVt",
  },
  {
    username: "Phala Network",
    address: "1zunQTaRifL1XULrRLPgSbf6YbkZnjeJiQfwZuxVoJR5mhA",
  },
  {
    username: "lolmcshizz",
    address: "149AQApEw4Xe1DxWesqywiuGQHazbETMgWgT89WjEYFAc29y",
  },
  {
    username: "XaaS_DOT",
    address: "1555YLuhmVE6oJUXVW7Ppi2ZT1svxwpuxePkd6NR4J9FMDXz",
  },
  {
    username: "IBC Media",
    address: "12NCX9ZK1z9fxBfRraD6L4V86EmPipSerHnPcsj1k4hSkszg",
  },
  {
    username: "IVYNETWORK.IO",
    address: "16FGsSq3GCRZ31pA6gphPGXDwTr6zv8deSpLQz9zrvGWPe6s",
  },
  {
    username: "Capt-Harlock",
    address: "14iiE8EesDdrkECugNLZkJa7Vb9NfYTbq1VEkKumpMVUB9iC",
  },
  {
    username: "RegionX",
    address: "15GRnWczqvcR34dE9YipNQDyWEPFCeeAkw1Xrv8vig3G3BSx",
  },
  {
    username: "Dylan",
    address: "12zZQ8YQR4cCECtPeRnjJyztTknUDi6BARXCXGvTK97bnfF7",
  },
  {
    username: "DOT Games Bounty Curator",
    address: "14ha2Z2CGmDjWCk26fbJLnpimS8faPxrFpYEGkAqv3WqFZHi",
  },
  {
    username: "Miguel Marques",
    address: "16CkbzjYiDyDouGZn1y5diYLueqqNQHScFEA7XkK4Mmcj2Mx",
  },
  {
    username: "SYSTEM COLLATOR PURE PROXY",
    address: "15NCSvkYjtf2G1fvtYVnLCSPmKiZk3ReX1AUWsSDD5ocFVXa",
  },
  {
    username: "CCTF",
    address: "123LuJKS65HaBbLSdDS46ByeC7bvQwA1iUhTpmjigQAfUKpK",
  },
  {
    username: "Gonzalo",
    address: "1norZrwdXvhDhS84ncT4QfuVfvS52riCzXMWyNTdV3AeoKm",
  },
  {
    username: "WOOKY&WONKY",
    address: "15kWiCvrrAk1YtFrt79GvkgfPVuuVJ1bSTkKjp9Kq21BQkke",
  },
  {
    username: "Lakers DOT",
    address: "13HAVbU6qp8Vi47xZDphwSiMxodYe3195pUCW1rLd5NNg5B3",
  },
  {
    username: "0x50726f5374616b6572732e636f6d20f09f928e",
    address: "12R2eXcE2QhMa9BkMsWktt9wmoxbgiQBDG9YUM1p94r2F5UD",
  },
  {
    username: "Regency-005",
    address: "13sTRwHuZzogXe42d2MjhYLVvsn38Rw7XJ6n2m4mV1qTxAxP",
  },
  {
    username: "Messi",
    address: "16AYdxRVgY3WM5Ae4BaMM6euKD9VB1YaifE7Ci1cjRHJeWh7",
  },
  {
    username: "Bruno Galvao",
    address: "15zQrNY9ifgDvccXCgyNPeA9f5RDzpLAG8S4XBVeCPJgYRd1",
  },
  {
    username: "jammars",
    address: "14Q5Xm2fkh4tKeQ36Vi4S6UwxY1ZS2bjcgNmuSefHWiV566M",
  },
  {
    username: "Bavovna",
    address: "15d9ncJDy5epSAXgXYhaF3AV38naGTe7cQXFv7MBkkmSfdjC",
  },
  {
    username: "Pedro777",
    address: "14QLoJzkneWvzWcLKXnnr32h9q66Cp8KyWSQvwhfxqpbNRh5",
  },
  {
    username: "Jay Chrawnna",
    address: "12WWjrZGuVxyk5AyFeDGaN45J1FJ6MesXRxhmY41rhKxL961",
  },
  {
    username: "KILN",
    address: "1nXBtBPt3PV35m7Dfgp32xXgrC9tm1Pw7Hk7MDuGAejvB7J",
  },
  {
    username: "Sio34",
    address: "16DJbUVKFJp6igLoDxCTPesE2DMgMmiawLXG9jsGpYNTshxt",
  },
  {
    username: "Grabber",
    address: "15o1XU78WqGtRY8QC7AVmSr6t83nVYFhHdDXRKc6HhKNPVjM",
  },
  {
    username: "0x466f72626f6c6520f09f8ea0",
    address: "12L5PhJ2CT4MujSXoHTsBRZHQym4e6WYRhpAkgNWSwAnjZTf",
  },
  {
    username: "NOTARASPBERRYPI",
    address: "15D9vUtZLkCBBqq24134ae11TBEHzwGkaLhAwse7n4ieSxv7",
  },
  {
    username: "deigenvektor.io",
    address: "1guBaaUmYpYPmsNmooQApqFmpmRHeaipb1CxoncMuiaqXGh",
  },
  {
    username: "STAKE.SU",
    address: "139QbuAjCagwpeuNUcp4Wr7HKG8wokviBrenhQr3iucqtyou",
  },
  {
    username: "Afri",
    address: "1dvvq2sZg55LfLqFmegU493oUaPWxJfjiYysP1eyovkX6hP",
  },
  {
    username: "PAL Curator",
    address: "167dwA1UDmWSBRrFd9dXqXjdk1NRhqVjenT2FbHGDyy44GjS",
  },
  {
    username: "remidot",
    address: "156EyQbGr7APBt2XzTvTpA6sWLWSm54dwqzUEcGFkbodohF3",
  },
  {
    username: "Prince",
    address: "1AbEyjmDkAXxhs4BvbRmPjXiXiW7rGqH55K8PLcP6aCAz4k",
  },
  {
    username: "POLKADOT MAC",
    address: "14tfHvRGD6VaVFGNffATo78JNPx5oxvGaSk7CacU9UpNbu7K",
  },
  {
    username: "cesar",
    address: "1TtCbdG7LjYwry8bYK6zV3xq2XAnXod4jf2htxH2NE1Wf2Q",
  },
  {
    username: "KCC_3",
    address: "1639FjZ7nH9ZHHLZ61FUTtZ96YbUh17BJYLrYduEpxXkxubM",
  },
  {
    username: "ROTKO.NET",
    address: "1Qrotkokp6taAeLThuwgzR7Mu3YQonZohwrzixwGnrD1QDT",
  },
  {
    username: "Kirill_THE General",
    address: "12pvGeKSWHt89gNdsYJmBCamksNPDoQxqJh4jnyH6F5LHYeX",
  },
  {
    username: "Alianza Hispana",
    address: "14hKbFVLgZHNAWTQ51Q315Jm1HVEoDt6DMt4L83y2BW5ZvPL",
  },
  {
    username: "Arcem Maris",
    address: "13iq4ERZZSj7a9586kkNrhWz9wMzvsRT5UhciqmRTPt7q4pQ",
  },
  {
    username: "Greg Zaitsev",
    address: "14fQyjgBWwApp4UCgjeBSN9kRuatUo9FgYd5HR17AncjoW6C",
  },
  {
    username: "Valerii",
    address: "14AgW94AL6BKn5jzzcTdG6d9jTTvKbPMVL9qoGmhisFxSa4v",
  },
  {
    username: "14WEB",
    address: "13mox8V6gQLz88byvE35SFugcwfbBR1BnN56GiaVJCRfid41",
  },
  {
    username: "Tesla",
    address: "15tfUt4iQNjMyhZiJGBf4EpETE2KqtW1nfJwbBT1MvWjvcK9",
  },
  {
    username: "0xe2999e47616d655468656f7279e2999c",
    address: "13Srw7dVtGJnZrV3o6RCAJ97MaGbSKShQQiSYjbGp4Jvu4Cs",
  },
  {
    username: "Fibo",
    address: "141335Nzrxe7rowuiHdvLsNZsD5zN1mumxoEzXQNAnh4VEw6",
  },
  {
    username: "Louise W. Reed",
    address: "1URnYqxHkdLRT6nssbgM79kRZRy9fLqaHqiHHFij3SLJNwB",
  },
  {
    username: "Hersh",
    address: "13GK5ByK9ycU3NgygdAMu1VgCGxaG5iwhxjryAmybgwhsyp8",
  },
  {
    username: "0x47c3bc726b616e",
    address: "13dSmAn8tVAscZh1HhcQuVPn33ddNCGwsRbagwCemyiokxEN",
  },
  {
    username: "shamb0",
    address: "14Ger24FeQunPmP4KJsxFHCrxHSrp5yJqT2E1JQbfZoDsxkw",
  },
  {
    username: "Polkadot Agent",
    address: "15tHDdPic4Dy1cdNYH1azAWmC72iLarkmhPncXTL18aBQbMt",
  },
  {
    username: "UT Fintech Lab",
    address: "1uvodkTYJDYbdBEX8qVuW79fo4g9KQyE3dd8b6x3ZbR4ept",
  },
  {
    username: "Nat-Dot",
    address: "12N88W6MXsGYoQDvDKguBHPPsqpD9y2eM7CPAqZ59m7tTgCW",
  },
  {
    username: "Elodie | W3F",
    address: "13QA4oQ9zcD11DmS4fFKtd54Erj15fafQmhUu8kjEW28oBZo",
  },
  {
    username: "0xf09f928e20537061726b6c696e6720426c6f636b636861696e20f09f92bc",
    address: "12TKk9nmGPh5ZWRqLaiDaXWRnLJtG2ui2NehNMPZcWaw75PB",
  },
  {
    username: "PolkaDot CrowdLoans",
    address: "15SDQsJUPy5xCi3iDBEBNkjC1FX7n5zLEApbC1QVNZbCTmjd",
  },
  {
    username: "Method.gg",
    address: "14tgusPihhhMRx3aNWjboesaziu967fm8kT1FVj1pEaAk8oH",
  },
  {
    username: "Doinglifewell",
    address: "13zuZu7sZXx6tKkqVRwN6Gq8jVS5eE9y6a6AwYAZN6MyVD4L",
  },
  {
    username: "AssetX",
    address: "14iULn6TYRmawsxazqR2xwWVuyDXc8ycGjg7ppJ15qVKctEN",
  },
  {
    username: "0xf09f97bb4261736563616d70",
    address: "14rVET8EcqCam4wQFVeRYZnXMSMFnRb5zNTZyjo6XG1o23po",
  },
  {
    username: "Zeke",
    address: "135up2vuEZDo8x2uYEmX5mJjLsDFGaA4pXcGfDhRVsJmwZpB",
  },
  {
    username: "Transistor",
    address: "14333MZvbGkcq5CZ8fYHZiFYwHNDaW3uiErDKMb7oqnupWXn",
  },
  {
    username: "advericky",
    address: "13Z4LJVNcm4UcRfTAPWrYYRd7tGEfAeZfECFoMjsovc72kue",
  },
  {
    username: "DappForce MS",
    address: "1BEEwTKwbKDMxRP3mXySaQePc41qppZAgnBXB2CKw9GHSqc",
  },
  {
    username: "Polkadot - PC Gamer",
    address: "12qB6x977u17CwJHoBrQ1Zb8iATCMzt8BzGkP23tbDkvS3Sn",
  },
  {
    username: "KampeSigner",
    address: "16A8pY4R66ith1gCsi7X31A9uApsJoXETGbyE9YwPotHAo9q",
  },
  {
    username: "Denis_P",
    address: "12W9HGfXiqq6UnhGYZh1sVqcbv85npvqvvdU9PYdcJBgqrb8",
  },
  {
    username: "Metakovan",
    address: "155HWw3J9jyYphMm5is4vp9Bzj7ZRRd6HEzCPdWd8cq97KfT",
  },
  {
    username: "DEDCAPS",
    address: "16V4Hdz4FJpQNbXeVP8d75uj2zfpGPJA6xypuXyTvo9FRfjH",
  },
  {
    username: "PolkaIdentity - QA",
    address: "13DYgUBFvaSiks5zvpAdzAdvrzMk7JZo4PZKy2VCfFfghsSa",
  },
  {
    username: "Topolka",
    address: "14JdzxTvG9uCwUESgw8sVV83cmaVzZwKXEchC1uW374d2pTB",
  },
  {
    username: "AEM Algorithm",
    address: "14SRX3LZNyZtTfKsKNTjreFWyEhoJp3wSWm9T3oCSvy67rrP",
  },
  {
    username: "Vitis",
    address: "1v8nuDB4ChEumFThaj7sSySR88nBDmViBJfvhWA2zqmtvY3",
  },
  {
    username: "Scorechain",
    address: "154HtzVpZK6t4wkdB4kSoc5Ejd23H5HKmXeZ3KU6N2Hfb4fM",
  },
  {
    username: "Jackytaurus",
    address: "1UJ1E4eC3REkeiXyiHFGTfnyCZFAJb9BS5NjnajCNeeVgPQ",
  },
  {
    username: "mad_angle",
    address: "14K6j3qgcChhnojhjVTyzjjWnR4ywiTs53LpEYLvFc4JQJoo",
  },
  {
    username: "Yokeuson",
    address: "13nREeGh8kkcN5fhxfYruap3ijD24ggb5hJfrKJxELdQAu6v",
  },
  {
    username: "CohibaController",
    address: "12b5mHT9BxbfFAhyWkTzEJFbw5jgQAsXBuEFjq4gKzF7Sp6Y",
  },
  {
    username: "0x4219",
    address: "1zkRkpCbD2nhB6vMEwxYxAsLh5SYYXXSVmatviKSk86SFFC",
  },
  {
    username: "abwrld",
    address: "14QJRxfwPE2PwXa7WwPhwPbSfm14LoND3MPyd7ZmJkvZfDc",
  },
  {
    username: "Daredevil3x7",
    address: "15u2URLfGwYwLkhYXU3j3DQn85D62t4feafJFNsekKERCj25",
  },
  {
    username: "Kratist0s",
    address: "1vYC9dziqQmAqoeduwbkaKMXx2FiwhpDhj7gDAPqM3t1Xyt",
  },
  {
    username: "DCENTRAL_MS",
    address: "165cZYffGD3pfuGTNDm6xSvK3wrPURu9iZyyiBiMBTsk92ia",
  },
  {
    username: "Lavender",
    address: "15cntrDWzJBDog8gL5U6ZoudiFeQwFASok9HWQU3wABj8ssp",
  },
  {
    username: "Ankan (polkadot)",
    address: "16aQgRVKfD22NehdzZD2VPoenP2hvx8RS2gUirfk6abiCies",
  },
  {
    username: "DARK_POLKADOT",
    address: "14BnTrXDZH9diqkzKNqGCf4BXG8oJRBdiKFfsRem8LYDRQy7",
  },
  {
    username: "Crystal Intelligence",
    address: "16Zn4Zn42zpgnDKDErGQWZe5EuQQxUBmv5mDoF6VQCfepCV1",
  },
  {
    username: "ARKPAR",
    address: "15G1iXDLgFyfnJ51FKq1ts44TduMyUtekvzQi9my4hgYt2hs",
  },
  {
    username: "kanishka Rajput",
    address: "1KcAfVhEhQEdcoVnRUsAkym2sP4td3JuAVVf5QBGrMuvU4E",
  },
  {
    username: "Menilik",
    address: "1R47BQXKguCHASHYPYyXgkiD3uepGADm715mgZxZ9aNccAL",
  },
  {
    username: "Luganodes",
    address: "1vTaLKEyj2Wn9xEkUGixBkVXJAd4pzDgXzz9CuVjhVqhHRQ",
  },
  {
    username: "COINSIDER",
    address: "16B44UW3iW8MBb7vHACpKriF7NNQ9cw4YMPT5n6wYJzfGySY",
  },
  {
    username: "cryptomak",
    address: "14dp5i9SBHxwEnbcipL72DfjeeKA3ULfy8XM5jeUhQMHTxZT",
  },
  {
    username: "Santitham",
    address: "13YLLt4PPy5yNm1WEkcKk23apHSWzeoTvjTydU1FyXAy1XfU",
  },
  {
    username: "miszka",
    address: "14T9NGF7LdCY7SK2j6oNXmB9NqfKYyrxBChUvYRjtFdvZBMo",
  },
  {
    username: "ZeroM | Edgeware DAO",
    address: "14MQxvxifWQdM1igQC1kPeYhL76rAkobdsCLVzgsY8XFsw3J",
  },
  {
    username: "DotKeeper",
    address: "12oyrzYfsjH1SMJ4oydkibQNeS6k8uzk5DbymP8YkkJpaYbF",
  },
  {
    username: "0x5473756b6920f09f8c95",
    address: "13b28EUeVmrm2sLXQcD64YrGbDqWuBUMKGNwJGrWtfNWjWu8",
  },
  {
    username: "Shumo Chu",
    address: "15yUHnjUPumSZUWsAJuDgm794kLyCPFehXrFY4uFUt18jTnV",
  },
  {
    username: "VinceCorsica",
    address: "14Pn8sUxdEMgFRDgZ5J2VfcUVMLaMQhst9XuvCj9mKJYUAN2",
  },
  {
    username: "das modular",
    address: "14G4HjbrxUovuuFE8dxW8ZEzQXJNuU8BkQYLzFUegvvyF3rp",
  },
  {
    username: "genge",
    address: "1X86frhtEw4gMeEb9xYiAyqY8SxLGApb6tekbBE9TBjhHeY",
  },
  {
    username: "Polkadot@EthTaipei_2024",
    address: "13u3eUBZyVL1yvFjXXhDizT9wtsyFMPuvgqXXExLJvDnZSP4",
  },
  {
    username: "balsells/Perdomo-parachains",
    address: "13gRsLBrnmaLQ7qy9Y2jeHm1J2E3S85RDMBU2qMzxyZ5jmmh",
  },
  {
    username: "Koto Studio",
    address: "14gKDmbN7Zd1XwnfGRLexFcj8kKMLYvD52UX3QAEzQAQJGQa",
  },
  {
    username: "spw",
    address: "15JQrpGJgowWvFceXyBkUz7tud6ZuUp1wuKkAvNmnkfSdyhp",
  },
  {
    username: "Jack Polkadot / Kusama",
    address: "15pDipDrkbvRNVV86cb1LC8TeKeFUYWRL8nw5n4tZW26xpaS",
  },
  {
    username: "Shreyas Kura Subramanya",
    address: "16DdNFc6ApxpcyHijwqitoNiNoHqpwi6F29e24HW7ACLLcWr",
  },
  {
    username: "AllinCrypto",
    address: "16GZzTYX5po7RyTvB3rkMQXpxmfdTSZ4WK7BW1xmeEb71MM7",
  },
  {
    username: "WBRob",
    address: "12Em74t53fj1f4cKBHo9b9PF7eHzAuicRGNEXs867mKQx7E2",
  },
  {
    username: "Antunes",
    address: "15Q7vaW2xGg2YCRcPpEZqkyszN9qASscBjGypXTCykPcVb18",
  },
  {
    username: "David Salami",
    address: "15PCbSw1gdtCG9fp1AdLVEQnovPh7LLYWN9krTDAZYhHirSY",
  },
  {
    username: "cryptovendimia",
    address: "12kSJsUGe6eMLqnibadLBJProwwNJBhfC3grB4yoGgkzff2U",
  },
  {
    username: "w3n:guido",
    address: "14GsaW16GVkVdMT2uUHeoDGnpKTmm5BfzsctzuEwiCLpGknX",
  },
  {
    username: "Juminstock Polkadot",
    address: "12jNpcKMqYbiDhucsr6TDrto3MdRtrBLbuDvTh3FprZeVbpb",
  },
  {
    username: "Polkadot Hungary Community",
    address: "12pzUmpZrXmfjSjRksWrKZkD8jf6UXZXWTkhmA4ccR1Seppv",
  },
  {
    username: "Aleph Zero",
    address: "14JsmkbsWrvkPVVUB6bYuvhg7gaeWgK1PsvPeZCbEqtqKJqY",
  },
  {
    username: "Janko",
    address: "14e2orP2iDXBRdSCdEF64S6J5p4343Acnmyze3hG9QMZ8g6E",
  },
  {
    username: "Polkadot iabsis gilles",
    address: "143hBV7qY6hAnfAWEPsStHSwMwindTuUjes5fcyEFLGMNiVL",
  },
  {
    username: "Sirjey1",
    address: "12itHPhSz9YKzydpCBPSxewfAJYZuReRPTP5qSuD5LPSeA41",
  },
  {
    username: "MaxCripto",
    address: "12e7u2ZtFo9Fxp3ZQhTqJHV619AyntdXwghKzkyWk4XFU4Sj",
  },
  {
    username: "lunar dot",
    address: "14bRuBdznUir8FjDMwHSCs4HTqmTu5TaNZt9uq2bZjZgkvgz",
  },
  {
    username: "ALEJANDRO",
    address: "1A13Vuern2hQMFHFxDP9vngPtfjnpnVyCiXgYpaiTYo8qFb",
  },
  {
    username: "Hanwen",
    address: "12EhrWGTAEEjETcQhwvus22bYMoDC7iDsnyroD2gSdM9EsK7",
  },
  {
    username: "Andredylan",
    address: "1pXxXV9GSQwW8m55EyLhfiKiyywb9xJhnZUqHYFBn7kaYgn",
  },
  {
    username: "Supercomputing Systems",
    address: "14mY9eUFJT615yWz2G7x4NP53svJVXvTzdpWDsmaXFAN7uYN",
  },
  {
    username: "Rich",
    address: "12ZTSu9FN6i6afq97mX3FPQtH4PUqyN76qZsCP9hntyGXsHL",
  },
  {
    username: "Carpediem",
    address: "1Ca67ishxZSALwT22bdtEsev5UFnhqwoomnRpqGepUoDb73",
  },
  {
    username: "ordian",
    address: "13aYUFHB3umoPoxBEAHSv451iR3RpsNi3t5yBZjX2trCtTp6",
  },
  {
    username: "Avata",
    address: "13pd2joefHGNxvma5H61q9Ftx5bWjUzxQv93XCvyRjvYsCaF",
  },
  {
    username: "Jonatan Stash",
    address: "15qxKEpfv81Dy61kR4ACoAuq7hAxyBVaRDZtCjRRWci9dLZz",
  },
  {
    username: "Iggy",
    address: "16aHWgXxf7wvGBN2M5DHbxRjX96eQYHZdbUKEUgJrx8u46jC",
  },
  {
    username: "Teke2.0",
    address: "13TLpsWs2t2e6iWh9JCSqv3gEjgmBMWdfKPo3UMQeaqLap4k",
  },
  {
    username: "StakingTeam",
    address: "1567ec4zAYzqaSyashaepeUNpDwDJemWSYV8PsPVGukLFHuF",
  },
  {
    username: "0x564953494f4e5354414b4520f09f9181e2808df09f97a8",
    address: "13Hp4FEF7z7famvakw8cgioHqDxcnhnyQkvd1jF4dxn7cayG",
  },
  {
    username: "Joab Niwagaba",
    address: "13C9eaMNJPpEqEKRsEJ9P4DKxkb7XWQzeugEfdJkGdVFQPYh",
  },
  {
    username: "digitalmints",
    address: "14JduFfQDZ4cYmNoqFcfJPNetErCWYDnqCPqP1PVDz6hJZAW",
  },
  {
    username: "XiaoGong",
    address: "1341kcAXqyA5ZJHBdPoLeHsDtmqLBZ2qm5Hu7e9tDR9Jv5RM",
  },
  {
    username: "John of the priests",
    address: "15VWkg5fURyGcettxaJk6jRXcPciKqHyLCstLwdbcRHUCynK",
  },
  {
    username: "Valentina",
    address: "13wqqbKEdyNt5yHKc2dgJ8ahQDnDh3q5DXWihTcykEFGnxrr",
  },
  {
    username: "Hashed Systems",
    address: "1Hzs7WqYz2T3EcXN1L4uGLHeE3h5rUuneVkLX5qmmUUvcNo",
  },
  {
    username: "WebZero Event Bounty Proxy",
    address: "15WPvoetNGCk6EyQbCodKAZFqrs2Q4Dk9d3k3Lk2F9nsiYUK",
  },
  {
    username: "senseinode.com",
    address: "158B1DyQ2Ep5b5G4akA2mjUJeDwgZZ4Sh1ePnkGgcWrgtPMs",
  },
  {
    username: "Interlay Network",
    address: "15Vd1mF4Uf4hVdS3q72t4y9fXxDZHLkQcHe77yEU4UQ7Jp3J",
  },
  {
    username: "PBA_TIM",
    address: "1njGozmydXftj6KYFPGLPN7Qq3kgmFqxsRdF5hWJAschp1S",
  },
  {
    username: "0xf09fa590204c65204e65787573202d204f6666696365f09f8db7",
    address: "133PDYAxCB6QZniGjGsKjeY5vtb5tHXMFzxyXHRZZ2i5rWmG",
  },
  {
    username: "Talisman Pool 2",
    address: "15Xktwm2ejFDK3bG96hY4uQFTsXvdrYnGrqo4na3123NRHZF",
  },
  {
    username: "carteira polkadot",
    address: "13au2bvYpHGLZzymRPCG9RnZvLkzZfQsYCMD5g3BNXMvJPMx",
  },
  {
    username: "ink!",
    address: "13Y5LkRyHTdRLh4S28gMnNCk8DET1tZbtbdyFiwy6Kd3XMtw",
  },
  {
    username: "N4DRO",
    address: "12WKDN26GELestXjwPDKTrtwdaf5yuuNb4Guuc2VUNTCP3vr",
  },
  {
    username: "Block Bridge",
    address: "15VAuiX2YiK9eXWf3xGBjbBNTzzRXsab2DGoi4rNgCfRFWM8",
  },
  {
    username: "PQstorez",
    address: "15TJ55x2eapcCRveXy4WQdPx1UDs5Q5MWRiFPvYMh3S8kJTa",
  },
  {
    username: "lach",
    address: "16QHYxB5QeQnKiwPogig6rg26doQLo5gfVhCRxdvQQBXRjV2",
  },
  {
    username: "olanod",
    address: "15oLanodWWweiZJSoDTEBtrX7oGfq6e8ct5y5E6fVRDPhUgj",
  },
  {
    username: "[Ryu-Capital] 1",
    address: "19tg8nFvDBMLVebrmxGbgBNMkBJQX78yxamaHT3LXTkJ7km",
  },
  {
    username: "Vector",
    address: "15V9SHNJ2L8PwDMFqyAF6ye8YeogUjmsS2bDgrxULBCq22pM",
  },
  {
    username: "MoonNode",
    address: "1KSsKAbCmnAheLRMr6pQ3kUnLDhMtn3dVwwy3cSYHf5t3hz",
  },
  {
    username: "KILT Protocol",
    address: "1NL6SbcyYG46VWdavGh2ti7k81L1tKtJ7xjmtTEHRyMgdn1",
  },
  {
    username: "kaitencura",
    address: "13TZMkzb8wqkUiGyU42RKY3gkqR1WnHeGw4kqArfs1pfPD1n",
  },
  {
    username: "BrianDCENTRAL",
    address: "123q917G2WyRsCxKTa7DFotXcbKhG1b8SzNY4x2wjNaEuN49",
  },
  {
    username: "Kanishka Rajput",
    address: "13g93zrZzqEvwv8b41GGRAujLgZBMZoanXX5YRcuFyyCH8GW",
  },
  {
    username: "LAYER CAKE - 1",
    address: "135gdB6m5XsPWdtS7Np9ZTRdnMuLcR78CvyiQrHsMk8ESijp",
  },
  {
    username: "Crypthiron",
    address: "1YYfUj1jwtWmAkNuEBnrHi53NpnyKs4U8tpoRPwq18bQ3bD",
  },
  {
    username: "Zeeve",
    address: "1zhukWzj6pTskKUhDmyCaoJLuaHp5AVMDn5uLoNXTrw2gDR",
  },
  {
    username: "Sakura",
    address: "12nBxafozvdU2k4UmJ25j2i4x9qn2PjTq2B5wKiFLCi3fbL2",
  },
  {
    username: "The Core",
    address: "12um4EgFuv1mbZaFZyAtHqrs7NRLzkAFXWfCSat3c7wB6PW",
  },
  {
    username: "Menna Abuelnaga",
    address: "13s17WggweqRVAjucAqRvprBx1gbEUdr9qNimtuRepmFHRuB",
  },
  {
    username: "Anaelle LTD | Ecosystem",
    address: "14Xp8qTpNxZ1xfXHZvZMCMF14Uutn42eULPiwkC1yNHBjoaj",
  },
  {
    username: "DISC-SOFT-11",
    address: "1ChRPtPxrTfFTSWyKHtF6ASvaSjL5jqz6f68ih15zcjyM1V",
  },
  {
    username: "Coinbase",
    address: "12EvNGseaJLHmhSKnGdqsG8DC9LNpGUYXwBeU7jUengEG9EN",
  },
  {
    username: "dotpolls",
    address: "16aZQcadq4DNSedUzdcdueAUj1rJZ5DbuAD6H7uUdtHdoU6Q",
  },
  {
    username: "STRAWBERRY-DOT",
    address: "15Dp4nuSJDJknsxJ5JzTVoS4EFxS75KK9Dsokwc86yzSxe3P",
  },
  {
    username: "MIKE-Stash",
    address: "14MREGnQvsva5YJS688NWYirTLC1JYJXbtc5uQGAHZgEZkkA",
  },
  {
    username: "peiron",
    address: "12b843A8c1w4CnHNkLJxtAyMe6AjiiKvZqJ7R6kD66phq4eu",
  },
  {
    username: "Cryptor",
    address: "16k8FBUzGaAScYvewFB9g6WGt8Zms9oygPVKt7GioG4gimRp",
  },
  {
    username: "Bjorn",
    address: "14mSXQeHpF8NT1tMKu87tAbNDNjm7q9qh8hYa7BY2toNUkTo",
  },
  {
    username: "DalmaST",
    address: "16dExEGR3uiUEEVCS6Fb6bF2hamaVDqz55hax3HxSpnc88VT",
  },
  {
    username: "Polkawallet",
    address: "13wsiGW4KLNsTppsakchZLcwPm5v8yyhiLeUyVPYHu6iBByU",
  },
  {
    username: "HenryP",
    address: "16M6TdMcDL8MX4cMuCHjrLSVHcEoECwRLni5ejYdartFLUpG",
  },
  {
    username: "Crypto APIs",
    address: "16i3BhigbVdH1yY5RFcb3BHjyHDgFp8nzkqyY3EgEty6aZfN",
  },
  {
    username: "fialka.live",
    address: "14oRxBkBvuPrEba7MfwQsXEbUcHU2GJxZceRMwtCbHHgSKR4",
  },
  {
    username: "Fluffy Labs",
    address: "15fGrDWmFoaApnZXEw1Zg45zuCqpkbMS9YPzczeU9dHseUUu",
  },
  {
    username: "Bigballz",
    address: "15675AbGghWC3WtweDPCNUYKWNVgXV7k34aoAbpMLMK1tQX8",
  },
  {
    username: "Esther",
    address: "12eG9pcfYthDyqV12koahZDj3rd7J3zrWhFwwv3zXbjQRV9s",
  },
  {
    username: "ArtemisAnalytics",
    address: "155YPYJvGTseePooNoLeHRDUpiVmnn3ZA4ypWiQ8UfsrxTX7",
  },
  {
    username: "PERMANENCE DAO",
    address: "12Z96N5ANghJ59tgUXmH4EkyDPvqL9rWhTMGpBejdhQo4jhU",
  },
  {
    username: "Web3 Venture Capital",
    address: "1pbMtabBc9MNJcam4o8uHGymybvPcnkU5AGmpSmUpms7SWh",
  },
  {
    username: "Amforc",
    address: "1NUzXGv1gmdRuQ8R8SF7rFyBazRNVo5KBqTkaVkzpfxEWki",
  },
  {
    username: "0xf09faa904a75706974657220f09faa90",
    address: "13Sdv9z7kAGFmJYB5ivaBd89jLkdZyqEyigqhoqy5tXQ6ZeB",
  },
  {
    username: "PolkaPort East",
    address: "1t3rUtnBQYeEWjwyivvVgTAdnt3Ndm7rPoMtsXxqbN9zery",
  },
  {
    username: "thadouk",
    address: "14MVoyc9wtvynNCwTzDpiJK3JHW1qix24Hdxb3YwYZZS2pce",
  },
  {
    username: "malikelbay",
    address: "12ppMFPm7TKmdSYGh7uvNdDsfnbaZavM9n4UN6AZ1MBiXvyn",
  },
  {
    username: "Regency-014",
    address: "14Za9MU284jCZFuCRG71WcMmJFguciiVdBZbmy1sX27kE6M7",
  },
  {
    username: "PD Nytt",
    address: "134EtgG1kLx5vge9b4iq4MacmcEErcTh36MktdiKouWP4xK4",
  },
  {
    username: "David Semakula",
    address: "16AExTwdZnzJ4UDM1MeQ3cNuetTtFz1yrpYTaVqCNJtmeppK",
  },
  {
    username: "Stakeflow",
    address: "13K6QTYBPMUFTbhZzqToKcfCiWbt4wDPHr3rUPyUessiPR61",
  },
  {
    username: "Archisinal",
    address: "155ryKHX5BznhWfgd7nNoafRGpQrVSrJC1g9TjsiFLxNzhy3",
  },
  {
    username: "Manta Network on Polkadot",
    address: "1k9St8FDkcTVSe6HzSRQivYi3qgRuQfQp8btpVMrdTFs99S",
  },
  {
    username: "Ricardo",
    address: "158B8MEVyY8mmTkDEVR8thApMCKU2ZH9rBx527pRFfGKQPND",
  },
  {
    username: "El Pinto",
    address: "15z3y3jPtgbpngfmyPvspEHGjFoykThudRfqVF3SibHEKYXJ",
  },
  {
    username: "POWERSTAKE POLKADOT",
    address: "15wuJhnwU48jyM4zjtNuEGze7H6n7cPpWoMb2GnXCB34hHu6",
  },
  {
    username: "Rhano",
    address: "12jGZcb6M1pvmrSnpf6gy48zeiV3jJA2vrmJkE13spNQY2rN",
  },
  {
    username: "Polkagate",
    address: "17VdcY2F3WvhSLFHBGZreubzQNQ3NZzLbQsugGzHmzzprSG",
  },
  {
    username: "0xf09fa7b12053656974616e20426c6f636b20f09fa7b1",
    address: "1zkLKr5TdWi7q2CCXRychcG36knyc3cwg6UebcYbkDzdv2p",
  },
  {
    username: "LAOS Chain Foundation Member",
    address: "13zKcScTyChfVg7fHyA6KP9LxuzaJZy1Capb3xGKbcq7eP94",
  },
  {
    username: "Ognjen Aleksic",
    address: "12QzGmQfX3EGgvM7VVBaMtmcHnYLHHYgzFwUc9NUb1x7uFc7",
  },
  {
    username: "0x4d43207c204d43536572766963652e696f207cf09f92a5",
    address: "15Y5pEv8Uk1mFPeFS6aSmExsbwCVv4R3T6vnZKm7sZZTmExp",
  },
  {
    username: "CECCON",
    address: "131LkKxpwkRG5T5EWAeigiS4Kht44gjiPdvimFRBKzCojqpt",
  },
  {
    username: "Everydotorg",
    address: "1f1wZcBaJrPHkBkzx2S7KXFbjtT7KMg7fDaV47P6157KRWo",
  },
  {
    username: "Authena",
    address: "1jRbipHgJButLmid2eW5oVwSkixB56oHepMMSSoB55s3ck6",
  },
  {
    username: "Brissot",
    address: "13uB9Q86PYrJgH3GPussd6Mj2qywkmN9sZfng3n5VSAEfuWJ",
  },
  {
    username: "larknet51",
    address: "13N8PqwVxEtS1YUodHqHtWETHM27R61xDZQbPxvLvaDzp9JL",
  },
  {
    username: "Cisco",
    address: "129EYiTbv2J4LkYqRNssUfMuxNLYN8TW2LgfG1Gqyj8wCcs7",
  },
  {
    username: "HashQuark",
    address: "15BQUqtqhmqJPyvvEH5GYyWffXWKuAgoSUHuG1UeNdb8oDNT",
  },
  {
    username: "OpenZeppelin",
    address: "14PiQ7uar36zPMgEckA7qWUahYheavRL6NHCbUCkXXRNrFSc",
  },
  {
    username: "XCAstronaut",
    address: "13HNWD2bmRumQBeZJioWEC94W2LXE2ARy8u1YQF93joTjWuY",
  },
  {
    username: "Nixon Javier",
    address: "16Lcg6kZiDywR3YEHDdi6nHQhGnCYTiE2gxQ92DDQq2SZ1PQ",
  },
  {
    username: "kishansagathiya",
    address: "13DWAWRTVpkPwWdFDmtUfh73KeCWMiJqEV84xRwpg34EZt8Y",
  },
  {
    username: "ink!ubator",
    address: "14zU4FXuYU2wmi2PfXLADZW92NRYEw8nfUEvi7sqiJLafJ3A",
  },
  {
    username: "Okot joshua",
    address: "14j7N612MVBzLDw5rctvExdkF6P73uCoSdkFzdLDFJUYeb9n",
  },
  {
    username: "JuanoDOT",
    address: "12p4AgrxryBVGDST5H4M1DPbh2PXVDBeeQ58kAp3j4nULMUX",
  },
  {
    username: "Max_Cryptozilla",
    address: "126hGxZhDxWC4wD38D7yhq9GpirnNNhDQpzRzXMCMVCrH82B",
  },
  {
    username: "FH | AwesomeDot",
    address: "12uoF3PZxDBURLVqj5DAJiyUADiqdCYwhq27wAmr2ML1L7fG",
  },
  {
    username: "Gelito - Onyze",
    address: "13wxjwXtrh9Bh7gNfSUK4Jf72QjDetJnWH89MaFizjuSct1q",
  },
  {
    username: "D0tSama",
    address: "13uyGTWfV41XcJVRms9gg4xXBL3Jd7GZQgvX3XkQ1uQiKwdT",
  },
  {
    username: "Sanjeewa Silva",
    address: "13R6AmmjuipkFoR75m9w57ngGed2p5vqCZjT1K3kjf5D28mU",
  },
  {
    username: "N3MUSNeal",
    address: "13dePGJmM3SDMhndSsoAEV1V43dXD8Vtv4p2qShaP3sd9S5M",
  },
  {
    username: "Alex Heikel",
    address: "165ExvAAGpqxkLMmGP5xWxT5TLQW9ZKboAW9GRGEb1LN3abF",
  },
  {
    username: "DOT Validator Alliance DAO",
    address: "1vSN9CPVLXJWsY3JbdRU9KjAFFAx88yvEVpU1ayjnhSephy",
  },
  {
    username: "MaxDotDev",
    address: "133mtwbMChyX58eYKtaqPB9aSL1NtAwST78pPDFCzVbBM3KD",
  },
  {
    username: "Pol_Crypto",
    address: "16cfvvn4cpfjdRwg2E9nBeGAzB94HRVFRQAPfSxMuKWRcUZi",
  },
  {
    username: "BLOCKCHAINBRAD",
    address: "121frbGLAKaK45HTU3b4aXuk62Pd4maqdg7zVtir7AM7oSxv",
  },
  {
    username: "Vancouver Cannon",
    address: "12MwPeEpYHEXaD1S5U2qbDFhiX73PWuXyZnydn2S1PGErYAU",
  },
  {
    username: "yhamacnu",
    address: "156Cz3sMoXiDijCaqfoNFAaLAzCs1f7vkGGACWUamXRyAZ62",
  },
  {
    username: "0xTaylor",
    address: "15aSnCUARuwBoLYn6nkFj5ap2DUfRmKcXJaAotfVwvVQxNK3",
  },
  {
    username: "Gabo",
    address: "12auQ2MnukZEZcjQcKQcygRXerebcUuG5kvy2R95rYaUCcuR",
  },
  {
    username: "Germangleza",
    address: "1ETvJCn126mW6Ws1efnaS84iG3HpQ29dYwrYzCxPrRb9hat",
  },
  {
    username: "D4L",
    address: "1586scv8PwEsXQzE38hquzir8v5ohCvaBaH92tdGrhh57Xa7",
  },
  {
    username: "johnnykawa",
    address: "12U7BJ89vGJ6Wrxojbwvzg7PUkLqZqGzRVCf6qtdZBMW2rSN",
  },
  {
    username: "Bagpipes Org",
    address: "15iN8aQnPuX4vjcovenu15EtnYfcwbtiXjeKGRN3KkkzNNtt",
  },
  {
    username: "mio",
    address: "14BGHGL9xN7c9zq2rZz32jvYfgyUNeS2Pnrwkx3XUU2HgLvf",
  },
  {
    username: "Rosta",
    address: "1WmPE1X9Ykpb7QcVamPtUSRjEZy2GMDeTm5N72DyXYiqMCo",
  },
  {
    username: "kodadot_treasury",
    address: "13H3js2thrYVEotBRjgBw4b1GySxMb4NRzM5Q8gN7AAFPsEZ",
  },
  {
    username: "Dutch Tulipfarmer Collective",
    address: "13u2A5ca9ux9Te6ELozSEWgnUmaKBukHThe9Gi8npmxKiiBW",
  },
  {
    username: "archisinal_io",
    address: "14xeAxD7LSJQmNXn2RQcm6WTJiByv6HKn6T8fTjqX1HeCMwR",
  },
  {
    username: "Zug Capital",
    address: "1zugcapKRuHy2C1PceJxTvXWiq6FHEDm2xa5XSU7KYP3rJE",
  },
  {
    username: "Decentralized Cloud Foundation",
    address: "1EKRJey3fBmXVZS5CpLkRrEN9HxxYrXKrm7rYTxuTDKKZTz",
  },
  {
    username: "Arjan",
    address: "13gAdsLN657jP1wgpFufPdgq7j6pHfvnXTM9o5dS9xJ9baTd",
  },
  {
    username: "Batman",
    address: "16JVrgg7t6m5UXAtDBM7jYp9XjAxALRVFP6GuKVFmi9HLw8d",
  },
  {
    username: "Willy",
    address: "131cQySF87ceHM9F7JZb6rRfaGzGvX42oJKty6deyCKc5TRh",
  },
  {
    username: "FreshCredit Org",
    address: "1GmSSpNx97pLRFDVqzwvjvAQAh5NLXEoqV5EwETnBQyaNc9",
  },
  {
    username: "subotic",
    address: "13eYgKKXYYbLYQNF9sGWaJPQ72yqFPu26UPsPDFPuPPNswK8",
  },
  {
    username: "Tiago | addrops.io",
    address: "14pV6rfN2LdfT7T4HdE2vUVD5Q8PvB3Srhzm41veU4nzhSSw",
  },
  {
    username: "Leo Pham | OpenGuild",
    address: "16SvugxJmwuWB75PxnNNpnPV33t8d4XzbtweRuiQez4rQWZM",
  },
  {
    username: "Nescafeuser",
    address: "1EfzZ8ZXHhzwasdBrBca56NDCW2MFybGPHVNLAd97Sx37tY",
  },
  {
    username: "0x4c75697320f09f8c80",
    address: "14GdDf56wAE3xasZmQ3hohR2TZhcjtJB7Yx8CcrFbEy733fJ",
  },
  {
    username: "Infinity Wallet",
    address: "14MSL1MisG2HfzRnTWVqn7ZyXTzYHa3SxZEDf3XLXNZNCgmx",
  },
  {
    username: "dProp",
    address: "139R9hmnoM9nLQq9FgCUps844wYmyfA8MZeod9F6VjnJVYFr",
  },
  {
    username: "SpoonyBard",
    address: "15DsgXFnpm6MRBZdztWjQvWUnfBHkzJjZCbXzwzRXakhrZs1",
  },
  {
    username: "BINANCE_STAKE_11",
    address: "1ZKHNRib33noQn1FpjFsPCHuVYUfci5TXy4Lif1FcUUwZe6",
  },
  {
    username: "Betty",
    address: "12W9pufuBpCBtKTCFrBwAsqKCFgxoXtaw1sKsPqFSijZ4sc1",
  },
  {
    username: "just",
    address: "16FaRkfVKB281MCC4iT3VFjLTCHzcbPLvPq21F8WdquT1pdA",
  },
  {
    username: "gutomartino",
    address: "12n2XnybF5wjmYP3AWg4DCLrMe9AyGKsFN84WTuV9TJeDsQU",
  },
  {
    username: "0x494e20535042202d20f09f8dbef09fa582f09f8db7f09f8db9f09f8db8",
    address: "15x1gKGjYQQi42D4ER8Wvn4gGDQn8FBTqU9faBum27CCsLQY",
  },
  {
    username: "Irina Karagyaur",
    address: "16XYgDGN6MxvdmjhRsHLT1oqQVDwGdEPVQqC42pRXiZrE8su",
  },
  {
    username: "Blockchained India",
    address: "126jig5aDPSkrR6dkdZY3smcPHAbq7GAQyDSwf4KpPgCNZGu",
  },
  {
    username: "Polkadot Charity Foundation",
    address: "169HEHC6k2aWPEar4bw15euKhUEatFaMZLrtungjynaujkBn",
  },
  {
    username: "Kbconsulting45",
    address: "15Ji2dSWZ2DtdFzMNjRzpkFyvgpdHoWamyHtR3em7SvNXL3W",
  },
  {
    username: "Gavun Wud",
    address: "13BV45b5dHe3EAsVJ3qDq4VA671nwyyk51UU31no7Kx1CCnF",
  },
  {
    username: "0x4172747572204775696d6172c3a36573",
    address: "11JnzVsUD76cmYsG95KBLHyTahyYZCxgRiuq8p6gPikGoQs",
  },
  {
    username: "Poland DAO OpenGov Bot",
    address: "13BroSjop8N1QGc11fotXEqUrmy1qWBzX9enobBg9XYkfBdj",
  },
  {
    username: "Mark Ryan - Events Signatory",
    address: "12uRdiaA7utebXJBBgDNCPswvTxzTdHLd8hZDUJWL1rwcvzz",
  },
  {
    username: "skullz",
    address: "14QRqymDrSbmxcBQnoPeWTfrwcoCkKCFYQfFZfyqNLmsfS4G",
  },
  {
    username: "m1.vc",
    address: "1Z67NP878zGsNvYF6mr1FDUUGbRxhoYa6nKxRrB7rkGnwsK",
  },
  {
    username: "xupanweb3",
    address: "1TW9Ygr9c2gQ76EZB9qyM2infUxn7Pt8CJBNQZiZ18UXSRk",
  },
  {
    username: "TEACHMEDEFI",
    address: "15wMKpVX7fuzFwAeNktK4U9skVQ1kCSH3gcniEQ1cwmukaao",
  },
  {
    username: "ZOEMC-CONTROLLER",
    address: "15qt6xDp7H13HVUkacgtix8yzxihhFkLSyysx2se6FwXhpZ8",
  },
  {
    username: "The HGA",
    address: "13NRkBCD7NLkppxoHpYrUQ6GcjNpZEWCeXFjXDgDctANBG9j",
  },
  {
    username: "FINOPS_PBA_PROXY",
    address: "15UQ1nhCRRJoWf1C4LBraqCVXS91qPiWLiWQfnS3k8Dk4R79",
  },
  {
    username: "gudu169",
    address: "153VsRNBpvc9Sg2D9AjTfBiavkSP7KL2NLVLgrV6iRWBRpFB",
  },
  {
    username: "PARITY TIP BOT",
    address: "14Sbk1RvKa9x7k8CThWoEYKA21LDduRbcivnzkDdm2WnDutM",
  },
  {
    username: "Damian",
    address: "14AuNBjTFpQTEexobEUngdiobox4do3Yf54YWArci59hWMnt",
  },
  {
    username: "IBO",
    address: "1k8LWqPsgZkkeXpDKc8mahhuR6J7FHb3XUPN2tpRLTa7RTa",
  },
  {
    username: "justadev",
    address: "1R1uvUJGF18N7xit6cZm85W5Vs67579goPpUPgpsfH7zXyL",
  },
  {
    username: "WagMedia Treasury",
    address: "14th8Bu7QNZXgQNTjrBvYodrL2Y3nTuxccmmNJNGn1zpHr8S",
  },
  {
    username: "Samst93",
    address: "1xaFiUzuMbtSsgoxgatkovBvirHYE4QNTgMbiSdFjdsq88a",
  },
  {
    username: "BREW Conference",
    address: "157HbMDJzgicoMvkTGfUQaw1XhknX8iyMU6iqwkZG7eutNJQ",
  },
  {
    username: "SydTek DAO & Women in Blockchain",
    address: "13mSw7uRcdDFHmdRoaTrofx9fof5keAukpBuHRLmGAaEyKQZ",
  },
  {
    username: "NightHawk",
    address: "1eeBEsvYXfjHzwTPYojFnf7XxmJkcTrdTzGfd6zm9fThpC5",
  },
  {
    username: "arecont.pro",
    address: "15QPhHNbW447o9J5qBpZeMKNfZQayLm3WJytr4FR6fUJppkc",
  },
  {
    username: "cream_fraiche_",
    address: "13Z2osh46mr4fJNSRcgZ74KDxEveCtGo3Ao6BqFxLjWm5VV6",
  },
  {
    username: "The Phunky One",
    address: "1t67YMM4myXZ745px9a8PNWhU8FMyYJf5uXGowuwSAnp4x8",
  },
  {
    username: "Polkadotters",
    address: "12s6UMSSfE2bNxtYrJc6eeuZ7UxQnRpUzaAh1gPQrGNFnE8h",
  },
  {
    username: "Denis Belkevich",
    address: "12gtd5aZFsL7sahXPVuf3PUnJGnRPhLks9VZip1VGbNHci5A",
  },
  {
    username: "Polkadot Dapps over Apps",
    address: "12CVCuLSreChmToWLpFb15CgzehSNrUJ29wcrMZTAZZN4MgT",
  },
  {
    username: "Blockops Network",
    address: "15qz4ZLeyXp1i4Jbx7AXiUQVCCLWVXu3dLjcTPHY3v9KGAvL",
  },
  {
    username: "Equilibrium",
    address: "123Xkz12bGr8i21V7vuMwBiMMWULGT7fhDJSxpwDXjg8aHD5",
  },
  {
    username: "RockX_Polkadot2",
    address: "1qGNHjLAmMiAaD2cfoQhh5ejtT54Lj4aERom7tphVFuJ2Eo",
  },
  {
    username: "Ditavia",
    address: "152e8g5z4qyMCtL9gYKgR1onBjrFVex4nD97ky736baWn8GK",
  },
  {
    username: "Bitcoininus",
    address: "15FqhmZmc5KJnze4V4sWWSabKoNBt1Q16vQLMNjMLAnyoKyX",
  },
  {
    username: "liamaharon",
    address: "1eK9SC7Z2QFi4es2aKQHAehcZqY7bEiprkpsT483PvVK8KE",
  },
  {
    username: "Polkadot Pioneers Prize Curator",
    address: "15AysydMuDH9XnzZsNTBezB5uLPjAGFBYtVVEu3p3MZqcSzC",
  },
  {
    username: "ferrell-code",
    address: "15zKd25HoSDPHCn1HjuuHTioXLT7PA2pZQ8gYjFsHW4r96qS",
  },
  {
    username: "0xf09f9ba1204457454c4c495220444f5420f09f9ba1",
    address: "1MrurrNb4VTrRJUXT6fGxHFdmwwscqHZUFkMistMsP8k5Nk",
  },
  {
    username: "Kamil",
    address: "123KEnwuHKiu48WsfwAX4YonGFTpkEmWS6V2WGoJA1qzBkbS",
  },
  {
    username: "DecodedUnique",
    address: "1LDPhp2CQvc6WyXZTNZ2EwCz7zvU5MXLuPuKk4nR4hG3eBw",
  },
  {
    username: "lolalovesdot",
    address: "16HrFthQnyY3QA6gGp87L2qQVtYZpGA47bKK6Uky4HDy3PPk",
  },
  {
    username: "RODRIGOHDEZA",
    address: "13xYYGtGmWFuypqtX4YH6Y1q49mMbpqyKcxoqLTSipv7SPMP",
  },
  {
    username: "AG",
    address: "13ujCsf3t2YAdAhcpcEFVoJAPRYzMLHUHEnLroQp41sJCSnm",
  },
  {
    username: "polkadot chi",
    address: "15rox1e8G2SWg6EpyfiGVoH8q63shGXpXSmp7Sz8LYsUTfuN",
  },
  {
    username: "0xf09fa6b420426f6e65205465636820f09fa6b4",
    address: "1484GyaUC2fUwwFaTckfwUvxGdjJ4msLSGK3MAxLPuAcbieW",
  },
  {
    username: "hoangvm",
    address: "13W8y4PjYFLxXWbVXGmSPwhMbFJ9Gu6Wo95bJuwqDaWAKWVe",
  },
  {
    username: "the hodlfather",
    address: "13pgVrB53DyS7wLeGWkDYUSBYBTageJDjEqXLqxsqJBismsV",
  },
  {
    username: "Polkadot Insider",
    address: "15zYKZBpcp1ZWQcQJVKjQt7qVst1AWtTukDAgtCwqw65PAhc",
  },
  {
    username: "Doinglifewell",
    address: "14QVZVSc1T7Gi55EL25LJfN5xDuCkdRNwPda4ZUvwMvJBC2g",
  },
  {
    username: "Merkletribe",
    address: "1DqmpZB6NSuacmAyWwyRR7W8MziuoEWbQQtNJBoPCNbTpkb",
  },
  {
    username: "Enzoro",
    address: "1q14G2evG5w34dR6YdSuPbkjP5JAourGASmDXYN1Bzn1z9E",
  },
  {
    username: "[agallini]",
    address: "13bHHJBUT6MdF1NxEYsn5QPQR6h3UPy7keagHtRvcLPrbAM5",
  },
  {
    username: "Mitch-Wariner",
    address: "16UvTJteZiHfoGjzMK5fAxwZd3wkbsFb2C1SKsMLCtxRhNWv",
  },
  {
    username: "prematurata",
    address: "155tk9HmeJGsNZtA5LFasSCGZCdpAb2P2Gs6ej9JeP38sAww",
  },
  {
    username: "BlokBrokerage",
    address: "14Vt9Mhawrx2cLk1GRr6vjaDVCttEuzSN8onrciWDkrnHCfD",
  },
  {
    username: "BabesPapes(DOT)com",
    address: "15VRHQD9B2bhzjRxadArYu92uWPrE3GmvFb4NjqUNMqfhgUs",
  },
  {
    username: "AGGREGATE.OPA",
    address: "12zwBhLimApc5hBLvuhQnEtqUt3m4K2gC2jsyWjrPxgU2Pvb",
  },
  {
    username: "spazcoin.",
    address: "12TA6UQz1ruT1T9MeHATaaXMLypJwZBRhsk3Jw4ayVY9UWcD",
  },
  {
    username: "VLADIMIRPRO",
    address: "129QVy2hCC4fdLsjK7d6vt6DrT6Mj8A3M4nr8oL1jEXcdVVm",
  },
  {
    username: "Tokenguard Beneficiary",
    address: "15igbpTDxNn6HK3hBv7eaEXrGVPDn9PcQRbJBcKdLjuFpEBp",
  },
  {
    username: "doctorchin",
    address: "16Dnhs9A3Keut2VX6vgGmM8e6aTYnhdd7aZC7pcHTUgdVnRW",
  },
  {
    username: "Patika inc",
    address: "12vLtKDK1LWvSsGovovZDSv7yzHoXsmhGa67CeHXW4zhThNP",
  },
  {
    username: "Crowd Account",
    address: "13zFwhmdyn1Ymrqkz9nzQZ8mn4Zuv5bknR2WDjux2XzDtPW3",
  },
  {
    username: "Hashed Network",
    address: "13xTyGGzQofHURGRxw9L6bx19C974BDy5eq8nSdJM9vNCy6j",
  },
  {
    username: "Eyasu",
    address: "12C8pqkWqPvG2EFpxBZTMkcY5GnRJgZZr441DRBfWHfz5k2d",
  },
  {
    username: "Strikeforce",
    address: "12e53fA81k1NUCVMJoaWbaWxkSgWMumCpGpZJWaz7ae7navg",
  },
  {
    username: "Hutch - Controller",
    address: "14oK8ctVWT9D1xdaN3hcHz5RBMDFfzQ6vXBpNaZj8v83TnWA",
  },
  {
    username: "OnFinality.io",
    address: "15rb4HVycC1KLHsdaSdV1x2TJAmUkD7PhubmhL3PnGv7RiGY",
  },
  {
    username: "Ledger 1",
    address: "16gLY7g6foKi2xvhB5wPDPTLRxehe5yivup5MPeN7VMksiYP",
  },
  {
    username: "Exiled Racers",
    address: "13ijWGM4g7oyk4H8bKz15cZM4MNuPxV5FLzoJ9fzUfUwRKWV",
  },
  {
    username: "TransX",
    address: "1FDjr74RUwB2syVjqNWbTCfPzy8VwxktvNsaYMmMaivRU2A",
  },
  {
    username: "Victor Mezrin",
    address: "15wXV9SZoocCaEx8yK9WXLX99kzRNgvx6GUVw7jrP66Un1gh",
  },
  {
    username: "Green Cloud",
    address: "1HtWJy6zTTc6Y1hyRTVpM6MDCpiWknsjDssUPC3FTKjfAGs",
  },
  {
    username: "SoyPolkadotCom",
    address: "18MUxKCjWSMJQcDgsRMyepAWoKoDhHkrp81QDvMfH4PoVqY",
  },
  {
    username: "Sensei",
    address: "1mx9gKS9DE4H9dvyxCWKMvuKw8bTDu2cgCcFbKNAhYHwyjD",
  },
  {
    username: "RORY",
    address: "13qSiEisZruAqaVpot5E5taWih65Ynkza8F4X9Lid53GSPeB",
  },
  {
    username: "Benshigeru DAO",
    address: "16NEjygPCe4kS1pXHuTTa59TVCGpeE97KKZmqo5PtqaBTGmx",
  },
  {
    username: "William (Talisman)",
    address: "19hS7SYg93vvQaiiF47Tr6gRcrykKbdPtCaPSQkm9p73Jzy",
  },
  {
    username: "Healthy Pockets",
    address: "12EeiRvcS8txZsrdxTz4Simw3iEmb8E7SYgohgDotHbwCZZK",
  },
  {
    username: "CRYPTO JACK SPARROW",
    address: "12ucCMa5wxbiCzYBWLUSz5A4oMKdB6Awsg4hc9VX9exnCVHz",
  },
  {
    username: "Toto Crypto",
    address: "16CpDmroXvmtVdL2FLzBCUPdRKm7qn2Q22hX1gDGmq1mEe11",
  },
  {
    username: "TRUJI",
    address: "13b9ma3upMwM4CZSEX2tZbaRYD8TxQtJFnwYouqjNxy7tsEH",
  },
  {
    username: "v0d0l0",
    address: "14fezsyX7rEWmo1NcYp6HVnug1dmA9irwpG5J8MKLUzXZccz",
  },
  {
    username: "Salina Dev",
    address: "13H7pG4j7XJ91cEhWf9Mpauy3wddfeDjEpq5jPBKCYb45Hzp",
  },
  {
    username: "Danpullo",
    address: "12Z1gJ6q19h5AK4Atqb4Dy5cE4HwffL4dbgyZ7SnruNVwbHk",
  },
  {
    username: "Regency-011",
    address: "15rctLL2FBEhSVZFKdLisJCvaVpwgD6vgVigmCAr44C9Fo3p",
  },
  {
    username: "RUBROSSAN",
    address: "16tVrt1LhkLFbGo9Uys3WXdj7SPeL67LgCAvB6UXcSvZkwz",
  },
  {
    username: "Apillon MKT",
    address: "16S3njvU8XdzBbdi7QZpjB3QQyJF3MMuSyMsG2xVdDTtxYEf",
  },
  {
    username: "MEADOW",
    address: "1411DNB4MtSePxsnaQ8qsnTNnp4JYvaMzc5TCegkwnydpG6N",
  },
  {
    username: "DotKing",
    address: "1kBvtygg26H7rwY7Qn9C4r4JnLWuptCH2ZqXpBX7qZVEyGq",
  },
  {
    username: "kaichao",
    address: "15vt3Kjw56J2svXutt8dnt9kb758db1cX3syTCyiEiJhMZUE",
  },
  {
    username: "JULIO",
    address: "13rYAq5BHdhj4wxomEJf7mV2F3cP9EsvhpzTThUBRqk5uXAC",
  },
  {
    username: "ACOB Jason",
    address: "14Vb1GRRERYeSXyJWqNshufpFqSQpVSCsmuQcNdVGgoLTURy",
  },
  {
    username: "SRLabs",
    address: "15aPQ8NRfgTHhMV436JZeVGQTCAQrCak7mGCDP3inJjRpV57",
  },
  {
    username: "Spacewalk | Polka Haus",
    address: "16g54fqHVV5i2M7abDn9MuJRwkzwEfWdBqQq7h8bwXDQykTK",
  },
  {
    username: "ChaosDAO Events Bounty Proxy",
    address: "13DxmMjYqto1AWsMUSkN8JYNHX6d2vBhuSmapB5iYnEiYaxX",
  },
  {
    username: "CroutonDigital-1",
    address: "15PhKsje5DLm5CWqRhFz1YeS3WA94Ui8xMcihfFjbCPidisS",
  },
  {
    username: "elizabeth",
    address: "165wJzybiNv9VVUypbNRiK5WPKZABTQ5hCFNr9qTAgNCJR12",
  },
  {
    username: "ZKV",
    address: "15KRgf9qoRWodsws7REF1WXpsaJDys1igLf7rEaHWndTDasF",
  },
  {
    username: "Web3Go",
    address: "13TG9tKscKNpiVYaibKovyC1MPFMrba9psYMWY4pPVDtVErQ",
  },
  {
    username: "0xf09faaac2054616c69736d616e20476f762044656c6567617465",
    address: "16Jsiq2Pjdn2D8roxjY8MxWUpsyBv4pvUe7g5tP1m38xC9Pu",
  },
  {
    username: "0x526f73c5a561",
    address: "13QPPJVtxCyJzBdXdqbyYaL3kFxjwVi7FPCxSHNzbmhLS6TR",
  },
  {
    username: "Melodyc",
    address: "1bvCxegzVfz57wqWXYhJeLY4QRtkRAacGSVZfvz8FEyDR1E",
  },
  {
    username: "talisman.xyz",
    address: "15zS1NXMHucBDYhzEdg8W83EYgqfnzg5X3gdS3iQQYJxAsxa",
  },
  {
    username: "Gus Polinski",
    address: "14fvNFi4zCLL96RssBYdf2gsKMBUhqX1UChuDJntJEFxYwmL",
  },
  {
    username: "minhngoc",
    address: "133wRJGJKGN1Gokf14vQmA9umyDEbKNJ9LLgqeA4fK7TvrVm",
  },
  {
    username: "135 CAPITAL INCORPORATED 03",
    address: "15Mcw6nVXvNheCtUtGg9NFJRmzGuLGYckiZibj11JddHMXgM",
  },
  {
    username: "Tribe/AngelHack",
    address: "13Ghf2T883ZobjngC1BAgR1BWvK2P7qP37gGxHDVFf3fjbmw",
  },
  {
    username: "Vincent",
    address: "14YiAL4VorYd2mXUmfsx2hbsx5MqumxdyEVxHg8LNRWccRor",
  },
  {
    username: "Fredy | DragonStake",
    address: "15oNUg4X9DyWbgNn9TDeUaUwJphh1AuXdFCofGi6uMSuwTrD",
  },
  {
    username: "wario",
    address: "15QNS6ZDTqd6DeHNdHihcrpoA1R824ituiPGffxRW2zfc8US",
  },
  {
    username: "SUCH FINTECH STAKING",
    address: "1KPeYhx2k2D4Fy7iw9CSykbTYN1UbtYxHpBceL85xQhAJdo",
  },
  {
    username: "1WEB4",
    address: "16gSwMe2wssiyVY4fLj6AQex1UZZuKPWhHcG5DYj8xtkdxR9",
  },
  {
    username: "Michal@AlephZero",
    address: "15aDcCgxcWtizDirZ6gms1ihvHihvKbntkJeZmojjpq3337q",
  },
  {
    username: "Nexcoin",
    address: "1urdBmkSFsT8tpesWTMMATqw13RM8WxW6zCTUdnnSHEo8dG",
  },
  {
    username: "Cable-X",
    address: "15nyjU7BusKUE9Z4sJyTannAj8DY1NyHCjsyjsRZuHQ8QjVp",
  },
  {
    username: "IBP Proxy",
    address: "1EkXxWpyv5pY7t427CDyqLfqUzEhwPsWSAWeurqmxYxY9ea",
  },
  {
    username: "Pedro Loureiro",
    address: "14MDgXxwe3gW55V433XWo2FfRD5avPDJCUppMNH1zzHs4yXm",
  },
  {
    username: "Unique Network",
    address: "14bEKMdGLwGKNTz4BtT7venXZ4RcXdGfBSdEYrJLPNoHRvoK",
  },
  {
    username: "Chainalysis Legal",
    address: "12RKkDYuubEh1cxitt5ho8VSkCHSGdctFzD5C6K2jGCPXVnf",
  },
  {
    username: "ZKV",
    address: "138X7AdRKX7myWMwoFgWfHj1WUZKKZrKTr2CZ8pGUUXTrkDu",
  },
  {
    username: "grehei polkadot Gr",
    address: "14tecGFzyEd5omn7RGifn5yyngZrnoCcLWNG3e7FjVZJzvZk",
  },
  {
    username: "Zetetic Validator",
    address: "152cdecr7tagcB2t63dvjBnxV5j7YDW8PpbfX7orXj6ZQFWG",
  },
  {
    username: "Kaioh",
    address: "16FY7NvypFCA9ZZEkS78u9ug3U4PGV41ABDANkcEEEBxW2or",
  },
  {
    username: "ZKV",
    address: "14pU6dcr5jgMpFZDGB1fwcU6LztP5pszTk5mYz8nUXBu59mU",
  },
  {
    username: "SUNSHINEAUTOSDOT",
    address: "1EheUmzB58Y26i8hse4EJo9ffG3M5qmhHzrFXJMQLkY9HoX",
  },
  {
    username: "Sebastian",
    address: "1xxTREBmX2enMCCKCL7GqtZ91RymseSWWB4iKtTq83Xuody",
  },
  {
    username: "RTTI-5220 (POLKADOT)",
    address: "1hCMdtRsaRA4ZTEKpPKPvEjK9rZpGhyFnRHSDhqFMCEayRL",
  },
  {
    username: "KokoL",
    address: "126uimsLf3xV4BdPWFVntD49ANsN4vJvV8o5SCdRXiUwYS9f",
  },
  {
    username: "REEEEEEEEEE DAO",
    address: "13du3Rt2CAV9L1v1QXTeYosuKaiBSYiPWpa2B4nxzfSdEAF1",
  },
  {
    username: "Address Labs",
    address: "16DbaGcGH7amSV2zzmsRWafWDMUqAnA17zQ19nejWJDFG54v",
  },
  {
    username: "openbitlab",
    address: "13pYWKctR5s8vQuyZt3pxQXue4SRH9coyAS9S9z5HtogAnhs",
  },
  {
    username: "TRG | Digital Innovation Fund",
    address: "1sq3GxsQT2omrKYJXTVjgkmshEjyG4co7Qz6AZik79HqkyU",
  },
  {
    username: "Akhilaaron",
    address: "1vANhz7NmEqaAAXuXEP3goJamfu4vrNjC2s8WB1ofPiUMdd",
  },
  {
    username: "cwchua",
    address: "12wxhWJyTRmt3FqsEKbDK1QpwHh6F7RdhmEBnntQDhF7VJGk",
  },
  {
    username: "datdot.org",
    address: "14KXVoQyrVBBLHBfzWTTLFm1c5VTzzB3m77ond1oaqhu9qSR",
  },
  {
    username: "Mr Domut",
    address: "13dqoLfnth7wfBDfGRZhb6kS17zxgE9tnASUGP5z2aSYfAUt",
  },
  {
    username: "Polka Explorer",
    address: "1UMkb6QoCjEFdt3rAwXXXKwyGBVyk1yj7viRRKtr2T6Rv56",
  },
  {
    username: "HM MARS",
    address: "14BCPRCFghUAPRXXjcwy1KmUQcDbQtfEX9Eo9BzVotRytquT",
  },
  {
    username: "angeweb3",
    address: "16JK7LdoTGVoQy42YUiQcKjn1jz5WgUWjTENpGdFhg3PGX9X",
  },
  {
    username: "9Stake by 9GAG",
    address: "1x9GAG2hXoMt3i7jL7vTZLpdhNGyjffgQUwe8GU9HhhH62e",
  },
  {
    username: "MathCrypto",
    address: "16CxXYoq9joofWE13zWuWBfd4tx3kQhXJECLLkhMLgWjYyHG",
  },
  {
    username: "QuantNode",
    address: "12ivnKjeqVtyncmAHvrYu1NWL2ayaHU4Q76n9EtkbZFjPoZ4",
  },
  {
    username: "Stake.Works",
    address: "1ZZWrSTr945a94PfAusCfCp5bc45FV5HGaJb4RM4ecifVnC",
  },
  {
    username: "BD_TS_Bounty",
    address: "1eMBwkw6UBc8LK1e9ykvkHzzeJ19PyUsJpjbifmhsnrkVt7",
  },
  {
    username: "anvel",
    address: "12pHJra8Wm8TKmUhVjDJgcWbYQm5q7BPtzm7mmZGaJHBcf7u",
  },
  {
    username: "GlobalLedger.io",
    address: "17SMicTfu1RFH33oQsm9pLVmT6co34skcmTY5ipGNoJjZ4d",
  },
  {
    username: "Chris@OAK Network",
    address: "124TU2Mp6wZvbr3mQoyq6fi7zRrC8nP31PT3SUNBZScning3",
  },
  {
    username: "Polka Rico",
    address: "14vMaMxcuBbuCiNkNCfNWBab2VcUM64dWXGE7ZFqTdSzYuGk",
  },
  {
    username: "JayCee",
    address: "12dSASN7Pt4JMXY9xDeAUqQYjHbdXmfVhrWMa9eKGpFn4H9k",
  },
  {
    username: "Darrell - Polkadot Acala",
    address: "123pcNHAcfko2p579eMupi4BmPBFFa7LFMHiaANvCKR76EZR",
  },
  {
    username: "six",
    address: "15fHj7Q7SYxqMgZ38UpjXS8cxdq77rczTP3JgY9JVi5piMPN",
  },
  {
    username: "Shika_wpw",
    address: "14gWj96Rg9TrdLJYZ5YgPKVcoSh1WQoajQhR4L36f1QU9DTo",
  },
  {
    username: "dastansam",
    address: "16FqwPZ8GRC5U5D4Fu7W33nA55ZXzXGWHwmbnE1eT6pxuqcT",
  },
  {
    username: "Marcus' Dot wallet",
    address: "1463EGrQyJr63yaWiS1Q8gAsnEytTRZ6X4JNpNxHKhS2U6wd",
  },
  {
    username: "HypeLab",
    address: "14GpfK6BT8yC2WWMMPrv5F1etg4yw77ACYsDWCLdyYcTdX1h",
  },
  {
    username: "WebZero V2 Multisig",
    address: "125hDLmQApLutC9S1VQSnvFxk52iMCgyBfQtvk3hA57kzCPc",
  },
  {
    username: "PureStake",
    address: "14bPJW942tZLqcoHUgyxJ2FiJJYkw3N2iRMm5RVwKpeBkA8p",
  },
  {
    username: "Augusto Lara",
    address: "14Pq1NSHw7mETiRL1NJynx981dPJmzJvS2uVevMxqPXxU8Ly",
  },
  {
    username: "carlitrostes",
    address: "16AY5PGkepEVAYxidzRaP21YJR8e7jPr7eAJXPTv4GCoZecz",
  },
  {
    username: "panvadSH1",
    address: "12eKu3VtN7wm2BN8VmuJJvDyJfWNCCQg8QQVcogk5L71wtC3",
  },
  {
    username: "HopeClary",
    address: "16fUfF5mqL3cGGL3ai1CTL45UyNVTBHcbMkmuh5Va5M2yJ5p",
  },
  {
    username: "Marvin Tong",
    address: "12jpQfGZWX83aotWcjJnFktqojcc7Pq7K5CoQznkL6P2EHRV",
  },
  {
    username: "Litentry Collator 1",
    address: "165mX5tE2BtRDfR4cJ94t1r4kPUFrz2ErnxqiVQ5qYRqbd4k",
  },
  {
    username: "Autonomous Projects",
    address: "16MVQPFt325pJ74bYpCGUWjyANFDZFZP3efYyV6XReAd1Sq1",
  },
  {
    username: "s0me0ne-unkn0wn",
    address: "13WGadgNgqSjiGQvfhimw9pX26mvGdYQ6XgrjPANSEDRoGMt",
  },
  {
    username: "Mucu256",
    address: "14Sb5XgzGpdV6XNDLo4QjD5GTVJXUZ91sRjFWDACwS9EWxK1",
  },
  {
    username: "Finsig",
    address: "167vWTbKWmJhWUitgP1hGRZfaActDyZufCVu6vqUzrhQ2pS3",
  },
  {
    username: "Generic-chain",
    address: "16iNMUDkSRPg1qR1ZXinFtUEoq7WnpmahGi9QWCBff7qqTAd",
  },
  {
    username: "Fabi",
    address: "14mR4xpU4BwYTTFNwMJ7KJ81yqNiNxGUFL4e3GxVsN27YNTE",
  },
];

export default identities;
