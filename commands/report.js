module.exports.run = (bot, message, args, Discord) => {
let ja = args.join(" ")
let ru = message.mentions.members.first();
let emb = new Discord.RichEmbed()
.setTitle("Report")
.setDescription("Created report")
.addField("Reason for report:", ja)
.addField("Reported user:", ru)
.setColor("RED")
message.channel.send("Thank you for the report. An Admin+ will review it when they can!")
bot.channels.get("522387905805680640").send({embed: emb}).then(function (message) {
message.react("✅")
message.react("❌")
})
}

module.exports.help = {
  "name": "report"
}
