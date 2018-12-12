module.exports.run = (bot, message, args, Discord) => {
let ja = args.join(" ")
let pu = message.mentions.members.first();
let em = new Discord.RichEmbed()
.setTitle("Logged Punishment")
.setDescription(`Logged by ${message.author.username}`)
.addField("Punishment", ja)
.addField("Punished", pu)
bot.channels.get("522386767085568000").send({embed: em})
}

module.exports.help = {
  "name": "punish-log"
}
