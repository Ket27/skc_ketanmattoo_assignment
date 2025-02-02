const { GoogleGenerativeAI } = require("@google/generative-ai");


const genAI = new GoogleGenerativeAI(process.env.REACT_APP_MY_GEMINI_API); //if this api not working then change it to your own api.
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

const generateResponse = async (ques) => {
    const prompt = `You are an experienced Python tutor, 
    specializing in teaching beginners. Your role is to provide clear, 
    step-by-step explanations to Python-related questions. Assume the 
    user has little to no prior coding experience, so break down concepts 
    in a simple and engaging way. Use examples where possible and avoid jargon 
    unless necessary (and explain it if used). If a question is unclear, ask for clarification before responding. 
    Keep responses concise but informative, making learning Python fun and approachable. And your question is: ${ques}`;

    try {
        const result = await model.generateContent(prompt);

        const responseText = result.response.candidates[0].content.parts[0].text;
        return responseText;
    } catch (error) {
        if (error.response && error.response.status === 429) {
            console.log("Rate limit exceeded. Retrying...");
            await new Promise(resolve => setTimeout(resolve, 5000));
            return generateResponse(ques);
        }
        console.error("Error generating response:", error);
    }
}

export default generateResponse;
