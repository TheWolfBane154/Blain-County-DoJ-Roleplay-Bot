module.exports.run = (bot, message, args, Discord) => {
let emb = new Discord.RichEmbed()
.setTitle("Blane County DoJ Help Command.")
.setColor("BLUE")
.setDescription("The commands apper here!")
.addField("Coming soon!")
.setFooter(`Requested by ${message.author.username}`)
message.channel.send({embed: emb})
}

module.exports.help = {
  "name": "help"
}
