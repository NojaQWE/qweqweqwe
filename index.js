const { MessageEmbed } = require("discord.js");
const ayarlar = require("./ayarlar.json");
const Discord = require("discord.js");
const client = new Discord.Client();
const dbuttons = require("discord-buttons");
dbuttons(client);
const { MessageMenu, MessageMenuOption } = require('discord-buttons');
client.on("message", async message => {
    let prefix = ayarlar.prefix;
    if(message.content.startsWith(prefix + "menu")) {
        if(message.author.bot) return;
        let secenek1 = new MessageMenuOption()
        .setLabel("Abone Ol")
        .setValue("ABONEOL")
        .setDescription("Kanalıma abone ol.")
        .setDefault()
        .setEmoji("🔴")
        let secenek2 = new MessageMenuOption()
        .setLabel("Like At")
        .setValue("LIKEAT")
        .setDescription("Videoya like at.")
        .setDefault()
        .setEmoji("🔵")
        let secenek3 = new MessageMenuOption()
        .setLabel("Bildirimleri Aç")
        .setValue("BILDIRIM")
        .setDescription("Kanalımın bildirimlerini aç.")
        .setDefault()
        .setEmoji("🟡")
        let secenek4 = new MessageMenuOption()
        .setLabel("Yorum Yap")
        .setValue("YORUMYAP")
        .setDescription("Videoya yorum yap.")
        .setDefault()
        .setEmoji("⚪")
        let secenek5 = new MessageMenuOption()
        .setLabel("Sen Kralsın")
        .setValue("KRALSIN")
        .setDescription("Kralsın krall <3")
        .setDefault()
        .setEmoji("👑")
        let menu = new MessageMenu()
        .setID("MENU")
        .setMaxValues(1)
        .setMinValues(1)
        .setPlaceholder("Bana tıkla ve bişeye bas ._.")
        .addOption(secenek1)
        .addOption(secenek2)
        .addOption(secenek3)
        .addOption(secenek4)
        .addOption(secenek5)
        const embed = new MessageEmbed()
        .setTitle("Menü mü?!")
        .setDescription("Evet menü. Birini seç.")
        .setFooter("tanisalim mi")
        .setColor("BLUE")
        .setTimestamp()
        let menumesaj = await message.channel.send(embed, menu)
        function menuselection(menu) {
            switch(menu.values[0]) {
                case "ABONEOL":
                    menu.reply.send("Anaaa abone oldun mu, harika !!!", true)
                break;
                case "LIKEAT":
                    menu.reply.send("Layk şelalesiiiiiiiii", true)
                break;
                case "BILDIRIM":
                    menu.reply.send("Video yayınlanınca direk koş ha, anlamı kalmaz yoksa :P", true)
                break;
                case "YORUMYAP":
                    menu.reply.send("Yorumunu okicam, söz :D", true)
                break;
                case "KRALSIN":
                    menu.reply.send("Yalan yok, kralsın <3", true)
                break;
            }
        }
        client.on("clickMenu", menu => {
            if(menu.message.id == menumesaj.id) {
                if(menu.clicker.id == message.author.id) {
                    menuselection(menu)
                }else{
                    menu.reply.send("Menü sahibi değilsin.", true)
                }
            }
        })
    }
})

client.login(ayarlar.token);
client.on("ready", () => {
    console.log("HAZIRIM!")
})