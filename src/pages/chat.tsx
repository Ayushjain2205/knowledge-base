import React, { useState, useEffect, useRef } from "react";
import Layout from "@/components/Layout";
import {
  TextInput,
  TextInputProps,
  ActionIcon,
  useMantineTheme,
} from "@mantine/core";
import {
  IconSearch,
  IconArrowRight,
  IconArrowLeft,
  IconSend,
} from "@tabler/icons-react";

const chat = () => {
  const theme = useMantineTheme();
  const bottomRef = useRef(null);
  const [value, setValue] = useState("");

  const [messages, setMessages] = useState([
    {
      author: "bot",
      message: "Welcome friend!",
    },
    {
      author: "me",
      timestamp: "12:46",
      message: "Hey there! Can you help me with something?",
    },
    {
      author: "bot",
      timestamp: "12:46",
      message: "Of course! What do you need assistance with?",
    },
    {
      author: "me",
      timestamp: "12:46",
      message: "I am trying to understand the concept of cash flow.",
    },
    {
      author: "bot",
      timestamp: "12:46",
      message:
        " Absolutely! According to Rich Dad Poor Dad, cash flow is the amount of money that comes in and goes out of your personal or business accounts. It's an important concept because positive cash flow can help you build wealth over time, while negative cash flow can lead to financial difficulties.",
    },
    {
      author: "me",
      timestamp: "12:47",
      message:
        "Thanks! Can you tell me more about the difference between passive income and active income?",
    },
    {
      author: "bot",
      timestamp: "12:47",
      message:
        "Sure thing! Passive income is money that you earn without actively working for it. Examples of passive income include rental income, dividends from stocks, or income from a business that you own but don't actively manage. Active income, on the other hand, is money that you earn by actively working for it, such as a salary from a job or income from a business that you actively manage.",
    },
    {
      author: "me",
      timestamp: "12:46",
      message:
        "Can you recommend any other books on personal finance that build on the concepts in Rich Dad Poor Dad?",
    },
    {
      author: "bot",
      timestamp: "12:48",
      message:
        "Absolutely! Some great books that build on the concepts in Rich Dad Poor Dad include The Millionaire Next Door by Thomas J. Stanley and William D. Danko, The Intelligent Investor by Benjamin Graham, and The Simple Path to Wealth by JL Collins.",
    },
  ]);

  useEffect(() => {
    // 👇️ scroll to bottom every time messages change
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const [count, setCount] = useState(1);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleSubmit = () => {
    setCount(count + 1);
    setValue("");
  };

  return (
    <Layout>
      <div>
        <h1 className="text-xl">Finance chatbot</h1>
        <div className="chat-holder mt-8 h-[600px] overflow-scroll border-black rounded-2">
          {messages.slice(0, count).map((message) => (
            <div
              className={
                message.author === "bot" ? "chat chat-start" : "chat chat-end"
              }
            >
              <div className="chat-image avatar">
                <div className="w-10 rounded-full">
                  <img
                    src={
                      message.author === "bot"
                        ? "https://i.pinimg.com/originals/02/c5/a8/02c5a82909a225411008d772ee6b7d62.png"
                        : "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/OOjs_UI_icon_userAvatar-progressive.svg/1200px-OOjs_UI_icon_userAvatar-progressive.svg.png"
                    }
                  />
                </div>
              </div>
              <div className="chat-header">
                {message.author === "bot" ? "KnowledgeBase" : "Me"} &nbsp;
                <time className="text-xs opacity-50">12:45</time>
              </div>
              <div
                className={
                  message.author === "bot"
                    ? "chat-bubble chat-bubble-primary"
                    : "chat-bubble chat-bubble-secondary"
                }
              >
                {message.message}
              </div>
            </div>
          ))}
          <div ref={bottomRef} />
        </div>
        <TextInput
          icon={<IconSend size="1.1rem" stroke={1.5} />}
          radius="xl"
          size="md"
          value={value}
          onChange={handleChange}
          rightSection={
            <ActionIcon
              className="btn-primary"
              size={32}
              radius="xl"
              color={theme.primaryColor}
              variant="filled"
              onClick={handleSubmit}
            >
              {theme.dir === "ltr" ? (
                <IconArrowRight size="1.1rem" stroke={1.5} />
              ) : (
                <IconArrowLeft size="1.1rem" stroke={1.5} />
              )}
            </ActionIcon>
          }
          placeholder="Send Messages"
          rightSectionWidth={42}
        />
      </div>
    </Layout>
  );
};

export function InputWithButton(props: TextInputProps) {
  const theme = useMantineTheme();

  return (
    <TextInput
      icon={<IconSend size="1.1rem" stroke={1.5} />}
      radius="xl"
      size="md"
      rightSection={
        <ActionIcon
          className="btn-primary"
          size={32}
          radius="xl"
          color={theme.primaryColor}
          variant="filled"
          onClick={() => setCount(count + 1)}
        >
          {theme.dir === "ltr" ? (
            <IconArrowRight size="1.1rem" stroke={1.5} />
          ) : (
            <IconArrowLeft size="1.1rem" stroke={1.5} />
          )}
        </ActionIcon>
      }
      placeholder="Send Messages"
      rightSectionWidth={42}
      {...props}
    />
  );
}

export default chat;
