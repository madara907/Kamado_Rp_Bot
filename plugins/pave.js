const { cmd } = require('../command');

cmd({
    pattern: "pave",
    desc: "Affiche le message pour PAVE-FIGHTING",
    category: "basics",
    filename: __filename,
}, async (conn, mek, m, { from, reply }) => {

    const messageText = `
👣 *Wasuke Kamado* 👣
*_________________________________*
*💬:*

*👣:*

*_________________________________*
*🖤: 100%*
*_________________________________*
*⏭️ʀᴘɪ*
`;

    try {
        // Envoi du message avec le texte formaté
        await conn.sendMessage(from, { text: messageText }, { quoted: mek });
    } catch (err) {
        console.error("Erreur lors de l'envoi du message PAVE-FIGHTING :", err);
        reply("🙇‍♂️ Erreur lors de l'envoi du message. Réessaie plus tard.");
    }
});
