module.exports.run = async (bot, message, args) => {
  message.channel.send('plase collect').then(() => {
    const filter = m => message.author.id === m.author.id;

    message.channel.awaitMessages(filter, { time: 60000, maxMatches: 1, errors: ['time']})
      .then(messages => {
        message.channel.send(`ente masukin: ${messages.first().content}`);
      })
      .catch(() => {
        message.channel.send('masukin yg bener!')
      });
  });
}


module.exports.help = {
	name: "test"
}