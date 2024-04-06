import PromptStart from "./PromptStart.js";
const prompt = new PromptStart().PROMPT_START;
import {OpenAI} from "openai";

const openai = new OpenAI();

class PromptHandler 
{
    async processNewPrompt(text) {
        const completion = await openai.chat.completions.create({
            messages: [{ role: "system", content: prompt+text}],
            model: "gpt-3.5-turbo",
        });
        return completion.choices[0];
    }
}


export default PromptHandler;