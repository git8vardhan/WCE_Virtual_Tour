import React, { useEffect } from 'react'
 
const Chatbot = () => {
  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://cdn.botpress.cloud/webchat/v1/inject.js'
    script.async = true
    document.body.appendChild(script)
 
    script.onload = () => {
      window.botpressWebChat.init({
        botId: '0e5daeeb-2974-4c8b-b9d5-e3e9e99ca850',
        hostUrl: 'https://cdn.botpress.cloud/webchat/v1',
        messagingUrl: 'https://messaging.botpress.cloud',
        clientId: '0e5daeeb-2974-4c8b-b9d5-e3e9e99ca850',
        webhookId: "678bd114-5340-4c79-b934-7c7a05ca7c54",
        lazySocket: true,
       themeName: "prism",
        botName: "wce_Virtual_Assistant",
        avatarUrl: "https://www.google.com/imgres?imgurl=https%3A%2F%2Flookaside.fbsbx.com%2Flookaside%2Fcrawler%2Fmedia%2F%3Fmedia_id%3D100070060381727&tbnid=KsfwQQ5alCpB9M&vet=12ahUKEwiMvMf3vKGFAxUh-DgGHX6XDnYQMygKegQIARBo..i&imgrefurl=https%3A%2F%2Fwww.facebook.com%2Fwcesangli%2F&docid=Z_7fvnG48rU6TM&w=696&h=522&q=IMAGE%20OF%20WCE%20SANGLI%20HD&ved=2ahUKEwiMvMf3vKGFAxUh-DgGHX6XDnYQMygKegQIARBo",
       useSessionStorage: true,
      enableConversationDeletion: true,
      theme: "prism",
      themeColor: "#2563eb"
      })
    }
  }, [])
 
  return <div id="webchat" />
}
 
export default Chatbot



