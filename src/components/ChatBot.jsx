import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';
import { MainContainer, ChatContainer, MessageList, Message, MessageInput, TypingIndicator} from "@chatscope/chat-ui-kit-react"
import { useState } from 'react';

const API_KEY = "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" // please don't use mine :(

const ChatBot = () => {
  const [typing, setTyping] = useState(false)
  const [messages, setMessages] = useState([
    {
      message: "Ask me anything about global warming!",
      sender: "ChatGPT"
    }
  ])

  const handleSend = async(message) => {
    const newMessage = {
      message: message,
      sender: "user",
      direction: "outgoing"
    }
    const newMessages = [...messages, newMessage]
    setMessages(newMessages)
    setTyping(true)

    await processMessageToChatGPT(newMessages);
  }

  async function processMessageToChatGPT(chatMessages) {
    let apiMessages = chatMessages.map((messageObject => {
      let role = "";
      if (messageObject.sender === "ChatGPT") {
        role = "assistant"
      } else {
        role = "user"
      }
      return { role: role, content: messageObject.message }

    }))

    const systemMessage = {
      role: "system",
      content: "I am very curious about everything on global warming."
    }

    const apiRequestBody = {
      "model": "gpt-3.5-turbo",
      "messages": [
        ...apiMessages
      ]
    }

    await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": "Bearer " + API_KEY,
        "Content-type": "application/json"
      },
      body: JSON.stringify(apiRequestBody)
    }).then((data) => {
      return data.json();
    }).then((data) => {
      setMessages(
        [...chatMessages, {
          message: data.choices[0].message.content,
          sender: "ChatGPT"
        }]
      );
      setTyping(false)
    })
  }

  return (
    <div className="ChatBot">
      <div style={{position: "relative", height: "350px", width: "100%",}}>
        <MainContainer>
          <ChatContainer>
            <MessageList typingIndicator={typing ? <TypingIndicator content="Typing" /> : null}>
              {messages.map((message, i) => {
                return <Message key={i} model={message} />
              })}
            </MessageList>
            <MessageInput placeholder='Type your question here!' onSend={handleSend} />
          </ChatContainer>
        </MainContainer>
      </div>
    </div>
  )
}
export default ChatBot