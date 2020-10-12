import React, {Component} from 'react';
import QuizQuestionButton from './QuizQuestionButton'

class QuizQuestion extends Component{
    handleClick(buttonText){
        if(buttonText === this.props.quiz_question.answer){
            this.props.showNextQuestionHandler();
        }
    }
    render(){
        const answerOptionButtons = this.props.quiz_question.answer_options.map((option, index) => <QuizQuestionButton clickHandler={this.handleClick.bind(this)} button_text={option} key={index}/>)
        return(
        <main>
            <section>
                <p>{this.props.quiz_question.instruction_text}</p>
            </section>
            <section className="buttons">
            <ul>
                {answerOptionButtons}
            </ul>
            </section>
        </main>
        )
    }
}

export default QuizQuestion;