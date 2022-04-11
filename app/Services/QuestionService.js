import { ProxyState } from "../AppState.js"
import { Question } from "../Models/Question.js"


class QuestionService {

    async getQuestions() {
        // @ts-ignore
        const response = await axios.get('https://opentdb.com/api.php?amount=10&difficulty=easy&type=boolean')
        console.log(response)

        ProxyState.questions = response.data.results.map(q => new Question(q))
    }

}

export const questionService = new QuestionService()