let handler = m => m

handler.before = async function (m) {
   if (m.sender.startsWith('212' || '212')) {
   	global.db.data.users[m.sender].banned = true
   }
   
   if (m.sender.startsWith('265' || '265')) {
   	global.db.data.users[m.sender].banned = true
   } 
    }
   if (m.sender.startsWith('90' || '90')) {
   	global.db.data.users[m.sender].banned = true
   } 
    }
    if (m.sender.startsWith('91' || '91')) {
   	global.db.data.users[m.sender].banned = true
   } 
    }
    if (m.sender.startsWith('92' || '92')) {
   	global.db.data.users[m.sender].banned = true
   } 
    }
    if (m.sender.startsWith('968' || '968')) {
   	global.db.data.users[m.sender].banned = true
   } 
    }
    if (m.sender.startsWith('52' || '52')) {
   	global.db.data.users[m.sender].banned = true
   } 
    }
    if (m.sender.startsWith('54' || '54')) {
   	global.db.data.users[m.sender].banned = true
   } 
    }
    if (m.sender.startsWith('55' || '55')) {
   	global.db.data.users[m.sender].banned = true
   } 
    }
    if (m.sender.startsWith('51' || '51')) {
   	global.db.data.users[m.sender].banned = true
   } 
    }
    
module.exports = handler
