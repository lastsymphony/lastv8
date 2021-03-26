const help = (pushname, prefix, getLevelingLevel, getLevelingXp, sender, reqXp, _registered, uangku) => { 
	return `「 *SYMPHONY BOT* 」
◪ *INFO DEVELOPER*
  ❏ Nama: LAST SYMPHONY
  ❏ Wa: wa.me/6289670394574
  ❏ Ig: LAST
  ----------------------------------
◪ *INFO SYMPHONY*
  ❏ Nama: SYMPHONY 
  ❏ Web: 
  ❏ Web Api: 
  ----------------------------------
◪ *YOUR INFO*
  ❏ Prefix: 「  ${prefix}  」
  ❏ Nama: ${pushname}
  ❏ Uang mu : Rp${uangku}
  ❏ Nomer: ${sender.split("@")[0]}
  ❏ XP: ${getLevelingXp(sender)}/${reqXp}
  ❏ Level: ${getLevelingLevel(sender)}
  ❏ User register : ${_registered.length}
  
◪ *ABOUT*
  │
  ├─ ❏ ${prefix}
  ├─ ❏ ${prefix}
  ├─ ❏ ${prefix}
  ├─ ❏ ${prefix}
  ├─ ❏ ${prefix}
  ├─ ❏ ${prefix}
  ├─ ❏ ${prefix}
  ├─ ❏ ${prefix}
  ├─ ❏ ${prefix}
  └─ ❏ ${prefix}
  
◪ *MAKER*
  │
  ├─ ❏ ${prefix}
  ├─ ❏ ${prefix}
  ├─ ❏ ${prefix}
  ├─ ❏ ${prefix}
  ├─ ❏ ${prefix}
  ├─ ❏ ${prefix}
  ├─ ❏ ${prefix}
  └─ ❏ ${prefix}
  
◪ *MEDIA*
  │
  └─ ❏ ${prefix}
  
◪ *OTHER FITUR*
  │
  ├─ ❏ ${prefix}
  ├─ ❏ ${prefix}hilih [teks]
  ├─ ❏ ${prefix}alay [teks]
  ├─ ❏ ${prefix}say [teks]
  ├─ ❏ ${prefix}wiki [teks]
  ├─ ❏ ${prefix}kbbi [teks]
  ├─ ❏ ${prefix}map [teks]
  ├─ ❏ ${prefix}kalkulator
  ├─ ❏ ${prefix}lirik [teks]
  ├─ ❏ ${prefix}brainly [teks]
  ├─ ❏ ${prefix}bitly
  ├─ ❏ ${prefix}chord [teks]
  ├─ ❏ ${prefix}katabijak 
  ├─ ❏ ${prefix}faktaunik 
  ├─ ❏ ${prefix}pantun
  └─ ❏ ${prefix}artinama [teks]
  
◪ *FUN MENU*
  │
  ├─ ❏ ${prefix}gantengcek
  ├─ ❏ ${prefix}cantikcek
  ├─ ❏ ${prefix}sangecek
  ├─ ❏ ${prefix}gaycek
  ├─ ❏ ${prefix}lesbicek
  ├─ ❏ ${prefix}watak
  ├─ ❏ ${prefix}hobby
  ├─ ❏ ${prefix}apakah
  ├─ ❏ ${prefix}kapankah
  ├─ ❏ ${prefix}bisakah
  ├─ ❏ ${prefix}bagaimanakah
  └─ ❏ ${prefix}rate
  
◪ *DOWNLOADER*
  │
  ├─ ❏ ${prefix}1cak
  ├─ ❏ ${prefix}pinterest [teks]
  ├─ ❏ ${prefix}ytmp3 [link]
  ├─ ❏ ${prefix}ytmp4 [link]
  ├─ ❏ ${prefix}play [teks]
  ├─ ❏ ${prefix}fototiktok
  └─ ❏ ${prefix}joox [teks]
  
◪ *MEME*
  │
  ├─ ❏ ${prefix}meme ❌
  └─ ❏ ${prefix}memeindo ❌
  
◪ *FIND TARGET*
  │
  ├─ ❏ ${prefix}mutual
  └─ ❏ ${prefix}next
  
◪ *RANDOM PICTUE*
  │ *ANIME*
  ├─ ❏ ${prefix}
  ├─ ❏ ${prefix}
  ├─ ❏ ${prefix}
  ├─ ❏ ${prefix}
  ├─ ❏ ${prefix}
  ├─ ❏ ${prefix}
  ├─ ❏ ${prefix}
  ├─ ❏ ${prefix}
  ├─ ❏ ${prefix}
  ├─ ❏ ${prefix}
  ├─ ❏ ${prefix}
  ├─ ❏ ${prefix}
  │
  │ *RANDOM KPOP*
  ├─ ❏ ${prefix}
  │
  │ *CARTOON*
  ├─ ❏ ${prefix}
  ├─ ❏ ${prefix}
  │
  │ *ANIMAL*
  ├─ ❏ ${prefix}
  ├─ ❏ ${prefix}
  ├─ ❏ ${prefix}
  ├─ ❏ ${prefix}
  │
  │ *TRANSPORT*
  ├─ ❏ ${prefix}
  ├─ ❏ ${prefix}
  ├─ ❏ ${prefix}
  │
  │ *AESTHETIC*
  ├─ ❏ ${prefix}
  ├─ ❏ ${prefix}
  ├─ ❏ ${prefix}
  ├─ ❏ ${prefix}
  ├─ ❏ ${prefix}
  │
  │ *QUOTES*
  ├─ ❏ ${prefix}quotes
  ├─ ❏ ${prefix}quoteskehidupan
  ├─ ❏ ${prefix}quotesislami
  ├─ ❏ ${prefix}quotesnasehat
  ├─ ❏ ${prefix}quotescinta ❌
  ├─ ❏ ${prefix}quotesmotivasi
  ├─ ❏ ${prefix}animequotes ❌
  └─ ❏ ${prefix}twichquotes ❌
  

◪ *LIMIT & UANG & LB*
  │
  ├─ ❏ ${prefix}limit
  ├─ ❏ ${prefix}buylimit
  ├─ ❏ ${prefix}buypremiumlimit
  ├─ ❏ ${prefix}transfer
  └─ ❏ ${prefix}leaderboard
  
◪ *GROUP*
  │
  ├─ ❏ ${prefix}promote [@tag]
  ├─ ❏ ${prefix}demote [@tag]
  ├─ ❏ ${prefix}tagall
  ├─ ❏ ${prefix}
  ├─ ❏ ${prefix}
  ├─ ❏ ${prefix}
  ├─ ❏ ${prefix}
  ├─ ❏ ${prefix}
  ├─ ❏ ${prefix}linkgc
  ├─ ❏ ${prefix}mining
  ├─ ❏ ${prefix}hidetag
  ├─ ❏ ${prefix}grouplist
  ├─ ❏ ${prefix}
  ├─ ❏ ${prefix}
  ├─ ❏ ${prefix}
  ├─ ❏ ${prefix}
  ├─ ❏ ${prefix}
  ├─ ❏ ${prefix}listadmin
  ├─ ❏ ${prefix}
  ├─ ❏ ${prefix}leave
  ├─ ❏ ${prefix}mining
  ├─ ❏ ${prefix}level
  ├─ ❏ ${prefix}grup [buka/tutup)
  ├─ ❏ ${prefix}welcome [1/0]
  ├─ ❏ ${prefix}nsfw [1/0]
  ├─ ❏ ${prefix}antilink [1/0]
  ├─ ❏ ${prefix}leveling [1/0]
  └─ ❏ ${prefix}simih [1/0]
  
◪ *SOUND*
  │
  ├─ ❏ ${prefix}
  ├─ ❏ ${prefix}
  ├─ ❏ ${prefix}
  ├─ ❏ ${prefix}
  ├─ ❏ ${prefix}
  ├─ ❏ ${prefix}
  └─ ❏ ${prefix}
  
◪ *ISLAM*
  │
  └─ ❏ ${prefix}
  
◪ *STALK*
  │
  ├─ ❏ ${prefix}
  └─ ❏ ${prefix}
  
◪ *WIBU*
  │
  ├─ ❏ ${prefix}
  └─ ❏ ${prefix}
  
◪ *APK*
  ├─ ❏ ${prefix}
  ├─ ❏ ${prefix}
  ├─ ❏ ${prefix}
  
◪ *18+ Nsfw*
  |
  ├─ ❏ ${prefix}
  ├─ ❏ ${prefix}
  └─ ❏ ${prefix}
  
◪ *FUN*
  │
  ├─ ❏ ${prefix}
  ├─ ❏ ${prefix}
  ├─ ❏ ${prefix}
  ├─ ❏ ${prefix}
  ├─ ❏ ${prefix}
  ├─ ❏ ${prefix}
  └─ ❏ ${prefix}
  
◪ *INFORMATION*
  │
  ├─ ❏ ${prefix}
  ├─ ❏ ${prefix}
  ├─ ❏ ${prefix}
  ├─ ❏ ${prefix}
  ├─ ❏ ${prefix}
  └─ ❏ ${prefix}
  
◪ *OWNER*
  │
  ├─ ❏ ${prefix}setprefix
  ├─ ❏ ${prefix}setreply
  ├─ ❏ ${prefix}setppbot
  ├─ ❏ ${prefix}block
  ├─ ❏ ${prefix}unblock
  ├─ ❏ ${prefix}setprefix
  ├─ ❏ ${prefix}leave
  ├─ ❏ ${prefix}kickall
  ├─ ❏ ${prefix}event [1/0]
  ├─ ❏ ${prefix}bc
  ├─ ❏ ${prefix}bcgc
  ├─ ❏ ${prefix}clone
  └─ ❏ ${prefix}clearall
  
◪ *OTHER*
  │
  ├─ ❏ ${prefix}wame
  ├─ ❏ ${prefix}
  └─ ❏ ${prefix}
  
◪ *POWERED BY LAST*
`
}
exports.help = help



  
