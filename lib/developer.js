const developer = (prefix) => { 
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
  ├─ ❏ ${prefix}info
  ├─ ❏ ${prefix}snk
  ├─ ❏ ${prefix}lpr 
  ├─ ❏ ${prefix}request
  ├─ ❏ ${prefix}blocklist
  ├─ ❏ ${prefix}ping
  ├─ ❏ ${prefix}buypremium
  ├─ ❏ ${prefix}hargaprem
  └─ ❏ ${prefix}gcshizuka     
  
◪ *OWNER*
  │
  ├─ ❏ ${prefix}setprefix
  ├─ ❏ ${prefix}setreply
  ├─ ❏ ${prefix}setlimit
  ├─ ❏ ${prefix}addlimit
  ├─ ❏ ${prefix}giftlimit
  ├─ ❏ ${prefix}setmemlimit
  ├─ ❏ ${prefix}setppbot
  ├─ ❏ ${prefix}premium
  ├─ ❏ ${prefix}unpremium
  ├─ ❏ ${prefix}admin
  ├─ ❏ ${prefix}unadmin
  ├─ ❏ ${prefix}ban
  ├─ ❏ ${prefix}unban
  ├─ ❏ ${prefix}bc
  ├─ ❏ ${prefix}block
  ├─ ❏ ${prefix}unblock
  ├─ ❏ ${prefix}setprefix
  ├─ ❏ ${prefix}event [1/0]
  ├─ ❏ ${prefix}clone
  └─ ❏ ${prefix}clearall
  
◪ *ADMIN*
  │
  ├─ ❏ ${prefix}event
  ├─ ❏ ${prefix}bcc
  ├─ ❏ ${prefix}bann
  ├─ ❏ ${prefix}unbann
  ├─ ❏ ${prefix}blockk
  ├─ ❏ ${prefix}unblockk
  └─ ❏ ${prefix}giftlimit`
}

exports.developer = developer
