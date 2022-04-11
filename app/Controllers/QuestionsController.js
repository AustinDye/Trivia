import { ProxyState } from "../AppState.js";
import { questionService } from "../Services/QuestionService.js";
import { Pop } from "../Utils/Pop.js";

function _drawQuestion(){
    let template = ''
    ProxyState.questions.forEach(q => template += `
    <div class="card">
     ${q.category} <br> 
     ${q.question}
      <button class="btn btn-info">true</button>
      <button class="btn btn-danger">false</button>
      </div>`)
    document.getElementById('questions').innerHTML = template
}

export class QuestionsController {
    constructor()   {
        this.getQuestions()
        ProxyState.on('questions', _drawQuestion)
    }

    async getQuestions() {
        try{
            await questionService.getQuestions()
        }
        catch(error){
            Pop.toast(error.message, 'error')
            console.log(error)
        }
    }
}