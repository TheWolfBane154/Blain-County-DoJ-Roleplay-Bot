module.exports.run = (bot, message, args, Discord) => {
let author = message.author
let slapee = message.mentions.members.first();

let em = new discord.RichEmbed()
.setTitle("Error")
.setDescription("Oopsie Woopsie")
.addField("Error:", "You can not slap thin air.")
.addField("Fix:", "Ping someone too slap.")
if(slapee = null) {
  message.channe.send({embed: em})
} else message.channel.send(`**${author} slapped ${slapee} with a raw fish.**`)
}

module.exports.help = {
  "name": "slap"
}
