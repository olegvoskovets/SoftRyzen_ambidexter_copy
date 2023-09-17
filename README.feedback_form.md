[<-- Back](./README.md)

## Feedback form

The following was used to create the feedback form:

- ["React Hook Form"](https://react-hook-form.com/get-started/#Quickstart)

- Form validation using a
  [regular expression](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_expressions).
- Also instructions from react hook form
- The self-written "Loader" component serves as a loader.
- A warning about a failure to send the form occurs via standard messages.

## Telegram API

You need to create a bot using ["BotFather"](https://t.me/botfather), after that
the bot will receive its token, which we add to the .env file. Then we create a
group and/or add to an existing one, where messages will come after sending the
form.

We give our bot group administrator rights. Using the ary request, we get the ID
of our group, which we also add to the .env file.

To send a message from the feedback form, ["axios"](https://axios-http.com/),
the post method, was used.

```bash
import axios from 'axios';

export const sendMessageTelegram = text => {
  const url = `https://api.telegram.org/bot${process.env.NEXT_PUBLIC_TELEGRAM_API_KEY}/sendMessage?chat_id=${process.env.NEXT_PUBLIC_TELEGRAM_DIALOGUE_KEY}`;
  const data = axios.post(url, {
    parse_mode: 'html',
    text,
  });
  return data;
};
```

- Video example how to do it here.
  [Video](https://www.youtube.com/watch?v=R4RhgBJpXSQ) on the creation TG-Bot.
- Bot API [Guide](https://tlgrm.ru/docs/bots/api).

Feedback service with Telegram-bot. Functioning of the feedback service through
the Telegram bot It is necessary to configure
([environment variables](https://nextjs.org/docs/pages/building-your-application/configuring/environment-variables)):
we create files .env.production and .env.development in the project directory
according to the example of the file .env.template, where
NEXT_PUBLIC_TELEGRAM_API_KEY will be the token of the created Telegram bot, and
NEXT_PUBLIC_TELEGRAM_DIALOGUE_KEY will be the identifier of the chat with the
bot, in order for the changes to be absorbed, you need to restart the server

---

Useful links [Next.js](https://nextjs.org/)

[<-- Back](./README.md)
