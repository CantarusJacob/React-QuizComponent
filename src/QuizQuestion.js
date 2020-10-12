import React, {Component} from 'react';
import QuizQuestionButton from './QuizQuestionButton'

class QuizQuestion extends Component{
    constructor(props){
        super(props);
        this.setState({incorrectAnswer:false});
    }
    handleClick(buttonText){
        if(buttonText === this.props.quiz_question.answer){
            this.props.showNextQuestionHandler();
            this.setState({incorrectAnswer:false});
        }
        else{
            this.setState({incorrectAnswer:true});
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
            {(this.state.incorrectAnswer)?<p className='error'>Sorry, that's not right</p>:null}
        </main>
        )
    }
}

export default QuizQuestion;