import { useState } from 'react';
import { Bot, X, Send, Sparkles, MessageCircle } from 'lucide-react';
export default function ChatAssistant({open,setOpen}) {
  const [messages,setMessages] = useState([{from:'bot',text:'Hi! I’m your SafeTrip assistant. Ask me about planning a safer journey, using SOS, or sharing your location.'}]);
  const [input,setInput] = useState('');
  function send(e){e.preventDefault(); if(!input.trim()) return; const q=input.trim(); setMessages(m=>[...m,{from:'user',text:q},{from:'bot',text:'I can help you plan and understand safety features. For urgent danger, use the Emergency SOS page and contact local emergency services. This demo assistant is not connected to live emergency services.'}]);setInput('');}
  return <>
    {open && <section className="chat-panel"><header><div className="chat-avatar"><Bot size={19}/></div><div><b>SafeTrip Assistant</b><small><span className="online-dot"/> Here to help</small></div><button aria-label="Close chat" onClick={()=>setOpen(false)}><X size={19}/></button></header><div className="chat-messages">{messages.map((m,i)=><div key={i} className={'chat-bubble '+m.from}>{m.text}</div>)}<div className="chat-suggestion"><Sparkles size={13}/> Try: “How do I share my location?”</div></div><form className="chat-form" onSubmit={send}><input value={input} onChange={e=>setInput(e.target.value)} placeholder="Ask SafeTrip AI..."/><button aria-label="Send message"><Send size={17}/></button></form></section>}
    <button className="chat-launcher" onClick={()=>setOpen(!open)} aria-label="Open AI assistant">{open?<X size={22}/>:<><MessageCircle size={21}/><span>AI Assistant</span></>}</button>
  </>;
}
