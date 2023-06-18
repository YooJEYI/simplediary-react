/*
const DiaryEditor 요구사항
1. 작성자, 본문, 감정 점수 입력부분 기능
*/
import React, {useState, useRef } from "react";

const DiaryEditor = ({onCreate}) => {

    const authorInput = useRef();
    const contentInput = useRef();

    const [state, setState] = useState({
        author : "",
        content : "",
        emotion : 1,
    });

    const handleChangState = (e) => {
        setState({
            ...state,
            [e.target.name] : e.target.value, 
        });
    }

    const handleSubmit = () => {
        if(state.author.length < 1){
            // focus
            authorInput.current.focus();
            return;
        }
        if(state.content.length < 5){
            // focus
            contentInput.current.focus();
            return;
        }

        onCreate(state.author, state.content, state.emotion);
        alert("저장성공!");
    };

    return (
        <div className="DiaryEditor">
            <h2>오늘의 일기</h2>
            <div>
                <input ref={authorInput}  name="author" placeholder="작성자를 입력하세요." value={state.author}
                    onChange={handleChangState}/>
            </div>
            <div>
                <textarea ref={contentInput} name="content" placeholder="내용을 입력하세요." value={state.content}
                onChange={handleChangState} />  
            </div>      
            <div>
                오늘의 감정 점수 : <space />
                <select name="emotion" value={state.emotion} onChange={handleChangState}>
                    <option value={1}>매우좋음</option>
                    <option value={2}>좋음</option>
                    <option value={3}>보통</option>
                    <option value={4}>나쁨</option>
                    <option value={5}>매우나쁨</option>
                </select>    
            </div>   
            <div>
                <button onClick={handleSubmit}>일기 저장하기</button>
            </div> 
        </div>
    );
}

export default DiaryEditor;